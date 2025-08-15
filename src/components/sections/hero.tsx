import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative w-full h-[80vh] min-h-[500px] flex items-center justify-center text-white">
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="Bannière de voyage"
        fill
        className="object-cover z-0"
        data-ai-hint="travel airplane"
        priority
      />
      <div className="absolute inset-0 bg-black/50 z-10" />
      <div className="relative z-20 text-center p-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight drop-shadow-md font-headline">
          Voyager avec sérénité,
        </h1>
        <p className="mt-4 text-xl md:text-2xl max-w-3xl mx-auto drop-shadow-md">
          partout dans le monde.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="#contact">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 w-full sm:w-auto">
              Réserver maintenant
            </Button>
          </Link>
          <Link href="#contact">
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary w-full sm:w-auto">
              Demander un devis
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
