import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Header from '@/components/header';
import Footer from '@/components/footer';

const siteConfig = {
  name: "SAP Tech Hub",
  description: "Expert-led SAP software training to pave your way to a successful career in the SAP ecosystem.",
  url: "https://www.saptechhub.com",
};

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxidXNpbmVzcyUyMHRlY2hub2xvZ3l8ZW58MHx8fHwxNzIxOTMxOTcxfDA&ixlib=rb-4.1.0&q=80&w=1080',
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: ['https://images.unsplash.com/photo-1516116216624-53e697fedbea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxidXNpbmVzcyUyMHRlY2hub2xvZ3l8ZW58MHx8fHwxNzIxOTMxOTcxfDA&ixlib=rb-4.1.0&q=80&w=1080'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="font-body antialiased flex flex-col min-h-screen bg-background">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
