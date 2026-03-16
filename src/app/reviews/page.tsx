import { type Metadata } from "next";
import Reviews from "@/components/reviews";

export const metadata: Metadata = {
  title: 'Reviews',
};

export default function ReviewsPage() {
  return (
    <>
        <section className="w-full py-16 md:py-24 lg:py-32 bg-secondary">
            <div className="container mx-auto px-4 md:px-6 text-center">
                <h1 className="text-3xl font-bold font-headline tracking-tight text-primary sm:text-4xl md:text-5xl">Student Testimonials</h1>
                <p className="mt-4 max-w-3xl mx-auto text-muted-foreground md:text-lg">
                    See what our students have to say about their experience with SAP Tech Hub.
                </p>
            </div>
        </section>

        <section id="reviews" className="w-full py-16 md:py-24">
          <Reviews />
        </section>
    </>
  );
}
