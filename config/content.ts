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
  },
  howToPlay: {
    title: "How to Play",
    steps: [
      {
        position: 1,
        name: "Tap to Start",
        text: "Tap the \"TAP TO START\" button at the bottom of the screen to start the game.",
        image: "/assets/guides/blossom-game-howto-1.jpg",
        imageAlt: "Blossom Game start screen showing TAP TO START button"
      },
      {
        position: 2,
        name: "Click Play",
        text: "Click the 'Play Now' button to play.",
        image: "/assets/guides/blossom-game-howto-2.jpg",
        imageAlt: "Blossom Game play button interface"
      },
      {
        position: 3,
        name: "Gameplay Introduction",
        text: "This is the gameplay introduction screen of the game, guiding players on how to play.",
        image: "/assets/guides/blossom-game-howto-3.jpg",
        imageAlt: "Blossom Game tutorial introduction screen"
      },
      {
        position: 4,
        name: "Tutorial Screen",
        text: "This is a tutorial screen of the game.",
        image: "/assets/guides/blossom-game-howto-4.jpg",
        imageAlt: "Blossom Game detailed tutorial instructions"
      },
      {
        position: 5,
        name: "Level Selection",
        text: "On the levels selection screen, tap the unlocked tile marked with the number \"1\" to start level 1.",
        image: "/assets/guides/blossom-game-howto-5.jpg",
        imageAlt: "Blossom Game level selection screen showing level 1"
      },
      {
        position: 6,
        name: "Playing Game",
        text: "In the game screen, tap matching flower tiles according to the rules to eliminate them and complete level objectives.",
        image: "/assets/guides/blossom-game-howto-6.jpg",
        imageAlt: "Blossom Game gameplay screen showing flower matching mechanics"
      }
    ]
  },
  whatIs: {
    title: "Blossom: Free Unblocked Online Games",
    description: "Blossom Games is your premier destination for free online gaming entertainment. Our platform offers a diverse collection of browser-based games that you can play instantly without any downloads or installations. From classic arcade games like Bubble Shooter to engaging puzzle adventures and fun social games like Love Tester, we provide endless entertainment for players of all ages. All our games are optimized for both desktop and mobile devices, ensuring you can enjoy gaming wherever you are.",
    logo: {
      src: "/assets/img/android-chrome-512x512.png",
      alt: "Blossom Games"
    },
    links: [
      {
        text: "How to Play",
        href: "#how-to-play",
        icon: "GamepadIcon"
      },
      {
        text: "FAQ",
        href: "#faq",
        icon: "HelpCircleIcon"
      },
      {
        text: "About",
        href: "#footer-about",
        icon: "InfoIcon"
      }
    ]
  }
} as const;


