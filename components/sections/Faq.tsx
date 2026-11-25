import { Plus } from "lucide-react";
import { site } from "@/site.config";

export function Faq() {
  return (
    <section id="faq" className="bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-5">
        <h2 className="text-4xl font-extrabold sm:text-6xl">Questions people ask before they start</h2>
        <div className="mt-10 divide-y divide-line border-y border-line">
          {site.faqs.map((f, i) => (
            <details key={f.q} open={i === 0} className="group py-5">
              <summary className="flex min-h-11 items-center justify-between gap-4">
                <h3 className="font-display text-xl font-bold">{f.q}</h3>
                <Plus className="chev shrink-0 transition-transform" aria-hidden="true" />
              </summary>
              <p className="mt-3 text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
