// app/branding/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CalendlyButton from "@/components/CalendlyButton";

export const metadata: Metadata = {
  title: "Build & Launch Your Brand from China | Fujma Limited",
  description:
    "From product sourcing to fulfillment and marketing \u2014 Fujma handles everything so you can focus on scaling your brand.",
};

/* ——— ICONS ———————————————————————————————————————————————————— */

function ArrowRightIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  );
}

const icons = {
  search: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
  ),
  handshake: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    </svg>
  ),
  cog: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  paint: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
    </svg>
  ),
  shield: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
  truck: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
    </svg>
  ),
  cube: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
    </svg>
  ),
  globe: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A9 9 0 013 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  ),
  chart: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6.75v6.75" />
    </svg>
  ),
};

/* ——— SECTION LABEL ———————————————————————————————————————————— */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-sm font-bold uppercase tracking-widest text-blue-600">
      {children}
    </p>
  );
}

/* ——— DATA ————————————————————————————————————————————————————— */

const SERVICES = [
  { icon: icons.search,    title: "Product Sourcing & Validation",       desc: "We identify and vet the right manufacturers for your product \u2014 quality, price, and MOQ confirmed before you commit." },
  { icon: icons.handshake, title: "Supplier Negotiation",                desc: "We negotiate pricing, payment terms, and minimum orders directly with factories on your behalf." },
  { icon: icons.cog,       title: "Product Development & Customization", desc: "Custom dimensions, materials, colors, and specifications \u2014 coordinated directly with the manufacturer." },
  { icon: icons.paint,     title: "Branding \u2014 Logo & Packaging",    desc: "We design your brand identity and production-ready packaging, formatted for your manufacturer." },
  { icon: icons.shield,    title: "Quality Control & Inspection",        desc: "Pre-shipment inspection with photo and video reports. Nothing ships unverified." },
  { icon: icons.truck,     title: "Shipping & Logistics",                desc: "Air or sea freight, customs clearance, and door-to-door delivery to your market." },
  { icon: icons.cube,      title: "Warehousing & Fulfillment",           desc: "Storage and order fulfillment so your inventory is ready for customers from day one." },
  { icon: icons.globe,     title: "Website Creation (Shopify)",          desc: "A fully configured Shopify store \u2014 product pages, payment setup, and brand design \u2014 ready to sell." },
  { icon: icons.chart,     title: "Marketing Setup",                     desc: "Ad account configuration, pixel setup, and initial campaign structure so you can launch and scale." },
];

const STEPS = [
  { n: "01", label: "Idea",      desc: "You bring the concept. We assess its viability." },
  { n: "02", label: "Product",   desc: "We source, develop, and customize your product." },
  { n: "03", label: "Brand",     desc: "Logo, packaging, and store \u2014 built for your market." },
  { n: "04", label: "Logistics", desc: "Quality check, shipping, and customs handled." },
  { n: "05", label: "Launch",    desc: "Store live, ads running, first sales incoming." },
];

const CLIENTS = [
  { flag: "🚀", title: "First-time entrepreneurs", desc: "You have an idea and need a clear, safe path to a real product. We handle the complexity from day one." },
  { flag: "📦", title: "E-commerce sellers",       desc: "You\u2019re already selling and want to build your own branded product instead of reselling." },
  { flag: "🌍", title: "Scaling brands",           desc: "You have traction and need a more reliable supply chain, better branding, and growth infrastructure." },
];

const WHY = [
  { title: "On the ground in China",  desc: "Our team operates from Shunde, Foshan. Factory visits and quality checks happen in person." },
  { title: "End-to-end execution",    desc: "One team manages every step \u2014 no handoffs, no gaps, no dropped balls." },
  { title: "No hidden middlemen",     desc: "You deal directly with us. We deal directly with factories. Transparent at every layer." },
  { title: "Full cost transparency",  desc: "You see the complete landed cost before approving anything. No surprise fees." },
];

/* ——— PAGE ———————————————————————————————————————————————————— */

export default function BrandingPage() {
  return (
    <>
      <Header />
      <main className="bg-white pt-[72px]">

        {/* —————— § 1 HERO ———————————————————————————————————————— */}
        <section className="relative overflow-hidden bg-[#F8FAFC] border-b border-gray-100">
          <div
            className="absolute inset-0 opacity-[0.35]"
            style={{ backgroundImage: "radial-gradient(circle, #CBD5E1 1px, transparent 1px)", backgroundSize: "28px 28px" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F8FAFC]/50 to-[#F8FAFC]" />

          <div className="relative mx-auto max-w-7xl px-6 py-24 text-center lg:px-8 lg:py-32">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm font-medium text-gray-500 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              From idea to first sale &mdash; fully managed
            </div>

            <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
              Build &amp; Launch Your Brand
              <br />
              <span className="text-blue-600">from China</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-500">
              From product sourcing to fulfillment and marketing &mdash; we handle
              everything so you can focus on scaling your business.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/brand-application"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 text-[15px] font-bold text-white shadow-lg shadow-blue-600/20 transition-all hover:bg-blue-700 hover:-translate-y-px"
              >
                Start Your Brand
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
              <CalendlyButton className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-7 py-3.5 text-[15px] font-semibold text-gray-700 shadow-sm transition-all hover:border-gray-300 hover:bg-gray-50">
                Book Consultation
              </CalendlyButton>
            </div>

            <p className="mt-5 text-sm text-gray-400">
              Free initial review &middot; Response within 24 hours &middot; No commitment required
            </p>
          </div>
        </section>

        {/* —————— § 2 WHAT WE HANDLE ———————————————————————————————— */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-14">
              <SectionLabel>What We Handle</SectionLabel>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Everything. So you don&apos;t have to.
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Nine service areas &mdash; one team, one process, one point of accountability.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((s) => (
                <div
                  key={s.title}
                  className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:border-blue-100 hover:shadow-md"
                >
                  <div className="mb-4 inline-flex rounded-xl bg-blue-50 p-2.5 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                    {s.icon}
                  </div>
                  <h3 className="mb-1.5 text-[15px] font-bold text-gray-900">{s.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-500">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* —————— § 3 FROM IDEA TO FIRST SALES ————————————————————— */}
        <section className="bg-gray-50 border-y border-gray-100 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-14">
              <SectionLabel>The Journey</SectionLabel>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                From idea to first sales
              </h2>
            </div>

            {/* Desktop horizontal flow */}
            <div className="hidden lg:grid lg:grid-cols-5 gap-0 max-w-5xl mx-auto relative">
              <div className="absolute top-[2.25rem] left-[10%] right-[10%] h-px bg-gray-200" />
              {STEPS.map((step) => (
                <div key={step.n} className="relative flex flex-col items-center text-center px-4">
                  <div className="relative z-10 mb-4 flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full bg-white text-sm font-bold text-blue-600 shadow-md ring-4 ring-blue-50">
                    {step.n}
                  </div>
                  <p className="text-sm font-bold text-gray-900 mb-1">{step.label}</p>
                  <p className="text-xs leading-relaxed text-gray-500">{step.desc}</p>
                </div>
              ))}
            </div>

            {/* Mobile vertical flow */}
            <div className="lg:hidden max-w-sm mx-auto space-y-4">
              {STEPS.map((step, i) => (
                <div key={step.n} className="flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                      {step.n}
                    </div>
                    {i < STEPS.length - 1 && <div className="mt-1 h-8 w-px bg-gray-200" />}
                  </div>
                  <div className="pt-1.5">
                    <p className="text-sm font-bold text-gray-900">{step.label}</p>
                    <p className="mt-0.5 text-sm text-gray-500">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/brand-application"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 text-[15px] font-bold text-white shadow-lg shadow-blue-600/20 transition-all hover:bg-blue-700"
              >
                Start Your Brand
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* —————— § 4 WHO THIS IS FOR ——————————————————————————————— */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <SectionLabel>Who This Is For</SectionLabel>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Built for every stage
              </h2>
            </div>
            <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-3">
              {CLIENTS.map((c) => (
                <div key={c.title} className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm">
                  <div className="mb-4 text-3xl">{c.flag}</div>
                  <h3 className="mb-2 text-[15px] font-bold text-gray-900">{c.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-500">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* —————— § 5 WHY FUJMA ————————————————————————————————————— */}
        <section className="bg-gray-50 border-y border-gray-100 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <SectionLabel>Why Fujma</SectionLabel>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                One partner. Full accountability.
              </h2>
            </div>
            <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
              {WHY.map((w, i) => (
                <div key={w.title} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                  <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-xs font-bold text-blue-600">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mb-1.5 text-[15px] font-bold text-gray-900">{w.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-500">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* —————— § 6 FINAL CTA ————————————————————————————————————— */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl overflow-hidden rounded-3xl bg-[#0B1120] px-8 py-16 text-center sm:px-16 relative">
              <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 40%, rgba(59,130,246,0.10), transparent)" }} />
              <div className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
              <div className="relative">
                <p className="mb-4 text-sm font-bold uppercase tracking-widest text-blue-400">Ready when you are</p>
                <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to build your brand?</h2>
                <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-gray-400">
                  Apply now and our team will review your project within 24 hours. Free, no commitment.
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <Link href="/brand-application" className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-blue-600 px-8 py-4 text-[15px] font-bold text-white shadow-xl shadow-blue-600/25 transition-all hover:bg-blue-700 hover:-translate-y-px">
                    Start Your Brand
                    <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                  <CalendlyButton className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-[15px] font-semibold text-white transition-all hover:bg-white/10 hover:border-white/20">
                    Book Consultation
                  </CalendlyButton>
                </div>
                <p className="mt-6 text-sm text-gray-600">Free review &middot; No commitment &middot; Response within 24 hours</p>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
