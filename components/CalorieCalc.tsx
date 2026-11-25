"use client";

import { useMemo, useState } from "react";
import { activityLevels, calcCalories, goals, type Sex } from "@/lib/calories";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function CalorieCalc({ compact = false }: { compact?: boolean }) {
  const [sex, setSex] = useState<Sex>("male");
  const [age, setAge] = useState("35");
  const [height, setHeight] = useState("172");
  const [weight, setWeight] = useState("82");
  const [activity, setActivity] = useState<number>(1.2);
  const [goal, setGoal] = useState<number>(-0.2);

  const result = useMemo(() => {
    const a = Number(age), h = Number(height), w = Number(weight);
    if (!(a >= 15 && a <= 90 && h >= 120 && h <= 230 && w >= 30 && w <= 250)) return null;
    return calcCalories({ sex, age: a, heightCm: h, weightKg: w, activity, goal });
  }, [sex, age, height, weight, activity, goal]);

  const share = result
    ? buildWhatsAppUrl(
        `Hi Gympanzie, my calculator result: about ${result.target} kcal/day target, BMI ${result.bmi}. Can you help me plan my 12 weeks?`,
      )
    : "#";

  return (
    <div className="rounded-3xl bg-paper p-5 text-ink shadow-xl sm:p-7">
      <div className="grid gap-4 sm:grid-cols-2">
        <fieldset className="sm:col-span-2">
          <legend className="mb-1 text-sm font-semibold">Sex</legend>
          <div className="flex gap-2">
            {(["male", "female"] as const).map((s) => (
              <label key={s} className="flex-1">
                <input type="radio" name={`sex-${compact}`} className="peer sr-only" checked={sex === s} onChange={() => setSex(s)} />
                <span className="flex min-h-12 cursor-pointer items-center justify-center rounded-xl border-2 border-line font-semibold capitalize peer-checked:border-jungle peer-checked:bg-jungle peer-checked:text-white peer-focus-visible:outline peer-focus-visible:outline-[3px] peer-focus-visible:outline-offset-2 peer-focus-visible:outline-banana-deep">
                  {s}
                </span>
              </label>
            ))}
          </div>
        </fieldset>
        {[
          { id: "age", label: "Age (years)", v: age, set: setAge },
          { id: "height", label: "Height (cm)", v: height, set: setHeight },
          { id: "weight", label: "Weight (kg)", v: weight, set: setWeight },
        ].map((f) => (
          <div key={f.id} className={f.id === "weight" ? "sm:col-span-2" : ""}>
            <label htmlFor={`${f.id}-${compact}`} className="mb-1 block text-sm font-semibold">{f.label}</label>
            <input id={`${f.id}-${compact}`} className="field" inputMode="decimal" value={f.v} onChange={(e) => f.set(e.target.value)} />
          </div>
        ))}
        {!compact && (
          <>
            <div className="sm:col-span-2">
              <label htmlFor="act" className="mb-1 block text-sm font-semibold">Activity level</label>
              <select id="act" className="field" value={activity} onChange={(e) => setActivity(Number(e.target.value))}>
                {activityLevels.map((a) => <option key={a.value} value={a.value}>{a.label}</option>)}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="goal" className="mb-1 block text-sm font-semibold">Your goal</label>
              <select id="goal" className="field" value={goal} onChange={(e) => setGoal(Number(e.target.value))}>
                {goals.map((g) => <option key={g.value} value={g.value}>{g.label}</option>)}
              </select>
            </div>
          </>
        )}
      </div>

      <div className="mt-6 rounded-2xl bg-jungle p-5 text-white" aria-live="polite">
        {result ? (
          <>
            <p className="text-sm text-white/80">Your daily calorie target</p>
            <p className="font-display text-5xl font-extrabold text-banana">
              {result.target.toLocaleString("en-IN")} <span className="text-xl text-white">kcal</span>
            </p>
            <dl className="mt-3 grid grid-cols-3 gap-2 text-sm">
              <div><dt className="text-white/70">BMR</dt><dd className="font-bold">{result.bmr}</dd></div>
              <div><dt className="text-white/70">Maintenance</dt><dd className="font-bold">{result.tdee}</dd></div>
              <div><dt className="text-white/70">BMI</dt><dd className="font-bold">{result.bmi}</dd></div>
            </dl>
            {!compact && (
              <p className="mt-2 text-sm text-white/80">A useful protein starting point is about {result.protein} g a day.</p>
            )}
          </>
        ) : (
          <p className="text-sm">Enter realistic values to see your estimate.</p>
        )}
      </div>
      <p className="mt-3 text-xs text-muted">
        Estimate using the Mifflin-St Jeor equation. It is not medical advice, so please consult your doctor before changing your diet.
      </p>
      {result && (
        <a href={share} target="_blank" rel="noopener noreferrer" className="btn btn-dark mt-4 w-full">
          Turn this into a 12-week plan
        </a>
      )}
    </div>
  );
}
