import type { Metadata } from "next";
import { LoginForm } from "./LoginForm";
import { isSupabaseConfigured } from "@/lib/supabase/config";

export const metadata: Metadata = { title: "Acesso administrativo", robots: { index: false } };

export default function AdminLogin() {
  const configurado = isSupabaseConfigured();
  return (
    <main id="conteudo" className="admin-login">
      <section className="admin-card admin-login-card">
        <p className="eyebrow">LL Polpas</p>
        <h1>Painel administrativo</h1>
        <p>Entre com a conta autorizada para atualizar o site.</p>
        {!configurado && <div className="admin-warning">O banco de dados ainda precisa ser conectado. Configure as variáveis do Supabase para liberar o login.</div>}
        <LoginForm />
      </section>
    </main>
  );
}
