export const games = {
  "blossom": {
    title: "Blossom",
    description: "Immerse yourself in the beautiful world of Blossom - a captivating puzzle adventure where you connect matching flowers to create stunning patterns. Play for free in your browser!",
    url: "YOUR_GAME_URL_HERE",
    howToPlay: [
      "Match similar flowers to clear them",
      "Create combos for special effects",
      "Complete levels to unlock new challenges",
      "Enjoy beautiful animations and relaxing gameplay",
    ],
    features: [
      "Beautiful flower-themed graphics",
      "Relaxing gameplay mechanics",
      "Progressive difficulty",
      "No download required",
    ],
    relatedGames: []
  }
} as const;

export type Games = typeof games;