# NeuroVision SaaS website

A product-led marketing website for NeuroVision, the predictive design
intelligence platform for attention modelling, agentic audience research and
creative optimisation.

## Included

- SaaS-first product homepage
- Interactive attention / interpretation / optimisation demo
- Flexible-credit pricing
- Product workflow and use cases
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

## Main routes

- `/`
- `/about`
- `/case-studies`
- `/privacy`
- `/terms`
