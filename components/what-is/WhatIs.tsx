import { content } from "@/config/content";
import { theme } from "@/config/theme";
import { layout } from "@/config/layout";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Gamepad as GamepadIcon, HelpCircle as HelpCircleIcon, Info as InfoIcon } from 'lucide-react';

const IconMap = {
  GamepadIcon,
  HelpCircleIcon,
  InfoIcon
};

export function WhatIs() {
  return (
    <section className={cn(theme.whatIs.spacing.section)} id={layout.whatIs.sectionId}>
      <div className={theme.whatIs.layout.container}>
        <div className={cn(theme.whatIs.colors.card, theme.whatIs.layout.card, theme.whatIs.spacing.card)}>
          <div className={layout.whatIs.grid.columns}>
            <div className={theme.whatIs.layout.logoWrapper}>
              <img
                src={content.whatIs.logo.src}
                alt={content.whatIs.logo.alt}
                className={cn(
                  layout.whatIs.logo.size.width,
                  layout.whatIs.logo.size.height,
                  theme.whatIs.layout.logo
                )}
              />
            </div>
            <div className={layout.whatIs.content.span}>
              <h2 className={cn(theme.whatIs.typography.title, theme.whatIs.spacing.title)}>
                {content.whatIs.title}
              </h2>
              <p className={cn(
                theme.whatIs.typography.description,
                theme.whatIs.colors.description,
                theme.whatIs.spacing.description
              )}>
                {content.whatIs.description}
              </p>
              <ul className={cn("flex", theme.whatIs.spacing.links)}>
                {content.whatIs.links.map((link) => {
                  const Icon = IconMap[link.icon as keyof typeof IconMap];
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={cn(
                          theme.whatIs.colors.link,
                          theme.whatIs.typography.link,
                          "flex items-center gap-2"
                        )}
                        onClick={(e) => {
                          e.preventDefault();
                          document.getElementById(link.href.substring(1))?.scrollIntoView({ behavior: 'smooth' });
                        }}
                      >
                        <Icon className="h-4 w-4" />
                        {link.text}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



