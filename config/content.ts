export const content = {
  header: {
    title: "Blossom Games",
    search: {
      placeholder: "Find your next favorite game...",
      ariaLabel: "Search games",
      buttonAriaLabel: "Search",
    },
    navigation: {
      links: [
        { text: "Home", href: "/" },
        // 可以轻松添加更多导航链接
      ]
    }
  },
  footer: {
    about: {
      title: "About",
      description: "Your premier destination for free online gaming entertainment. Play instantly, anywhere, anytime.",
    },
    quickLinks: {
      title: "Quick Links",
      links: [
        { text: "Love Tester", href: "/games/love-tester" },
        { text: "Bubble Shooter", href: "/games/bubble-shooter" },
        { text: "Candy Match", href: "/games/candy-match" }
      ]
    },
    social: {
      title: "Share",  // 改为 Share 而不是 Follow Us
      links: [
        {
          icon: "Facebook",
          href: `https://www.facebook.com/sharer.php?t=${encodeURIComponent('Blossom Game - Free Online Puzzle Adventure')}&u=${encodeURIComponent('https://blossom-game.com')}`
        },
        {
          icon: "Twitter",
          href: `https://twitter.com/intent/tweet?text=${encodeURIComponent('🌸 Playing Blossom - the most beautiful puzzle game online! No downloads needed, just pure entertainment. Join me at')}&url=${encodeURIComponent('https://blossom-game.com')}&hashtags=BlossomGame,PuzzleGames`
        }
      ]
    },
    legal: {
      title: "Legal",
      links: [
        { text: "Privacy Policy", href: "/privacy-policy" },
        { text: "Terms of Service", href: "/terms-of-service" }
      ]
    },
    copyright: {
      text: "© {year} Blossom Games. All rights reserved.",
      subText: "All games on this platform are free to play and do not require downloads."
    }
  },
  rating: {
    title: "Rate Blossom Games",
    votes: "votes",
    initialRating: 4.8,
    initialVotes: 15545
  }
} as const;


