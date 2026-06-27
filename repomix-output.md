This file is a merged representation of the entire codebase, combined into a single document by Repomix.
The content has been processed where comments have been removed, empty lines have been removed, content has been compressed (code blocks are separated by ⋮---- delimiter).

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Code comments have been removed from supported file types
- Empty lines have been removed from all files
- Content has been compressed - code blocks are separated by ⋮---- delimiter
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
.github/workflows/deploy.yml
.gitignore
.prettierignore
.prettierrc.json
.repomixignore
AGENTS.md
eslint.config.js
index.html
package.json
README.md
repomix.config.json
src/App.tsx
src/components/Link/__tests__/Link.test.tsx
src/components/Link/Link.tsx
src/components/List/__tests__/List.test.tsx
src/components/List/List.tsx
src/data/cv.ts
src/index.css
src/main.tsx
src/test.setup.ts
src/utils/__tests__/utils.test.ts
src/utils/utils.ts
src/vite-env.d.ts
tsconfig.json
vite.config.ts
```

# Files

## File: .repomixignore
```
# Add patterns to ignore here, one per line
# Example:
# *.log
# tmp/
```

## File: repomix.config.json
```json
{
  "$schema": "https://repomix.com/schemas/latest/schema.json",
  "input": {
    "maxFileSize": 52428800
  },
  "output": {
    "filePath": "repomix-output.md",
    "style": "markdown",
    "parsableStyle": false,
    "fileSummary": true,
    "directoryStructure": true,
    "files": true,
    "removeComments": true,
    "removeEmptyLines": true,
    "compress": true,
    "topFilesLength": 5,
    "showLineNumbers": false,
    "truncateBase64": false,
    "copyToClipboard": false,
    "includeFullDirectoryStructure": false,
    "tokenCountTree": false,
    "git": {
      "sortByChanges": true,
      "sortByChangesMaxCommits": 100,
      "includeDiffs": false,
      "includeLogs": false,
      "includeLogsCount": 50
    }
  },
  "include": [],
  "ignore": {
    "useGitignore": true,
    "useDotIgnore": true,
    "useDefaultPatterns": true,
    "customPatterns": []
  },
  "security": {
    "enableSecurityCheck": true
  },
  "tokenCount": {
    "encoding": "o200k_base"
  }
}
```

## File: .prettierignore
```
public
dist
node_modules
```

## File: .prettierrc.json
```json
{
  "printWidth": 80,
  "tabWidth": 2,
  "semi": false,
  "singleQuote": true,
  "trailingComma": "all"
}
```

## File: AGENTS.md
```markdown
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
```

## File: src/components/Link/__tests__/Link.test.tsx
```typescript
import { render, screen } from '@testing-library/react'
import { Link } from '../Link'
```

## File: src/components/List/__tests__/List.test.tsx
```typescript
import { render, screen } from '@testing-library/react'
import { List } from '../List'
```

## File: src/test.setup.ts
```typescript

```

## File: src/utils/__tests__/utils.test.ts
```typescript
import { upperCaseFirstLetter } from '../utils'
```

## File: src/vite-env.d.ts
```typescript

```

## File: src/components/Link/Link.tsx
```typescript
export const Link = (
```

## File: src/components/List/List.tsx
```typescript

```

## File: src/main.tsx
```typescript
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
⋮----
import App from './App'
```

## File: src/utils/utils.ts
```typescript
export const upperCaseFirstLetter = (str: string): string =>
```

## File: .github/workflows/deploy.yml
```yaml
name: Deploy React App to GitHub Pages
on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main
    types:
      - closed
permissions:
  contents: write
jobs:
  deploy:
    if: github.event_name == 'push' || (github.event_name == 'pull_request' && github.event.pull_request.merged == true)
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
      - name: Install Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 18
          cache: 'npm'
      - name: Install dependencies
        run: npm install
      - name: Build the project
        run: npm run build
      - name: Deploy to GitHub Pages
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          branch: gh-pages
          folder: dist
          clean: true
```

## File: .gitignore
```
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local
*.tsbuildinfo

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

# Tests output
coverage
```

## File: eslint.config.js
```javascript

```

## File: package.json
```json
{
  "name": "vite-project",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "test": "vitest",
    "coverage": "vitest --coverage",
    "test:ui": "vitest --ui",
    "test:watch": "vitest --watch"
  },
  "dependencies": {
    "@tailwindcss/vite": "^4.0.13",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "tailwindcss": "^4.0.13"
  },
  "devDependencies": {
    "@eslint/js": "^9.21.0",
    "@testing-library/jest-dom": "^6.6.3",
    "@testing-library/react": "^16.2.0",
    "@types/jest": "^29.5.14",
    "@types/react": "^19.0.10",
    "@types/react-dom": "^19.0.4",
    "@vitejs/plugin-react": "^4.3.4",
    "@vitest/coverage-v8": "^3.0.8",
    "eslint": "^9.21.0",
    "eslint-plugin-react-hooks": "^5.1.0",
    "eslint-plugin-react-refresh": "^0.4.19",
    "globals": "^15.15.0",
    "jsdom": "^26.0.0",
    "typescript": "~5.7.2",
    "typescript-eslint": "^8.24.1",
    "vite": "^6.2.0",
    "vitest": "^3.0.8"
  }
}
```

## File: README.md
```markdown
# CV

React, TypeScript, Vite, and Tailwind CV app.

## Commands

- `npm run dev`
- `npm run build`
- `npm run lint`
- `npm test`
```

## File: src/index.css
```css
@theme {
⋮----
:root {
⋮----
*:focus {
⋮----
a,
button {
⋮----
@apply cursor-pointer;
⋮----
a:hover,
⋮----
@apply no-underline;
⋮----
h1 {
⋮----
h2,
⋮----
@apply text-5xl;
⋮----
h2 {
⋮----
@apply text-3xl;
⋮----
h3 {
⋮----
@apply text-2xl;
⋮----
h4 {
⋮----
@apply text-xl;
⋮----
h5,
⋮----
@apply text-base;
⋮----
ol,
⋮----
@apply text-blue-500;
⋮----
@apply text-blue-600;
```

## File: tsconfig.json
```json
{
  "compilerOptions": {
    "target": "ESNext",
    "lib": ["ESNext", "DOM"],
    "types": ["vite/client", "vitest/globals"],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "exclude": ["node_modules"]
}
```

## File: index.html
```html
<!DOCTYPE html>
<html lang="en" class="dark">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Roman Horobets - Front-end Engineer</title>
    <meta
      name="description"
      content="Experienced Front-end Engineer with expertise in React, TypeScript, and modern web development."
    />
    <meta property="og:title" content="Roman Horobets - Front-end Engineer" />
    <meta
      property="og:description"
      content="Experienced Front-end Engineer specializing in React, TypeScript, and UI/UX design."
    />
    <meta property="og:url" content="https://mentikora.github.io/" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Roman Horobets - Front-end Engineer" />
    <meta
      name="twitter:description"
      content="React, TypeScript, UI/UX Expert. Passionate about building scalable web applications."
    />
    <meta name="robots" content="index, follow" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap"
      rel="stylesheet"
    />
  </head>
  <body class="m-0 flex min-w-[320px] min-h-screen">
    <div id="root" class="max-w-7xl w-full mx-auto p-4"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

## File: vite.config.ts
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
```

## File: src/App.tsx
```typescript
import { Link } from './components/Link/Link'
import { List } from './components/List/List'
import { CVData } from './data/cv'
import { upperCaseFirstLetter } from './utils/utils'
⋮----
return (
```

## File: src/data/cv.ts
```typescript

```
