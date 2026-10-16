# BNZN.dev

Portfolio with a Build / Verify lens: the same projects shown as dev work or as QA work.

## Run
    npm install
    npm run dev          # http://localhost:3000
    npx playwright install chromium
    npm test             # build + Playwright smoke + axe a11y checks

## Edit content
Projects live in `content/projects.json`. The red "Add:" boxes are placeholders for your real QA details; set `verifyTodo` to `""` once filled.

## Deploy
Push to GitHub, import the repo in Vercel. CI (`.github/workflows/ci.yml`) runs type-check and tests on every push.
