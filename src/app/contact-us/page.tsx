import { ArrowRight, Mail, Phone, MapPin, Clock, CheckCircle } from "lucide-react";
import CalendlyButton from "@/components/CalendlyButton";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/forms/ContactForm";

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
  return (
    <>
      <Header />
      <main>
        {/* ── HERO ── */}
        <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
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

              {/* RIGHT — Reusable form */}
              <ContactForm source="contact-page" />
            </div>
          </div>
        </section>

        {/* ── GOOGLE MAP ── */}
        <section className="pb-20 lg:pb-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px flex-1 bg-border" />
              <span className="text-xs font-semibold text-muted uppercase tracking-widest">
                Our Location
              </span>
              <div className="h-px flex-1 bg-border" />
            </div>

            <div className="relative overflow-hidden rounded-2xl shadow-lg border border-border">
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
                <CalendlyButton className="btn-primary btn-primary-gold group">
                  Book Free Consultation
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                  />
                </CalendlyButton>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
