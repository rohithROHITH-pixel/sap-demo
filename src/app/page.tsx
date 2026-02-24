import Image from "next/image";
import Link from "next/link";
import { Target, Users, Briefcase } from "lucide-react";

import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ReviewCard from "@/components/review-card";

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero");

  const aims = [
    {
      icon: <Target className="h-10 w-10 text-primary" />,
      title: "Practical Skills",
      description: "Focus on hands-on, real-world SAP scenarios to build job-ready competence.",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Expert Mentorship",
      description: "Learn from industry veterans with years of experience in the SAP ecosystem.",
    },
    {
      icon: <Briefcase className="h-10 w-10 text-primary" />,
      title: "Career Advancement",
      description: "Equip yourself with in-demand skills to unlock new career opportunities.",
    },
  ];

  const testimonials = [
    {
      name: "Alex Johnson",
      feedback: "The hands-on approach was fantastic. I feel much more confident in my SAP abilities now. Highly recommended!",
      rating: 5,
    },
    {
      name: "Maria Garcia",
      feedback: "Instructors are incredibly knowledgeable and supportive. They made complex topics easy to understand.",
      rating: 5,
    },
    {
      name: "Sameer Khan",
      feedback: "A great investment in my career. The course content is relevant and up-to-date with industry standards.",
      rating: 4,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[85vh] flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover animate-bg-zoom"
              data-ai-hint={heroImage.imageHint}
              priority
            />
          )}
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center space-y-6">
            <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Connecting You to SAP Excellence
            </h1>
            <p className="max-w-3xl text-lg text-white/90 md:text-xl">
              Master the world&apos;s leading enterprise software with Nexus SAP. Our expert-led courses pave your way to a successful career in the SAP ecosystem.
            </p>
            <div className="flex flex-col gap-4 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="/about">Discover Our Mission</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Aims Section */}
      <section id="aims" className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <h2 className="text-3xl font-bold font-headline tracking-tight text-primary sm:text-4xl">Our Core Aims</h2>
            <p className="text-muted-foreground md:text-lg">
              We are dedicated to providing education that is practical, relevant, and career-focused.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {aims.map((aim) => (
              <Card key={aim.title} className="text-center transition-transform hover:scale-105 hover:shadow-lg">
                <CardHeader className="items-center">
                  {aim.icon}
                  <CardTitle className="font-headline text-2xl">{aim.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{aim.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="w-full py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <h2 className="text-3xl font-bold font-headline tracking-tight text-primary sm:text-4xl">What Our Students Say</h2>
            <p className="text-muted-foreground md:text-lg">
              Real stories from students who have advanced their careers with us.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, i) => (
              <ReviewCard
                key={i}
                name={testimonial.name}
                rating={testimonial.rating}
                feedback={testimonial.feedback}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
