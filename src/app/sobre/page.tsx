import type { Metadata } from "next";
import Image from "next/image";
import { SectionTitle } from "@/components/SectionTitle";

export const metadata: Metadata = { title: "Sobre", description: "Conheça a história, a missão e os valores da LL Polpas e nosso compromisso com qualidade e atendimento." };
const pilares = [
  {
    title: "Nossa Missão",
    text: "Levar produtos congelados de qualidade, com atendimento próximo, organização e confiança.",
  },
  {
    title: "Nossa Visão",
    text: "Ser referência regional em polpas de frutas e produtos congelados, reconhecida pela qualidade, organização e confiança.",
  },
];

const valores = [
  { icon: "🍓", nome: "Qualidade" },
  { icon: "🤝", nome: "Honestidade" },
  { icon: "😊", nome: "Respeito ao Cliente" },
  { icon: "📦", nome: "Organização" },
  { icon: "🚀", nome: "Melhoria Contínua" },
];
export default function SobrePage() { return <main id="conteudo"><section className="py-16 sm:py-24"><div className="container-site grid items-center gap-12 lg:grid-cols-2"><div><SectionTitle eyebrow="Nossa essência" title="Fruta, cuidado e proximidade" description="A LL Polpas nasceu para tornar o sabor das frutas mais acessível e prático, atendendo famílias e estabelecimentos com atenção e profissionalismo."/><div className="mt-7 space-y-4 leading-7 text-slate-600"><p>Trabalhamos para construir relações duradouras, oferecendo variedade e uma experiência simples desde a escolha do produto até o atendimento.</p><p><strong className="text-green-950">Texto demonstrativo:</strong> substitua este conteúdo pela história oficial da empresa no arquivo desta página antes da publicação.</p></div></div><Image src="/sobre-placeholder.svg" alt="Espaço reservado para fotografia da empresa ou da produção" width={1200} height={900} className="w-full rounded-[2.5rem] shadow-xl shadow-green-950/10"/></div></section><section className="bg-[#f2f7ed] py-20"><div className="container-site"><SectionTitle eyebrow="O que nos guia" title="Propósito que vira experiência" align="center"/><div className="mt-10 grid gap-6 md:grid-cols-2">{pilares.map((pilar, index) => <article key={pilar.title} className="rounded-3xl bg-white p-8 shadow-sm"><span className="text-sm font-black text-orange-600">0{index + 1}</span><h2 className="mt-5 text-2xl font-black text-green-950">{pilar.title}</h2><p className="mt-3 leading-7 text-slate-600">{pilar.text}</p></article>)}</div><div className="mt-8 rounded-3xl bg-green-950 p-8 text-white sm:p-10"><h2 className="text-2xl font-black">Nossos Valores</h2><ul className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{valores.map((valor) => <li key={valor.nome} className="rounded-2xl bg-white/10 p-5 text-center"><span aria-hidden="true" className="text-3xl">{valor.icon}</span><span className="mt-3 block text-sm font-bold">{valor.nome}</span></li>)}</ul></div></div></section><section className="py-20"><div className="container-site grid gap-8 lg:grid-cols-2"><article className="rounded-3xl border border-green-100 p-8"><h2 className="text-2xl font-black text-green-950">Compromisso com qualidade</h2><p className="mt-4 leading-7 text-slate-600">Da seleção ao armazenamento, valorizamos processos cuidadosos e conservação adequada para entregar produtos que inspirem confiança.</p></article><article className="rounded-3xl bg-orange-100 p-8"><h2 className="text-2xl font-black text-green-950">Para você e seu estabelecimento</h2><p className="mt-4 leading-7 text-slate-600">Atendemos consumidores e negócios com orientação próxima, seja para o consumo diário ou para apoiar o cardápio da sua empresa.</p></article></div></section></main>; }
