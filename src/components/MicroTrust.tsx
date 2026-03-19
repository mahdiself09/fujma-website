import { ShieldCheck, Factory, Globe } from "lucide-react";

const badges = [
  { icon: ShieldCheck, text: "No middlemen" },
  { icon: Factory, text: "Factory verified suppliers" },
  { icon: Globe, text: "Direct sourcing from China" },
];

export default function MicroTrust() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
      {badges.map((badge) => {
        const Icon = badge.icon;
        return (
          <span
            key={badge.text}
            className="inline-flex items-center gap-2 text-[13px] font-medium text-slate-500"
          >
            <Icon size={15} strokeWidth={2} className="text-emerald-500" />
            {badge.text}
          </span>
        );
      })}
    </div>
  );
}
