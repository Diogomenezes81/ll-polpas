import type { Metadata } from "next";
import { ProductGrid } from "@/components/ProductGrid";
import { SectionTitle } from "@/components/SectionTitle";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ofertasSemana } from "@/data/ofertas";

export const metadata: Metadata = {
  title: "Ofertas da semana",
  description:
    "Confira os produtos selecionados nas ofertas da semana da LL Polpas e consulte as condições pelo WhatsApp.",
};

export default function OfertasPage() {
  return (
    <main id="conteudo">
      <section className="bg-orange-100 py-16 sm:py-20">
        <div className="container-site">
          <SectionTitle
            eyebrow="Condições especiais"
            title="Ofertas da semana"
            description="Uma seleção especial de produtos para você aproveitar. Consulte valores promocionais, disponibilidade e condições diretamente com nossa equipe."
          />
          <WhatsAppButton
            className="mt-7"
            label="Consultar ofertas no WhatsApp"
            message="Olá! Gostaria de conhecer as ofertas da semana da LL Polpas."
          />
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container-site">
          <div className="mb-8 rounded-2xl border border-orange-200 bg-orange-50 p-5 text-sm leading-6 text-orange-950">
            <strong>Ofertas por tempo limitado.</strong> Produtos sujeitos à
            disponibilidade. Confirme os valores promocionais pelo WhatsApp
            antes de realizar seu pedido.
          </div>
          <ProductGrid products={ofertasSemana} />
        </div>
      </section>
    </main>
  );
}

