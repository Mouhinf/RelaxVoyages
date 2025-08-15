'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { MapPin, Phone, Mail } from 'lucide-react';
import Image from 'next/image';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Le nom doit contenir au moins 2 caractères.' }),
  email: z.string().email({ message: 'Veuillez entrer une adresse email valide.' }),
  phone: z.string().optional(),
  message: z.string().min(10, { message: 'Le message doit contenir au moins 10 caractères.' }),
});

export default function Contact() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: 'Message envoyé !',
      description: 'Nous vous recontacterons dans les plus brefs délais.',
    });
    form.reset();
  }

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">Contactez-nous</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Une question, une demande de devis ? Notre équipe est à votre écoute.
            </p>
        </div>
        <div className="mt-12 grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                    <h3 className="text-lg font-semibold text-primary">Adresse</h3>
                    <p className="text-muted-foreground">Immeuble TRAMES, Centre Ville, Dakar, Sénégal</p>
                </div>
            </div>
            <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                    <h3 className="text-lg font-semibold text-primary">Téléphone</h3>
                    <p className="text-muted-foreground">+221 77 624 58 58</p>
                </div>
            </div>
            <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                    <h3 className="text-lg font-semibold text-primary">Email</h3>
                    <p className="text-muted-foreground">contact@slaacvoyages.com</p>
                </div>
            </div>
             <div className="relative h-64 w-full rounded-lg overflow-hidden mt-8">
                <Image src="https://images.unsplash.com/photo-1601134916222-2618e411b53e?q=80&w=600&h=400&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Carte de Dakar" fill className="object-cover" data-ai-hint="dakar map" />
            </div>
          </div>
          <div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nom complet</FormLabel>
                      <FormControl>
                        <Input placeholder="Votre nom" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Votre email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Téléphone (Optionnel)</FormLabel>
                      <FormControl>
                        <Input placeholder="Votre numéro de téléphone" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Votre message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Décrivez votre projet de voyage..." rows={5} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90" size="lg">Envoyer la demande</Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
