import type { UseFormRegisterReturn } from "react-hook-form";

interface TextareaProps {
  label: string;
  name: string;
  placeholder?: string;
  error?: string;
  register: UseFormRegisterReturn;
  variant?: "light" | "dark";
  rows?: number;
  className?: string;
}

export function Textarea({
  label,
  placeholder,
  error,
  register,
  variant = "light",
  rows = 5,
  className = "",
}: TextareaProps) {
  const isLight = variant === "light";

  return (
    <div className={className}>
      <label
        className={`block text-[13px] font-medium mb-1.5 ${
          isLight ? "text-ink-200" : "text-ink-400"
        }`}
      >
        {label}
      </label>
      <textarea
        rows={rows}
        placeholder={placeholder}
        {...register}
        className={`w-full px-4 py-3.5 rounded-input text-[15px] border transition-all duration-200 outline-none resize-none ${
          isLight
            ? "bg-canvas-white border-canvas-border text-ink-100 placeholder:text-ink-400 focus:border-signal-bright focus:ring-3 focus:ring-signal/15"
            : "bg-ink-100 border-ink-200 text-white placeholder:text-ink-300 focus:border-signal-bright focus:ring-3 focus:ring-signal/15"
        } ${error ? "!border-red-500" : ""}`}
      />
      {error && (
        <p className="mt-1 text-[13px] text-red-500">{error}</p>
      )}
    </div>
  );
}
