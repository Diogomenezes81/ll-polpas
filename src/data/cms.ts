import "server-only";
import type { Produto } from "@/types/produto";
import { produtos as produtosLocais } from "./produtos";
import { ofertasSemana as ofertasLocais } from "./ofertas";
import { isSupabaseConfigured } from "@/lib/supabase/config";
import { createClient } from "@/lib/supabase/server";

function moeda(valor: number | string | null) {
  if (valor === null || valor === "") return undefined;
  return Number(valor).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function converterProduto(item: Record<string, unknown>): Produto {
  return { id: String(item.id), slug: String(item.slug), nome: String(item.nome), sabor: String(item.sabor),
    categoria: item.categoria as Produto["categoria"], peso: String(item.peso),
    preco: moeda(item.preco as number) ?? "Consulte", precoAvulso: moeda(item.preco_avulso as number | null),
    imagem: String(item.imagem_url || "/produto-placeholder.svg"), descricao: String(item.descricao),
    disponivel: Boolean(item.disponivel), destaque: Boolean(item.destaque), cor: "#176b3a" };
}

export async function listarProdutos(): Promise<Produto[]> {
  if (!isSupabaseConfigured()) return produtosLocais;
  try {
    const supabase = await createClient();
    const { data, error } = await supabase.from("produtos").select("*").eq("disponivel", true).order("ordem").order("nome");
    return error || !data?.length ? produtosLocais : data.map(converterProduto);
  } catch { return produtosLocais; }
}

export async function listarOfertas(): Promise<Produto[]> {
  if (!isSupabaseConfigured()) return ofertasLocais;
  try {
    const supabase = await createClient(); const agora = new Date().toISOString();
    const { data, error } = await supabase.from("ofertas").select("preco_promocional, inicio, fim, produtos(*)").eq("ativa", true).lte("inicio", agora).or(`fim.is.null,fim.gte.${agora}`);
    if (error || !data?.length) return ofertasLocais;
    return data.map((oferta) => { const produto = converterProduto(oferta.produtos as unknown as Record<string, unknown>);
      return { ...produto, precoOriginal: produto.preco, preco: moeda(oferta.preco_promocional) ?? produto.preco, precoAvulso: undefined }; });
  } catch { return ofertasLocais; }
}
