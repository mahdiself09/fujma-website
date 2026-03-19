"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// --- ICON COMPONENTS ---

function IconSearch({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
  );
}

function IconShield({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  );
}

function IconTruck({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
    </svg>
  );
}

function IconCurrency({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function IconCheck({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

function IconStar({ className = "w-6 h-6", filled = true }: { className?: string; filled?: boolean }) {
  return (
    <svg className={className} fill={filled ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={filled ? 0 : 1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function IconPackage({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
    </svg>
  );
}

function IconClipboard({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
    </svg>
  );
}

function IconPaint({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
    </svg>
  );
}

function IconArrowRight({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  );
}

function IconWarning({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
    </svg>
  );
}

function IconGlobe({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  );
}

function IconChevronDown({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

function IconWhatsApp({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function IconLock({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
    </svg>
  );
}

const WA_LINK = "https://wa.me/85259269273";

// --- FAQ ACCORDION ---

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-base font-medium text-gray-900 group-hover:text-blue-600 transition-colors pr-4">
          {question}
        </span>
        <IconChevronDown
          className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96 pb-5" : "max-h-0"}`}>
        <p className="text-gray-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

// --- TESTIMONIAL CARD ---

function TestimonialCard({
  name,
  country,
  role,
  avatar,
  quote,
  result,
}: {
  name: string;
  country: string;
  role: string;
  avatar: string;
  quote: string;
  result: string;
}) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col gap-4">
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <IconStar key={i} className="w-4 h-4 text-amber-400" filled />
        ))}
      </div>
      <p className="text-gray-700 leading-relaxed text-sm flex-1">&ldquo;{quote}&rdquo;</p>
      <div className="inline-flex items-center gap-1.5 bg-green-50 border border-green-100 rounded-full px-3 py-1 w-fit">
        <IconCheck className="w-3.5 h-3.5 text-green-600" />
        <span className="text-xs font-semibold text-green-700">{result}</span>
      </div>
      <div className="flex items-center gap-3 pt-2 border-t border-gray-50">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
          {avatar}
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-900">{name}</p>
          <p className="text-xs text-gray-500">{role} &middot; {country}</p>
        </div>
      </div>
    </div>
  );
}

// --- FLOATING WHATSAPP ---

function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(t);
  }, []);

  return (
    <a
      href={`${WA_LINK}?text=Hi%20Fujma%2C%20I%27d%20like%20to%20discuss%20sourcing%20from%20China`}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] text-white pl-4 pr-5 py-3.5 rounded-full shadow-2xl shadow-green-500/30 font-semibold text-sm transition-all duration-500 hover:scale-105 hover:shadow-green-500/50 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      <IconWhatsApp className="w-5 h-5" />
      Chat on WhatsApp
    </a>
  );
}

// --- TRUST BAR ---

function TrustBar() {
  const items = [
    { icon: "🇭🇰", text: "Hong Kong Registered" },
    { icon: "✅", text: "Verified Supplier Network" },
    { icon: "🔒", text: "100% Secure & Confidential" },
    { icon: "⚡", text: "Response in 24h or less" },
    { icon: "🌍", text: "12+ Countries Served" },
  ];
  return (
    <div className="bg-gray-950 border-b border-white/5 py-3">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs text-gray-400">
          {items.map((item) => (
            <div key={item.text} className="flex items-center gap-1.5">
              <span>{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// --- SOURCING FORM ---

function SourcingForm() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    product: "",
    hasSample: "",
    targetPrice: "",
    quantity: "",
    targetMarket: "",
    name: "",
    email: "",
    whatsapp: "",
    country: "",
    businessLevel: "",
    message: "",
  });

  const updateField = (field: string, value: string) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const canProceedStep1 = formData.product.trim() && formData.quantity;
  const canProceedStep2 = formData.name.trim() && formData.email.trim() && formData.whatsapp.trim();

  const inputClass =
    "w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-900 placeholder:text-gray-400 bg-gray-50 focus:bg-white text-sm";

  if (submitted) {
    return (
      <div className="text-center py-8 space-y-4">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
          <IconCheck className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-gray-900">Request Received!</h3>
        <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
          We&apos;ll review your request and a sourcing specialist will contact you on WhatsApp within 24 hours.
        </p>
        <a
          href={`${WA_LINK}?text=Hi%20Fujma%2C%20I%20just%20submitted%20a%20sourcing%20request%20for%20${encodeURIComponent(formData.product)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-[#22c35e] transition-colors mt-2"
        >
          <IconWhatsApp className="w-4 h-4" />
          Speed things up &mdash; chat now
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-0">
      {/* Progress */}
      <div className="flex items-center justify-between mb-7">
        {[
          { num: 1, label: "Your Product" },
          { num: 2, label: "About You" },
          { num: 3, label: "Send Request" },
        ].map((s, i) => (
          <div key={s.num} className="flex items-center flex-1">
            <div className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                  step > s.num
                    ? "bg-blue-600 text-white"
                    : step === s.num
                    ? "bg-blue-600 text-white ring-4 ring-blue-100"
                    : "bg-gray-100 text-gray-400"
                }`}
              >
                {step > s.num ? <IconCheck className="w-3.5 h-3.5" /> : s.num}
              </div>
              <span
                className={`ml-2 text-xs font-medium hidden sm:inline ${
                  step >= s.num ? "text-gray-800" : "text-gray-400"
                }`}
              >
                {s.label}
              </span>
            </div>
            {i < 2 && (
              <div className={`flex-1 h-px mx-3 transition-colors ${step > s.num ? "bg-blue-500" : "bg-gray-200"}`} />
            )}
          </div>
        ))}
      </div>

      {/* STEP 1 */}
      {step === 1 && (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-1.5">
              What product do you want to source? <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.product}
              onChange={(e) => updateField("product", e.target.value)}
              placeholder="e.g., Silicone kitchen utensils, LED desk lamp, Custom packaging..."
              className={inputClass}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-1.5">
              Do you have a sample or reference?
            </label>
            <div className="flex gap-2">
              {["Yes, I have a sample", "No, I need help finding one"].map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => updateField("hasSample", opt)}
                  className={`flex-1 px-3 py-2.5 rounded-xl border text-xs font-medium transition-all ${
                    formData.hasSample === opt
                      ? "border-blue-600 bg-blue-50 text-blue-700"
                      : "border-gray-200 text-gray-600 hover:border-gray-300 bg-gray-50"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-1.5">
                Target price (USD){" "}
                <span className="text-gray-400 font-normal text-xs">optional</span>
              </label>
              <input
                type="text"
                value={formData.targetPrice}
                onChange={(e) => updateField("targetPrice", e.target.value)}
                placeholder="e.g., $2–5/unit"
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-1.5">
                Quantity <span className="text-red-500">*</span>
              </label>
              <select
                value={formData.quantity}
                onChange={(e) => updateField("quantity", e.target.value)}
                className={`${inputClass} appearance-none`}
                required
              >
                <option value="">Select range</option>
                <option value="100-500">100 – 500 units</option>
                <option value="500-1000">500 – 1,000 units</option>
                <option value="1000-5000">1,000 – 5,000 units</option>
                <option value="5000+">5,000+ units</option>
                <option value="not-sure">Not sure yet</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-1.5">
              Where will you sell?
            </label>
            <div className="flex flex-wrap gap-2">
              {["Morocco", "Europe (EU)", "USA", "Middle East / Africa", "Other"].map((market) => (
                <button
                  key={market}
                  type="button"
                  onClick={() => updateField("targetMarket", market)}
                  className={`px-3 py-2 rounded-lg border text-xs font-medium transition-all ${
                    formData.targetMarket === market
                      ? "border-blue-600 bg-blue-50 text-blue-700"
                      : "border-gray-200 text-gray-600 hover:border-gray-300 bg-gray-50"
                  }`}
                >
                  {market}
                </button>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => setStep(2)}
            disabled={!canProceedStep1}
            className="w-full py-3.5 bg-blue-600 text-white rounded-xl font-bold text-sm hover:bg-blue-700 transition-all disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-md shadow-blue-600/20"
          >
            Next Step – Tell Us About You
            <IconArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* STEP 2 */}
      {step === 2 && (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-1.5">
              Full name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => updateField("name", e.target.value)}
              placeholder="Your full name"
              className={inputClass}
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-1.5">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => updateField("email", e.target.value)}
                placeholder="you@email.com"
                className={inputClass}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-1.5">
                WhatsApp <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                value={formData.whatsapp}
                onChange={(e) => updateField("whatsapp", e.target.value)}
                placeholder="+212 6XX XXX XXX"
                className={inputClass}
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-1.5">Country</label>
            <input
              type="text"
              value={formData.country}
              onChange={(e) => updateField("country", e.target.value)}
              placeholder="Morocco, France, UAE..."
              className={inputClass}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-1.5">
              Where are you in your journey?
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { value: "beginner", label: "Just Starting", desc: "First product" },
                { value: "scaling", label: "Scaling Up", desc: "Already selling" },
                { value: "established", label: "Established", desc: "Growing brand" },
              ].map((level) => (
                <button
                  key={level.value}
                  type="button"
                  onClick={() => updateField("businessLevel", level.value)}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    formData.businessLevel === level.value
                      ? "border-blue-600 bg-blue-50"
                      : "border-gray-200 hover:border-gray-300 bg-gray-50"
                  }`}
                >
                  <span className={`block text-xs font-bold ${formData.businessLevel === level.value ? "text-blue-700" : "text-gray-900"}`}>
                    {level.label}
                  </span>
                  <span className="block text-xs text-gray-500 mt-0.5">{level.desc}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="px-5 py-3 border border-gray-200 text-gray-700 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors"
            >
              Back
            </button>
            <button
              type="button"
              onClick={() => setStep(3)}
              disabled={!canProceedStep2}
              className="flex-1 py-3 bg-blue-600 text-white rounded-xl font-bold text-sm hover:bg-blue-700 transition-all disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-md shadow-blue-600/20"
            >
              Last Step
              <IconArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 3 */}
      {step === 3 && (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-1.5">
              Anything else we should know?{" "}
              <span className="text-gray-400 font-normal text-xs">optional</span>
            </label>
            <textarea
              value={formData.message}
              onChange={(e) => updateField("message", e.target.value)}
              placeholder="Specific requirements, branding needs, timeline, reference links..."
              rows={4}
              className={`${inputClass} resize-none`}
            />
          </div>

          <div className="bg-blue-50 rounded-xl p-4 space-y-2.5 border border-blue-100">
            <p className="text-xs font-bold text-blue-900 uppercase tracking-wide">What happens next</p>
            {[
              "We review your request within 24 hours",
              "A sourcing specialist contacts you on WhatsApp",
              "You receive verified supplier quotes within 3–5 days",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center flex-shrink-0 font-bold mt-0.5">
                  {i + 1}
                </div>
                <span className="text-sm text-blue-900">{item}</span>
              </div>
            ))}
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setStep(2)}
              className="px-5 py-3 border border-gray-200 text-gray-700 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors"
            >
              Back
            </button>
            <button
              type="submit"
              className="flex-1 py-3.5 bg-blue-600 text-white rounded-xl font-bold text-sm hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/25"
            >
              Get My Free Sourcing Quotes
              <IconArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center justify-center gap-4 text-xs text-gray-400 pt-1">
            <span className="flex items-center gap-1"><IconLock className="w-3 h-3" /> No spam</span>
            <span>&middot;</span>
            <span>Free consultation</span>
            <span>&middot;</span>
            <span>No commitment</span>
          </div>
        </div>
      )}
    </form>
  );
}

// --- MAIN PAGE ---

export default function SourcingPage() {
  return (
    <>
      <Header />
      <FloatingWhatsApp />

      <main className="pt-[72px]">
        {/* TRUST BAR */}
        <TrustBar />

        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[600px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-24 lg:pt-28 lg:pb-32">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 mb-7">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span>3 sourcing requests submitted today</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-white tracking-tight leading-[1.1]">
                You Don&apos;t Need Luck
                <br />
                to Source from China.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  You Need Fujma.
                </span>
              </h1>

              <p className="mt-5 text-lg sm:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
                We find{" "}
                <span className="text-white font-medium">verified suppliers</span>, negotiate pricing,
                inspect quality, and ship straight to your door &mdash; so you can build your brand without the{" "}
                <span className="text-red-400 font-medium">scams, defects, and delays</span>.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="#sourcing-form"
                  className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/30 flex items-center justify-center gap-2 text-base"
                >
                  Get Free Supplier Quotes
                  <IconArrowRight className="w-4 h-4" />
                </a>
                <a
                  href={`${WA_LINK}?text=Hi%20Fujma%2C%20I%27d%20like%20to%20discuss%20sourcing`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] rounded-xl font-bold hover:bg-[#25D366]/20 transition-all flex items-center justify-center gap-2 text-base"
                >
                  <IconWhatsApp className="w-5 h-5" />
                  WhatsApp Us Now
                </a>
              </div>

              <p className="mt-4 text-sm text-gray-600">
                Free consultation &middot; No commitment &middot; Response in 24h
              </p>

              <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-lg mx-auto">
                {[
                  { value: "500+", label: "Products Sourced" },
                  { value: "50+", label: "Brands Launched" },
                  { value: "12+", label: "Countries Served" },
                  { value: "24h", label: "Response Time" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROBLEM SECTION */}
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-14">
              <p className="text-sm font-bold text-red-600 tracking-widest uppercase mb-3">The Problem</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
                Sourcing from China shouldn&apos;t feel like gambling
              </h2>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                Every year, thousands of entrepreneurs lose money to unreliable suppliers, defective products, and shipping disasters.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  icon: <IconWarning className="w-6 h-6" />,
                  title: "Scam Suppliers",
                  description: "You contact a supplier on Alibaba. They look legit. You send money. The product arrives — wrong color, wrong material, or never arrives at all.",
                  bg: "bg-red-50", iconColor: "text-red-500", border: "border-red-100",
                },
                {
                  icon: <IconShield className="w-6 h-6" />,
                  title: "No Quality Control",
                  description: "Without someone on the ground in China inspecting your order, you only discover defects after it reaches your warehouse.",
                  bg: "bg-orange-50", iconColor: "text-orange-500", border: "border-orange-100",
                },
                {
                  icon: <IconCurrency className="w-6 h-6" />,
                  title: "Hidden Costs",
                  description: "Unexpected duties, surprise shipping fees, and last-minute price changes destroy your margin before your product even launches.",
                  bg: "bg-amber-50", iconColor: "text-amber-500", border: "border-amber-100",
                },
                {
                  icon: <IconTruck className="w-6 h-6" />,
                  title: "Shipping Chaos",
                  description: "Wrong freight forwarder? Your product sits in a warehouse for months. No visibility, no accountability, no answers.",
                  bg: "bg-blue-50", iconColor: "text-blue-500", border: "border-blue-100",
                },
                {
                  icon: <IconGlobe className="w-6 h-6" />,
                  title: "Language Barriers",
                  description: "Nuances get lost in translation. The manufacturer builds what they understood, not what you actually asked for.",
                  bg: "bg-purple-50", iconColor: "text-purple-500", border: "border-purple-100",
                },
                {
                  icon: <IconPackage className="w-6 h-6" />,
                  title: "MOQ Confusion",
                  description: "You're quoted 10,000 units minimum. You wanted 500. And you don't know whether negotiation is even possible.",
                  bg: "bg-green-50", iconColor: "text-green-500", border: "border-green-100",
                },
              ].map((pain) => (
                <div key={pain.title} className={`${pain.bg} border ${pain.border} rounded-2xl p-6`}>
                  <div className={`${pain.iconColor} mb-3`}>{pain.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{pain.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{pain.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-5 text-lg">
                We&apos;ve solved every one of these problems for 50+ brands.
              </p>
              <a
                href="#sourcing-form"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-xl font-bold hover:bg-gray-800 transition-all shadow-lg"
              >
                Let Us Handle It For You
                <IconArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how-it-works" className="py-20 lg:py-28 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center mb-14">
              <p className="text-sm font-bold text-blue-600 tracking-widest uppercase mb-3">How It Works</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
                From idea to delivered product in 4 steps
              </h2>
            </div>

            <div className="relative">
              <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gray-200" />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { step: "01", icon: <IconClipboard className="w-6 h-6" />, title: "Submit Your Request", description: "Tell us what you want to build. Takes 2 minutes. No commitment.", time: "2 min" },
                  { step: "02", icon: <IconSearch className="w-6 h-6" />, title: "We Find Suppliers", description: "Our team sources 3–5 verified manufacturers and sends you comparable quotes.", time: "3–5 days" },
                  { step: "03", icon: <IconPaint className="w-6 h-6" />, title: "Sampling & Approval", description: "Review samples. We manage the quality inspection in China before production.", time: "1–2 weeks" },
                  { step: "04", icon: <IconTruck className="w-6 h-6" />, title: "Production & Delivery", description: "We handle logistics, customs, and shipping directly to your location.", time: "4–8 weeks" },
                ].map((s) => (
                  <div key={s.step} className="relative text-center group">
                    <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-blue-600 transition-colors duration-300">
                      <div className="text-blue-600 group-hover:text-white transition-colors duration-300">
                        {s.icon}
                      </div>
                    </div>
                    <div className="absolute top-0 right-1/2 translate-x-8 -translate-y-1 bg-blue-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                      {s.step}
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-3">{s.description}</p>
                    <span className="inline-block bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-1 rounded-full">
                      ⏱ {s.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 text-center">
              <a
                href="#sourcing-form"
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/25"
              >
                Start Step 1 &mdash; It&apos;s Free
                <IconArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-20 lg:py-28 bg-gray-950">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center mb-14">
              <p className="text-sm font-bold text-blue-400 tracking-widest uppercase mb-3">Client Results</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Real brands. Real results.
              </h2>
              <p className="mt-4 text-gray-400">
                From first-time entrepreneurs to 7-figure sellers &mdash; here&apos;s what they say.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
              <TestimonialCard
                name="Karim B."
                country="Morocco 🇲🇦"
                role="E-commerce Founder"
                avatar="KB"
                quote="I wasted 3 months trying to find a supplier on Alibaba. Fujma found me 4 verified ones in 5 days. My first order was 1,000 units of branded packaging. Zero issues."
                result="First order: 1,000 units shipped"
              />
              <TestimonialCard
                name="Sara M."
                country="France 🇫🇷"
                role="Beauty Brand Owner"
                avatar="SM"
                quote="The quality inspection service alone saved me thousands. They caught a defect before shipping that would have ruined my launch. Worth every penny."
                result="Defects caught before shipping"
              />
              <TestimonialCard
                name="Ahmed R."
                country="UAE 🇦🇪"
                role="Amazon Seller"
                avatar="AR"
                quote="Fujma handled everything — supplier negotiation, private label, customs to Dubai. I just focused on marketing. Sales hit $30k in the first 2 months."
                result="$30k revenue in 60 days"
              />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { value: "4.9/5", label: "Average Rating", sub: "from 120+ clients" },
                { value: "97%", label: "Satisfaction Rate", sub: "repeat clients" },
                { value: "0", label: "Scam Incidents", sub: "since founding" },
                { value: "50+", label: "Brands Launched", sub: "across 12 countries" },
              ].map((s) => (
                <div key={s.label} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-white">{s.value}</div>
                  <div className="text-sm font-medium text-gray-300 mt-1">{s.label}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT WE HANDLE */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center mb-14">
              <p className="text-sm font-bold text-blue-600 tracking-widest uppercase mb-3">What We Handle</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
                End-to-end. So you don&apos;t have to.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  icon: <IconSearch className="w-6 h-6" />,
                  title: "Supplier Research & Vetting",
                  items: ["3–5 verified quotes per product", "Factory background checks", "MOQ negotiation", "Sample coordination"],
                },
                {
                  icon: <IconShield className="w-6 h-6" />,
                  title: "Quality Inspection",
                  items: ["Pre-shipment inspection in China", "Defect detection before you pay", "Photo & video reports", "Third-party lab testing (if needed)"],
                },
                {
                  icon: <IconPaint className="w-6 h-6" />,
                  title: "Brand & Packaging",
                  items: ["Private label design", "Custom packaging", "Logo & brand identity", "Product listing ready assets"],
                },
                {
                  icon: <IconTruck className="w-6 h-6" />,
                  title: "Logistics & Shipping",
                  items: ["Air and sea freight", "Door-to-door delivery", "Customs clearance", "Real-time tracking"],
                },
                {
                  icon: <IconClipboard className="w-6 h-6" />,
                  title: "HK Company & Trademark",
                  items: ["Hong Kong company formation", "Trademark registration", "IP protection strategy", "Business documentation"],
                },
                {
                  icon: <IconGlobe className="w-6 h-6" />,
                  title: "Import & Compliance",
                  items: ["Import documentation", "HS code classification", "Duty optimization", "Destination-country compliance"],
                },
              ].map((service) => (
                <div
                  key={service.title}
                  className="border border-gray-100 rounded-2xl p-6 hover:border-blue-200 hover:shadow-md transition-all group"
                >
                  <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-200 w-fit">
                    {service.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-3">{service.title}</h3>
                  <ul className="space-y-1.5">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                        <IconCheck className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SOURCING FORM */}
        <section id="sourcing-form" className="py-20 lg:py-28 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <p className="text-sm font-bold text-blue-600 tracking-widest uppercase mb-3">Free Consultation</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
                Tell us what you want to build
              </h2>
              <p className="mt-3 text-gray-600">
                It takes 2 minutes. No payment, no commitment &mdash; just your first step toward a real brand.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
              {/* Form */}
              <div className="lg:col-span-3 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <SourcingForm />
              </div>

              {/* Trust sidebar */}
              <div className="lg:col-span-2 space-y-5">
                <div className="bg-[#075E54] rounded-2xl p-6 text-white">
                  <div className="flex items-center gap-3 mb-3">
                    <IconWhatsApp className="w-7 h-7" />
                    <h3 className="font-bold text-lg">Prefer to chat?</h3>
                  </div>
                  <p className="text-green-100 text-sm mb-4 leading-relaxed">
                    Skip the form and talk directly with a sourcing specialist. We respond within minutes during business hours.
                  </p>
                  <a
                    href={`${WA_LINK}?text=Hi%20Fujma%2C%20I%27d%20like%20to%20discuss%20sourcing%20from%20China`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-5 py-3 rounded-xl font-bold text-sm hover:bg-[#22c35e] transition-colors w-full"
                  >
                    <IconWhatsApp className="w-4 h-4" />
                    Message Us on WhatsApp
                  </a>
                </div>

                <div className="bg-white rounded-2xl border border-gray-100 p-6 space-y-4">
                  <h3 className="font-bold text-gray-900 text-sm">Why brands choose Fujma</h3>
                  {[
                    { icon: "🏭", title: "Verified suppliers only", desc: "We don't send you a list. We vet manufacturers personally." },
                    { icon: "🛡️", title: "Quality guaranteed", desc: "Pre-shipment inspection included in every order." },
                    { icon: "📦", title: "End-to-end service", desc: "From idea to your warehouse. One team, full accountability." },
                    { icon: "🇭🇰", title: "HK-registered company", desc: "Transparent, professional, and legally accountable." },
                  ].map((point) => (
                    <div key={point.title} className="flex gap-3">
                      <span className="text-xl flex-shrink-0">{point.icon}</span>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">{point.title}</p>
                        <p className="text-xs text-gray-500 mt-0.5">{point.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-white rounded-2xl border border-gray-100 p-5">
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(5)].map((_, i) => <IconStar key={i} className="w-3.5 h-3.5 text-amber-400" filled />)}
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed italic">
                    &ldquo;Submitted the form on a Tuesday. Had 4 supplier quotes on Friday. Placed my order the following week.&rdquo;
                  </p>
                  <div className="flex items-center gap-2 mt-3">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white text-xs font-bold">
                      OT
                    </div>
                    <span className="text-xs text-gray-500">Omar T. &middot; Morocco</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-sm font-bold text-blue-600 tracking-widest uppercase mb-3">FAQ</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
                Questions we get all the time
              </h2>
            </div>

            <div className="divide-y divide-gray-200 rounded-2xl border border-gray-100 bg-gray-50 px-6">
              {[
                { question: "Do I need prior experience to use Fujma?", answer: "Not at all. Many of our clients are first-time entrepreneurs. We guide you through every step — from choosing a product to receiving your shipment. You just need an idea." },
                { question: "What is the minimum order quantity?", answer: "It varies by product and manufacturer. We regularly negotiate starting orders of 100–300 units for first-time clients, far below what Alibaba typically advertises. We'll find the right factory for your scale." },
                { question: "How do you prevent scams and bad suppliers?", answer: "We have an established network of vetted manufacturers built over years on the ground in China. We also conduct pre-shipment inspections. Every supplier we recommend has been independently verified." },
                { question: "How long does the whole process take?", answer: "From first consultation to delivered product: typically 6–12 weeks depending on production complexity, quantity, and shipping method. We keep you updated at every stage." },
                { question: "Can you help me build my brand, not just source products?", answer: "Yes — that's actually our specialty. We offer private labeling, custom packaging design, Hong Kong company formation, and trademark registration. We're a full brand-building partner, not just a sourcing agent." },
                { question: "Do you work with clients outside Morocco?", answer: "Yes. We serve clients across Europe, the Middle East, North Africa, the USA, and beyond. We ship to 12+ countries and handle international logistics end-to-end." },
              ].map((faq) => (
                <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-20 lg:py-28 bg-gradient-to-b from-gray-950 to-gray-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              Your brand won&apos;t build itself.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Let&apos;s get started today.
              </span>
            </h2>
            <p className="mt-5 text-lg text-gray-400 leading-relaxed">
              Join 50+ entrepreneurs who trusted Fujma to take them from idea to shipped product &mdash; without the headaches.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="#sourcing-form"
                className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/30 flex items-center justify-center gap-2 text-base"
              >
                Get Free Supplier Quotes
                <IconArrowRight className="w-4 h-4" />
              </a>
              <a
                href={`${WA_LINK}?text=Hi%20Fujma%2C%20I%27d%20like%20to%20start%20sourcing`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/15 text-white rounded-xl font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-2 text-base"
              >
                <IconWhatsApp className="w-5 h-5 text-[#25D366]" />
                WhatsApp Us Directly
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
              <span className="flex items-center gap-1.5"><IconCheck className="w-4 h-4 text-green-500" /> Free consultation</span>
              <span className="flex items-center gap-1.5"><IconCheck className="w-4 h-4 text-green-500" /> No commitment</span>
              <span className="flex items-center gap-1.5"><IconCheck className="w-4 h-4 text-green-500" /> Reply in 24h</span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
