import ReviewCard from "@/components/review-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const reviews = [
  {
    name: "Alex Johnson",
    rating: 5,
    feedback: "The hands-on labs were incredibly insightful. I feel much more confident in my SAP abilities now. Highly recommend!",
  },
  {
    name: "Priya Sharma",
    rating: 5,
    feedback: "A fantastic learning experience! The instructors are true experts and provide excellent mentorship. The course content is up-to-date and very relevant.",
  },
  {
    name: "David Chen",
    rating: 4,
    feedback: "Great structure and pace. The collaborative projects helped me understand how to work in a team on complex SAP tasks.",
  },
  {
    name: "Emily Rodriguez",
    rating: 5,
    feedback: "SAP Tech Hub helped me transition my career. The skills I learned were directly applicable to my new job. Thank you!",
  },
  {
    name: "Michael Brown",
    rating: 4,
    feedback: "Solid curriculum and knowledgeable instructors. I wish there were more advanced topics, but it's a great starting point for anyone new to SAP.",
  },
];

export default function Reviews() {
  return (
    <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center space-y-4">
            <h2 className="text-3xl font-bold font-headline tracking-tight text-primary sm:text-4xl">What Our Students Say</h2>
            <p className="text-muted-foreground md:text-lg">
            Real feedback from our talented graduates.
            </p>
        </div>
        <div className="mt-12">
            <Carousel
            opts={{
                align: "start",
                loop: true,
            }}
            className="w-full max-w-4xl mx-auto"
            >
            <CarouselContent>
                {reviews.map((review, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1 h-full">
                    <ReviewCard {...review} />
                    </div>
                </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
            </Carousel>
        </div>
    </div>
  );
}
