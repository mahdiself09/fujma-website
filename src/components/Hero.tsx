import { ArrowRight, CalendarDays, ShieldCheck, Factory, Globe } from "lucide-react";

const trustBadges = [
  { icon: ShieldCheck, text: "No middlemen" },
  { icon: Factory, text: "Factory verified suppliers" },
  { icon: Globe, text: "Direct sourcing from China" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" aria-label="Hero section - Product sourcing China and brand building services">
      {/* Multi-layer premium gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#0f1d3d] to-[#0c1a36]" />
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-950/80 via-transparent to-indigo-950/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(202,138,4,0.08),transparent_60%)]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-60" />
      </div>

      {/* Animated decorative orbs */}
      <div className="absolute top-1/4 right-[15%] w-[400px] h-[400px] bg-blue-500/8 rounded-full blur-[100px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 left-[10%] w-[500px] h-[500px] bg-indigo-500/6 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-400/4 rounded-full blur-[100px]" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="animate-fade-in-up inline-flex items-center gap-2.5 px-4 py-2 bg-white/[0.07] backdrop-blur-md border border-white/[0.12] rounded-full text-[13px] font-medium text-blue-200/90 mb-10">
            <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
            Hong Kong Based — Serving Global Entrepreneurs
          </div>

          {/* Title */}
          <h1 className="animate-fade-in-up-delay-1 text-[clamp(2.25rem,5.5vw,4.25rem)] font-extrabold text-white leading-[1.08] tracking-[-0.025em] mb-7">
            Build Your Brand from China
            <br />
            With Expert{" "}
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-400">
              Product Sourcing
              <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-amber-400/60 to-transparent rounded-full" />
            </span>
          </h1>

          {/* Subtitle */}
          <p className="animate-fade-in-up-delay-2 text-[clamp(1rem,2vw,1.25rem)] text-slate-300/80 leading-[1.7] max-w-[38rem] mb-12">
            Leading China sourcing agency specializing in product sourcing China services, 
            Hong Kong company formation, and China import export services. 
            We help entrepreneurs build brands from China with confidence.
          </p>

          {/* Buttons */}
          <div className="animate-fade-in-up-delay-3 flex flex-col sm:flex-row gap-4">
            <a
              href="#services"
              className="btn-primary btn-primary-gold group"
              aria-label="Start building your brand from China"
            >
              Start Your Brand
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="btn-primary group bg-white/[0.07] backdrop-blur-md text-white border border-white/[0.15] hover:bg-white/[0.12] hover:border-white/[0.25]"
              aria-label="Book free consultation for China sourcing services"
            >
              <CalendarDays size={18} />
              Book Free Consultation
            </a>
          </div>

          {/* Micro trust badges */}
          <div className="animate-fade-in-up-delay-3 mt-8 flex flex-wrap items-center gap-x-6 gap-y-2">
            {trustBadges.map((badge) => {
              const Icon = badge.icon;
              return (
                <span
                  key={badge.text}
                  className="inline-flex items-center gap-1.5 text-[13px] font-medium text-slate-400/80"
                >
                  <Icon size={14} strokeWidth={2} className="text-emerald-400/80" />
                  {badge.text}
                </span>
              );
            })}
          </div>

          {/* Stats */}
          <div className="animate-fade-in-up-delay-3 mt-20 pt-10 border-t border-white/[0.08]">
            <div className="grid grid-cols-3 gap-8 max-w-lg">
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  500+
                </div>
                <div className="text-sm text-slate-400 mt-1.5 font-medium">
                  Products Sourced
                </div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  50+
                </div>
                <div className="text-sm text-slate-400 mt-1.5 font-medium">
                  Brands Launched
                </div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  12+
                </div>
                <div className="text-sm text-slate-400 mt-1.5 font-medium">
                  Countries Served
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
