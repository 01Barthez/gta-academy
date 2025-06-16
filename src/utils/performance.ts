
// Utilitaires pour surveiller et optimiser les performances

export const measurePerformance = () => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    
    const metrics = {
      // Core Web Vitals
      fcp: 0, // First Contentful Paint
      lcp: 0, // Largest Contentful Paint
      fid: 0, // First Input Delay
      cls: 0, // Cumulative Layout Shift
      
      // Loading metrics
      domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
      loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
      
      // Navigation timing
      dns: navigation.domainLookupEnd - navigation.domainLookupStart,
      tcp: navigation.connectEnd - navigation.connectStart,
      request: navigation.responseStart - navigation.requestStart,
      response: navigation.responseEnd - navigation.responseStart,
      
      // Total page load time using fetchStart as baseline instead of deprecated navigationStart
      totalLoadTime: navigation.loadEventEnd - navigation.fetchStart
    };

    // Measure FCP
    const fcpEntry = performance.getEntriesByName('first-contentful-paint')[0];
    if (fcpEntry) {
      metrics.fcp = fcpEntry.startTime;
    }

    // Log metrics for debugging (remove in production)
    console.log('Performance Metrics:', metrics);
    
    return metrics;
  }
  
  return null;
};

// Lazy loading optimization
export const createIntersectionObserver = (callback: IntersectionObserverCallback) => {
  const options = {
    root: null,
    rootMargin: '50px',
    threshold: 0.1
  };

  return new IntersectionObserver(callback, options);
};

// Image loading optimization
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

// Preload critical images
export const preloadCriticalImages = async (images: string[]) => {
  try {
    await Promise.all(images.map(src => preloadImage(src)));
    console.log('Critical images preloaded successfully');
  } catch (error) {
    console.error('Error preloading images:', error);
  }
};

// Bundle size monitoring
export const logBundleSize = () => {
  if (typeof navigator !== 'undefined' && 'connection' in navigator) {
    const connection = (navigator as any).connection;
    console.log('Network info:', {
      effectiveType: connection.effectiveType,
      downlink: connection.downlink,
      rtt: connection.rtt
    });
  }
};

// Memory usage monitoring
export const logMemoryUsage = () => {
  if ('memory' in performance) {
    const memInfo = (performance as any).memory;
    console.log('Memory usage:', {
      used: Math.round(memInfo.usedJSHeapSize / 1048576) + ' MB',
      total: Math.round(memInfo.totalJSHeapSize / 1048576) + ' MB',
      limit: Math.round(memInfo.jsHeapSizeLimit / 1048576) + ' MB'
    });
  }
};
