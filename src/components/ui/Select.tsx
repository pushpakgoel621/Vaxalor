import type { UseFormRegisterReturn } from "react-hook-form";

interface SelectProps {
  label: string;
  name: string;
  options: string[];
  placeholder?: string;
  error?: string;
  register: UseFormRegisterReturn;
  variant?: "light" | "dark";
  className?: string;
}

export function Select({
  label,
  options,
  placeholder = "Select an option",
  error,
  register,
  variant = "light",
  className = "",
}: SelectProps) {
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
      <select
        {...register}
        className={`w-full px-4 py-3.5 rounded-input text-[15px] border transition-all duration-200 outline-none appearance-none bg-[length:16px] bg-[right_16px_center] bg-no-repeat ${
          isLight
            ? "bg-canvas-white border-canvas-border text-ink-100 focus:border-signal-bright focus:ring-3 focus:ring-signal/15"
            : "bg-ink-100 border-ink-200 text-white focus:border-signal-bright focus:ring-3 focus:ring-signal/15"
        } ${error ? "!border-red-500" : ""}`}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2394A3B8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
        }}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error && (
        <p className="mt-1 text-[13px] text-red-500">{error}</p>
      )}
    </div>
  );
}
