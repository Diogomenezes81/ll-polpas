import Link from "next/link";
import { empresa } from "@/data/empresa";

export function Footer() {
  return (
    <footer className="mt-auto bg-green-950 text-green-50">
      <div className="container-site grid gap-10 py-14 md:grid-cols-3">
        <div><p className="text-2xl font-black">LL Polpas</p><p className="mt-3 max-w-sm text-sm leading-6 text-green-100/75">Polpas selecionadas com praticidade para sua casa, comércio ou estabelecimento.</p></div>
        <div><h2 className="font-bold">Navegue</h2><ul className="mt-4 space-y-2 text-sm text-green-100/75"><li><Link href="/produtos" className="hover:text-white">Nossos produtos</Link></li><li><Link href="/sobre" className="hover:text-white">Sobre a empresa</Link></li><li><Link href="/contato" className="hover:text-white">Entre em contato</Link></li></ul></div>
        <div><h2 className="font-bold">Atendimento</h2><address className="mt-4 space-y-2 text-sm not-italic text-green-100/75"><p>{empresa.telefone} · {empresa.telefoneSecundario}</p><p>{empresa.email}</p><p>{empresa.horario}</p><p>{empresa.endereco}</p><p>CNPJ {empresa.cnpj}</p></address></div>
      </div>
      <div className="border-t border-white/10"><div className="container-site flex flex-col gap-2 py-5 text-xs text-green-100/60 sm:flex-row sm:justify-between"><p>© {new Date().getFullYear()} LL Polpas. Todos os direitos reservados.</p><p>Informações demonstrativas — personalize antes de publicar.</p></div></div>
    </footer>
  );
}
