import Link from "next/link";

type LogoProps = { current?: boolean; className?: string };

/** Marca: un cuadrado lima con una L recortada y el nombre en dos pesos. */
export function Logo({ current, className = "" }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="López Tech, inicio"
      aria-current={current ? "page" : undefined}
      className={`group inline-flex min-h-11 shrink-0 items-center gap-2.5 whitespace-nowrap ${className}`}
    >
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        aria-hidden="true"
        focusable="false"
        className="shrink-0"
      >
        <rect width="30" height="30" rx="7" fill="var(--color-lima-400)" />
        <path
          d="M9.5 7v12.5a1.5 1.5 0 0 0 1.5 1.5h9.5"
          fill="none"
          stroke="var(--color-ink-950)"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="21" cy="9.5" r="2.1" fill="var(--color-ink-950)" />
      </svg>
      <span translate="no" className="font-display text-[1.2rem] leading-none tracking-tight">
        <span className="font-bold">López</span>{" "}
        <span className="font-normal text-cobalt-200">Tech</span>
      </span>
    </Link>
  );
}
