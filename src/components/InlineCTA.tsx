import { ArrowRight, CalendarDays, ShieldCheck, Factory, Globe } from "lucide-react";

const trustBadges = [
  { icon: ShieldCheck, text: "No middlemen" },
  { icon: Factory, text: "Factory verified suppliers" },
  { icon: Globe, text: "Direct sourcing from China" },
];

interface InlineCTAProps {
  variant?: "light" | "dark";
}

export default function InlineCTA({ variant = "light" }: InlineCTAProps) {
  const isLight = variant === "light";

  return (
    <section
      className={`py-14 sm:py-16 ${
        isLight ? "bg-royal-light" : "bg-slate-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
          <a
            href="#services"
            className="btn-primary btn-primary-gold group"
          >
            Start Your Brand
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </a>
          <a
            href="#contact"
            className={`btn-primary group ${
              isLight
                ? "btn-primary-royal"
                : "bg-white/[0.08] text-white border border-white/[0.15] hover:bg-white/[0.14] hover:border-white/[0.25]"
            }`}
          >
            <CalendarDays size={18} />
            Book Free Consultation
          </a>
        </div>

        {/* Micro trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {trustBadges.map((badge) => {
            const Icon = badge.icon;
            return (
              <span
                key={badge.text}
                className={`inline-flex items-center gap-1.5 text-[13px] font-medium ${
                  isLight ? "text-slate-500" : "text-slate-400"
                }`}
              >
                <Icon
                  size={14}
                  strokeWidth={2}
                  className={isLight ? "text-emerald-500" : "text-emerald-400"}
                />
                {badge.text}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
