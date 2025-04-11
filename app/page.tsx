"use client";

import { useState } from "react";
import { Search, Facebook, Twitter, Instagram } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { Gamepad as GamepadIcon, HelpCircle as HelpCircleIcon, Info as InfoIcon } from 'lucide-react';

const otherGames = [
  {
    id: 1,
    title: "Bubble Shooter",
    description: "Classic bubble shooting game with colorful graphics and engaging gameplay",
    url: "https://play.famobi.com/bubble-shooter-classic",
    image: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=500&q=80",
  },
  {
    id: 2,
    title: "Candy Match",
    description: "Match delicious candies in this sweet puzzle adventure",
    url: "https://play.famobi.com/candy-match-3",
    image: "https://images.unsplash.com/photo-1596451190630-186aff535bf2?w=500&q=80",
  },
  {
    id: 3,
    title: "Mahjong",
    description: "Traditional Mahjong solitaire with beautiful tile designs",
    url: "https://play.famobi.com/mahjong-3d",
    image: "https://images.unsplash.com/photo-1611996575749-79a3a250f948?w=500&q=80",
  },
  {
    id: 4,
    title: "Solitaire",
    description: "Classic card game with multiple variations and challenges",
    url: "https://play.famobi.com/solitaire-classic",
    image: "https://images.unsplash.com/photo-1585504198199-20277593b94f?w=500&q=80",
  },
];

// 添加 Love Tester 游戏的配置
const loveTesterGame = {
  title: "Love Tester",
  description: "Test the compatibility between you and your crush!",
  content: () => (
    <div className="w-full max-w-md mx-auto p-6">
      <div className="space-y-4">
        <div>
          <Input
            type="text"
            placeholder="Enter first name"
            className="mb-2"
          />
          <Input
            type="text"
            placeholder="Enter second name"
            className="mb-4"
          />
        </div>
        <Button 
          className="w-full"
          onClick={() => {
            // 这里添加计算匹配度的逻辑
            const result = Math.floor(Math.random() * 100);
            alert(`Love Match: ${result}%`);
          }}
        >
          Calculate Love Match
        </Button>
      </div>
    </div>
  )
};

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeGame, setActiveGame] = useState<string | null>(null);
  const [showLoveTester, setShowLoveTester] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const game = otherGames.find(game => 
      game.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (game) {
      const element = document.getElementById("other-games");
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <nav className="flex items-center space-x-4 lg:space-x-6">
            <Link href="/" className="text-2xl font-bold">
              <h1>Blossom Games</h1>
            </Link>
          </nav>
          <form onSubmit={handleSearch} className="flex w-full max-w-sm items-center space-x-2">
            <Input
              type="search"
              placeholder="Find your next favorite game..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search games"
            />
            <Button type="submit" size="icon" aria-label="Search">
              <Search className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-8">Welcome to Blossom Games</h2>
          <p className="text-xl text-muted-foreground mb-8">Where Entertainment Blooms</p>
          <div className="aspect-video w-full max-w-4xl mx-auto mb-16 rounded-lg overflow-hidden shadow-xl bg-card">
            <iframe
              src="https://html5.gamemonetize.com/ch0kbbr5cqadx8gghn8rj8t5jmsaxcke/"
              className="w-full h-full border-0"
              allow="fullscreen"
              title="Love Tester Game"
              loading="lazy"
            />
          </div>
        </section>

        <section id="other-games" className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Play Other Games</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherGames.map((game) => (
              <Card key={game.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="p-0">
                  <img 
                    src={game.image} 
                    alt={`${game.title} game preview`} 
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="text-xl mb-2">{game.title}</CardTitle>
                  <CardDescription className="mb-4">{game.description}</CardDescription>
                  <Button
                    className="w-full"
                    onClick={() => setActiveGame(game.url)}
                    aria-label={`Play ${game.title}`}
                  >
                    Play Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16" id="description">
          <div className="container">
            <div className="bg-card rounded-lg p-8 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="flex justify-center">
                  <img 
                    src="/assets/img/android-chrome-512x512.png"
                    alt="Blossom Games"
                    className="w-48 h-48 object-contain"
                  />
                </div>
                <div className="md:col-span-2">
                  <h2 className="text-3xl font-bold mb-4">Blossom: Free Unblocked Online Games</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Blossom Games is your premier destination for free online gaming entertainment. 
                    Our platform offers a diverse collection of browser-based games that you can play 
                    instantly without any downloads or installations. From classic arcade games like 
                    Bubble Shooter to engaging puzzle adventures and fun social games like Love Tester, 
                    we provide endless entertainment for players of all ages. All our games are optimized 
                    for both desktop and mobile devices, ensuring you can enjoy gaming wherever you are.
                  </p>
                  <ul className="flex gap-6">
                    <li>
                      <Link 
                        href="#how-to-play" 
                        className="text-primary hover:underline font-semibold flex items-center gap-2"
                        onClick={(e) => {
                          e.preventDefault();
                          document.getElementById('how-to-play')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                      >
                        <GamepadIcon className="h-4 w-4" />
                        How to Play
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="#faq" 
                        className="text-primary hover:underline font-semibold flex items-center gap-2"
                        onClick={(e) => {
                          e.preventDefault();
                          document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                      >
                        <HelpCircleIcon className="h-4 w-4" />
                        FAQ
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="#footer-about" 
                        className="text-primary hover:underline font-semibold flex items-center gap-2"
                        onClick={(e) => {
                          e.preventDefault();
                          document.getElementById('footer-about')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                      >
                        <InfoIcon className="h-4 w-4" />
                        About
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16" id="how-to-play">
          <h2 className="text-3xl font-bold mb-8 text-center">How to Play</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Getting Started</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ol className="list-decimal list-inside space-y-4">
                  <li>Browse our collection of free online games</li>
                  <li>Click "Play Now" on any game that interests you</li>
                  <li>The game will load instantly in your browser</li>
                  <li>No registration or downloads required!</li>
                </ol>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Game Controls</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="list-disc list-inside space-y-4">
                  <li>Use mouse/touch for most games</li>
                  <li>Arrow keys for movement in some games</li>
                  <li>Game-specific instructions appear before play</li>
                  <li>Adjust volume using in-game controls</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-16" id="faq">
          <h2 className="text-3xl font-bold mb-8 text-center">FAQ</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Are all games really free to play?</AccordionTrigger>
              <AccordionContent>
                Yes! All games on Blossom Games are 100% free to play. We believe in providing entertainment without any cost to our players.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Do I need to create an account?</AccordionTrigger>
              <AccordionContent>
                No account is needed! Just visit our website and start playing instantly. We keep it simple and hassle-free.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Which devices are supported?</AccordionTrigger>
              <AccordionContent>
                Our games work on all modern devices including smartphones, tablets, laptops, and desktop computers. Just make sure you have an updated browser.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>How often are new games added?</AccordionTrigger>
              <AccordionContent>
                We regularly update our collection with new games. Check back often to discover fresh entertainment!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>What if a game isn't loading?</AccordionTrigger>
              <AccordionContent>
                Try refreshing your browser, clearing cache, or using a different browser. If issues persist, contact us through our social media channels.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </main>

      <footer className="border-t bg-muted">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div id="footer-about">
              <h3 className="text-lg font-semibold mb-4">About</h3>
              <p className="text-muted-foreground">Your premier destination for free online gaming entertainment. Play instantly, anywhere, anytime.</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/games/love-tester" className="text-sm text-muted-foreground hover:text-primary">
                    Love Tester
                  </Link>
                </li>
                <li>
                  <Link href="/games/bubble-shooter" className="text-sm text-muted-foreground hover:text-primary">
                    Bubble Shooter
                  </Link>
                </li>
                <li>
                  <Link href="/games/candy-match" className="text-sm text-muted-foreground hover:text-primary">
                    Candy Match
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Connect With Us</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Facebook className="h-5 w-5" />
                  <Link href="https://facebook.com/blossomgames" className="text-sm text-muted-foreground hover:text-primary">
                    Facebook
                  </Link>
                </div>
                <div className="flex items-center space-x-2">
                  <Twitter className="h-5 w-5" />
                  <Link href="https://twitter.com/blossomgames" className="text-sm text-muted-foreground hover:text-primary">
                    Twitter
                  </Link>
                </div>
                <div className="flex items-center space-x-2">
                  <Instagram className="h-5 w-5" />
                  <Link href="https://instagram.com/blossomgames" className="text-sm text-muted-foreground hover:text-primary">
                    Instagram
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-service" className="text-sm text-muted-foreground hover:text-primary">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/cookie-policy" className="text-sm text-muted-foreground hover:text-primary">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t">
            <div className="text-center text-sm text-muted-foreground">
              © {new Date().getFullYear()} Blossom Games. All rights reserved.
            </div>
            <div className="text-center text-xs text-muted-foreground mt-2">
              All games on this platform are free to play and do not require downloads.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}













