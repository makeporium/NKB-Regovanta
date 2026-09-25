import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

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
  action,
  btnText,
}: {
  title: string;
  description?: string;
  action?: string;
  btnText?: string;
}) {
  const buttonLabel = action || btnText || "Book a Consultation";

  return (
    <section className="bg-gradient-to-b from-slate-50 to-blue-50/40 py-12 sm:py-16 border-t border-slate-200/80 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-navy via-[#0d2857] to-[#0a1e3f] p-8 sm:p-12 shadow-xl border border-blue-900/60 overflow-hidden text-white flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          {/* Subtle luminous background accents */}
          <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-[#dca85b]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-16 -top-16 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight">
              {title}
            </h2>
            {description && (
              <p className="mt-2.5 text-sm sm:text-base text-blue-100/90 font-medium leading-relaxed">
                {description}
              </p>
            )}
          </div>

          <div className="relative z-10 shrink-0">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-[#dca85b] hover:bg-[#c9954a] px-7 py-3.5 text-sm font-extrabold text-navy shadow-md hover:shadow-lg transition-all duration-300 group"
            >
              <span>{buttonLabel}</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
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