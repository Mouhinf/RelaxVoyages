import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'SLAAC Voyages - Agence de voyage à Dakar, Sénégal',
  description: "Votre agence de voyage à Dakar pour des billets d'avion, packages touristiques, assurance voyage et assistance visas. Voyagez avec sérénité.",
  keywords: "agence de voyage Dakar, billets d’avion Sénégal, SLAAC Voyage Dakar, packages touristiques Sénégal, Merveille Voyage Dakar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
