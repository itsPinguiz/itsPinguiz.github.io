# Stefano Zizzi — Portfolio

Personal AI engineering and research portfolio built with Astro, TypeScript and plain CSS.

The site includes static project case studies, structured `Person` data, Open Graph metadata,
a generated XML sitemap, accessible navigation and a redacted public CV.

## Local development

```bash
npm install
npm run dev
```

## Content

Project data lives in `src/content/projects/`. Each Markdown file contains the problem, approach,
personal contribution, result and evidence link displayed on the homepage.

The public CV source lives in `cv/CV__ENG__redacted/`. During deployment, GitHub Actions compiles
`resume.tex` and publishes the result at `/cv/stefano-zizzi-cv.pdf`.

## Deployment

Pushes to `main` are built and published to GitHub Pages through `.github/workflows/deploy.yml`.
