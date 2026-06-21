# Agent Guide

## Project Shape

This is a React 19 + TypeScript + Vite CV app styled with Tailwind CSS 4.

- `src/App.tsx` renders the CV page.
- `src/data/cv.ts` is the source of truth for CV content.
- `src/components` contains reusable UI components and component tests.
- `src/utils` contains shared helpers and utility tests.
- `vite.config.ts` configures Vite, Tailwind, Vitest, aliases, and coverage.

## Commands

- `npm run dev` starts the local Vite dev server.
- `npm run build` runs `tsc -b` and builds the app with Vite.
- `npm run lint` runs ESLint across the project.
- `npm test` runs Vitest once.
- `npm run test:watch` runs Vitest in watch mode.
- `npm run coverage` runs Vitest with coverage.

## Coding Conventions

- Use TypeScript and React function components.
- Prefer the existing path aliases: `@components` and `@utils`.
- Keep CV content changes centralized in `src/data/cv.ts` unless the data shape itself must change.
- Keep reusable components small and colocate their tests in `__tests__`.
- Preserve print-friendly behavior such as `print:hidden` controls and avoid unnecessary layout churn.
- Follow the existing formatting style: single quotes, no semicolons, and concise JSX.

## Testing Guidance

- Add or update Vitest tests for utility behavior and reusable component behavior.
- For documentation-only changes, no runtime tests are required.
- For code changes, run the most relevant tests and `npm run build` when feasible.

## Deployment

GitHub Actions builds on Node 18 when changes land on `main`, then deploys the `dist` folder to the `gh-pages` branch.
