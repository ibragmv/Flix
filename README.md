# Flix: a Fullstack Netflix Clone

<!-- ![image](https://user-images.githubusercontent.com/23248726/220005380-ede4fb14-0b8d-4582-a063-3cc4beeccfb7.png) -->

This is a repository for a FullStack Netflix Clone using `React`, `NextJS`, `TailwindCSS` & `Prisma`.

This is me following the instructions on **Code With Antonio** [video](https://www.youtube.com/watch?v=mqUN4N2q4qY) with some of my own changes.

### My additions

- Use NextJS's new App Router.
- Use PostgreSQL with Supabase.
- Use Prisma 7 with PostgreSQL adapter.

### Prerequisites

- **Node version 18.x or higher**
- **Bun** (recommended) or npm/yarn
- **Supabase account** (for PostgreSQL database)

### Cloning the repository

```shell
git clone https://github.com/kenan-altaki/flix.git
```

### Install packages

```shell
bun install
```

### Setup Supabase

1. Create a new project in [Supabase](https://supabase.com)
2. Go to Project Settings > Database
3. Find the "Connection string" section and select "URI"
4. **Important:** Copy the connection string with the `service_role` key (this bypasses RLS for server-side operations)
5. The connection string should look like:
   ```
   postgresql://postgres.xxxxx:[SERVICE_ROLE_KEY]@aws-0-eu-central-1.pooler.supabase.com:6543/postgres
   ```

### Setup .env file

Copy `example.env` to `.env` and fill in your values:

```env
# Use service_role key to bypass RLS for server-side operations
DATABASE_URL="postgresql://postgres.xxxxx:[SERVICE_ROLE_KEY]@aws-0-eu-central-1.pooler.supabase.com:6543/postgres"

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GITHUB_ID=
GITHUB_SECRET=
NEXTAUTH_JWT_SECRET=
NEXTAUTH_SECRET=
```

**Note:** Using `service_role` key is recommended for server-side Next.js applications with Prisma. It automatically bypasses RLS and eliminates Security Advisor warnings. See `RLS_SETUP.md` for more details.

### Setup database

Run Prisma migrations to create the database schema:

```shell
bun prisma migrate dev
```

### Start the app

```shell
bun dev
```
