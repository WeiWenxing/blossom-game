import Link from "next/link";
import { Facebook, Twitter, LucideIcon } from "lucide-react";
import { theme } from "@/config/theme";
import { content } from "@/config/content";
import { layout } from "@/config/layout";
import { cn } from "@/lib/utils";

const SocialIcons: Record<string, LucideIcon> = {
  Facebook,
  Twitter,
};

export function Footer() {
  if (!layout.footer.isVisible) return null;

  const footerClassName = cn(
    theme.footer.colors.border,
    theme.footer.colors.background
  );

  const containerClassName = cn(
    theme.footer.layout.container,
    theme.footer.layout.padding
  );

  const gridClassName = cn(theme.footer.layout.grid);

  return (
    <footer className={footerClassName}>
      <div className={containerClassName}>
        <div className={gridClassName}>
          {/* About Section */}
          {layout.footer.sections.about && (
            <div>
              <h3 className={cn("font-semibold", theme.footer.spacing.sectionTitle)}>
                {content.footer.about.title}
              </h3>
              <p className={theme.footer.colors.mutedText}>
                {content.footer.about.description}
              </p>
            </div>
          )}

          {/* Quick Links Section */}
          {layout.footer.sections.quickLinks && (
            <div>
              <h3 className={cn("font-bold", theme.footer.spacing.sectionTitle)}>
                {content.footer.quickLinks.title}
              </h3>
              <ul className={theme.footer.spacing.linkList}>
                {content.footer.quickLinks.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        "text-sm",
                        theme.footer.colors.mutedText,
                        theme.footer.colors.hover
                      )}
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Social Links Section */}
          {layout.footer.sections.social && (
            <div>
              <h3 className={cn("font-bold", theme.footer.spacing.sectionTitle)}>
                {content.footer.social.title}
              </h3>
              <div className="space-y-4">
                {content.footer.social.links.map((link) => {
                  const Icon = SocialIcons[link.icon];
                  return (
                    <div key={link.href} className="flex items-center space-x-2">
                      <Icon className="h-5 w-5" />
                      <Link
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          "text-sm",
                          theme.footer.colors.mutedText,
                          theme.footer.colors.hover
                        )}
                      >
                        {link.icon}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Legal Links Section */}
          {layout.footer.sections.legal && (
            <div>
              <h3 className={cn("font-bold", theme.footer.spacing.sectionTitle)}>
                {content.footer.legal.title}
              </h3>
              <ul className={theme.footer.spacing.linkList}>
                {content.footer.legal.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        "text-sm",
                        theme.footer.colors.mutedText,
                        theme.footer.colors.hover
                      )}
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Copyright Section */}
        <div className="mt-8 pt-8 border-t">
          <div className={cn("text-center text-sm", theme.footer.colors.mutedText)}>
            © {new Date().getFullYear()} Blossom Games. All rights reserved.
          </div>
          <div className={cn("text-center text-xs mt-2", theme.footer.colors.mutedText)}>
            All games on this platform are free to play and do not require downloads.
          </div>
        </div>
      </div>
    </footer>
  );
}
