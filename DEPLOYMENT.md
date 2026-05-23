Vercel Deployment Checklist — finance

1) Vercel Project Settings
- Project Name: finance
- Root Directory: ./
- Framework Preset: Next.js
- Install Command: npm install
- Build Command: next build
- Output Directory: (leave blank)  <-- IMPORTANT: do NOT set the literal text "Next.js default"

2) Environment Variables (Paste .env contents or add keys individually)
Replace placeholders before pasting:

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_bW9kZXN0LWZsb3VuZGVyLTM3LmNsZXJrLmFjY291bnRzLmRldiQ
CLERK_SECRET_KEY=sk_test_ns96qMGUgIdH3m1leZG1Udc3O2UVZyKPMymuVrJhFL
NEXT_PUBLIC_CLERK_SIGN_IN_URL=sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=sign-up
DATABASE_URL="postgresql://postgres.trbjafdsurkerlkswvhn:<DB_PASSWORD>@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres?pgbouncer=true"
DIRECT_URL="postgresql://postgres.trbjafdsurkerlkswvhn:<DB_PASSWORD>@aws-0-ap-southeast-1.pooler.supabase.com:5432/postgres"
ARCJET_KEY=ajkey_01jgev5s7ce0dt1afybf9d3xp6

- Replace <DB_PASSWORD> with your real DB password.
- Mark secrets (e.g., CLERK_SECRET_KEY, DATABASE_URL, DIRECT_URL) as "Encrypted" in Vercel.
- Set these values for Production and Preview environments.

3) Common Build Issues & Fixes
- "The Next.js output directory \"Next.js default\" was not found":
  -> This happens when you set the Output Directory field to the literal text "Next.js default" in the Vercel UI. Clear that field (leave blank) so Vercel uses the framework default (.next).

- "ESLint: Cannot serialize key \"parse\" in parser":
  -> Fixed in repository by setting `eslint.ignoreDuringBuilds = true` in `next.config.mjs` to avoid running ESLint during Vercel builds which can fail if your ESLint config uses functions.

- Arcjet Edge warning during build:
  -> Build may warn that a Node API is used in the Edge runtime (e.g., process.release). This is a warning, not a fatal error. If you want to remove it, consider using Arcjet's Edge-compatible import or moving Arcjet middleware to a server-only handler.

4) Recommended Next Steps (before you push)
- Confirm `next.config.mjs` contains `eslint.ignoreDuringBuilds = true` (this repo already updated it).
- In Vercel Project settings, ensure the "Output Directory" is blank.
- Add the environment variables (paste .env contents) and set secrets.
- Trigger deploy from the Vercel UI or by pushing to GitHub once you're ready.

5) Optional: Upgrade Next.js
- The build log reported `next@15.0.4` with a security advisory. Consider upgrading to a patched Next.js version before production deployment.

If you'd like, I can also prepare a PR with a small change to the middleware to avoid the Arcjet Edge runtime warning; tell me to proceed and I will implement it locally (won't push). 
