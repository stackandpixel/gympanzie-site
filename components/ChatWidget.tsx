"use client";

import { useEffect, useRef, useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";
import { site } from "@/site.config";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

function openWhatsApp(text: string) {
  const url = buildWhatsAppUrl(`Hi, I'd like to know about: ${text}`);
  const w = window.open(url, "_blank", "noopener,noreferrer");
  if (!w) window.location.href = url;
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const btnRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        btnRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div
      className="fixed right-4 z-50 bottom-[calc(5rem+env(safe-area-inset-bottom))] lg:bottom-6"
    >
      {open && (
        <div
          id="chat-panel"
          role="dialog"
          aria-label="Chat with Gympanzie on WhatsApp"
          className="mb-3 w-[min(22rem,calc(100vw-2rem))] overflow-hidden rounded-3xl border border-line bg-paper shadow-2xl"
        >
          <div className="flex items-center justify-between bg-jungle px-4 py-3 text-white">
            <p className="font-display text-lg font-bold">{site.business.name}</p>
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                btnRef.current?.focus();
              }}
              aria-label="Close chat"
              className="grid size-10 place-items-center rounded-full"
            >
              <X size={20} />
            </button>
          </div>
          <div className="space-y-3 p-4">
            <p className="max-w-[85%] rounded-2xl rounded-tl-sm bg-chalk px-4 py-3 text-sm">{site.enquiry.greeting}</p>
            <ul className="flex flex-wrap gap-2">
              {site.enquiry.quickReplies.map((q) => (
                <li key={q}>
                  <button
                    type="button"
                    onClick={() => openWhatsApp(q)}
                    className="min-h-11 rounded-full border-2 border-jungle px-4 text-sm font-semibold text-jungle hover:bg-jungle hover:text-white"
                  >
                    {q}
                  </button>
                </li>
              ))}
            </ul>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (text.trim()) openWhatsApp(text.trim());
              }}
              className="flex gap-2"
            >
              <label htmlFor="chat-input" className="sr-only">
                Your message
              </label>
              <input
                id="chat-input"
                ref={inputRef}
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="field"
                placeholder="Type your question"
                maxLength={300}
              />
              <button type="submit" aria-label="Continue on WhatsApp" className="btn btn-dark !px-4">
                <Send size={18} />
              </button>
            </form>
            <p className="text-xs text-muted">This opens WhatsApp with your message ready to send.</p>
          </div>
        </div>
      )}
      <button
        ref={btnRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="chat-panel"
        aria-label="Chat with us on WhatsApp"
        className="ml-auto grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform hover:scale-105"
      >
        <MessageCircle size={28} />
      </button>
    </div>
  );
}
