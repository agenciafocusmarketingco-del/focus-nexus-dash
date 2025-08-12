import { useAuth } from "@/hooks/useAuth";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import LoadingSpinner from "@/components/LoadingSpinner";

interface AuthGuardProps {
  children: React.ReactNode;
}

export function AuthGuard({ children }: AuthGuardProps) {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // If no user and not on auth page, redirect to auth
    if (user === null && location.pathname !== '/auth') {
      navigate('/auth');
    }
    // If user exists and on auth page, redirect to dashboard
    if (user && location.pathname === '/auth') {
      navigate('/');
    }
  }, [user, navigate, location.pathname]);

  // Show loading while auth state is being determined
  if (user === undefined) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-background">
        <LoadingSpinner />
      </div>
    );
  }

  // Show auth page if no user
  if (user === null && location.pathname !== '/auth') {
    return null; // Will redirect via useEffect
  }

  return <>{children}</>;
}