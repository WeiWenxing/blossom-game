import { content } from "@/config/content";
import { theme } from "@/config/theme";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface GameCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  url: string;
  onPlay: (url: string) => void;
}

export function GameCard({ id, title, description, image, url, onPlay }: GameCardProps) {
  return (
    <Card key={id} className={theme.otherGames.layout.card}>
      <CardHeader className="p-0">
        <img
          src={image}
          alt={content.otherGames.cardLabels.imageAlt(title)}
          className={theme.otherGames.layout.image}
          loading="lazy"
        />
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className={theme.otherGames.spacing.cardTitle}>
          {title}
        </CardTitle>
        <CardDescription className={theme.otherGames.spacing.cardDescription}>
          {description}
        </CardDescription>
        <Button
          className="w-full"
          onClick={() => onPlay(url)}
          aria-label={`Play ${title}`}
        >
          {content.otherGames.cardLabels.playButton}
        </Button>
      </CardContent>
    </Card>
  );
}