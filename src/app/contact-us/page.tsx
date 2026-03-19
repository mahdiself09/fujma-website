"use client";

import { useState } from "react";
import { ArrowRight, Mail, Phone, MapPin, Clock, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const services = [
  "Product Sourcing",
  "Brand Building",
  "Company Formation",
  "Trademark Registration",
  "Shipping / Logistics",
];

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "contact@fujma.com",
    href: "mailto:contact@fujma.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+852 5926 9273",
    href: "tel:+85259269273",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "Rm 1202, Flat A, 12/F, Efficiency House\n35 Tai Yau Street, San Po Kong\nHong Kong",
    href: null,
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "We typically respond within 24 hours",
    href: null,
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate() {
    const e: Record<string, string> = {};
    if (!formData.name.trim()) e.name = "Full name is required.";
    if (!formData.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      e.email = "Enter a valid email address.";
    if (!formData.service) e.service = "Please select a service.";
    if (!formData.message.trim()) e.message = "Message is required.";
    return e;
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  }

  return (
    <>
      <Header />
      <main>
        {/* ── HERO ── */}
        <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#0f1d3d] to-[#0c1a36]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.18),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(202,138,4,0.09),transparent_60%)]" />
          <div className="absolute top-1/3 right-[20%] w-72 h-72 bg-blue-500/8 rounded-full blur-[90px] animate-pulse-glow" />
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-white/[0.07] backdrop-blur-md border border-white/[0.12] rounded-full text-[13px] font-medium text-blue-200/90 mb-8">
              <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
              Hong Kong Based — Serving Global Entrepreneurs
            </div>
            <h1 className="text-[clamp(2rem,5vw,3.75rem)] font-extrabold text-white leading-[1.1] tracking-[-0.025em] mb-6">
              Let&apos;s Build Your Brand{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-400">
                Together
              </span>
            </h1>
            <p className="text-[clamp(1rem,1.8vw,1.2rem)] text-slate-300/80 leading-relaxed max-w-xl mx-auto">
              Reach out to our team and start your journey with Fujma Limited.
              We&apos;re here to help you source, build, and launch your brand from China.
            </p>
          </div>
        </section>

        {/* ── CONTACT INFO + FORM ── */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-start">

              {/* LEFT — Contact Info */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight mb-3">
                  Get in Touch
                </h2>
                <p className="text-muted text-[15px] leading-relaxed mb-10">
                  Have a question or ready to start? Fill in the form or reach us
                  directly through any of the channels below.
                </p>

                <div className="space-y-6">
                  {contactInfo.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.label} className="flex gap-4 group">
                        <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-royal-light flex items-center justify-center">
                          <Icon size={18} className="text-royal" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-muted uppercase tracking-widest mb-1">
                            {item.label}
                          </p>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="text-[15px] font-medium text-foreground hover:text-royal transition-colors"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-[15px] font-medium text-foreground whitespace-pre-line leading-relaxed">
                              {item.value}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Trust note */}
                <div className="mt-10 p-5 rounded-2xl bg-gradient-to-br from-royal-light to-blue-50 border border-blue-100">
                  <p className="text-[13px] text-royal font-semibold mb-1">
                    Why brands choose Fujma
                  </p>
                  <ul className="space-y-2 mt-2.5">
                    {[
                      "500+ products sourced from verified Chinese factories",
                      "50+ private-label brands launched globally",
                      "End-to-end: sourcing, branding, compliance & shipping",
                      "Direct factory access — zero middlemen, full transparency",
                      "Hong Kong-based legal entity — trusted international trade hub",
                    ].map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2 text-[13px] text-slate-600 leading-snug"
                      >
                        <CheckCircle size={13} className="text-royal flex-shrink-0 mt-0.5" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* RIGHT — Form */}
              <div>
                {submitted ? (
                  <div className="flex flex-col items-center justify-center text-center py-20 px-8 rounded-2xl border border-border bg-white shadow-sm">
                    <div className="w-14 h-14 rounded-full bg-emerald-50 flex items-center justify-center mb-5">
                      <CheckCircle size={28} className="text-emerald-500" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-muted text-[15px] leading-relaxed max-w-sm">
                      Thank you for reaching out. Our team will get back to you
                      within 24 hours.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: "", email: "", phone: "", service: "", message: "" });
                      }}
                      className="mt-8 text-sm font-semibold text-royal hover:text-royal-dark transition-colors"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    noValidate
                    className="bg-white rounded-2xl border border-border shadow-sm p-8 sm:p-10 space-y-6"
                  >
                    {/* Urgency banner */}
                    <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-amber-50 border border-amber-200">
                      <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse flex-shrink-0" />
                      <p className="text-[12px] font-semibold text-amber-800">
                        Limited availability — we only take a few new clients each month.
                      </p>
                    </div>
                    {/* Full Name */}
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Full Name <span className="text-royal">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        className={`w-full px-4 py-3 rounded-xl border text-[15px] text-foreground placeholder:text-slate-400 outline-none transition-all duration-200 focus:ring-2 focus:ring-royal/20 focus:border-royal ${
                          errors.name ? "border-red-400 bg-red-50" : "border-border bg-white hover:border-slate-300"
                        }`}
                      />
                      {errors.name && (
                        <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>
                      )}
                    </div>

                    {/* Email + Phone */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">
                          Email <span className="text-royal">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className={`w-full px-4 py-3 rounded-xl border text-[15px] text-foreground placeholder:text-slate-400 outline-none transition-all duration-200 focus:ring-2 focus:ring-royal/20 focus:border-royal ${
                            errors.email ? "border-red-400 bg-red-50" : "border-border bg-white hover:border-slate-300"
                          }`}
                        />
                        {errors.email && (
                          <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">
                          Phone{" "}
                          <span className="text-muted font-normal text-xs">(optional)</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 234 567 890"
                          className="w-full px-4 py-3 rounded-xl border border-border bg-white text-[15px] text-foreground placeholder:text-slate-400 outline-none transition-all duration-200 hover:border-slate-300 focus:ring-2 focus:ring-royal/20 focus:border-royal"
                        />
                      </div>
                    </div>

                    {/* Service */}
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Service Interest <span className="text-royal">*</span>
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border text-[15px] outline-none transition-all duration-200 focus:ring-2 focus:ring-royal/20 focus:border-royal appearance-none bg-no-repeat cursor-pointer ${
                          formData.service ? "text-foreground" : "text-slate-400"
                        } ${
                          errors.service ? "border-red-400 bg-red-50" : "border-border bg-white hover:border-slate-300"
                        }`}
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                          backgroundPosition: "right 1rem center",
                          backgroundSize: "1rem",
                        }}
                      >
                        <option value="" disabled>
                          Select a service...
                        </option>
                        {services.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                      {errors.service && (
                        <p className="mt-1.5 text-xs text-red-500">{errors.service}</p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Message <span className="text-royal">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Tell us about your project, product idea, or any questions you have..."
                        className={`w-full px-4 py-3 rounded-xl border text-[15px] text-foreground placeholder:text-slate-400 outline-none transition-all duration-200 resize-none focus:ring-2 focus:ring-royal/20 focus:border-royal ${
                          errors.message ? "border-red-400 bg-red-50" : "border-border bg-white hover:border-slate-300"
                        }`}
                      />
                      {errors.message && (
                        <p className="mt-1.5 text-xs text-red-500">{errors.message}</p>
                      )}
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="btn-primary btn-primary-royal w-full group"
                    >
                      Start Your Project
                      <ArrowRight
                        size={18}
                        className="transition-transform duration-300 group-hover:translate-x-0.5"
                      />
                    </button>

                    <p className="text-center text-xs text-muted leading-relaxed">
                      By submitting, you agree to our{" "}
                      <a href="#" className="underline hover:text-royal transition-colors">
                        Terms of Service
                      </a>{" "}
                      and{" "}
                      <a href="#" className="underline hover:text-royal transition-colors">
                        Privacy Policy
                      </a>
                      . Your information is kept strictly confidential and never shared with third parties.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ── GOOGLE MAP ── */}
        <section className="pb-20 lg:pb-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section label */}
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px flex-1 bg-border" />
              <span className="text-xs font-semibold text-muted uppercase tracking-widest">
                Our Location
              </span>
              <div className="h-px flex-1 bg-border" />
            </div>

            {/* Map wrapper */}
            <div className="relative overflow-hidden rounded-2xl shadow-lg border border-border">
              {/* Map iframe */}
              <div className="relative h-[300px] sm:h-[420px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.4737720135963!2d114.1973469!3d22.335733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84ef735bff8dee57%3A0xf5d098273c77fe24!2sFujma%20Limited!5e0!3m2!1sen!2stw!4v1773954460174!5m2!1sen!2stw"
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: "block", position: "absolute", inset: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Fujma Limited — San Po Kong, Hong Kong"
                />

                {/* Floating overlay card */}
                <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-md rounded-xl shadow-md border border-white/60 px-4 py-3.5 max-w-[220px]">
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-2 h-2 rounded-full bg-royal animate-pulse flex-shrink-0" />
                    <span className="text-[13px] font-bold text-foreground tracking-tight">
                      Fujma Limited
                    </span>
                  </div>
                  <p className="text-[12px] text-muted leading-snug">
                    Hong Kong — San Po Kong
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Global Brand Sourcing Partner
                  </p>
                </div>
              </div>
            </div>

            {/* Open in Google Maps button */}
            <div className="flex justify-center mt-5">
              <a
                href="https://maps.google.com/?q=Fujma+Limited+Hong+Kong"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border text-sm font-semibold text-foreground hover:border-royal hover:text-royal transition-all duration-200 bg-white shadow-sm hover:shadow-md"
              >
                <MapPin size={15} className="text-royal" />
                Open in Google Maps
              </a>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl px-8 py-20 sm:px-16 sm:py-24 text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#0f1d3d] to-[#0c1a36]" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.2),transparent_60%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(202,138,4,0.1),transparent_60%)]" />
              <div className="absolute top-0 right-0 w-80 h-80 bg-blue-400/8 rounded-full blur-[80px] animate-pulse-glow" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-400/6 rounded-full blur-[100px] animate-pulse-glow" />

              <div className="relative z-10">
                <h2 className="text-[clamp(1.75rem,5vw,3rem)] font-extrabold text-white tracking-tight leading-[1.1] mb-6">
                  Ready to Launch Your Brand?
                </h2>
                <p className="text-slate-300/80 text-base sm:text-lg max-w-xl mx-auto mb-3 leading-relaxed">
                  Book a free consultation with our team and let&apos;s discuss how we
                  can help you build a successful product brand from China.
                </p>
                <p className="text-amber-400/80 text-sm font-medium mb-10">
                  We only onboard a limited number of brands each month.
                </p>
                <a href="mailto:contact@fujma.com" className="btn-primary btn-primary-gold group">
                  Book Free Consultation
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
