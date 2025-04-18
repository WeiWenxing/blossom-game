import Link from "next/link";
import { Facebook, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-muted">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div id="footer-about">
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <p className="text-muted-foreground">
              Your premier destination for free online gaming entertainment. 
              Play instantly, anywhere, anytime.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/games/love-tester" className="text-sm text-muted-foreground hover:text-primary">
                  Love Tester
                </Link>
              </li>
              <li>
                <Link href="/games/bubble-shooter" className="text-sm text-muted-foreground hover:text-primary">
                  Bubble Shooter
                </Link>
              </li>
              <li>
                <Link href="/games/candy-match" className="text-sm text-muted-foreground hover:text-primary">
                  Candy Match
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Share</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Facebook className="h-5 w-5" />
                <Link
                  href={`https://www.facebook.com/sharer.php?t=${encodeURIComponent('Blossom Game - Free Online Puzzle Adventure')}&u=${encodeURIComponent('https://blossom-game.com')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Facebook
                </Link>
              </div>
              <div className="flex items-center space-x-2">
                <Twitter className="h-5 w-5" />
                <Link
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent('🌸 Playing Blossom - the most beautiful puzzle game online! No downloads needed, just pure entertainment. Join me at')}&url=${encodeURIComponent('https://blossom-game.com')}&hashtags=BlossomGame,PuzzleGames`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Twitter
                </Link>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-sm text-muted-foreground hover:text-primary">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t">
          <div className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Blossom Games. All rights reserved.
          </div>
          <div className="text-center text-xs text-muted-foreground mt-2">
            All games on this platform are free to play and do not require downloads.
          </div>
        </div>
      </div>
    </footer>
  );
}