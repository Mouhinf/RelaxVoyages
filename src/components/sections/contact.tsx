'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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
      description: 'Merci de nous avoir contactés. Nous reviendrons vers vous rapidement.',
    });
    form.reset();
  }

  return (
    <section id="contact" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">Prêt à Partir ? Contactez-nous !</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Racontez-nous votre projet de voyage, demandez un devis ou posez-nous simplement une question. Notre équipe est là pour vous aider à planifier votre prochaine aventure.
            </p>
        </div>
        <div className="mt-12 grid lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-full"><MapPin className="h-6 w-6 text-primary" /></div>
                <div>
                    <h3 className="text-lg font-semibold text-primary">Notre Bureau</h3>
                    <p className="text-muted-foreground">Immeuble TRAMES, Centre Ville, Dakar, Sénégal</p>
                </div>
            </div>
            <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-full"><Phone className="h-6 w-6 text-primary" /></div>
                <div>
                    <h3 className="text-lg font-semibold text-primary">Appelez-nous</h3>
                    <p className="text-muted-foreground">+221 77 624 58 58</p>
                </div>
            </div>
            <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-full"><Mail className="h-6 w-6 text-primary" /></div>
                <div>
                    <h3 className="text-lg font-semibold text-primary">Écrivez-nous</h3>
                    <p className="text-muted-foreground">contact@slaacvoyages.com</p>
                </div>
            </div>
             <div className="pt-6">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.399587848358!2d-17.44976788515869!3d14.68962298974578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec1725a33500001%3A0x51c91c6e1f4e1b7d!2sDakar!5e0!3m2!1sfr!2ssn!4v1620901591837!5m2!1sfr!2ssn" 
                    width="100%" 
                    height="300" 
                    style={{border:0}} 
                    allowFullScreen={true} 
                    loading="lazy"
                    className="rounded-lg shadow-md"
                ></iframe>
            </div>
          </div>
          <Card className="w-full">
            <CardHeader>
                <CardTitle>Envoyez-nous un message</CardTitle>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nom complet</FormLabel>
                          <FormControl>
                            <Input placeholder="Votre nom et prénom" {...field} />
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
                            <Input placeholder="Votre adresse email" {...field} />
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
                            <Textarea placeholder="Bonjour, je souhaiterais obtenir des informations sur..." rows={5} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full" size="lg">
                        Envoyer ma demande <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
