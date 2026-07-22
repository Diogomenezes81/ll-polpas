import { empresa } from "@/data/empresa";

export function criarLinkWhatsApp(mensagem: string): string {
  return `https://wa.me/${empresa.whatsapp}?text=${encodeURIComponent(mensagem)}`;
}

export function mensagemProduto(nomeProduto: string): string {
  return `Olá, gostaria de receber mais informações sobre a ${nomeProduto}.`;
}
