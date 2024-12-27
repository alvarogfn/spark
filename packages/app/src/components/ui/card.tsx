import type { ComponentPropsWithRef } from "react";

import { cn } from "@/lib/utils";

function Card({ className, ref, ...props }: ComponentPropsWithRef<"div">) {
  return (
    <section
      className={cn(
        "rounded-xl border bg-card text-card-foreground shadow",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
}

function CardHeader({
  className,
  ref,
  ...props
}: ComponentPropsWithRef<"header">) {
  return (
    <header
      className={cn("flex flex-col space-y-1.5 p-6", className)}
      ref={ref}
      {...props}
    />
  );
}

function CardTitle({ className, ref, ...props }: ComponentPropsWithRef<"div">) {
  return (
    <div
      className={cn("font-semibold leading-none tracking-tight", className)}
      ref={ref}
      {...props}
    />
  );
}

function CardDescription({
  className,
  ref,
  ...props
}: ComponentPropsWithRef<"div">) {
  return (
    <div
      className={cn("text-sm text-muted-foreground", className)}
      ref={ref}
      {...props}
    />
  );
}

function CardContent({
  className,
  ref,
  ...props
}: ComponentPropsWithRef<"div">) {
  return <div className={cn("p-6 pt-0", className)} ref={ref} {...props} />;
}

function CardFooter({
  className,
  ref,
  ...props
}: ComponentPropsWithRef<"div">) {
  return (
    <div
      className={cn("flex items-center p-6 pt-0", className)}
      ref={ref}
      {...props}
    />
  );
}

export {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
};
