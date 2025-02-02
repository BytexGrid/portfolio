'use client';

import { motion } from 'framer-motion';
import FireBackground from '@/components/background/FireBackground';
import Link from 'next/link';
import { Suspense, useEffect, useState } from 'react';
import ProjectCard from '@/components/projects/ProjectCard';
import { getRepositories } from '@/lib/github';

interface Repository {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  language: string | null;
  fork: boolean;
  owner: {
    login: string;
  };
}

interface RepositoryCollection {
  ownProjects: Repository[];
  contributions: Repository[];
}

export default function ProjectsPage() {
  const [repositories, setRepositories] = useState<RepositoryCollection>({ ownProjects: [], contributions: [] });
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getRepositories()
      .then(setRepositories)
      .catch((err) => setError('Failed to load repositories. Please try again later.'));
  }, []);

  const ProjectSection = ({ title, description, repos, startIndex = 0 }: { 
    title: string; 
    description: string;
    repos: Repository[];
    startIndex?: number;
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mb-16"
    >
      <motion.h2 
        className="text-3xl font-bold mb-4 bg-gradient-to-r from-amber-500 to-orange-600 text-transparent bg-clip-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {title}
      </motion.h2>
      <motion.p 
        className="text-amber-100/80 mb-8 max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {description}
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {repos.map((repo, index) => (
          <ProjectCard
            key={repo.id}
            name={repo.name}
            description={repo.description}
            url={repo.html_url}
            homepage={repo.homepage}
            stars={repo.stargazers_count}
            forks={repo.forks_count}
            language={repo.language}
            topics={repo.topics}
            index={startIndex + index}
          />
        ))}
      </div>
    </motion.div>
  );

  return (
    <>
      <FireBackground />
      <motion.div 
        className="min-h-screen py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="container mx-auto px-4"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="absolute top-8 left-8"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/"
                className="text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                Back Home
              </Link>
            </motion.div>
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-amber-500 to-orange-600 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Projects & Contributions
          </motion.h1>
          <motion.p 
            className="text-amber-100/80 text-center mb-16 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Exploring the boundaries of technology through open-source innovation. Here are my projects and contributions to the community.
          </motion.p>
          
          <Suspense fallback={<LoadingGrid />}>
            {error ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center text-amber-400"
              >
                {error}
              </motion.div>
            ) : repositories.ownProjects.length > 0 || repositories.contributions.length > 0 ? (
              <>
                {repositories.ownProjects.length > 0 && (
                  <ProjectSection
                    title="My Projects"
                    description="Personal projects and open-source initiatives I've created and maintain."
                    repos={repositories.ownProjects}
                  />
                )}
                
                {repositories.contributions.length > 0 && (
                  <ProjectSection
                    title="Open Source Contributions"
                    description="Projects I've contributed to and helped improve in the open-source community."
                    repos={repositories.contributions}
                    startIndex={repositories.ownProjects.length}
                  />
                )}
              </>
            ) : (
              <LoadingGrid />
            )}
          </Suspense>
        </motion.div>
      </motion.div>
    </>
  );
}

function LoadingGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="bg-black/40 backdrop-blur-sm border border-amber-500/10 rounded-lg p-6"
        >
          <div className="h-6 w-2/3 bg-amber-400/10 rounded mb-4 animate-pulse" />
          <div className="space-y-2">
            <div className="h-4 w-full bg-amber-100/10 rounded animate-pulse" />
            <div className="h-4 w-3/4 bg-amber-100/10 rounded animate-pulse" />
          </div>
        </div>
      ))}
    </div>
  );
} 