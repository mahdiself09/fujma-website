// app/about/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CalendlyButton from "@/components/CalendlyButton";

export const metadata: Metadata = {
  title: "About Us | Fujma Limited",
  description:
    "Fujma Limited is a Hong Kong-based operations partner helping entrepreneurs build global brands from China — sourcing, logistics, legal setup, and brand creation end to end.",
};

/* ─────────────────────────────────────────────────────────────────
   ICONS
   ───────────────────────────────────────────────────────────────── */

function CheckIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
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

function GlobeIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A9 9 0 013 12c0-1.605.42-3.113 1.157-4.418" />
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

function ClockIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function CurrencyIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function LanguageIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
    </svg>
  );
}

function ClipboardIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────
   SECTION LABEL COMPONENT
   ───────────────────────────────────────────────────────────────── */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-sm font-bold uppercase tracking-widest text-blue-600">
      {children}
    </p>
  );
}

/* ─────────────────────────────────────────────────────────────────
   PAGE
   ───────────────────────────────────────────────────────────────── */

export default function AboutPage() {
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
            {/* Eyebrow */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm font-medium text-gray-500 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              Hong Kong Registered &middot; Operating since day one
            </div>

            <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
              We Help Entrepreneurs Build
              <br />
              <span className="text-blue-600">Global Brands from China</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-500">
              Fujma Limited is a Hong Kong-based operations partner &mdash; covering
              sourcing, logistics, legal setup, and brand creation for
              entrepreneurs across Morocco, Europe, the Gulf, and the Americas.
              We handle the operational complexity so you can focus on the business.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <CalendlyButton className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 text-[15px] font-semibold text-white shadow-lg shadow-blue-600/20 transition-all hover:bg-blue-700 hover:-translate-y-px">
                Book a Consultation
                <ArrowRightIcon className="w-4 h-4" />
              </CalendlyButton>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-7 py-3.5 text-[15px] font-semibold text-gray-700 shadow-sm transition-all hover:border-gray-300 hover:bg-gray-50"
              >
                View Our Services
              </Link>
            </div>

            {/* Micro trust line */}
            <p className="mt-5 text-sm text-gray-400">
              Trusted by 50+ brands across 12+ countries
            </p>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            § 2 — OUR STORY
           ════════════════════════════════════════════════════════════ */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <SectionLabel>How We Started</SectionLabel>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Built to solve a real problem
              </h2>

              <div className="mt-8 space-y-5 text-[17px] leading-relaxed text-gray-600">
                <p>
                  Every year, thousands of entrepreneurs lose money trying to source
                  products from China &mdash; sending payments to unvetted suppliers,
                  clearing customs without proper documentation, and building brands
                  on an unstable supply chain. The process was complex, opaque, and
                  expensive to get wrong.
                </p>
                <p>
                  Fujma was created to change that. We built a single, fully
                  accountable partner that manages the entire operation: verified
                  supplier vetting, pre-shipment quality control, freight and
                  customs, Hong Kong legal structure, and brand protection. One team,
                  end to end, with full transparency at every stage.
                </p>
                <p>
                  Today we operate across 12 countries &mdash; from entrepreneurs placing
                  their first order to established brands scaling a multi-market
                  supply chain. We are physically on the ground in China, maintaining
                  direct factory relationships and conducting in-person inspections
                  that most remote sourcing services simply cannot offer.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            § 3 — WHAT WE DO
           ════════════════════════════════════════════════════════════ */}
        <section className="bg-gray-50 border-y border-gray-100 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-5xl">
              <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
                {/* Left — copy */}
                <div>
                  <SectionLabel>Our Services</SectionLabel>
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    What we handle for you
                  </h2>
                  <p className="mt-4 text-[17px] leading-relaxed text-gray-500">
                    Every service below is delivered by a dedicated team member
                    accountable to your project &mdash; not passed to a subcontractor you
                    never meet.
                  </p>
                  <Link
                    href="/services"
                    className="mt-7 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-blue-600/15 transition-all hover:bg-blue-700"
                  >
                    See Full Service Details
                    <ArrowRightIcon className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {/* Right — service list */}
                <ul className="space-y-4">
                  {[
                    {
                      title: "Product Sourcing from China",
                      desc: "Verified factory identification, pricing negotiation, sample management, and MOQ structuring.",
                    },
                    {
                      title: "Import & Export Operations",
                      desc: "End-to-end freight management, customs documentation, quality inspection, and delivery.",
                    },
                    {
                      title: "Hong Kong Company Formation",
                      desc: "Full registration, legal documentation, and registered address in Hong Kong.",
                    },
                    {
                      title: "Trademark Registration",
                      desc: "Brand name and logo protection in Hong Kong, China, or internationally.",
                    },
                    {
                      title: "Supplier Negotiation",
                      desc: "Direct negotiation on unit price, terms, contracts, and payment structure.",
                    },
                    {
                      title: "Business Consulting",
                      desc: "Strategic guidance on supply chain structure, market entry, and international expansion.",
                    },
                  ].map((item) => (
                    <li
                      key={item.title}
                      className="flex items-start gap-4 rounded-xl border border-gray-100 bg-white p-5 shadow-sm"
                    >
                      <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-50">
                        <CheckIcon className="w-3.5 h-3.5 text-blue-600" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">{item.title}</p>
                        <p className="mt-0.5 text-sm text-gray-500">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            § 4 — WHY FUJMA
           ════════════════════════════════════════════════════════════ */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="mx-auto max-w-2xl text-center mb-14">
              <SectionLabel>What Makes Us Different</SectionLabel>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Why clients choose Fujma
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                The difference between Fujma and a typical sourcing agent or freight
                broker is accountability. We don&apos;t hand you a list and step back.
              </p>
            </div>

            <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: <GlobeIcon className="w-5 h-5" />,
                  title: "On the Ground in China",
                  body: "We operate from Shunde, Foshan — in the manufacturing heartland of Guangdong. Factory visits, supplier audits, and quality checks happen in person, not by email.",
                },
                {
                  icon: <ClipboardIcon className="w-5 h-5" />,
                  title: "End-to-End Accountability",
                  body: "One project manager handles everything from brief to delivery. When something needs resolving, we resolve it — we don't pass the problem back to you.",
                },
                {
                  icon: <CurrencyIcon className="w-5 h-5" />,
                  title: "Transparent Pricing",
                  body: "Every cost — product, freight, duties, and service fees — is disclosed upfront in writing. You approve the full landed cost before we take any action.",
                },
                {
                  icon: <ClockIcon className="w-5 h-5" />,
                  title: "Fast Execution",
                  body: "Supplier quotes delivered in 3–5 days. Quality inspection completed within 48 hours of production. We operate at the pace a real business requires.",
                },
                {
                  icon: <LanguageIcon className="w-5 h-5" />,
                  title: "Multilingual Team",
                  body: "We communicate in English, Arabic, French, and Mandarin Chinese. No instruction ever gets lost between you and your manufacturer.",
                },
                {
                  icon: <ShieldIcon className="w-5 h-5" />,
                  title: "Risk Reduction by Design",
                  body: "Every engagement includes supplier verification, pre-shipment inspection, and documented customs compliance. We remove the risks that cost most importers thousands.",
                },
              ].map((point) => (
                <div
                  key={point.title}
                  className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="mb-4 inline-flex rounded-xl bg-blue-50 p-2.5 text-blue-600">
                    {point.icon}
                  </div>
                  <h3 className="mb-2.5 text-[15px] font-bold text-gray-900">
                    {point.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-500">{point.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            § 5 — WHO WE WORK WITH
           ════════════════════════════════════════════════════════════ */}
        <section className="bg-gray-50 border-y border-gray-100 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="mx-auto max-w-2xl text-center mb-12">
              <SectionLabel>Our Clients</SectionLabel>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Who we work with
              </h2>
            </div>

            <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-3">
              {[
                {
                  flag: "🚀",
                  title: "Entrepreneurs launching a first product",
                  body: "You have an idea and need a verified manufacturer, a brand, and a clear path to market. We handle the operational layer so you can focus on the business itself.",
                },
                {
                  flag: "📦",
                  title: "E-commerce sellers scaling their supply chain",
                  body: "You're already selling and need better unit pricing, more reliable production, and a logistics setup that holds up as volume grows.",
                },
                {
                  flag: "🌍",
                  title: "Businesses expanding into new markets",
                  body: "You're entering Morocco, the Gulf, Europe, or the US and need the right legal structure, import compliance, and local expertise to expand without costly errors.",
                },
              ].map((client) => (
                <div
                  key={client.title}
                  className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm"
                >
                  <div className="mb-4 text-3xl">{client.flag}</div>
                  <h3 className="mb-3 text-[15px] font-bold text-gray-900">
                    {client.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-500">{client.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            § 6 — TRUST NUMBERS
           ════════════════════════════════════════════════════════════ */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <div className="rounded-2xl border border-gray-100 bg-white shadow-sm">
                <div className="grid grid-cols-1 divide-y divide-gray-100 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                  {[
                    {
                      value: "500+",
                      label: "Products Sourced",
                      sub: "shipped internationally",
                    },
                    {
                      value: "50+",
                      label: "Brands Built",
                      sub: "from concept to market",
                    },
                    {
                      value: "12+",
                      label: "Countries Served",
                      sub: "across 4 continents",
                    },
                  ].map((stat) => (
                    <div key={stat.label} className="px-8 py-10 text-center">
                      <p className="text-4xl font-bold tracking-tight text-gray-900">
                        {stat.value}
                      </p>
                      <p className="mt-2 text-sm font-semibold text-gray-700">
                        {stat.label}
                      </p>
                      <p className="mt-1 text-xs text-gray-400">{stat.sub}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            § 7 — FINAL CTA
           ════════════════════════════════════════════════════════════ */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl overflow-hidden rounded-3xl bg-[#0B1120] px-8 py-16 text-center sm:px-16 relative">
              {/* Radial glow */}
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
                  backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
                }}
              />

              <div className="relative">
                <p className="mb-4 text-sm font-bold uppercase tracking-widest text-blue-400">
                  Start your project
                </p>
                <h2 className="text-3xl font-bold text-white sm:text-4xl">
                  Ready to build your brand?
                </h2>
                <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-gray-400">
                  Tell us what you&apos;re working on. We&apos;ll review your project for
                  free and outline exactly which services apply to your stage and goals.
                </p>

                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <CalendlyButton className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-blue-600 px-8 py-4 text-[15px] font-bold text-white shadow-xl shadow-blue-600/25 transition-all hover:bg-blue-700 hover:-translate-y-px">
                    Book a Consultation
                    <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </CalendlyButton>
                  <Link
                    href="/contact-us"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-[15px] font-semibold text-white transition-all hover:bg-white/10 hover:border-white/20"
                  >
                    Contact Us
                  </Link>
                </div>

                <p className="mt-6 text-sm text-gray-600">
                  Free consultation &middot; No commitment &middot; Response within 24 hours
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
