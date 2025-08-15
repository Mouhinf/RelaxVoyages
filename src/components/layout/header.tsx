'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Send } from 'lucide-react';

const navLinks = [
  { href: '#about', label: 'À propos' },
  { href: '#services', label: 'Services' },
  { href: '#destinations', label: 'Destinations' },
  { href: '#contact', label: 'Contact' },
];

const PlaneIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
    </svg>
);


export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
            <PlaneIcon className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg text-primary">SLAAC Voyages</span>
        </Link>

        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
           <a href="#contact">
            <Button className="hidden sm:flex" variant="default">
                Demander un Devis
                <Send className="ml-2 h-4 w-4" />
            </Button>
          </a>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Ouvrir le menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="grid gap-6 p-6">
                <Link href="/" className="flex items-center gap-2">
                   <PlaneIcon className="h-6 w-6 text-primary" />
                  <span className="font-bold text-lg text-primary">SLAAC Voyages</span>
                </Link>
                <nav className="grid gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-lg font-medium"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                 <a href="#contact">
                    <Button className="w-full" variant="default">
                        Demander un Devis
                        <Send className="ml-2 h-4 w-4" />
                    </Button>
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
