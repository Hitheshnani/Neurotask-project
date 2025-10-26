# Cafe Italian - Restaurant Website

## Project Overview
A stunning, mobile-responsive React.js web application for an authentic Italian restaurant. Built as a technical demonstration showcasing pixel-perfect design implementation, performance optimization, and modern web development best practices.

## Architecture
- **Frontend**: React 18 with TypeScript, Tailwind CSS
- **Backend**: Express.js with in-memory storage
- **Build Tool**: Vite for fast builds and HMR
- **State Management**: TanStack Query v5
- **Form Validation**: Zod schemas

## Key Features
1. **Responsive Design**: Mobile-first approach with breakpoints at 375px, 768px, 1024px+
2. **Performance**: CSS-only animations, lazy loading, optimized images
3. **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation
4. **API Integration**: Real-time reservation system
5. **Visual Excellence**: AI-generated food photography, smooth transitions

## Project Structure
```
client/src/
├── components/     # React UI components
├── pages/          # Route pages
├── styles/         # Custom CSS animations
└── assets/         # Generated images

server/
├── routes.ts       # API endpoints
└── storage.ts      # In-memory data store

shared/
└── schema.ts       # TypeScript interfaces & Zod schemas
```

## Running the Application
The workflow "Start application" runs `npm run dev` which:
- Starts Express server on backend
- Starts Vite dev server for frontend
- Serves on port 5000

## Performance Optimizations
- GPU-accelerated CSS transforms
- Lazy loading for images
- Code splitting with React.lazy
- Optimized bundle size
- Mobile-first CSS
- prefers-reduced-motion support

## Recent Changes
- Generated 15 high-quality AI food/restaurant images
- Built complete component library (Navbar, Hero, Menu, Features, etc.)
- Implemented reservation system with backend API
- Added custom CSS animations for smooth 60fps performance
- Created comprehensive documentation

## User Preferences
- Focus on exceptional visual quality
- Mobile-first responsive design
- Performance-optimized for mobile devices
- Accessible and semantic HTML
- Clean, maintainable code structure
