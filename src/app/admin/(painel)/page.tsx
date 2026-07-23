import Link from "next/link";
import { requireAdmin } from "@/lib/supabase/auth";

export default async function AdminPage() {
  const { supabase } = await requireAdmin();
  const [produtos, ofertas, banners] = await Promise.all([
    supabase.from("produtos").select("*", { count: "exact", head: true }),
    supabase.from("ofertas").select("*", { count: "exact", head: true }).eq("ativa", true),
    supabase.from("banners").select("*", { count: "exact", head: true }).eq("ativo", true),
  ]);
  return <>
    <div className="admin-title"><div><p className="eyebrow">Visão geral</p><h1>Painel administrativo</h1></div><Link href="/" target="_blank" className="button-secondary">Ver site</Link></div>
    <div className="admin-stats">
      <article><strong>{produtos.count ?? 0}</strong><span>produtos</span></article>
      <article><strong>{ofertas.count ?? 0}</strong><span>ofertas ativas</span></article>
      <article><strong>{banners.count ?? 0}</strong><span>banners ativos</span></article>
    </div>
    <section className="admin-card"><h2>O que você pode administrar</h2><p>Cadastre produtos, programe ofertas, troque banners e imagens e atualize os textos e dados da empresa. As alterações ficam protegidas pela sua conta administrativa.</p></section>
  </>;
}
