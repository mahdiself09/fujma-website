"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

const INTEREST_OPTIONS = [
  "Product Sourcing",
  "Brand Creation",
  "Import & Export",
  "Hong Kong Company Formation",
  "Trademark Registration",
  "Other",
];

type FormData = {
  fullName: string;
  email: string;
  interest: string;
  message: string;
};

const INITIAL: FormData = {
  fullName: "",
  email: "",
  interest: "",
  message: "",
};

interface ContactFormProps {
  title?: string;
  subtitle?: string;
  compact?: boolean;
}

export default function ContactForm({ title, subtitle, compact = false }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>(INITIAL);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  function validate(): Partial<FormData> {
    const e: Partial<FormData> = {};
    if (!formData.fullName.trim()) e.fullName = "Full name is required.";
    if (!formData.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      e.email = "Enter a valid email address.";
    if (!formData.interest) e.interest = "Please select a service.";
    if (!formData.message.trim()) e.message = "Message is required.";
    return e;
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitting(true);
    setSubmitError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        throw new Error((json as { error?: string }).error ?? "Something went wrong. Please try again.");
      }

      setSubmitted(true);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  function handleReset() {
    setSubmitted(false);
    setFormData(INITIAL);
    setSubmitError(null);
  }

  // Style variants
  const wrapperClass = compact
    ? "bg-slate-50 rounded-2xl p-8 sm:p-10 border border-gray-100"
    : "bg-white rounded-2xl border border-border shadow-sm p-8 sm:p-10";

  const spaceClass = compact ? "space-y-5" : "space-y-6";

  const inputBase = compact
    ? "w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-royal/20 focus:border-royal transition-all duration-200"
    : "w-full px-4 py-3 rounded-xl border text-[15px] text-foreground placeholder:text-slate-400 outline-none transition-all duration-200 focus:ring-2 focus:ring-royal/20 focus:border-royal";

  const inputIdle = compact ? "" : "border-border bg-white hover:border-slate-300";
  const inputError = "border-red-400 bg-red-50";

  const chevronBg = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`;

  if (submitted) {
    return (
      <div className={`${wrapperClass} flex flex-col items-center justify-center text-center py-20 px-8`}>
        <div className="w-14 h-14 rounded-full bg-emerald-50 flex items-center justify-center mb-5">
          <CheckCircle size={28} className="text-emerald-500" />
        </div>
        <h3 className="text-xl font-bold text-foreground mb-2">Message Sent!</h3>
        <p className="text-muted text-[15px] leading-relaxed max-w-sm">
          Thank you for reaching out. Our team will get back to you within 24 hours.
        </p>
        <button
          onClick={handleReset}
          className="mt-8 text-sm font-semibold text-royal hover:text-royal-dark transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={`${wrapperClass} ${spaceClass}`}
      aria-label="Contact form for China sourcing services"
    >
      {(title || subtitle) && (
        <div>
          {title && <h3 className="text-lg font-bold text-foreground mb-1">{title}</h3>}
          {subtitle && <p className="text-sm text-muted">{subtitle}</p>}
        </div>
      )}

      {/* Urgency banner — full form only */}
      {!compact && (
        <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-amber-50 border border-amber-200">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse flex-shrink-0" />
          <p className="text-[12px] font-semibold text-amber-800">
            Limited availability — we only take a few new clients each month.
          </p>
        </div>
      )}

      {/* Full Name */}
      <div>
        <label className="block text-[13px] font-semibold text-foreground mb-2">
          Full Name {!compact && <span className="text-royal">*</span>}
        </label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="John Smith"
          className={`${inputBase} ${errors.fullName ? inputError : inputIdle}`}
        />
        {errors.fullName && (
          <p className="mt-1.5 text-xs text-red-500">{errors.fullName}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label className="block text-[13px] font-semibold text-foreground mb-2">
          Email {!compact && <span className="text-royal">*</span>}
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="john@example.com"
          className={`${inputBase} ${errors.email ? inputError : inputIdle}`}
        />
        {errors.email && (
          <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>
        )}
      </div>

      {/* Interest */}
      <div>
        <label className="block text-[13px] font-semibold text-foreground mb-2">
          What are you interested in? {!compact && <span className="text-royal">*</span>}
        </label>
        <select
          name="interest"
          value={formData.interest}
          onChange={handleChange}
          className={`${inputBase} appearance-none bg-no-repeat cursor-pointer ${
            formData.interest ? "text-foreground" : "text-slate-400"
          } ${errors.interest ? inputError : inputIdle}`}
          style={{
            backgroundImage: chevronBg,
            backgroundPosition: "right 1rem center",
            backgroundSize: "1rem",
          }}
        >
          <option value="" disabled>Select a service...</option>
          {INTEREST_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
        {errors.interest && (
          <p className="mt-1.5 text-xs text-red-500">{errors.interest}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label className="block text-[13px] font-semibold text-foreground mb-2">
          Message {!compact && <span className="text-royal">*</span>}
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={compact ? 4 : 5}
          placeholder="Tell us about your project..."
          className={`${inputBase} resize-none ${errors.message ? inputError : inputIdle}`}
        />
        {errors.message && (
          <p className="mt-1.5 text-xs text-red-500">{errors.message}</p>
        )}
      </div>

      {/* API error */}
      {submitError && (
        <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {submitError}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={submitting}
        className="btn-primary btn-primary-royal w-full group disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitting ? "Sending\u2026" : compact ? "Send Message" : "Start Your Project"}
        {!submitting && (
          <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-0.5" />
        )}
      </button>

      {!compact && (
        <p className="text-center text-xs text-muted leading-relaxed">
          By submitting, you agree to our{" "}
          <a href="/terms-of-service" className="underline hover:text-royal transition-colors">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="/privacy-policy" className="underline hover:text-royal transition-colors">
            Privacy Policy
          </a>
          . Your information is kept strictly confidential and never shared with third parties.
        </p>
      )}
    </form>
  );
}
