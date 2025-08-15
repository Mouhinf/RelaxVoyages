import Image from 'next/image';
import { Users, Globe, Heart, Building, Award, Target } from 'lucide-react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

const whyUs = [
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: 'Expertise Personnalisée',
    description: "Notre équipe de passionnés du voyage met son expertise à votre service pour créer des itinéraires sur mesure qui répondent parfaitement à vos envies.",
  },
  {
    icon: <Globe className="h-8 w-8 text-primary" />,
    title: 'Accès Global, Service Local',
    description: 'Nous combinons un réseau mondial de partenaires avec une connaissance approfondie du terrain pour vous offrir le meilleur, où que vous alliez.',
  },
  {
    icon: <Heart className="h-8 w-8 text-primary" />,
    title: 'Engagement et Sérénité',
    description: "Votre satisfaction et votre tranquillité d'esprit sont notre priorité. Nous nous occupons de tout, pour que vous n'ayez qu'à profiter.",
  },
];

const companyInfo = [
  {
    icon: <Building className="h-10 w-10 text-primary" />,
    title: 'Notre Histoire',
    description: "Fondée en 2015 à Dakar, SLAAC Voyages est née d'une passion pour la découverte et le partage. Nous avons commencé avec une petite équipe et une grande vision : rendre le voyage accessible et inoubliable pour tous.",
  },
  {
    icon: <Target className="h-10 w-10 text-primary" />,
    title: 'Notre Mission',
    description: "Notre mission est de transformer vos rêves d'évasion en réalité en concevant des expériences de voyage authentiques, enrichissantes et parfaitement organisées. Nous nous engageons à offrir un service client exceptionnel à chaque étape de votre parcours.",
  },
  {
    icon: <Award className="h-10 w-10 text-primary" />,
    title: 'Nos Valeurs',
    description: "Nous croyons en l'intégrité, la passion, et l'excellence. Chaque voyage que nous organisons est le reflet de notre engagement à offrir des services de qualité supérieure, tout en respectant les cultures locales et l'environnement.",
  },
]

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <section className="py-16 sm:py-24 bg-secondary">
          <div className="container mx-auto max-w-7xl px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary">Qui Sommes-Nous ?</h1>
            <p className="mt-4 text-lg text-secondary-foreground max-w-3xl mx-auto">
              Découvrez l'histoire, la mission et les valeurs qui font de SLAAC Voyages votre partenaire de confiance pour des aventures mémorables.
            </p>
          </div>
        </section>

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
                <h2 className="text-3xl md:text-4xl font-bold text-primary">Votre Partenaire pour des Voyages Inoubliables</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Chez SLAAC Voyages, nous croyons que chaque voyage est une histoire unique. Depuis notre base à Dakar, nous nous engageons à transformer vos rêves d'évasion en réalité, en concevant des expériences de voyage authentiques et mémorables.
                </p>
                <div className="mt-8 space-y-6">
                  {whyUs.map((item) => (
                    <div key={item.title} className="flex items-start gap-4">
                      <div className="flex-shrink-0 bg-primary/10 rounded-lg p-3">
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
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24 bg-secondary">
            <div className="container mx-auto max-w-7xl px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary">Plus sur SLAAC Voyages</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                    {companyInfo.map((item) => (
                        <div key={item.title} className="bg-background p-8 rounded-lg shadow-md flex flex-col items-center">
                            <div className="bg-primary/10 rounded-full p-4 mb-4">
                                {item.icon}
                            </div>
                            <h3 className="text-2xl font-semibold text-primary mb-2">{item.title}</h3>
                            <p className="text-muted-foreground">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
