import Link from "next/link";
import { requireAdmin } from "@/lib/supabase/auth";
import { logout } from "../actions";

const links = [
  ["Visão geral", "/admin"],
  ["Produtos", "/admin/produtos"],
  ["Ofertas", "/admin/ofertas"],
  ["Banners", "/admin/banners"],
  ["Conteúdos", "/admin/conteudos"],
  ["Empresa", "/admin/empresa"],
  ["Mídias", "/admin/midias"],
];

export default async function PainelLayout({ children }: { children: React.ReactNode }) {
  const admin = await requireAdmin();
  return (
    <main id="conteudo" className="admin-shell">
      <aside className="admin-sidebar">
        <div><span className="eyebrow">Administração</span><strong>LL Polpas</strong></div>
        <nav>{links.map(([nome, href]) => <Link key={href} href={href}>{nome}</Link>)}</nav>
        <div className="admin-user"><small>Conectado como</small><span>{admin.nome}</span><form action={logout}><button>Sair</button></form></div>
      </aside>
      <section className="admin-content">{children}</section>
    </main>
  );
}
