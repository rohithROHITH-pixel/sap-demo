import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  showTagline?: boolean;
};

export function Logo({ className, showTagline = false }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-8 w-8 text-primary"
      >
        <path d="M6 3v18" />
        <path d="M18 3v18" />
        <path d="M6 3l12 18" />
        <circle cx="6" cy="3" r="2" fill="currentColor" />
        <circle cx="6" cy="21" r="2" fill="currentColor" />
        <circle cx="18" cy="3" r="2" fill="currentColor" />
        <circle cx="18" cy="21" r="2" fill="currentColor" />
      </svg>
      <div className="flex flex-col">
        <span className="text-2xl font-bold font-headline text-primary leading-none">
          Nexus SAP
        </span>
        {showTagline && (
          <p className="text-xs text-muted-foreground mt-1">
            Connecting You to SAP Excellence
          </p>
        )}
      </div>
    </div>
  );
}
