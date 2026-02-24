import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: 'Methodology',
};

export default function MethodologyPage() {
    const methodologyImage = PlaceHolderImages.find((img) => img.id === "methodology");

    const methodologyPoints = [
        "Client-driven training structure and pace.",
        "Industry-relevant topics tailored to learning goals.",
        "Hands-on practical sessions and real-time system access.",
        "Real-world scenarios and case studies for applied learning.",
        "Flexible one-on-one or group-based session formats.",
        "Strong emphasis on conceptual clarity and skill application.",
    ];

    const trainingStructure = [
        {
            step: "01",
            title: "Foundation Building",
            description: "We start with the core concepts of SAP, ensuring a strong theoretical base before moving to practical application."
        },
        {
            step: "02",
            title: "Hands-On Labs",
            description: "Students gain practical experience by working directly with SAP systems on guided exercises and projects."
        },
        {
            step: "03",
            title: "Collaborative Projects",
            description: "Team-based projects simulate real-world work environments, fostering collaboration and problem-solving skills."
        },
        {
            step: "04",
            title: "Expert Mentorship & Review",
            description: "Receive continuous feedback and guidance from our experienced instructors to refine your skills and understanding."
        }
    ];

  return (
    <>
        <section className="w-full py-16 md:py-24 lg:py-32 bg-secondary">
            <div className="container mx-auto px-4 md:px-6 text-center">
                <h1 className="text-3xl font-bold font-headline tracking-tight text-primary sm:text-4xl md:text-5xl">Our Teaching Methodology</h1>
                <p className="mt-4 max-w-3xl mx-auto text-muted-foreground md:text-lg">
                    A flexible, effective, and hands-on approach to mastering SAP.
                </p>
            </div>
        </section>

        {/* Teaching Methodology Section */}
        <section className="w-full py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold font-headline tracking-tight text-primary sm:text-4xl">Flexible and Effective Learning</h2>
                        <p className="text-muted-foreground md:text-lg">
                            Our teaching methodology is designed to be adaptable and learner-centric. We believe that the most effective learning happens when the training is tailored to the specific needs and goals of the student, whether an individual or a corporate team.
                        </p>
                        <ul className="grid gap-4">
                            {methodologyPoints.map((point, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative">
                        {methodologyImage && (
                        <Image
                            src={methodologyImage.imageUrl}
                            alt={methodologyImage.description}
                            width={600}
                            height={400}
                            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover shadow-xl"
                            data-ai-hint={methodologyImage.imageHint}
                        />
                        )}
                    </div>
                </div>
            </div>
        </section>

        {/* Training Structure Section */}
        <section className="w-full py-16 md:py-24 bg-secondary">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mx-auto max-w-3xl text-center space-y-4">
                    <h2 className="text-3xl font-bold font-headline tracking-tight text-primary sm:text-4xl">Our Training Structure</h2>
                    <p className="text-muted-foreground md:text-lg">
                        A structured path from foundational knowledge to expert-level proficiency.
                    </p>
                </div>
                <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                   {trainingStructure.map((item) => (
                       <Card key={item.step} className="border-t-4 border-primary transition-shadow hover:shadow-xl">
                           <CardHeader>
                               <span className="text-4xl font-bold font-headline text-primary/50">{item.step}</span>
                               <CardTitle className="font-headline text-2xl pt-2">{item.title}</CardTitle>
                           </CardHeader>
                           <CardContent>
                               <p className="text-muted-foreground">{item.description}</p>
                           </CardContent>
                       </Card>
                   ))}
                </div>
            </div>
        </section>
    </>
  );
}
