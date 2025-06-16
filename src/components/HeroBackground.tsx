
import React from 'react';
import { Sparkles, Zap } from 'lucide-react';

const HeroBackground = () => {
  return (
    <>
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none select-none z-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2393c5fd' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Floating animations */}
      <span className="absolute top-16 left-8 w-16 h-16 bg-blue-400/20 rounded-full animate-bounce flex items-center justify-center backdrop-blur-sm">
        <Sparkles className="w-8 h-8 text-blue-300 animate-pulse" />
      </span>
      <span className="absolute bottom-24 right-12 w-20 h-20 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-full animate-pulse flex items-center justify-center backdrop-blur-sm">
        <Zap className="w-8 h-8 text-purple-300 animate-bounce delay-300" />
      </span>
    </>
  );
};

export default HeroBackground;
