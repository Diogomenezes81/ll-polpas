"use client";

import { useActionState } from "react";
import { login, type LoginState } from "../actions";

const inicial: LoginState = {};

export function LoginForm() {
  const [state, action, pending] = useActionState(login, inicial);
  return (
    <form action={action} className="admin-form">
      <label>E-mail<input name="email" type="email" autoComplete="email" required /></label>
      <label>Senha<input name="password" type="password" autoComplete="current-password" required /></label>
      {state.erro && <p className="admin-error" role="alert">{state.erro}</p>}
      <button className="button-primary" disabled={pending}>{pending ? "Entrando..." : "Entrar"}</button>
    </form>
  );
}
