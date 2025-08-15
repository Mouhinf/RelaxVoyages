import Image from 'next/image';
import { Award, Eye, Zap } from 'lucide-react';

const whyUs = [
  {
    icon: <Award className="h-8 w-8 text-accent" />,
    title: 'Professionnalisme',
    description: "Une équipe d'experts passionnés à votre service pour des conseils avisés et un suivi personnalisé.",
  },
  {
    icon: <Eye className="h-8 w-8 text-accent" />,
    title: 'Transparence',
    description: 'Des offres claires et détaillées, sans frais cachés. Votre confiance est notre priorité.',
  },
  {
    icon: <Zap className="h-8 w-8 text-accent" />,
    title: 'Rapidité',
    description: 'Nous nous engageons à traiter vos demandes dans les plus brefs délais pour une organisation sans stress.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">Pourquoi nous choisir ?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Chez SLAAC Voyages, nous mettons tout en œuvre pour vous garantir une expérience de voyage exceptionnelle.
            </p>
            <div className="mt-8 space-y-6">
              {whyUs.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="flex-shrink-0 bg-primary/10 text-primary rounded-lg p-3">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary">{item.title}</h3>
                    <p className="mt-1 text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-80 lg:h-full min-h-[400px] w-full rounded-lg overflow-hidden">
            <Image
              src="https://placehold.co/600x800.png"
              alt="Notre équipe ou agence"
              fill
              className="object-cover"
              data-ai-hint="travel agency team"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
