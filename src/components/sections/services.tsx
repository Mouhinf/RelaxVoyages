import { Plane, Package, ShieldCheck, FileText, Map } from 'lucide-react';

const services = [
  {
    icon: <Plane className="h-10 w-10 text-primary" />,
    title: 'Billets d’avion',
    description: 'Toutes destinations, prix compétitifs.',
  },
  {
    icon: <Package className="h-10 w-10 text-primary" />,
    title: 'Packages touristiques',
    description: 'Transport, hébergement et activités sur mesure.',
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: 'Assurance voyage',
    description: 'Couverture santé, annulation, et retard.',
  },
  {
    icon: <FileText className="h-10 w-10 text-primary" />,
    title: 'Assistance visas',
    description: 'Accompagnement dans les démarches administratives.',
  },
  {
    icon: <Map className="h-10 w-10 text-primary" />,
    title: 'Circuits découverte',
    description: 'Au Sénégal et à l’étranger, thématiques variées.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">Nos Services</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Nous offrons une gamme complète de services pour faire de votre voyage une expérience inoubliable.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {services.map((service) => (
            <div key={service.title} className="text-center flex flex-col items-center">
              <div className="bg-primary/10 rounded-full p-4 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-primary">{service.title}</h3>
              <p className="mt-2 text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
