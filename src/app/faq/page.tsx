"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CalendlyButton from "@/components/CalendlyButton";

const faqs = [
  {
    question: "Who is Fujma for, and do I need experience to work with you?",
    answer:
      "Fujma works with first-time importers, e-commerce sellers, and established businesses scaling internationally. No prior sourcing or import experience is required — we guide you through every step, from product selection to delivery.",
  },
  {
    question: "How much does it cost to work with Fujma?",
    answer:
      "Our service fees are disclosed upfront as part of a full landed cost estimate — covering product, freight, duties, and our fees. There are no hidden markups. You approve every cost before we take action. Your first consultation and sourcing audit are completely free.",
  },
  {
    question: "What is the minimum order quantity (MOQ) for a first order?",
    answer:
      "MOQ depends on the product and factory. For most consumer goods, we negotiate starting orders of 100–300 units for new clients — well below what factories typically advertise. Our direct relationships give you access to lower MOQs than you'd get on your own.",
  },
  {
    question: "How do you verify suppliers and ensure product quality?",
    answer:
      "Every supplier is independently vetted — business license, factory registration, and on-site visits from our team in Guangdong. Before any shipment leaves China, we conduct a pre-shipment quality inspection against your specifications. Nothing ships unverified.",
  },
  {
    question: "How long does shipping take, and do you handle customs?",
    answer:
      "Sea freight typically takes 15–35 days depending on destination. Air freight takes 3–10 days. We handle the entire logistics chain — freight booking, customs documentation, HS code classification, and delivery coordination to your door.",
  },
  {
    question:
      "Do I need a Hong Kong company, and how long does it take to set one up?",
    answer:
      "You don't need one to start working with us. However, a Hong Kong company offers significant advantages for international trade, banking, and credibility. We handle the full registration process — it typically takes just a few business days.",
  },
  {
    question: "Why should I register a trademark, and what does it cost?",
    answer:
      "A trademark legally protects your brand name and logo from competitors. Without one, anyone can register your brand in your target market. Our Hong Kong trademark service starts from HKD 4,980 (service + government fee), with a 98% first-time approval rate.",
  },
  {
    question: "What languages does your team speak?",
    answer:
      "Our team communicates in English, Arabic, French, and Mandarin Chinese. We bridge every conversation between you and your manufacturers — nothing gets lost in translation.",
  },
  {
    question: "What does the process look like from start to finish?",
    answer:
      "It starts with a free consultation where we assess your project. From there, we source and vet suppliers, negotiate pricing, manage production and quality inspection, handle customs documentation, and coordinate shipping to your door. One dedicated project manager handles everything.",
  },
  {
    question: "What happens if something goes wrong with my order?",
    answer:
      "You have a dedicated project manager accountable to you throughout. If a shipment is delayed, held at customs, or arrives with issues, we manage the resolution directly with the carrier, customs authority, or supplier. We don't pass problems back to you.",
  },
];

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Header />
      <main className="bg-white pt-[72px]">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-24 sm:py-32">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
          <div className="relative mx-auto max-w-3xl px-6 text-center">
            <p className="mb-4 inline-block rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-400">
              FAQ
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Frequently Asked Questions
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-400">
              Everything you need to know before working with Fujma
            </p>
          </div>
        </section>

        {/* FAQ Accordion Section */}
        <section className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-xl border border-gray-200 bg-white transition-all duration-200 hover:border-gray-300"
              >
                <button
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >
                  <span className="pr-4 text-base font-semibold text-gray-900 sm:text-lg">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-gray-500 transition-transform duration-200 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-200 ease-in-out ${
                    openIndex === index
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-base leading-7 text-gray-600">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t border-gray-100 bg-gray-50">
          <div className="mx-auto max-w-3xl px-6 py-20 text-center sm:py-24">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Still have questions?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-gray-600">
              Our team responds within 24 hours. Book a free consultation or
              send us a message — no commitment required.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <CalendlyButton className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition-colors duration-150 hover:bg-blue-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                  <line x1="16" x2="16" y1="2" y2="6" />
                  <line x1="8" x2="8" y1="2" y2="6" />
                  <line x1="3" x2="21" y1="10" y2="10" />
                </svg>
                Book a Consultation
              </CalendlyButton>
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-semibold text-gray-700 shadow-sm transition-colors duration-150 hover:bg-gray-50"
              >
                Contact Us
              </Link>
            </div>
            <p className="mt-6 text-sm text-gray-500">
              Free consultation &middot; No commitment &middot; Response within 24 hours
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
