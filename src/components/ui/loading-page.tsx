
import React from 'react';
import { Sparkles, BookOpen, Code, Brain } from 'lucide-react';

const LoadingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gta-red/10 via-white to-gta-red/20 dark:from-gray-900 dark:via-gray-800 dark:to-gta-red/30 flex items-center justify-center relative overflow-hidden">
      {/* Animated GTA Halo Logo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <div className="absolute w-80 h-80 rounded-full bg-gta-red/10 blur-3xl animate-pulse-slow" />
        <div className="absolute w-56 h-56 rounded-full bg-gta-red-light/10 blur-2xl animate-pulse" />
      </div>

      {/* Main loading content */}
      <div className="text-center z-10 px-4 w-full max-w-xl">
        {/* Logo/Brand area with GTA colors and halo */}
        <div className="mb-8 relative flex flex-col items-center">
          <div className="relative w-24 h-24 flex items-center justify-center mb-4">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-gta-red/40 via-gta-red-light/30 to-white/10 blur-2xl animate-glow" />
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-gta-red to-gta-red-light flex items-center justify-center shadow-2xl border-4 border-white/30 dark:border-gray-900/30 animate-spin-slow">
              <Sparkles className="w-12 h-12 text-white drop-shadow-lg" />
            </div>
          </div>
          <h1 className="text-4xl font-extrabold text-gray-800 dark:text-white mb-1 tracking-tight">GTA Academy</h1>
          <p className="text-gta-red dark:text-gta-red-light text-lg font-semibold mb-2">Centre de Formation Professionnelle</p>
          <span className="block text-gray-500 dark:text-gray-300 text-base italic animate-fade-in delay-300">"L'avenir appartient à ceux qui se forment aujourd'hui."</span>
        </div>

        {/* Elegant spinner and progress bar */}
        <div className="mb-10 flex flex-col items-center">
          <div className="relative flex items-center justify-center mb-6">
            <div className="w-14 h-14 border-4 border-gta-red border-t-gta-red-light border-b-transparent border-l-transparent rounded-full animate-spin-fast shadow-lg"></div>
            <div className="absolute flex items-center justify-center w-14 h-14">
              <Sparkles className="w-7 h-7 text-gta-red-light animate-pulse" />
            </div>
          </div>
          <div className="w-64 h-3 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto overflow-hidden shadow-inner">
            <div className="h-full bg-gradient-to-r from-gta-red via-gta-red-light to-gta-red rounded-full animate-progress-bar"></div>
          </div>
        </div>

        {/* Loading text */}
        <div className="text-gray-700 dark:text-gray-300 text-lg font-medium animate-fade-in mb-6">
          Chargement de votre expérience d'apprentissage...
        </div>

        {/* Features preview with subtle animation */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-lg mx-auto">
          <div className="text-center animate-fade-in delay-300 group">
            <div className="w-14 h-14 bg-gta-red/10 dark:bg-gta-red/20 rounded-xl flex items-center justify-center mx-auto mb-2 border border-gta-red/20 group-hover:scale-110 group-hover:shadow-lg transition-transform duration-300 animate-float">
              <Code className="w-7 h-7 text-gta-red group-hover:text-gta-red-light transition-colors duration-300" />
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm font-semibold">Formations Certifiantes</p>
          </div>
          <div className="text-center animate-fade-in delay-500 group">
            <div className="w-14 h-14 bg-gta-red-light/10 dark:bg-gta-red-light/20 rounded-xl flex items-center justify-center mx-auto mb-2 border border-gta-red-light/20 group-hover:scale-110 group-hover:shadow-lg transition-transform duration-300 animate-float-slow">
              <Brain className="w-7 h-7 text-gta-red-light group-hover:text-gta-red transition-colors duration-300" />
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm font-semibold">Formations Vacances</p>
          </div>
          <div className="text-center animate-fade-in delay-700 group">
            <div className="w-14 h-14 bg-gta-red/10 dark:bg-gta-red/20 rounded-xl flex items-center justify-center mx-auto mb-2 border border-gta-red/20 group-hover:scale-110 group-hover:shadow-lg transition-transform duration-300 animate-float-x">
              <BookOpen className="w-7 h-7 text-gta-red group-hover:text-gta-red-light transition-colors duration-300" />
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm font-semibold">Formations Entreprise</p>
          </div>
        </div>
      </div>

      {/* Custom styles for unique animations */}
      <style>{`
        .animate-spin-slow {
          animation: spin 2.5s linear infinite;
        }
        .animate-spin-fast {
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-progress-bar {
          animation: progress-bar 2.2s cubic-bezier(0.4,0,0.2,1) infinite;
        }
        @keyframes progress-bar {
          0% { width: 0%; }
          50% { width: 80%; }
          100% { width: 100%; }
        }
        .animate-glow {
          animation: glow 2.5s ease-in-out infinite alternate;
        }
        @keyframes glow {
          0% { opacity: 0.5; }
          50% { opacity: 1; }
          100% { opacity: 0.5; }
        }
        .animate-pulse-slow {
          animation: pulse 3.5s cubic-bezier(0.4,0,0.2,1) infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-x {
          animation: float-x 5s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-16px); }
        }
        @keyframes float-x {
          0%, 100% { transform: translateX(0px); }
          50% { transform: translateX(16px); }
        }
      `}</style>
    </div>
  );
};

export default LoadingPage;
