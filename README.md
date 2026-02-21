# Flix 🎬

Welcome to **Flix** — a modern, full-stack video streaming platform inspired by Netflix. Built with Next.js, React, and PostgreSQL, featuring user authentication, movie browsing, favorites management, and a beautiful responsive UI.

## 🏗 Project Structure

```
flix/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   ├── auth/              # Authentication pages
│   ├── profiles/          # User profiles
│   └── watch/             # Movie watch page
├── components/            # React components
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions
├── prisma/                # Prisma schema and migrations
├── server/                # Server-side utilities
└── public/                # Static assets
```

---

## ✨ Features

- **Movie Streaming:** Browse and watch movies with a beautiful video player
- **Authentication:** Secure authentication with multiple providers (Google OAuth, GitHub OAuth, Email/Password)
- **Favorites:** Save your favorite movies to your personal list
- **User Profiles:** Create and manage user profiles
- **Responsive Design:** Beautiful UI that works on all devices
- **Performance:** Optimized with Next.js App Router and SWR
- **Security:** Row-level security with Supabase and Prisma

---

## 🛠 Tech Stack

- **Runtime:** [Bun](https://bun.sh) (recommended) or Node.js
- **Framework:** Next.js 14 (App Router) / React
- **Styling:** TailwindCSS
- **Language:** TypeScript
- **State Management:** Zustand
- **Data Fetching:** SWR
- **Database/ORM:** Prisma / PostgreSQL (Supabase)
- **Authentication:** NextAuth.js
- **Icons:** Heroicons, React Icons

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/ibragmv/Flix
cd Flix
```

### 2. Install dependencies
```bash
bun install
```

Or with npm:
```bash
npm install
```

### 3. Set up Supabase

1. Create a new project at [Supabase](https://supabase.com)
2. Navigate to **Project Settings** → **Database**
3. Find the **Connection string** section and select **URI**
4. Copy the connection string (use the "Session pooler" connection string for Prisma)

### 4. Configure environment variables

Copy the example environment file:
```bash
cp .env.example .env
```

Edit `.env` and fill in your values:

```env
# Database connection string from Supabase
DATABASE_URL="postgresql://postgres:[YOUR-PASSWORD]@db.[YOUR-PROJECT-REF].supabase.co:5432/postgres"

# NextAuth Configuration
NEXTAUTH_JWT_SECRET="your-jwt-secret-here"
NEXTAUTH_SECRET="your-nextauth-secret-here"

# OAuth Providers (optional)
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
GITHUB_ID="your-github-client-id"
GITHUB_SECRET="your-github-client-secret"
```

**Generate secrets:**
```bash
# Generate NEXTAUTH_SECRET
openssl rand -base64 32

# Generate NEXTAUTH_JWT_SECRET
openssl rand -base64 32
```

### 5. Set up OAuth providers (optional)

#### Google OAuth
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add authorized redirect URI: `http://localhost:3000/api/auth/callback/google`
6. Copy Client ID and Client Secret to `.env`

#### GitHub OAuth
1. Go to [GitHub Developer Settings](https://github.com/settings/developers)
2. Create a new OAuth App
3. Set Authorization callback URL: `http://localhost:3000/api/auth/callback/github`
4. Copy Client ID and Client Secret to `.env`

### 6. Initialize database

Run Prisma migrations to create the database schema:
```bash
bun prisma migrate dev
```

Or with npm:
```bash
npx prisma migrate dev
```

### 7. Start development server

```bash
bun dev
```

Or with npm:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

---

## 🔧 Available Scripts

- `bun dev` - Start development server
- `bun build` - Build for production
- `bun start` - Start production server
- `bun lint` - Run ESLint
- `bun prisma generate` - Generate Prisma Client
- `bun prisma migrate dev` - Run database migrations
- `bun prisma studio` - Open Prisma Studio (database GUI)

---

## 🔒 Security Notes

- Always use environment variables for sensitive data
- Never commit `.env` files to version control
- Keep your database credentials secure
- See `RLS_SETUP.md` for more information about Row Level Security configuration

---

## 📄 License

This project is licensed under the MIT License.
