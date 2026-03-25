"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/* ——— ICONS ————————————————————————————————————————————————————— */

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

/* ——— FORM TYPES ———————————————————————————————————————————————— */

type FormData = {
  fullName: string;
  email: string;
  stage: string;
  helpWith: string;
  budget: string;
  description: string;
};

const INITIAL: FormData = {
  fullName: "",
  email: "",
  stage: "",
  helpWith: "",
  budget: "",
  description: "",
};

const TOTAL_STEPS = 3;
const STEP_LABELS = ["Contact Info", "Your Business", "Project Details"];

/* ——— REUSABLE FIELD COMPONENTS ————————————————————————————————— */

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

/* ——— STATIC DATA ——————————————————————————————————————————————— */

const WHO_IS_FOR = [
  { title: "Ecommerce Founders", desc: "Launching or growing an online store with products from China." },
  { title: "Product-Based Businesses", desc: "Physical product brands looking for reliable manufacturing partners." },
  { title: "Beginners with an Idea", desc: "First-time entrepreneurs ready to turn an idea into a real product." },
  { title: "Brands Looking to Scale", desc: "Established brands that need better supply chain and new product lines." },
];

const WHAT_YOU_GET = [
  { title: "Product Validation", desc: "We help you validate your product idea before committing capital." },
  { title: "Supplier Sourcing", desc: "Direct access to vetted factories and manufacturers in China." },
  { title: "Branding Direction", desc: "Logo, packaging, and brand identity tailored to your market." },
  { title: "Logistics & Import", desc: "End-to-end shipping, customs, and import strategy handled for you." },
  { title: "Growth Plan", desc: "A clear roadmap to launch, sell, and scale your product business." },
];

const TRUST_STATS = [
  { value: "500+", label: "Products Sourced" },
  { value: "Direct", label: "Factory Access in China" },
  { value: "End-to-End", label: "Full Service" },
];

/* ——— PAGE COMPONENT ———————————————————————————————————————————— */

export default function ConsultationPage() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormData>(INITIAL);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const showForm = step > 0;

  const set = (field: keyof FormData) => (value: string) =>
    setData((prev) => ({ ...prev, [field]: value }));

  const canAdvance = (() => {
    if (step === 1) return data.fullName.trim() && data.email.trim();
    if (step === 2) return !!data.stage && !!data.helpWith;
    if (step === 3) return !!data.budget;
    return false;
  })();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: data.fullName,
          email: data.email,
          interest: `${data.stage} \u2014 ${data.helpWith}`,
          message: `Budget: ${data.budget}\n\n${data.description || "(No additional details)"}`,
          source: "consultation-page",
        }),
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

  /* ---------- SUCCESS STATE ---------- */
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
            <h1 className="text-2xl font-bold text-gray-900 mb-3">Application Received!</h1>
            <p className="text-gray-500 leading-relaxed mb-8">
              Thank you, {data.fullName.split(" ")[0]}! Our team will review your application and
              contact you within <span className="font-semibold text-gray-700">24 hours</span>.
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
        <Footer />
      </>
    );
  }

  /* ---------- FORM STEPS ---------- */
  if (showForm) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-gray-50 pt-[72px]">
          {/* Top bar */}
          <div className="bg-white border-b border-gray-100 px-6 py-4">
            <div className="mx-auto max-w-2xl flex items-center justify-between">
              <button
                type="button"
                onClick={() => setStep(0)}
                className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 transition-colors"
              >
                <ArrowLeftIcon className="w-3.5 h-3.5" />
                Back to Overview
              </button>
              <span className="text-sm font-medium text-gray-400">
                Step {step} of {TOTAL_STEPS}
              </span>
            </div>
          </div>

          <div className="mx-auto max-w-2xl px-6 py-12">
            {/* Header */}
            <div className="text-center mb-10">
              <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">Apply for Consultation</h1>
              <p className="mt-2 text-gray-500 text-sm">
                Tell us about your business. We&apos;ll review and get back within 24 hours.
              </p>
            </div>

            {/* Progress bar */}
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

                {/* STEP 1: Contact Info */}
                {step === 1 && (
                  <div className="space-y-5">
                    <div>
                      <h2 className="text-lg font-bold text-gray-900 mb-1">Let&apos;s start with you</h2>
                      <p className="text-sm text-gray-500">So we know who we&apos;re working with.</p>
                    </div>
                    <div>
                      <FieldLabel required>Full Name</FieldLabel>
                      <TextInput value={data.fullName} onChange={set("fullName")} placeholder="Your full name" required />
                    </div>
                    <div>
                      <FieldLabel required>Email Address</FieldLabel>
                      <TextInput value={data.email} onChange={set("email")} placeholder="you@email.com" type="email" required />
                    </div>
                  </div>
                )}

                {/* STEP 2: Business Stage & Need */}
                {step === 2 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-lg font-bold text-gray-900 mb-1">Tell us about your business</h2>
                      <p className="text-sm text-gray-500">This helps us tailor the consultation to your situation.</p>
                    </div>

                    <div>
                      <FieldLabel required>What is your business stage?</FieldLabel>
                      <div className="space-y-2.5 mt-1">
                        {[
                          { v: "idea", label: "Idea Stage", sub: "I have a product idea but haven\u2019t started yet" },
                          { v: "started", label: "Just Started", sub: "I\u2019ve launched but still finding my footing" },
                          { v: "scaling", label: "Scaling", sub: "Things are working \u2014 I need to grow faster" },
                        ].map((opt) => (
                          <OptionButton key={opt.v} selected={data.stage === opt.v} onClick={() => set("stage")(opt.v)}>
                            <div>
                              <p className="font-semibold text-gray-900">{opt.label}</p>
                              <p className="text-xs text-gray-400 mt-0.5 font-normal">{opt.sub}</p>
                            </div>
                          </OptionButton>
                        ))}
                      </div>
                    </div>

                    <div>
                      <FieldLabel required>What do you need help with?</FieldLabel>
                      <div className="space-y-2.5 mt-1">
                        {[
                          { v: "sourcing", label: "Supplier Sourcing", sub: "Find reliable factories and manufacturers" },
                          { v: "branding", label: "Branding & Packaging", sub: "Build a brand identity from scratch" },
                          { v: "logistics", label: "Logistics & Import", sub: "Shipping, customs, and delivery" },
                          { v: "scaling", label: "Full Growth Strategy", sub: "Everything \u2014 sourcing, branding, logistics, and sales" },
                        ].map((opt) => (
                          <OptionButton key={opt.v} selected={data.helpWith === opt.v} onClick={() => set("helpWith")(opt.v)}>
                            <div>
                              <p className="font-semibold text-gray-900">{opt.label}</p>
                              <p className="text-xs text-gray-400 mt-0.5 font-normal">{opt.sub}</p>
                            </div>
                          </OptionButton>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 3: Budget & Description */}
                {step === 3 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-lg font-bold text-gray-900 mb-1">Almost done!</h2>
                      <p className="text-sm text-gray-500">Help us understand your budget and project scope.</p>
                    </div>

                    <div>
                      <FieldLabel required>Monthly budget range</FieldLabel>
                      <div className="space-y-2.5 mt-1">
                        {[
                          { v: "under-1k", label: "Under $1,000", sub: "Starting lean and testing the waters" },
                          { v: "1k-5k", label: "$1,000 \u2013 $5,000", sub: "Ready to invest in a solid foundation" },
                          { v: "5k-10k", label: "$5,000 \u2013 $10,000", sub: "Serious about scaling quickly" },
                          { v: "10k-plus", label: "$10,000+", sub: "Ready for full-scale operations" },
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

                    <div>
                      <FieldLabel>Describe your project</FieldLabel>
                      <textarea
                        value={data.description}
                        onChange={(e) => set("description")(e.target.value)}
                        placeholder="Tell us about your product, target market, goals, or any specific questions you have..."
                        rows={5}
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-gray-900 placeholder:text-gray-400 text-[15px] resize-none"
                      />
                    </div>

                    {/* Summary */}
                    <div className="rounded-xl border border-gray-100 bg-gray-50 p-5 space-y-2">
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">Your Answers</p>
                      {[
                        { label: "Stage", value: { idea: "Idea Stage", started: "Just Started", scaling: "Scaling" }[data.stage] ?? data.stage },
                        { label: "Help With", value: { sourcing: "Supplier Sourcing", branding: "Branding & Packaging", logistics: "Logistics & Import", scaling: "Full Growth Strategy" }[data.helpWith] ?? data.helpWith },
                        { label: "Budget", value: { "under-1k": "Under $1,000", "1k-5k": "$1,000\u2013$5,000", "5k-10k": "$5,000\u2013$10,000", "10k-plus": "$10,000+" }[data.budget] ?? data.budget },
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

              {/* Error */}
              {submitError && (
                <div className="mt-4 rounded-xl border border-red-200 bg-red-50 px-5 py-3.5 text-sm text-red-700">
                  {submitError}
                </div>
              )}

              {/* Navigation */}
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

              <p className="mt-4 text-center text-xs text-gray-400">
                Free consultation \u00b7 No payment required \u00b7 We respond within 24 hours
              </p>
            </form>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  /* ---------- LANDING PAGE (step === 0) ---------- */
  return (
    <>
      <Header />
      <div className="pt-[72px]">

        {/* ——— HERO ——————————————————————————————————————————————— */}
        <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-400 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          </div>

          <div className="relative mx-auto max-w-5xl px-6 py-24 sm:py-32 text-center">
            <span className="inline-block rounded-full bg-blue-500/20 border border-blue-400/30 px-4 py-1.5 text-xs font-semibold text-blue-300 tracking-wide uppercase mb-6">
              Free Business Consultation
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              Scale Your Brand with{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                China Experts
              </span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              We help you build, source, and scale your product business from China.
              Get a personalized growth plan from our team.
            </p>
            <button
              type="button"
              onClick={() => setStep(1)}
              className="mt-10 inline-flex items-center gap-2.5 rounded-xl bg-blue-600 px-8 py-4 text-base font-bold text-white shadow-xl shadow-blue-600/25 hover:bg-blue-700 hover:shadow-blue-600/30 transition-all"
            >
              Apply for Consultation
              <ArrowRightIcon className="w-5 h-5" />
            </button>
            <p className="mt-4 text-sm text-gray-400">
              No payment required \u00b7 Get a response within 24 hours
            </p>
          </div>
        </section>

        {/* ——— WHO THIS IS FOR ——————————————————————————————————— */}
        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-5xl px-6">
            <div className="text-center mb-14">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Who This Is For</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-gray-900">
                Built for Product Entrepreneurs
              </h2>
              <p className="mt-3 text-gray-500 max-w-xl mx-auto">
                Whether you&apos;re starting from scratch or scaling an existing brand, this consultation is designed for you.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              {WHO_IS_FOR.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-gray-100 bg-gray-50 p-6 hover:border-blue-200 hover:bg-blue-50/30 transition-all"
                >
                  <h3 className="text-base font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ——— WHAT YOU GET ——————————————————————————————————————— */}
        <section className="bg-gray-50 py-20 sm:py-24">
          <div className="mx-auto max-w-5xl px-6">
            <div className="text-center mb-14">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">What You Get</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-gray-900">
                A Complete Growth Strategy
              </h2>
              <p className="mt-3 text-gray-500 max-w-xl mx-auto">
                Every consultation covers these key areas to give you a clear action plan.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {WHAT_YOU_GET.map((item, i) => (
                <div
                  key={item.title}
                  className={`rounded-2xl border border-gray-100 bg-white p-6 hover:shadow-md transition-all ${
                    i === WHAT_YOU_GET.length - 1 && WHAT_YOU_GET.length % 3 !== 0
                      ? "sm:col-span-2 lg:col-span-1"
                      : ""
                  }`}
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                    <CheckIcon className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ——— TRUST / STATS ———————————————————————————————————— */}
        <section className="bg-gray-900 text-white py-16">
          <div className="mx-auto max-w-4xl px-6">
            <div className="grid grid-cols-3 gap-6 text-center">
              {TRUST_STATS.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl sm:text-4xl font-extrabold text-blue-400">{stat.value}</p>
                  <p className="mt-1 text-sm text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ——— FINAL CTA ———————————————————————————————————————— */}
        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-2xl px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Ready to Grow Your Business?
            </h2>
            <p className="mt-4 text-gray-500 leading-relaxed">
              Apply now and get a free personalized consultation with our China sourcing and branding experts.
            </p>
            <button
              type="button"
              onClick={() => setStep(1)}
              className="mt-8 inline-flex items-center gap-2.5 rounded-xl bg-blue-600 px-8 py-4 text-base font-bold text-white shadow-xl shadow-blue-600/25 hover:bg-blue-700 transition-all"
            >
              Apply for Consultation
              <ArrowRightIcon className="w-5 h-5" />
            </button>
            <p className="mt-3 text-sm text-gray-400">
              Free \u00b7 No commitment \u00b7 24-hour response
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
