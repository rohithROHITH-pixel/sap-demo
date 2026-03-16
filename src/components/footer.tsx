import Link from 'next/link';
import { Logo } from './logo';

const socialLinks = [
  { name: 'Twitter', href: '#' },
  { name: 'LinkedIn', href: '#' },
  { name: 'Facebook', href: '#' },
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
                className="text-sm font-medium text-primary-foreground/80 transition-colors hover:text-primary-foreground"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
