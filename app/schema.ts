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

import { content } from "@/config/content";

export const howToPlaySchema = {
  "@context": "http://schema.org",
  "@type": "HowTo",
  "name": content.howToPlay.title,
  "url": "https://blossomgames.example.com",
  "inLanguage": "en",
  "image": {
    "@type": "ImageObject",
    "url": content.howToPlay.steps[0].image
  },
  "step": content.howToPlay.steps.map(step => ({
    "@type": "HowToStep",
    "position": step.position,
    "name": step.name,
    "text": step.text,
    "image": step.image
  }))
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
