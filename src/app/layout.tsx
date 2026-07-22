import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.llpolpas.com.br"),
  title: { default: "LL Polpas | Polpas de frutas congeladas", template: "%s | LL Polpas" },
  description: "Conheça as polpas de frutas da LL Polpas. Variedade de sabores para consumidores, mercados, restaurantes e estabelecimentos.",
  keywords: ["polpas de frutas", "polpas congeladas", "frutas", "varejo", "atacado", "LL Polpas"],
  authors: [{ name: "LL Polpas" }],
  creator: "LL Polpas",
  openGraph: { type: "website", locale: "pt_BR", siteName: "LL Polpas", title: "LL Polpas | Polpas de frutas congeladas", description: "Variedade, sabor e praticidade para consumidores e estabelecimentos.", images: [{ url: "/hero-polpas.svg", width: 1400, height: 1000, alt: "Seleção de frutas LL Polpas" }] },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col"><a href="#conteudo" className="skip-link">Pular para o conteúdo</a><Header />{children}<Footer /><WhatsAppButton floating label="Abrir WhatsApp" /></body>
    </html>
  );
}
