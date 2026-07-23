import { AdminTitle, Feedback, Status } from "@/components/admin/AdminUI";
import { requireAdmin } from "@/lib/supabase/auth";
import { excluirBanner, salvarBanner } from "../../actions";

export default async function BannersAdmin({ searchParams }: { searchParams: Promise<{ salvo?: string }> }) {
  const { supabase } = await requireAdmin();
  const { data: banners } = await supabase.from("banners").select("*").order("ordem");
  return <><AdminTitle titulo="Banners" descricao="Gerencie chamadas e imagens de destaque da página inicial." /><Feedback visivel={(await searchParams).salvo === "1"} />
    <form action={salvarBanner} className="admin-card admin-form"><h2>Novo banner</h2><div className="admin-grid-2">
      <label>Título<input name="titulo" required /></label><label>Subtítulo<input name="subtitulo" /></label>
      <label>URL da imagem<input name="imagem_url" type="url" required /></label><label>Ordem<input name="ordem" type="number" defaultValue="0" /></label>
      <label>Texto do botão<input name="texto_botao" /></label><label>Link do botão<input name="link_botao" placeholder="/ofertas" /></label>
    </div><label className="admin-inline-check"><input name="ativo" type="checkbox" defaultChecked /> Banner ativo</label><button className="button-primary">Cadastrar banner</button></form>
    <div className="admin-table-wrap"><table className="admin-table"><thead><tr><th>Título</th><th>Ordem</th><th>Status</th><th>Ação</th></tr></thead><tbody>{banners?.map(b => <tr key={b.id}><td><strong>{b.titulo}</strong><small>{b.subtitulo}</small></td><td>{b.ordem}</td><td><Status ativo={b.ativo}/></td><td><form action={excluirBanner}><input name="id" type="hidden" value={b.id}/><button>Excluir</button></form></td></tr>)}</tbody></table></div>
  </>;
}
