// app/brand-application/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";

/* ——— ICONS ———————————————————————————————————————————————————— */

function ArrowRightIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  );
}

function ArrowLeftIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
    </svg>
  );
}

function CheckIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

/* ——— TYPES ———————————————————————————————————————————————————— */

type FormData = {
  name: string;
  email: string;
  whatsapp: string;
  product: string;
  hasIdea: string;
  budget: string;
  experience: string;
  timeline: string;
  description: string;
};

const INITIAL: FormData = {
  name: "", email: "", whatsapp: "",
  product: "", hasIdea: "",
  budget: "",
  experience: "",
  timeline: "",
  description: "",
};

const TOTAL_STEPS = 6;

const STEP_LABELS = [
  "Basic Info",
  "Your Idea",
  "Budget",
  "Experience",
  "Timeline",
  "Details",
];

/* ——— REUSABLE FIELD COMPONENTS ——————————————————————————————— */

function FieldLabel({ children, required }: { children: React.ReactNode; required?: boolean }) {
  return (
    <label className="block text-sm font-semibold text-gray-800 mb-1.5">
      {children}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
  );
}

function TextInput({
  value, onChange, placeholder, type = "text", required,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      required={required}
      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-gray-900 placeholder:text-gray-400 text-[15px]"
    />
  );
}

function OptionButton({
  selected, onClick, children,
}: {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full px-5 py-4 rounded-xl border text-left text-[15px] font-medium transition-all ${
        selected
          ? "border-blue-600 bg-blue-50 text-blue-700"
          : "border-gray-200 bg-gray-50 text-gray-700 hover:border-gray-300 hover:bg-white"
      }`}
    >
      <span className="flex items-center justify-between">
        {children}
        {selected && <CheckIcon className="w-4 h-4 text-blue-600 flex-shrink-0" />}
      </span>
    </button>
  );
}

/* ——— MAIN PAGE ———————————————————————————————————————————————— */

export default function BrandApplicationPage() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormData>(INITIAL);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const set = (field: keyof FormData) => (value: string) =>
    setData((prev) => ({ ...prev, [field]: value }));

  const canAdvance = (() => {
    if (step === 1) return data.name.trim() && data.email.trim() && data.whatsapp.trim();
    if (step === 2) return data.product.trim() && data.hasIdea;
    if (step === 3) return !!data.budget;
    if (step === 4) return !!data.experience;
    if (step === 5) return !!data.timeline;
    if (step === 6) return true;
    return false;
  })();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError(null);

    try {
      const res = await fetch("/api/brand-application", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        throw new Error(json.error ?? "Something went wrong. Please try again.");
      }

      setSubmitted(true);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const next = () => setStep((s) => Math.min(s + 1, TOTAL_STEPS));
  const back = () => setStep((s) => Math.max(s - 1, 1));

  /* —— SUCCESS STATE ——————————————————————————————————————— */
  if (submitted) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-20 pt-[72px]">
          <div className="max-w-lg w-full text-center">
            <div className="relative w-20 h-20 mx-auto mb-8">
              <div className="absolute inset-0 rounded-full bg-green-100 animate-ping opacity-30" />
              <div className="relative w-20 h-20 bg-green-500 rounded-full flex items-center justify-center">
                <CheckIcon className="w-9 h-9 text-white" />
              </div>
            </div>

            <h1 className="text-2xl font-bold text-gray-900 mb-3">
              Application received!
            </h1>
            <p className="text-gray-500 leading-relaxed mb-8">
              Thank you &mdash; our team will review your project and contact you
              within <span className="font-semibold text-gray-700">24 hours</span>.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-md shadow-blue-600/20 hover:bg-blue-700 transition-colors"
              >
                Back to Home
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }

  /* —— FORM —————————————————————————————————————————————————— */
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 pt-[72px]">

        {/* Top bar */}
        <div className="bg-white border-b border-gray-100 px-6 py-4">
          <div className="mx-auto max-w-2xl flex items-center justify-between">
            <Link href="/branding" className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 transition-colors">
              <ArrowLeftIcon className="w-3.5 h-3.5" />
              Back to Branding
            </Link>
            <span className="text-sm font-medium text-gray-400">
              Step {step} of {TOTAL_STEPS}
            </span>
          </div>
        </div>

        <div className="mx-auto max-w-2xl px-6 py-12">

          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Brand Application
            </h1>
            <p className="mt-2 text-gray-500 text-sm">
              Tell us about your project. We&apos;ll review it and get back to you within 24 hours.
            </p>
          </div>

          {/* Step progress bar */}
          <div className="mb-8">
            <div className="hidden sm:grid mb-3" style={{ gridTemplateColumns: `repeat(${TOTAL_STEPS}, 1fr)` }}>
              {STEP_LABELS.map((label, i) => (
                <div key={label} className="flex flex-col items-center">
                  <span className={`text-xs font-medium transition-colors ${i + 1 <= step ? "text-blue-600" : "text-gray-400"}`}>
                    {label}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex gap-1.5">
              {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                    i + 1 <= step ? "bg-blue-600" : "bg-gray-200"
                  }`}
                />
              ))}
            </div>

            <p className="sm:hidden mt-2 text-center text-xs font-semibold text-blue-600">
              {STEP_LABELS[step - 1]}
            </p>
          </div>

          {/* Form card */}
          <form onSubmit={handleSubmit}>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7 sm:p-8">

              {/* —— STEP 1: Basic Info ————————————————————————— */}
              {step === 1 && (
                <div className="space-y-5">
                  <div>
                    <h2 className="text-lg font-bold text-gray-900 mb-1">Let&apos;s start with you</h2>
                    <p className="text-sm text-gray-500">Basic contact information so we can reach you.</p>
                  </div>
                  <div>
                    <FieldLabel required>Full name</FieldLabel>
                    <TextInput value={data.name} onChange={set("name")} placeholder="Your full name" required />
                  </div>
                  <div>
                    <FieldLabel required>Email address</FieldLabel>
                    <TextInput value={data.email} onChange={set("email")} placeholder="you@email.com" type="email" required />
                  </div>
                  <div>
                    <FieldLabel required>WhatsApp number</FieldLabel>
                    <TextInput value={data.whatsapp} onChange={set("whatsapp")} placeholder="+212 6XX XXX XXX" type="tel" required />
                  </div>
                </div>
              )}

              {/* —— STEP 2: Brand Idea ————————————————————————— */}
              {step === 2 && (
                <div className="space-y-5">
                  <div>
                    <h2 className="text-lg font-bold text-gray-900 mb-1">Tell us about your idea</h2>
                    <p className="text-sm text-gray-500">Give us a sense of what you want to sell or build.</p>
                  </div>
                  <div>
                    <FieldLabel required>What do you want to sell?</FieldLabel>
                    <TextInput
                      value={data.product}
                      onChange={set("product")}
                      placeholder="e.g., Skincare products, phone accessories, kids toys..."
                      required
                    />
                  </div>
                  <div>
                    <FieldLabel required>How developed is your idea?</FieldLabel>
                    <div className="space-y-2.5 mt-1">
                      {[
                        { v: "yes-clear", label: "I have a clear product in mind" },
                        { v: "yes-rough", label: "I have a rough idea but need help" },
                        { v: "no-idea",   label: "I want to sell but don't know what yet" },
                      ].map((opt) => (
                        <OptionButton key={opt.v} selected={data.hasIdea === opt.v} onClick={() => set("hasIdea")(opt.v)}>
                          {opt.label}
                        </OptionButton>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* —— STEP 3: Budget ————————————————————————————— */}
              {step === 3 && (
                <div className="space-y-5">
                  <div>
                    <h2 className="text-lg font-bold text-gray-900 mb-1">What&apos;s your budget?</h2>
                    <p className="text-sm text-gray-500">This helps us recommend the right product and approach for your situation.</p>
                  </div>
                  <div className="space-y-2.5">
                    {[
                      { v: "under-1k", label: "Under $1,000",    sub: "Starting small \u2014 we can work with this" },
                      { v: "1k-5k",    label: "$1,000 \u2013 $5,000", sub: "A solid foundation for a first brand" },
                      { v: "5k-plus",  label: "$5,000+",          sub: "Ready to launch with full infrastructure" },
                    ].map((opt) => (
                      <OptionButton key={opt.v} selected={data.budget === opt.v} onClick={() => set("budget")(opt.v)}>
                        <div>
                          <p className="font-semibold text-gray-900">{opt.label}</p>
                          <p className="text-xs text-gray-400 mt-0.5 font-normal">{opt.sub}</p>
                        </div>
                      </OptionButton>
                    ))}
                  </div>
                </div>
              )}

              {/* —— STEP 4: Experience ————————————————————————— */}
              {step === 4 && (
                <div className="space-y-5">
                  <div>
                    <h2 className="text-lg font-bold text-gray-900 mb-1">Where are you right now?</h2>
                    <p className="text-sm text-gray-500">Your experience level helps us tailor the right plan.</p>
                  </div>
                  <div className="space-y-2.5">
                    {[
                      { v: "first-time", label: "First time",        sub: "Never sourced or sold a product before" },
                      { v: "selling",    label: "Already selling",    sub: "I have products but want my own brand" },
                      { v: "scaling",    label: "Scaling a business", sub: "Established \u2014 want better supply chain or new line" },
                    ].map((opt) => (
                      <OptionButton key={opt.v} selected={data.experience === opt.v} onClick={() => set("experience")(opt.v)}>
                        <div>
                          <p className="font-semibold text-gray-900">{opt.label}</p>
                          <p className="text-xs text-gray-400 mt-0.5 font-normal">{opt.sub}</p>
                        </div>
                      </OptionButton>
                    ))}
                  </div>
                </div>
              )}

              {/* —— STEP 5: Timeline ——————————————————————————— */}
              {step === 5 && (
                <div className="space-y-5">
                  <div>
                    <h2 className="text-lg font-bold text-gray-900 mb-1">What&apos;s your timeline?</h2>
                    <p className="text-sm text-gray-500">Helps us plan the right execution pace for your project.</p>
                  </div>
                  <div className="space-y-2.5">
                    {[
                      { v: "asap",       label: "As soon as possible", sub: "I want to move fast and launch quickly" },
                      { v: "1-3-months", label: "1\u20133 months",      sub: "I have some time to plan properly" },
                      { v: "exploring",  label: "Just exploring",       sub: "Not in a rush \u2014 still researching" },
                    ].map((opt) => (
                      <OptionButton key={opt.v} selected={data.timeline === opt.v} onClick={() => set("timeline")(opt.v)}>
                        <div>
                          <p className="font-semibold text-gray-900">{opt.label}</p>
                          <p className="text-xs text-gray-400 mt-0.5 font-normal">{opt.sub}</p>
                        </div>
                      </OptionButton>
                    ))}
                  </div>
                </div>
              )}

              {/* —— STEP 6: Description ——————————————————————— */}
              {step === 6 && (
                <div className="space-y-5">
                  <div>
                    <h2 className="text-lg font-bold text-gray-900 mb-1">Anything else?</h2>
                    <p className="text-sm text-gray-500">
                      Share any details, context, or questions that will help us understand your project better.
                      This is optional &mdash; but the more you tell us, the better we can help.
                    </p>
                  </div>
                  <div>
                    <FieldLabel>Describe your project</FieldLabel>
                    <textarea
                      value={data.description}
                      onChange={(e) => set("description")(e.target.value)}
                      placeholder="Tell us anything that's relevant — your market, target customer, similar brands you like, specific concerns..."
                      rows={6}
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-gray-900 placeholder:text-gray-400 text-[15px] resize-none"
                    />
                  </div>

                  {/* Summary of answers */}
                  <div className="rounded-xl border border-gray-100 bg-gray-50 p-5 space-y-2">
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">Your answers</p>
                    {[
                      { label: "Product",    value: data.product },
                      { label: "Budget",     value: { "under-1k": "Under $1,000", "1k-5k": "$1,000\u2013$5,000", "5k-plus": "$5,000+" }[data.budget] ?? data.budget },
                      { label: "Experience", value: { "first-time": "First time", selling: "Already selling", scaling: "Scaling" }[data.experience] ?? data.experience },
                      { label: "Timeline",   value: { asap: "ASAP", "1-3-months": "1\u20133 months", exploring: "Just exploring" }[data.timeline] ?? data.timeline },
                    ].map((row) => (
                      <div key={row.label} className="flex items-baseline justify-between gap-4">
                        <span className="text-xs text-gray-400 flex-shrink-0">{row.label}</span>
                        <span className="text-xs font-medium text-gray-700 text-right">{row.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Error message */}
            {submitError && (
              <div className="mt-4 rounded-xl border border-red-200 bg-red-50 px-5 py-3.5 text-sm text-red-700">
                {submitError}
              </div>
            )}

            {/* Navigation buttons */}
            <div className="mt-5 flex items-center gap-3">
              {step > 1 && (
                <button
                  type="button"
                  onClick={back}
                  className="flex items-center gap-2 px-5 py-3.5 rounded-xl border border-gray-200 bg-white text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <ArrowLeftIcon className="w-3.5 h-3.5" />
                  Back
                </button>
              )}

              {step < TOTAL_STEPS ? (
                <button
                  type="button"
                  onClick={next}
                  disabled={!canAdvance}
                  className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl bg-blue-600 text-[15px] font-bold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Continue
                  <ArrowRightIcon className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl bg-blue-600 text-[15px] font-bold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? "Submitting\u2026" : "Submit Application"}
                  {!submitting && <ArrowRightIcon className="w-4 h-4" />}
                </button>
              )}
            </div>

            {/* Reassurance */}
            <p className="mt-4 text-center text-xs text-gray-400">
              Free review &middot; No payment required &middot; We respond within 24 hours
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
