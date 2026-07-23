create extension if not exists pgcrypto;

create table public.admin_users (
  user_id uuid primary key references auth.users(id) on delete cascade,
  nome text not null,
  ativo boolean not null default true,
  criado_em timestamptz not null default now()
);

create table public.produtos (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  nome text not null,
  sabor text not null,
  categoria text not null check (categoria in ('citricas','tropicais','vermelhas','outros')),
  peso text not null,
  preco numeric(10,2) not null check (preco >= 0),
  preco_avulso numeric(10,2),
  imagem_url text,
  descricao text not null,
  disponivel boolean not null default true,
  destaque boolean not null default false,
  ordem integer not null default 0,
  criado_em timestamptz not null default now(),
  atualizado_em timestamptz not null default now()
);

create table public.ofertas (
  id uuid primary key default gen_random_uuid(),
  produto_id uuid not null references public.produtos(id) on delete cascade,
  preco_promocional numeric(10,2) not null check (preco_promocional >= 0),
  inicio timestamptz not null default now(),
  fim timestamptz,
  ativa boolean not null default true,
  criado_em timestamptz not null default now()
);

create table public.banners (
  id uuid primary key default gen_random_uuid(),
  titulo text not null,
  subtitulo text,
  imagem_url text not null,
  texto_botao text,
  link_botao text,
  ativo boolean not null default true,
  ordem integer not null default 0,
  criado_em timestamptz not null default now()
);

create table public.conteudos (
  chave text primary key,
  titulo text,
  conteudo jsonb not null default '{}'::jsonb,
  atualizado_em timestamptz not null default now()
);

create table public.configuracoes_empresa (
  id boolean primary key default true check (id),
  dados jsonb not null default '{}'::jsonb,
  atualizado_em timestamptz not null default now()
);

create or replace function public.eh_admin()
returns boolean language sql stable security definer set search_path = ''
as $$
  select exists (
    select 1 from public.admin_users
    where user_id = auth.uid() and ativo = true
  );
$$;

alter table public.admin_users enable row level security;
alter table public.produtos enable row level security;
alter table public.ofertas enable row level security;
alter table public.banners enable row level security;
alter table public.conteudos enable row level security;
alter table public.configuracoes_empresa enable row level security;

create policy "Leitura pública de produtos" on public.produtos for select using (true);
create policy "Leitura pública de ofertas" on public.ofertas for select using (ativa = true);
create policy "Leitura pública de banners" on public.banners for select using (ativo = true);
create policy "Leitura pública de conteúdos" on public.conteudos for select using (true);
create policy "Leitura pública de configurações" on public.configuracoes_empresa for select using (true);
create policy "Administrador consulta seu acesso" on public.admin_users for select using (user_id = auth.uid());

create policy "Administradores gerenciam produtos" on public.produtos for all using (public.eh_admin()) with check (public.eh_admin());
create policy "Administradores gerenciam ofertas" on public.ofertas for all using (public.eh_admin()) with check (public.eh_admin());
create policy "Administradores gerenciam banners" on public.banners for all using (public.eh_admin()) with check (public.eh_admin());
create policy "Administradores gerenciam conteúdos" on public.conteudos for all using (public.eh_admin()) with check (public.eh_admin());
create policy "Administradores gerenciam configurações" on public.configuracoes_empresa for all using (public.eh_admin()) with check (public.eh_admin());

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'cms',
  'cms',
  true,
  8388608,
  array['image/png','image/jpeg','image/webp','image/gif','image/svg+xml']
)
on conflict (id) do nothing;

create policy "Leitura pública de mídias" on storage.objects
for select using (bucket_id = 'cms');

create policy "Administradores gerenciam mídias" on storage.objects
for all using (bucket_id = 'cms' and public.eh_admin())
with check (bucket_id = 'cms' and public.eh_admin());
