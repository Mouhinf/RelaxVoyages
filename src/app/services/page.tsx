import { Plane, Package, ShieldCheck, FileText, Map, Hotel, LifeBuoy, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: <Plane className="h-8 w-8 text-primary" />,
    title: 'Billetterie Aérienne',
    description: "Réservez vos vols vers toutes les destinations du monde aux meilleurs tarifs. Nous trouvons pour vous les options les plus rapides et économiques.",
  },
  {
    icon: <Package className="h-8 w-8 text-primary" />,
    title: 'Packages sur Mesure',
    description: "Des séjours conçus spécialement pour vous. Que vous voyagiez seul, en couple ou en groupe, nous créons le package parfait (vol + hôtel + activités).",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: 'Assurance Voyage',
    description: "Partez l'esprit tranquille. Nous vous proposons des assurances complètes pour vous couvrir contre tous les imprévus (santé, annulation, bagages).",
  },
  {
    icon: <FileText className="h-8 w-8 text-primary" />,
    title: 'Assistance Visas',
    description: "Simplifiez vos démarches administratives. Notre équipe d'experts vous accompagne pas à pas dans l'obtention de vos visas.",
  },
  {
    icon: <Hotel className="h-8 w-8 text-primary" />,
    title: 'Réservation d\'Hôtels',
    description: "Accédez à une sélection d'hébergements de qualité partout dans le monde, négociés aux meilleurs prix pour votre confort.",
  },
  {
    icon: <Map className="h-8 w-8 text-primary" />,
    title: 'Circuits et Excursions',
    description: "Explorez la culture locale avec nos circuits organisés. Découvrez des sites incontournables et des trésors cachés au Sénégal et à l'étranger.",
  },
  {
    icon: <Star className="h-8 w-8 text-primary" />,
    title: 'Voyages de Luxe',
    description: "Vivez une expérience exclusive avec nos offres de voyages de luxe. Jets privés, hébergements 5 étoiles, et services de conciergerie personnalisés.",
  },
  {
    icon: <LifeBuoy className="h-8 w-8 text-primary" />,
    title: 'Support 24/7',
    description: "Une assistance continue tout au long de votre voyage. Notre équipe est disponible 24/7 pour répondre à toutes vos questions et vous aider en cas de besoin.",
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <section className="py-16 sm:py-24 bg-secondary">
          <div className="container mx-auto max-w-7xl px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary">Nos Services</h1>
            <p className="mt-4 text-lg text-secondary-foreground max-w-3xl mx-auto">
              De la simple réservation de billet à l'organisation complète de votre séjour de rêve, découvrez tout ce que nous pouvons faire pour vous.
            </p>
          </div>
        </section>

        <section id="services" className="py-16 sm:py-24 bg-white">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <Card key={service.title} className="text-center flex flex-col items-center p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
                    <div className="bg-primary/10 rounded-full p-4 mb-4">
                      {service.icon}
                    </div>
                    <CardHeader className="p-0">
                      <CardTitle className="text-xl font-semibold text-primary">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 mt-2 flex-grow">
                      <p className="text-muted-foreground">{service.description}</p>
                    </CardContent>
                    <Link href="/contact" className="mt-4">
                        <Button variant="link">Demander un devis</Button>
                    </Link>
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
