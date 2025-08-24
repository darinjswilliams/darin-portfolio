# Portfolio Website

## Overview

This is a modern portfolio website built as a full-stack application showcasing a developer's projects, skills, and contact information. The application features a React frontend with shadcn/ui components, an Express.js backend API, and PostgreSQL database integration using Drizzle ORM. The site includes sections for displaying projects, developer skills, an about section, and a contact form with database persistence.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **UI Library**: shadcn/ui components built on Radix UI primitives with Tailwind CSS for styling
- **State Management**: TanStack Query (React Query) for server state management and API caching
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom CSS variables for theming and dark mode support

### Backend Architecture
- **Framework**: Express.js with TypeScript running on Node.js
- **API Design**: RESTful API with endpoints for projects and contact form submissions
- **Database Integration**: Drizzle ORM for type-safe database operations
- **Development**: Hot module replacement via Vite integration for seamless development experience
- **Error Handling**: Centralized error handling middleware with proper HTTP status codes

### Data Storage
- **Database**: PostgreSQL configured via Drizzle with schema-first approach
- **ORM**: Drizzle ORM with Zod integration for runtime validation
- **Schema**: Two main entities - projects (portfolio showcase) and contacts (form submissions)
- **Migrations**: Drizzle Kit for database schema migrations and management
- **Fallback**: In-memory storage implementation for development/testing scenarios

### Authentication and Authorization
- **Current State**: No authentication system implemented
- **Contact Form**: Public endpoint for message submissions without user accounts
- **Future Considerations**: Ready for session-based or JWT authentication integration

## External Dependencies

### Database Services
- **Neon Database**: Serverless PostgreSQL database using `@neondatabase/serverless` driver
- **Connection**: Environment variable-based database URL configuration

### UI and Styling
- **Radix UI**: Comprehensive set of unstyled, accessible UI components
- **Tailwind CSS**: Utility-first CSS framework with PostCSS processing
- **Lucide Icons**: Modern icon library for consistent iconography
- **React Icons**: Additional icon sets including brand icons

### Development Tools
- **Vite**: Fast build tool with TypeScript support and development server
- **ESBuild**: Fast JavaScript bundler for production builds
- **Replit Integration**: Development environment optimizations and error overlay

### Form and Validation
- **React Hook Form**: Performant form library with minimal re-renders
- **Zod**: TypeScript-first schema validation library
- **Hookform Resolvers**: Integration between React Hook Form and Zod

### Additional Libraries
- **TanStack Query**: Server state management with caching and synchronization
- **Date-fns**: Date utility library for formatting and manipulation
- **Class Variance Authority**: Utility for creating variant-based component APIs
- **Embla Carousel**: Touch-friendly carousel component for project showcases