import type { UseFormRegisterReturn } from "react-hook-form";

interface InputProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  error?: string;
  register: UseFormRegisterReturn;
  variant?: "light" | "dark";
  className?: string;
}

export function Input({
  label,
  type = "text",
  placeholder,
  error,
  register,
  variant = "light",
  className = "",
}: InputProps) {
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
      <input
        type={type}
        placeholder={placeholder}
        {...register}
        className={`w-full px-4 py-3.5 rounded-input text-[15px] border transition-all duration-200 outline-none ${
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
