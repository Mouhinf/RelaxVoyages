import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function HomeAbout() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-80 lg:h-full min-h-[400px] w-full rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1522199710521-72d69614c702?q=80&w=600&h=800&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Notre équipe ou agence"
              fill
              className="object-cover"
              data-ai-hint="happy travelers"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">Votre Partenaire de Confiance pour des Voyages Inoubliables</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Chez SLAAC Voyages, nous croyons que chaque voyage est une histoire unique. Depuis notre base à Dakar, nous nous engageons à transformer vos rêves d'évasion en réalité, en concevant des expériences de voyage authentiques et mémorables.
            </p>
            <p className="mt-4 text-muted-foreground">
              Notre équipe d'experts passionnés est à votre écoute pour créer des itinéraires sur mesure qui correspondent à vos envies et à votre budget.
            </p>
            <Link href="/about">
              <Button variant="default" size="lg" className="mt-6">
                En savoir plus sur nous <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
