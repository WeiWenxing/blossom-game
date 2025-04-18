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
import { HowToPlay } from "@/components/how-to-play/HowToPlay";
import { WhatIs } from "@/components/what-is/WhatIs";
import { FAQ } from "@/components/faq/FAQ";

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

        <WhatIs />

        <HowToPlay />

        <FAQ />

        <section className="mb-16" id="rating">
          <Rating />
        </section>
      </main>

      <Footer />
    </div>
  );
}
