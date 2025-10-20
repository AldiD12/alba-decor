interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'white' | 'accent';
  className?: string;
}

export default function LoadingSpinner({ 
  size = 'md', 
  color = 'primary',
  className = '' 
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6', 
    lg: 'w-8 h-8'
  };

  const colorClasses = {
    primary: 'border-alba-primary border-t-transparent',
    white: 'border-white border-t-transparent',
    accent: 'border-alba-accent border-t-transparent'
  };

  return (
    <div 
      className={`${sizeClasses[size]} ${colorClasses[color]} border-2 rounded-full animate-spin ${className}`}
      role="status"
      aria-label="Loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}