export type ServicePillar = {
  key: string;
  label: string;
  title: string;
  tagline: string;
  items: string[];
};

export const SERVICE_PILLARS: ServicePillar[] = [
  {
    key: "build",
    label: "Engineer",
    title: "Web & Software Architecture",
    tagline: "High-performance digital engines custom-coded for speed, security, and conversion.",
    items: [
      "Custom Next.js & React Web Apps",
      "Bespoke Digital Storefronts",
      "Custom Internal Portals & Dashboards",
      "Mobile-First Web Platforms",
      "Rest & GraphQL API Architecture",
    ],
  },
  {
    key: "grow",
    label: "Scale",
    title: "Technical SEO & Conversion Growth",
    tagline: "Turn your digital presence into a dependable, high-converting customer pipeline.",
    items: [
      "Technical Core Web Vitals Optimization",
      "On-Page SEO & Structured Data Markup",
      "Instant WhatsApp Inquiry Channels",
      "Analytics & Conversion Funnel Setup",
      "Local Search Visibility",
    ],
  },
  {
    key: "automate",
    label: "Automate",
    title: "AI Integration & Workflows",
    tagline: "Deploy practical AI models and automation routines that streamline business operations.",
    items: [
      "Custom LLM API Integrations (Groq, OpenAI)",
      "Automated WhatsApp Lead Routing",
      "Intelligent Knowledge Base Assistants",
      "Webhook & Workflow Automations",
      "Custom Data Extraction Engines",
    ],
  },
  {
    key: "support",
    label: "Sustain",
    title: "Edge SLA & Support",
    tagline: "Keep your mission-critical web software fast, secure, and always operational.",
    items: [
      "Proactive Dependency & Security Updates",
      "Continuous Edge Uptime Monitoring",
      "Rapid Incident Response & Bug Fixes",
      "Ongoing Feature Enhancements",
      "Direct Founder WhatsApp Support Line",
    ],
  },
];

export type ServiceGroup = {
  key: string;
  title: string;
  tagline: string;
  services: {
    title: string;
    description: string;
    items: string[];
  }[];
};

export const SERVICE_GROUPS: ServiceGroup[] = [
  {
    key: "web-software",
    title: "Web Engineering & Digital Products",
    tagline: "Bespoke digital platforms engineered with contemporary frameworks, zero templates, and sub-second edge response.",
    services: [
      {
        title: "Commercial Web Applications",
        description: "Bespoke web platforms built on Next.js and React, engineered for high concurrency and buttery smooth client transitions.",
        items: [
          "Next.js App Router Architecture",
          "SSR & Static Edge Generation",
          "Custom UI Systems in Google Sans",
          "Mobile-First Responsive Ergonmics",
          "Micro-Interactions & Motion Design",
        ],
      },
      {
        title: "B2B Catalogs & Digital Storefronts",
        description: "High-speed product showcases and inquiry portals that turn casual visitors into qualified commercial leads.",
        items: [
          "Interactive Product Calculators",
          "Instant WhatsApp Inquiry Dispatch",
          "Dimensional & Technical Datasheet Specs",
          "Sub-Second Search & Instant Filtering",
          "Custom Quotation Generators",
        ],
      },
      {
        title: "Custom Business Portals & Dashboards",
        description: "Tailored internal operations software, admin cockpits, and inventory trackers built to replace clunky spreadsheets.",
        items: [
          "Role-Based Access & Authentication",
          "Operational Metrics & Real-time Dashboards",
          "Automated Data Export & Reports",
          "Third-Party API Integrations",
          "Low-Latency Serverless Workflows",
        ],
      },
    ],
  },
  {
    key: "ai-automation",
    title: "AI Systems & Autonomous Workflows",
    tagline: "Practical machine intelligence that eliminates manual drudgery and accelerates customer engagement.",
    services: [
      {
        title: "Conversational Inquiry Assistants",
        description: "Intelligent chat and inquiry routing agents tailored to your business catalog and trained on your exact documentation.",
        items: [
          "Groq & OpenAI Model Integration",
          "Automated Customer Intent Triage",
          "Zero-Latency WhatsApp Bots",
          "Context-Aware Inquiry Summaries",
          "Human-in-the-Loop Escalation",
        ],
      },
      {
        title: "Workflow Automation & Webhooks",
        description: "Connect your forms, databases, spreadsheets, and notification channels into cohesive, automated pipelines.",
        items: [
          "Automated Lead Notification Channels",
          "CRM & Sheet Synchronization",
          "Event-Triggered Email Dispatches",
          "Data Sanitization & Validation",
          "Custom Scheduled Cron Workflows",
        ],
      },
    ],
  },
  {
    key: "growth-seo",
    title: "Technical SEO & Performance Audits",
    tagline: "Engineered visibility designed to outrank competitors on Google through sheer speed, clean markup, and structural precision.",
    services: [
      {
        title: "Core Web Vitals Engineering",
        description: "We optimize your digital assets and JavaScript payload to score 95+ on Google Lighthouse audits.",
        items: [
          "Sub-300ms Time-to-First-Byte (TTFB)",
          "Lossless Image Compression & Modern Formats",
          "Zero Layout Shifts (CLS < 0.05)",
          "Aggressive Edge Asset Caching",
          "Code Splitting & Bundle Minimization",
        ],
      },
      {
        title: "Search Architecture & Structured Data",
        description: "Semantic HTML and rich JSON-LD schema markup that feeds search engines exact entity metadata.",
        items: [
          "Organization & Local Business Schema",
          "OpenGraph Social Share Optimization",
          "Canonical URL Hygiene & XML Sitemaps",
          "Google Search Console Verification",
          "Competitive Keyword Hierarchy",
        ],
      },
    ],
  },
  {
    key: "infrastructure-support",
    title: "Edge Hosting & Dedicated SLA",
    tagline: "Continuous care from the engineers who built your system, ensuring zero downtime and complete peace of mind.",
    services: [
      {
        title: "Annual Maintenance & Support (SLA)",
        description: "Reliable engineering support with direct access to senior builders without middlemen or ticketing bureaucracy.",
        items: [
          "Proactive Security & Dependency Audits",
          "Automated Daily Database Backups",
          "SSL Certificate Lifecycle Management",
          "Monthly Feature Allowance & Changes",
          "Guaranteed SLA Turnaround",
        ],
      },
    ],
  },
];

export const WHY_CYBERSLAYER_CORPZ = [
  {
    title: "Direct Founder Engineering",
    description: "You work directly with the senior engineers designing and coding your platform. Zero account manager telephone games.",
  },
  {
    title: "100% Client Ownership",
    description: "Your domain, hosting accounts, Git repositories, API keys, and assets belong entirely to you. Absolutely zero vendor lock-in.",
  },
  {
    title: "Sub-Second Edge Speed",
    description: "Every site is custom-crafted in Next.js and deployed to global edge CDNs. We target 95+ Lighthouse scores on every build.",
  },
  {
    title: "Conversion-First Architecture",
    description: "We prioritize direct WhatsApp pathways, frictionless quote requests, and crystal-clear value propositions that turn visitors into paying clients.",
  },
];

export const WHY_INFERAGO = WHY_CYBERSLAYER_CORPZ;

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Technical Discovery & Architecture",
    description: "We analyze your business model, customer touchpoints, and technical requirements. We define the ideal stack, data schemas, and fixed milestones with direct founder alignment.",
  },
  {
    number: "02",
    title: "Interface Engineering & UX Prototyping",
    description: "High-contrast tactile UI crafted in Google Sans. We establish mobile-first ergonomics, micro-interactions, and high-conversion pathways before touching production code.",
  },
  {
    number: "03",
    title: "Edge Development & Systems Integration",
    description: "Rapid Next.js development sprints with live preview links. We construct component systems, connect WhatsApp/email routing, and integrate database hooks.",
  },
  {
    number: "04",
    title: "Auditing, Hardening & Speed Optimization",
    description: "Rigorous cross-device testing across iOS, Android, and desktop viewports. We run automated Lighthouse audits, verify SSL/DNS propagation, and ensure 95+ Core Web Vitals.",
  },
  {
    number: "05",
    title: "Production Launch & Code Sovereignty",
    description: "Zero-downtime deployment to global edge infrastructure. We transfer full Git repository access, credentials, and documentation to your team with 100% ownership.",
  },
  {
    number: "06",
    title: "Ongoing SLA & Continuous Evolution",
    description: "Post-launch hypercare, continuous uptime monitoring, security patches, and incremental feature rollouts through our dedicated support retainer.",
  },
];
