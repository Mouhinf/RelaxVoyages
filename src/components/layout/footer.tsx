'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Facebook, Instagram, MessageCircle } from 'lucide-react';

export default function Footer() {
    const { toast } = useToast();

    const handleNewsletterSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const email = event.currentTarget.email.value;
        if (email) {
            toast({
                title: 'Merci pour votre inscription !',
                description: 'Vous recevrez bientôt nos meilleures offres.',
            });
            event.currentTarget.reset();
        }
    };

  return (
    <footer className="bg-secondary">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-secondary-foreground">
          <div>
            <h3 className="text-lg font-semibold text-primary">SLAAC Voyages</h3>
            <p className="mt-2 text-sm">Votre passeport pour des aventures inoubliables.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-primary">Navigation</h3>
            <ul className="mt-2 space-y-1 text-sm">
              <li><Link href="/about" className="hover:text-primary">À propos</Link></li>
              <li><Link href="/services" className="hover:text-primary">Services</Link></li>
              <li><Link href="/destinations" className="hover:text-primary">Destinations</Link></li>
              <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-primary">Newsletter</h3>
            <p className="mt-2 text-sm">Restez informé de nos offres exclusives.</p>
            <form onSubmit={handleNewsletterSubmit} className="mt-4 flex gap-2">
              <Input
                type="email"
                name="email"
                placeholder="Votre email"
                className="bg-background border-border"
                required
              />
              <Button type="submit" variant="default">S'inscrire</Button>
            </form>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-primary">Suivez-nous</h3>
            <div className="flex gap-4 mt-4">
              <a href="#" className="hover:text-primary"><Facebook className="h-6 w-6" /></a>
              <a href="#" className="hover:text-primary"><Instagram className="h-6 w-6" /></a>
              <a href="https://wa.me/221776245858" target="_blank" rel="noopener noreferrer" className="hover:text-primary"><MessageCircle className="h-6 w-6" /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} SLAAC Voyages. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
