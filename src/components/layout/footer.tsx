'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { MessageCircle } from 'lucide-react';

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);


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
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-accent">SLAAC Voyages</h3>
            <p className="mt-2 text-sm text-primary-foreground/80">Voyager avec sérénité, partout dans le monde.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-accent">Liens Rapides</h3>
            <ul className="mt-2 space-y-1 text-sm">
              <li><Link href="#about" className="text-primary-foreground/80 hover:text-white">À propos</Link></li>
              <li><Link href="#services" className="text-primary-foreground/80 hover:text-white">Services</Link></li>
              <li><Link href="#destinations" className="text-primary-foreground/80 hover:text-white">Destinations</Link></li>
              <li><Link href="#contact" className="text-primary-foreground/80 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-accent">Newsletter</h3>
            <p className="mt-2 text-sm text-primary-foreground/80">Recevez nos offres exclusives.</p>
            <form onSubmit={handleNewsletterSubmit} className="mt-4 flex gap-2">
              <Input
                type="email"
                name="email"
                placeholder="Votre email"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-white placeholder:text-primary-foreground/50"
                required
              />
              <Button type="submit" variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90">S'inscrire</Button>
            </form>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-accent">Suivez-nous</h3>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-primary-foreground/80 hover:text-white"><FacebookIcon className="h-6 w-6" /></a>
              <a href="#" className="text-primary-foreground/80 hover:text-white"><InstagramIcon className="h-6 w-6" /></a>
              <a href="https://wa.me/221776245858" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-white"><MessageCircle className="h-6 w-6" /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-primary-foreground/20 pt-6 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} SLAAC Voyages. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
