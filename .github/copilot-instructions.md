# Copilot Instructions

This document provides guidance for AI coding agents to effectively contribute to this project.

## Architecture

This is a Turborepo monorepo using pnpm as the package manager. It contains two Next.js applications:

- `apps/higitec`: A Next.js application.
- `apps/refitec`: Another Next.js application.

It also includes the following shared packages:

- `packages/ui`: A shared React component library.
- `packages/eslint-config`: Shared ESLint configurations.
- `packages/typescript-config`: Shared TypeScript configurations.

Both applications are built with TypeScript and Next.js.

## Developer Workflow

The project uses `pnpm` and `turbo` for dependency and monorepo management.

### Key commands

- `pnpm install`: Install dependencies.
- `pnpm dev`: Run all applications in development mode.
- `pnpm build`: Build all applications.
- `pnpm lint`: Lint the codebase.
- `pnpm format`: Format the code using Prettier.

To run a specific application in development mode, use the filter flag with `turbo`:

- `pnpm --filter higitec dev`: Run the `higitec` app.
- `pnpm --filter refitec dev`: Run the `refitec` app.

## Conventions

### Styling:

This project uses Tailwind CSS. Utility classes should be used for styling. Configuration can be found in the `tailwind.config.ts` or `global.css` for `refitec` that uses tailwindcss v4.

for the Refitec project, we are using tailwindcss v4, so the configuration is in the `global.css` file, use the color palette defined there. The yellow is the `secondary`, the blue is the `primary` and dark most present in text is the `foreground`, also the `muted` and `muted-foreground` are tones of light blue.

- **Shared Components**: Reusable React components are located in the `packages/ui/src` directory. When creating new components that might be used across applications, place them here.
- **Linting and Formatting**: The project enforces a consistent code style using ESLint and Prettier. Make sure to run `pnpm lint` and `pnpm format` before committing changes.

## Internationalization (i18n)

Both applications, `higitec` and `refitec`, are set up for internationalization.

- In `higitec`, you will find a `[locale]` directory under `src/app`, which is used for routing based on language. Dictionaries are in `src/dictionaries`.
- In `refitec`, language files are located in the `messages` directory (`en.json`, `pt.json`). The i18n setup is in `src/i18n`.

When adding or modifying user-facing text, ensure it is added to the appropriate JSON files for all supported languages.
