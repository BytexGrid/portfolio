'use client';

import FireBackground from '@/components/background/FireBackground';

export default function ProjectsLoading() {
  return (
    <>
      <FireBackground />
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          <div className="absolute top-8 left-8">
            <div className="text-amber-400/50 flex items-center gap-2">
              <div className="h-5 w-5" />
              Back Home
            </div>
          </div>

          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-amber-500/50 to-orange-600/50 text-transparent bg-clip-text">
              My Projects
            </h1>
            <div className="h-4 w-2/3 mx-auto bg-amber-100/10 rounded animate-pulse" />
          </div>
          
          <div className="animate-pulse space-y-8">
            <div className="h-12 w-48 bg-gray-700/50 rounded-lg" />
            <div className="h-6 w-96 bg-gray-700/50 rounded-lg" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-gray-800/50 rounded-lg p-6 space-y-4">
                  <div className="h-6 w-3/4 bg-gray-700/50 rounded" />
                  <div className="h-20 bg-gray-700/50 rounded" />
                  <div className="flex gap-2">
                    <div className="h-6 w-20 bg-gray-700/50 rounded-full" />
                    <div className="h-6 w-20 bg-gray-700/50 rounded-full" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 