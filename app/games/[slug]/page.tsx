"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft } from "lucide-react";

const games = {
  "love-tester": {
    title: "Love Tester Game",
    description: "Test the compatibility between you and your crush with our fun Love Tester game! This entertaining game uses a playful algorithm to determine your love match percentage.",
    url: "https://play.famobi.com/love-tester",
    howToPlay: [
      "Enter two names to test their compatibility",
      "Click the heart button to start the test",
      "Watch the love meter calculate your match",
      "Get your compatibility percentage and a fun message",
    ],
    features: [
      "Instant results",
      "Fun animations",
      "Share your results",
      "Try unlimited times",
    ],
    relatedGames: ["bubble-shooter", "candy-match", "mahjong"],
  },
  "bubble-shooter": {
    title: "Bubble Shooter Classic",
    description: "Play the addictive Bubble Shooter game online! Match three or more bubbles of the same color to clear them from the board. Test your aim and strategy skills in this classic arcade game.",
    url: "https://play.famobi.com/bubble-shooter-classic",
    howToPlay: [
      "Aim the bubble shooter using your mouse or touch",
      "Click or tap to shoot bubbles",
      "Match 3 or more bubbles of the same color",
      "Clear all bubbles to complete levels",
    ],
    features: [
      "Multiple levels",
      "Increasing difficulty",
      "Color matching gameplay",
      "Score tracking",
    ],
    relatedGames: ["love-tester", "candy-match", "solitaire"],
  },
  // Add other games similarly
};

export default function GamePage() {
  const params = useParams();
  const slug = params.slug as string;
  const game = games[slug as keyof typeof games];
  const [isPlaying, setIsPlaying] = useState(false);

  if (!game) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Game Not Found</h1>
        <Link href="/" className="text-primary hover:underline">
          Return to Homepage
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <Link
          href="/"
          className="inline-flex items-center text-primary hover:underline mb-8"
        >
          <ChevronLeft className="h-4 w-4 mr-2" />
          Back to Games
        </Link>

        <h1 className="text-4xl font-bold mb-4">{game.title}</h1>
        <p className="text-lg text-muted-foreground mb-8">{game.description}</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            {isPlaying ? (
              <div className="aspect-video w-full rounded-lg overflow-hidden shadow-xl">
                <iframe
                  src={game.url}
                  className="w-full h-full border-0"
                  allow="fullscreen"
                  title={`Play ${game.title} Online`}
                  loading="lazy"
                />
              </div>
            ) : (
              <div className="aspect-video w-full rounded-lg overflow-hidden shadow-xl bg-card flex items-center justify-center">
                <Button
                  size="lg"
                  onClick={() => setIsPlaying(true)}
                  className="text-xl"
                >
                  Play Now
                </Button>
              </div>
            )}
          </div>

          <div className="space-y-8">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">How to Play</h2>
                <ul className="list-disc list-inside space-y-2">
                  {game.howToPlay.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Features</h2>
                <ul className="list-disc list-inside space-y-2">
                  {game.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Related Games</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {game.relatedGames.map((relatedGame) => {
              const gameData = games[relatedGame as keyof typeof games];
              if (!gameData) return null;
              return (
                <Link
                  key={relatedGame}
                  href={`/games/${relatedGame}`}
                  className="block"
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">{gameData.title}</h3>
                      <p className="text-muted-foreground">
                        {gameData.description.slice(0, 100)}...
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}