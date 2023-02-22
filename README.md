[![CI](https://github.com/giavinh79/portfolio-new/actions/workflows/main.yml/badge.svg)](https://github.com/giavinh79/portfolio-new/actions/workflows/main.yml)

This is a new portfolio website I am creating using [Next.js](https://nextjs.org/) to improve on the initial design, create a faster and more maintainable React.js app, and became more familiar with this tool (React.js framework which uses SSR & SSG for better performance and SEO). My older portfolio website (hosted [here](https://eloquent-bhaskara-4b11e4.netlify.app/)) was originally made using HTML, CSS, and JavaScript.

This website is deployed on Vercel here: [https://giavinhlam.com](https://giavinhlam.com)

## Getting Started

First, run the development server (Node.js version >= 17):

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in the browser to see the page.

## Linting

Add the ESLint extension and run this command to check for problems:

```bash
npx next lint
```

## Resources

Technology Icons: https://devicons.github.io/devicon/

## In progress

1. Fix some image sizes for projects so they are all aligned

## Todos

1. Light/Dark Mode toggle + defaults via `prefers-color-scheme` setting
2. Integrate CMS to easily add new projects (i.e. Prismic, DatoCMS...)
3. Add old chat, socsreynolds, mrflatbeds, and form builder projects
4. Convert all icons into SVGs so we don't need to call/rely on devicon link
5. Disabled buttons on featured projects page for mobile navs
6. Get rid of font-awesome (bundle size too large) and just download & import SVGs for icons
7. Internationalization
8. Filter (fixed icon for filtering projects by technology)
9. Simple animation https://github.com/formkit/auto-animate
10. Small date badges beside projects (top right of title)
11. Accessibility of Masonry library I'm using
12. For fun? SVG eyes that follow cursor
13. Progressive web app integration? https://github.com/shadowwalker/next-pwa
