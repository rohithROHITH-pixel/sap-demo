import { Mail, MapPin, Phone, Instagram } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: 'Contact Us',
};

export default function ContactPage() {
  return (
    <>
        <section className="w-full py-16 md:py-24 lg:py-32 bg-secondary">
            <div className="container mx-auto px-4 md:px-6 text-center">
                <h1 className="text-3xl font-bold font-headline tracking-tight text-primary sm:text-4xl md:text-5xl">Get In Touch</h1>
                <p className="mt-4 max-w-3xl mx-auto text-muted-foreground md:text-lg">
                    We're here to help you on your SAP journey. Reach out to us with any questions.
                </p>
            </div>
        </section>

        <section id="contact" className="w-full py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold font-headline text-primary">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-lg">Address</h4>
                        <p className="text-muted-foreground">890 Broadway, New York, NY 10003, USA</p>
                      </div>
                    </div>
                     <Separator />
                    <div className="flex items-start gap-4">
                      <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-lg">Phone</h4>
                        <a href="tel:+917019893365" className="text-muted-foreground hover:underline">
                            +91 7019893365
                        </a>
                      </div>
                    </div>
                     <Separator />
                    <div className="flex items-start gap-4">
                      <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-lg">Email</h4>
                        <a href="mailto:saptechhub25@gmail.com" className="text-muted-foreground hover:underline">
                            saptechhub25@gmail.com
                        </a>
                      </div>
                    </div>
                    <Separator />
                    <div className="flex items-start gap-4">
                      <Instagram className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-lg">Instagram</h4>
                        <a
                          href="https://www.instagram.com/saptechhub252026"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:underline"
                        >
                          @saptechhub252026
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative rounded-xl overflow-hidden h-[400px] md:h-full shadow-xl">
                 <iframe
                    title="Google Map of SAP Tech Hub"
                    src="https://maps.google.com/maps?q=890%20Broadway,%20New%20York,%20NY%2010003&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    className="absolute inset-0 w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
    </>
  );
}
