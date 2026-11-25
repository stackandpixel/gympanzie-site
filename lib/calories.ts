export type Sex = "male" | "female";

export const activityLevels = [
  { value: 1.2, label: "Sedentary (desk job, little exercise)" },
  { value: 1.375, label: "Lightly active (exercise 1 to 3 days a week)" },
  { value: 1.55, label: "Moderately active (3 to 5 days a week)" },
  { value: 1.725, label: "Very active (6 to 7 days a week)" },
] as const;

export const goals = [
  { value: -0.2, label: "Lose fat steadily (about 20% deficit)" },
  { value: -0.1, label: "Lose fat gently (about 10% deficit)" },
  { value: 0, label: "Maintain my weight" },
  { value: 0.1, label: "Lean gain (about 10% surplus)" },
] as const;

/** Mifflin-St Jeor equation, metric inputs. */
export function calcCalories(o: {
  sex: Sex;
  weightKg: number;
  heightCm: number;
  age: number;
  activity: number;
  goal: number;
}) {
  const bmr = 10 * o.weightKg + 6.25 * o.heightCm - 5 * o.age + (o.sex === "male" ? 5 : -161);
  const tdee = bmr * o.activity;
  const target = tdee * (1 + o.goal);
  const bmi = o.weightKg / Math.pow(o.heightCm / 100, 2);
  return {
    bmr: Math.round(bmr),
    tdee: Math.round(tdee),
    target: Math.round(target),
    bmi: Math.round(bmi * 10) / 10,
    protein: Math.round(o.weightKg * 1.6),
  };
}
