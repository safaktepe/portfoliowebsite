export type ProjectSection = {
    title: string;
    content: string;
  };
  
  export type Project = {
    slug: string;
    title: string;
    interfaceImages?: Array<{ src: string; alt: string }>;
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
      interfaceImages: [
        { src: "/src/assets/s.png", alt: "..." },
        { src: "/src/assets/s.png", alt: "..." },
        { src: "/src/assets/s.png", alt: "..." },
      ],      
      coverImage: {
        src: "/src/assets/s.png",
        alt: "Pokedex preview",
      },
      links: [
        { label: "GitHub", href: "https://github.com/..." },
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
      title: "75 Hard Tracker",
      subtitle: "iOS (Swift) app that helps people discipline themselves and become better both mentally and physically. It includes a hard challenge that lasts 75 days. There are 6 different tasks that users must complete every day. The user marks the completed task. The tasks are reset every evening at 00:00 and the day counter is incremented by 1.",
      note: "⚠️ 🚨 Explore the complete details of my projects, including code and screenshots, by visiting my GitHub repository. Click here to explore!",
      kind: "standard",
      coverImage: {
        src: "/src/assets/",
        alt: "75 Hard Tracker preview",
      },
      links: [
        { label: "GitHub", href: "https://github.com/..." },
        { label: "Live", href: "https://..." },
      ],
      stack: ["React", "TypeScript", "Vite"],
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
          src: "https://your-cf-domain.com/images/bedtime-stories.png",
          alt: "Bedtime Stories preview",
        },
        links: [
          { label: "GitHub", href: "https://github.com/..." },
          { label: "Live", href: "https://..." },
        ],
        stack: ["React", "TypeScript", "Vite"],
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
  