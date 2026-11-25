"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { whatsappHref } from "@/lib/whatsapp";

const links = [
  { href: "/#method", label: "How it works" },
  { href: "/#results", label: "Results" },
  { href: "/#coach", label: "Your coach" },
  { href: "/calorie-calculator/", label: "Calorie calculator" },
  { href: "/#faq", label: "FAQ" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#08281d]/80 text-white backdrop-blur-xl on-dark">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="/" className="font-display text-2xl font-extrabold tracking-tight" aria-label="Gympanzie home">
          Gym<span className="text-banana">panzie</span>
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-7 text-[0.95rem] font-medium lg:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-banana">
              {l.label}
            </Link>
          ))}
          <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className="btn btn-primary !min-h-11 !py-2">
            Get the free video
          </a>
        </nav>
        <button
          type="button"
          className="grid size-11 place-items-center rounded-full lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-white/10 bg-jungle px-5 pb-6 lg:hidden">
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-white/10 py-4 text-lg font-semibold"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-5 w-full">
            Get the free video on WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}
