"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Início" },
  { href: "/produtos", label: "Produtos" },
  { href: "/ofertas", label: "Ofertas" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        className="rounded-xl p-2 text-green-950 hover:bg-green-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
      >
        <span className="sr-only">{open ? "Fechar menu" : "Abrir menu"}</span>
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className="h-7 w-7"
          strokeWidth="2"
        >
          {open ? (
            <path d="m6 6 12 12M18 6 6 18" />
          ) : (
            <path d="M4 7h16M4 12h16M4 17h16" />
          )}
        </svg>
      </button>
      {open && (
        <nav
          id="mobile-navigation"
          aria-label="Navegação móvel"
          className="absolute inset-x-4 top-20 rounded-2xl border border-green-100 bg-white p-3 shadow-xl"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 font-semibold text-green-950 hover:bg-green-50"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </div>
  );
}
