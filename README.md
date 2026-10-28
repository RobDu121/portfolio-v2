# Robert Dutt — Data Analytics Portfolio

Astro portfolio with four project case studies in Python, SQL, statistics, Excel, and Power BI.

Published address: https://robdu121.github.io/portfolio-v2/

## Work on the website

Use Node.js 24 and run these commands from this folder:

```sh
npm ci
npm run build
npm run verify
npm run preview
```

Open the preview address with `/portfolio-v2/` appended. The build generates the homepage and four project pages in `dist/`.

Project content lives in `src/data/projects.ts`. The dynamic `src/pages/projects/[slug].astro` page uses `getStaticPaths()` to generate one page per project at build time.

## How publishing works

1. `site` in `astro.config.mjs` sets the public domain; `base` sets the `/portfolio-v2` repository path.
2. `src/utils/paths.ts` adds that base to internal links and public image paths. Keep using this helper when adding links or images.
3. The layout builds absolute canonical, Open Graph page, and social image URLs from the configured domain.
4. In GitHub **Settings → Pages**, select **GitHub Actions** as the source.
5. Push changes to `main`. `.github/workflows/deploy.yml` installs the locked dependencies, builds and verifies the site, uploads `dist/`, and deploys it to GitHub Pages.

Inspect the repository's Actions tab for deployment progress. The workflow also supports **Run workflow** for manual deployment.

After publishing, check the homepage, all four project detail links, their images, and the Back to Projects navigation. `npm run verify` checks the generated routes, internal links, fragment targets, public assets, and social metadata before deployment.
