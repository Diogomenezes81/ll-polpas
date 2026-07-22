import type { CategoriaProduto, Produto } from "@/types/produto";

const placeholder = "/produto-placeholder.svg";

type ProdutoBase = Omit<Produto, "id" | "slug" | "imagem" | "disponivel" | "destaque" | "cor" | "descricao"> & {
  categoria: CategoriaProduto;
  cor: string;
  imagem?: string;
};

const catalogo: ProdutoBase[] = [
  { nome: "Polpa de Acerola", sabor: "Acerola", categoria: "vermelhas", peso: "10 × 100 g", preco: "R$ 19,00", precoAvulso: "R$ 2,00", cor: "#e94638", imagem: "/produtos/acerola.png" },
  { nome: "Polpa de Caju", sabor: "Caju", categoria: "tropicais", peso: "10 × 100 g", preco: "R$ 19,00", precoAvulso: "R$ 2,00", cor: "#ef9d28", imagem: "/produtos/caju.png" },
  { nome: "Polpa de Goiaba", sabor: "Goiaba", categoria: "tropicais", peso: "10 × 100 g", preco: "R$ 19,00", precoAvulso: "R$ 2,00", cor: "#ef6b65", imagem: "/produtos/goiaba.png" },
  { nome: "Polpa de Manga", sabor: "Manga", categoria: "tropicais", peso: "10 × 100 g", preco: "R$ 19,00", precoAvulso: "R$ 2,00", cor: "#f29a2e", imagem: "/produtos/manga.png" },
  { nome: "Polpa de Tamarindo", sabor: "Tamarindo", categoria: "outros", peso: "10 × 100 g", preco: "R$ 19,00", precoAvulso: "R$ 2,00", cor: "#9b653d", imagem: "/produtos/tamarindo.png" },
  { nome: "Polpa de Limão", sabor: "Limão", categoria: "citricas", peso: "10 × 100 g", preco: "R$ 19,00", precoAvulso: "R$ 2,00", cor: "#72a936", imagem: "/produtos/limao.png" },
  { nome: "Polpa de Abacaxi", sabor: "Abacaxi", categoria: "tropicais", peso: "10 × 100 g", preco: "R$ 22,00", precoAvulso: "R$ 2,40", cor: "#dcb72c", imagem: "/produtos/abacaxi.png" },
  { nome: "Polpa de Abacaxi com Hortelã", sabor: "Abacaxi e hortelã", categoria: "tropicais", peso: "10 × 100 g", preco: "R$ 22,00", precoAvulso: "R$ 2,40", cor: "#79a949", imagem: "/produtos/abacaxi-hortela.png" },
  { nome: "Polpa de Acerola com Laranja", sabor: "Acerola e laranja", categoria: "citricas", peso: "10 × 100 g", preco: "R$ 22,00", precoAvulso: "R$ 2,40", cor: "#ee7936", imagem: "/produtos/acerola-laranja.png" },
  { nome: "Polpa Detox", sabor: "Abacaxi, limão, couve, gengibre e hortelã", categoria: "outros", peso: "10 × 100 g", preco: "R$ 22,00", precoAvulso: "R$ 2,40", cor: "#448946", imagem: "/produtos/detox.png" },
  { nome: "Polpa de Uva", sabor: "Uva", categoria: "vermelhas", peso: "10 × 100 g", preco: "R$ 22,00", precoAvulso: "R$ 2,40", cor: "#76418e", imagem: "/produtos/uva.png" },
  { nome: "Polpa de Coco", sabor: "Coco", categoria: "outros", peso: "10 × 100 g", preco: "R$ 22,00", precoAvulso: "R$ 2,40", cor: "#b99771", imagem: "/produtos/coco.png" },
  { nome: "Polpa de Frutas Vermelhas", sabor: "Amora, morango e framboesa", categoria: "vermelhas", peso: "10 × 100 g", preco: "R$ 24,00", precoAvulso: "R$ 2,50", cor: "#a62d63", imagem: "/produtos/frutas-vermelhas.png" },
  { nome: "Polpa de Morango", sabor: "Morango", categoria: "vermelhas", peso: "10 × 100 g", preco: "R$ 24,00", precoAvulso: "R$ 2,50", cor: "#d93655", imagem: "/produtos/morango.png" },
  { nome: "Polpa de Maracujá", sabor: "Maracujá", categoria: "tropicais", peso: "10 × 100 g", preco: "R$ 28,00", precoAvulso: "R$ 2,90", cor: "#f2b824", imagem: "/produtos/maracuja.png" },
  { nome: "Morango Fruta Congelada", sabor: "Morango", categoria: "vermelhas", peso: "1 kg", preco: "R$ 21,00", cor: "#d93655", imagem: "/produtos/morango-fruta.png" },
  { nome: "Maracujá Fruta Congelada", sabor: "Maracujá", categoria: "tropicais", peso: "1 kg", preco: "R$ 28,00", cor: "#f2b824", imagem: "/produtos/maracuja-fruta.png" },
  { nome: "Amora Fruta Congelada", sabor: "Amora", categoria: "vermelhas", peso: "1 kg", preco: "R$ 27,00", cor: "#74345d", imagem: "/produtos/amora-fruta.png" },
  { nome: "Mandioca Congelada", sabor: "Mandioca", categoria: "outros", peso: "1 kg", preco: "R$ 11,00", cor: "#c8a66b", imagem: "/produtos/mandioca-congelada.png" },
  { nome: "Açaí", sabor: "Açaí", categoria: "outros", peso: "500 ml", preco: "R$ 16,00", cor: "#542b71", imagem: "/produtos/acai-500ml.png" },
  { nome: "Açaí com Granola", sabor: "Açaí com granola", categoria: "outros", peso: "200 ml", preco: "R$ 10,00", cor: "#6b3b79", imagem: "/produtos/acai-granola-200ml.png" },
];

function criarSlug(nome: string): string {
  return nome.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export const produtos: Produto[] = catalogo.map((produto, index) => ({
  ...produto,
  id: index + 1,
  slug: criarSlug(produto.nome),
  imagem: produto.imagem ?? placeholder,
  descricao: `${produto.sabor}: qualidade e praticidade para bebidas, receitas e consumo diário.`,
  disponivel: true,
  destaque: index < 4,
}));
