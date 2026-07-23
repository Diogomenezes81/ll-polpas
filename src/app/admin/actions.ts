"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { isSupabaseConfigured } from "@/lib/supabase/config";
import { createClient } from "@/lib/supabase/server";
import { requireAdmin } from "@/lib/supabase/auth";

export type LoginState = { erro?: string };

export async function login(_: LoginState, formData: FormData): Promise<LoginState> {
  if (!isSupabaseConfigured()) {
    return { erro: "Conecte o projeto Supabase para liberar o acesso." };
  }
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) return { erro: "E-mail ou senha inválidos." };

  const { data: claims } = await supabase.auth.getClaims();
  const { data: admin } = await supabase
    .from("admin_users")
    .select("ativo")
    .eq("user_id", claims?.claims?.sub)
    .eq("ativo", true)
    .maybeSingle();
  if (!admin) {
    await supabase.auth.signOut();
    return { erro: "Esta conta ainda não possui permissão administrativa." };
  }
  redirect("/admin");
}

export async function logout() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/admin/login");
}

function texto(formData: FormData, campo: string) {
  return String(formData.get(campo) ?? "").trim();
}

function numero(formData: FormData, campo: string) {
  const valor = Number(texto(formData, campo).replace(",", "."));
  return Number.isFinite(valor) ? valor : 0;
}

export async function salvarProduto(formData: FormData) {
  const { supabase } = await requireAdmin();
  const id = texto(formData, "id");
  const dados = {
    slug: texto(formData, "slug"),
    nome: texto(formData, "nome"),
    sabor: texto(formData, "sabor"),
    categoria: texto(formData, "categoria"),
    peso: texto(formData, "peso"),
    preco: numero(formData, "preco"),
    preco_avulso: texto(formData, "preco_avulso") ? numero(formData, "preco_avulso") : null,
    imagem_url: texto(formData, "imagem_url") || null,
    descricao: texto(formData, "descricao"),
    disponivel: formData.get("disponivel") === "on",
    destaque: formData.get("destaque") === "on",
    ordem: numero(formData, "ordem"),
    atualizado_em: new Date().toISOString(),
  };
  const consulta = id
    ? supabase.from("produtos").update(dados).eq("id", id)
    : supabase.from("produtos").insert(dados);
  const { error } = await consulta;
  if (error) throw new Error(error.message);
  revalidatePath("/admin/produtos");
  revalidatePath("/produtos");
  redirect("/admin/produtos?salvo=1");
}

export async function excluirProduto(formData: FormData) {
  const { supabase } = await requireAdmin();
  const { error } = await supabase.from("produtos").delete().eq("id", texto(formData, "id"));
  if (error) throw new Error(error.message);
  revalidatePath("/admin/produtos");
}

export async function salvarOferta(formData: FormData) {
  const { supabase } = await requireAdmin();
  const id = texto(formData, "id");
  const dados = {
    produto_id: texto(formData, "produto_id"),
    preco_promocional: numero(formData, "preco_promocional"),
    inicio: texto(formData, "inicio") || new Date().toISOString(),
    fim: texto(formData, "fim") || null,
    ativa: formData.get("ativa") === "on",
  };
  const consulta = id
    ? supabase.from("ofertas").update(dados).eq("id", id)
    : supabase.from("ofertas").insert(dados);
  const { error } = await consulta;
  if (error) throw new Error(error.message);
  revalidatePath("/admin/ofertas");
  revalidatePath("/ofertas");
  redirect("/admin/ofertas?salvo=1");
}

export async function excluirOferta(formData: FormData) {
  const { supabase } = await requireAdmin();
  const { error } = await supabase.from("ofertas").delete().eq("id", texto(formData, "id"));
  if (error) throw new Error(error.message);
  revalidatePath("/admin/ofertas");
}

export async function salvarBanner(formData: FormData) {
  const { supabase } = await requireAdmin();
  const id = texto(formData, "id");
  const dados = {
    titulo: texto(formData, "titulo"),
    subtitulo: texto(formData, "subtitulo") || null,
    imagem_url: texto(formData, "imagem_url"),
    texto_botao: texto(formData, "texto_botao") || null,
    link_botao: texto(formData, "link_botao") || null,
    ativo: formData.get("ativo") === "on",
    ordem: numero(formData, "ordem"),
  };
  const consulta = id
    ? supabase.from("banners").update(dados).eq("id", id)
    : supabase.from("banners").insert(dados);
  const { error } = await consulta;
  if (error) throw new Error(error.message);
  revalidatePath("/admin/banners");
  revalidatePath("/");
  redirect("/admin/banners?salvo=1");
}

export async function excluirBanner(formData: FormData) {
  const { supabase } = await requireAdmin();
  const { error } = await supabase.from("banners").delete().eq("id", texto(formData, "id"));
  if (error) throw new Error(error.message);
  revalidatePath("/admin/banners");
}

export async function salvarConteudo(formData: FormData) {
  const { supabase } = await requireAdmin();
  const chave = texto(formData, "chave");
  const conteudo = JSON.parse(texto(formData, "conteudo") || "{}");
  const { error } = await supabase.from("conteudos").upsert({
    chave,
    titulo: texto(formData, "titulo") || null,
    conteudo,
    atualizado_em: new Date().toISOString(),
  });
  if (error) throw new Error(error.message);
  revalidatePath("/admin/conteudos");
  revalidatePath("/");
  redirect("/admin/conteudos?salvo=1");
}

export async function salvarEmpresa(formData: FormData) {
  const { supabase } = await requireAdmin();
  const dados = JSON.parse(texto(formData, "dados") || "{}");
  const { error } = await supabase.from("configuracoes_empresa").upsert({
    id: true,
    dados,
    atualizado_em: new Date().toISOString(),
  });
  if (error) throw new Error(error.message);
  revalidatePath("/admin/empresa");
  revalidatePath("/", "layout");
  redirect("/admin/empresa?salvo=1");
}

export async function enviarMidia(formData: FormData) {
  const { supabase } = await requireAdmin();
  const arquivo = formData.get("arquivo");
  if (!(arquivo instanceof File) || !arquivo.size) throw new Error("Selecione um arquivo.");
  if (arquivo.size > 8 * 1024 * 1024) throw new Error("O arquivo deve ter até 8 MB.");
  const extensao = arquivo.name.split(".").pop()?.toLowerCase() || "bin";
  const caminho = `uploads/${crypto.randomUUID()}.${extensao}`;
  const { error } = await supabase.storage.from("cms").upload(caminho, arquivo, {
    contentType: arquivo.type,
  });
  if (error) throw new Error(error.message);
  revalidatePath("/admin/midias");
  redirect("/admin/midias?enviado=1");
}
