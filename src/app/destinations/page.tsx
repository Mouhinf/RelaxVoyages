import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { ArrowRight, Info } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { QuoteRequestDialog } from '@/components/layout/quote-request-dialog';
import { Alert, AlertDescription } from '@/components/ui/alert';

const destinations = [
  {
    name: 'Paris, France',
    price: 'dès 450 000 XOF',
    image: 'https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?q=80&w=400&h=500&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    hint: 'paris france',
    tag: 'Europe',
  },
  {
    name: 'Dubaï, EAU',
    price: 'dès 600 000 XOF',
    image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=400&h=500&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    hint: 'dubai city',
    tag: 'Orient',
  },
  {
    name: 'New York, USA',
    price: 'dès 750 000 XOF',
    image: 'https://images.unsplash.com/photo-1546436836-07a91091f160?q=80&w=400&h=500&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    hint: 'new york usa',
    tag: 'Amérique',
  },
  {
    name: 'Casamance, Sénégal',
    price: 'dès 95 000 XOF',
    image: 'https://placehold.co/400x500.png',
    hint: 'senegal village',
    tag: 'Afrique',
  },
  {
    name: 'Kyoto, Japon',
    price: 'dès 980 000 XOF',
    image: 'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?q=80&w=400&h=500&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    hint: 'kyoto japan',
    tag: 'Asie',
  },
  {
    name: 'Istanbul, Turquie',
    price: 'dès 550 000 XOF',
    image: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?q=80&w=400&h=500&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    hint: 'istanbul turkey',
    tag: 'Europe/Asie',
  },
  {
    name: 'Le Caire, Égypte',
    price: 'dès 520 000 XOF',
    image: 'https://images.unsplash.com/photo-1572252195253-e50a7c133469?q=80&w=400&h=500&fit=crop',
    hint: 'cairo egypt',
    tag: 'Afrique',
  },
  {
    name: 'Rio de Janeiro, Brésil',
    price: 'dès 850 000 XOF',
    image: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=400&h=500&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    hint: 'rio de janeiro',
    tag: 'Amérique du Sud',
  },
  {
    name: 'Rome, Italie',
    price: 'dès 480 000 XOF',
    image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=400&h=500&fit=crop',
    hint: 'rome italy',
    tag: 'Europe',
  },
  {
    name: 'Bali, Indonésie',
    price: 'dès 920 000 XOF',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=400&h=500&fit=crop',
    hint: 'bali indonesia',
    tag: 'Asie',
  },
  {
    name: 'Londres, Royaume-Uni',
    price: 'dès 510 000 XOF',
    image: 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?q=80&w=400&h=500&fit=crop',
    hint: 'london uk',
    tag: 'Europe',
  },
  {
    name: 'Bangkok, Thaïlande',
    price: 'dès 890 000 XOF',
    image: 'https://images.unsplash.com/photo-1563492065599-3520f775ee09?q=80&w=400&h=500&fit=crop',
    hint: 'bangkok thailand',
    tag: 'Asie',
  },
  {
    name: 'Marrakech, Maroc',
    price: 'dès 280 000 XOF',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=400&h=500&fit=crop',
    hint: 'marrakech morocco',
    tag: 'Afrique',
  },
  {
    name: 'Sydney, Australie',
    price: 'dès 1 200 000 XOF',
    image: 'https://images.unsplash.com/photo-1506973035872-90c88ee45dba?q=80&w=400&h=500&fit=crop',
    hint: 'sydney australia',
    tag: 'Océanie',
  },
  {
    name: 'Amsterdam, Pays-Bas',
    price: 'dès 490 000 XOF',
    image: 'https://images.unsplash.com/photo-1584003564911-a7a321c84e1c?q=80&w=400&h=500&fit=crop',
    hint: 'amsterdam netherlands',
    tag: 'Europe',
  },
  {
    name: 'Lisbonne, Portugal',
    price: 'dès 460 000 XOF',
    image: 'https://images.unsplash.com/photo-1587899763738-3c358a98d363?q=80&w=400&h=500&fit=crop',
    hint: 'lisbon portugal',
    tag: 'Europe',
  },
];

export default function DestinationsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <section className="py-16 sm:py-24 bg-secondary">
          <div className="container mx-auto max-w-7xl px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary">Nos Destinations</h1>
            <p className="mt-4 text-lg text-secondary-foreground max-w-3xl mx-auto">
              Le monde est à votre portée. Explorez notre sélection de destinations et trouvez l'inspiration pour votre prochaine aventure.
            </p>
          </div>
        </section>

        <section id="destinations" className="py-16 sm:py-24 bg-background">
          <div className="container mx-auto max-w-7xl px-4">
            <Alert className="mb-8 bg-blue-50 border-blue-200 text-blue-800">
                <Info className="h-5 w-5 text-blue-600" />
                <AlertDescription>
                Les tarifs affichés sont des estimations de départ et peuvent varier en fonction de la saison, de la disponibilité et du moment de la réservation. Pour un devis précis, veuillez nous contacter.
                </AlertDescription>
            </Alert>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {destinations.map((dest) => (
                <Card key={dest.name} className="overflow-hidden group shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                  <div className="relative h-64">
                    <Image
                      src={dest.image}
                      alt={dest.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={dest.hint}
                    />
                    <Badge variant="default" className="absolute top-4 right-4 bg-accent text-accent-foreground">{dest.tag}</Badge>
                  </div>
                  <CardContent className="p-4 flex flex-col flex-grow">
                    <h3 className="text-lg font-semibold text-primary">{dest.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1 flex-grow">{dest.price}</p>
                    <QuoteRequestDialog>
                      <Button variant="link" className="p-0 mt-2 text-primary self-start">
                        Obtenir un devis <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </QuoteRequestDialog>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
