import Link from "next/link";

export function AdminTitle({ titulo, descricao, novo }: { titulo: string; descricao: string; novo?: string }) {
  return <div className="admin-title"><div><p className="eyebrow">Gerenciamento</p><h1>{titulo}</h1><p>{descricao}</p></div>{novo && <Link className="button-primary" href={novo}>+ Novo</Link>}</div>;
}

export function Status({ ativo }: { ativo: boolean }) {
  return <span className={`admin-status ${ativo ? "is-on" : ""}`}>{ativo ? "Ativo" : "Inativo"}</span>;
}

export function Feedback({ visivel, texto = "Alterações salvas com sucesso." }: { visivel: boolean; texto?: string }) {
  return visivel ? <p className="admin-success" role="status">{texto}</p> : null;
}
