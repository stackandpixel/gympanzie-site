"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { site } from "@/site.config";
import { buildWhatsAppUrl, formatEnquiry } from "@/lib/whatsapp";

type Errors = Partial<Record<"name" | "phone", string>>;

function validate(name: string, phone: string): Errors {
  const e: Errors = {};
  if (name.trim().length < 2) e.name = "Enter your name so we know who to reply to.";
  const digits = phone.replace(/\D/g, "").replace(/^(91|0)/, "");
  if (digits.length !== 10) e.phone = "Enter a 10-digit mobile number.";
  return e;
}

export function EnquiryForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState<string>(site.enquiry.interestOptions[0]);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [sentUrl, setSentUrl] = useState("");

  function submit(ev: React.FormEvent) {
    ev.preventDefault();
    const errs = validate(name, phone);
    setErrors(errs);
    if (Object.keys(errs).length) return;

    const text = formatEnquiry({ name: name.trim(), phone: phone.trim(), interest, message: message.trim() });
    const url = buildWhatsAppUrl(text);
    const w = window.open(url, "_blank", "noopener,noreferrer");
    if (!w) window.location.href = url;
    setSentUrl(url);

    const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;
    if (endpoint) {
      fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name, phone, interest, message, source: "gympanzie.com" }),
      }).catch(() => undefined);
    }
  }

  return (
    <form onSubmit={submit} noValidate className="space-y-4">
      <div>
        <label htmlFor="enq-name" className="mb-1 block text-sm font-semibold">Your name</label>
        <input
          id="enq-name"
          className="field"
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={() => setErrors((p) => ({ ...p, name: validate(name, phone).name }))}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "enq-name-err" : undefined}
        />
        {errors.name && <p id="enq-name-err" className="mt-1 text-sm text-[#b3261e]">{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="enq-phone" className="mb-1 block text-sm font-semibold">Mobile number</label>
        <input
          id="enq-phone"
          className="field"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          onBlur={() => setErrors((p) => ({ ...p, phone: validate(name, phone).phone }))}
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? "enq-phone-err" : undefined}
        />
        {errors.phone && <p id="enq-phone-err" className="mt-1 text-sm text-[#b3261e]">{errors.phone}</p>}
      </div>
      <div>
        <label htmlFor="enq-interest" className="mb-1 block text-sm font-semibold">{site.enquiry.interestLabel}</label>
        <select id="enq-interest" className="field" value={interest} onChange={(e) => setInterest(e.target.value)}>
          {site.enquiry.interestOptions.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="enq-msg" className="mb-1 block text-sm font-semibold">
          Anything we should know? <span className="font-normal text-muted">(optional)</span>
        </label>
        <textarea id="enq-msg" rows={3} maxLength={500} className="field" value={message} onChange={(e) => setMessage(e.target.value)} />
      </div>
      <button type="submit" className="btn btn-primary w-full">
        <MessageCircle size={20} aria-hidden="true" /> Message us on WhatsApp
      </button>
      <p className="text-xs text-muted">
        We use your details only to start a WhatsApp chat. Nothing is sent until you tap Send in WhatsApp.
      </p>
      <div aria-live="polite">
        {sentUrl && (
          <p className="rounded-xl bg-jungle/10 p-3 text-sm">
            Opening WhatsApp… if nothing opened,{" "}
            <a href={sentUrl} target="_blank" rel="noopener noreferrer" className="font-bold underline">
              tap here
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
}
