import { AdminTitle, Feedback } from "@/components/admin/AdminUI";
import { requireAdmin } from "@/lib/supabase/auth";
import { salvarEmpresa } from "../../actions";
import { empresa } from "@/data/empresa";

export default async function EmpresaAdmin({ searchParams }: { searchParams: Promise<{ salvo?: string }> }) {
  const { supabase } = await requireAdmin();
  const { data } = await supabase.from("configuracoes_empresa").select("dados").eq("id", true).maybeSingle();
  const dados = data?.dados ?? empresa;
  return <><AdminTitle titulo="Dados da empresa" descricao="Centralize contatos, endereço, horários, slogan e região de atendimento." /><Feedback visivel={(await searchParams).salvo === "1"} />
    <form action={salvarEmpresa} className="admin-card admin-form"><label>Dados em JSON<textarea name="dados" rows={24} defaultValue={JSON.stringify(dados, null, 2)} required /></label><p className="admin-help">Os nomes antes dos dois-pontos identificam cada informação. Mantenha as aspas e vírgulas ao editar.</p><button className="button-primary">Salvar dados da empresa</button></form>
  </>;
}
