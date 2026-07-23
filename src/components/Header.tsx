import Link from "next/link";
import { empresa } from "@/data/empresa";
import { MobileMenu } from "./MobileMenu";

const links = [
  { href: "/", label: "Início" },
  { href: "/produtos", label: "Produtos" },
  { href: "/ofertas", label: "Ofertas" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-green-950/5 bg-white/95 backdrop-blur">
      <div className="container-site flex h-20 items-center justify-between">
        <Link
          href="/"
          aria-label="LL Polpas — página inicial"
          className="flex items-center gap-3"
        >
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-orange-400 text-lg font-black text-white shadow-sm">
            LL
          </span>
          <span>
            <strong className="block text-xl leading-none text-green-950">
              {empresa.nome}
            </strong>
            <span className="mt-1 block text-xs font-medium text-green-700">
              {empresa.slogan}
            </span>
          </span>
        </Link>
        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-1 md:flex"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-xl px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-green-50 hover:text-green-900 focus-visible:outline-2 focus-visible:outline-green-700"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <MobileMenu />
      </div>
    </header>
  );
}
