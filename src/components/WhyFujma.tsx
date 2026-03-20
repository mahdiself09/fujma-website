import Link from "next/link";
import {
  MapPin,
  Users,
  ShieldCheck,
  TrendingUp,
  Zap,
  ArrowRight,
} from "lucide-react";

const points = [
  {
    icon: MapPin,
    title: "Direct Presence in China",
    description:
      "Our team on the ground in China gives you direct access to factories and suppliers.",
  },
  {
    icon: Users,
    title: "Trusted Factory Network",
    description:
      "Years of vetted relationships with reliable manufacturers across industries.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Inspection Before Shipping",
    description:
      "Every order is inspected for quality before it leaves the factory.",
  },
  {
    icon: TrendingUp,
    title: "Brand Strategy Support",
    description:
      "We help you position and brand your products for maximum market impact.",
  },
  {
    icon: Zap,
    title: "Fast Sourcing Process",
    description:
      "Get product samples and factory quotes within days, not weeks.",
  },
];

export default function WhyFujma() {
  return (
    <section id="why-fujma" className="section-padding bg-white" aria-labelledby="why-fujma-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left */}
          <div className="lg:sticky lg:top-32">
            <span className="inline-block text-xs font-semibold text-royal uppercase tracking-widest mb-4">
              Why Fujma
            </span>
            <h2 id="why-fujma-heading" className="text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold text-foreground tracking-tight leading-[1.15] mb-5">
              Your Trusted China Sourcing Agency Partner
            </h2>
            <p className="text-muted text-base sm:text-lg leading-relaxed mb-8">
              As a leading China sourcing agency, we combine local expertise in product sourcing China 
              with global business experience to help you build your brand from China successfully.
            </p>
            <Link
              href="/sourcing"
              className="btn-primary btn-primary-royal group"
            >
              Get Started Today
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Right - Points */}
          <div className="space-y-4">
            {points.map((point) => {
              const Icon = point.icon;
              return (
                <div
                  key={point.title}
                  className="card-hover flex gap-5 p-5 rounded-xl border border-gray-100 bg-white"
                >
                  <div className="w-11 h-11 bg-royal-light rounded-xl flex items-center justify-center shrink-0">
                    <Icon size={20} strokeWidth={1.8} className="text-royal" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1 text-base leading-snug">
                      {point.title}
                    </h3>
                    <p className="text-[14px] text-muted leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
