# Painel administrativo da LL Polpas

O painel fica em `/admin` e usa Supabase para autenticação, banco de dados e imagens.
O site público continua usando os dados locais enquanto o Supabase não estiver
configurado ou ainda estiver vazio.

## Ativação inicial

1. Crie o projeto `ll-polpas` em <https://database.new>.
2. No painel do Supabase, abra **SQL Editor**, cole o arquivo
   `supabase/migrations/001_admin_cms.sql` e execute.
3. Em **Authentication > Users**, crie o primeiro usuário com o e-mail do
   administrador e uma senha forte.
4. Copie o UUID desse usuário e execute no SQL Editor:

```sql
insert into public.admin_users (user_id, nome)
values ('UUID_DO_USUARIO', 'Diogo');
```

5. Em **Project Settings > API**, copie:
   - Project URL
   - Publishable key
6. Cadastre na Vercel, para Production, Preview e Development:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`
7. Faça um novo deploy e acesse `/admin/login`.

Não coloque a senha do usuário nem a chave `service_role` no código ou em
variáveis públicas.

## Recursos disponíveis

- produtos, preços, disponibilidade e destaques;
- ofertas com início e fim;
- banners da página inicial;
- textos estruturados das páginas;
- dados e contatos da empresa;
- biblioteca de imagens com limite de 8 MB.

Todas as gravações passam por autenticação no servidor e pelas políticas RLS do
Supabase.
