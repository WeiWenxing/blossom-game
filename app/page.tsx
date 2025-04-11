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

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Blossom Games?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Instant Play",
                description: "No downloads or installations needed - play right in your browser",
              },
              {
                title: "Free Forever",
                description: "All our games are completely free to play",
              },
              {
                title: "Daily Updates",
                description: "New games bloom in our collection regularly",
              },
              {
                title: "Cross-Platform",
                description: "Play on any device, anywhere, anytime",
              },
            ].map((feature, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">How to Play</h2>
          <Card>
            <CardContent className="p-6">
              <ol className="list-decimal list-inside space-y-4">
                <li>Use the search bar at the top to find your favorite games</li>
                <li>Click on any game in the "Play Other Games" section to start playing</li>
                <li>Enjoy the game directly in your browser - no downloads needed!</li>
              </ol>
            </CardContent>
          </Card>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">FAQ</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Do I need to download and install games?</AccordionTrigger>
              <AccordionContent>
                No, all HTML5 games can be played directly in your browser without any downloads or installation.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Can I play these games on my phone?</AccordionTrigger>
              <AccordionContent>
                Yes, all games are compatible with both desktop and mobile devices, ensuring smooth gameplay on your phone.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Can I search for any game?</AccordionTrigger>
              <AccordionContent>
                The search function only works for games listed on our website. Games not in our collection cannot be found through search.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>What if I encounter issues while playing?</AccordionTrigger>
              <AccordionContent>
                If you experience any problems during gameplay, please stay tuned for our upcoming feedback channels. We'll address issues promptly.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </main>

      <footer className="border-t bg-muted">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Blossom Games</h3>
              <p className="text-muted-foreground">Your garden of online entertainment, where fun blooms endlessly.</p>
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
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <Link href="https://facebook.com" className="text-muted-foreground hover:text-primary" aria-label="Follow us on Facebook">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="https://twitter.com" className="text-muted-foreground hover:text-primary" aria-label="Follow us on Twitter">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="https://instagram.com" className="text-muted-foreground hover:text-primary" aria-label="Follow us on Instagram">
                  <Instagram className="h-5 w-5" />
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <p className="text-sm text-muted-foreground">
                Questions? Reach out to us on social media.
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Blossom Games. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}





