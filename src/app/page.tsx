import Link from "next/link";
import { FeatureCard } from "@/components/FeatureCard";
import { Hero } from "@/components/Hero";
import { ProductGrid } from "@/components/ProductGrid";
import { SectionTitle } from "@/components/SectionTitle";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { produtos } from "@/data/produtos";

const features = [
  { icon: "🍓", title: "Variedade de sabores", description: "Opções selecionadas para diferentes gostos, receitas e ocasiões." },
  { icon: "❄️", title: "Praticidade congelada", description: "Fruta pronta para facilitar o preparo de bebidas e sobremesas." },
  { icon: "🏪", title: "Varejo e atacado", description: "Atendimento pensado para famílias, mercados e estabelecimentos." },
  { icon: "💬", title: "Pedido descomplicado", description: "Tire dúvidas e consulte produtos diretamente pelo WhatsApp." },
  { icon: "🧊", title: "Conservação adequada", description: "Cuidado com o produto para preservar suas melhores características." },
  { icon: "🤝", title: "Atendimento próximo", description: "Orientação personalizada para encontrar a melhor opção para você." },
];

export default function Home() {
  return <main id="conteudo"><Hero/><section className="bg-white py-20 sm:py-24"><div className="container-site"><div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"><SectionTitle eyebrow="Favoritos" title="Sabores em destaque" description="Uma seleção versátil para deixar sua rotina mais gostosa e prática."/><Link href="/produtos" className="font-bold text-green-800 hover:text-green-950">Ver catálogo completo →</Link></div><div className="mt-10"><ProductGrid products={produtos.filter((produto) => produto.destaque)}/></div></div></section><section className="bg-[#f2f7ed] py-20 sm:py-24"><div className="container-site"><SectionTitle eyebrow="Por que escolher" title="Qualidade percebida em cada detalhe" description="Produtos e atendimento preparados para simplificar seu dia." align="center"/><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{features.map((feature) => <FeatureCard key={feature.title} {...feature}/>)}</div></div></section><section className="py-20 sm:py-24"><div className="container-site grid overflow-hidden rounded-[2.5rem] bg-green-950 text-white lg:grid-cols-2"><div className="p-8 sm:p-12 lg:p-16"><p className="eyebrow !text-orange-300">Onde atendemos</p><h2 className="mt-4 text-3xl font-black sm:text-4xl">Da nossa seleção para sua casa ou negócio.</h2><p className="mt-5 max-w-xl leading-7 text-green-50/75">Atendemos consumidores, mercados, restaurantes, lanchonetes e outros estabelecimentos em Pereira Barreto - SP e cidades vizinhas. Consulte a disponibilidade com nossa equipe.</p><WhatsAppButton className="mt-8 !bg-orange-400 !text-green-950 hover:!bg-orange-300" label="Consultar minha região" message="Olá! Gostaria de saber se a LL Polpas atende a minha região."/></div><div className="grid min-h-72 place-items-center bg-[radial-gradient(circle_at_center,#48895a_0,#173f29_65%)] p-10 text-center"><div><span aria-hidden="true" className="text-7xl">📍</span><p className="mt-4 text-xl font-bold">Pereira Barreto - SP e cidades vizinhas</p><p className="mt-2 text-sm text-green-100/70">Consulte nossa equipe para confirmar a disponibilidade na sua cidade.</p></div></div></div></section><section className="bg-orange-100 py-16"><div className="container-site flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left"><div><h2 className="text-3xl font-black text-green-950">Quer levar mais sabor para sua rotina?</h2><p className="mt-2 text-slate-600">Fale com a LL Polpas e consulte produtos e condições.</p></div><WhatsAppButton label="Conversar com a LL Polpas"/></div></section></main>;
}
