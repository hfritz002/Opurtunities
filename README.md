# Principal AI — Investor Pipeline

A lightweight CRM for tracking investor relationships. Built to be run, not just looked at.

One relationship per card. Who they are, what they're waiting on, what we owe them, and the next action. Nothing falls through.

## Why this exists

After Founders Village Tech Weekend we had a stack of investor conversations and no single place that said who was warm, what each person was waiting on, and what we still owed them. This app is that place.

It is also a deliberately simple, no-build web app so it is easy to keep developing, and a good candidate for running our own Code Trails on later.

## Run it

No build step. Open `src/index.html` in a browser, or serve the `src` folder:

```bash
cd src
python3 -m http.server 8000
# visit http://localhost:8000
```

Or deploy `src/` to GitHub Pages.

## How data works

Data is seeded from `src/seed-data.js` and held in memory for the session.

- **Export JSON** downloads the current pipeline as `pipeline.json`.
- **Import JSON** loads a `pipeline.json` back in.

To persist real working data, export it and commit the file to `data/pipeline.json`. We deliberately avoid browser storage so the source of truth is a file in the repo that the team can review.

## Confidentiality

This pipeline holds sensitive relationship information: who passed, who is lukewarm, who might pay. Treat it the way a bank treats client data. It does not leave the team.

## Project layout

```
investor-pipeline/
  src/
    index.html      the app (HTML + CSS + JS, no dependencies)
    seed-data.js    starting pipeline
  data/
    pipeline.json   working data (export here to persist)
  docs/
    ROADMAP.md      what to build next
  README.md
```

## Owner

Maintained by Hayden. See `docs/ROADMAP.md` for next steps.
