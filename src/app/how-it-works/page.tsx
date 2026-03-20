// app/how-it-works/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "How It Works | Fujma Limited",
  description:
    "A clear, step-by-step process — from your idea to a fully operational business. Fujma handles sourcing, logistics, legal setup, and brand creation end to end.",
};

/* ─────────────────────────────────────────────────────────────────
   ICONS
   ───────────────────────────────────────────────────────────────── */

function ArrowRightIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  );
}

function CheckIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

function SearchIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
  );
}

function MapIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
    </svg>
  );
}

function CogIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function ShieldIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  );
}

function RocketIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
    </svg>
  );
}

function TruckIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
    </svg>
  );
}

function BuildingIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
    </svg>
  );
}

function TrademarkIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
    </svg>
  );
}

function ChartIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6.75v6.75" />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────
   REUSABLE
   ───────────────────────────────────────────────────────────────── */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-sm font-bold uppercase tracking-widest text-blue-600">
      {children}
    </p>
  );
}

/* ─────────────────────────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────────────────────────── */

const STEPS = [
  {
    number: "01",
    icon: <SearchIcon className="w-5 h-5" />,
    title: "Discovery",
    description:
      "We start by understanding your project in full — your product, target market, timeline, and goals. This free session gives us everything we need to map the right path forward.",
    detail: "Free consultation · No commitment required",
  },
  {
    number: "02",
    icon: <MapIcon className="w-5 h-5" />,
    title: "Strategy & Setup",
    description:
      "We build your operational plan: supplier identification, legal structure, logistics route, and compliance requirements. Every cost is disclosed upfront in writing before we proceed.",
    detail: "Full cost transparency · Written plan provided",
  },
  {
    number: "03",
    icon: <CogIcon className="w-5 h-5" />,
    title: "Execution",
    description:
      "We execute on your behalf — factory negotiations, company registration filings, trademark applications, freight bookings, and customs documentation. One team handles everything.",
    detail: "Dedicated project manager · Daily updates available",
  },
  {
    number: "04",
    icon: <ShieldIcon className="w-5 h-5" />,
    title: "Control & Quality",
    description:
      "Before anything ships or finalizes, we verify it. Pre-shipment inspections, document checks, and compliance reviews ensure no surprises reach you.",
    detail: "100% pre-shipment inspection · No surprises",
  },
  {
    number: "05",
    icon: <RocketIcon className="w-5 h-5" />,
    title: "Delivery & Scale",
    description:
      "Your product reaches your market on schedule. We debrief on the operation, identify optimizations, and set up the right structure for your next order or expansion.",
    detail: "Post-delivery review · Ongoing support available",
  },
];

const SERVICES = [
  { icon: <SearchIcon className="w-4 h-4" />, label: "Product Sourcing from China" },
  { icon: <TruckIcon className="w-4 h-4" />, label: "Import & Export Operations" },
  { icon: <BuildingIcon className="w-4 h-4" />, label: "Hong Kong Company Formation" },
  { icon: <TrademarkIcon className="w-4 h-4" />, label: "Trademark Registration" },
  { icon: <ChartIcon className="w-4 h-4" />, label: "Business Growth Consulting" },
];

const WHY_IT_WORKS = [
  {
    title: "Clear structure from day one",
    body: "You know exactly what happens at each stage, who is responsible, and what to expect — before we start.",
  },
  {
    title: "No guesswork, no surprises",
    body: "Every cost, timeline, and deliverable is confirmed in writing before execution begins. Nothing moves without your approval.",
  },
  {
    title: "One partner, full accountability",
    body: "You work with a single team that is accountable for the complete operation — not three vendors pointing at each other.",
  },
  {
    title: "You stay in control",
    body: "We handle the complexity, but every decision point comes back to you. You approve before we act.",
  },
];

/* ─────────────────────────────────────────────────────────────────
   PAGE
   ───────────────────────────────────────────────────────────────── */

export default function HowItWorksPage() {
  return (
    <>
      <Header />
      <main className="bg-white pt-[72px]">

        {/* ════════════════════════════════════════════════════════════
            § 1 — HERO
           ════════════════════════════════════════════════════════════ */}
        <section className="relative overflow-hidden bg-[#F8FAFC] border-b border-gray-100">
          {/* Dot grid */}
          <div
            className="absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage: "radial-gradient(circle, #CBD5E1 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F8FAFC]/50 to-[#F8FAFC]" />

          <div className="relative mx-auto max-w-7xl px-6 py-24 text-center lg:px-8 lg:py-32">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm font-medium text-gray-500 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              Simple &middot; Transparent &middot; Accountable
            </div>

            <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
              How We Work
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-500">
              A clear, step-by-step process — from your idea to a fully
              operational business. No confusion, no hidden steps, no surprises.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 text-[15px] font-semibold text-white shadow-lg shadow-blue-600/20 transition-all hover:bg-blue-700 hover:-translate-y-px"
              >
                Start Your Project
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-7 py-3.5 text-[15px] font-semibold text-gray-700 shadow-sm transition-all hover:border-gray-300 hover:bg-gray-50"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            § 2 — PROCESS STEPS
           ════════════════════════════════════════════════════════════ */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="mx-auto max-w-2xl text-center mb-16">
              <SectionLabel>The Process</SectionLabel>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                5 steps from brief to delivery
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Every project follows the same structured approach — whether
                you&apos;re sourcing a product, registering a company, or building
                a brand.
              </p>
            </div>

            {/* Vertical step list */}
            <div className="mx-auto max-w-3xl">
              <div className="relative">
                {/* Vertical connector line */}
                <div className="absolute left-[1.875rem] top-10 bottom-10 w-px bg-gray-100 hidden sm:block" />

                <div className="space-y-5">
                  {STEPS.map((step, index) => (
                    <div
                      key={step.number}
                      className="relative flex gap-5 sm:gap-7"
                    >
                      {/* Step circle */}
                      <div className="relative z-10 flex-shrink-0">
                        <div className={`flex h-[3.75rem] w-[3.75rem] items-center justify-center rounded-full border-2 text-sm font-bold transition-colors ${
                          index === 0
                            ? "border-blue-600 bg-blue-600 text-white"
                            : "border-gray-200 bg-white text-gray-400"
                        }`}>
                          {step.number}
                        </div>
                      </div>

                      {/* Card */}
                      <div className={`flex-1 rounded-2xl border p-6 sm:p-7 transition-all mb-0 ${
                        index === 0
                          ? "border-blue-100 bg-blue-50/40 shadow-sm"
                          : "border-gray-100 bg-white shadow-sm hover:shadow-md hover:border-gray-200"
                      }`}>
                        <div className="flex items-start justify-between gap-4 flex-wrap">
                          <div className="flex items-center gap-3">
                            <span className={`rounded-lg p-2 ${
                              index === 0 ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-500"
                            }`}>
                              {step.icon}
                            </span>
                            <h3 className="text-[17px] font-bold text-gray-900">
                              {step.title}
                            </h3>
                          </div>
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-500">
                            Step {step.number}
                          </span>
                        </div>

                        <p className="mt-3 text-[15px] leading-relaxed text-gray-600">
                          {step.description}
                        </p>

                        <p className="mt-3 flex items-center gap-1.5 text-xs font-medium text-gray-400">
                          <CheckIcon className={`w-3.5 h-3.5 flex-shrink-0 ${index === 0 ? "text-blue-500" : "text-emerald-500"}`} />
                          {step.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            § 3 — WHAT THIS PROCESS INCLUDES
           ════════════════════════════════════════════════════════════ */}
        <section className="bg-gray-50 border-y border-gray-100 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-5xl">
              <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">

                {/* Left */}
                <div>
                  <SectionLabel>What This Covers</SectionLabel>
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Every service. One process.
                  </h2>
                  <p className="mt-4 text-[17px] leading-relaxed text-gray-500">
                    This five-step framework applies across all of our services.
                    Whether you&apos;re placing your first order from China or
                    registering a company in Hong Kong, the structure remains the
                    same: discovery, planning, execution, verification, delivery.
                  </p>
                  <Link
                    href="/services"
                    className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    See all services
                    <ArrowRightIcon className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {/* Right — service tiles */}
                <div className="grid grid-cols-1 gap-3">
                  {SERVICES.map((service) => (
                    <div
                      key={service.label}
                      className="flex items-center gap-4 rounded-xl border border-gray-100 bg-white px-5 py-4 shadow-sm"
                    >
                      <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                        {service.icon}
                      </span>
                      <span className="text-sm font-semibold text-gray-800">
                        {service.label}
                      </span>
                      <CheckIcon className="ml-auto w-3.5 h-3.5 flex-shrink-0 text-emerald-500" />
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            § 4 — WHY THIS PROCESS WORKS
           ════════════════════════════════════════════════════════════ */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="mx-auto max-w-2xl text-center mb-12">
              <SectionLabel>Why It Works</SectionLabel>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Structure removes risk
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Most import and brand-building projects fail because of unclear
                responsibilities and hidden costs. Our process is designed to
                eliminate both.
              </p>
            </div>

            <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
              {WHY_IT_WORKS.map((item, i) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm"
                >
                  <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-sm font-bold text-blue-600">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mb-2 text-[15px] font-bold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-500">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            § 5 — FINAL CTA
           ════════════════════════════════════════════════════════════ */}
        <section className="py-20 sm:py-24 bg-gray-50 border-t border-gray-100">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl overflow-hidden rounded-3xl bg-[#0B1120] px-8 py-16 text-center sm:px-16 relative">
              {/* Glow */}
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background: "radial-gradient(ellipse 70% 60% at 50% 40%, rgba(59,130,246,0.10), transparent)",
                }}
              />
              {/* Dot grid */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
                }}
              />

              <div className="relative">
                <p className="mb-4 text-sm font-bold uppercase tracking-widest text-blue-400">
                  Let&apos;s get started
                </p>
                <h2 className="text-3xl font-bold text-white sm:text-4xl">
                  Ready to start your project?
                </h2>
                <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-gray-400">
                  Step one is a free discovery session. Tell us what you&apos;re
                  building and we&apos;ll outline the full plan — at no cost and
                  with no commitment.
                </p>

                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <Link
                    href="/contact-us"
                    className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-blue-600 px-8 py-4 text-[15px] font-bold text-white shadow-xl shadow-blue-600/25 transition-all hover:bg-blue-700 hover:-translate-y-px"
                  >
                    Start Your Project
                    <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                  <Link
                    href="/contact-us"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-[15px] font-semibold text-white transition-all hover:bg-white/10 hover:border-white/20"
                  >
                    Book a Consultation
                  </Link>
                </div>

                <p className="mt-6 text-sm text-gray-600">
                  Free discovery call &middot; No commitment &middot; Reply within 24 hours
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
