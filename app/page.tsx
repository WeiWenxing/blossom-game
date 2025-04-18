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
import { GameSection } from "@/components/game-section/GameSection";
import { OtherGames } from "@/components/other-games/OtherGames";
import { getOtherGames } from "./games/game-data";

interface Game {
  id: string;
  title: string;
  description: string;
  image: string;
  url: string;
}

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeGame, setActiveGame] = useState<string | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const game = getOtherGames().find(game =>
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
        <GameSection />

        <OtherGames 
          games={getOtherGames()} 
          onGameSelect={setActiveGame} 
        />

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

