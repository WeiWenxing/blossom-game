"use client";

import { useState, useEffect } from "react";
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
import { howToPlaySchema, generateRatingSchema } from "./schema";

interface Game {
  id: string;
  title: string;
  description: string;
  image: string;
  url: string;
}

const otherGames: Game[] = [];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeGame, setActiveGame] = useState<string | null>(null);
  const [showLoveTester, setShowLoveTester] = useState(false);

  // 设置初始默认值
  const [rating, setRating] = useState(4.8);
  const [votes, setVotes] = useState(15545);
  const [userRating, setUserRating] = useState(0);
  const [hasVoted, setHasVoted] = useState(false);

  // 添加重置评分的函数
  const resetRating = () => {
    localStorage.removeItem('hasVoted');
    localStorage.removeItem('userRating');
    localStorage.removeItem('globalRating');
    localStorage.removeItem('totalVotes');
    setHasVoted(false);
    setUserRating(0);
    setRating(4.8);
    setVotes(15545);
  };

  // 在组件挂载后从 localStorage 加载数据
  useEffect(() => {
    const savedRating = localStorage.getItem('globalRating');
    const savedVotes = localStorage.getItem('totalVotes');
    const savedUserRating = localStorage.getItem('userRating');
    const savedHasVoted = localStorage.getItem('hasVoted');

    if (savedRating) setRating(parseFloat(savedRating));
    if (savedVotes) setVotes(parseInt(savedVotes));
    if (savedUserRating) setUserRating(parseInt(savedUserRating));
    if (savedHasVoted) setHasVoted(savedHasVoted === 'true');
  }, []);

  // 处理投票逻辑
  const handleVote = (star: number) => {
    if (!hasVoted) {
      setUserRating(star);
      setHasVoted(true);
      const newTotalVotes = votes + 1;
      const newRating = ((rating * votes) + star) / newTotalVotes;
      const finalRating = Number(newRating.toFixed(1));

      // 更新状态
      setRating(finalRating);
      setVotes(newTotalVotes);

      // 保存到 localStorage
      localStorage.setItem('hasVoted', 'true');
      localStorage.setItem('userRating', star.toString());
      localStorage.setItem('globalRating', finalRating.toString());
      localStorage.setItem('totalVotes', newTotalVotes.toString());
    }
  };

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
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 hidden">
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
          <h2 className="text-4xl font-bold mb-8">Welcome to Blossom Game</h2>
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

        <section id="other-games" className="mb-16" >
          {otherGames.length > 0 && (
            <h2 className="text-3xl font-bold mb-8 text-center">Play Other Games</h2>
          )}
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
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(howToPlaySchema) }}
          />

          <h2 className="text-3xl font-bold mb-8 text-center">How to Play</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {howToPlaySchema.step.map((step, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground">
                      {step.position}
                    </span>
                    {step.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="relative aspect-video overflow-hidden rounded-lg">
                    <img
                      src={step.image}
                      alt={`Blossom Game How to Play Step ${step.position}: ${step.name}`}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <p className="text-muted-foreground">
                    {step.text}
                  </p>
                </CardContent>
              </Card>
            ))}
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

        <section className="mb-16" id="rating">
          {/* 添加结构化数据 */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(generateRatingSchema(rating, votes))
            }}
          />

          <div className="container mx-auto">
            <div className="bg-[#fff2cb] rounded-lg p-6 mb-6">
              <h2 className="text-3xl font-bold text-center">Rate Blossom Games</h2>
            </div>
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="flex items-center space-x-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => handleVote(star)}
                    disabled={hasVoted}
                    className={`w-12 h-12 flex items-center justify-center rounded-full transition-all ${
                      (hasVoted && star <= userRating) || (!hasVoted && star <= userRating)
                        ? 'bg-yellow-400 text-white'
                        : hasVoted
                        ? 'bg-gray-200 cursor-not-allowed'
                        : 'bg-gray-200 hover:bg-yellow-200 cursor-pointer'
                    }`}
                    aria-label={`Rate ${star} stars`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                ))}
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-500">{rating}</div>
                <div className="text-gray-500">
                  <span className="font-semibold">{votes.toLocaleString()}</span> votes
                </div>
                <button
                  onClick={resetRating}
                  className="mt-4 text-sm text-gray-500 hover:text-gray-700 underline"
                >
                  Reset Rating
                </button>
              </div>
            </div>
          </div>
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
              <h3 className="font-bold mb-4">Share</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Facebook className="h-5 w-5" />
                  <Link
                    href={`https://www.facebook.com/share/sharer.php?u=${encodeURIComponent('https://blossom-game.com')}&quote=${encodeURIComponent('Just discovered this amazing Blossom game! 🌸 A beautiful and addictive puzzle adventure that you can play for free in your browser. Try it now! #BlossomGame #FreeOnlineGames')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Facebook
                  </Link>
                </div>
                <div className="flex items-center space-x-2">
                  <Twitter className="h-5 w-5" />
                  <Link
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent('🌸 Playing Blossom - the most beautiful puzzle game online! No downloads needed, just pure entertainment. Join me at')}&url=${encodeURIComponent('https://blossom-game.com')}&hashtags=BlossomGame,PuzzleGames`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Twitter
                  </Link>
                </div>
                <div className="flex items-center space-x-2">
                  <Instagram className="h-5 w-5" />
                  <Link
                    href="https://www.instagram.com/create/story"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary"
                    onClick={() => {
                      navigator.clipboard.writeText('🌸 Found this gorgeous Blossom puzzle game - so relaxing and fun! Play for free at https://blossom-game.com #BlossomGame #OnlineGaming');
                    }}
                  >
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
