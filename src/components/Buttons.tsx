import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

type BaseProps = {
  children: ReactNode;
  to?: string;
  hash?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
  "aria-label"?: string;
  target?: string;
  rel?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] transition-colors duration-200";

function Shell({
  to,
  hash,
  href,
  onClick,
  type,
  className,
  children,
  ...rest
}: BaseProps & { className: string }) {
  if (to) {
    return (
      <Link
        to={to}
        {...(hash ? { hash } : {})}
        className={className}
        onClick={onClick}
        {...rest}
      >
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={className} onClick={onClick} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <button
      type={type ?? "button"}
      className={className}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
}

export function PrimaryButton(props: BaseProps) {
  return (
    <Shell
      {...props}
      className={`${base} bg-primary text-primary-foreground hover:bg-primary-dark hover:text-background ${props.className ?? ""}`}
    />
  );
}

export function SecondaryButton(props: BaseProps & { onDark?: boolean }) {
  const tone = props.onDark
    ? "border border-ink-foreground/35 text-ink-foreground hover:border-primary hover:text-primary"
    : "border border-border text-foreground hover:border-primary hover:text-primary-dark";
  return (
    <Shell {...props} className={`${base} ${tone} ${props.className ?? ""}`} />
  );
}

export function WhatsAppButton(props: BaseProps) {
  return (
    <Shell
      {...props}
      className={`${base} bg-[#25D366] text-white hover:bg-[#1ebe5d] hover:text-white ${props.className ?? ""}`}
    />
  );
}
