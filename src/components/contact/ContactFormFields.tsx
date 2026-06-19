import { type ReactNode } from "react";

const fieldClass =
  "w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-base text-charcoal shadow-sm transition-colors placeholder:text-charcoal/40 focus:border-sky focus:outline-none focus:ring-2 focus:ring-sky/25";

const labelClass = "mb-2 block text-sm font-semibold text-navy";

export function FieldGroup({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label className={labelClass}>
        {label}
        {required && <span className="text-amber"> *</span>}
      </label>
      {children}
      {error && (
        <p className="mt-2 text-sm font-medium text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export function TextInput({
  value,
  onChange,
  placeholder,
  type = "text",
  id,
  name,
  autoComplete,
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
  id?: string;
  name?: string;
  autoComplete?: string;
}) {
  return (
    <input
      id={id}
      name={name}
      type={type}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder={placeholder}
      autoComplete={autoComplete}
      className={fieldClass}
    />
  );
}

export function TextArea({
  value,
  onChange,
  placeholder,
  rows = 4,
  id,
  name,
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  rows?: number;
  id?: string;
  name?: string;
}) {
  return (
    <textarea
      id={id}
      name={name}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder={placeholder}
      rows={rows}
      className={`${fieldClass} resize-y min-h-[6rem]`}
    />
  );
}

export function SelectInput({
  value,
  onChange,
  placeholder,
  options,
  id,
  name,
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  options: readonly {
    value: string;
    label: string;
    description?: string;
  }[];
  id?: string;
  name?: string;
}) {
  return (
    <select
      id={id}
      name={name}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className={`${fieldClass} appearance-none bg-[url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 24 24%27 stroke=%27%233D5F7C%27%3E%3Cpath stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27M19 9l-7 7-7-7%27/%3E%3C/svg%3E')] bg-[length:1.25rem] bg-[right_0.75rem_center] bg-no-repeat pr-10`}
    >
      <option value="">{placeholder}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export function RadioGroup({
  value,
  onChange,
  options,
  name,
}: {
  value: string;
  onChange: (value: string) => void;
  options: readonly {
    value: string;
    label: string;
    hint?: string;
    description?: string;
  }[];
  name: string;
}) {
  return (
    <div className="space-y-3">
      {options.map((option) => {
        const id = `${name}-${option.value}`;
        const checked = value === option.value;

        return (
          <label
            key={option.value}
            htmlFor={id}
            className={`flex cursor-pointer items-start gap-3 rounded-2xl border px-4 py-3 transition-colors ${
              checked
                ? "border-sky bg-sky/10 ring-1 ring-sky/30"
                : "border-navy/10 bg-white hover:border-sky/40"
            }`}
          >
            <input
              id={id}
              type="radio"
              name={name}
              value={option.value}
              checked={checked}
              onChange={() => onChange(option.value)}
              className="mt-1 h-4 w-4 shrink-0 accent-sky"
            />
            <span className="min-w-0">
              <span className="text-sm font-medium leading-snug text-charcoal">
                {option.label}
                {option.hint && (
                  <span className="font-normal text-charcoal/50">
                    {" "}
                    {option.hint}
                  </span>
                )}
              </span>
              {option.description && (
                <span className="mt-0.5 block text-sm leading-relaxed text-charcoal/65">
                  {option.description}
                </span>
              )}
            </span>
          </label>
        );
      })}
    </div>
  );
}
