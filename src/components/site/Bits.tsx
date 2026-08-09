import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-20">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-navy sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              {description}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
      )}
      <h2 className="mt-3 text-2xl font-extrabold text-navy sm:text-3xl">{title}</h2>
      {description && (
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
      )}
    </div>
  );
}

export function CTABand({
  title,
  description,
  action = "Book a Consultation",
}: {
  title: string;
  description?: string;
  action?: string;
}) {
  return (
    <section className="bg-navy text-navy-foreground">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-12 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <h2 className="text-xl font-bold sm:text-2xl">{title}</h2>
          {description && (
            <p className="mt-2 text-sm text-navy-foreground/75">{description}</p>
          )}
        </div>
        <Link
          to="/contact"
          className="inline-flex w-fit items-center rounded-sm bg-navy-foreground px-6 py-3 text-sm font-semibold text-navy transition-opacity hover:opacity-90"
        >
          {action}
        </Link>
      </div>
    </section>
  );
}

export function StatRow({ items }: { items: { value: string; label: string }[] }) {
  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg bg-border lg:grid-cols-4">
      {items.map((s) => (
        <div key={s.label} className="bg-card px-6 py-8 text-center">
          <div className="font-display text-3xl font-extrabold text-navy">{s.value}</div>
          <div className="mt-1.5 text-xs font-medium uppercase tracking-wide text-muted-foreground">
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((i) => (
        <li key={i} className="flex gap-3 text-sm text-foreground/85">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
          {i}
        </li>
      ))}
    </ul>
  );
}