
import React, { Suspense } from 'react';
import LoadingPage from './loading-page';
import { Skeleton } from './skeleton';

interface SuspenseWrapperProps {
  children: React.ReactNode;
  fallback?: 'page' | 'skeleton' | 'custom';
  customFallback?: React.ReactNode;
  className?: string;
}

const SuspenseWrapper = ({ 
  children, 
  fallback = 'skeleton',
  customFallback,
  className = ""
}: SuspenseWrapperProps) => {
  const getFallbackComponent = () => {
    if (customFallback) return customFallback;
    
    switch (fallback) {
      case 'page':
        return <LoadingPage />;
      case 'skeleton':
        return (
          <div className={`animate-pulse space-y-4 p-4 ${className}`}>
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-32 w-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
            </div>
          </div>
        );
      default:
        return <LoadingPage />;
    }
  };

  return (
    <Suspense fallback={getFallbackComponent()}>
      {children}
    </Suspense>
  );
};

export default SuspenseWrapper;
