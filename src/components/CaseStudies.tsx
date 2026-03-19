import { ArrowUpRight } from "lucide-react";

const studies = [
  {
    category: "Beauty & Skincare",
    title: "From Idea to 6-Figure Brand",
    description:
      "An entrepreneur from the UK launched a private-label skincare line from China with Fujma's sourcing and branding support. First batch sold out within 3 months.",
    metrics: ["$120K+ Revenue", "6 SKUs", "UK Market"],
    gradient: "from-pink-500 to-rose-500",
  },
  {
    category: "Home & Kitchen",
    title: "Building a Kitchen Brand on Amazon",
    description:
      "A US-based founder used Fujma to source, brand, and ship premium kitchen tools. Now selling in 3 Amazon marketplaces with growing reviews.",
    metrics: ["3 Marketplaces", "2K+ Reviews", "USA/EU"],
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    category: "Pet Products",
    title: "Pet Brand Launched in Record Time",
    description:
      "An Australian founder launched a pet accessories brand in just 8 weeks from concept to first delivery with full Fujma support.",
    metrics: ["8 Weeks", "15 Products", "Australia"],
    gradient: "from-emerald-500 to-teal-500",
  },
];

export default function CaseStudies() {
  return (
    <section className="section-padding bg-slate-50" aria-labelledby="case-studies-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="section-header">
          <span className="inline-block text-xs font-semibold text-royal uppercase tracking-widest mb-4">
            Case Studies
          </span>
          <h2 id="case-studies-heading" className="text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold text-foreground tracking-tight leading-[1.15] mb-5">
            Brands We Helped Launch
          </h2>
          <p className="text-muted text-base sm:text-lg leading-relaxed">
            Real entrepreneurs who built successful product brands from China
            with Fujma.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {studies.map((study) => (
            <div
              key={study.title}
              className="card-hover group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100"
            >
              {/* Top gradient bar */}
              <div
                className={`h-1.5 bg-gradient-to-r ${study.gradient}`}
              />

              <div className="p-8 flex flex-col flex-1">
                <span className="inline-block self-start text-[11px] font-semibold text-royal bg-royal-light px-2.5 py-1 rounded-full mb-5 uppercase tracking-wide">
                  {study.category}
                </span>
                <h3 className="text-base font-bold text-foreground mb-3 leading-snug group-hover:text-royal transition-colors duration-300">
                  {study.title}
                </h3>
                <p className="text-[14px] text-muted leading-relaxed mb-6 flex-1">
                  {study.description}
                </p>

                {/* Metrics */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {study.metrics.map((metric) => (
                    <span
                      key={metric}
                      className="text-[12px] font-medium text-slate-600 bg-slate-50 px-3 py-1.5 rounded-full"
                    >
                      {metric}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-royal group-hover:gap-2.5 transition-all duration-300"
                >
                  Read Story <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
