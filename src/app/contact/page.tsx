import { Mail, MapPin, Phone } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: 'Contact Us',
};

export default function ContactPage() {
  const mapImage = PlaceHolderImages.find((img) => img.id === "map");

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
                        <p className="text-muted-foreground">123 Tech Park, Innovation Drive, Silicon Valley, CA 94043</p>
                      </div>
                    </div>
                     <Separator />
                    <div className="flex items-start gap-4">
                      <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-lg">Phone</h4>
                        <p className="text-muted-foreground">(123) 456-7890</p>
                      </div>
                    </div>
                     <Separator />
                    <div className="flex items-start gap-4">
                      <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-lg">Email</h4>
                        <p className="text-muted-foreground">contact@sapinstitutepro.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative rounded-xl overflow-hidden h-[400px] md:h-full shadow-xl">
                {mapImage && (
                  <Image
                    src={mapImage.imageUrl}
                    alt={mapImage.description}
                    fill
                    className="object-cover"
                    data-ai-hint={mapImage.imageHint}
                  />
                )}
              </div>
            </div>
          </div>
        </section>
    </>
  );
}
