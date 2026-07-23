import { AdminTitle, Feedback } from "@/components/admin/AdminUI";
import { requireAdmin } from "@/lib/supabase/auth";
import { salvarConteudo } from "../../actions";

export default async function ConteudosAdmin({ searchParams }: { searchParams: Promise<{ salvo?: string }> }) {
  const { supabase } = await requireAdmin();
  const { data } = await supabase.from("conteudos").select("*").order("chave");
  return <><AdminTitle titulo="Conteúdos" descricao="Edite textos estruturados das páginas sem alterar o código." /><Feedback visivel={(await searchParams).salvo === "1"} />
    <form action={salvarConteudo} className="admin-card admin-form"><h2>Novo conteúdo ou atualização</h2><div className="admin-grid-2"><label>Chave única<input name="chave" placeholder="pagina_inicial" required /></label><label>Título interno<input name="titulo" /></label></div><label>Conteúdo em JSON<textarea name="conteudo" rows={10} defaultValue={'{\n  "titulo": "",\n  "texto": ""\n}'} required /></label><p className="admin-help">Use pares entre aspas, como no exemplo. Essa estrutura permite textos, listas e seções completas.</p><button className="button-primary">Salvar conteúdo</button></form>
    <div className="admin-card"><h2>Conteúdos cadastrados</h2>{data?.map(item => <details key={item.chave}><summary>{item.titulo || item.chave} <small>({item.chave})</small></summary><form action={salvarConteudo} className="admin-form"><input type="hidden" name="chave" value={item.chave}/><label>Título<input name="titulo" defaultValue={item.titulo ?? ""}/></label><label>Conteúdo<textarea name="conteudo" rows={9} defaultValue={JSON.stringify(item.conteudo, null, 2)}/></label><button className="button-primary">Atualizar</button></form></details>)}</div>
  </>;
}
