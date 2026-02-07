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
      subtitle: "Pokedex is a native iOS application built with Swift that allows users to browse, search, and favorite Pokémon using a clean MVVM architecture and a modern UIKit-based interface.",
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
        goal: "The goal of this project was to build a modern and well-structured iOS version of an existing Android Pokedex application, focusing on clean architecture, scalability, and best practices in native iOS development.",
        approach: "The app was developed using the MVVM architecture to ensure separation of concerns and maintainable code. The user flow was kept simple and familiar, consisting of a main Pokémon list with search functionality, a detailed Pokémon view, and a favorites screen.",
        performance: "The application delivers smooth scrolling and fast image loading by leveraging efficient networking and caching strategies. Image-heavy screens remain responsive thanks to optimized list rendering and smart memory usage.",
        technicalDecisions: "UIKit was chosen for full control over layout and backward compatibility, including support for iOS 11. Dependency injection was used to improve testability and reduce coupling between components. The app consumes Pokémon data from a public RESTful API, while third-party libraries such as Kingfisher, Lottie, and custom UI components were integrated to enhance user experience without overcomplicating the core architecture.",
        challenges: "Adapting an Android-based design and interaction model to iOS while preserving platform-specific UX standards was a key challenge. Managing image-heavy lists efficiently and maintaining architectural clarity as features expanded were also important considerations.",
        improvements: "I would introduce a more modern networking layer, add unit tests for view models, and refine the UI using newer iOS components while maintaining the existing architectural foundation."
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
      subtitle: "A Swift-based iOS app that helps users build mental and physical discipline through the 75 Hard challenge. The app guides users through a structured 75-day program with six daily tasks, automatically resetting progress at midnight to reinforce consistency and accountability. Fully localized in five languages, the app has reached over 1,500 downloads worldwide, demonstrating real user adoption and international reach.",
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
        goal:
          "To create a mobile app that helps users complete the 75 Hard challenge — a 75-day mental and physical discipline program where users track daily tasks like workouts, hydration, reading, and more. The app supports users in building consistency and accountability throughout the challenge.",
        approach:
          "Built as an iOS app using Swift, UIKit, and an MVVM architecture, the app provides a clean and intuitive UI. Core features include task tracking with daily completion, an automatic reset at midnight, progress counting, and a smooth onboarding experience to guide first-time users.",
        performance:
          "The app offers efficient performance with fast responsiveness even for daily checks and state updates. Using CoreData for local storage ensures quick data retrieval without server dependency, resulting in a lightweight and reliable experience for users completing their daily challenge.",
        technicalDecisions:
          "• Swift & UIKit were chosen for native performance and close control over UI/UX. MVVM pattern increases code maintainability and testability. CoreData was used for persistent local storage so that user progress remains on device without backend complexity. These decisions ensured a scalable and efficient codebase suitable for future feature expansion.",
        challenges:
          "• Handling daily state reset at midnight in a way that feels seamless for the user. Keeping progress tracking accurate across timezones and local date changes.",
        improvements:
          "• Add cloud sync and backup so users don’t lose progress across devices. Add statistics & insights (streaks, trends) to better motivate users completing the challenge."
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
        subtitle: "Bedtime Stories is a multilingual iOS app that helps children relax and fall asleep through original, narrated bedtime stories designed to gently share positive values.",
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
            goal: "The goal of Bedtime Stories was to help children gently wind down before sleep while receiving positive values and life lessons in a way that feels engaging rather than instructional. The app aims to make bedtime calmer for both children and parents by combining storytelling with a soothing experience.",
            approach: "Bedtime Stories was designed around short, original stories that balance entertainment and gentle guidance. Each story lasts around ten minutes and is brought to life with character-based voice acting and supportive visuals, allowing children to relax, listen, and naturally transition into sleep without overstimulation.",
            performance: "The app is optimized for smooth audio playback and fast content delivery. Stories are streamed only when needed and cached locally based on the user’s locale, ensuring a responsive experience while keeping storage usage under control.",
            technicalDecisions: "The app was built using UIKit to maintain full control over performance and UI behavior. All content is delivered online with a subscription-based model, while preview access allows users to explore stories before committing. To reduce backend and bandwidth costs, Firebase is used selectively, and a custom caching mechanism manages localized story downloads and automatically clears unused data.",
            challenges: "One of the main challenges was delivering rich, multilingual content without inflating costs or storage usage. Another key challenge was maintaining a calm and child-friendly experience while integrating AI-generated stories, visuals, and voice acting in a cohesive and natural way.",
            improvements: "I would introduce lightweight animations for story visuals, expand personalization based on age or preferences, and refine the caching strategy further as the content library grows after launch."
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
  
