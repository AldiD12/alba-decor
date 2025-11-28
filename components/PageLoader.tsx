'use client';

import { useState, useEffect } from 'react';
import LoadingSpinner from './LoadingSpinner';

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsLoading(false), 300);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    // Ensure loading completes within 2 seconds max
    const maxTimer = setTimeout(() => {
      setProgress(100);
      setTimeout(() => setIsLoading(false), 300);
    }, 2000);

    return () => {
      clearInterval(timer);
      clearTimeout(maxTimer);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-alba-warm-white z-50 flex flex-col items-center justify-center">
      {/* Logo */}
      <div className="mb-8">
        <img 
          src="/images/alba-decor-logo.png" 
          alt="Alba Decor" 
          className="h-16 w-auto"
        />
      </div>

      {/* Loading spinner */}
      <LoadingSpinner size="lg" color="primary" className="mb-6" />

      {/* Progress bar */}
      <div className="w-64 h-1 bg-alba-cream rounded-full overflow-hidden mb-4">
        <div 
          className="h-full bg-gradient-to-r from-alba-primary to-alba-accent transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Loading text */}
      <p className="text-alba-charcoal/70 text-sm font-medium">
        Loading your beautiful space...
      </p>
    </div>
  );
}