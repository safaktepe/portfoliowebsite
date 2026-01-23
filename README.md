# Personal Portfolio Website

A modern, single-page personal portfolio built with React and TypeScript.  
The project focuses on clean architecture, smooth user experience, and subtle motion details.

##  Features

- Single-page layout with scroll-based navigation
- Sticky sidebar with animated active section indicator
- Smooth, custom scroll animations (non-native)
- URL hash synchronization for deep linking
- Keyboard- and accessibility-friendly navigation
- Responsive layout (desktop-first, mobile-ready)
- Clean and maintainable component structure

##  Tech Stack

- **React 18**
- **TypeScript**
- **Vite**
- **IntersectionObserver API**
- **Custom animation utilities (no UI frameworks)**

##  Architectural Notes

- Scroll-based sections instead of route-based navigation for the main layout
- Route-based pages will be introduced only where necessary (e.g. project detail pages)
- Active navigation state is derived from viewport visibility, not click events
- Navigation state is temporarily locked during programmatic scrolling to avoid UI flicker
- Reduced-motion preferences are respected


## Getting Started

```bash
npm install
npm run dev

!Notes!

This project is intentionally kept framework-light to demonstrate core frontend fundamentals:
state management, browser APIs, layout composition, and interaction design.


Built by Mert Safaktepe.
