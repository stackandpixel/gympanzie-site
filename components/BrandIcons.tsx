type P = { size?: number; className?: string };

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
});

export function Instagram({ size = 24, className }: P) {
  return (
    <svg {...base(size)} className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  );
}

export function Youtube({ size = 24, className }: P) {
  return (
    <svg {...base(size)} className={className}>
      <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
      <path d="M10 9.5v5l4.5-2.5z" fill="currentColor" />
    </svg>
  );
}

export function Facebook({ size = 24, className }: P) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M14.5 21v-8h2.7l.5-3.2h-3.2V7.9c0-.9.4-1.6 1.7-1.6h1.6V3.4c-.3 0-1.3-.1-2.4-.1-2.5 0-4.1 1.5-4.1 4.2v2.3H8.5V13h2.8v8z" />
    </svg>
  );
}

export function Linkedin({ size = 24, className }: P) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M6 9v10M6 5.5v.01M10.5 19V9m0 4.5c0-2.5 1.7-4.5 4-4.5s3.5 1.6 3.5 4V19" />
    </svg>
  );
}
