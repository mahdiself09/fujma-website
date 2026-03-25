// app/services/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CalendlyButton from "@/components/CalendlyButton";

export const metadata: Metadata = {
  title: "Services | Fujma Limited",
  description:
    "From product sourcing in China to Hong Kong company formation and trademark protection — Fujma handles every step of building your global brand.",
};

/* ─────────────────────────────────────────────────────────────────
   ICONS — inline SVG, zero dependencies
   ───────────────────────────────────────────────────────────────── */

function BrandIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
    </svg>
  );
}

function SourcingIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
  );
}

function LogisticsIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
    </svg>
  );
}

function CompanyIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
    </svg>
  );
}

function TrademarkIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  );
}

function ConsultingIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
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

function CheckIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────
   SERVICE CARD DATA
   ───────────────────────────────────────────────────────────────── */

const SERVICES = [
  {
    icon: BrandIcon,
    title: "Brand Creation from China",
    description:
      "We build your brand from the ground up — product concept, private label, packaging design, and brand identity — all coordinated directly with Chinese manufacturers.",
    features: ["Private label & packaging", "Brand identity design", "Manufacturer coordination"],
    href: "/branding",
    accent: "blue",
    highlight: false,
  },
  {
    icon: SourcingIcon,
    title: "Product Sourcing China",
    description:
      "Access our verified network of Chinese factories. We find, vet, and negotiate with the right suppliers so you get the best product at the best price.",
    features: ["Verified supplier network", "Price & MOQ negotiation", "Sample management"],
    href: "/sourcing",
    accent: "indigo",
    highlight: false,
  },
  {
    icon: LogisticsIcon,
    title: "China Import / Export",
    description:
      "End-to-end logistics from China to your market. We handle freight, customs documentation, quality inspection, and last-mile delivery worldwide.",
    features: ["Air & sea freight", "Customs clearance", "Pre-shipment inspection"],
    href: "/import-export",
    accent: "blue",
    highlight: true,
  },
  {
    icon: CompanyIcon,
    title: "Hong Kong Company Formation",
    description:
      "Register your business in Hong Kong — one of Asia's most respected jurisdictions. We handle every document, filing, and compliance requirement.",
    features: ["Full registration service", "Legal documentation", "Registered address"],
    href: "/hong-kong-company",
    accent: "slate",
    highlight: true,
  },
  {
    icon: TrademarkIcon,
    title: "Trademark Registration",
    description:
      "Protect your brand name and logo in Hong Kong, China, or internationally. We manage the entire filing process with IP authorities.",
    features: ["Hong Kong & China filing", "IP strategy guidance", "Ongoing protection"],
    href: "/trademark",
    accent: "indigo",
    highlight: false,
  },
  {
    icon: ConsultingIcon,
    title: "Business Growth Consulting",
    description:
      "Strategic guidance for entrepreneurs expanding to China or scaling globally. From market entry to operations, we help you make the right decisions.",
    features: ["Market entry strategy", "Operations planning", "One-on-one advisory"],
    href: "/consultation",
    accent: "slate",
    highlight: false,
  },
] as const;

type AccentKey = "blue" | "indigo" | "slate";

const ACCENT_MAP: Record<AccentKey, { icon: string; badge: string; border: string; btn: string }> = {
  blue: {
    icon: "bg-blue-50 text-blue-600",
    badge: "bg-blue-50 text-blue-700 border-blue-100",
    border: "hover:border-blue-200",
    btn: "text-blue-600 hover:text-blue-700",
  },
  indigo: {
    icon: "bg-indigo-50 text-indigo-600",
    badge: "bg-indigo-50 text-indigo-700 border-indigo-100",
    border: "hover:border-indigo-200",
    btn: "text-indigo-600 hover:text-indigo-700",
  },
  slate: {
    icon: "bg-slate-100 text-slate-600",
    badge: "bg-slate-50 text-slate-600 border-slate-200",
    border: "hover:border-slate-300",
    btn: "text-slate-700 hover:text-slate-900",
  },
};

/* ─────────────────────────────────────────────────────────────────
   PAGE COMPONENT
   ───────────────────────────────────────────────────────────────── */

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="bg-white pt-[72px]">

        {/* ════════════════════════════════════════════════════════════
            § 1 — HERO
           ════════════════════════════════════════════════════════════ */}
        <section className="relative overflow-hidden bg-[#F8FAFC] border-b border-gray-100">
          {/* Subtle dot grid */}
          <div
            className="absolute inset-0 opacity-[0.4]"
            style={{
              backgroundImage:
                "radial-gradient(circle, #CBD5E1 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          {/* Gradient fade over grid */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F8FAFC]/60 to-[#F8FAFC]" />

          <div className="relative mx-auto max-w-7xl px-6 py-24 text-center lg:px-8 lg:py-32">
            {/* Eyebrow */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm font-medium text-gray-500 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              Fujma Limited — Hong Kong
            </div>

            <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
              Everything You Need to
              <br />
              <span className="text-blue-600">Launch &amp; Scale Your Brand</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-500">
              From product sourcing in China to company formation and trademark
              protection — we handle every step so you can focus on building
              your business.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <CalendlyButton className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 text-[15px] font-semibold text-white shadow-lg shadow-blue-600/20 transition-all hover:bg-blue-700 hover:-translate-y-px">
                Book a Free Consultation
                <ArrowRightIcon className="w-4 h-4" />
              </CalendlyButton>
              <Link
                href="#services"
                className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-7 py-3.5 text-[15px] font-semibold text-gray-700 shadow-sm transition-all hover:border-gray-300 hover:bg-gray-50"
              >
                View Services
              </Link>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            § 2 — TRUST BAR
           ════════════════════════════════════════════════════════════ */}
        <section className="border-b border-gray-100 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <p className="text-sm font-medium text-gray-400 tracking-wide uppercase">
                Trusted by entrepreneurs worldwide
              </p>
              <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-14">
                {[
                  { value: "500+", label: "Products Sourced" },
                  { value: "50+",  label: "Brands Built" },
                  { value: "12+",  label: "Countries Served" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="text-2xl font-bold text-gray-900">{s.value}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            § 3 — SERVICES GRID
           ════════════════════════════════════════════════════════════ */}
        <section id="services" className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            {/* Section label */}
            <div className="mx-auto max-w-2xl text-center mb-14">
              <p className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-3">
                Our Services
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                One partner. Every step.
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Whether you&apos;re launching your first product or expanding an
                established brand, we have the service for your stage.
              </p>
            </div>

            {/* Grid */}
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((service) => {
                const colors = ACCENT_MAP[service.accent];
                const Icon = service.icon;
                return (
                  <div
                    key={service.title}
                    className={`group flex flex-col rounded-2xl border bg-white p-7 shadow-sm transition-all duration-200 hover:shadow-md ${colors.border} ${
                      service.highlight
                        ? "border-blue-200 ring-2 ring-blue-600 scale-[1.02] shadow-md"
                        : "border-gray-100"
                    }`}
                  >
                    {/* Icon */}
                    <div className={`mb-5 inline-flex w-fit rounded-xl p-3 ${colors.icon}`}>
                      <Icon className="w-6 h-6" />
                    </div>

                    {/* Title */}
                    <h3 className="mb-2.5 text-[17px] font-bold text-gray-900 leading-snug">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="mb-5 text-sm leading-relaxed text-gray-500 flex-1">
                      {service.description}
                    </p>

                    {/* Feature pills */}
                    <ul className="mb-6 space-y-2">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckIcon className="w-3.5 h-3.5 flex-shrink-0 text-emerald-500" />
                          {f}
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Link
                      href={service.href}
                      className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-all ${colors.btn}`}
                    >
                      See How It Works
                      <ArrowRightIcon className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            § 4 — FUNNEL FLOW
           ════════════════════════════════════════════════════════════ */}
        <section className="bg-[#F8FAFC] border-y border-gray-100 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <p className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-3">
                The Path to a Global Brand
              </p>
              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                From Product to Global Brand — Step by Step
              </h2>
            </div>

            <div className="flex flex-col items-center gap-4 lg:flex-row lg:items-stretch lg:gap-0">

              {/* Step 1 */}
              <div className="flex flex-1 flex-col items-center rounded-2xl bg-white border border-gray-100 p-8 text-center shadow-sm">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                  1
                </div>
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <SourcingIcon className="w-6 h-6" />
                </div>
                <h3 className="mb-2 text-base font-bold text-gray-900">Source Your Product</h3>
                <p className="text-sm leading-relaxed text-gray-500">
                  Find the right factory in China, negotiate the best price, and get your product manufactured to spec.
                </p>
              </div>

              {/* Arrow */}
              <div className="flex items-center justify-center px-3 text-gray-300 rotate-90 lg:rotate-0">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>

              {/* Step 2 */}
              <div className="flex flex-1 flex-col items-center rounded-2xl bg-white border border-gray-100 p-8 text-center shadow-sm">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                  2
                </div>
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
                  <CompanyIcon className="w-6 h-6" />
                </div>
                <h3 className="mb-2 text-base font-bold text-gray-900">Register Your HK Company</h3>
                <p className="text-sm leading-relaxed text-gray-500">
                  Set up a legitimate Hong Kong entity to trade internationally, open bank accounts, and build credibility.
                </p>
              </div>

              {/* Arrow */}
              <div className="flex items-center justify-center px-3 text-gray-300 rotate-90 lg:rotate-0">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>

              {/* Step 3 */}
              <div className="flex flex-1 flex-col items-center rounded-2xl bg-white border border-gray-100 p-8 text-center shadow-sm">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                  3
                </div>
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  <TrademarkIcon className="w-6 h-6" />
                </div>
                <h3 className="mb-2 text-base font-bold text-gray-900">Protect Your Brand</h3>
                <p className="text-sm leading-relaxed text-gray-500">
                  Register your trademark so no competitor can copy your name, logo, or identity in your target markets.
                </p>
              </div>

            </div>

            <div className="mt-10 text-center">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 text-[15px] font-semibold text-white shadow-lg shadow-blue-600/20 transition-all hover:bg-blue-700 hover:-translate-y-px"
              >
                Start Your Journey
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            § 5 — WHY FUJMA — light differentiation strip
           ════════════════════════════════════════════════════════════ */}
        <section className="bg-gray-50 border-b border-gray-100 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                Why entrepreneurs choose Fujma
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  label: "On the Ground in China",
                  body: "Our team is based in Shunde, Foshan — the manufacturing heartland. We don't source remotely.",
                },
                {
                  label: "One Partner, Full Stack",
                  body: "No juggling three vendors. Sourcing, logistics, legal setup, and brand creation — all under one roof.",
                },
                {
                  label: "Zero Hidden Fees",
                  body: "Every cost disclosed upfront. You see the full landed cost before committing to anything.",
                },
                {
                  label: "Multilingual Team",
                  body: "We communicate in English, Arabic, French, and Mandarin. Nothing gets lost between you and the factory.",
                },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl bg-white border border-gray-100 p-6 shadow-sm">
                  <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-blue-50">
                    <CheckIcon className="w-4 h-4 text-blue-600" />
                  </div>
                  <h3 className="mb-2 text-sm font-bold text-gray-900">{item.label}</h3>
                  <p className="text-sm leading-relaxed text-gray-500">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            § 6 — FINAL CTA
           ════════════════════════════════════════════════════════════ */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl overflow-hidden rounded-3xl bg-[#0B1120] px-8 py-16 text-center sm:px-16 relative">
              {/* Faint radial glow */}
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse 70% 60% at 50% 40%, rgba(59,130,246,0.1), transparent)",
                }}
              />
              {/* Dot grid */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, #fff 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
                }}
              />

              <div className="relative">
                <p className="mb-4 text-sm font-bold uppercase tracking-widest text-blue-400">
                  Let&apos;s build something together
                </p>
                <h2 className="text-3xl font-bold text-white sm:text-4xl">
                  Not sure where to start?
                </h2>
                <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-gray-400">
                  Tell us about your project. We&apos;ll review it for free and recommend
                  exactly which services fit your stage and goals.
                </p>

                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <CalendlyButton className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-4 text-[15px] font-bold text-white shadow-xl shadow-blue-600/25 transition-all hover:bg-blue-700 hover:-translate-y-px">
                    Book a Free Consultation
                    <ArrowRightIcon className="w-4 h-4" />
                  </CalendlyButton>
                  <Link
                    href="/contact-us"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-[15px] font-semibold text-white transition-all hover:bg-white/10 hover:border-white/20"
                  >
                    Contact Us
                  </Link>
                </div>

                <p className="mt-6 text-sm text-gray-600">
                  Free consultation &middot; No commitment &middot; Response within 24h
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
