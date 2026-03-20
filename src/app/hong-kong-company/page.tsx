import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Hong Kong Company Formation | Fujma — Register in 3 Days",
  description:
    "Register your Hong Kong company in as few as 3 business days. All-inclusive packages from HK$4,999 with government fees, company secretary, and bank account support.",
};

/* --- ICONS --- */

function CheckIcon({ className = "w-5 h-5 text-blue-600 flex-shrink-0" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function XIcon({ className = "w-5 h-5 text-gray-300 flex-shrink-0" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
    </svg>
  );
}

function StarIcon({ className = "w-4 h-4 text-amber-400" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

/* --- HERO --- */

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,143,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,143,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl">
          {/* Urgency badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 text-sm text-blue-200 mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Limited onboarding slots available this month
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            Your Hong Kong Company
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Registered in 3 Days.
            </span>
            <br />
            <span className="text-slate-200">Without the Legal Confusion.</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl">
            Most founders waste weeks on paperwork, government portals, and unreliable agents.
            Fujma handles <span className="text-white font-semibold">everything</span> for you &mdash; from registration to bank account &mdash;
            for a single all-inclusive fee from{" "}
            <span className="text-white font-semibold">HK$4,999</span>.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="/contact-us"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-blue-600/25 hover:shadow-blue-500/40 hover:-translate-y-px text-base"
            >
              Register My Hong Kong Company
            </a>
            <a
              href="/contact-us"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/20 text-white font-medium rounded-xl transition-all duration-200 text-base"
            >
              Book Free Consultation
            </a>
          </div>

          <p className="mt-4 text-sm text-slate-500">
            No commitment &middot; Free consultation &middot; Response within 24 hours
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-slate-400">
            {[
              "100% online process",
              "No hidden fees",
              "Money-back guarantee",
              "50+ countries served",
            ].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <CheckIcon className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="text-slate-300">{item}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* --- TRUST BAR --- */

function TrustBar() {
  const stats = [
    { value: "2,500+", label: "Companies Formed" },
    { value: "50+", label: "Countries Served" },
    { value: "3 Days", label: "Average Setup Time" },
    { value: "4.9/5", label: "Client Satisfaction" },
  ];
  return (
    <section className="bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-slate-900">{s.value}</div>
              <div className="mt-1 text-sm text-slate-500">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --- PROBLEM vs SOLUTION --- */

function ProblemSolution() {
  return (
    <section className="bg-slate-50 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-3">The Reality</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Setting Up in Hong Kong Shouldn&apos;t Be This Hard
          </h2>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            Most entrepreneurs waste weeks navigating paperwork, government portals,
            and unreliable service providers. Fujma handles everything &mdash; so you can focus on building.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 border border-slate-200">
            <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center mb-5">
              <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Without Fujma</h3>
            <ul className="space-y-3 text-slate-600 text-[15px]">
              {[
                "Weeks of back-and-forth with government agencies",
                "Hidden fees that inflate final costs by 2–3×",
                "Confusing compliance requirements with no guidance",
                "Difficulty opening a business bank account remotely",
                "Risk of errors that delay your registration",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-red-400 mt-0.5 font-bold">✕</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-blue-600 rounded-2xl p-8 text-white">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mb-5">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-4">With Fujma</h3>
            <ul className="space-y-3 text-blue-50 text-[15px]">
              {[
                "Company registered in as few as 3 business days",
                "Transparent, all-inclusive pricing — no surprises",
                "Dedicated specialist guides you through every step",
                "Bank account assistance with partner banks included",
                "Expert review eliminates costly errors before filing",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-cyan-300 mt-0.5 font-bold">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Guarantee callout */}
        <div className="mt-10 max-w-4xl mx-auto rounded-2xl border border-blue-100 bg-blue-50/50 px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
            </div>
            <div>
              <p className="font-bold text-blue-900 text-base">
                Money-Back Guarantee: If we cannot complete your registration, you receive a full refund.
              </p>
              <p className="mt-1 text-sm text-blue-700">Zero risk to get started. Your investment is fully protected.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --- WHY HONG KONG --- */

function WhyHongKong() {
  const benefits = [
    {
      title: "Tax Advantages",
      description: "Territorial tax system — only profits sourced in Hong Kong are taxed. No VAT, no capital gains tax, no withholding tax on dividends.",
      icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" /></svg>,
    },
    {
      title: "Gateway to Asia",
      description: "Strategic access to Mainland China and Asia-Pacific markets. A recognized international financial center with world-class infrastructure.",
      icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>,
    },
    {
      title: "100% Foreign Ownership",
      description: "No local partner required. Foreign entrepreneurs can own 100% of their Hong Kong company and serve as sole director and shareholder.",
      icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>,
    },
    {
      title: "Simple Compliance",
      description: "Straightforward annual filing requirements. Only one director and one shareholder needed — the same person can fill both roles.",
      icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>,
    },
    {
      title: "Low Tax Rate",
      description: "Profits tax at just 8.25% on the first HKD 2 million. Standard rate of 16.5% — among the lowest in the developed world.",
      icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" /></svg>,
    },
    {
      title: "Strong Legal System",
      description: "Common law jurisdiction with robust IP protection and strong contract enforceability. Ideal for international business operations.",
      icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" /></svg>,
    },
  ];

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-3">Jurisdiction</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Why Hong Kong?</h2>
          <p className="mt-4 text-lg text-slate-600">
            One of the world&apos;s most business-friendly jurisdictions, purpose-built
            for international entrepreneurs.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="group bg-slate-50 hover:bg-blue-50 rounded-2xl p-7 transition-colors duration-200 border border-slate-100 hover:border-blue-100"
            >
              <div className="w-12 h-12 bg-blue-100 group-hover:bg-blue-200 rounded-xl flex items-center justify-center text-blue-600 transition-colors duration-200 mb-5">
                {b.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{b.title}</h3>
              <p className="text-slate-600 text-[15px] leading-relaxed">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --- HOW IT WORKS --- */

function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Share Your Details",
      description: "Fill out our simple online form with your company name, business activity, and director/shareholder details. Takes under 10 minutes.",
      time: "10 min",
    },
    {
      number: "02",
      title: "We Handle Everything",
      description: "Our team prepares all incorporation documents, completes KYC verification, and submits everything to the Companies Registry.",
      time: "Day 1",
    },
    {
      number: "03",
      title: "Company Registered",
      description: "Receive your Certificate of Incorporation, Business Registration Certificate, and all statutory documents digitally.",
      time: "Day 3",
    },
    {
      number: "04",
      title: "Start Operating",
      description: "We assist with your business bank account and ensure your company is fully ready to trade internationally.",
      time: "Week 1",
    },
  ];

  return (
    <section className="bg-slate-50 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-3">The Process</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">How It Works</h2>
          <p className="mt-4 text-lg text-slate-600">
            A streamlined, four-step process &mdash; entirely online, with expert support at every stage.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div key={step.number} className="relative">
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-[2px] bg-gradient-to-r from-blue-200 to-transparent -translate-x-4 z-0" />
              )}
              <div className="relative bg-white rounded-2xl p-7 border border-slate-200 h-full">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-3xl font-bold text-blue-100">{step.number}</span>
                  <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
                    {step.time}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600 text-[15px] leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href="/contact-us"
            className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-blue-600/25 hover:-translate-y-px"
          >
            Start My Company Setup
          </a>
          <p className="mt-3 text-sm text-slate-400">Free consultation &middot; No commitment required</p>
        </div>
      </div>
    </section>
  );
}

/* --- PRICING --- */

const plans = [
  {
    name: "Starter",
    price: "4,999",
    description: "Essential setup for entrepreneurs ready to register quickly.",
    popular: false,
    cta: "Get Started",
    features: [
      { name: "Company Registration", included: true },
      { name: "All Government Fees Included", included: true },
      { name: "Certificate of Incorporation", included: true },
      { name: "Business Registration Certificate (1 yr)", included: true },
      { name: "Articles of Association", included: true },
      { name: "Company Secretary (1 yr)", included: true },
      { name: "Annual Return Filing", included: true },
      { name: "Significant Controllers Register", included: true },
      { name: "Registered Business Address (1 yr)", included: false },
      { name: "Bank Account Assistance", included: false },
      { name: "Annual Bookkeeping", included: false },
      { name: "Audit & Tax Filing", included: false },
    ],
  },
  {
    name: "Business",
    price: "8,499",
    description: "The most popular choice — everything you need to operate with confidence.",
    popular: true,
    cta: "Start My Company Setup",
    features: [
      { name: "Company Registration", included: true },
      { name: "All Government Fees Included", included: true },
      { name: "Certificate of Incorporation", included: true },
      { name: "Business Registration Certificate (1 yr)", included: true },
      { name: "Articles of Association", included: true },
      { name: "Company Secretary (1 yr)", included: true },
      { name: "Annual Return Filing", included: true },
      { name: "Significant Controllers Register", included: true },
      { name: "Registered Business Address (1 yr)", included: true },
      { name: "Bank Account Assistance", included: true },
      { name: "Annual Bookkeeping", included: false },
      { name: "Audit & Tax Filing", included: false },
    ],
  },
  {
    name: "Enterprise",
    price: "13,999",
    description: "Full-service formation with accounting, audit, and a dedicated manager.",
    popular: false,
    cta: "Get Full Service",
    features: [
      { name: "Company Registration", included: true },
      { name: "All Government Fees Included", included: true },
      { name: "Certificate of Incorporation", included: true },
      { name: "Business Registration Certificate (1 yr)", included: true },
      { name: "Articles of Association", included: true },
      { name: "Company Secretary (1 yr)", included: true },
      { name: "Annual Return Filing", included: true },
      { name: "Significant Controllers Register", included: true },
      { name: "Registered Business Address (1 yr)", included: true },
      { name: "Bank Account Assistance", included: true },
      { name: "Annual Bookkeeping", included: true },
      { name: "Audit & Tax Filing", included: true },
    ],
  },
];

function Pricing() {
  return (
    <section id="pricing" className="bg-slate-50 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-3">Pricing</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Transparent Pricing. No Hidden Fees.
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Every package includes government registration fees. Choose the level of support that fits your business.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-2xl border-2 transition-shadow duration-200 ${
                plan.popular
                  ? "border-blue-600 shadow-xl shadow-blue-600/10"
                  : "border-slate-200 hover:border-slate-300 shadow-sm"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-blue-600 text-white text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wide">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="p-8">
                <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
                <p className="mt-2 text-sm text-slate-500 min-h-[40px]">{plan.description}</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-sm text-slate-500">HK$</span>
                  <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                </div>
                <p className="mt-1 text-xs text-slate-400">One-time fee &middot; Government fees included</p>
                <a
                  href="/contact-us"
                  className={`mt-8 w-full flex items-center justify-center px-6 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 ${
                    plan.popular
                      ? "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/25"
                      : "bg-slate-900 hover:bg-slate-800 text-white"
                  }`}
                >
                  {plan.cta}
                </a>
                <p className="mt-2 text-center text-xs text-slate-400">No commitment &middot; Free consultation first</p>
                <div className="mt-8 pt-8 border-t border-slate-100">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-4">
                    What&apos;s included
                  </p>
                  <ul className="space-y-3">
                    {plan.features.map((f) => (
                      <li key={f.name} className="flex items-start gap-3">
                        {f.included
                          ? <CheckIcon className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          : <XIcon className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" />
                        }
                        <span className={`text-sm ${f.included ? "text-slate-700" : "text-slate-400"}`}>
                          {f.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center mt-8 text-sm text-slate-500">
          All packages include a money-back guarantee if we cannot deliver the service. Need a custom solution?{" "}
          <a href="/contact-us" className="text-blue-600 font-medium hover:underline">
            Talk to our team
          </a>
          .
        </p>
      </div>
    </section>
  );
}

/* --- WHAT IS INCLUDED --- */

function WhatIsIncluded() {
  const items = [
    {
      title: "Company Registration",
      description: "Full registration with the Hong Kong Companies Registry, including name approval and all mandatory filings.",
    },
    {
      title: "Government Fees",
      description: "All government fees are included in your package — no surprise charges after you start.",
    },
    {
      title: "Company Secretary",
      description: "A mandatory requirement in Hong Kong. Your dedicated secretary handles compliance, statutory records, and annual filings.",
    },
    {
      title: "Registered Address",
      description: "A prestigious Hong Kong business address for your official correspondence and government filings (Business & Enterprise plans).",
    },
    {
      title: "Bank Account Support",
      description: "Guidance and introductions to our banking partners to help you open a business account — including HSBC, Airwallex, and more.",
    },
    {
      title: "Incorporation Documents",
      description: "Receive your Certificate of Incorporation, Business Registration Certificate, and Articles of Association digitally.",
    },
  ];

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-3">What You Get</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Everything You Need to Start</h2>
          <p className="mt-4 text-lg text-slate-600">
            Each package covers every essential requirement for your Hong Kong company — from day one.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.title} className="bg-slate-50 rounded-2xl p-7 border border-slate-100">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-600 text-[15px] leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --- TESTIMONIALS --- */

function Testimonials() {
  const testimonials = [
    {
      quote: "Fujma registered my Hong Kong company in exactly 3 days. Every document was ready digitally, and they even helped me open an Airwallex account. I was operating internationally within a week of starting the process.",
      name: "Youssef A.",
      role: "E-commerce brand founder",
      country: "Morocco 🇲🇦",
      initials: "YA",
      result: "Company registered in 3 days",
    },
    {
      quote: "I'd tried another agent first and wasted two months. Fujma took over, cleaned everything up, and got my company registered within the week. The transparency on fees alone was worth switching.",
      name: "Claire D.",
      role: "Digital agency owner",
      country: "France 🇫🇷",
      initials: "CD",
      result: "Registered after failed first attempt",
    },
    {
      quote: "As a UAE-based entrepreneur sourcing from China, I needed a proper HK entity. Fujma handled the full setup — company secretary, address, and bank intro — without me traveling once. Flawless.",
      name: "Tariq M.",
      role: "Trading & import business",
      country: "UAE 🇦🇪",
      initials: "TM",
      result: "Full setup without traveling to HK",
    },
  ];

  return (
    <section className="bg-slate-50 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-3">Client Results</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Real founders. Real companies.
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Entrepreneurs from 50+ countries have used Fujma to launch their Hong Kong operations.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <div key={t.name} className="flex flex-col justify-between bg-white rounded-2xl border border-slate-100 p-8 shadow-sm hover:shadow-md transition-shadow">
              <div>
                <div className="flex gap-0.5 mb-5">
                  {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
                </div>
                <p className="text-[15px] leading-relaxed text-slate-700">&ldquo;{t.quote}&rdquo;</p>
              </div>
              <div className="mt-6">
                <div className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 border border-emerald-100">
                  <CheckIcon className="w-3 h-3 text-emerald-600 flex-shrink-0" />
                  {t.result}
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-slate-50">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center text-sm font-bold text-white flex-shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                    <p className="text-xs text-slate-400">{t.role} &middot; {t.country}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-4xl rounded-2xl bg-white border border-slate-100 px-8 py-6 shadow-sm">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 text-center">
            {[
              { v: "4.9 / 5", l: "Average client rating" },
              { v: "2,500+", l: "Companies registered" },
              { v: "50+", l: "Countries served" },
              { v: "0", l: "Hidden fee incidents" },
            ].map((s) => (
              <div key={s.l}>
                <p className="text-2xl font-bold text-slate-900">{s.v}</p>
                <p className="mt-1 text-xs text-slate-500">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* --- FREE CONSULTATION OFFER --- */

function FreeConsultation() {
  return (
    <section className="py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-4xl mx-auto overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 px-8 py-14 text-center sm:px-16 relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(99,143,255,0.08),transparent)] pointer-events-none" />
          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-1.5 text-sm font-semibold text-amber-400 mb-6">
              <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse" />
              Free &mdash; No obligation
            </span>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Start with a free company structure review
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-400">
              Book a 30-minute call with our Hong Kong formation team. We&apos;ll review your
              business goals, recommend the right structure, explain the tax implications,
              and give you a full cost breakdown &mdash; completely free, no strings attached.
            </p>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="/contact-us"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-9 py-4 text-base font-bold text-white shadow-xl shadow-blue-600/20 transition-all hover:bg-blue-500 hover:-translate-y-px"
              >
                Get My Free HK Consultation
              </a>
              <a
                href="#pricing"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-9 py-4 text-base font-semibold text-white transition-all hover:bg-white/10"
              >
                View Packages & Pricing
              </a>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-500">
              {[
                "No commitment required",
                "Free company structure advice",
                "Reply within 24 hours",
              ].map((item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <CheckIcon className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>{item}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --- WHY FUJMA --- */

function WhyFujma() {
  const reasons = [
    {
      title: "Transparent Pricing",
      description: "Every fee is included upfront. No hidden charges, no government fee surprises. What you see is exactly what you pay.",
    },
    {
      title: "Speed & Efficiency",
      description: "Most companies are registered within 3 business days. Our streamlined digital process eliminates unnecessary delays.",
    },
    {
      title: "Dedicated Experts",
      description: "Your own incorporation specialist guides you from start to finish — not a chatbot, not a call center.",
    },
    {
      title: "Banking Partnerships",
      description: "Direct relationships with HSBC, Airwallex, Aspire, and other leading banks to help you open an account faster.",
    },
    {
      title: "Global Experience",
      description: "We serve entrepreneurs from 50+ countries. Our team understands the unique needs of international business owners.",
    },
    {
      title: "Money-Back Guarantee",
      description: "If we cannot complete your company registration, we refund your payment in full. Zero risk to get started.",
    },
  ];

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-3">Why Fujma</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Why Choose Fujma
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Trusted by thousands of founders to launch their Hong Kong companies the right way.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r) => (
            <div key={r.title} className="flex items-start gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <CheckIcon className="w-4 h-4 text-blue-600 flex-shrink-0" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-slate-900 mb-1">{r.title}</h3>
                <p className="text-[15px] leading-relaxed text-slate-600">{r.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --- FAQ --- */

function FAQ() {
  const faqs = [
    {
      q: "Do I need to be in Hong Kong to register a company?",
      a: "No. The entire process is done remotely. You submit your documents online, and we handle everything with the Companies Registry on your behalf. Most clients never visit Hong Kong.",
    },
    {
      q: "How long does registration actually take?",
      a: "Standard registration takes 3 business days once we receive your complete documents and KYC. In some cases it can be as fast as 1–2 days. We provide a timeline estimate at the start of every engagement.",
    },
    {
      q: "What is a company secretary and do I really need one?",
      a: "Yes — it is a legal requirement under Hong Kong law. A company secretary manages your statutory records, ensures annual filings are completed on time, and keeps your company compliant with the Companies Ordinance. All our packages include this for the first year.",
    },
    {
      q: "Can I open a bank account as a foreign director?",
      a: "Yes, though it requires proper documentation and the right banking partner. We have established relationships with HSBC, Airwallex, Aspire, and others specifically to help foreign-owned Hong Kong companies open accounts quickly.",
    },
    {
      q: "Are there any ongoing annual costs after registration?",
      a: "Yes. After the first year you will need to renew your Business Registration Certificate (approximately HK$2,150/year), maintain a company secretary (typically HK$2,500–5,000/year), and file an annual return. We offer ongoing maintenance packages at transparent rates.",
    },
    {
      q: "What happens if my preferred company name is already taken?",
      a: "We conduct a name availability search before filing. If your first choice is taken, we will work with you on alternatives. The name search is included in every package at no extra cost.",
    },
  ];

  return (
    <section className="bg-slate-50 py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-3">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Common questions</h2>
          <p className="mt-4 text-lg text-slate-600">
            Everything you need to know before getting started.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-100 bg-white px-8 divide-y divide-slate-100 shadow-sm">
          {faqs.map((faq) => (
            <details key={faq.q} className="group py-6">
              <summary className="flex cursor-pointer select-none items-center justify-between gap-4 text-left text-base font-semibold text-slate-900 hover:text-blue-600 transition-colors list-none">
                <span>{faq.q}</span>
                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-slate-100 transition-all duration-200 group-open:rotate-180 group-open:bg-blue-50">
                  <svg className="w-4 h-4 text-slate-400 group-open:text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </span>
              </summary>
              <div className="mt-4 text-[15px] leading-relaxed text-slate-500">{faq.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --- FINAL CTA --- */

function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 py-24 md:py-32">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,143,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(99,143,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div className="absolute top-1/2 left-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/8 blur-3xl pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <p className="text-sm font-bold uppercase tracking-widest text-blue-400 mb-4">
          Ready to Launch?
        </p>
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl leading-tight">
          Your Hong Kong company is
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
            3 days away.
          </span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
          Join 2,500+ founders who trusted Fujma to set up their Hong Kong company &mdash;
          fast, transparent, and completely handled for them.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="/contact-us"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-9 py-4 text-base font-bold text-white shadow-xl shadow-blue-600/20 transition-all hover:bg-blue-500 hover:-translate-y-px"
          >
            Register My Hong Kong Company
          </a>
          <a
            href="/contact-us"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-9 py-4 text-base font-semibold text-white transition-all hover:bg-white/10 hover:border-white/20"
          >
            Book Free Consultation
          </a>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-slate-500">
          {[
            "Free consultation — no obligation",
            "Money-back guarantee",
            "Response within 24 hours",
          ].map((item) => (
            <span key={item} className="flex items-center gap-2">
              <CheckIcon className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>{item}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --- PAGE EXPORT --- */

export default function HongKongCompanyPage() {
  return (
    <>
      <Header />
      <main className="pt-[72px]">
        <Hero />
        <TrustBar />
        <ProblemSolution />
        <WhyHongKong />
        <HowItWorks />
        <Pricing />
        <WhatIsIncluded />
        <Testimonials />
        <FreeConsultation />
        <WhyFujma />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
