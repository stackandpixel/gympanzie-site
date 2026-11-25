import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How Gympanzie handles the details you share when you enquire.",
  alternates: { canonical: "/privacy/" },
};

export default function Privacy() {
  return (
    <section className="mx-auto max-w-2xl px-5 py-16 sm:py-24">
      <h1 className="text-4xl font-extrabold sm:text-5xl">Privacy</h1>
      <div className="mt-8 space-y-4 text-muted">
        <p>
          When you use the enquiry form or chat on this website, your name, mobile number and message are placed into a
          WhatsApp message on your own device. Nothing reaches Gympanzie until you tap Send in WhatsApp.
        </p>
        <p>
          The calorie calculator runs entirely in your browser. The numbers you enter are not stored or sent anywhere.
        </p>
        <p>
          This website does not use advertising cookies. If analytics are added later, this page will be updated.
        </p>
        <p>
          To ask us to delete a conversation, message us on WhatsApp or Instagram.
        </p>
      </div>
    </section>
  );
}
