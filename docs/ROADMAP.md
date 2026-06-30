# Roadmap

This is a real tool and your summer project, Hayden. Keep it current, and grow it. Each item below is a chance to learn something that transfers directly to the private-banking, trust, and wealth-management roles you're looking at.

## Run it well first (the actual job)

Before adding features, run the thing:

- Log every touchpoint the day it happens.
- Keep each card's stage, warmth, and next action honest.
- Export to `data/pipeline.json` and commit it at the end of each week.
- Every Friday, look at the summary strip and the overdue count, then walk Michael and Julie through where each relationship stands.

That weekly readout is the skill. "I owned the pipeline, tracked every relationship, and made sure no follow-up was missed" is, almost word for word, what those finance job descriptions ask for.

## Build next (good learning, roughly in order)

1. **Overdue view.** A filter or tab that shows only relationships with a past-due next action. This is the single most useful thing a relationship manager looks at each morning.
2. **Activity timeline.** Render each investor's touchpoint log as a vertical timeline in the modal. Teaches you to think in audit trails, which is exactly how trust and banking ops work.
3. **Reminders.** Flag anything with no contact in N days as "going cold." Relationships die from silence, not rejection.
4. **CSV export.** Let the team open the pipeline in Excel. Maps directly to the spreadsheet fluency these jobs expect.
5. **Save to file properly.** Replace export/import with a small backend (or the File System Access API) so saving is one click. A real engineering step up.

## Things to be careful about

- **Verify before you state.** The seed data marks Dalia as a verbal commit. Confirm that before anyone treats it as fact. In finance, a recorded commitment that isn't real is a serious problem. Same discipline here.
- **Confidentiality.** This data does not leave the team. Build that assumption into anything you add (no public deploys with real data).

## Why this maps to the jobs you want

The roles you're eyeing (Physician Bank private banker, the WestPac advisor track, the Cornerstone trust associate) all reward the same things this project builds:

| They ask for | You're doing it here |
| --- | --- |
| Manage live leads, client relationships | Own and maintain the investor pipeline |
| Single point of contact | Be the person who knows every relationship's status |
| Attention to detail, accurate records | Keep the log and the data clean |
| Maintain confidentiality | Handle sensitive relationship data with discretion |
| Prep and advise stakeholders | Run the Friday readout for the founders |

Build the habit here, tell the story in December.
