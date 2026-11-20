# NeuroVision SaaS website

A product-led marketing website for NeuroVision, the predictive design
intelligence platform for attention modelling, agentic audience research and
creative optimisation.

## Included

- SaaS-first product homepage
- Interactive attention / interpretation / optimisation demo
- Pay-as-you-go token pricing with a calculator (tokens and euros)
- A comparison with other attention-testing platforms, under pricing
- Product workflow and use cases, including A/B Testing and Digital Shelf
- About and team page
- Illustrative case study
- Privacy Policy and Terms of Use
- Responsive desktop and mobile layouts

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The project uses Next.js-compatible React components and the Vinext runtime.

## Deploy with GitHub Pages

The repository includes an automatic GitHub Pages workflow.

1. Upload the repository to the `main` branch.
2. Open **Settings → Pages** in GitHub.
3. Set the source to **GitHub Actions**.
4. The workflow builds and deploys the site automatically.

The workflow reads GitHub Pages' configured base path during every build. The
same source therefore works at both a repository URL such as
`https://USERNAME.github.io/neurovision-saas/` and at a configured custom
domain.

The included `CNAME` file points to `neurovision-ai.com`. Configure that domain
under **Settings → Pages** when its DNS is ready, or remove/update `public/CNAME`
if a different domain will be used.

Product calls to action point to:

- `http://app.neurovision-ai.com/register`
- `http://app.neurovision-ai.com/login`

Contact links use `info@neurovision-ai.com`.

## Changing prices

Every price on the site comes from `app/token-pricing-data.ts`: the euro price
of a token, the token cost of each action, and the top-up limits. Change a
number there and the calculator, the cost list, the home page and the FAQ all
follow.

To add an action to the calculator (for example A/B Testing or Digital Shelf,
once their token costs are decided), add its cost to that file, add a field to
`UsagePlan` and `planTokens`, and add a row in `app/token-pricing.tsx`.

The comparison under pricing is in `app/pricing-comparison.tsx`. It names no
other company. Its right-hand column summarises three platforms' public
websites as checked in November 2026, so re-check it from time to time.

## Main routes

- `/`
- `/about`
- `/case-studies`
- `/privacy`
- `/terms`

## Visual design

The look follows the November 2026 Figma design. `app/brand.css` is loaded last and holds the colours, type, gradient backgrounds and component styles; delete its import in `app/layout.tsx` to return to the previous look. Each tool has its own colour (`--t-attention`, `--t-audience`, `--t-studio`, `--t-ab`, `--t-shelf`), used by the tool rails (`app/tool-rail.tsx`), the calculator cards and the feature artwork (`app/feature-art.tsx`). Logo, gradient and grain images are in `public/logo.webp` and `public/assets/brand/`.
