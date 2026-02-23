# Fleurizz — Contexte projet

## Description

Fleurizz est un service d'abonnement mensuel de livraison de fleurs. Un homme en couple s'abonne, et chaque mois un bouquet de saison est livré à sa copine par un fleuriste partenaire. Le public cible arrive depuis des ads TikTok/Instagram (mobile first, scroll rapide, attention courte).

**Statut actuel** : pré-lancement. Le site collecte uniquement des emails via une inscription newsletter sur `/inscription`. Aucun backend, aucun paiement, aucune auth.

## Stack technique

- **Next.js 16** (App Router, React 19)
- **TypeScript** strict
- **Tailwind CSS v4** (thème via `@theme inline` dans globals.css, pas de tailwind.config)
- **motion** (ex Framer Motion) — import depuis `"motion/react"`
- **Amplitude** (`@amplitude/analytics-browser`) — clé API via `NEXT_PUBLIC_AMPLITUDE_API_KEY`
- **React Hook Form + Zod v4** pour la validation formulaire
- **next/font/google** pour Cormorant et Cormorant Garamond

## Architecture fichiers

```
src/
├── app/
│   ├── layout.tsx              # Layout racine (fonts, metadata, AmplitudeProvider)
│   ├── page.tsx                # Landing page (assemble les sections)
│   ├── globals.css             # Tailwind v4 @theme inline (couleurs, fonts, base)
│   ├── inscription/
│   │   ├── page.tsx            # Page newsletter (fond noir, centré)
│   │   └── tracker.tsx         # Client component pour tracker page view
│   ├── mentions-legales/
│   │   └── page.tsx            # Placeholder
│   └── confidentialite/
│       └── page.tsx            # Placeholder
├── components/
│   ├── sections/               # Sections de la landing page (toutes "use client")
│   │   ├── Hero.tsx            # Fond noir, titre principal, CTA
│   │   ├── HowItWorks.tsx      # Fond blanc, 3 étapes
│   │   ├── WhyFleurizz.tsx     # Fond noir, 4 arguments
│   │   ├── Pricing.tsx         # Fond blanc, offre unique 34,90€
│   │   ├── Testimonials.tsx    # Fond rose-light, témoignages
│   │   └── FinalCTA.tsx        # Fond vert, CTA final
│   ├── ui/
│   │   ├── Button.tsx          # Bouton réutilisable (primary/secondary, tracking intégré)
│   │   ├── SectionWrapper.tsx  # Wrapper animation whileInView + tracking section
│   │   └── Badge.tsx           # Badge pill (rounded-full)
│   ├── layout/
│   │   ├── Header.tsx          # Header sticky (logo + CTA)
│   │   └── Footer.tsx          # Footer noir (liens légaux, copyright)
│   └── forms/
│       └── NewsletterForm.tsx  # Formulaire newsletter (RHF + Zod, RGPD)
├── lib/
│   ├── amplitude.tsx           # AmplitudeProvider + trackEvent()
│   └── fonts.ts                # Cormorant + Cormorant Garamond (next/font)
```

## Design system

### Couleurs (définies dans globals.css @theme inline)

| Token         | Hex       | Usage                          |
|---------------|-----------|--------------------------------|
| `noir`        | `#0D0D0D` | Fond hero/why/footer, textes   |
| `blanc`       | `#FAFAF8` | Fond clair, espaces            |
| `rose`        | `#E8C4C8` | CTA primary, accents           |
| `rose-light`  | `#F5E6E8` | Fond témoignages, hover states |
| `rose-dark`   | `#D4A0A6` | Textes erreur sur fond sombre  |
| `vert`        | `#2D4A3E` | Fond CTA final, badges         |
| `vert-light`  | `#3D6454` | Hover vert                     |
| `vert-dark`   | `#1B3A2D` | Fonds profonds                 |
| `gris`        | `#8A8A8A` | Textes secondaires             |
| `gris-light`  | `#E5E5E3` | Bordures, séparateurs          |

### Typographie

- **`font-heading`** → Cormorant, weight 500. Pour h1, h2, accroches.
- **`font-body`** → Cormorant Garamond, weight 500. Pour paragraphes, boutons, UI.
- **Labels** → Cormorant Garamond, weight 600, `uppercase tracking-[0.2em] text-xs`.

### Tokens de design

- Boutons : `rounded-none` (sharp, premium)
- Cards : `rounded-xl`
- Badges : `rounded-full`
- Espacement sections : `py-24` mobile, `md:py-32` desktop
- Max-width contenu : `max-w-5xl`
- Transitions : `duration-300 ease-out`

## Ton de voix

- Élégant, pas snob
- Complice, vouvoiement avec complicité
- Direct, phrases courtes, percutantes
- Pas d'emojis, pas de marketing agressif
- Langue : français

## Tracking Amplitude

Events définis :
- `landing_page_viewed`, `inscription_page_viewed` (page views)
- `cta_clicked` avec `{ location, label }` (hero, pricing, footer_cta, header)
- `section_viewed` avec `{ section }` (hero, how_it_works, why, pricing, testimonials, final_cta)
- `newsletter_form_started`, `newsletter_form_submitted` avec `{ has_firstname }`, `newsletter_form_error` avec `{ error_field }`

Le tracking est intégré dans `Button.tsx` (CTA clicks) et `SectionWrapper.tsx` (section views).

## Conventions

- **Mobile first** : CSS part du mobile, adapté en `md:` et `lg:`
- **Server components par défaut** : seuls les composants utilisant motion, hooks ou interactivité sont `"use client"`
- **Imports** : utiliser le path alias `@/` (mappe vers `src/`)
- **Pas de dark mode** : thème unique clair/sombre par section
- **Pas d'images** : utiliser des dégradés CSS et formes abstraites
- **Favicon** : emoji 🌸 en SVG inline (défini dans layout.tsx metadata)
- **Copyright** : "© 2025 Fleurizz — Tous droits réservés"

## Ce qui n'existe pas encore

- Backend / API (le formulaire fait un console.log)
- Base de données
- Système de paiement
- Authentification
- Pages légales rédigées (ce sont des placeholders)
- Vrais témoignages
- Vraies images de bouquets

## Commandes

```bash
npm run dev    # Serveur de développement
npm run build  # Build production
npm run lint   # ESLint
```
