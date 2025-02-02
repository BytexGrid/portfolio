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
  created_at: string;
  updated_at: string;
  fork: boolean;
  owner: {
    login: string;
  };
}

interface RepositoryCollection {
  ownProjects: Repository[];
  contributions: Repository[];
}

export async function getRepositories(): Promise<RepositoryCollection> {
  const response = await fetch('https://api.github.com/users/BytexGrid/repos?per_page=100', {
    headers: {
      'Accept': 'application/vnd.github.v3+json',
    },
    next: { revalidate: 3600 } // Revalidate every hour
  });

  if (!response.ok) {
    throw new Error('Failed to fetch repositories');
  }

  const repos = await response.json();
  
  // Sort by last updated
  const sortedRepos = repos.sort((a: Repository, b: Repository) => 
    new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
  );

  // Separate owned and forked repositories
  return {
    ownProjects: sortedRepos.filter((repo: Repository) => !repo.fork),
    contributions: sortedRepos.filter((repo: Repository) => repo.fork)
  };
} 