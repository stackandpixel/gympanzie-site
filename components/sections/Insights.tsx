import { ArrowUpRight } from "lucide-react";
import { site } from "@/site.config";

export function Insights() {
  return (
    <section id="guides" className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
      <h2 className="max-w-2xl text-4xl font-extrabold sm:text-6xl">Free guides on belly fat, food and sleep</h2>
      <ul className="mt-10 grid gap-4 md:grid-cols-2">
        {site.insights.map((p) => (
          <li key={p.href}>
            <a
              href={p.href}
              className="lift group flex h-full items-start justify-between gap-4 rounded-2xl border-2 border-line bg-paper p-5 font-display text-xl font-bold hover:border-jungle"
            >
              {p.title}
              <ArrowUpRight className="mt-1 shrink-0 text-jungle transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
