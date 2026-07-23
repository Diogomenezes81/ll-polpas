import Image from "next/image";
import { AdminTitle, Feedback } from "@/components/admin/AdminUI";
import { requireAdmin } from "@/lib/supabase/auth";
import { enviarMidia } from "../../actions";

export default async function MidiasAdmin({ searchParams }: { searchParams: Promise<{ enviado?: string }> }) {
  const { supabase } = await requireAdmin();
  const { data } = await supabase.storage.from("cms").list("uploads", { limit: 100, sortBy: { column: "created_at", order: "desc" } });
  return <><AdminTitle titulo="Biblioteca de mídias" descricao="Envie imagens para produtos, banners e páginas." /><Feedback visivel={(await searchParams).enviado === "1"} texto="Imagem enviada com sucesso." />
    <form action={enviarMidia} className="admin-card admin-form" encType="multipart/form-data"><label>Imagem (até 8 MB)<input name="arquivo" type="file" accept="image/png,image/jpeg,image/webp,image/gif,image/svg+xml" required /></label><button className="button-primary">Enviar imagem</button></form>
    <div className="admin-media-grid">{data?.filter(a => a.name !== ".emptyFolderPlaceholder").map(arquivo => {
      const { data: url } = supabase.storage.from("cms").getPublicUrl(`uploads/${arquivo.name}`);
      return <article className="admin-card" key={arquivo.id ?? arquivo.name}><Image src={url.publicUrl} alt="" width={400} height={300} unoptimized /><strong>{arquivo.name}</strong><input readOnly value={url.publicUrl} aria-label={`URL de ${arquivo.name}`} /></article>;
    })}</div>
  </>;
}
