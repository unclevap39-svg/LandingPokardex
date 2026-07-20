import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface PhoneMockupProps {
  src?: string;
  alt: string;
  label: string;
  className?: string;
}

export function PhoneMockup({ src, alt, label, className }: PhoneMockupProps) {
  return (
    <div className={cn("flex flex-col items-center", className)}>
      <div className="relative w-[220px] rounded-[2.5rem] border-[6px] border-neutral-800 bg-neutral-900 p-1.5 shadow-[0_30px_80px_-20px_rgba(168,85,247,0.45)] sm:w-[260px]">
        <div className="absolute left-1/2 top-2.5 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-neutral-800" />
        <div className="relative aspect-[9/19.5] w-full overflow-hidden rounded-[2rem] bg-background-elevated">
          {src ? (
            <Image src={src} alt={alt} fill className="object-cover" />
          ) : (
            <div className="glow-radial flex h-full w-full flex-col items-center justify-center gap-3 text-center">
              <ImageIcon className="h-8 w-8 text-muted" />
              <p className="max-w-[70%] font-mono text-[11px] text-muted">
                Capture d&apos;écran à venir
              </p>
            </div>
          )}
        </div>
      </div>
      <p className="mt-4 font-display text-sm font-semibold text-foreground">{label}</p>
    </div>
  );
}
