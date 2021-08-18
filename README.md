This is a new portfolio website I am creating using [Next.js](https://nextjs.org/) to improve on the initial design, create a faster and more maintainable React.js app, and became more familiar with this tool (React.js framework which uses SSR & SSG for better performance and SEO). My older portfolio website (hosted [here](https://eloquent-bhaskara-4b11e4.netlify.app/)) was originally made using HTML, CSS, and native JavaScript.

This website is deployed on Vercel here: [https://giavinhlam.me](https://giavinhlam.me)

## Getting Started

First, run the development server:

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

## Todos

1. Overhaul and convert to TypeScript
2. Some constants could be extracted to constants/ folder (and helper functions i.e. lazy CSS loading)
3. Add old chat, socsreynolds, mrflatbeds, and form builder projects
4. Convert all icons into SVGs so we don't need to call/rely on devicon link
5. Disabled buttons on featured projects page for mobile navs
6. Consider adding framer motion for animations/transitions
7. Small date badges beside projects (top right of title)
8. For accessibility, change some lighter greys to #767676
9. Filter (fixed icon for filtering projects by technology)
10. Storybook (for fun)
11. Integrate CMS to easily add new projects (maybe Strapi/Netlify CMS)

## In progress

1. Fix some image sizes for projects so they are all aligned
