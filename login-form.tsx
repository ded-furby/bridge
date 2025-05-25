/**
 * Login Form Component
 * 
 * A comprehensive authentication form component that provides multiple sign-in options:
 * - Google OAuth authentication via NextAuth.js
 * - Skip authentication option for hackathon demos
 * - Professional UI with proper accessibility and UX patterns
 * 
 * @component
 * @author Bridge Development Team
 * @version 1.0.0
 * @since 2024
 */

"use client";

// React core imports
import React from "react";

// Authentication and navigation imports
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

// Utility and UI component imports
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

/**
 * LoginForm Component Props Interface
 * Extends standard div element props for maximum flexibility
 */
interface LoginFormProps extends React.ComponentProps<"div"> {
  className?: string;
}

/**
 * LoginForm Component
 * 
 * Renders a complete authentication form with Google OAuth integration
 * and demo skip functionality for development/presentation purposes.
 * 
 * @param {LoginFormProps} props - Component props including className and div attributes
 * @returns {JSX.Element} The rendered login form component
 */
export function LoginForm({
  className,
  ...props
}: LoginFormProps) {
  // Router hook for programmatic navigation
  const router = useRouter();

  /**
   * Handles Google OAuth sign-in process
   * Redirects to dashboard upon successful authentication
   */
  const handleGoogleSignIn = () => {
    signIn("google", { callbackUrl: "/dashboard" });
  };

  /**
   * Handles demo skip functionality
   * Bypasses authentication for hackathon/demo purposes
   * Directly navigates to dashboard without authentication
   */
  const handleSkipSignIn = () => {
    // For hackathon demo - skip authentication
    router.push("/dashboard");
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      
      {/* ===== HEADER SECTION ===== */}
      {/* Welcome message and instructions */}
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Welcome to Bridge</h1>
        <p className="text-muted-foreground text-sm">
          Sign in with your Google account to get started
        </p>
      </div>
      
      {/* ===== GOOGLE SIGN-IN BUTTON ===== */}
      {/* Primary authentication method using Google OAuth */}
      <Button 
        variant="outline" 
        className="w-full h-12 text-base" 
        onClick={handleGoogleSignIn}
      >
        {/* Google Logo SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="h-6 w-6"
        >
          {/* Google "G" logo paths with official colors */}
          <path
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            fill="#4285F4"
          />
          <path
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            fill="#34A853"
          />
          <path
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            fill="#FBBC05"
          />
          <path
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            fill="#EA4335"
          />
        </svg>
        <span className="ml-3">Continue with Google</span>
      </Button>

      {/* ===== DIVIDER SECTION ===== */}
      {/* Visual separator between authentication options */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or
          </span>
        </div>
      </div>

      {/* ===== DEMO SKIP BUTTON ===== */}
      {/* Alternative authentication bypass for demonstrations */}
      <Button 
        variant="secondary" 
        className="w-full h-12 text-base" 
        onClick={handleSkipSignIn}
      >
        Skip Sign-in (Hackathon Demo)
      </Button>

      {/* ===== LEGAL DISCLAIMER ===== */}
      {/* Terms of service and privacy policy links */}
      <div className="text-center text-sm text-muted-foreground">
        <p>
          By signing in, you agree to our{" "}
          <a href="#" className="underline underline-offset-4 hover:text-primary">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="underline underline-offset-4 hover:text-primary">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
}
