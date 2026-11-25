import { site } from "@/site.config";

const extra = ["No strict diets", "Roti and rice stay", "Home or gym", "30 to 40 minute workouts", "Online across India"];

export function Marquee() {
  const items = [...site.proof.items.map((p) => `${p.name}: ${p.result}`), ...extra];
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-black/10 bg-banana py-4 text-ink" aria-label="Highlights">
      <div className="marquee" aria-hidden="true">
        {row.map((t, i) => (
          <span key={i} className="flex items-center whitespace-nowrap font-display text-xl font-bold sm:text-2xl">
            <span className="px-6">{t}</span>
            <span className="text-jungle">✦</span>
          </span>
        ))}
      </div>
      <ul className="sr-only">
        {items.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </div>
  );
}
