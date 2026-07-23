import { produtos } from "@/data/produtos";

// Altere esta lista semanalmente para trocar os produtos exibidos em oferta.
const slugsEmOferta = [
  "polpa-de-maracuja",
  "polpa-de-abacaxi-com-hortela",
  "morango-fruta-congelada",
];

export const ofertasSemana = produtos.filter((produto) =>
  slugsEmOferta.includes(produto.slug),
);

