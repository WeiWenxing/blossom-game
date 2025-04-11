import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://blossomgames.example.com';
  
  // List of all game slugs
  const games = ['love-tester', 'bubble-shooter', 'candy-match', 'mahjong', 'solitaire'];
  
  // Base pages
  const routes = ['', '/privacy-policy', '/terms-of-service'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Game pages
  const gameRoutes = games.map((game) => ({
    url: `${baseUrl}/games/${game}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  return [...routes, ...gameRoutes];
}
