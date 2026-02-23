# Fleurizz — Direction Artistique

## Palette de couleurs

Variables définies dans `src/app/globals.css` via `@theme inline` :

```
noir:        #0D0D0D    → fond principal dark, textes
blanc:       #FAFAF8    → fond clair, espaces
rose:        #E8C4C8    → CTA, accents, détails
rose-light:  #F5E6E8    → fonds légers, hover states
rose-dark:   #D4A0A6    → textes sur fond rose
vert:        #2D4A3E    → éléments naturels, confiance, badges
vert-light:  #3D6454    → hover sur vert
vert-dark:   #1B3A2D    → fonds profonds
gris:        #A8A8A8    → textes secondaires sur fond sombre (contraste ~6.7:1 sur noir)
gris-dark:   #6B6B6B    → textes secondaires sur fond clair (contraste ~5.3:1 sur blanc)
gris-light:  #E5E5E3    → bordures, séparateurs
```

## Typographie

Chargée via `next/font/google` dans `src/lib/fonts.ts`.

- **Titres / Display** : `Cormorant` — weight 500 (Medium). Utilisé pour les h1, h2, accroches héroïques. Classe Tailwind : `font-heading`.
- **Corps / UI** : `Cormorant Garamond` — weight 500 (Medium). Utilisé pour les paragraphes, boutons, navigation. Classe Tailwind : `font-body`.
- **Labels / Petits textes** : `Cormorant Garamond` — weight 600, `tracking-[0.2em]`, `uppercase`, `text-xs`.

### Échelle de tailles (surchargée dans `@theme inline`)

Les tailles Tailwind sont augmentées de +2px par palier pour une meilleure lisibilité :

| Classe      | Défaut Tailwind | Fleurizz  |
|-------------|-----------------|-----------|
| `text-xs`   | 12px / 16px     | 14px / 20px |
| `text-sm`   | 14px / 20px     | 16px / 24px |
| `text-base` | 16px / 24px     | 18px / 28px |
| `text-lg`   | 18px / 28px     | 20px / 30px |
| `text-xl`   | 20px / 28px     | 22px / 32px |

Les tailles `text-2xl` et au-dessus restent inchangées (titres).

## Tokens de design

- Boutons : `rounded-none` (sharp, premium)
- Cards : `rounded-xl` (12px)
- Badges / pills : `rounded-full`
- Espacement sections : `py-24` mobile, `py-32` desktop
- Max-width contenu : `max-w-5xl` (1100px)
- Transitions : `duration-300 ease-out`

## Ton de voix

- Élégant, pas snob
- Complice, pas familier (on tutoie pas, on vouvoie avec complicité)
- Direct, pas froid
- Phrases courtes, percutantes
- Pas d'emojis, pas de "🔥", pas de marketing agressif

## Structure des sections

### Landing page (`/`)

Single page avec plusieurs sections qui se scrollent. Chaque section a une animation d'entrée au scroll (motion, `whileInView`).

#### Hero — fond `noir`
- Titre : **"Elle reçoit des fleurs. Vous n'y pensez plus."** (Cormorant, Medium 500, grande taille)
- Sous-titre : **"Un bouquet de saison, composé par un artisan fleuriste, livré chaque mois à la personne que vous aimez."** (Cormorant Garamond, Medium 500)
- CTA : **"Choisir mon abonnement"** → `/inscription`
  - Style : fond `rose`, texte `noir`, uppercase, letter-spacing, `rounded-none`, padding généreux
  - Hover : fond `blanc`
- Mention sous le CTA : **"À partir de 34,90€ / mois — Sans engagement"** (gris, italic)
- Effet visuel : léger gradient radial rose et vert en arrière-plan, très discret

#### Comment ça marche — fond `blanc`
- Titre : **"Trois étapes. Zéro effort."**
- 3 étapes en colonnes (mobile : empilées) :
  1. **"Vous choisissez"** — "Un abonnement mensuel, au rythme qui vous convient."
  2. **"On compose"** — "Chaque mois, un artisan fleuriste crée un bouquet de saison unique."
  3. **"Elle sourit"** — "Livré directement chez elle. Vous n'avez rien à faire."
- Numéros stylisés (01, 02, 03) en grand, couleur `rose`
- Animation : apparition décalée de chaque étape (stagger)

#### Pourquoi Fleurizz — fond `noir`
- Titre : **"Le geste qui compte, automatisé."**
- 4 arguments en grille, cards avec bordure subtile `gris-light`, texte `blanc` :
  - **"Sans engagement"** — "Résiliez quand vous voulez. Pas de piège."
  - **"Bouquets de saison"** — "Des fleurs fraîches, composées par des artisans, jamais les mêmes."
  - **"Livraison incluse"** — "Directement chez elle, à la date de votre choix."
  - **"Un rappel de moins"** — "Plus besoin d'y penser. On s'occupe de tout."

#### Pricing — fond `blanc`
- Titre : **"Un abonnement. Un bouquet. Chaque mois."**
- Une seule offre, présentation simple et premium :
  - Prix : **34,90€ / mois**
  - Inclus : bouquet de saison, livraison, carte personnalisée
  - Badge "Offre de lancement" en `vert`
  - CTA : **"Commencer"** → `/inscription`

#### Témoignages — fond `rose-light`
- 2-3 témoignages courts (inventés, à remplacer) :
  - "Ma copine attend son bouquet chaque mois maintenant. Meilleure décision." — Thomas, 28 ans
  - "Simple, élégant, et elle adore. Je recommande." — Maxime, 32 ans
- Style : italic, typographie Cormorant, sobre

#### CTA final — fond `vert`
- Titre : **"Prêt à marquer des points ?"**
- CTA : **"Commencer maintenant"** → `/inscription`
  - Style : fond `rose`, texte `noir`

#### Footer — fond `noir`
- Logo Fleurizz (texte, Cormorant)
- Liens : Mentions légales, Politique de confidentialité, Contact (mailto)
- Copyright : "© 2025 Fleurizz — Tous droits réservés"

### Page inscription (`/inscription`)

- Fond : `noir`, centré verticalement
- Titre : **"Soyez les premiers informés."**
- Sous-titre : **"Laissez-nous votre email et on vous prévient dès que Fleurizz est disponible."**
- Formulaire :
  - Champ email : bordure fine `gris`, fond transparent, texte `blanc`, placeholder "votre@email.com"
  - Champ prénom (optionnel) : même style
  - Checkbox RGPD (obligatoire, non pré-cochée) : "J'accepte de recevoir des emails de Fleurizz. Consultez notre politique de confidentialité."
  - Bouton submit : **"Réserver ma place"** — fond `rose`, texte `noir`
- État après soumission : **"Votre place est réservée. Nous vous contactons très bientôt pour finaliser votre abonnement."** avec disparition du formulaire, animation douce

## Principes visuels

- **Mobile first** : tout est pensé mobile d'abord, puis adapté desktop
- **Pas d'images** : utiliser des backgrounds CSS, dégradés, formes abstraites pour évoquer les fleurs
- **Animations** : subtiles et élégantes. Pas de bounce, pas de spring exagéré. `fadeIn` avec léger `translateY`, stagger delays. Les animations ne doivent pas ralentir la navigation.
- **Favicon** : emoji 🌸 en SVG inline
- **Accessibilité** : labels sur tous les champs, contraste suffisant, navigation clavier
- **Performance** : Lighthouse > 90 mobile, pas de dépendances inutiles
