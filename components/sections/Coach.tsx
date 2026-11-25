import { Check } from "lucide-react";
import { site } from "@/site.config";
import { Reveal } from "@/components/Reveal";

const creds = [
  "Internationally certified Fitness Trainer",
  "Nutrition Coach",
  "Strength and Conditioning Coach",
  "Glute Specialist",
  "Corrective Exercise Specialist",
];

export function Coach() {
  return (
    <section id="coach" className="mx-auto max-w-6xl px-5 py-24 sm:py-32">
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <h2 className="text-4xl font-extrabold sm:text-6xl">Meet your coach, {site.business.founder}</h2>
          <p className="mt-6 max-w-xl text-lg text-muted sm:text-xl">
            {site.business.founder} holds a B.Tech in Biotechnology and an M.Tech in Environmental Engineering, and
            spent five years in the corporate world before going full-time in fitness. He knows first-hand how little
            time a working professional really has, and builds every plan around it.
          </p>
        </Reveal>
        <Reveal delay={150}>
          <div className="grain relative overflow-hidden rounded-[2rem] bg-jungle p-8 text-white on-dark sm:p-10">
            <div aria-hidden="true" className="orb orb-banana -right-20 -top-20 size-72 !opacity-25" />
            <p className="relative font-display text-sm font-bold uppercase tracking-widest text-banana">Credentials</p>
            <ul className="relative mt-6 space-y-4">
              {creds.map((c) => (
                <li key={c} className="flex items-center gap-4 text-lg font-medium">
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-banana text-ink">
                    <Check size={16} aria-hidden="true" />
                  </span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
