
import React from 'react';
import { Sparkles, BookOpen, Code, Brain } from 'lucide-react';

const LoadingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gta-red/5 via-white to-gta-red/10 dark:from-gray-900 dark:via-gray-800 dark:to-gta-red/20 flex items-center justify-center relative overflow-hidden">
      {/* Background animations with GTA theme colors */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gta-red/10 dark:bg-gta-red/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-24 h-24 bg-gta-red-light/10 dark:bg-gta-red-light/20 rounded-full animate-pulse delay-300"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-gta-red/10 dark:bg-gta-red/20 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-20 left-1/3 w-20 h-20 bg-gta-red-light/10 dark:bg-gta-red-light/20 rounded-full animate-pulse delay-700"></div>
      </div>

      {/* Main loading content */}
      <div className="text-center z-10 px-4">
        {/* Logo/Brand area with GTA colors */}
        <div className="mb-8">
          <div className="w-20 h-20 bg-gradient-to-r from-gta-red to-gta-red-light rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse shadow-lg">
            <Sparkles className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white mb-2">
            GTA Academy
          </h1>
          <p className="text-gta-red dark:text-gta-red-light text-lg font-medium">Centre de Formation Professionnelle</p>
        </div>

        {/* Loading animation with GTA theme */}
        <div className="mb-8">
          <div className="flex justify-center space-x-2 mb-4">
            <div className="w-3 h-3 bg-gta-red rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-gta-red-light rounded-full animate-bounce delay-100"></div>
            <div className="w-3 h-3 bg-gta-red rounded-full animate-bounce delay-200"></div>
          </div>
          
          {/* Progress bar with GTA gradient */}
          <div className="w-64 h-2 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto overflow-hidden">
            <div className="h-full bg-gradient-to-r from-gta-red via-gta-red-light to-gta-red rounded-full animate-pulse loading-progress"></div>
          </div>
        </div>

        {/* Loading text */}
        <div className="text-gray-700 dark:text-gray-300 text-lg font-medium animate-fade-in">
          Chargement de votre expérience d'apprentissage...
        </div>

        {/* Features preview with GTA theme */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-lg mx-auto">
          <div className="text-center animate-fade-in delay-300">
            <div className="w-12 h-12 bg-gta-red/10 dark:bg-gta-red/20 rounded-lg flex items-center justify-center mx-auto mb-2 border border-gta-red/20">
              <Code className="w-6 h-6 text-gta-red" />
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">Formations Certifiantes</p>
          </div>
          <div className="text-center animate-fade-in delay-500">
            <div className="w-12 h-12 bg-gta-red-light/10 dark:bg-gta-red-light/20 rounded-lg flex items-center justify-center mx-auto mb-2 border border-gta-red-light/20">
              <Brain className="w-6 h-6 text-gta-red-light" />
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">Formations Vacances</p>
          </div>
          <div className="text-center animate-fade-in delay-700">
            <div className="w-12 h-12 bg-gta-red/10 dark:bg-gta-red/20 rounded-lg flex items-center justify-center mx-auto mb-2 border border-gta-red/20">
              <BookOpen className="w-6 h-6 text-gta-red" />
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">Formations Entreprise</p>
          </div>
        </div>
      </div>

      {/* Custom styles using CSS classes instead of jsx style */}
      <style>
        {`
          .loading-progress {
            animation: loading 2s ease-in-out infinite;
          }
          
          @keyframes loading {
            0% { width: 0%; }
            50% { width: 70%; }
            100% { width: 100%; }
          }
          
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
        `}
      </style>
    </div>
  );
};

export default LoadingPage;
