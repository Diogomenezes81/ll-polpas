import Link from "next/link";
import { salvarProduto } from "@/app/admin/actions";

type Dados = Record<string, string | number | boolean | null>;

export function ProdutoForm({ produto }: { produto?: Dados }) {
  return <form action={salvarProduto} className="admin-card admin-form">
    {produto?.id && <input type="hidden" name="id" value={String(produto.id)} />}
    <div className="admin-grid-2">
      <label>Nome<input name="nome" defaultValue={String(produto?.nome ?? "")} required /></label>
      <label>Slug (endereço amigável)<input name="slug" defaultValue={String(produto?.slug ?? "")} placeholder="polpa-de-manga" required /></label>
      <label>Sabor<input name="sabor" defaultValue={String(produto?.sabor ?? "")} required /></label>
      <label>Categoria<select name="categoria" defaultValue={String(produto?.categoria ?? "tropicais")}><option value="citricas">Cítricas</option><option value="tropicais">Tropicais</option><option value="vermelhas">Vermelhas</option><option value="outros">Outros</option></select></label>
      <label>Peso/apresentação<input name="peso" defaultValue={String(produto?.peso ?? "10 × 100 g")} required /></label>
      <label>Preço (R$)<input name="preco" inputMode="decimal" defaultValue={String(produto?.preco ?? "")} required /></label>
      <label>Preço avulso (opcional)<input name="preco_avulso" inputMode="decimal" defaultValue={String(produto?.preco_avulso ?? "")} /></label>
      <label>Ordem<input name="ordem" type="number" defaultValue={String(produto?.ordem ?? 0)} /></label>
    </div>
    <label>URL da imagem<input name="imagem_url" type="url" defaultValue={String(produto?.imagem_url ?? "")} placeholder="Envie em Mídias e cole a URL aqui" /></label>
    <label>Descrição<textarea name="descricao" rows={4} defaultValue={String(produto?.descricao ?? "")} required /></label>
    <div className="admin-checks"><label><input name="disponivel" type="checkbox" defaultChecked={produto ? Boolean(produto.disponivel) : true} /> Disponível</label><label><input name="destaque" type="checkbox" defaultChecked={Boolean(produto?.destaque)} /> Mais pedido/destaque</label></div>
    <div className="admin-form-actions"><button className="button-primary">Salvar produto</button><Link href="/admin/produtos" className="button-secondary">Cancelar</Link></div>
  </form>;
}
