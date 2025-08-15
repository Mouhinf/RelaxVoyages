import Image from 'next/image';
import { Users, Globe, Heart, Building, Award, Target, Download } from 'lucide-react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Button } from '@/components/ui/button';

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
    description: "Fondée à Dakar, SLAAC Voyages est née d'une passion pour la découverte et le partage. Nous avons commencé avec une petite équipe et une grande vision : rendre le voyage accessible et inoubliable pour tous.",
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
                <div className="mt-4 text-lg text-muted-foreground space-y-4">
                  <p>
                    SLAAC VOYAGES est une agence de voyages et de tourisme, basée au Centre ville de Dakar à l'immeuble TRAMES au premier étage, spécialisée dans la vente des billets d'avion pour toutes les destinations, les préinscriptions, l'assistance visa, les réservations d'hôtel, les prises de rendez-vous et le tourisme.
                  </p>
                  <p>
                    Nous proposons une gamme complète de services pour répondre à vos besoins professionnels et touristiques. Notre objectif est de vous offrir le meilleur du tourisme à travers des excursions authentiques, des circuits de voyages à thèmes, des séjours linguistiques, des séjours religieux, les Transferts en VTC ou par la plage.
                  </p>
                  <p>
                    Que vous soyez à la recherche d'aventure, de culture, d'adrénaline, Slaac Voyages est votre partenaire incontournable pour la réalisation de vos projets. Grace à nos experts, nous mettons au service de nos clients un dispositif d'accompagnement personnalisé, un système de filtrage et des outils de dernière génération afin de leurs garantir les meilleures offres et les billets d'avion les moins chers.
                  </p>
                </div>
                 <div className="mt-6">
                  <a href="/brochure-slaac-voyages.pdf" download>
                    <Button size="lg" variant="default">
                      <Download className="mr-2 h-5 w-5" />
                      Télécharger notre brochure
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24 bg-secondary">
            <div className="container mx-auto max-w-7xl px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary">Pourquoi nous choisir ?</h2>
                </div>
                 <div className="grid md:grid-cols-3 gap-8">
                  {whyUs.map((item) => (
                    <div key={item.title} className="bg-background p-6 rounded-lg shadow-md flex items-start gap-4">
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
        </section>

        <section className="py-16 sm:py-24 bg-background">
            <div className="container mx-auto max-w-7xl px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary">Plus sur SLAAC Voyages</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                    {companyInfo.map((item) => (
                        <div key={item.title} className="bg-secondary/50 p-8 rounded-lg shadow-md flex flex-col items-center">
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
