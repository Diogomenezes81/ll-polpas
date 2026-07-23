import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { SectionTitle } from "@/components/SectionTitle";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { empresa } from "@/data/empresa";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com a LL Polpas pelo WhatsApp, telefone, e-mail ou visite nosso endereço em Pereira Barreto - SP.",
};

const contatos = [
  {
    label: `WhatsApp — ${empresa.contatoPrincipal}`,
    value: empresa.telefone,
    href: `tel:${empresa.telefone.replace(/\D/g, "")}`,
  },
  {
    label: `WhatsApp — ${empresa.contatoSecundario}`,
    value: empresa.telefoneSecundario,
    href: `tel:${empresa.telefoneSecundario.replace(/\D/g, "")}`,
  },
  {
    label: "E-mail",
    value: empresa.email,
    href: `mailto:${empresa.email}`,
  },
  {
    label: "Instagram",
    value: empresa.instagram,
    href: "https://instagram.com/llpolpas",
  },
  { label: "CNPJ", value: empresa.cnpj },
  { label: "Região atendida", value: empresa.regiao },
  { label: "Horário", value: empresa.horario },
];

export default function ContatoPage() {
  return (
    <main id="conteudo">
      <section className="bg-[#f2f7ed] py-16 sm:py-20">
        <div className="container-site">
          <SectionTitle
            eyebrow="Vamos conversar"
            title="Estamos prontos para atender você"
            description="Consulte sabores, disponibilidade, regiões atendidas e condições para varejo ou atacado."
          />
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container-site grid items-start gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <aside className="rounded-3xl bg-green-950 p-7 text-white sm:p-9">
            <h2 className="text-2xl font-black">Canais de atendimento</h2>
            <dl className="mt-7 space-y-6">
              {contatos.map((contato) => (
                <div key={contato.label}>
                  <dt className="text-xs font-bold uppercase tracking-widest text-orange-300">
                    {contato.label}
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-green-50/80">
                    {contato.href ? (
                      <a
                        href={contato.href}
                        target={contato.href.startsWith("http") ? "_blank" : undefined}
                        rel={contato.href.startsWith("http") ? "noreferrer" : undefined}
                        className="hover:text-white hover:underline"
                      >
                        {contato.value}
                      </a>
                    ) : (
                      contato.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
            <WhatsAppButton
              className="mt-8 w-full !bg-orange-400 !text-green-950 hover:!bg-orange-300"
              label="Abrir conversa no WhatsApp"
            />
          </aside>
          <ContactForm />
        </div>
      </section>

      <section className="bg-[#f2f7ed] py-16 sm:py-20">
        <div className="container-site">
          <SectionTitle
            eyebrow="Nossa localização"
            title="Visite a LL Polpas"
            description={empresa.endereco}
          />
          <div className="mt-8 overflow-hidden rounded-3xl border border-green-900/10 bg-white shadow-sm">
            <iframe
              src={empresa.googleMapsEmbedUrl}
              title="Localização da LL Polpas no Google Maps"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[360px] w-full border-0 sm:h-[450px]"
              allowFullScreen
            />
          </div>
          <a
            href={empresa.googleMapsUrl}
            target="_blank"
            rel="noreferrer"
            className="button-primary mt-6"
          >
            Abrir rota no Google Maps
          </a>
        </div>
      </section>
    </main>
  );
}
