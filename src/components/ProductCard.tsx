import Image from "next/image";
import type { Produto } from "@/types/produto";
import { criarLinkWhatsApp, mensagemProduto } from "@/utils/whatsapp";

export function ProductCard({ produto }: { produto: Produto }) {
  return (
    <article className="group flex overflow-hidden rounded-3xl border border-green-900/8 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl motion-reduce:transform-none">
      <div className="flex w-full flex-col">
        <div
          className="relative aspect-[4/3] overflow-hidden"
          style={{ backgroundColor: `${produto.cor}18` }}
        >
          <Image
            src={produto.imagem}
            alt={`Embalagem de ${produto.nome}`}
            fill
            unoptimized={produto.imagem.startsWith("http")}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-contain p-5 transition duration-500 group-hover:scale-105 motion-reduce:transform-none"
          />
          <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-bold text-green-800">
            Disponível
          </span>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-orange-600">
                {produto.sabor}
              </p>
              <h3 className="mt-2 text-xl font-black text-green-950">
                {produto.nome}
              </h3>
            </div>
            <span className="shrink-0 rounded-lg bg-green-50 px-2 py-1 text-xs font-bold text-green-800">
              {produto.peso}
            </span>
          </div>
          <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
            {produto.descricao}
          </p>
          <div className="mt-5 flex items-end justify-between gap-3 border-t border-slate-100 pt-4">
            <div>
              <span className="block text-xs font-semibold text-slate-500">
                {produto.precoOriginal ? "Preço promocional" : "Preço"}
              </span>
              {produto.precoOriginal && (
                <span className="mr-2 text-sm text-slate-400 line-through">
                  {produto.precoOriginal}
                </span>
              )}
              <strong
                className={
                  produto.precoOriginal
                    ? "text-xl text-orange-700"
                    : "text-xl text-green-900"
                }
              >
                {produto.preco}
              </strong>
            </div>
            {produto.precoAvulso && (
              <div className="text-right">
                <span className="block text-xs font-semibold text-slate-500">
                  Unidade avulsa
                </span>
                <strong className="text-sm text-orange-700">
                  {produto.precoAvulso}
                </strong>
              </div>
            )}
          </div>
          <a
            href={criarLinkWhatsApp(mensagemProduto(produto.nome))}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center justify-center rounded-xl bg-green-800 px-4 py-3 text-sm font-bold text-white hover:bg-green-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
          >
            Solicitar informações{" "}
            <span aria-hidden="true" className="ml-2">
              →
            </span>
          </a>
        </div>
      </div>
    </article>
  );
}
