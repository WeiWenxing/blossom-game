"use client";

import Link from "next/link";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { theme } from "@/config/theme";
import { content } from "@/config/content";
import { layout } from "@/config/layout";
import { cn } from "@/lib/utils";

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  onSearch: (e: React.FormEvent) => void;
}

export function Header({ searchQuery, onSearchChange, onSearch }: HeaderProps) {
  if (!layout.header.isVisible) return null;

  const headerClassName = cn(
    layout.header.isVisible ? "" : "hidden",
    theme.header.layout.position,
    theme.header.layout.zIndex,
    theme.header.colors.border,
    theme.header.colors.background,
    theme.header.layout.blur,
  );

  const containerClassName = cn(
    theme.header.spacing.container,
    "flex",
    theme.header.layout.height,
    "items-center justify-between"
  );

  return (
    <header className={headerClassName}>
      <div className={containerClassName}>
        <nav className={cn("flex items-center", theme.header.spacing.nav)}>
          <Link 
            href="/" 
            className={cn(layout.header.logoSize, "font-bold", theme.header.colors.text)}
          >
            <h1>{content.header.title}</h1>
          </Link>
        </nav>
        {layout.header.searchEnabled && (
          <form 
            onSubmit={onSearch} 
            className={cn("flex", layout.header.maxWidth, "items-center", theme.header.spacing.search)}
          >
            <Input
              type="search"
              placeholder={content.header.search.placeholder}
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              aria-label={content.header.search.ariaLabel}
            />
            <Button 
              type="submit" 
              size="icon" 
              aria-label={content.header.search.buttonAriaLabel}
            >
              <Search className="h-4 w-4" />
            </Button>
          </form>
        )}
      </div>
    </header>
  );
}

