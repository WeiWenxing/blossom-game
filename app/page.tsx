"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
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
import { Rating } from "@/components/rating/Rating";

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
      <Header
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onSearch={handleSearch}
      />

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
          <Rating />
        </section>
      </main>

      <Footer />
    </div>
  );
}

