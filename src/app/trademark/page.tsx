import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CalendlyButton from "@/components/CalendlyButton";

export const metadata: Metadata = {
  title: "Trademark Registration Hong Kong & International | Fujma",
  description:
    "Register your trademark in Hong Kong and 130+ countries. Transparent pricing, expert filing, and full legal support. Protect your brand from HKD 2,980.",
};

/* --- ICONS --- */
const Icon = {
  Shield: ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
  Check: ({ className = "w-5 h-5 text-blue-600 shrink-0" }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  ),
  Globe: ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 9.75c0 .746-.092 1.47-.264 2.16" />
    </svg>
  ),
  Clock: ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  Doc: ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
  ),
  Search: ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
  ),
  Star: ({ className = "w-5 h-5 text-yellow-400" }: { className?: string }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  ),
  Arrow: ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  ),
  Alert: ({ className = "w-6 h-6 text-red-500" }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
    </svg>
  ),
  Lock: ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
    </svg>
  ),
};

/* --- DATA --- */
const trustStats = [
  { value: "2,500+", label: "Trademarks Filed" },
  { value: "130+", label: "Countries Covered" },
  { value: "98%", label: "Approval Rate" },
  { value: "4.9/5", label: "Client Rating" },
];

const risks = [
  {
    title: "A competitor registers your brand name first",
    desc: "Without a trademark, any competitor can legally register your exact brand name — and force you to rebrand everything overnight.",
  },
  {
    title: "No legal ground to fight copycats",
    desc: "Unregistered brands have almost zero legal recourse against imitators. A registered trademark gives you the power to take immediate action.",
  },
  {
    title: "Blocked from expanding internationally",
    desc: "Entering new markets without trademark protection risks losing your brand identity in every new jurisdiction you enter.",
  },
  {
    title: "Years of brand equity destroyed",
    desc: "Counterfeit products or copycat services using your name can devastate the trust you've spent years building with your customers.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Free Search & Consultation",
    desc: "We conduct a thorough search across the Hong Kong IPD database and international registries to check for conflicts — before you spend a single dollar.",
    duration: "1–3 days",
  },
  {
    step: "02",
    title: "Application Preparation",
    desc: "Our specialists prepare your application with the correct Nice Classification, mark descriptions, and all supporting documentation for first-time approval.",
    duration: "2–5 days",
  },
  {
    step: "03",
    title: "Filing & Examination",
    desc: "We file with the Intellectual Property Department (HK) or via the Madrid Protocol for international coverage, and handle all examiner correspondence.",
    duration: "3–6 months",
  },
  {
    step: "04",
    title: "Certificate Issued",
    desc: "Once approved and the opposition period passes, your trademark certificate is issued. Your brand is legally protected for 10 years — renewable indefinitely.",
    duration: "6–8 months total",
  },
];

interface PricingTier {
  name: string;
  price: string;
  currency: string;
  period: string;
  description: string;
  popular: boolean;
  features: string[];
  govFee: string;
  cta: string;
}

const pricingTiers: PricingTier[] = [
  {
    name: "Essential",
    price: "2,980",
    currency: "HKD",
    period: "per class",
    description: "Trademark filing in Hong Kong with expert search and preparation.",
    popular: false,
    features: [
      "Preliminary trademark search (HK)",
      "Application preparation & filing",
      "Nice Classification advisory",
      "Filing with HK IPD",
      "Status tracking dashboard",
      "Email support",
    ],
    govFee: "+ HKD 2,000 government fee (1st class)",
    cta: "Secure My Brand Name",
  },
  {
    name: "Professional",
    price: "4,980",
    currency: "HKD",
    period: "per class",
    description: "Comprehensive protection with deep search, legal review, and ongoing support.",
    popular: true,
    features: [
      "Everything in Essential",
      "Comprehensive similarity search",
      "Legal opinion on registrability",
      "Office action response (1 round)",
      "Opposition monitoring (3 months)",
      "Dedicated case manager",
      "Priority processing",
      "Phone & video support",
    ],
    govFee: "+ HKD 2,000 government fee (1st class)",
    cta: "Start My Trademark Registration",
  },
  {
    name: "Global",
    price: "12,800",
    currency: "HKD",
    period: "per jurisdiction",
    description: "Full international protection via Madrid Protocol — cover 130+ countries from Hong Kong.",
    popular: false,
    features: [
      "Everything in Professional",
      "International trademark strategy",
      "Madrid Protocol filing",
      "Multi-jurisdiction search",
      "Office action responses (unlimited)",
      "12-month brand monitoring",
      "Renewal reminders & management",
      "Quarterly IP portfolio review",
      "Dedicated senior IP advisor",
    ],
    govFee: "+ WIPO fees from CHF 653 + country fees",
    cta: "Protect My Brand Globally",
  },
];

const whyFujma = [
  {
    icon: <Icon.Globe />,
    title: "Hong Kong + Global Reach",
    desc: "File locally with the IPD or protect your brand in 130+ countries through the Madrid Protocol — all managed by one expert team.",
  },
  {
    icon: <Icon.Shield />,
    title: "98% Approval Rate",
    desc: "Our thorough pre-filing search and expert classification dramatically reduces rejections. If your application faces an issue, we handle it at no extra cost.",
  },
  {
    icon: <Icon.Clock />,
    title: "Transparent Pricing, No Surprises",
    desc: "Government fees are always shown separately. No hidden charges, no confusing bundles — you approve every cost before we file.",
  },
  {
    icon: <Icon.Doc />,
    title: "End-to-End Management",
    desc: "From search to certificate, we handle every step. Track progress in real time and get expert guidance at every stage of the process.",
  },
];

const faqs = [
  {
    q: "How long does trademark registration take in Hong Kong?",
    a: "A smooth (uncontested) application typically takes 6–8 months from filing to certificate issuance. This includes a 3-month opposition period required by the HK Intellectual Property Department. If objections arise, the timeline may extend to 12–18 months.",
  },
  {
    q: "What is the difference between ™ and ®?",
    a: "The ™ symbol can be used by anyone to indicate they consider something their trademark — it has no legal standing. The ® symbol can only be used once your trademark is officially registered. Using ® without registration is actually illegal in most jurisdictions.",
  },
  {
    q: "Do I need to register my trademark in every country?",
    a: "Trademark protection is territorial — registration in Hong Kong only protects you in Hong Kong. For international coverage, we use the Madrid Protocol which allows you to file one application covering 130+ member countries, managed centrally through WIPO.",
  },
  {
    q: "What does it actually cost to register a trademark in Hong Kong?",
    a: "The Hong Kong government charges HKD 2,000 for the first class and HKD 1,000 for each additional class. Our service fees start at HKD 2,980. Total for one class starts from HKD 4,980 (service + government fee). All costs are disclosed upfront.",
  },
  {
    q: "What if my trademark application is rejected?",
    a: "If the examiner raises objections, our Professional and Global packages include office action responses at no extra cost. We handle the correspondence, modify the application if needed, and resubmit. Most objections are procedural and resolved within 2–4 weeks.",
  },
  {
    q: "How long does a trademark last?",
    a: "A Hong Kong trademark is valid for 10 years from the date of application and can be renewed indefinitely in 10-year periods. Renewal fees are HKD 2,670 per class. We offer renewal reminders and management in our Global package.",
  },
  {
    q: "Can I register a trademark myself without a service provider?",
    a: "Yes, but without proper search and classification expertise, self-filed applications have significantly higher rejection rates. Incorrectly classified goods or conflicting marks result in wasted fees and months of delay. Professional filing dramatically improves your first-time approval chances.",
  },
  {
    q: "What can be trademarked?",
    a: "In Hong Kong, you can trademark words, logos, slogans, letters, numerals, colours, sounds, shapes, or any combination — as long as the mark is distinctive and not purely descriptive. We help you determine the strongest filing strategy for your specific brand assets.",
  },
];

/* --- PAGE --- */
export default function TrademarkPage() {
  return (
    <>
      <Header />
      <main className="pt-[72px] bg-white text-gray-900">

        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(99,143,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(99,143,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />
          <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />

          <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-32">
            <div className="max-w-3xl">
              {/* Urgency badge */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-1.5 text-sm text-amber-300">
                <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse" />
                Limited trademark filing slots available this month
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[3.2rem] lg:leading-[1.1]">
                Register Your Trademark
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  Before Someone Else Takes Your Brand
                </span>
                <span className="block text-slate-300 text-3xl sm:text-4xl lg:text-[2.5rem] mt-2">
                  — and Forces You to Rebrand Everything.
                </span>
              </h1>

              <p className="mt-6 text-lg leading-relaxed text-slate-300 sm:text-xl">
                Every day without a registered trademark, your brand name is available for any competitor to claim.
                We file in Hong Kong and{" "}
                <span className="text-white font-semibold">130+ countries</span> with a{" "}
                <span className="text-white font-semibold">98% approval rate</span> &mdash; at a fraction of traditional law firm costs.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href="/contact-us"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-4 text-base font-bold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-500 hover:-translate-y-px"
                >
                  Protect My Brand Now
                  <Icon.Arrow />
                </a>
                <a
                  href="#pricing"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-600 px-8 py-4 text-base font-medium text-slate-300 transition hover:border-slate-400 hover:text-white"
                >
                  View Packages & Pricing
                </a>
              </div>

              <p className="mt-4 text-sm text-slate-500">
                Free consultation &middot; No commitment &middot; Response within 24 hours
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-slate-400">
                {[
                  "98% first-time approval rate",
                  "No hidden fees",
                  "130+ countries covered",
                  "Expert search before filing",
                ].map((item) => (
                  <span key={item} className="flex items-center gap-2">
                    <Icon.Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-slate-300">{item}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* TRUST BAR */}
        <section className="border-b border-gray-100 bg-gray-50">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-10 sm:grid-cols-4">
            {trustStats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl font-bold text-gray-900">{s.value}</p>
                <p className="mt-1 text-sm text-gray-500">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FREE TRADEMARK SEARCH OFFER */}
        <section className="py-16 lg:py-20 bg-white border-b border-gray-100">
          <div className="mx-auto max-w-5xl px-6">
            <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 px-8 py-12 sm:px-14 relative overflow-hidden">
              <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-white/5 blur-3xl pointer-events-none" />
              <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
                <div className="max-w-xl">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/15 border border-white/20 px-3 py-1 text-xs font-bold text-white uppercase tracking-wide mb-4">
                    Free &mdash; Worth HKD 500
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                    Free Trademark Search
                  </h2>
                  <p className="mt-3 text-blue-100 leading-relaxed">
                    Before you spend anything, we search the Hong Kong IPD registry and international databases
                    to check if your brand name is available &mdash; and flag any conflicts that could block your registration.
                    Most clients discover risks they didn&apos;t know existed.
                  </p>
                  <ul className="mt-5 space-y-2">
                    {[
                      "Instant visibility into conflicts and risks",
                      "Covers HK IPD + WIPO Global Brand Database",
                      "Expert assessment of registrability",
                      "Zero cost. Zero commitment.",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-blue-50">
                        <Icon.Check className="w-4 h-4 text-cyan-300 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-shrink-0 w-full lg:w-auto">
                  <a
                    href="/contact-us"
                    className="flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-bold text-blue-700 shadow-xl transition hover:bg-blue-50 w-full lg:w-auto whitespace-nowrap"
                  >
                    Check My Brand Availability
                    <Icon.Arrow className="w-4 h-4" />
                  </a>
                  <p className="mt-2 text-center text-xs text-blue-200">Free &middot; Takes 24 hours &middot; No commitment</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RISK — PROBLEM SECTION */}
        <section className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-red-500 mb-3">The Risk Is Real</p>
            <h2 className="text-3xl font-bold sm:text-4xl">
              What Happens When You{" "}
              <span className="text-red-500">Don&apos;t</span> Register
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Every day without trademark protection, your brand name is exposed. Here&apos;s exactly what&apos;s at stake.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {risks.map((r) => (
              <div
                key={r.title}
                className="rounded-xl border border-red-100 bg-red-50/50 p-6 transition hover:shadow-md"
              >
                <div className="flex items-start gap-3">
                  <Icon.Alert />
                  <div>
                    <h3 className="font-semibold text-gray-900">{r.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">{r.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA callout */}
          <div className="mt-12 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-center text-white sm:p-12">
            <h3 className="text-2xl font-bold sm:text-3xl">
              A registered trademark is your legal shield — and your competitive weapon.
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-blue-100">
              It gives you exclusive ownership, the right to sue infringers, and the power to license your brand.
              Registration is the single most important step to secure your business identity — in Hong Kong and worldwide.
            </p>
            <a
              href="/contact-us"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 font-bold text-blue-700 transition hover:bg-blue-50"
            >
              Start My Trademark Registration
              <Icon.Arrow />
            </a>
            <p className="mt-3 text-sm text-blue-300">Free consultation &middot; No commitment</p>
          </div>
        </section>

        {/* RISK REVERSAL — HONEST ASSESSMENT */}
        <section className="bg-slate-50 py-16 lg:py-20 border-y border-slate-100">
          <div className="mx-auto max-w-4xl px-6">
            <div className="flex flex-col sm:flex-row items-start gap-6 rounded-2xl bg-white border border-slate-200 p-8 shadow-sm">
              <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <Icon.Shield className="w-7 h-7 text-emerald-600" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-2">Our Commitment to You</p>
                <h3 className="text-xl font-bold text-gray-900">
                  If Your Trademark Is Not Viable, We Tell You Before You File
                </h3>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  Our pre-filing search is not a formality &mdash; it&apos;s a genuine assessment.
                  If we identify conflicts, similarity issues, or reasons your mark may not register,
                  we tell you honestly before you spend on government fees.
                  No wasted money. No false promises. Just expert guidance.
                </p>
                <div className="mt-5 grid sm:grid-cols-3 gap-4">
                  {[
                    { label: "No wasted government fees", sub: "We search first, file second" },
                    { label: "Honest registrability opinion", sub: "Not just a sales pitch" },
                    { label: "Alternative strategies", sub: "If Plan A has obstacles" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-2">
                      <Icon.Check className="w-4 h-4 text-emerald-500 shrink-0 mt-1" />
                      <div>
                        <p className="text-sm font-semibold text-gray-900">{item.label}</p>
                        <p className="text-xs text-gray-500 mt-0.5">{item.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT IS INCLUDED */}
        <section className="bg-gray-50 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-3">What We Handle</p>
              <h2 className="text-3xl font-bold sm:text-4xl">
                Everything You Need to Secure Your Trademark
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                From search to certificate, we handle every step so you can focus on growing your brand.
              </p>
            </div>
            <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: <Icon.Search />,
                  title: "Comprehensive Trademark Search",
                  desc: "We search the Hong Kong IPD registry, WIPO Global Brand Database, and local common law sources to identify potential conflicts before you file.",
                },
                {
                  icon: <Icon.Doc />,
                  title: "Expert Application Preparation",
                  desc: "Correct Nice Classification, precise goods/services descriptions, and all required documentation — prepared by experienced IP specialists for first-time approval.",
                },
                {
                  icon: <Icon.Shield />,
                  title: "Filing & Prosecution",
                  desc: "We file with the relevant authority and handle all correspondence, office actions, and examiner queries on your behalf — until your certificate is issued.",
                },
                {
                  icon: <Icon.Globe />,
                  title: "International Coverage",
                  desc: "Extend protection to 130+ countries via the Madrid Protocol. One central application, managed through WIPO, with local expertise in each market.",
                },
                {
                  icon: <Icon.Clock />,
                  title: "Monitoring & Alerts",
                  desc: "Post-registration monitoring to detect similar marks being filed. We alert you to potential infringements so you can act before they become a problem.",
                },
                {
                  icon: <Icon.Doc />,
                  title: "Renewal Management",
                  desc: "Trademarks last 10 years. We track renewal dates, send reminders, and handle the renewal process so your protection never lapses.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl bg-white p-6 shadow-sm transition hover:shadow-md border border-gray-100"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                    {item.icon}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section id="process" className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-3">The Process</p>
            <h2 className="text-3xl font-bold sm:text-4xl">
              From Brand to Legally Protected in 4 Steps
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We&apos;ve streamlined the entire trademark process. Here&apos;s exactly what happens after you get in touch.
            </p>
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((s, idx) => (
              <div key={s.step} className="relative">
                {idx < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-7 left-full w-full h-px bg-gradient-to-r from-blue-200 to-transparent -translate-x-4 z-0" />
                )}
                <span className="text-5xl font-black text-blue-100">{s.step}</span>
                <h3 className="mt-2 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{s.desc}</p>
                <p className="mt-3 inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                  {s.duration}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" className="bg-gray-50 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-3">Pricing</p>
              <h2 className="text-3xl font-bold sm:text-4xl">
                Transparent Pricing. No Hidden Fees.
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Choose the level of protection that fits your business. Government fees are always shown separately.
              </p>
              <div className="mt-4 inline-flex items-center gap-2 text-sm text-amber-700 bg-amber-50 border border-amber-200 rounded-full px-4 py-1.5 font-medium">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse" />
                Fast-track review slots available this month
              </div>
            </div>

            <div className="mt-14 grid gap-8 lg:grid-cols-3">
              {pricingTiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`relative flex flex-col rounded-2xl bg-white p-8 shadow-sm transition hover:shadow-lg ${
                    tier.popular
                      ? "ring-2 ring-blue-600 shadow-lg"
                      : "border border-gray-200"
                  }`}
                >
                  {tier.popular && (
                    <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-4 py-1 text-xs font-semibold text-white">
                      Most Popular
                    </span>
                  )}
                  <h3 className="text-lg font-semibold text-gray-900">{tier.name}</h3>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-sm text-gray-500">{tier.currency}</span>
                    <span className="text-4xl font-bold">{tier.price}</span>
                    <span className="text-sm text-gray-500">/{tier.period}</span>
                  </div>
                  <p className="mt-1 text-xs text-gray-400">{tier.govFee}</p>
                  <p className="mt-4 text-sm text-gray-600">{tier.description}</p>
                  <ul className="mt-6 flex-1 space-y-3">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                        <Icon.Check />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/contact-us"
                    className={`mt-8 block rounded-xl py-3.5 text-center font-bold text-sm transition ${
                      tier.popular
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25 hover:bg-blue-500"
                        : "bg-gray-900 text-white hover:bg-gray-800"
                    }`}
                  >
                    {tier.cta}
                  </a>
                  <p className="mt-2 text-center text-xs text-gray-400">Free consultation &middot; No commitment</p>
                </div>
              ))}
            </div>

            <div className="mx-auto mt-12 max-w-2xl rounded-xl border border-blue-100 bg-blue-50/50 p-6 text-center">
              <h4 className="font-semibold text-gray-900">Government Fees (Hong Kong IPD)</h4>
              <p className="mt-2 text-sm text-gray-600">
                Application fee:{" "}
                <span className="font-semibold">HKD 2,000</span> for the first class &nbsp;&middot;&nbsp;{" "}
                <span className="font-semibold">HKD 1,000</span> per additional class &nbsp;&middot;&nbsp;{" "}
                Renewal: <span className="font-semibold">HKD 2,670</span> per class (every 10 years)
              </p>
              <p className="mt-1 text-xs text-gray-400">
                Government fees are paid directly to the HK IPD and are non-refundable. International (WIPO) fees vary by country.
              </p>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <div className="mx-auto max-w-3xl text-center mb-14">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-3">Client Results</p>
            <h2 className="text-3xl font-bold sm:text-4xl">
              Real brands. Real protection.
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              From first-time founders to scaling brands &mdash; here&apos;s what they protected with Fujma.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                quote: "A competitor tried to register our brand name in the UAE. Fujma had already secured our trademark there — we had full legal standing to block them immediately. Saved us from a complete rebrand.",
                name: "Karim A.",
                role: "Consumer brand founder",
                country: "UAE 🇦🇪",
                initials: "KA",
                result: "Blocked competitor registration",
              },
              {
                quote: "I didn't realise my logo was too similar to an existing mark until Fujma's search flagged it. They caught it before I filed — saving me HKD 4,000 in government fees and months of delay.",
                name: "Sophie L.",
                role: "E-commerce brand owner",
                country: "France 🇫🇷",
                initials: "SL",
                result: "Avoided costly filing mistake",
              },
              {
                quote: "Fujma filed in Hong Kong, Morocco, and the EU in one go via Madrid Protocol. Three markets covered with one team, one invoice, and zero confusion. 8 months later, all three certificates arrived.",
                name: "Youssef B.",
                role: "Import & distribution business",
                country: "Morocco 🇲🇦",
                initials: "YB",
                result: "3 markets covered in one filing",
              },
            ].map((t) => (
              <div key={t.name} className="flex flex-col justify-between rounded-2xl border border-gray-100 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
                <div>
                  <div className="flex gap-0.5 mb-5">
                    {[...Array(5)].map((_, i) => <Icon.Star key={i} />)}
                  </div>
                  <p className="text-[15px] leading-relaxed text-gray-700">&ldquo;{t.quote}&rdquo;</p>
                </div>
                <div className="mt-6">
                  <div className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 border border-emerald-100">
                    <Icon.Check className="w-3 h-3 text-emerald-600 shrink-0" />
                    {t.result}
                  </div>
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-50">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center text-sm font-bold text-white flex-shrink-0">
                      {t.initials}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                      <p className="text-xs text-gray-400">{t.role} &middot; {t.country}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* WHY FUJMA */}
        <section className="bg-gray-50 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-3">Why Fujma</p>
              <h2 className="text-3xl font-bold sm:text-4xl">Why Businesses Choose Fujma</h2>
              <p className="mt-4 text-lg text-gray-600">
                We combine the expertise of a specialist IP firm with the transparency and speed of a modern platform.
              </p>
            </div>
            <div className="mt-14 grid gap-8 sm:grid-cols-2">
              {whyFujma.map((w) => (
                <div key={w.title} className="flex gap-4 rounded-xl border border-gray-100 bg-white p-6 transition hover:shadow-md">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                    {w.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{w.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">{w.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 flex flex-wrap items-center justify-center gap-8 border-t border-gray-100 pt-12">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => <Icon.Star key={i} />)}
                <span className="ml-2 text-sm font-medium text-gray-700">4.9 / 5</span>
              </div>
              <span className="text-sm text-gray-400">|</span>
              <span className="text-sm text-gray-600">Trusted by startups, SMEs, and enterprises across 40+ industries</span>
              <span className="text-sm text-gray-400">|</span>
              <span className="text-sm text-gray-600">Hong Kong &middot; Singapore &middot; International</span>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="mx-auto max-w-3xl px-6">
            <div className="text-center mb-14">
              <p className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-3">FAQ</p>
              <h2 className="text-3xl font-bold sm:text-4xl">Common Questions</h2>
              <p className="mt-4 text-lg text-gray-600">
                Everything you need to know about trademark registration.
              </p>
            </div>
            <div className="space-y-3">
              {faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="group rounded-xl border border-gray-200 bg-white"
                >
                  <summary className="flex cursor-pointer select-none items-center justify-between p-5 font-semibold text-gray-900 hover:text-blue-600 transition-colors list-none">
                    <span>{faq.q}</span>
                    <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 transition-all duration-200 group-open:rotate-180 group-open:bg-blue-50 ml-4">
                      <svg className="w-4 h-4 text-gray-400 group-open:text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-[15px] leading-relaxed text-gray-500">{faq.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 py-24 sm:py-32">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(99,143,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(99,143,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />
          <div className="absolute top-1/2 left-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/8 blur-3xl pointer-events-none" />

          <div className="relative mx-auto max-w-3xl px-6 text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-400 mb-4">
              Your Brand Deserves Legal Protection
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl leading-tight">
              Don&apos;t wait until someone
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                takes your brand from you.
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
              Join 2,500+ businesses that trusted Fujma to protect their brand &mdash;
              fast, transparent, and with a 98% approval rate.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="/contact-us"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-9 py-4 text-base font-bold text-white shadow-xl shadow-blue-600/20 transition hover:bg-blue-500 hover:-translate-y-px"
              >
                Protect My Brand Now
                <Icon.Arrow />
              </a>
              <CalendlyButton className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-9 py-4 text-base font-semibold text-white transition hover:bg-white/10 hover:border-white/20">
                Book Free Consultation
              </CalendlyButton>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-slate-500">
              {[
                "Free brand availability search",
                "98% first-time approval rate",
                "Response within 24 hours",
              ].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <Icon.Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{item}</span>
                </span>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
