/**
 * Next.js Middleware Configuration
 * 
 * This middleware handles authentication and route protection for the Bridge platform.
 * It uses NextAuth.js to manage user sessions and control access to protected routes.
 * 
 * Features:
 * - Route-based authentication protection
 * - Automatic redirects for authenticated users
 * - Hackathon demo mode (authentication bypass)
 * - Custom sign-in page configuration
 * 
 * @author Bridge Development Team
 * @version 1.0.0
 * @since 2024
 */

import { withAuth } from "next-auth/middleware"

/**
 * Main middleware function with NextAuth.js integration
 * 
 * This middleware runs on every request to protected routes and handles:
 * - User authentication verification
 * - Route access control
 * - Redirect logic for authenticated/unauthenticated users
 */
export default withAuth(
  function middleware(req) {
    /**
     * Additional middleware logic can be added here
     * Examples:
     * - Logging user activity
     * - Rate limiting
     * - Custom headers
     * - Analytics tracking
     */
  },
  {
    callbacks: {
      /**
       * Authorization callback function
       * 
       * Determines whether a user is authorized to access a specific route.
       * This function is called for every request to a protected route.
       * 
       * @param {Object} params - Authorization parameters
       * @param {Object} params.token - User's JWT token (null if not authenticated)
       * @param {NextRequest} params.req - The incoming request object
       * @returns {boolean} - True if authorized, false if not
       */
      authorized: ({ token, req }) => {
        // ===== AUTHENTICATED USER REDIRECTS =====
        // If accessing login page and already authenticated, redirect to dashboard
        if (req.nextUrl.pathname === "/login" && token) {
          return false
        }
        
        // ===== HACKATHON DEMO MODE =====
        // For hackathon demo - allow access to all routes without authentication
        // Comment out the authentication check below to enable skip sign-in
        /*
        // ===== PROTECTED ROUTES AUTHENTICATION =====
        // If accessing protected routes, require authentication
        if (req.nextUrl.pathname.startsWith("/dashboard") ||
            req.nextUrl.pathname.startsWith("/settings") ||
            req.nextUrl.pathname.startsWith("/chat") ||
            req.nextUrl.pathname.startsWith("/connect") ||
            req.nextUrl.pathname.startsWith("/discussions") ||
            req.nextUrl.pathname.startsWith("/leaderboard") ||
            req.nextUrl.pathname.startsWith("/files") ||
            req.nextUrl.pathname.startsWith("/societies") ||
            req.nextUrl.pathname.startsWith("/assessments") ||
            req.nextUrl.pathname.startsWith("/word-counter") ||
            req.nextUrl.pathname.startsWith("/speed-type") ||
            req.nextUrl.pathname.startsWith("/reference-generator") ||
            req.nextUrl.pathname.startsWith("/bridgey")) {
          return !!token // Require valid token for protected routes
        }
        */
        
        // ===== DEFAULT BEHAVIOR =====
        // Allow access to all other routes (public routes)
        return true
      },
    },
    pages: {
      /**
       * Custom authentication pages configuration
       * Redirects unauthenticated users to our custom login page
       * instead of the default NextAuth.js sign-in page
       */
      signIn: "/login",
    },
  }
)

/**
 * Middleware Configuration
 * 
 * Defines which routes this middleware should run on.
 * The matcher array specifies path patterns that trigger the middleware.
 * 
 * Protected Routes:
 * - /dashboard - Main user dashboard
 * - /settings - User settings and preferences
 * - /chat - Messaging and communication
 * - /connect - Student networking features
 * - /discussions - Forum and discussion boards
 * - /leaderboard - Achievement and ranking system
 * - /files - Document management
 * - /societies - Student organizations
 * - /assessments - Academic assessments
 * - /word-counter - Writing tools
 * - /speed-type - Typing practice
 * - /reference-generator - Citation tools
 * - /bridgey - AI assistant
 * - /login - Authentication page (for redirect logic)
 */
export const config = {
  matcher: [
    "/dashboard/:path*",      // Dashboard and all sub-routes
    "/settings/:path*",       // Settings and all sub-routes
    "/chat/:path*",          // Chat system and all sub-routes
    "/connect/:path*",       // Networking features and all sub-routes
    "/discussions/:path*",   // Discussion forums and all sub-routes
    "/leaderboard/:path*",   // Achievement system and all sub-routes
    "/files/:path*",         // File management and all sub-routes
    "/societies/:path*",     // Student organizations and all sub-routes
    "/assessments/:path*",   // Academic assessments and all sub-routes
    "/word-counter/:path*",  // Writing tools and all sub-routes
    "/speed-type/:path*",    // Typing practice and all sub-routes
    "/reference-generator/:path*", // Citation tools and all sub-routes
    "/bridgey/:path*",       // AI assistant and all sub-routes
    "/login"                 // Login page (for authenticated user redirects)
  ],
} 