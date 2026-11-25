import { site } from "@/site.config";
import { Reveal } from "@/components/Reveal";

export function Results() {
  return (
    <section id="results" className="grain relative overflow-hidden bg-[#08281d] py-24 text-white on-dark sm:py-32">
      <div aria-hidden="true" className="orb orb-green drift -right-32 top-0 size-[30rem]" />
      <div className="relative mx-auto max-w-6xl px-5">
        <Reveal>
          <h2 className="max-w-3xl text-4xl font-extrabold sm:text-6xl">
            Real people with real jobs. <span className="text-shine">Real inches gone.</span>
          </h2>
        </Reveal>
      </div>

      <div className="relative mx-auto mt-14 max-w-6xl">
        <ul className="snap-row px-5" tabIndex={0} aria-label="Client results, scroll sideways">
          {site.proof.items.map((p, i) => (
            <li key={p.name}>
              <article className="glass lift flex h-full min-h-[26rem] flex-col rounded-[2rem] p-7">
                <span className="font-display text-sm font-bold text-white/50">{String(i + 1).padStart(2, "0")}</span>
                <p className="mt-3 font-display text-4xl font-extrabold leading-none text-banana sm:text-5xl">{p.result}</p>
                <p className="mt-6 flex-1 text-white/85">{p.story}</p>
                <div className="hairline mt-6" />
                <p className="mt-4 text-sm">
                  <strong>{p.name}</strong>
                  <span className="text-white/65">, {p.meta}</span>
                </p>
              </article>
            </li>
          ))}
        </ul>
        <p className="mt-6 px-5 text-sm text-white/60">{site.proof.disclaimer}</p>
      </div>
    </section>
  );
}
