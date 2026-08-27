# Personal Finance Tracker — Project Notes

## What this is
A personal expense tracker that replaces manual Excel entry. It kills two
specific sources of friction: transcribing bank/card statements line by
line, and logging cash/off-bank purchases in the moment.

## Why / goals
- Primary user: me, daily — this needs to actually replace my Excel habit,
  not just demo well.
- Secondary goal: a real portfolio piece for PM/APM recruiting. The AI
  categorization piece doubles as technical-depth material (it's a real
  evals/failure-modes problem: merchant-name ambiguity, recurring charges,
  split transactions).
- Success bar, in order: (1) I stop opening Excel, (2) a few friends
  (ThaiSA network) can use it too.

## Platform decision
Mobile-first web app, shipped as a PWA — not native, at least not yet.
Reasoning: ships fast, no App Store review/fees, `next-pwa` handles most
of the manifest/service-worker setup. Revisit native later only if usage
justifies it (home screen widgets, cleaner biometric auth are the real
gaps vs. native).

## Stack
- Next.js
- Postgres via Supabase
- Plaid (Trial plan approved — real bank data, up to 10 linked accounts)
- Claude API for transaction categorization
- Deployed on Vercel

## Build order
1. Scaffold the Next.js app and deploy to Vercel immediately, even blank —
   always have a live URL to test against on my phone.
2. Wire up Plaid Link in **Sandbox mode** first (fake institutions/fake
   transactions). Prove the full connect → pull loop works before any
   real data touches it.
3. Set up the Postgres schema: users, linked accounts, transactions. Keep
   it minimal — add fields later only as actually needed.
4. Switch Plaid from Sandbox to real Trial data, link my own accounts,
   pull real transaction history.
5. Add AI categorization: send each transaction to the Claude API, tag a
   category, spot-check against my own judgment on edge cases (ambiguous
   merchant names, recurring charges, split purchases).
6. Add a quick-capture flow for cash/off-bank spend (a simple mobile
   form is enough to start). Add PWA basics: manifest.json, service
   worker, HTTPS.
7. Use it myself daily for ~2 weeks before inviting anyone else.

## Security must-haves (non-negotiable before a second real user joins)
- Never store or handle raw bank credentials — Plaid Link owns auth and
  hands back a token only.
- All API keys/secrets stay server-side and out of the repo (`.env`,
  gitignored).
- Every database query is scoped to the authenticated user — one user
  must never be able to see another's data.
- Confirm the Plaid token exchange is implemented correctly before
  linking any account beyond my own.

## Working style
I'm new to web dev and am relying on Claude Code to build this. I want
it to explain what it's doing at each step — especially anything
touching auth, secrets, or tokens — rather than just generating working
code silently. Work through the build order above one step at a time
rather than trying to do everything in one prompt.
