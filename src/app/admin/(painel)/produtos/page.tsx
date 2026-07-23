import Link from "next/link";
import { requireAdmin } from "@/lib/supabase/auth";
import { excluirProduto } from "../../actions";
import { AdminTitle, Feedback, Status } from "@/components/admin/AdminUI";

export default async function ProdutosAdmin({ searchParams }: { searchParams: Promise<{ salvo?: string }> }) {
  const { supabase } = await requireAdmin();
  const { data: produtos } = await supabase.from("produtos").select("*").order("ordem").order("nome");
  const busca = await searchParams;
  return <>
    <AdminTitle titulo="Produtos" descricao="Cadastre e organize o catálogo completo." novo="/admin/produtos/novo" />
    <Feedback visivel={busca.salvo === "1"} />
    <div className="admin-table-wrap"><table className="admin-table"><thead><tr><th>Produto</th><th>Categoria</th><th>Preço</th><th>Status</th><th>Ações</th></tr></thead>
      <tbody>{produtos?.map((produto) => <tr key={produto.id}><td><strong>{produto.nome}</strong><small>{produto.peso}</small></td><td>{produto.categoria}</td><td>R$ {Number(produto.preco).toFixed(2).replace(".", ",")}</td><td><Status ativo={produto.disponivel} /></td><td className="admin-actions"><Link href={`/admin/produtos/${produto.id}`}>Editar</Link><form action={excluirProduto}><input type="hidden" name="id" value={produto.id} /><button>Excluir</button></form></td></tr>)}</tbody>
    </table>{!produtos?.length && <p className="admin-empty">Nenhum produto cadastrado.</p>}</div>
  </>;
}
