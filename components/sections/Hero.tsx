import { ArrowRight, ShieldCheck } from "lucide-react";
import { site } from "@/site.config";
import { whatsappHref } from "@/lib/whatsapp";
import { CalorieCalc } from "@/components/CalorieCalc";
import { CountUp } from "@/components/CountUp";

export function Hero() {
  return (
    <section className="grain relative overflow-hidden bg-[#08281d] text-white on-dark">
      <div aria-hidden="true" className="orb orb-green drift -left-40 top-10 size-[34rem]" />
      <div aria-hidden="true" className="orb orb-banana drift right-[-8rem] top-[-6rem] size-[26rem] !opacity-30 [animation-delay:-5s]" />
      <span
        aria-hidden="true"
        className="outline-num pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 text-[20rem] opacity-60 sm:text-[38rem]"
      >
        12
      </span>

      <div className="relative mx-auto grid max-w-6xl gap-14 px-5 pb-24 pt-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:pt-24">
        <div className="rise">
          <p className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold">
            <ShieldCheck size={16} className="text-banana" aria-hidden="true" />
            Certified coaching for busy professionals over 30
          </p>
          <h1 className="mt-6 text-[2.8rem] font-extrabold leading-[0.98] sm:text-7xl lg:text-[5.4rem]">
            The best shape of your life in <span className="text-shine">12 weeks.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/80 sm:text-xl">
            No strict diets. No useless workouts. No relying on motivation. The {site.business.program} by{" "}
            {site.business.founder} fits around your job, your meals and your family, so the results stay.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappHref("Hi Gympanzie, please send me the free 12-week lean body video.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary !min-h-14 !px-8 text-lg"
            >
              Get the free training video <ArrowRight size={20} aria-hidden="true" />
            </a>
            <a href="#method" className="btn btn-ghost !min-h-14 border-white/40 hover:bg-white/10">
              See how it works
            </a>
          </div>

          <dl className="glass mt-12 grid max-w-xl grid-cols-3 divide-x divide-white/15 rounded-3xl">
            {site.stats.map((s) => (
              <div key={s.label} className="px-4 py-5 first:pl-6">
                <dt className="font-display text-3xl font-extrabold text-banana sm:text-4xl">
                  <CountUp value={s.value} />
                </dt>
                <dd className="mt-1 text-xs leading-snug text-white/70 sm:text-sm">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="rise relative [animation-delay:0.2s]">
          <div aria-hidden="true" className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-banana/40 via-transparent to-[#2fa37a]/40 blur-2xl" />
          <div className="relative">
            <p className="mb-3 font-display text-xl font-bold">Start here: what should you eat daily?</p>
            <CalorieCalc compact />
          </div>
        </div>
      </div>
    </section>
  );
}
