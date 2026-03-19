import { Building2, Globe, Package, ShieldCheck, Truck, Award } from "lucide-react";

const logos = [
  { icon: Building2, name: "Enterprise" },
  { icon: Globe, name: "Global Trade" },
  { icon: Package, name: "Logistics" },
  { icon: ShieldCheck, name: "Verified" },
  { icon: Truck, name: "Shipping" },
  { icon: Award, name: "Quality" },
];

export default function Trust() {
  return (
    <section className="py-12 sm:py-14 bg-slate-50/80 border-b border-gray-100" aria-label="Trust indicators">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold text-muted tracking-widest uppercase mb-10">
          Trusted China sourcing agency for global entrepreneurs building brands from China
        </p>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-10 items-center justify-items-center">
          {logos.map(({ icon: Icon, name }) => (
            <div
              key={name}
              className="flex flex-col items-center gap-2.5 text-gray-300 hover:text-royal/70 transition-colors duration-300"
            >
              <Icon size={28} strokeWidth={1.4} />
              <span className="text-[11px] font-medium text-gray-400 tracking-wide">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
