import Link from "next/link";
import {
  Lightbulb,
  Search,
  Ship,
  Building,
  ShieldCheck,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

const services = [
  {
    icon: Lightbulb,
    title: "Brand Creation from China",
    description:
      "Build your brand from China with our complete brand creation services from concept to market launch.",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    href: "/branding",
  },
  {
    icon: Search,
    title: "Product Sourcing China",
    description:
      "Expert product sourcing China services. We find verified factories, negotiate pricing and ensure quality.",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
    href: "/sourcing",
  },
  {
    icon: Ship,
    title: "China Import Export Services",
    description:
      "Comprehensive China import export services including inspection, documentation and worldwide shipping.",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    href: "/import-export",
  },
  {
    icon: Building,
    title: "Hong Kong Company Formation",
    description:
      "Professional Hong Kong company formation services for entrepreneurs building international businesses.",
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
    href: "/hong-kong-company",
  },
  {
    icon: ShieldCheck,
    title: "Trademark Registration Hong Kong",
    description:
      "Trademark registration in Hong Kong to legally protect your brand and intellectual property.",
    iconBg: "bg-rose-50",
    iconColor: "text-rose-600",
    href: "/trademark",
  },
  {
    icon: TrendingUp,
    title: "Business Growth Consultation",
    description:
      "Strategic consulting to help you grow your e-commerce or product business. We analyze your sourcing strategy, branding, logistics, and sales to help you scale faster and avoid costly mistakes.",
    iconBg: "bg-indigo-50",
    iconColor: "text-indigo-600",
    href: "/consultation",
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-white" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="section-header">
          <span className="inline-block text-xs font-semibold text-royal uppercase tracking-widest mb-4">
            Our Services
          </span>
          <h2 id="services-heading" className="text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold text-foreground tracking-tight leading-[1.15] mb-5">
            Everything You Need to Launch
          </h2>
          <p className="text-muted text-base sm:text-lg leading-relaxed">
            From product idea to global brand. We handle every step so you can
            focus on growing your business.
          </p>
        </div>

        {/* Cards — top row 3, bottom row 2 centered */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="card-hover group relative flex flex-col p-8 bg-white border border-gray-100 rounded-2xl"
              >
                <div
                  className={`w-12 h-12 ${service.iconBg} ${service.iconColor} rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}
                >
                  <Icon size={22} strokeWidth={1.8} />
                </div>
                <h3 className="text-base font-bold text-foreground mb-2 leading-snug">
                  {service.title}
                </h3>
                <p className="text-muted text-[14px] leading-[1.7] mb-5 flex-1">
                  {service.description}
                </p>
                {service.href ? (
                  <Link
                    href={service.href}
                    className="mt-auto flex items-center gap-1.5 text-sm font-semibold text-royal opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5"
                  >
                    Learn more <ArrowRight size={14} />
                  </Link>
                ) : (
                  <div className="mt-auto flex items-center gap-1.5 text-sm font-semibold text-royal opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5">
                    Learn more <ArrowRight size={14} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
