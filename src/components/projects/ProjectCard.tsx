'use client';

import { motion } from 'framer-motion';
import { FiStar, FiGitBranch, FiExternalLink } from 'react-icons/fi';

interface ProjectCardProps {
  name: string;
  description: string | null;
  url: string;
  homepage: string | null;
  stars: number;
  forks: number;
  language: string | null;
  topics: string[];
  index: number;
}

const languageColors: { [key: string]: string } = {
  TypeScript: 'bg-blue-500',
  JavaScript: 'bg-yellow-400',
  Python: 'bg-green-500',
  'C#': 'bg-purple-500',
  Java: 'bg-red-500',
  HTML: 'bg-orange-500',
  CSS: 'bg-pink-500',
  default: 'bg-gray-500'
};

export default function ProjectCard({
  name,
  description,
  url,
  homepage,
  stars,
  forks,
  language,
  topics,
  index
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="bg-black/40 backdrop-blur-sm border border-amber-500/10 rounded-lg p-6 h-full hover:border-amber-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/5">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold text-amber-400 group-hover:text-amber-300 transition-colors">
            {name}
          </h3>
          <div className="flex gap-2">
            {homepage && (
              <motion.a
                href={homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400/70 hover:text-amber-400 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiExternalLink size={20} />
              </motion.a>
            )}
            <motion.a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400/70 hover:text-amber-400 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </motion.a>
          </div>
        </div>

        <p className="text-amber-100/60 mb-4 line-clamp-2">
          {description || 'No description available'}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {topics.map((topic) => (
            <span
              key={topic}
              className="text-xs px-2 py-1 rounded-full bg-amber-500/10 text-amber-300/80"
            >
              {topic}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 text-amber-100/60">
          {language && (
            <div className="flex items-center gap-1">
              <span className={`w-3 h-3 rounded-full ${languageColors[language] || languageColors.default}`} />
              <span className="text-sm">{language}</span>
            </div>
          )}
          <div className="flex items-center gap-1">
            <FiStar className="text-amber-400/70" />
            <span className="text-sm">{stars}</span>
          </div>
          <div className="flex items-center gap-1">
            <FiGitBranch className="text-amber-400/70" />
            <span className="text-sm">{forks}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
} 