import { ArrowRight } from "lucide-react";
import CalendlyButton from "@/components/CalendlyButton";

export default function CTA() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl px-8 py-20 sm:px-16 sm:py-24 text-center">
          {/* Multi-layer background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#0f1d3d] to-[#0c1a36]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.2),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(202,138,4,0.1),transparent_60%)]" />

          {/* Animated orbs */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-400/8 rounded-full blur-[80px] animate-pulse-glow" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-400/6 rounded-full blur-[100px] animate-pulse-glow" />

          <div className="relative z-10">
            <h2 className="text-[clamp(1.75rem,5vw,3rem)] font-extrabold text-white tracking-tight leading-[1.1] mb-6">
              Ready to Launch Your Brand?
            </h2>
            <p className="text-slate-300/80 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Book a free consultation with our team and let&apos;s discuss how we
              can help you build a successful product brand from China.
            </p>
            <CalendlyButton className="btn-primary btn-primary-gold group">
              Book a Free Consultation
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </CalendlyButton>
          </div>
        </div>
      </div>
    </section>
  );
}
