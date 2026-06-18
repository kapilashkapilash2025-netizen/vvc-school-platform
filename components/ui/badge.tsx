import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "secondary" | "destructive" | "outline" | "success" | "warning" | "live";
  className?: string;
}

const variants = {
  default: "bg-[#8B0000] text-white",
  secondary: "bg-[#FFD700] text-[#1a1a1a]",
  destructive: "bg-red-600 text-white",
  outline: "border border-[#8B0000] text-[#8B0000]",
  success: "bg-green-600 text-white",
  warning: "bg-amber-500 text-white",
  live: "bg-red-600 text-white animate-live",
};

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold",
        variants[variant],
        className
      )}
    >
      {variant === "live" && (
        <span className="h-1.5 w-1.5 rounded-full bg-white" />
      )}
      {children}
    </span>
  );
}
