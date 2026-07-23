import { notFound } from "next/navigation";
import { AdminTitle } from "@/components/admin/AdminUI";
import { ProdutoForm } from "@/components/admin/ProdutoForm";
import { requireAdmin } from "@/lib/supabase/auth";
export default async function EditarProduto({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params; const { supabase } = await requireAdmin();
  const { data } = await supabase.from("produtos").select("*").eq("id", id).maybeSingle();
  if (!data) notFound();
  return <><AdminTitle titulo="Editar produto" descricao="Atualize informações, preço, imagem e disponibilidade." /><ProdutoForm produto={data} /></>;
}
