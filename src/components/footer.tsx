import Link from 'next/link';
import { Logo } from './logo';
import { Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';

const socialLinks = [
  { name: 'Twitter', href: '#', icon: <Twitter className="h-6 w-6" /> },
  { name: 'LinkedIn', href: '#', icon: <Linkedin className="h-6 w-6" /> },
  { name: 'Facebook', href: '#', icon: <Facebook className="h-6 w-6" /> },
  { name: 'Instagram', href: 'https://www.instagram.com/saptechhub252026', icon: <Instagram className="h-6 w-6" /> },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <Link href="/">
                <Logo className='[&_span]:text-primary-foreground [&_svg]:text-primary-foreground' />
            </Link>
          <p className="text-sm text-primary-foreground/80">
            &copy; {new Date().getFullYear()} SAP Tech Hub. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {link.icon}
                <span className="sr-only">{link.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
