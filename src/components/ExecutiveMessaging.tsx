import { spacing, typography } from "@/lib/design-tokens";

const points = [
  "Unlock 20%+ EBITDA in 90 days—AI that pays for itself fast.",
  "Board pressure for quick EBITDA wins? Our 14-day pilot frees 10× capacity—verified by your CFO.",
  "Built for operators, not IT. Zero rip-and-replace—we layer on top of your existing stack.",
  "Rapid pilots, real dollars: first 30-day quick-win typically frees 10× capacity or compresses a 10-day report cycle to same-day.",
  "PE-grade proof or privately-held speed: 5–10× payback verified by CFOs across sectors.",
  "Risk-free start: 5-minute AI Readiness Check and 30-minute free consult pinpoints your fastest ROI lever before you spend a dollar."
];

export const ExecutiveMessaging = () => (
  <section className={`${spacing.section.lg} bg-white`}>
    <div className="mx-auto max-w-4xl text-center">
      <h2 className={`${typography.fluid.h2} font-bold text-primary mb-6`}>
        Why Operators Choose GSD at Work
      </h2>
      <ul className="space-y-4 text-left list-disc list-inside text-gray-700">
        {points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </div>
  </section>
);

export default ExecutiveMessaging;
