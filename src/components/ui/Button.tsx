import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  arrow?: boolean;
  className?: string;
  children: React.ReactNode;
  "data-cursor"?: string;
}

interface ButtonAsLink extends ButtonBaseProps {
  href: string;
  type?: never;
  onClick?: () => void;
  disabled?: never;
}

interface ButtonAsButton extends ButtonBaseProps {
  href?: never;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
}

type ButtonProps = ButtonAsLink | ButtonAsButton;

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-signal text-white hover:bg-signal-hover hover:-translate-y-0.5 active:translate-y-0",
  secondary:
    "bg-transparent text-ink border-[1.5px] border-canvas-border hover:bg-canvas-alt hover:border-ink-500",
  ghost:
    "bg-transparent text-signal hover:underline underline-offset-4",
};

export function Button({
  variant = "primary",
  arrow = false,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseClasses = `inline-flex items-center justify-center gap-2 font-medium text-[15px] px-7 py-3.5 rounded-button transition-all duration-200 ease-out disabled:opacity-50 disabled:pointer-events-none ${variants[variant]} ${className}`;

  const content = (
    <>
      {children}
      {arrow && <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>}
    </>
  );

  if ("href" in props && props.href) {
    return (
      <Link
        href={props.href}
        onClick={props.onClick}
        className={`group ${baseClasses}`}
        data-cursor={props["data-cursor"] ?? "cta"}
      >
        {content}
      </Link>
    );
  }

  const { type = "button", onClick, disabled } = props as ButtonAsButton;
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`group ${baseClasses}`}
      data-cursor={props["data-cursor"] ?? "cta"}
    >
      {content}
    </button>
  );
}
