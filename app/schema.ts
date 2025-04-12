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
    "url": `https://blossom-game.com${game.url}`,
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
  "url": "https://blossom-game.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://blossom-game.com/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

export const howToPlaySchema = {
  "@context": "http://schema.org",
  "@type": "HowTo",
  "name": "How to Play Games on Blossom Games",
  "url": "https://blossomgames.example.com",
  "inLanguage": "en",
  "image": {
    "@type": "ImageObject",
    "url": "/assets/guides/blossom-game-howto-1.jpg"
  },
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Tap to Start",
      "text": "Tap the \"TAP TO START\" button at the bottom of the screen to start the game.",
      "image": "/assets/guides/blossom-game-howto-1.jpg"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Click Play",
      "text": "Click the 'Play Now' button to play.",
      "image": "/assets/guides/blossom-game-howto-2.jpg"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Gameplay Introduction",
      "text": "This is the gameplay introduction screen of the game, guiding players on how to play.",
      "image": "/assets/guides/blossom-game-howto-3.jpg"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Tutorial Screen",
      "text": "This is a tutorial screen of the game.",
      "image": "/assets/guides/blossom-game-howto-4.jpg"
    },
    {
      "@type": "HowToStep",
      "position": 5,
      "name": "Level Selection",
      "text": "On the levels selection screen, tap the unlocked tile marked with the number \"1\" to start level 1.",
      "image": "/assets/guides/blossom-game-howto-5.jpg"
    },
    {
      "@type": "HowToStep",
      "position": 6,
      "name": "Playing Game",
      "text": "In the game screen, tap matching flower tiles according to the rules to eliminate them and complete level objectives.",
      "image": "/assets/guides/blossom-game-howto-6.jpg"
    }
  ]
};

export const generateRatingSchema = (rating: number, votes: number) => {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Blossom Games",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Any",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": rating,
      "ratingCount": votes,
      "bestRating": "5",
      "worstRating": "1"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };
};


