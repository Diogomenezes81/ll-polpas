"use client";
import { useMemo, useState } from "react";
import type { CategoriaProduto, Produto } from "@/types/produto";
import { ProductGrid } from "./ProductGrid";
import { SearchInput } from "./SearchInput";

type Filtro = "todos" | CategoriaProduto;
const filtros: { value: Filtro; label: string }[] = [{ value: "todos", label: "Todos" }, { value: "citricas", label: "Frutas cítricas" }, { value: "tropicais", label: "Frutas tropicais" }, { value: "vermelhas", label: "Frutas vermelhas" }, { value: "outros", label: "Outros sabores" }];

export function ProductFilters({ products }: { products: Produto[] }) {
  const [categoria, setCategoria] = useState<Filtro>("todos");
  const [busca, setBusca] = useState("");
  const filtrados = useMemo(() => { const termo = busca.trim().toLocaleLowerCase("pt-BR"); return products.filter((produto) => (categoria === "todos" || produto.categoria === categoria) && (!termo || produto.nome.toLocaleLowerCase("pt-BR").includes(termo) || produto.sabor.toLocaleLowerCase("pt-BR").includes(termo))); }, [busca, categoria, products]);
  return <div><div className="mb-8 rounded-3xl border border-green-900/8 bg-[#fffdf7] p-5"><SearchInput value={busca} onChange={setBusca}/><div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Filtrar por categoria">{filtros.map((filtro) => <button key={filtro.value} type="button" aria-pressed={categoria === filtro.value} onClick={() => setCategoria(filtro.value)} className={`rounded-full px-4 py-2 text-sm font-bold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700 ${categoria === filtro.value ? "bg-green-800 text-white" : "bg-white text-slate-600 hover:bg-green-50 hover:text-green-900"}`}>{filtro.label}</button>)}</div><p className="mt-4 text-sm text-slate-500" aria-live="polite">{filtrados.length} {filtrados.length === 1 ? "produto encontrado" : "produtos encontrados"}</p></div><ProductGrid products={filtrados}/></div>;
}
