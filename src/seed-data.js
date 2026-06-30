// seed-data.js
// Starting pipeline, seeded from Founders Village Tech Weekend.
// Hayden maintains this. Verify details (esp. Dalia's commit) before treating as fact.

window.SEED_INVESTORS = [
  {
    id: "inv-001",
    firm: "Sebastian",
    contact: "Sebastian",
    role: "Investor",
    metWhere: "Founders Village Tech Weekend",
    stage: "Met - warm",
    objection: "Wants more traction before committing",
    owed: "Deck + intro call with Julie",
    lastContact: "2026-06-23",
    nextAction: "Send follow-up email, book intro call with Julie",
    nextDue: "2026-06-27",
    owner: "Hayden",
    warmth: "Warm",
    notes: "German, did a foreign exchange in Nebraska. Loves that we're from Sioux Falls and Little Rock.",
    log: [
      { date: "2026-06-23", type: "Email", what: "Thanked for meeting, noted shared SD/AR roots", outcome: "Book intro call with Julie" }
    ]
  },
  {
    id: "inv-002",
    firm: "Mei & Anthony",
    contact: "Mei",
    role: "Investor (technical)",
    metWhere: "Founders Village Tech Weekend",
    stage: "Met - interested",
    objection: "Want to feel the product, not be pitched",
    owed: "Headroom trail link + deck",
    lastContact: "2026-06-23",
    nextAction: "Send live trail link + deck, offer walkthrough",
    nextDue: "2026-06-26",
    owner: "Hayden",
    warmth: "Warm",
    notes: "Technical believers. Send the live Headroom trail, not company-research.",
    log: [
      { date: "2026-06-23", type: "Email", what: "Sent intro follow-up after event", outcome: "Awaiting reply, send trail next" }
    ]
  },
  {
    id: "inv-003",
    firm: "Cursor power user",
    contact: "—",
    role: "Investor / operator",
    metWhere: "LinkedIn (post-event)",
    stage: "Met - interested",
    objection: "None stated, into the tooling",
    owed: "Deck + Headroom showcase + skill prompt",
    lastContact: "2026-06-24",
    nextAction: "Send deck + showcase + skill prompt, ask for call",
    nextDue: "2026-06-27",
    owner: "Hayden",
    warmth: "Warm",
    notes: "Peer-to-peer tone. Meeting ask is to meet Julie.",
    log: []
  },
  {
    id: "inv-004",
    firm: "Honest-feedback contact",
    contact: "—",
    role: "Investor (not investing now)",
    metWhere: "Founders Village Tech Weekend",
    stage: "Met - feedback only",
    objection: "Not investing this round, offered candor",
    owed: "Deck + agent experiment",
    lastContact: "2026-06-24",
    nextAction: "Send deck, ask 'future or gimmick?'",
    nextDue: "2026-06-28",
    owner: "Hayden",
    warmth: "Cool",
    notes: "Won't invest now but values us. Great source of honest product signal.",
    log: []
  },
  {
    id: "inv-005",
    firm: "Dalia",
    contact: "Dalia",
    role: "Design partner / prospect",
    metWhere: "Inbound",
    stage: "Verbal commit",
    objection: "—",
    owed: "Onboarding + confirm paid",
    lastContact: "2026-06-24",
    nextAction: "Confirm 'committed to pay' after Tues 11am, log cohort behind her",
    nextDue: "2026-07-01",
    owner: "Hayden",
    warmth: "Hot",
    notes: "Solo consultant. Potential first paying user, with a cohort behind her. VERIFY commit before stating as fact.",
    log: []
  }
];
