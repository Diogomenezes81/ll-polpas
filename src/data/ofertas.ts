import { produtos } from "@/data/produtos";

// Altere este objeto semanalmente para trocar os produtos e preços promocionais.
const precosPromocionais: Record<string, string> = {
  "polpa-de-manga": "R$ 17,00",
  "polpa-de-caju": "R$ 17,00",
  "polpa-de-frutas-vermelhas": "R$ 20,00",
  "polpa-de-uva": "R$ 20,00",
};

export const ofertasSemana = produtos
  .filter((produto) => produto.slug in precosPromocionais)
  .map((produto) => ({
    ...produto,
    precoOriginal: produto.preco,
    preco: precosPromocionais[produto.slug],
    precoAvulso: undefined,
  }));
