import { redirect } from "next/navigation";
import { createClient } from "./server";
import { isSupabaseConfigured } from "./config";

export async function requireAdmin() {
  if (!isSupabaseConfigured()) redirect("/admin/login?erro=configuracao");

  const supabase = await createClient();
  const { data: claims } = await supabase.auth.getClaims();
  const userId = claims?.claims?.sub;
  if (!userId) redirect("/admin/login");

  const { data: admin } = await supabase
    .from("admin_users")
    .select("nome, ativo")
    .eq("user_id", userId)
    .eq("ativo", true)
    .maybeSingle();

  if (!admin) redirect("/admin/login?erro=permissao");
  return { supabase, userId, nome: admin.nome as string };
}
