import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <svg
        width="28"
        height="36"
        viewBox="0 0 28 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-auto text-primary md:h-9"
        aria-hidden="true"
      >
        <path
          d="M4.53516 33.2686L20.0702 9.22754"
          stroke="currentColor"
          strokeWidth="2.5"
        />
        <circle cx="23.5" cy="5.5" r="3.5" fill="#94a3b8" />
        <circle cx="4.5" cy="31.5" r="3.5" fill="currentColor" />
        <circle cx="9.5" cy="24.5" r="3.5" fill="currentColor" />
        <circle cx="14.5" cy="17.5" r="3.5" fill="currentColor" />
        <circle cx="19.5" cy="10.5" r="3.5" fill="currentColor" />
      </svg>
      
      <div className="flex flex-col justify-center">
        <span className="text-2xl font-bold font-headline text-primary leading-none md:text-3xl">
            SAP
        </span>
        <svg height="4" className="my-0.5 text-primary w-[20px] md:w-[24px]" aria-hidden="true">
            <line x1="0" y1="1" x2="100%" y2="1" stroke="currentColor" strokeWidth="2" />
        </svg>
        <div className="flex items-baseline gap-x-2">
            <span className="text-xs font-bold font-headline text-foreground leading-none tracking-wider md:text-sm">
                TECH HUB
            </span>
            <span className="text-[10px] font-semibold tracking-wide text-muted-foreground whitespace-nowrap md:text-xs">
                SAP Software Training Institute
            </span>
        </div>
      </div>
    </div>
  );
}
