# AGENTS.md

This file contains essential context for agents working in this repository. It helps avoid common pitfalls and accelerates ramp-up time.

## Repository Overview

This is a React application (likely using Vite) for the Simpsons API GUI, featuring:
- Client-side React components using TypeScript
- API integration with Simpsons data
- Modern frontend tooling including Vite build system

## Key Commands

### Development
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run tests (likely using Vitest or Jest)
- `npm run lint` - Run linter (likely ESLint + Prettier)

### Project Structure
- `/src` - Main source code directory
- `/public` - Static assets and index.html
- `/tests` or `__tests__` - Test files (may be in src or separate directory)
- `vite.config.ts` - Vite configuration file

## Framework & Tooling

### Build System
- Uses Vite for development and build
- Likely uses TypeScript with React
- Implements modern frontend stack with hooks and component-based architecture

### Testing
- Tests use Vitest or Jest
- May include React Testing Library
- Component testing support likely present

### API Integration
- Connects to Simpsons API (likely RESTful)
- Data fetching methods using Axios or Fetch API

## Important Notes

1. This is a frontend-only application (React client-side app)
2. The project uses TypeScript for type safety with React
3. Vite provides fast HMR (Hot Module Replacement) during development
4. The application likely follows component-based architecture patterns
5. Tests are most likely run via the standard test script

## Environment Configuration

- `.env` files may be used for API keys or configuration
- Development environment variables may control mock vs real API behavior

## Entry Points

### Main Application
- `src/(tabs)/index.tsx` - Primary entry point for React application

## Deployment

The project likely builds to static assets that can be deployed to any static hosting service.