import { cn } from "@/lib/utils";
import Image from "next/image";

interface LogoProps {
  className?: string;
  markClassName?: string;
  wordmarkClassName?: string;
  light?: boolean;
}

export default function Logo({
  className,
  markClassName,
  wordmarkClassName,
  light = false,
}: LogoProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className={cn("relative h-8 w-8 shrink-0", markClassName)}>
        <Image
          src="/images/logo.png"
          alt="Housen & Co. Logo"
          fill
          sizes="100px"
          className="object-contain"
          priority
        />
      </div>
      <span
        className={cn(
          "font-sans text-sm font-semibold tracking-[0.28em]",
          light ? "text-beige" : "text-charcoal/80",
          wordmarkClassName
        )}
      >
        HOUSEN <span className="font-bold">&amp;</span> CO.
      </span>
    </div>
  );
}
