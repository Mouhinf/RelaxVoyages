import Header from '@/components/layout/header';
import Hero from '@/components/sections/hero';
import HomeAbout from '@/components/sections/home-about';
import HomeServices from '@/components/sections/home-services';
import HomeDestinations from '@/components/sections/home-destinations';
import Contact from '@/components/sections/contact';
import { Button } from '@/components/ui/button';
import Footer from '@/components/layout/footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <HomeAbout />
        {/* Vehicle Brochure Section */}
        <section className="py-16 sm:py-24 bg-secondary/50">
          <div className="container mx-auto max-w-7xl px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Trouvez Votre Véhicule Idéal</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Que ce soit pour louer une voiture le temps d'un séjour ou pour faire l'acquisition d'un véhicule importé de l'étranger, découvrez notre gamme complète.
            </p>
            <Button asChild size="lg">
              <Link href="/vehicles">Découvrir nos Véhicules</Link>
            </Button>
          </div>
        </section>
        <HomeServices />
        <HomeDestinations />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
