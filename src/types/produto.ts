export type CategoriaProduto = "citricas" | "tropicais" | "vermelhas" | "outros";

export type Produto = {
  id: number | string;
  slug: string;
  nome: string;
  sabor: string;
  categoria: CategoriaProduto;
  peso: string;
  preco: string;
  precoOriginal?: string;
  precoAvulso?: string;
  imagem: string;
  descricao: string;
  disponivel: boolean;
  destaque: boolean;
  cor: string;
};
