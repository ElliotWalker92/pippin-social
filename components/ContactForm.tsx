"use client";

import Link from "next/link";
import { useState, type FormEvent, type ReactNode } from "react";
import {
  budgetOptions,
  validateContactForm,
  type ContactFormData,
  type ContactFormErrors,
} from "@/lib/contact";
import { brand } from "@/lib/content";
import { cn } from "@/lib/utils";

const initialData: ContactFormData = {
  name: "",
  email: "",
  company: "",
  message: "",
  budget: budgetOptions[0],
};

type Status = "idle" | "submitting" | "success" | "error";

const fieldClasses =
  "w-full border bg-ivory px-4 py-3 font-sans text-sm text-charcoal placeholder:text-charcoal/40 transition-colors focus:border-charcoal";

export function ContactForm() {
  const [data, setData] = useState<ContactFormData>(initialData);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<Status>("idle");

  function update<K extends keyof ContactFormData>(
    key: K,
    value: ContactFormData[K]
  ) {
    setData((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const fieldErrors = validateContactForm(data);
    setErrors(fieldErrors);
    if (Object.keys(fieldErrors).length > 0) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        if (body?.errors) {
          setErrors(body.errors);
          setStatus("idle");
          return;
        }
        setStatus("error");
        return;
      }

      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="py-4">
        <h2 className="font-serif text-3xl font-light text-softblack sm:text-4xl">
          Thank you.
        </h2>
        <p className="mt-4 max-w-md font-sans text-base leading-relaxed text-charcoal">
          We&apos;ve received your message and will be in touch within one
          working day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-8">
      <Field label="Name" htmlFor="name" error={errors.name}>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          value={data.name}
          onChange={(e) => update("name", e.target.value)}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
          className={cn(
            fieldClasses,
            errors.name ? "border-charcoal/50" : "border-stone"
          )}
        />
      </Field>

      <Field label="Email" htmlFor="email" error={errors.email}>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={data.email}
          onChange={(e) => update("email", e.target.value)}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={cn(
            fieldClasses,
            errors.email ? "border-charcoal/50" : "border-stone"
          )}
        />
      </Field>

      <Field label="Company" htmlFor="company" error={errors.company}>
        <input
          id="company"
          name="company"
          type="text"
          autoComplete="organization"
          value={data.company}
          onChange={(e) => update("company", e.target.value)}
          aria-invalid={Boolean(errors.company)}
          aria-describedby={errors.company ? "company-error" : undefined}
          className={cn(
            fieldClasses,
            errors.company ? "border-charcoal/50" : "border-stone"
          )}
        />
      </Field>

      <Field
        label="What can we help with?"
        htmlFor="message"
        error={errors.message}
      >
        <textarea
          id="message"
          name="message"
          rows={5}
          value={data.message}
          onChange={(e) => update("message", e.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={cn(
            fieldClasses,
            "resize-none",
            errors.message ? "border-charcoal/50" : "border-stone"
          )}
        />
      </Field>

      <Field label="Budget range (optional)" htmlFor="budget">
        <select
          id="budget"
          name="budget"
          value={data.budget}
          onChange={(e) => update("budget", e.target.value)}
          className={cn(fieldClasses, "border-stone")}
        >
          {budgetOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </Field>

      {status === "error" && (
        <p className="font-sans text-sm leading-relaxed text-charcoal">
          Something went wrong on our end. Please email us directly at{" "}
          <Link
            href={`mailto:${brand.email}`}
            className="underline decoration-stone underline-offset-4 hover:text-softblack"
          >
            {brand.email}
          </Link>{" "}
          and we&apos;ll get back to you.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="border border-sage bg-sage px-8 py-4 font-sans text-xs tracking-widest-plus text-softblack uppercase transition-colors hover:bg-transparent disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send"}
      </button>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="block font-sans text-xs tracking-widest-plus text-charcoal/70 uppercase"
      >
        {label}
      </label>
      <div className="mt-3">{children}</div>
      {error && (
        <p
          id={`${htmlFor}-error`}
          className="mt-2 font-sans text-xs text-charcoal/80"
        >
          {error}
        </p>
      )}
    </div>
  );
}
