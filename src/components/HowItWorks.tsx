import {
  PackageSearch,
  Factory,
  Palette,
  ClipboardCheck,
  Rocket,
} from "lucide-react";

const steps = [
  {
    icon: PackageSearch,
    title: "Product Selection",
    description: "Choose your product niche and define specifications.",
  },
  {
    icon: Factory,
    title: "Factory Sourcing",
    description: "We find and vet the best factories for your product.",
  },
  {
    icon: Palette,
    title: "Brand Creation",
    description: "Design your brand identity, packaging and positioning.",
  },
  {
    icon: ClipboardCheck,
    title: "Production & Inspection",
    description: "Manufacture with quality checks at every stage.",
  },
  {
    icon: Rocket,
    title: "Shipping & Launch",
    description: "Ship worldwide and launch your brand to market.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding bg-slate-50" aria-labelledby="how-it-works-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="section-header">
          <span className="inline-block text-xs font-semibold text-royal uppercase tracking-widest mb-4">
            How It Works
          </span>
          <h2 id="how-it-works-heading" className="text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold text-foreground tracking-tight leading-[1.15] mb-5">
            From Idea to Brand in 5 Steps
          </h2>
          <p className="text-muted text-base sm:text-lg leading-relaxed">
            Our proven process takes the complexity out of building a product
            brand from China.
          </p>
        </div>

        {/* Steps */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-[2.25rem] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-royal/25 to-transparent" />

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-y-12 gap-x-6 lg:gap-x-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="relative text-center group flex flex-col items-center">
                  <div className="relative mb-5">
                    <div className="w-[4.5rem] h-[4.5rem] bg-white border-2 border-gray-100 rounded-2xl flex items-center justify-center group-hover:border-royal/30 group-hover:shadow-xl group-hover:shadow-royal/8 transition-all duration-500 ease-out relative z-10 group-hover:-translate-y-1">
                      <Icon size={26} strokeWidth={1.6} className="text-royal transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    <span className="absolute -top-1.5 -right-1.5 w-6 h-6 bg-royal text-white text-[11px] font-bold rounded-full flex items-center justify-center z-20 shadow-sm">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-[15px] font-bold text-foreground mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-[13px] text-muted leading-relaxed max-w-[180px] mx-auto">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
