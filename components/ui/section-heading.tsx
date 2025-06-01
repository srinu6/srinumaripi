import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
}

export function SectionHeading({
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={cn("space-y-2", {
        "text-left": align === "left",
        "text-center": align === "center",
        "text-right": align === "right",
      })}
    >
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {subtitle && <p className="text-muted-foreground max-w-3xl mx-auto">{subtitle}</p>}
    </div>
  );
}