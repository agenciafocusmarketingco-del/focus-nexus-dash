import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import LoadingSpinner from '@/components/LoadingSpinner';

const Index = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    if (user === null) {
      // User is not authenticated, redirect to login
      navigate('/auth');
    } else if (user !== undefined) {
      // User is authenticated, redirect to dashboard
      navigate('/dashboard');
    }
    // If user is undefined, we're still loading
  }, [user, navigate]);

  // Show loading while determining auth status
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <LoadingSpinner className="h-16 w-16" />
    </div>
  );
};

export default Index;
