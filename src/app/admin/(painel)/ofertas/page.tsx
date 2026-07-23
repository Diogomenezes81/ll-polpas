import { AdminTitle, Feedback, Status } from "@/components/admin/AdminUI";
import { requireAdmin } from "@/lib/supabase/auth";
import { excluirOferta, salvarOferta } from "../../actions";

export default async function OfertasAdmin({ searchParams }: { searchParams: Promise<{ salvo?: string }> }) {
  const { supabase } = await requireAdmin();
  const [{ data: produtos }, { data: ofertas }] = await Promise.all([
    supabase.from("produtos").select("id,nome").order("nome"),
    supabase.from("ofertas").select("*, produtos(nome)").order("criado_em", { ascending: false }),
  ]);
  return <><AdminTitle titulo="Ofertas" descricao="Defina os produtos e preços promocionais da semana." /><Feedback visivel={(await searchParams).salvo === "1"} />
    <form action={salvarOferta} className="admin-card admin-form"><h2>Nova oferta</h2><div className="admin-grid-2">
      <label>Produto<select name="produto_id" required><option value="">Selecione</option>{produtos?.map(p => <option key={p.id} value={p.id}>{p.nome}</option>)}</select></label>
      <label>Preço promocional<input name="preco_promocional" inputMode="decimal" required /></label>
      <label>Início<input name="inicio" type="datetime-local" /></label><label>Fim (opcional)<input name="fim" type="datetime-local" /></label>
    </div><label className="admin-inline-check"><input name="ativa" type="checkbox" defaultChecked /> Oferta ativa</label><button className="button-primary">Cadastrar oferta</button></form>
    <div className="admin-table-wrap"><table className="admin-table"><thead><tr><th>Produto</th><th>Preço</th><th>Status</th><th>Ação</th></tr></thead><tbody>{ofertas?.map(o => <tr key={o.id}><td>{(o.produtos as unknown as {nome:string})?.nome}</td><td>R$ {Number(o.preco_promocional).toFixed(2).replace(".", ",")}</td><td><Status ativo={o.ativa} /></td><td><form action={excluirOferta}><input name="id" type="hidden" value={o.id}/><button>Excluir</button></form></td></tr>)}</tbody></table></div>
  </>;
}
