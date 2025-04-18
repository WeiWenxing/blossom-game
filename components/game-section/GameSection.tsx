import { content } from "@/config/content";
import { theme } from "@/config/theme";
import { cn } from "@/lib/utils";

export function GameSection() {
  return (
    <section className={cn(
      theme.gameSection.layout.section,
      theme.gameSection.spacing.section
    )}>
      <h2 className={cn(
        theme.gameSection.typography.title,
        theme.gameSection.spacing.title
      )}>
        {content.gameSection.title}
      </h2>
      <div className={cn(
        theme.gameSection.layout.container,
        theme.gameSection.colors.container,
        theme.gameSection.spacing.container
      )}>
        <iframe
          src={content.gameSection.game.url}
          className={theme.gameSection.layout.iframe}
          allow="fullscreen"
          title={content.gameSection.game.title}
          loading="lazy"
        />
      </div>
    </section>
  );
}