import type { Metadata } from "next";
import { ProductFilters } from "@/components/ProductFilters";
import { SectionTitle } from "@/components/SectionTitle";
import { listarProdutos } from "@/data/cms";

export const metadata: Metadata = { title: "Produtos", description: "Conheça todos os sabores de polpas de frutas congeladas da LL Polpas e solicite informações pelo WhatsApp.", openGraph: { title: "Produtos da LL Polpas", description: "Polpas práticas e saborosas para sua casa ou estabelecimento." } };

export default async function ProdutosPage() {
  const produtos = await listarProdutos();
  return <main id="conteudo"><section className="bg-[#f2f7ed] py-16 sm:py-20"><div className="container-site"><SectionTitle eyebrow="Nosso catálogo" title="Um sabor para cada momento" description="Pesquise, filtre e encontre a polpa ideal para seus sucos, vitaminas, drinks e sobremesas."/></div></section><section className="bg-white py-14 sm:py-20"><div className="container-site"><ProductFilters products={produtos}/></div></section></main>;
}
