import Image from "next/image";
import { Briefcase, GraduationCap, Users } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: 'About Us',
};

const whoCanJoin = [
  {
    icon: <GraduationCap className="h-10 w-10 text-primary" />,
    title: "Freshers",
    description: "Start your career with a strong foundation in SAP.",
  },
  {
    icon: <Briefcase className="h-10 w-10 text-primary" />,
    title: "Working Professionals",
    description: "Upskill and advance your career with specialized SAP knowledge.",
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "IT and Non-IT Graduates",
    description: "Transition into a high-demand tech career, regardless of your background.",
  },
];

export default function AboutPage() {
  const aboutImage = PlaceHolderImages.find((img) => img.id === "about");

  return (
    <>
      <section className="w-full py-16 md:py-24 lg:py-32 bg-secondary">
        <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-3xl font-bold font-headline tracking-tight text-primary sm:text-4xl md:text-5xl">About SAP Tech Hub</h1>
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

      {/* Who Can Join Us Section */}
      <section className="w-full py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <h2 className="text-3xl font-bold font-headline tracking-tight text-primary sm:text-4xl">Who Can Join Us</h2>
            <p className="text-muted-foreground md:text-lg">
              Our courses are designed for a diverse range of learners.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {whoCanJoin.map((value) => (
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
