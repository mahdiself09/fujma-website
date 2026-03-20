import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Import from China Without Losing Money, Time, or Control | Fujma Limited",
  description:
    "End-to-end import and export services from China to Morocco, Europe, Gulf countries, USA and worldwide. Verified suppliers, customs clearance, quality inspection, and door-to-door logistics.",
};

/* --- ICONS --- */

function CheckIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

function XIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

function ArrowRightIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  );
}

function GlobeIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A9 9 0 013 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  );
}

function ShieldIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  );
}

function TruckIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
    </svg>
  );
}

function DocIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
  );
}

function SearchIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
  );
}

function CubeIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
    </svg>
  );
}

function ClipboardIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
    </svg>
  );
}

function CurrencyIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function ClockIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function LanguageIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
    </svg>
  );
}

function ChevronDownIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

function StarIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function LockIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
    </svg>
  );
}

/* --- FAQ ACCORDION --- */

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group border-b border-gray-100 last:border-0">
      <summary className="flex cursor-pointer select-none items-center justify-between gap-4 py-6 text-left text-base font-semibold text-gray-900 transition-colors hover:text-blue-600">
        <span>{question}</span>
        <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 transition-all duration-200 group-open:rotate-180 group-open:bg-blue-50 group-open:text-blue-600">
          <ChevronDownIcon className="w-4 h-4 text-gray-400 group-open:text-blue-600" />
        </span>
      </summary>
      <div className="pb-6 text-[15px] leading-relaxed text-gray-500">{answer}</div>
    </details>
  );
}

/* --- TESTIMONIAL CARD --- */

function TestimonialCard({
  quote, name, role, country, initials, result,
}: {
  quote: string; name: string; role: string; country: string; initials: string; result: string;
}) {
  return (
    <div className="flex flex-col justify-between rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
      <div>
        <div className="flex gap-0.5 mb-5">
          {[...Array(5)].map((_, i) => (
            <StarIcon key={i} className="w-4 h-4 text-amber-400" />
          ))}
        </div>
        <p className="text-[15px] leading-relaxed text-gray-700">&ldquo;{quote}&rdquo;</p>
      </div>
      <div className="mt-6">
        <div className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 border border-emerald-100">
          <CheckIcon className="w-3 h-3" />
          {result}
        </div>
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-400 text-sm font-bold text-white">
            {initials}
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900">{name}</p>
            <p className="text-xs text-gray-400">{role} &middot; {country}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* --- MAIN PAGE --- */

export default function ImportExportPage() {
  return (
    <>
      <Header />
      <main className="pt-[72px] bg-white">

        {/* HERO */}
        <section className="relative overflow-hidden bg-[#080E1C]">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(99,143,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(99,143,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />
          <div className="absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-white/[0.02] to-transparent" />

          <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-24 sm:pb-32 sm:pt-32 lg:px-8">
            <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-2 text-sm font-medium text-amber-300 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
              Free Sourcing Audit &mdash; Limited to 5 projects per month
            </div>

            <div className="max-w-4xl">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[3.5rem] lg:leading-[1.1]">
                Import from China
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-300">
                  Without Losing Money,
                </span>
                <br />
                <span className="text-white">Time, or Control.</span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-gray-400 sm:text-xl">
                Most entrepreneurs lose{" "}
                <span className="font-semibold text-white">thousands of dollars</span>{" "}
                to bad suppliers, surprise customs fees, and shipments that never arrive as promised.
                Fujma eliminates every one of those risks &mdash; with a dedicated team on the ground in China,
                handling everything from factory vetting to your warehouse door.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href="/contact-us"
                  className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-amber-500 px-8 py-4 text-base font-bold text-gray-900 shadow-xl shadow-amber-500/25 transition-all hover:bg-amber-400 hover:shadow-amber-400/35 hover:-translate-y-px"
                >
                  Get My Free Sourcing Audit
                  <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href="/contact-us"
                  className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20"
                >
                  Book a Strategy Call
                </a>
              </div>

              <p className="mt-4 flex items-center gap-2 text-sm text-gray-600">
                <LockIcon className="w-4 h-4 text-gray-500" />
                No commitment. No credit card. We review your project and tell you exactly what&apos;s possible.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-gray-500">
                <span className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 text-emerald-400" />
                  On-the-ground team in China
                </span>
                <span className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 text-emerald-400" />
                  Customs cleared &mdash; zero surprises
                </span>
                <span className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 text-emerald-400" />
                  100% pre-shipment inspection
                </span>
                <span className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 text-emerald-400" />
                  No hidden fees &mdash; ever
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* STATS BAR */}
        <section className="border-b border-gray-100 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
              {[
                { value: "500+", label: "Products Shipped", sub: "across 12 countries" },
                { value: "97%", label: "On-Time Delivery Rate", sub: "tracked and verified" },
                { value: "$0", label: "Hidden Fees", sub: "transparent pricing, always" },
                { value: "100%", label: "Pre-Shipment Inspected", sub: "nothing ships unverified" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{s.value}</p>
                  <p className="mt-1 text-sm font-medium text-gray-700">{s.label}</p>
                  <p className="mt-0.5 text-xs text-gray-400">{s.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROBLEM vs SOLUTION */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-bold uppercase tracking-widest text-blue-600">Why Most Imports Fail</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                The real cost of importing alone
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Over 60% of first-time importers face at least one costly incident.
                Every problem below is preventable &mdash; if you have the right partner.
              </p>
            </div>

            <div className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-2">
              {/* Pain Side */}
              <div className="rounded-2xl border border-red-100 bg-red-50/60 p-8">
                <div className="mb-6 flex items-center gap-2">
                  <span className="rounded-lg bg-red-100 p-2 text-red-500">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                  </span>
                  <h3 className="font-bold text-red-900">Importing on your own</h3>
                </div>
                <ul className="space-y-3.5">
                  {[
                    "Scammed by Alibaba suppliers who disappear after payment",
                    "Products arrive damaged, wrong spec, or 3 months late",
                    "Customs holds your shipment — no one explains why",
                    "Freight forwarder adds fees you never agreed to",
                    "Language barrier causes costly misunderstandings",
                    "No accountability when something goes wrong",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <XIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-400" />
                      <span className="text-sm leading-relaxed text-red-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solution Side */}
              <div className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-8">
                <div className="mb-6 flex items-center gap-2">
                  <span className="rounded-lg bg-emerald-100 p-2 text-emerald-600">
                    <ShieldIcon className="w-5 h-5" />
                  </span>
                  <h3 className="font-bold text-emerald-900">With Fujma as your partner</h3>
                </div>
                <ul className="space-y-3.5">
                  {[
                    "We vet every factory personally — fraudulent suppliers never reach you",
                    "Pre-shipment inspection confirms quality before a single unit leaves China",
                    "We prepare every customs document — clearance is handled, not hoped for",
                    "All fees disclosed upfront in writing — you approve before we act",
                    "Multilingual team bridges every communication gap (EN / AR / FR / ZH)",
                    "One dedicated manager accountable to you from order to delivery",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500" />
                      <span className="text-sm leading-relaxed text-emerald-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-blue-100 bg-blue-50/50 px-8 py-7">
              <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:text-left">
                <ShieldIcon className="h-8 w-8 flex-shrink-0 text-blue-600" />
                <div>
                  <p className="font-bold text-blue-900 text-base">
                    Our guarantee: If we don&apos;t find you verified suppliers that meet your specs, you don&apos;t pay.
                  </p>
                  <p className="mt-1 text-sm text-blue-700">
                    We absorb the sourcing risk so you can move forward with confidence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="bg-gray-50 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-bold uppercase tracking-widest text-blue-600">The Process</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                From idea to your warehouse in 6 steps
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                You stay fully informed at every stage. We do the heavy lifting &mdash; you make the decisions.
              </p>
            </div>

            <div className="relative mx-auto mt-16 max-w-5xl">
              <div className="absolute left-[8.33%] right-[8.33%] top-[2.2rem] hidden h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent md:block" />
              <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
                {[
                  { step: "01", title: "Free Audit", desc: "We assess your product, market, and goals — and tell you exactly what's achievable.", time: "Day 1" },
                  { step: "02", title: "Supplier Search", desc: "We identify and background-check 3–5 factories that fit your specs and budget.", time: "Days 2–5" },
                  { step: "03", title: "Price & Terms", desc: "We negotiate the best unit price, MOQ, and payment terms on your behalf.", time: "Week 1–2" },
                  { step: "04", title: "Quality Control", desc: "Pre-shipment inspection with photo/video report. Nothing ships unverified.", time: "Before shipping" },
                  { step: "05", title: "Customs & Docs", desc: "Every certificate, HS code, and declaration prepared for your destination country.", time: "Pre-departure" },
                  { step: "06", title: "Delivery", desc: "Air or sea freight with live tracking and customs clearance to your door.", time: "4–8 weeks" },
                ].map((item) => (
                  <div key={item.step} className="relative flex flex-col items-center text-center">
                    <div className="relative z-10 flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full bg-white text-base font-bold text-blue-600 shadow-md ring-4 ring-blue-50">
                      {item.step}
                    </div>
                    <span className="mt-3 inline-block rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-semibold text-blue-600">
                      {item.time}
                    </span>
                    <h3 className="mt-3 text-sm font-bold text-gray-900">{item.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-gray-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-16 text-center">
              <a
                href="/contact-us"
                className="inline-flex items-center gap-2.5 rounded-xl bg-blue-600 px-8 py-4 text-base font-bold text-white shadow-lg shadow-blue-600/20 transition-all hover:bg-blue-700 hover:-translate-y-px"
              >
                Start Your Import Project
                <ArrowRightIcon className="w-4 h-4" />
              </a>
              <p className="mt-3 text-sm text-gray-400">First audit is free &mdash; no obligation to proceed</p>
            </div>
          </div>
        </section>

        {/* MARKETS WE SERVE */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-bold uppercase tracking-widest text-blue-600">Global Reach</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                We know your market&apos;s rules &mdash; before you ask
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Every destination has unique customs requirements, compliance standards, and logistics
                challenges. We&apos;ve navigated them all.
              </p>
            </div>

            <div className="mx-auto mt-14 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {/* Morocco — featured */}
              <div className="relative overflow-hidden rounded-2xl bg-[#080E1C] p-8 text-white shadow-xl lg:col-span-1">
                <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl" />
                <div className="relative">
                  <div className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-amber-400/15 px-3 py-1 text-xs font-bold text-amber-400 border border-amber-400/20">
                    Primary Market
                  </div>
                  <div className="mb-2 text-2xl">🇲🇦</div>
                  <h3 className="text-xl font-bold text-white">Morocco</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-400">
                    Our largest and most active corridor. We navigate ADII regulations,
                    conformity certificates (COC/TÜV), and inland delivery across every major Moroccan city.
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    {[
                      "Casablanca & Tanger Med expertise",
                      "ADII & COC/TÜV compliance",
                      "Arabic & French communication",
                      "Nationwide last-mile delivery",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
                        <CheckIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Europe */}
              <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
                <div className="mb-2 text-2xl">🇪🇺</div>
                <h3 className="text-xl font-bold text-gray-900">Europe</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  CE marking, REACH compliance, and EU customs declarations. We serve brands
                  shipping to France, Spain, Italy, Netherlands, and beyond.
                </p>
                <ul className="mt-5 space-y-2.5">
                  {[
                    "CE, REACH & RoHS documentation",
                    "EU VAT and duties optimization",
                    "Major port network access (Rotterdam, Le Havre, Barcelona)",
                    "English & French support",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Gulf */}
              <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
                <div className="mb-2 text-2xl">🇦🇪</div>
                <h3 className="text-xl font-bold text-gray-900">Gulf Countries</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  UAE, Saudi Arabia, Qatar, Kuwait. We navigate SASO, ESMA, and GSO
                  certifications that trip up most first-time Gulf importers.
                </p>
                <ul className="mt-5 space-y-2.5">
                  {[
                    "SASO, ESMA & GSO certifications",
                    "Jebel Ali, Jeddah & Riyadh corridors",
                    "Arabic-speaking coordination",
                    "Free zone import optimization",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* USA */}
              <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
                <div className="mb-2 text-2xl">🇺🇸</div>
                <h3 className="text-xl font-bold text-gray-900">United States</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  FCC, FDA, and CPSC compliance for consumer goods. We coordinate
                  with US customs brokers for smooth Section 321 and standard entry.
                </p>
                <ul className="mt-5 space-y-2.5">
                  {[
                    "FCC, FDA & CPSC compliance",
                    "Amazon FBA-ready prep",
                    "Section 321 de minimis",
                    "US customs broker coordination",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Rest of World */}
              <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
                <div className="mb-2 text-2xl">🌍</div>
                <h3 className="text-xl font-bold text-gray-900">Rest of the World</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  Africa, Southeast Asia, Latin America. Wherever your market is,
                  our logistics network and compliance expertise travel with you.
                </p>
                <ul className="mt-5 space-y-2.5">
                  {[
                    "12+ active shipping corridors",
                    "Air & sea freight options",
                    "Local customs agent network",
                    "Flexible Incoterms (EXW to DDP)",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA card */}
              <div className="flex flex-col items-center justify-center rounded-2xl bg-blue-600 p-8 text-center text-white shadow-xl shadow-blue-600/20">
                <GlobeIcon className="mb-4 h-10 w-10 text-blue-200" />
                <h3 className="text-xl font-bold">Your market is covered.</h3>
                <p className="mt-3 text-sm leading-relaxed text-blue-100">
                  Tell us where you&apos;re shipping and we&apos;ll outline your exact import pathway &mdash; free.
                </p>
                <a
                  href="/contact-us"
                  className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-bold text-blue-700 transition-all hover:bg-blue-50"
                >
                  Check My Route
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES BREAKDOWN */}
        <section className="bg-gray-50 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-bold uppercase tracking-widest text-blue-600">What We Handle</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                End-to-end. So you don&apos;t have to.
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Every part of your import operation is covered. You never chase a supplier,
                decode a customs document, or track a shipment alone.
              </p>
            </div>

            <div className="mx-auto mt-14 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: <SearchIcon className="w-6 h-6" />,
                  title: "Supplier Sourcing & Vetting",
                  outcome: "Verified factories only",
                  items: ["3–5 pre-vetted supplier quotes", "Factory audit & background check", "Sample coordination & approval", "MOQ and lead time confirmation"],
                },
                {
                  icon: <ShieldIcon className="w-6 h-6" />,
                  title: "Quality Control & Inspection",
                  outcome: "Nothing ships unverified",
                  items: ["Pre-shipment inspection (AQL)", "Photo and video quality reports", "Defect resolution before dispatch", "Third-party lab testing on request"],
                },
                {
                  icon: <DocIcon className="w-6 h-6" />,
                  title: "Customs & Documentation",
                  outcome: "No holds, no surprises",
                  items: ["Full commercial documentation", "HS code classification", "Certificates of origin & conformity", "Destination-country compliance"],
                },
                {
                  icon: <TruckIcon className="w-6 h-6" />,
                  title: "Logistics & Shipping",
                  outcome: "Door-to-door, tracked",
                  items: ["Air and sea freight management", "Full container & LCL consolidation", "Real-time shipment tracking", "Last-mile delivery coordination"],
                },
                {
                  icon: <CubeIcon className="w-6 h-6" />,
                  title: "Cargo Consolidation",
                  outcome: "Reduce costs by up to 40%",
                  items: ["Multi-supplier order consolidation", "Shared container arrangements", "Reduced per-unit freight cost", "Single customs declaration"],
                },
                {
                  icon: <ClipboardIcon className="w-6 h-6" />,
                  title: "Supplier Negotiation",
                  outcome: "Better prices, better terms",
                  items: ["Price negotiation on your behalf", "Payment term structuring", "Contract and PO preparation", "Ongoing supplier relationship management"],
                },
              ].map((service) => (
                <div
                  key={service.title}
                  className="group rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all hover:border-blue-100 hover:shadow-md"
                >
                  <div className="mb-4 flex items-start justify-between">
                    <div className="rounded-xl bg-blue-50 p-2.5 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                      {service.icon}
                    </div>
                    <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 border border-emerald-100">
                      {service.outcome}
                    </span>
                  </div>
                  <h3 className="mb-3 text-base font-bold text-gray-900">{service.title}</h3>
                  <ul className="space-y-2">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-500">
                        <CheckIcon className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-blue-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-bold uppercase tracking-widest text-blue-600">Client Results</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Real brands. Verified results.
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                From first-time importers to scaling brands &mdash; here&apos;s what they achieved working with Fujma.
              </p>
            </div>

            <div className="mx-auto mt-14 grid max-w-5xl gap-6 sm:grid-cols-3">
              <TestimonialCard
                quote="I'd been burned twice by Alibaba suppliers. Fujma vetted my factory personally, inspected 1,200 units before shipping, and delivered on schedule. First time I've imported with zero stress."
                name="Karim B."
                role="E-commerce founder"
                country="Morocco 🇲🇦"
                initials="KB"
                result="1,200 units delivered on time"
              />
              <TestimonialCard
                quote="The quality inspection report saved me. There were defects on 8% of units that would have reached my customers. Fujma caught them, negotiated a replacement batch, and shipped within 10 days."
                name="Sara M."
                role="Beauty brand owner"
                country="France 🇫🇷"
                initials="SM"
                result="€3,200 in defect losses avoided"
              />
              <TestimonialCard
                quote="Fujma handled the CE documentation, freight, and customs clearance for my UAE market. Things I didn't even know I needed. The shipment landed at Jebel Ali without a single hold."
                name="Ahmed R."
                role="Amazon & distribution seller"
                country="UAE 🇦🇪"
                initials="AR"
                result="Zero customs holds — first shipment"
              />
            </div>

            <div className="mx-auto mt-12 max-w-4xl rounded-2xl bg-gray-50 border border-gray-100 px-8 py-6">
              <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 text-center">
                {[
                  { v: "4.9 / 5", l: "Average client rating" },
                  { v: "97%", l: "Project completion rate" },
                  { v: "50+", l: "Active brand partners" },
                  { v: "0", l: "Undisclosed fee incidents" },
                ].map((s) => (
                  <div key={s.l}>
                    <p className="text-2xl font-bold text-gray-900">{s.v}</p>
                    <p className="mt-1 text-xs text-gray-500">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* WHY FUJMA */}
        <section className="bg-gray-50 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-bold uppercase tracking-widest text-blue-600">Why Fujma</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                We&apos;re not an agency. We&apos;re your operating partner.
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                The difference between Fujma and a typical freight broker or sourcing agent
                is accountability. We don&apos;t hand you a supplier list and step back.
                We stay in the operation until your product is in your hands.
              </p>
            </div>

            <div className="mx-auto mt-14 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: <GlobeIcon className="w-6 h-6" />,
                  title: "On-the-Ground in China",
                  body: "Our team operates from Guangdong Province — the manufacturing heartland. Factory visits, supplier audits, and quality checks are done in person, not by email.",
                },
                {
                  icon: <ShieldIcon className="w-6 h-6" />,
                  title: "Zero Hidden Fees",
                  body: "Every cost is disclosed before we begin. You approve the full landed cost — product, freight, duties, and our fees — before a single order is placed.",
                },
                {
                  icon: <ClockIcon className="w-6 h-6" />,
                  title: "Speed Without Shortcuts",
                  body: "Supplier quotes in 3–5 days. Quality inspection within 48h of production completion. We move fast without sacrificing the checks that protect your money.",
                },
                {
                  icon: <CurrencyIcon className="w-6 h-6" />,
                  title: "Margin Optimization",
                  body: "We negotiate not just on price but on MOQ, payment terms, and packaging — routinely saving clients 10–20% versus what they'd achieve on their own.",
                },
                {
                  icon: <LanguageIcon className="w-6 h-6" />,
                  title: "Multilingual Team",
                  body: "We communicate in English, Arabic, French, and Mandarin Chinese. No instruction ever gets lost in translation between you and your manufacturer.",
                },
                {
                  icon: <ClipboardIcon className="w-6 h-6" />,
                  title: "Full Accountability",
                  body: "One dedicated project manager. One point of contact. Full visibility into every step. When something goes wrong, we fix it — not pass the problem back to you.",
                },
              ].map((pillar) => (
                <div key={pillar.title} className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm">
                  <div className="mb-4 inline-flex rounded-xl bg-blue-50 p-2.5 text-blue-600">
                    {pillar.icon}
                  </div>
                  <h3 className="mb-2.5 text-base font-bold text-gray-900">{pillar.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-500">{pillar.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FREE AUDIT OFFER */}
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl bg-[#080E1C] px-8 py-14 text-center sm:px-16 relative">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(99,143,255,0.07),transparent)] pointer-events-none" />
              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-1.5 text-sm font-semibold text-amber-400 mb-6">
                  Limited Availability
                </span>
                <h2 className="text-3xl font-bold text-white sm:text-4xl">
                  Start with a free sourcing audit
                </h2>
                <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-gray-400">
                  Book a 30-minute call with our trade team. We&apos;ll review your product, identify your
                  best manufacturing options, map out your customs pathway, and give you a
                  realistic landed cost estimate &mdash; completely free, no strings attached.
                </p>

                <div className="mt-8 flex flex-col items-center gap-5 sm:flex-row sm:justify-center">
                  <a
                    href="/contact-us"
                    className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-amber-500 px-9 py-4 text-base font-bold text-gray-900 shadow-xl shadow-amber-500/20 transition-all hover:bg-amber-400 hover:-translate-y-px"
                  >
                    Get My Free Sourcing Audit
                    <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                  <a
                    href="/contact-us"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl border border-white/10 bg-white/5 px-9 py-4 text-base font-semibold text-white transition-all hover:bg-white/10"
                  >
                    Book a Strategy Call
                  </a>
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-600">
                  <span className="flex items-center gap-1.5">
                    <CheckIcon className="w-3.5 h-3.5 text-emerald-400" />
                    No commitment required
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckIcon className="w-3.5 h-3.5 text-emerald-400" />
                    Free landed cost estimate
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckIcon className="w-3.5 h-3.5 text-emerald-400" />
                    Reply within 24 hours
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-gray-50 py-20 sm:py-28">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-14">
              <p className="text-sm font-bold uppercase tracking-widest text-blue-600">FAQ</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Questions we get every week
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                If you don&apos;t find your answer here, our team responds within 24 hours.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white px-8 divide-y divide-gray-100 shadow-sm">
              {[
                {
                  q: "Do I need prior import experience to work with Fujma?",
                  a: "Not at all. A significant portion of our clients are importing from China for the first time. We guide you through every decision — from product selection and supplier vetting to customs documentation and final delivery. Our role is to remove the complexity, not add to it.",
                },
                {
                  q: "What is the minimum order quantity you work with?",
                  a: "It depends on the product category and factory. For standard goods, we regularly negotiate starting orders of 100–300 units for new clients — well below what most factories advertise publicly. Our factory relationships allow us to access lower MOQs than you could achieve independently.",
                },
                {
                  q: "How do you prevent supplier fraud and product defects?",
                  a: "Every supplier we recommend has been independently verified — business license, factory registration, and where possible, an on-site visit. Before any shipment leaves China, we conduct a pre-shipment quality inspection against your specifications. If defects are found, we negotiate with the factory before releasing payment.",
                },
                {
                  q: "What does your service actually cost?",
                  a: "Our fees are disclosed upfront as part of the full landed cost calculation we provide at the start of each project. We charge a service fee for sourcing, project management, and logistics coordination. There are no hidden markups on freight or customs — you see the actual carrier rates we're billed.",
                },
                {
                  q: "How long does a typical import take, end to end?",
                  a: "From initial consultation to product delivery: typically 6–12 weeks, depending on production complexity, order quantity, and shipping method. Sea freight from China to Morocco takes approximately 25–35 days; air freight 3–7 days. We provide a project timeline at the start of every engagement.",
                },
                {
                  q: "Can you help me build a private label brand, not just import generic products?",
                  a: "Yes — brand building is actually our core specialization. We offer private label product development, custom packaging design, Hong Kong company formation, and trademark registration. Fujma is a full brand-building partner, not simply a freight or sourcing agent.",
                },
                {
                  q: "What happens if something goes wrong with the shipment?",
                  a: "You have a dedicated project manager accountable to you throughout. If a shipment is delayed, held at customs, or arrives with issues, we manage the resolution directly with the carrier, customs authority, or supplier. We don't pass problems back to you to solve.",
                },
              ].map((faq) => (
                <FAQItem key={faq.q} question={faq.q} answer={faq.a} />
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="relative overflow-hidden bg-[#080E1C] py-24 sm:py-32">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(99,143,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(99,143,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />
          <div className="absolute top-1/2 left-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-400 mb-4">
              Ready to Import with Confidence?
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl leading-tight">
              Your next product is sitting
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-400">
                in a factory in China right now.
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-gray-400">
              The question is whether it reaches you safely, on time, and at a price that
              protects your margin. Start with a free audit &mdash; we&apos;ll map the entire operation for you.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="/contact-us"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-amber-500 px-9 py-4 text-base font-bold text-gray-900 shadow-xl shadow-amber-500/20 transition-all hover:bg-amber-400 hover:-translate-y-px"
              >
                Get My Free Sourcing Audit
                <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="/contact-us"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl border border-white/10 bg-white/5 px-9 py-4 text-base font-semibold text-white transition-all hover:bg-white/10 hover:border-white/20"
              >
                Book a Strategy Call
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-gray-600">
              <span className="flex items-center gap-2">
                <CheckIcon className="w-4 h-4 text-emerald-400" />
                Free consultation &mdash; no obligation
              </span>
              <span className="flex items-center gap-2">
                <CheckIcon className="w-4 h-4 text-emerald-400" />
                Response within 24 hours
              </span>
              <span className="flex items-center gap-2">
                <CheckIcon className="w-4 h-4 text-emerald-400" />
                Hong Kong registered company
              </span>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
