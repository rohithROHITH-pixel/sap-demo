import Image from "next/image";
import { Gem, Heart, Lightbulb, Users } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: 'About Us',
};

export default function AboutPage() {
  const aboutImage = PlaceHolderImages.find((img) => img.id === "about");

  const coreValues = [
    {
      icon: <Gem className="h-10 w-10 text-primary" />,
      title: "Excellence",
      description: "We are committed to the highest standards of teaching and curriculum design.",
    },
    {
      icon: <Heart className="h-10 w-10 text-primary" />,
      title: "Integrity",
      description: "We operate with transparency, honesty, and a focus on student success.",
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-primary" />,
      title: "Innovation",
      description: "We continuously adapt our courses to reflect the latest industry trends.",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Community",
      description: "We foster a supportive and collaborative learning environment for all students.",
    },
  ];

  return (
    <>
      <section className="w-full py-16 md:py-24 lg:py-32 bg-secondary">
        <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-3xl font-bold font-headline tracking-tight text-primary sm:text-4xl md:text-5xl">About SAP Institute Pro</h1>
            <p className="mt-4 max-w-3xl mx-auto text-muted-foreground md:text-lg">
                Your partner in professional SAP development and career growth.
            </p>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold font-headline tracking-tight text-primary sm:text-4xl">Our Mission & Vision</h2>
              <div className="space-y-4 text-muted-foreground text-lg">
                <p>
                  <strong className="text-foreground">Our mission</strong> is to bridge the gap between academic knowledge and industry demands by providing accessible, high-quality SAP training. We empower students and professionals to achieve their career goals by equipping them with practical, job-ready skills.
                </p>
                <p>
                  <strong className="text-foreground">Our vision</strong> is to be a leading global platform for SAP education, recognized for our commitment to excellence, innovation, and student success. We aspire to build a community of skilled SAP experts who drive digital transformation worldwide.
                </p>
              </div>
            </div>
             <div className="relative">
              {aboutImage && (
                <Image
                  src={aboutImage.imageUrl}
                  alt={aboutImage.description}
                  width={600}
                  height={400}
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover shadow-xl"
                  data-ai-hint={aboutImage.imageHint}
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="w-full py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <h2 className="text-3xl font-bold font-headline tracking-tight text-primary sm:text-4xl">Our Core Values</h2>
            <p className="text-muted-foreground md:text-lg">
              The principles that guide our work and define our culture.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((value) => (
              <Card key={value.title} className="text-center transition-transform hover:scale-105 hover:shadow-lg">
                <CardHeader className="items-center">
                  {value.icon}
                  <CardTitle className="font-headline text-2xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
