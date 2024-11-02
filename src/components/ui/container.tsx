import { cn } from "@/lib/utils";

const containerSizes = {
  base: "max-w-[1240px]",
  contained: "max-w-[1040px]",
};

export default function Container({
  size = "base",
  children,
  className,
  ...props
}: {
  size?: keyof typeof containerSizes;
  className?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("mx-auto w-full px-4", containerSizes[size], className)}
      {...props}
    >
      {children}
    </div>
  );
}
