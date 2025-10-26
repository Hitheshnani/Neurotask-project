# Cafe Italian Design Guidelines

## Design Approach

**Reference-Based Approach**: Drawing inspiration from premium hospitality and restaurant experiences including Airbnb (for imagery treatment), high-end restaurant websites, and Italian culinary aesthetics. Focus on warmth, appetite appeal, and authentic Italian dining culture.

## Layout System

**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, and 24 for consistent rhythm throughout the application.
- Component padding: p-6 (mobile), p-12 (desktop)
- Section spacing: py-16 (mobile), py-24 (desktop)
- Card gaps: gap-6 (mobile), gap-8 (desktop)
- Container max-width: max-w-7xl with px-4 (mobile), px-8 (desktop)

## Typography Hierarchy

**Font Selection**: 
- Display/Headers: Playfair Display (serif) - elegant, Italian restaurant aesthetic
- Body/UI: Inter (sans-serif) - clean, readable for menus and descriptions

**Scale**:
- Hero Heading: text-5xl md:text-7xl, font-bold, tracking-tight
- Section Headings: text-3xl md:text-4xl, font-semibold
- Menu Item Titles: text-xl md:text-2xl, font-medium
- Body Text: text-base md:text-lg, leading-relaxed
- Captions/Labels: text-sm, uppercase tracking-wide

## Core Components

### Navigation
- Sticky header with blur backdrop effect
- Logo aligned left, navigation links center, CTA button right
- Mobile: Hamburger menu with full-screen overlay navigation
- Height: h-20, with shadow on scroll

### Hero Section
- Full-viewport height (min-h-screen) with large hero image
- Image treatment: Subtle overlay for text readability
- Centered content with generous vertical spacing (py-32)
- Primary CTA with blurred background (backdrop-blur-md bg-white/20)
- Subheading: max-w-2xl for optimal reading width
- Scroll indicator at bottom

### Menu Cards
- Grid layout: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 with gap-8
- Each card structure:
  - Image container: aspect-[4/3] with rounded-2xl overflow
  - Content padding: p-6
  - Dish name: text-xl font-semibold
  - Description: text-base opacity-80, line-clamp-2
  - Price: text-lg font-bold, positioned bottom-right
- Hover: Transform scale-105 with smooth transition

### Feature Sections
- Alternating image-text layouts (2-column on desktop, stacked on mobile)
- Image side: rounded-3xl with shadow-2xl
- Text side: max-w-xl with py-12 padding
- Icon bullets for feature lists (h-6 w-6)

### Testimonials
- 3-column grid on desktop (grid-cols-1 md:grid-cols-3)
- Card design: p-8, rounded-xl, shadow-lg
- Customer photo: h-16 w-16, rounded-full
- Quote: text-lg italic with leading-relaxed
- Name/role: text-sm font-medium

### Reservation/Contact Section
- 2-column layout: Form on left, details/map on right
- Form inputs: h-12, rounded-lg with focus states
- Textarea: h-32 minimum
- Submit button: w-full on mobile, w-auto on desktop

### Footer
- 4-column grid on desktop (grid-cols-2 md:grid-cols-4)
- Sections: About, Quick Links, Hours, Newsletter signup
- Social icons: flex gap-4, h-6 w-6
- Bottom bar: py-6, centered copyright text

## Images

### Hero Image
Large, immersive photo showcasing Italian cuisine in warm, inviting setting. Should feature:
- Authentic Italian dishes (pasta, pizza, or full table spread)
- Natural lighting with warm tones
- Professional food photography quality
- Positioned: object-cover object-center for responsiveness

### Menu Item Images
- 15-20 high-quality food photos
- Consistent style: overhead shots or 45-degree angles
- Show plating and garnishes
- Aspect ratio: 4:3 for uniformity

### Feature Section Images
- 3-4 lifestyle images showing:
  - Restaurant interior atmosphere
  - Chef preparing food
  - Happy dining customers
  - Fresh ingredients

### Background Elements
- Subtle texture overlay for sections (optional): Italian-themed patterns at low opacity
- Divider images: Olive branches, wine bottles as section separators

## Animations (CSS-Only)

**Entrance Animations**:
- Hero content: Fade-up with 0.8s delay (opacity + translateY)
- Cards: Stagger fade-in on scroll (nth-child delays)
- Images: Scale from 0.95 to 1.0 on load

**Hover States**:
- Cards: scale-105, shadow-xl transition
- Buttons: Slight lift (translateY(-2px)) with shadow increase
- Images: Brightness increase (filter: brightness(1.1))
- Navigation links: Underline slide-in effect

**Micro-interactions**:
- CTA buttons: Pulse animation on primary action
- Form inputs: Border glow on focus
- Menu price: Subtle slide-in from right on card hover

All animations: transition-all duration-300 ease-out, with prefers-reduced-motion fallback

## Responsive Breakpoints

- Mobile: Base styles (≤375px optimized)
- Tablet: md: (768px) - 2-column grids, adjusted spacing
- Desktop: lg: (1024px+) - Full multi-column layouts, max component widths

## Accessibility

- All images: Descriptive alt text for menu items
- Form labels: Explicitly associated with inputs
- Focus indicators: Visible ring-2 on all interactive elements
- Semantic HTML: header, nav, main, section, article, footer
- ARIA labels for icon-only buttons

This design creates an authentic, appetite-driven Italian dining experience with premium aesthetics and flawless mobile performance.