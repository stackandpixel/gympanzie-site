import { Dumbbell, MoonStar, Users, Utensils } from "lucide-react";
import { site } from "@/site.config";
import { Reveal } from "@/components/Reveal";

export function Method() {
  return (
    <section id="method" className="mx-auto max-w-6xl px-5 py-24 sm:py-32">
      <Reveal>
        <h2 className="max-w-4xl text-4xl font-extrabold sm:text-6xl">
          Why most plans fail you, and what&apos;s different here
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-muted sm:text-xl">
          Gympanzie is online fat-loss coaching for professionals with full calendars. The free video reveals the three
          traps that quietly stall progress, then shows how to get lean and stay lean without harsh routines.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-5 md:grid-cols-6">
        <Reveal className="md:col-span-3" delay={0}>
          <article className="lift relative h-full overflow-hidden rounded-[2rem] bg-jungle p-8 text-white sm:p-10">
            <div aria-hidden="true" className="orb orb-banana -right-16 -top-16 size-64 !opacity-30" />
            <Utensils className="relative text-banana" size={34} aria-hidden="true" />
            <h3 className="relative mt-8 text-3xl font-bold sm:text-4xl">Eat the food you already love</h3>
            <p className="relative mt-4 text-lg text-white/80">
              An Indian meal plan built around your plate. Lose belly fat without giving up roti or rice, and without a
              diet that falls apart by week three.
            </p>
          </article>
        </Reveal>

        <Reveal className="md:col-span-3" delay={120}>
          <article className="lift h-full rounded-[2rem] border border-line bg-paper p-8 sm:p-10">
            <Dumbbell className="text-jungle" size={34} aria-hidden="true" />
            <h3 className="mt-8 text-3xl font-bold sm:text-4xl">Train smart, not endlessly</h3>
            <p className="mt-4 text-lg text-muted">
              Short, focused sessions with dumbbells and bodyweight, 30 to 40 minutes, 4 to 5 days a week. Do them at
              home or at a gym, whichever your schedule allows.
            </p>
          </article>
        </Reveal>

        <Reveal className="md:col-span-2" delay={0}>
          <article className="lift h-full rounded-[2rem] bg-banana p-8">
            <MoonStar className="text-ink" size={34} aria-hidden="true" />
            <h3 className="mt-6 text-2xl font-bold">Fix what motivation can&apos;t</h3>
            <p className="mt-3 text-ink/80">
              Sleep, stress and routine decide whether fat comes off after 30. Habits like the 3-2-1 sleep rule do the
              work, not willpower.
            </p>
          </article>
        </Reveal>

        <Reveal className="md:col-span-4" delay={120}>
          <article className="lift grain relative h-full overflow-hidden rounded-[2rem] bg-ink p-8 text-white sm:p-10">
            <Users className="relative text-banana" size={34} aria-hidden="true" />
            <h3 className="relative mt-6 text-2xl font-bold sm:text-3xl">A full team behind your 12 weeks</h3>
            <ul className="relative mt-5 flex flex-wrap gap-2">
              {site.team.map((t) => (
                <li key={t} className="glass rounded-full px-4 py-2 text-sm">
                  {t}
                </li>
              ))}
            </ul>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
