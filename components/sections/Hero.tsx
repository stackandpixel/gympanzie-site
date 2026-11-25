import { ArrowRight } from "lucide-react";
import { site } from "@/site.config";
import { whatsappHref } from "@/lib/whatsapp";
import { CalorieCalc } from "@/components/CalorieCalc";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-jungle text-white on-dark">
      <span
        aria-hidden="true"
        className="outline-num pointer-events-none absolute -right-6 -top-4 text-[22rem] sm:text-[34rem]"
      >
        12
      </span>
      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 pb-20 pt-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:pt-24">
        <div className="rise">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold">
            <span className="size-2 rounded-full bg-banana" aria-hidden="true" />
            For busy professionals, especially over 30
          </p>
          <h1 className="mt-5 text-[2.6rem] font-extrabold sm:text-6xl lg:text-7xl">
            The best shape of your life in <span className="text-banana">12 weeks.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/85">
            No strict diets. No useless workouts. No relying on motivation. The {site.business.program} by{" "}
            {site.business.founder} fits around your job, your meals and your family, so the results stay.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappHref("Hi Gympanzie, please send me the free 12-week lean body video.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Get the free training video <ArrowRight size={20} aria-hidden="true" />
            </a>
            <a href="#method" className="btn btn-ghost">See how it works</a>
          </div>
          <dl className="mt-12 grid max-w-xl grid-cols-3 gap-4 border-t border-white/20 pt-6">
            {site.stats.map((s) => (
              <div key={s.label}>
                <dt className="font-display text-3xl font-extrabold text-banana sm:text-4xl">{s.value}</dt>
                <dd className="mt-1 text-sm text-white/75">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="rise [animation-delay:0.15s]">
          <p className="mb-3 font-display text-xl font-bold">Start here: what should you eat daily?</p>
          <CalorieCalc compact />
        </div>
      </div>
    </section>
  );
}
