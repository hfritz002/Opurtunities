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

window.SEED_ACCELERATORS = [
  {
    id: "acc-001",
    program: "YC Fall 2026",
    firm: "YC",
    deadline: "2026-07-27",
    status: "Drafting",
    contact: "—",
    materials: [
      { date: "2026-06-20", item: "Initial draft of application" }
    ],
    notes: "On-time deadline Jul 27, 8pm PT. $500K for 7%. Batch Oct-Dec in SF. AI strongly preferred.",
    owner: "Hayden",
    log: [
      { date: "2026-06-20", type: "Internal", what: "Started drafting application", outcome: "" }
    ]
  },
  {
    id: "acc-002",
    program: "Techstars Fall 2026",
    firm: "Techstars",
    deadline: "2026-08-15",
    status: "Researching",
    contact: "—",
    materials: [],
    notes: "40+ vertical accelerators. $220K investment. Apply by Aug 15.",
    owner: "Hayden",
    log: []
  },
  {
    id: "acc-003",
    program: "South Park Commons Fellowship",
    firm: "SPC",
    deadline: "2026-08-01",
    status: "Researching",
    contact: "—",
    materials: [],
    notes: "Pre-seed pre-idea program. $400K for 7% + $600K follow-on. SF/NYC/India. Batch starts Oct.",
    owner: "Hayden",
    log: []
  },
  {
    id: "acc-004",
    program: "Google AI First Accelerator",
    firm: "Google",
    deadline: "2026-09-01",
    status: "Not started",
    contact: "—",
    materials: [],
    notes: "Equity-free. $350K in GCP + AI model credits. 10 weeks. Rolling cohorts globally.",
    owner: "Hayden",
    log: []
  },
  {
    id: "acc-005",
    program: "500 Global Founders Fund",
    firm: "500 Global",
    deadline: "2026-09-01",
    status: "Not started",
    contact: "—",
    materials: [],
    notes: "Late seed to Series A. Apply by Sep 1.",
    owner: "Hayden",
    log: []
  },
  {
    id: "acc-006",
    program: "YC Winter 2027",
    firm: "YC",
    deadline: "2026-09-25",
    status: "Not started",
    contact: "—",
    materials: [],
    notes: "Early decision for Winter 2027. Apply by Sep 25.",
    owner: "Hayden",
    log: []
  },
  {
    id: "acc-007",
    program: "Sequoia Arc",
    firm: "Sequoia",
    deadline: "2026-10-01",
    status: "Researching",
    contact: "—",
    materials: [],
    notes: "Pre-seed/seed from Sequoia. Variable terms. Next cohort TBD — sign up for notification. Arc Intensive: 4-day program for accepted founders.",
    owner: "Hayden",
    log: []
  },
  {
    id: "acc-008",
    program: "HF0 Residency",
    firm: "HF0",
    deadline: "—",
    status: "Researching",
    contact: "—",
    materials: [],
    notes: "12-week residency for 2nd-time founders. $1M uncapped SAFE + 5% equity fee. Rolling, SF. High bar.",
    owner: "Hayden",
    log: []
  },
  {
    id: "acc-009",
    program: "NVIDIA Inception",
    firm: "NVIDIA",
    deadline: "—",
    status: "Not started",
    contact: "—",
    materials: [],
    notes: "Rolling. GPU credits, enterprise partnerships, no equity. Must-have for AI infra startups.",
    owner: "Hayden",
    log: []
  },
  {
    id: "acc-010",
    program: "Plug and Play AI",
    firm: "Plug and Play",
    deadline: "—",
    status: "Not started",
    contact: "—",
    materials: [],
    notes: "Rolling applications. Corporate pilot programs + investment. Global network, industry-specific tracks.",
    owner: "Hayden",
    log: []
  },
  {
    id: "acc-011",
    program: "MassChallenge",
    firm: "MassChallenge",
    deadline: "—",
    status: "Not started",
    contact: "—",
    materials: [],
    notes: "Rolling. Equity-free accelerator. Cash prizes + mentorship. Strong for early-stage AI.",
    owner: "Hayden",
    log: []
  },
  {
    id: "acc-012",
    program: "Fetch.ai Startup Accelerator",
    firm: "Fetch.ai",
    deadline: "—",
    status: "Not started",
    contact: "—",
    materials: [],
    notes: "$10M pool for AI agent startups. Rolling. Agent-native focus is a direct fit.",
    owner: "Hayden",
    log: []
  }
];
