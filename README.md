# NyayIQ v2 — Static HTML Mockup

**31 pages · Editorial Cream design system · Deploy-ready**

---

## Files

| File | Purpose |
|------|---------|
| `preview.html` | **Start here** — single file with sidebar navigation across all 31 pages |
| `styles.css` | Shared design system (used by all 31 pages) |
| 31 × `.html` files | Individual deploy-ready pages |

## How to preview locally

Open `preview.html` in any browser. Click any page on the left to see it in the frame. Use **Open in new tab** for full-screen view.

## How to deploy (GitHub Pages)

1. Commit all `.html` files + `styles.css` to your repo root (or `docs/` folder)
2. GitHub → Settings → Pages → Source: `main` branch, root
3. Site goes live at `<username>.github.io/<repo-name>`

For the `nyayiq-v2.vercel.app` staging URL:
1. Import repo into Vercel
2. Framework: **Other** (static HTML)
3. Deploy — done

## Page inventory (31)

### Public (7)
- `index.html` · Home
- `about.html` · About / founder
- `pricing.html` · Plans + FAQ (with monthly/yearly toggle)
- `articles.html` · Articles grid
- `article-single.html` · Full article view
- `how-it-works.html` · 4-step process
- `contact.html` · Contact form

### Auth (5)
- `signup.html` · Create account
- `login.html` · Welcome back
- `verify.html` · Email verification pending
- `verify-success.html` · Email verified
- `forgot-password.html` · Password reset

### App / Authenticated (8)
- `app.html` · Dashboard (daily feed + AI co-counsel)
- `judgement.html` · Single judgement with AI summary
- `search.html` · Semantic search
- `upload.html` · PDF upload + analysis
- `bookmarks.html` · Organized bookmarks folders
- `settings.html` · Profile, preferences, security
- `billing.html` · Subscription, invoices, payment method
- `usage.html` · Usage stats with charts

### Admin (4)
- `admin.html` · Dashboard (MRR, users, system health)
- `admin-users.html` · User management
- `admin-judgements.html` · Content pipeline
- `admin-articles.html` · Editorial management

### Legal (5) — ⚠ placeholder content, lawyer to vet before launch
- `privacy.html` · Privacy Policy (DPDP Act 2023)
- `terms.html` · Terms of Use
- `disclaimer.html` · Legal disclaimer
- `refund.html` · Refund Policy
- `cookies.html` · Cookie Policy

### Utility (2)
- `404.html` · Page not found
- `500.html` · Server error

## Design system (locked)

- **Palette:** cream `#f5ecd9`, paper `#faf6ee`, burnt orange `#b84a1e`, orange-deep `#8f3615`, gold `#b88a3e`, ink `#2b1f15`
- **Type:** Fraunces (display/italic), EB Garamond (body), Inter Tight (UI), JetBrains Mono (meta)
- **Motifs:** italic emphasis on key words, diamond ornaments (◆), roman numerals for steps, pullquotes with orange left-border, paper-texture noise overlay

## Links that don't work yet (expected)

All `<a>` tags point to other pages in the set — they all work. Buttons and forms are visual only (no backend wired). This is intentional; these are UI mockups for review before the Next.js rebuild.

## Known TODOs for Phase 2

- [ ] Legal pages — lawyer vetting in Week 2
- [ ] Mobile responsive fine-tuning on `app.html` dashboard (3-column grid collapses to 1 column below 1200px)
- [ ] Actual screenshot/illustrations to replace text-only case cards on home hero
- [ ] Dark mode (deferred — cream aesthetic is the identity)

---

**Built with:** Fraunces + EB Garamond + Inter Tight + JetBrains Mono
**Generated:** 22 April 2026
**Contact:** contact@nyayiq.in
