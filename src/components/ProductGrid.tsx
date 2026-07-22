import type { Produto } from "@/types/produto";
import { ProductCard } from "./ProductCard";
export function ProductGrid({ products }: { products: Produto[] }) {
  if (!products.length) return <div className="rounded-3xl bg-green-50 p-10 text-center"><p className="font-bold text-green-950">Nenhum produto encontrado.</p><p className="mt-2 text-sm text-slate-600">Tente outro termo ou selecione uma categoria diferente.</p></div>;
  return <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{products.map((produto) => <ProductCard key={produto.id} produto={produto}/>)}</div>;
}
