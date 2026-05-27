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
    { label: "Government Contracting", href: "/government-contracting" },
    { label: "Contact", href: "/contact" },
  ],
  whoWeServe: [
    {
      title: "Small to mid-sized organizations",
      blurb:
        "Senior compliance, risk, and security leadership without the cost of a full-time hire.",
    },
    {
      title: "Government and public sector partners",
      blurb:
        "Subject-matter expertise on regulated programs and contract performance.",
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
        "Program design, control assessments, and audit readiness for HIPAA, SOX, PCI-DSS, NIST 800-53/171, and ISO 27001.",
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
} as const;
