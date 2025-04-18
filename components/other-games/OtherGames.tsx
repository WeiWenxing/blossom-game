import { content } from "@/config/content";
import { theme } from "@/config/theme";
import { GameCard } from "./GameCard";
import { cn } from "@/lib/utils";

interface Game {
  id: string;
  title: string;
  description: string;
  image: string;
  url: string;
}

interface OtherGamesProps {
  games: Game[];
  onGameSelect: (url: string) => void;
}

export function OtherGames({ games, onGameSelect }: OtherGamesProps) {
  if (games.length === 0) return null;

  return (
    <section id="other-games" className={theme.otherGames.layout.section}>
      <h2 className={cn(
        theme.otherGames.typography.title,
        theme.otherGames.spacing.title
      )}>
        {content.otherGames.title}
      </h2>
      <div className={theme.otherGames.layout.grid}>
        {games.map((game) => (
          <GameCard
            key={game.id}
            {...game}
            onPlay={onGameSelect}
          />
        ))}
      </div>
    </section>
  );
}