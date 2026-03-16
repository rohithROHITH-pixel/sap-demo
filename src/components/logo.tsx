import { cn } from "@/lib/utils";
import { GitFork } from "lucide-react";

type LogoProps = {
  className?: string;
  showTagline?: boolean;
};

export function Logo({ className, showTagline = false }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <GitFork className="h-8 w-8 text-primary" />
      <div className="flex flex-col">
        <span className="text-2xl font-bold font-headline text-primary leading-none">
          SAP Tech Hub
        </span>
        {showTagline && (
          <p className="text-xs text-muted-foreground mt-1">
            Excellence in Learning
          </p>
        )}
      </div>
    </div>
  );
}
