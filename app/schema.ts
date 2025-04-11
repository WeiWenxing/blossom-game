export const generateGameSchema = (game: {
  title: string;
  description: string;
  url: string;
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": game.title,
    "description": game.description,
    "playMode": "SinglePlayer",
    "applicationCategory": "Browser Game",
    "gamePlatform": ["Web Browser"],
    "url": game.url,
    "inLanguage": "en",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  };
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Blossom Games",
  "description": "Free online games to play instantly without download. Your blooming garden of entertainment.",
  "url": "https://blossomgames.example.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://blossomgames.example.com/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};
