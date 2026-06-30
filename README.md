# Principal AI — Investor Pipeline

A lightweight CRM for tracking investor relationships and accelerator opportunities. Built to be run, not just looked at.

One relationship per card. Who they are, what they're waiting on, what we owe them, and the next action. Nothing falls through.

## Why this exists

After Founders Village Tech Weekend we had a stack of investor conversations and no single place that said who was warm, what each person was waiting on, and what we still owed them. This app is that place.

It is also a deliberately simple, no-build web app so it is easy to keep developing, and a good candidate for running our own Code Trails on later.

## Run it locally

```bash
cd src
python3 -m http.server 8000
# visit http://localhost:8000
```

## Deploy to GitHub Pages (for the team)

The root `index.html` redirects to `src/index.html`.

**One-time setup — enable Pages:**
1. Go to repo **Settings → Pages**
2. Under **Source**, select **Deploy from branch: main, / (root)**
3. Your URL will be `https://hfritz002.github.io/Opurtunities/`

## How data works (team workflow)

Data is seeded from `src/seed-data.js` and held in memory for the session. The team shares data through git — no database.

### Collaboration flow

1. **Make changes** in the app (add/edit investors, accelerators, touchpoints)
2. **Export JSON** — downloads `pipeline.json`
3. **Commit the export** — replace `data/pipeline.json` and push:
   ```bash
   cp ~/Downloads/pipeline.json data/pipeline.json
   git add data/pipeline.json
   git commit -m "Update pipeline data"
   git push
   ```
4. **Team pulls** to get the latest data, then uses **Import JSON** in the app

*We deliberately avoid browser storage so the source of truth is a file in the repo the team can review.*

### Accelerator data

Accelerator data is seeded from `src/seed-data.js` (SEED_ACCELERATORS). It follows the same export/import pattern as investor data — Export JSON includes both investors and accelerators.

## Project layout

```
investor-pipeline/
  src/
    index.html          the app (HTML + CSS + JS, no dependencies)
    seed-data.js        starting pipeline and accelerator data
  data/
    pipeline.json       working data (export here to persist)
  .github/workflows/
    deploy-pages.yml    auto-deploys src/ to GitHub Pages
  docs/
    ROADMAP.md          what to build next
  README.md
```

## Confidentiality

This pipeline holds sensitive relationship information: who passed, who is lukewarm, who might pay. Treat it the way a bank treats client data. It does not leave the team.

## Owner

Maintained by Hayden. See `docs/ROADMAP.md` for next steps.
