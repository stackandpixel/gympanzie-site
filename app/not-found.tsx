import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-2xl px-5 py-32 text-center">
      <p className="outline-num text-[9rem]" aria-hidden="true" style={{ WebkitTextStroke: "2px var(--jungle)" }}>
        404
      </p>
      <h1 className="mt-4 text-4xl font-extrabold">This page skipped leg day.</h1>
      <p className="mt-4 text-muted">We couldn&apos;t find what you were looking for. Let&apos;s get you back on track.</p>
      <Link href="/" className="btn btn-dark mt-8">
        Back to the homepage
      </Link>
    </section>
  );
}
