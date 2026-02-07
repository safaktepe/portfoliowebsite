export type ProjectSection = {
    title: string;
    content: string;
  };
  
// Media shown in the Project Interface rail
export type InterfaceItem =
  | { kind: "image"; src: string; alt: string }
  | { kind: "video"; mp4: string; webm?: string; poster?: string; alt: string };

  export type Project = {
    slug: string;
    title: string;
    // Legacy images array (kept for backward compatibility)
    interfaceImages?: Array<{ src: string; alt: string }>;
    // New media array supporting video items
    interfaceItems?: InterfaceItem[];
    subtitle: string;
    note?: string;
    kind: "standard" | "featured"; 
    coverImage: {
      src: string; // Cloudflare URL
      alt: string;
    };
    links: Array<{ label: "GitHub" | "Live"; href: string }>;
    stack: string[];  
    bento: {
        goal: string;
        approach: string;
        performance: string;
        technicalDecisions: string;
        challenges: string;
        improvements: string;
      };
      
    sections: ProjectSection[];
    
  };
  
  export const projects: Project[] = [
    {
      slug: "pokedex",
      title: "Pokedex",
      subtitle: "Fast search and clean detail views for Pokémon data.",
      note: "The source code for this project is private due to commercial reasons. The app is live and generating revenue.",
      kind: "standard",
      interfaceItems: [
        { kind: "image", src: "https://assets.safaktepe.com/pokedex/1y.png", alt: "Pokedex list view" },
        { kind: "image", src: "https://assets.safaktepe.com/pokedex/2y.png", alt: "Pokedex detail view" },
        { kind: "image", src: "https://assets.safaktepe.com/pokedex/3y.png", alt: "Pokedex search/filter" },
      ],      
      coverImage: {
        src: "https://assets.safaktepe.com/pokedex/2y.png",
        alt: "Pokedex preview",
      },
      links: [
        { label: "GitHub", href: "https://github.com/safaktepe/PokedexApp" },
        { label: "Live", href: "https://..." },
      ],
      stack: ["React", "TypeScript", "Vite"],
      bento: {
        goal: "Build a fast, distraction-free browsing experience with a clean list → detail flow.",
        approach: "Keep state predictable, optimize search interactions, and design for clear loading/empty/error states.",
        performance: "Minimize unnecessary rerenders during filtering and navigation to keep the UI responsive.",
        technicalDecisions: "Type-safe API models, URL-driven detail routing, and reusable UI primitives to keep the codebase maintainable.",
        challenges: "Balancing UX clarity with dense data while keeping the interface calm and readable.",
        improvements: "Add caching, advanced filters, and accessibility refinements after validating the core experience."
      },      
      sections: [
        {
          title: "Goal",
          content:
            "Build a responsive browsing experience with solid UX states (loading/empty/error) and predictable navigation.",
        },
        {
          title: "Approach",
          content:
            "Structured the UI around list exploration and a focused detail view, keeping interactions simple and quick.",
        },
        {
          title: "Technical Decisions",
          content:
            "Type-safe API models, URL-driven detail pages, and a component structure that keeps UI and data concerns separated.",
        },
        {
          title: "Challenges & Learnings",
          content:
            "Balancing UI responsiveness with network requests and keeping state management straightforward.",
        },
        {
          title: "What I’d Improve",
          content:
            "Add caching, better filtering, and accessibility refinements after validating the core UX.",
        },
      ],
    },
  
    {
      slug: "75-hard",
      title: "75 Hard",
      subtitle: "iOS (Swift) app that helps people discipline themselves and become better both mentally and physically. It includes a hard challenge that lasts 75 days. There are 6 different tasks that users must complete every day. The user marks the completed task. The tasks are reset every evening at 00:00 and the day counter is incremented by 1.",
      note: "⚠️ 🚨 Explore the complete details of my projects, including code and screenshots, by visiting my GitHub repository. Click here to explore!",
      kind: "standard",
      coverImage: {
        src: "https://assets.safaktepe.com/75hard/2hard.png",
        alt: "75 Hard preview",
      },
      links: [
        { label: "GitHub", href: "https://github.com/safaktepe/AnotherMe-Project" },
        { label: "Live", href: "https://..." },
      ],
      stack: ["React", "TypeScript", "Vite"],
      interfaceItems: [
        { kind: "image", src: "https://assets.safaktepe.com/75hard/1hard.png", alt: "Intro screen" },
        { kind: "image", src: "https://assets.safaktepe.com/75hard/2hard.png", alt: "Main view" },
        { kind: "image", src: "https://assets.safaktepe.com/75hard/3hard.png", alt: "Progress or detail" },
        {
          kind: "video",
          mp4: "https://assets.safaktepe.com/75hard/onboarding_hard.mp4",
          webm: "https://assets.safaktepe.com/75hard/onboarding_hard.webm",
          poster: "https://assets.safaktepe.com/75hard/2hard.png",
          alt: "Onboarding flow"
        },
        {
          kind: "video",
          mp4: "https://assets.safaktepe.com/75hard/ss_hard.mp4",
          webm: "https://assets.safaktepe.com/75hard/ss_hard.webm",
          poster: "https://assets.safaktepe.com/75hard/3hard.png",
          alt: "In-app interaction"
        }
      ],
      bento: {
        goal: "Make daily tracking frictionless while preserving a sense of progress and consistency.",
        approach: "Design a today-first flow with clear task completion and a simple mental model for repeat usage.",
        performance: "Keep interactions instant by relying on local-first patterns and lightweight UI updates.",
        technicalDecisions: "Simple state boundaries, predictable updates, and persistence that survives refreshes and device restarts.",
        challenges: "Avoiding a cluttered UI while still supporting a 75-day timeline and repeatable daily habits.",
        improvements: "Add optional streaks/stats and export features once the daily UX is validated."
      },      
      sections: [
        {
          title: "Goal",
          content:
            "Make daily tracking frictionless while preserving a sense of progress and consistency.",
        },
        {
          title: "Approach",
          content:
            "A today-first UI with persistent progress, keeping the interaction model simple and repeatable.",
        },
        {
          title: "Technical Decisions",
          content:
            "Local persistence for reliability, clean component boundaries, and predictable state updates.",
        },
        {
          title: "Challenges & Learnings",
          content:
            "Designing a tracker that feels motivating but not gamified, and keeping the UI scalable for future features.",
        },
        {
          title: "What I’d Improve",
          content:
            "Add optional stats, streak logic, and export functionality—only after validating the daily flow.",
        },
      ],
    },
    {
        slug: "bedtime-stories",
        title: "Bedtime Stories",
        subtitle: "A calming bedtime storytelling experience for children.",
        note: "The source code for this project is private due to commercial reasons. The app is live and generating revenue.",
        kind: "featured", 
        coverImage: {
          src: "https://assets.safaktepe.com/bedtime/bt_preview.png",
          alt: "Bedtime Stories preview",
        },
        links: [
          { label: "GitHub", href: "https://github.com/..." },
          { label: "Live", href: "https://..." },
        ],
        stack: ["React", "TypeScript", "Vite"],
        interfaceItems: [
          {
            kind: "video",
            mp4: "https://assets.safaktepe.com/bedtime/1bt_onboarding.mp4",
            webm: "https://assets.safaktepe.com/bedtime/1bt_onboarding.webm",
            poster: "https://assets.safaktepe.com/bedtime/3bt_paywall.png",
            alt: "Onboarding flow"
          },
          {
            kind: "video",
            mp4: "https://assets.safaktepe.com/bedtime/2bt_main.mp4",
            webm: "https://assets.safaktepe.com/bedtime/2bt_main.webm",
            poster: "https://assets.safaktepe.com/bedtime/3bt_paywall.png",
            alt: "Main screen interactions"
          },
          { kind: "image", src: "https://assets.safaktepe.com/bedtime/3bt_paywall.png", alt: "Paywall" },
          { kind: "image", src: "https://assets.safaktepe.com/bedtime/4bt_pawywall_detail.png", alt: "Paywall detail" },
          { kind: "image", src: "https://assets.safaktepe.com/bedtime/5bt_listen.png", alt: "Listen view" },
          { kind: "image", src: "https://assets.safaktepe.com/bedtime/6bt_settings.png", alt: "Settings screen" }
        ],
        bento: {
            goal: "Create a night-friendly interface with strong readability, minimal distractions, and a simple story discovery flow.",
            approach: "Use calm typography and spacing, then drive the experience through a clean list → reader journey.",
            performance: "Prioritize smooth transitions and keep the reader lightweight to avoid visual/interaction noise.",
            technicalDecisions: "Reusable UI primitives, route-driven screens, and a structure that keeps UI and content concerns separated.",
            challenges: "Staying visually soft while maintaining accessible contrast and a clear hierarchy for kids and parents.",
            improvements: "Add filters (age/length), reading preferences (font size), and better content organization once the core UX is validated."
          },          
        sections: [
          {
            title: "Goal",
            content:
              "Create a night-friendly UI with strong readability, minimal distractions, and a simple story discovery flow.",
          },
          {
            title: "Approach",
            content:
              "Designed a clean list → reader experience, focusing on typography, spacing, and predictable navigation rather than flashy UI.",
          },
          {
            title: "Technical Decisions",
            content:
              "Kept the structure component-driven and type-safe, with routes for detail views and reusable UI primitives for consistency.",
          },
          {
            title: "Challenges & Learnings",
            content:
              "Balancing a playful tone with a calm interface, and keeping contrast accessible while staying visually soft.",
          },
          {
            title: "What I’d Improve",
            content:
              "Add story filters (age/length), reading preferences (font size), and better content organization once the core UX is validated.",
          },
        ],
      },
      
  ];
  
  export function getProjectBySlug(slug: string) {
    return projects.find((p) => p.slug === slug);
  }
  
