import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const destinations = [
  {
    name: 'Paris, France',
    price: 'dès 450 000 XOF',
    image: 'https://placehold.co/400x500.png',
    hint: 'paris eiffel tower',
  },
  {
    name: 'Dubaï, EAU',
    price: 'dès 600 000 XOF',
    image: 'https://placehold.co/400x500.png',
    hint: 'dubai skyline',
  },
  {
    name: 'New York, USA',
    price: 'dès 750 000 XOF',
    image: 'https://placehold.co/400x500.png',
    hint: 'new york city',
  },
  {
    name: 'Casamance, Sénégal',
    price: 'dès 95 000 XOF',
    image: 'https://placehold.co/400x500.png',
    hint: 'senegal beach',
  },
];

export default function Destinations() {
  return (
    <section id="destinations" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">Destinations Populaires</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Explorez nos destinations de rêve et laissez-vous inspirer pour votre prochain voyage.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((dest) => (
            <Card key={dest.name} className="overflow-hidden group">
              <div className="relative h-64">
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={dest.hint}
                />
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold text-primary">{dest.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{dest.price}</p>
                <Button variant="link" className="p-0 mt-2 text-primary">
                  Voir plus <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
