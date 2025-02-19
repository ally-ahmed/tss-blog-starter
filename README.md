# TSS Blog Starter 🏝️

A blog/portfolio starter project built with TanStack Start.

![demo](./demo.png)

## Demo

https://tss-blog-starter.pages.dev/

## Features

- React-19
- MDX and Markdown support
- Syntax highlighting
- Tailwind CSS
- Light/dark mode toggle
- Custom fonts
- Sitemap and Robots.txt
- Static prerendering for static and dyanmic pages
- Font optimisation (coming soon)
- Dynamic OG images (coming soon)

## Tech

- [TanStack Start](https://tanstack.com/router/latest/docs/framework/react/guide/tanstack-start#tanstack-start)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com/)
- [Content Collections](https://www.content-collections.dev/)

## Getting Started

There are two ways of initializing the `tss-blog-starter` app. You can either use this repository as a template or manually clone the app.

### Template

[Use this template](https://github.com/new?template_name=tss-blog-starter&template_owner=ally-ahmed)

### Manually

Clone project

```bash
  git clone git@github.com:ally-ahmed/tss-blog-starter.git
  cd tss-blog-starter
```

Install depndencies

```bash
pnpm install --frozen-lockfile
```

To install dependencies that match the pnpm-lock.yaml

Run app

```bash
pnpm dev
```

## Deployment

Currently using `vercel` as the deployment target in `tss-blog-starter`. To deploy to other targets see [TanStack Start docs on deployment](https://tanstack.com/router/latest/docs/framework/react/start/hosting#deployment).

## Roadmap

- [ ] Use robots vite plugin
- [ ] Scroll restoration
- [ ] Dynamic OG image generation
- [ ] Tailwind CSS V4
- [ ] Finish up `On this page` component
- [ ] Image optimisation
- [ ] Font optimisation

## Acknowledgements

- [UI inspired by Vercel portfolio blog starter](https://vercel.com/templates/next.js/portfolio-starter-kit)
- [Orc Dev screen size component](https://www.orcdev.com/components/screen-size)
- [shadcn-ui/taxonomy](https://github.com/shadcn-ui/taxonomy/tree/651f984e52edd65d40ccd55e299c1baeea3ff017)
- [antfu/eslint-config](https://github.com/antfu/eslint-config)
