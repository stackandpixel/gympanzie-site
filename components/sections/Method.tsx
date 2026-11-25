import { Dumbbell, MoonStar, Utensils } from "lucide-react";
import { site } from "@/site.config";

const pillars = [
  {
    Icon: Utensils,
    title: "Eat the food you already love",
    body: "An Indian meal plan built around your plate. Lose belly fat without giving up roti or rice, and without a diet that falls apart by week three.",
  },
  {
    Icon: Dumbbell,
    title: "Train smart, not endlessly",
    body: "Short, focused sessions with dumbbells and bodyweight, 30 to 40 minutes, 4 to 5 days a week. Do them at home or at a gym, whichever your schedule allows.",
  },
  {
    Icon: MoonStar,
    title: "Fix what motivation can't",
    body: "Sleep, stress and routine decide whether fat comes off after 30. The program builds habits, including the 3-2-1 sleep rule, so you don't depend on willpower.",
  },
];

export function Method() {
  return (
    <section id="method" className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h2 className="text-4xl font-extrabold sm:text-5xl">Why most plans fail you, and what&apos;s different here</h2>
          <p className="mt-5 text-lg text-muted">
            Gympanzie is online fat-loss coaching for professionals with full calendars. The free training video
            reveals the three traps that quietly stall progress, then shows how to get lean and stay lean without harsh
            routines.
          </p>
          <p className="mt-4 text-muted">
            You&apos;re backed by a team of {site.team.slice(0, 3).join(", ").toLowerCase()}, and more, with {site.stats[2].value} years of
            experience.
          </p>
        </div>
        <ol className="space-y-4">
          {pillars.map(({ Icon, title, body }, i) => (
            <li key={title} className={`flex gap-5 rounded-3xl p-6 ${i === 1 ? "bg-jungle text-white" : "bg-paper"}`}>
              <span
                className={`grid size-12 shrink-0 place-items-center rounded-2xl ${i === 1 ? "bg-banana text-ink" : "bg-banana/70 text-ink"}`}
              >
                <Icon size={24} aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-2xl font-bold">{title}</h3>
                <p className={`mt-2 ${i === 1 ? "text-white/85" : "text-muted"}`}>{body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
