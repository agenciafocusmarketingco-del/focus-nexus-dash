import { Loader2 } from 'lucide-react';

interface LoadingSpinnerProps {
  className?: string;
}

/**
 * Reusable loading spinner using Lucide's Loader2 icon.
 * Add this component to pages to indicate asynchronous loading states.
 */
const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ className }) => {
  return (
    <div className={`flex items-center justify-center ${className ?? ''}`}>
      <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
    </div>
  );
};

export default LoadingSpinner;
