import Image from "next/image";
import { CheckCircle2, Mail, MapPin, Phone } from "lucide-react";

import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ContactForm from "@/components/contact-form";
import Map from "@/components/map";
import ReviewCard from "@/components/review-card";

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero");
  const methodologyImage = PlaceHolderImages.find((img) => img.id === "methodology");

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="relative w-full py-20 md:py-32 lg:py-40 bg-secondary">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 md:gap-16">
              <div className="flex flex-col justify-center space-y-6">
                <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl">
                  Empowering Students with Practical SAP Knowledge
                </h1>
                <p className="max-w-xl text-lg text-muted-foreground md:text-xl">
                  We provide industry-focused SAP training designed to help students gain real-world skills and build successful careers. Our approach combines strong conceptual foundations with hands-on practice to ensure students are confident, capable, and job-ready.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    <a href="#contact">Get In Touch</a>
                  </Button>
                </div>
              </div>
              <div className="relative">
                {heroImage && (
                  <Image
                    src={heroImage.imageUrl}
                    alt={heroImage.description}
                    width={1200}
                    height={800}
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                    data-ai-hint={heroImage.imageHint}
                  />
                )}
              </div>
            </div>
          </div>
        </section>
        
        {/* About Us Section */}
        <section id="about" className="w-full py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center space-y-4">
              <h2 className="text-3xl font-bold font-headline tracking-tight text-primary sm:text-4xl">About Us</h2>
              <p className="text-muted-foreground md:text-lg">
                We are a professional SAP training platform committed to delivering high-quality education to students and working professionals. Our focus is on practical learning, real-time system exposure, and clear conceptual understanding. By following a structured yet flexible approach, we bridge the gap between academic learning and industry requirements.
              </p>
            </div>
          </div>
        </section>

        {/* Our Aim Section */}
        <section id="aim" className="w-full py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center space-y-4">
              <h2 className="text-3xl font-bold font-headline tracking-tight text-primary sm:text-4xl">Our Aim</h2>
              <p className="text-muted-foreground md:text-lg">
                Our aim is to empower students with in-demand SAP skills and prepare them for real corporate environments. We strive to build strong technical foundations, enhance practical knowledge, and support learners in achieving their career goals with confidence and competence.
              </p>
            </div>
          </div>
        </section>
        
        {/* Teaching Methodology Section */}
        <section id="methodology" className="w-full py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold font-headline tracking-tight text-primary sm:text-4xl">Teaching Methodology</h2>
                <p className="text-muted-foreground md:text-lg">
                  Our teaching methodology is flexible and client-driven, allowing the learning process to be shaped according to individual or organizational requirements. This adaptable approach ensures effective learning, better engagement, and practical SAP expertise.
                </p>
                <ul className="grid gap-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                    <span>Training structure and pace are decided based on client preferences.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                    <span>Topics are covered as per industry relevance and learning goals.</span>
                  </li>
                   <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                    <span>Practical sessions are included based on client requirements.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                    <span>Real-time scenarios and use cases are used for better understanding.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                    <span>One-on-one or group-based sessions are conducted as requested.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                    <span>Emphasis is placed on clarity, application, and skill development.</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                {methodologyImage && (
                  <Image
                    src={methodologyImage.imageUrl}
                    alt={methodologyImage.description}
                    width={600}
                    height={400}
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                    data-ai-hint={methodologyImage.imageHint}
                  />
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section id="reviews" className="w-full py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center space-y-4">
              <h2 className="text-3xl font-bold font-headline tracking-tight text-primary sm:text-4xl">Reviews & Feedback</h2>
              <p className="text-muted-foreground text-lg">See what our students are saying about us.</p>
              <p className="text-lg font-medium text-muted-foreground/80 pt-4">Under Development</p>
            </div>
            <div className="relative mt-12">
              <div className="absolute inset-0 flex items-center justify-center -z-10" aria-hidden="true">
                 <div className="w-full h-full bg-white/50 dark:bg-black/50 backdrop-blur-sm rounded-2xl"></div>
              </div>
              <div className="grid grid-cols-1 gap-6 pt-8 sm:grid-cols-2 lg:grid-cols-3 filter blur-sm pointer-events-none opacity-50">
                {[...Array(3)].map((_, i) => (
                  <ReviewCard
                    key={i}
                    name="Student Name"
                    rating={5}
                    feedback="This is a placeholder review. The review system is currently under development and will be activated soon."
                  />
                ))}
              </div>
              <div className="mt-12 text-center">
                <Button variant="outline" disabled>Load More Reviews</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold font-headline tracking-tight text-primary sm:text-4xl">Contact Us</h2>
              <p className="text-muted-foreground md:text-lg">Get in touch with us to begin your SAP learning journey.</p>
            </div>
            <div className="grid gap-12 md:grid-cols-2">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold font-headline text-primary">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <MapPin className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold">Address</h4>
                        <p className="text-muted-foreground">123 Corporate Ave, Suite 400, Business City, 54321</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Phone className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold">Phone</h4>
                        <p className="text-muted-foreground">(123) 456-7890</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Mail className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold">Email</h4>
                        <p className="text-muted-foreground">contact@sappathfinders.com</p>
                      </div>
                    </div>
                  </div>
                </div>
                <Separator />
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold font-headline text-primary">Send us a Message</h3>
                  <ContactForm />
                </div>
              </div>
              <div className="rounded-xl overflow-hidden">
                <Map />
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
