import {
  ShoppingCart,
  Landmark,
  Boxes,
  Factory,
  Code,
  Server,
  Users,
  ClipboardCheck,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
};

export default function ServicesPage() {
  const services = [
    {
      icon: <ShoppingCart className="h-10 w-10 text-primary" />,
      title: "SAP S/4HANA Sales (SD)",
      description: "Master the complete sales and distribution cycle, from order to cash.",
    },
    {
      icon: <Landmark className="h-10 w-10 text-primary" />,
      title: "SAP S/4HANA Finance (FICO)",
      description: "Gain expertise in financial accounting and management reporting.",
    },
    {
      icon: <Boxes className="h-10 w-10 text-primary" />,
      title: "SAP Materials Management (MM)",
      description: "Learn the core processes of procurement and inventory management.",
    },
    {
      icon: <Factory className="h-10 w-10 text-primary" />,
      title: "SAP Production Planning (PP)",
      description: "Understand the planning and execution of manufacturing processes.",
    },
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: "SAP ABAP Development",
      description: "Become a proficient SAP developer on both ECC and S/4HANA.",
    },
    {
      icon: <Server className="h-10 w-10 text-primary" />,
      title: "SAP Basis Administration",
      description: "Manage, maintain, and secure complex SAP system landscapes.",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "SAP SuccessFactors (HCM)",
      description: "Specialize in cloud-based human experience management and payroll.",
    },
    {
      icon: <ClipboardCheck className="h-10 w-10 text-primary" />,
      title: "SAP Testing",
      description: "Ensure the quality and reliability of SAP applications and processes.",
    },
  ];

  return (
    <>
      <section className="w-full py-16 md:py-24 lg:py-32 bg-secondary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-3xl font-bold font-headline tracking-tight text-primary sm:text-4xl md:text-5xl">
            Our Services
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-muted-foreground md:text-lg">
            Comprehensive training across key SAP modules to advance your career.
          </p>
        </div>
      </section>

      <section className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.map((service) => (
              <Card key={service.title} className="text-center transition-transform hover:scale-105 hover:shadow-lg">
                <CardHeader className="items-center">
                  {service.icon}
                  <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <h2 className="text-3xl font-bold font-headline tracking-tight text-primary sm:text-4xl">
              See Our Classes in Action
            </h2>
            <p className="text-muted-foreground md:text-lg">
              Get a glimpse of our teaching style and the quality of our training.
            </p>
          </div>
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="aspect-video overflow-hidden rounded-xl shadow-xl">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/J_LGll7KQNk"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
