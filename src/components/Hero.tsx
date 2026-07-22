import Image from "next/image";
import Link from "next/link";
import { WhatsAppButton } from "./WhatsAppButton";

export function Hero() {
  return <section className="overflow-hidden bg-white"><h1 className="sr-only">LL Polpas — frutas que transformam</h1><div className="mx-auto max-w-[1942px]"><Image src="/banner-ll-polpas.png" alt="Banner LL Polpas com frutas selecionadas, polpas e frutas congeladas, benefícios e canais de atendimento" width={1942} height={809} priority sizes="100vw" className="h-auto w-full"/></div><div className="border-y border-green-900/10 bg-[#fffdf7]"><div className="container-site flex flex-col items-center justify-between gap-5 py-6 text-center sm:flex-row sm:text-left"><div><p className="text-xl font-black text-green-950">Polpas de frutas para sua casa ou negócio</p><p className="mt-1 text-sm text-slate-600">Consulte sabores, disponibilidade e condições de entrega.</p></div><div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row"><Link href="/produtos" className="button-secondary">Conheça nossos produtos <span aria-hidden="true">→</span></Link><WhatsAppButton /></div></div></div></section>;
}
