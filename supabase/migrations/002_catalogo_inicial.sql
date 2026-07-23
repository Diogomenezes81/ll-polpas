insert into public.produtos
  (slug, nome, sabor, categoria, peso, preco, preco_avulso, imagem_url, descricao, disponivel, destaque, ordem)
values
  ('polpa-de-acerola', 'Polpa de Acerola', 'Acerola', 'vermelhas', '10 × 100 g', 19.00, 2.00, '/produtos/acerola.png', 'Acerola: qualidade e praticidade para bebidas, receitas e consumo diário.', true, false, 1),
  ('polpa-de-caju', 'Polpa de Caju', 'Caju', 'tropicais', '10 × 100 g', 19.00, 2.00, '/produtos/caju.png', 'Caju: qualidade e praticidade para bebidas, receitas e consumo diário.', true, false, 2),
  ('polpa-de-goiaba', 'Polpa de Goiaba', 'Goiaba', 'tropicais', '10 × 100 g', 19.00, 2.00, '/produtos/goiaba.png', 'Goiaba: qualidade e praticidade para bebidas, receitas e consumo diário.', true, false, 3),
  ('polpa-de-manga', 'Polpa de Manga', 'Manga', 'tropicais', '10 × 100 g', 19.00, 2.00, '/produtos/manga.png', 'Manga: qualidade e praticidade para bebidas, receitas e consumo diário.', true, false, 4),
  ('polpa-de-tamarindo', 'Polpa de Tamarindo', 'Tamarindo', 'outros', '10 × 100 g', 19.00, 2.00, '/produtos/tamarindo.png', 'Tamarindo: qualidade e praticidade para bebidas, receitas e consumo diário.', true, false, 5),
  ('polpa-de-limao', 'Polpa de Limão', 'Limão', 'citricas', '10 × 100 g', 19.00, 2.00, '/produtos/limao.png', 'Limão: qualidade e praticidade para bebidas, receitas e consumo diário.', true, false, 6),
  ('polpa-de-abacaxi', 'Polpa de Abacaxi', 'Abacaxi', 'tropicais', '10 × 100 g', 22.00, 2.40, '/produtos/abacaxi.png', 'Abacaxi: qualidade e praticidade para bebidas, receitas e consumo diário.', true, false, 7),
  ('polpa-de-abacaxi-com-hortela', 'Polpa de Abacaxi com Hortelã', 'Abacaxi e hortelã', 'tropicais', '10 × 100 g', 22.00, 2.40, '/produtos/abacaxi-hortela.png', 'Abacaxi e hortelã: qualidade e praticidade para bebidas, receitas e consumo diário.', true, true, 8),
  ('polpa-de-acerola-com-laranja', 'Polpa de Acerola com Laranja', 'Acerola e laranja', 'citricas', '10 × 100 g', 22.00, 2.40, '/produtos/acerola-laranja.png', 'Acerola e laranja: qualidade e praticidade para bebidas, receitas e consumo diário.', true, false, 9),
  ('polpa-detox', 'Polpa Detox', 'Abacaxi, limão, couve, gengibre e hortelã', 'outros', '10 × 100 g', 22.00, 2.40, '/produtos/detox.png', 'Mix detox: qualidade e praticidade para bebidas, receitas e consumo diário.', true, false, 10),
  ('polpa-de-uva', 'Polpa de Uva', 'Uva', 'vermelhas', '10 × 100 g', 22.00, 2.40, '/produtos/uva.png', 'Uva: qualidade e praticidade para bebidas, receitas e consumo diário.', true, false, 11),
  ('polpa-de-coco', 'Polpa de Coco', 'Coco', 'outros', '10 × 100 g', 22.00, 2.40, '/produtos/coco.png', 'Coco: qualidade e praticidade para bebidas, receitas e consumo diário.', true, false, 12),
  ('polpa-de-frutas-vermelhas', 'Polpa de Frutas Vermelhas', 'Amora, morango e framboesa', 'vermelhas', '10 × 100 g', 24.00, 2.50, '/produtos/frutas-vermelhas.png', 'Frutas vermelhas: qualidade e praticidade para bebidas, receitas e consumo diário.', true, false, 13),
  ('polpa-de-morango', 'Polpa de Morango', 'Morango', 'vermelhas', '10 × 100 g', 24.00, 2.50, '/produtos/morango.png', 'Morango: qualidade e praticidade para bebidas, receitas e consumo diário.', true, false, 14),
  ('polpa-de-maracuja', 'Polpa de Maracujá', 'Maracujá', 'tropicais', '10 × 100 g', 28.00, 2.90, '/produtos/maracuja.png', 'Maracujá: qualidade e praticidade para bebidas, receitas e consumo diário.', true, true, 15),
  ('morango-fruta-congelada', 'Morango Fruta Congelada', 'Morango', 'vermelhas', '1 kg', 21.00, null, '/produtos/morango-fruta.png', 'Morango: qualidade e praticidade para bebidas, receitas e consumo diário.', true, true, 16),
  ('maracuja-fruta-congelada', 'Maracujá Fruta Congelada', 'Maracujá', 'tropicais', '1 kg', 28.00, null, '/produtos/maracuja-fruta.png', 'Maracujá: qualidade e praticidade para bebidas, receitas e consumo diário.', true, false, 17),
  ('amora-fruta-congelada', 'Amora Fruta Congelada', 'Amora', 'vermelhas', '1 kg', 27.00, null, '/produtos/amora-fruta.png', 'Amora: qualidade e praticidade para bebidas, receitas e consumo diário.', true, false, 18),
  ('mandioca-congelada', 'Mandioca Congelada', 'Mandioca', 'outros', '1 kg', 11.00, null, '/produtos/mandioca-congelada.png', 'Mandioca congelada: qualidade e praticidade para suas receitas.', true, false, 19),
  ('acai', 'Açaí', 'Açaí', 'outros', '500 ml', 16.00, null, '/produtos/acai-500ml.png', 'Açaí: qualidade e praticidade para consumo diário.', true, false, 20),
  ('acai-com-granola', 'Açaí com Granola', 'Açaí com granola', 'outros', '200 ml', 10.00, null, '/produtos/acai-granola-200ml.png', 'Açaí com granola: qualidade e praticidade para consumo diário.', true, false, 21)
on conflict (slug) do update set
  nome = excluded.nome,
  sabor = excluded.sabor,
  categoria = excluded.categoria,
  peso = excluded.peso,
  preco = excluded.preco,
  preco_avulso = excluded.preco_avulso,
  imagem_url = excluded.imagem_url,
  descricao = excluded.descricao,
  disponivel = excluded.disponivel,
  destaque = excluded.destaque,
  ordem = excluded.ordem,
  atualizado_em = now();

insert into public.ofertas (produto_id, preco_promocional, inicio, fim, ativa)
select p.id, v.preco, now(), null, true
from (
  values
    ('polpa-de-manga', 17.00::numeric),
    ('polpa-de-caju', 17.00::numeric),
    ('polpa-de-frutas-vermelhas', 20.00::numeric),
    ('polpa-de-uva', 20.00::numeric)
) as v(slug, preco)
join public.produtos p on p.slug = v.slug
where not exists (
  select 1 from public.ofertas o
  where o.produto_id = p.id and o.ativa = true
);

select
  (select count(*) from public.produtos) as produtos,
  (select count(*) from public.ofertas where ativa = true) as ofertas_ativas;
