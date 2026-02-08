# Application Shell Specification

## Overview
The Labs To Legends application shell uses a left-aligned sidebar layout with persistent navigation for all core sections and a clean content area to showcase research, projects, and stories. It reflects an ethics-first, research-driven brand with a focus on clarity and readability.

## Navigation Structure
- Home & Narrative → Home & Narrative
- Projects → Projects
- Researchers → Researchers
- Join & Collaborate → Join & Collaborate
- Insights → Insights

## User Menu
There is no dedicated user menu for now. The shell focuses solely on section navigation and content, leaving room to introduce authentication or profile controls later.

## Layout Pattern
The layout uses a sidebar navigation pattern:
- A vertical sidebar on the left with the Labs To Legends logo/name at the top and navigation items stacked below.
- The main content area sits to the right of the sidebar, with generous padding and space for headings, text, and imagery.
- The primary accent color (lime) highlights the active section and key actions, with emerald used for subtle highlights.

## Responsive Behavior
- **Desktop:** Sidebar is fixed on the left with all navigation labels visible; content scrolls independently on the right.
- **Tablet:** Sidebar remains visible but slightly narrower; text labels may truncate if needed, while active item is clearly highlighted.
- **Mobile:** The sidebar collapses into a hamburger icon in the top-left. Tapping the icon opens a slide-in overlay drawer with the same navigation items; the content area takes full width when the drawer is closed.

## Design Notes
- Navigation items use the heading font and clear spacing to feel confident and legible.
- The neutral palette (zinc) provides a dark-on-light or light-on-dark contrast, with lime reserved for primary actions and current section state.
- This shell is intended for use across all Labs To Legends sections so visitors experience consistent navigation as they explore projects, researchers, and insights.
