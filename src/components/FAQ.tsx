"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How does product sourcing China work with your agency?",
    answer:
      "Our China sourcing agency identifies your product requirements, searches our verified factory network, requests quotes and samples, then negotiates the best pricing and terms. Our product sourcing China services provide full transparency at every step.",
  },
  {
    question: "What is the minimum order quantity (MOQ)?",
    answer:
      "MOQ varies by product and factory. Typically, it ranges from 100 to 1,000 units for most consumer products. We work to negotiate the lowest possible MOQ for your first order.",
  },
  {
    question: "Can you help me create my own brand?",
    answer:
      "Absolutely. We provide end-to-end brand creation services including product design, packaging, logo placement, and brand positioning strategy to help you launch a unique product brand.",
  },
  {
    question: "How long does shipping from China take?",
    answer:
      "Sea freight typically takes 15-35 days depending on destination. Air freight takes 5-10 days. We handle all logistics, documentation, and customs clearance for you.",
  },
  {
    question: "Do I need a Hong Kong company to work with you?",
    answer:
      "No, you don't need one to start. However, having a Hong Kong company offers advantages for international trade. We can help you set one up quickly if needed.",
  },
  {
    question: "How do you ensure product quality?",
    answer:
      "We conduct factory audits, request pre-production samples, perform in-line inspections during production, and do a final quality check before shipping. Nothing ships without our approval.",
  },
  {
    question: "What does trademark registration in Hong Kong involve?",
    answer:
      "We handle the full trademark registration process in Hong Kong including search, application filing, and follow-up. It typically takes 6-9 months for approval.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-slate-50" aria-labelledby="faq-heading">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="section-header">
          <span className="inline-block text-xs font-semibold text-royal uppercase tracking-widest mb-4">
            FAQ
          </span>
          <h2 id="faq-heading" className="text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold text-foreground tracking-tight leading-[1.15] mb-5">
            Frequently Asked Questions
          </h2>
          <p className="text-muted text-base sm:text-lg leading-relaxed">
            Everything you need to know about working with Fujma.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`bg-white rounded-xl border transition-all duration-300 ${
                  isOpen
                    ? "border-royal/20 shadow-lg shadow-royal/5"
                    : "border-gray-100 hover:border-gray-200"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer"
                >
                  <span className="font-bold text-foreground text-[15px] pr-4 leading-snug">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-muted shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-5">
                    <p className="text-[14px] text-muted leading-[1.7]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
