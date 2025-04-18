import { content } from "@/config/content";
import { theme } from "@/config/theme";
import { cn } from "@/lib/utils";
import { HowToPlayCard } from "./HowToPlayCard";
import { howToPlaySchema } from "@/app/schema";

export function HowToPlay() {
  return (
    <section className={cn("mb-24", theme.howToPlay.spacing.section)} id="how-to-play">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToPlaySchema) }}
      />

      <h2 className={cn(
        "text-3xl font-bold text-center",
        theme.howToPlay.spacing.title,
        theme.howToPlay.colors.title
      )}>
        {content.howToPlay.title}
      </h2>

      <div className={theme.howToPlay.layout.container}>
        {content.howToPlay.steps.map((step) => (
          <HowToPlayCard
            key={step.position}
            {...step}
          />
        ))}
      </div>
    </section>
  );
}
