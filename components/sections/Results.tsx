import { site } from "@/site.config";

export function Results() {
  return (
    <section id="results" className="bg-ink py-20 text-white on-dark sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="max-w-3xl text-4xl font-extrabold sm:text-5xl">
          Real people with real jobs. <span className="text-banana">Real inches gone.</span>
        </h2>
        <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {site.proof.items.map((p) => (
            <li key={p.name} className="flex flex-col rounded-3xl border border-white/15 bg-white/[0.04] p-6">
              <p className="font-display text-3xl font-extrabold text-banana">{p.result}</p>
              <p className="mt-4 flex-1 text-white/85">{p.story}</p>
              <p className="mt-5 border-t border-white/15 pt-4 text-sm">
                <strong className="text-white">{p.name}</strong>
                <span className="text-white/65">, {p.meta}</span>
              </p>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-sm text-white/65">{site.proof.disclaimer}</p>
      </div>
    </section>
  );
}
