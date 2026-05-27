export const site = {
  name: "BroadPivot Consulting LLC",
  shortName: "BroadPivot",
  tagline: "Exceptional Expertise. Trusted Outcomes.",
  description:
    "BroadPivot Consulting LLC is a compliance, risk, and cybersecurity practice serving healthcare, financial services, technology, and the public sector.",
  domain: "broadpivotllc.com",
  url: "https://broadpivotllc.com",
  email: "info@broadpivotllc.com",
  nav: [
    { label: "About", href: "/about" },
    { label: "Capabilities", href: "/capabilities" },
    { label: "Government", href: "/government-contracting" },
    { label: "Contact", href: "/contact" },
  ],
  frameworks: [
    "NIST 800-171",
    "NIST 800-53",
    "CMMC",
    "FAR / DFARS",
    "FedRAMP",
    "HIPAA",
    "HITRUST",
    "SOC 2",
    "ISO 27001",
    "SOX",
    "PCI-DSS",
    "GDPR",
  ],
  whoWeServe: [
    {
      title: "Growing organizations",
      blurb:
        "Senior compliance, risk, and security leadership at a fraction of the cost of a full-time hire.",
    },
    {
      title: "Public sector partners",
      blurb:
        "Subject-matter expertise on regulated programs, contract performance, and pre-award positioning.",
    },
    {
      title: "Regulated industries",
      blurb:
        "Healthcare, financial services, and technology operators in demanding regulatory environments.",
    },
  ],
  capabilities: [
    {
      title: "Compliance & Risk Management",
      summary:
        "Program design, control assessments, and audit readiness for HIPAA, SOX, PCI-DSS, NIST 800-53 / 171, and ISO 27001.",
      points: [
        "Regulatory gap assessments and remediation roadmaps",
        "Internal control design and testing",
        "Third-party and vendor risk management",
        "Policy, procedure, and evidence frameworks",
      ],
    },
    {
      title: "Cybersecurity & Data Protection",
      summary:
        "Security programs sized to the business — from data governance to incident response readiness.",
      points: [
        "Security program assessment and maturity roadmaps",
        "Data classification, privacy, and protection",
        "Incident response planning and tabletop exercises",
        "Cloud and identity controls review",
      ],
    },
    {
      title: "Government Contracting Readiness",
      summary:
        "Positioning, compliance, and pursuit support for federal, state, and local opportunities.",
      points: [
        "SAM.gov, UEI, and capability statement preparation",
        "FAR / DFARS and NIST 800-171 readiness",
        "Small-business certifications guidance",
        "Proposal and capture support",
      ],
    },
    {
      title: "Business Process Optimization",
      summary:
        "Workflows, documentation, and controls that hold up under audit and growth.",
      points: [
        "Process mapping and risk-aligned redesign",
        "Operational documentation and SOPs",
        "KPI and control monitoring frameworks",
        "Change management and training",
      ],
    },
  ],
  outcomes: [
    {
      figure: "1",
      unit: "senior practitioner",
      detail: "leads every engagement — never delegated to a junior team.",
    },
    {
      figure: "12+",
      unit: "regulatory frameworks",
      detail: "actively operated across healthcare, finance, and federal work.",
    },
    {
      figure: "10",
      unit: "years",
      detail: "of in-the-room experience with auditors, regulators, and contracting officers.",
    },
  ],
  principles: [
    {
      title: "Senior judgment",
      body:
        "Every engagement is staffed and led by a practitioner who has been accountable for the work — not a delegate translating notes from one.",
    },
    {
      title: "Right-sized programs",
      body:
        "Controls are scaled to the actual risk and stage of the organization. We refuse to ship enterprise-weight processes to a thirty-person company.",
    },
    {
      title: "Documentation that holds",
      body:
        "Policies, evidence, and process maps that survive turnover, scale with growth, and stand up to audit, regulator, and customer scrutiny.",
    },
    {
      title: "Quiet partnership",
      body:
        "We work as an embedded extension of your team. No theatrical reporting cycles. No invented urgency. Steady, expert delivery.",
    },
  ],
} as const;
