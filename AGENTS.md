# Kyle Hickman Personal Website

This repo contains my personal website, including blog posts and projects.

## Tech Stack

Astro powers the site, Bun manages scripts and dependencies, Tailwind CSS handles styling, and Pagefind provides static search.

## Development

When starting the dev server, use background mode:

```sh
bun run dev -- --background
```

Manage the background server with `bun astro dev stop`, `bun astro dev status`, and `bun astro dev logs`.

Before completing a task that changes files, run:

```sh
bun run format
```

## Documentation

Full documentation: <https://docs.astro.build>

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
