# LL Polpas

Site institucional e catálogo digital responsivo da LL Polpas. Apresenta produtos, diferenciais, regiões atendidas e canais de contato, direcionando pedidos para o WhatsApp. Esta versão não possui carrinho, pagamentos, login, banco de dados ou envio de formulário.

## Tecnologias

- Next.js 16 com App Router
- React 19 e TypeScript
- Tailwind CSS 4
- ESLint
- `next/image` para otimização de imagens

## Executar localmente

Requer Node.js 20.9 ou superior.

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Personalização

As informações principais ficam em `src/data/empresa.ts`. Edite nome, slogan, telefone, e-mail, Instagram, endereço e horário nesse arquivo. Substitua especialmente o número fictício `5511999999999` pelo WhatsApp oficial, mantendo código do país e DDD, apenas com números.

Os produtos ficam em `src/data/produtos.ts` e seguem o tipo definido em `src/types/produto.ts`. Para adicionar um produto, inclua um novo objeto com `id` único, `slug`, nome, sabor, categoria, peso, imagem, descrição, disponibilidade e destaque. As categorias aceitas são `citricas`, `tropicais`, `vermelhas` e `outros`.

As imagens demonstrativas estão em `public/`. Para substituí-las:

1. Adicione os arquivos em `public/produtos/`.
2. Troque o campo `imagem` do produto por um caminho como `/produtos/acerola.jpg`.
3. Prefira arquivos WebP, AVIF, JPG ou PNG otimizados.
4. Substitua `hero-polpas.svg` e `sobre-placeholder.svg` pelas imagens oficiais, ajustando seus caminhos nos componentes/páginas.

As embalagens presentes em `public/produtos/` foram obtidas das páginas públicas de produtos da Pura Polpa (`purapolpa.com.br`) em julho de 2026 para uso no catálogo da revendedora. Antes da publicação, confirme que a autorização comercial de uso da marca e das imagens permanece válida.

Os textos institucionais demonstrativos da página Sobre ficam em `src/app/sobre/page.tsx`.

## Verificações

```bash
npm run lint
npm run build
```

## Enviar para o GitHub

Com Git instalado, crie um repositório vazio no GitHub e execute:

```bash
git init
git add .
git commit -m "feat: site institucional LL Polpas"
git branch -M main
git remote add origin URL_DO_REPOSITORIO
git push -u origin main
```

## Publicar na Vercel

1. Acesse a Vercel e entre com sua conta.
2. Selecione **Add New > Project**.
3. Importe o repositório do GitHub.
4. Mantenha o framework detectado como Next.js e clique em **Deploy**.

Não são necessárias variáveis de ambiente nesta versão.

## Conectar domínio próprio

No projeto da Vercel, abra **Settings > Domains**, informe seu domínio e siga os registros DNS indicados. No provedor do domínio, configure os registros exibidos pela Vercel e aguarde a propagação. Depois, atualize `metadataBase` em `src/app/layout.tsx` para a URL oficial.
