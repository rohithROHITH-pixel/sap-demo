import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StarIcon } from "@/components/icons";

type ReviewCardProps = {
  name: string;
  rating: number;
  feedback: string;
};

export default function ReviewCard({ name, rating, feedback }: ReviewCardProps) {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{name}</CardTitle>
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <StarIcon
              key={i}
              filled={i < rating}
              className="text-yellow-400"
            />
          ))}
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-sm text-muted-foreground">{feedback}</p>
      </CardContent>
    </Card>
  );
}
