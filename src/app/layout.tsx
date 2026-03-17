import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Header from '@/components/header';
import Footer from '@/components/footer';

export const metadata: Metadata = {
  title: {
    default: "SAP Tech Hub",
    template: "%s | SAP Tech Hub",
  },
  description: 'SAP Tech Hub - SAP Software Training Institute',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
      </head>
      <body className="font-body antialiased flex flex-col min-h-screen bg-background">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
