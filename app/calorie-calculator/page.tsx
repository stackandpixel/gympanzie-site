import type { Metadata } from "next";
import { CalorieCalc } from "@/components/CalorieCalc";
import { calculatorLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Free Calorie Calculator: BMR, TDEE and Daily Calories",
  description:
    "Free calorie calculator for Indians. Get your BMR, maintenance calories, BMI and a daily calorie target for fat loss, using the Mifflin-St Jeor equation.",
  alternates: { canonical: "/calorie-calculator/" },
};

export default function CalculatorPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-16 sm:py-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(calculatorLd) }} />
      <h1 className="text-4xl font-extrabold sm:text-6xl">Free calorie calculator</h1>
      <p className="mt-5 text-lg text-muted">
        Find your BMR (the calories your body burns at rest), your maintenance calories (TDEE) and a daily target for
        your goal. It uses the Mifflin-St Jeor equation, one of the most widely used formulas for adults.
      </p>
      <div className="mt-10"><CalorieCalc /></div>
      <h2 className="mt-14 text-3xl font-extrabold">How is it calculated?</h2>
      <p className="mt-3 text-muted">
        BMR = 10 × weight (kg) + 6.25 × height (cm) − 5 × age + 5 for men or − 161 for women. Your maintenance calories are
        your BMR multiplied by an activity factor from 1.2 (sedentary) to 1.725 (very active). A fat-loss target then
        subtracts 10 to 20 percent. Treat the result as a starting point and adjust with your results over 2 to 3 weeks.
      </p>
    </section>
  );
}
