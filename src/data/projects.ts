export type Project = {
  slug: string;
  name: string;
  client?: string;
  industry: string;
  type: string;
  category: "web" | "apps" | "software" | "ecommerce" | "ai" | "marketing";
  services: string[];
  description: string;
  problem?: string;
  approach?: string;
  solution?: string;
  features?: string[];
  technology?: string[];
  timeline?: string;
  results?: string;
  clientUrl?: string;
  coverImage: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "nizambutterfly",
    name: "Nizam Butterfly",
    client: "Nizam Food Products",
    industry: "FMCG & Food Manufacturing",
    type: "Brand Web Platform & B2B Wholesale Engine",
    category: "web",
    services: [
      "Brand Architecture",
      "Interactive Product Catalog",
      "Direct WhatsApp B2B Wholesale Routing",
      "SEO & Structured Data Architecture",
      "Edge Performance Tuning",
    ],
    description:
      "The official web platform and direct wholesale ordering hub for Nizam Butterfly, an established South Indian food manufacturer specializing in ready-roasted vermicelli, short pasta, ragi millet noodles, and 7-minute biriyani meal kits.",
    problem:
      "As an expanding food manufacturer serving retail distributors and supermarkets across South India, Nizam Food Products needed to upgrade from traditional offline trade channels to a high-credibility digital storefront. Inquiries were bottlenecked by manual phone calls and disorganized communications, while distributors lacked an instantaneous way to review product specs and initiate bulk orders.",
    approach:
      "We engineered a modern, high-contrast web platform anchored in tactile food presentation. We architected a zero-latency product directory with structured JSON-LD schema, instant WhatsApp wholesale routing pre-loaded with SKU quantities, and responsive mobile-first navigation tailored for store managers and procurement officers on the move.",
    solution:
      "A lightning-fast, production-grade web platform at nizambutterfly.com. Features direct B2B wholesale dispatch, interactive product showcases, rich nutritional specifications, and seamless WhatsApp inquiry channels with zero overhead.",
    features: [
      "Direct WhatsApp B2B wholesale order routing with automated SKU pre-population",
      "Interactive product directory for Ready-Roasted Semiya, 7-Min Biriyani, and Ragi Pasta",
      "Comprehensive JSON-LD Organization, Product, and ItemList schema for Google ranking",
      "Zero-overhead static edge deployment with sub-second page transitions",
      "Mobile-first tactile interface designed for grocery store owners and procurement leads",
    ],
    technology: [
      "Next.js",
      "Tailwind CSS",
      "Lucide Icons",
      "Vercel Edge Network",
      "WhatsApp Business API Hooks",
    ],
    timeline: "2 Weeks to Production",
    results: "Live at nizambutterfly.com with sub-second TTFB, seamless wholesale inquiry capture across South India, and 100% Google Lighthouse performance.",
    clientUrl: "https://nizambutterfly.com",
    coverImage: "/work/nizambutterfly.jpg",
  },
  {
    slug: "princy-boutique",
    name: "Princy Boutique",
    industry: "Fashion & Bridal Couture",
    type: "Bridal Studio Lookbook",
    category: "ecommerce",
    services: ["Lookbook Design", "Lead Capture"],
    description: "An elegant lookbook and bridal catalog experience for bespoke bridal couture and designer apparel.",
    problem: "Clients were lost in slow-loading social media galleries without a curated bridal consultation funnel.",
    approach: "Crafted an immersive editorial showcase with high-resolution imagery and direct bridal consultation bookings.",
    solution: "Mobile-first lookbook with instant WhatsApp bridal fitting requests and zero latency.",
    technology: ["Next.js", "Framer Motion", "Tailwind CSS"],
    coverImage: "/work/princy-boutique.jpg",
  },
  {
    slug: "jailani-catering",
    name: "Jailani Catering",
    industry: "Hospitality & Event Catering",
    type: "Ordering & Inquiry Portal",
    category: "web",
    services: ["Interactive Menu", "Event Inquiries"],
    description: "A fast, appetizing ordering and event menu consultation platform built for seamless mobile booking.",
    problem: "High customer friction during large event inquiries and festival booking seasons.",
    approach: "Simplified menu selection into intuitive packages with automated inquiry breakdowns.",
    solution: "Dynamic menu calculator with one-tap inquiry dispatch directly to the catering dispatch team.",
    technology: ["Next.js", "TypeScript", "Tailwind CSS"],
    coverImage: "/work/jailani-catering.jpg",
  },
  {
    slug: "sri-ganesh-cartons",
    name: "Sri Ganesh Cartons",
    industry: "Packaging & Manufacturing",
    type: "Industrial Product Showcase",
    category: "web",
    services: ["B2B Catalog", "Quotation Engine"],
    description: "Technical product specifications and B2B quotation catalog for corrugated packaging manufacturing.",
    problem: "B2B procurement teams needed fast dimensional calculations for custom corrugated carton specifications.",
    approach: "Built a structured technical spec directory highlighting burst strength, ply options, and box dimensions.",
    solution: "Clean B2B web catalog that reduced quotation turnaround time by 60%.",
    technology: ["React", "Tailwind CSS", "Edge Hosting"],
    coverImage: "/work/sri-ganesh-cartons.jpg",
  },
  {
    slug: "shareshed",
    name: "ShareShed",
    industry: "Community & Peer-to-Peer",
    type: "Equipment Sharing Platform",
    category: "apps",
    services: ["Web App", "UI/UX Design"],
    description: "A decentralized peer-to-peer equipment sharing and neighborhood resource rental application.",
    problem: "Neighborhood communities had no frictionless mechanism to borrow or rent rarely used household tools.",
    approach: "Created a map-backed item reservation portal with verified borrower badges and real-time availability.",
    solution: "Progressive web application with offline support and instantaneous booking flows.",
    technology: ["Next.js", "TypeScript", "Tailwind CSS"],
    coverImage: "/work/shareshed.jpg",
  },
  {
    slug: "assetslayer",
    name: "AssetSlayer",
    industry: "Developer Tools & Assets",
    type: "Digital Asset Manager",
    category: "software",
    services: ["Web Application", "Performance Optimization"],
    description: "High-performance digital asset management and batch optimization system for creator studios.",
    problem: "Designers struggled with manual image optimization and multi-format conversion bottlenecks.",
    approach: "Engineered an in-browser WebAssembly-powered asset transformer with zero upload lag.",
    solution: "Standalone client-side suite for lossless asset crunching and instant previewing.",
    technology: ["HTML5", "CSS3", "JavaScript"],
    clientUrl: "/assetslayer/index.html",
    coverImage: "/work/assetslayer.jpg",
  },
  {
    slug: "cybershell",
    name: "CyberShell",
    industry: "Cybersecurity & Terminal Systems",
    type: "Web Terminal Interface",
    category: "software",
    services: ["Interface Design", "System Architecture"],
    description: "Interactive browser terminal and command execution cockpit designed for devops and security workflows.",
    problem: "Developers needed an accessible web-based console emulator with custom alias scripting.",
    approach: "Designed a CRT-styled, latency-free terminal with built-in command palettes and syntax highlighting.",
    solution: "Sleek keyboard-driven web application with persistent session state and custom theming.",
    technology: ["JavaScript", "CSS Custom Properties", "Web APIs"],
    clientUrl: "/cybershell/index.html",
    coverImage: "/work/cybershell.jpg",
  },
  {
    slug: "cybertab",
    name: "CyberTab",
    industry: "Productivity & AI Workspace",
    type: "Smart Browser Hub",
    category: "ai",
    services: ["Product Engineering", "AI Integration"],
    description: "Modern browser new-tab productivity workstation featuring AI integration and customized widgets.",
    problem: "Cluttered browser start pages lacking unified quick search, weather widgets, and on-demand AI reasoning.",
    approach: "Built a minimal, futuristic hub integrating Groq LLM intelligence with customizable bookmark nodes.",
    solution: "Instantaneous browser workstation that powers daily developer productivity.",
    technology: ["JavaScript", "Groq AI API", "CSS3"],
    clientUrl: "/cybertab/index.html",
    coverImage: "/work/cybertab.jpg",
  },
];
