import { Check } from "lucide-react";
import { site } from "@/site.config";

const creds = [
  "Internationally certified Fitness Trainer",
  "Nutrition Coach",
  "Strength and Conditioning Coach",
  "Glute Specialist",
  "Corrective Exercise Specialist",
];

export function Coach() {
  return (
    <section id="coach" className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <h2 className="text-4xl font-extrabold sm:text-5xl">Meet your coach, {site.business.founder}</h2>
          <p className="mt-5 text-lg text-muted">
            {site.business.founder} holds a B.Tech in Biotechnology and an M.Tech in Environmental Engineering, and spent five years in the
            corporate world before going full-time in fitness. He knows first-hand how little time a working professional
            really has, and builds every plan around it.
          </p>
          <ul className="mt-6 space-y-2">
            {creds.map((c) => (
              <li key={c} className="flex items-center gap-3 font-medium">
                <span className="grid size-6 place-items-center rounded-full bg-banana"><Check size={14} aria-hidden="true" /></span>
                {c}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl bg-jungle p-8 text-white on-dark">
          <h3 className="text-2xl font-bold">A whole team behind your 12 weeks</h3>
          <p className="mt-3 text-white/80">You are never left to figure it out alone. The Gympanzie team includes:</p>
          <ul className="mt-5 space-y-3">
            {site.team.map((t) => (
              <li key={t} className="flex gap-3 border-b border-white/15 pb-3 last:border-0">
                <span className="mt-2 size-2 shrink-0 rounded-full bg-banana" aria-hidden="true" />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
