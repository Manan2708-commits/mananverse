import { Search, Target, ListOrdered, Rocket, TrendingUp } from "lucide-react";

const steps = [
  { icon: Search, label: "Understand", description: "Deep-dive into user behavior, pain points, and context" },
  { icon: Target, label: "Define", description: "Frame the problem clearly with measurable success criteria" },
  { icon: ListOrdered, label: "Prioritize", description: "Use RICE and impact-effort to pick the right bets" },
  { icon: Rocket, label: "Execute", description: "Ship iteratively with cross-functional alignment" },
  { icon: TrendingUp, label: "Measure", description: "Track outcomes, learn, and iterate based on data" },
];

const ProductThinkingSection = () => {
  return (
    <section id="approach" className="bg-surface-subtle">
      <div className="section-container">
        <span className="section-label">Product Thinking</span>
        <h2 className="section-title">How I approach a product problem</h2>
        <p className="section-subtitle mb-12">
          A structured, user-first framework that balances speed with rigor.
        </p>

        <div className="flex flex-col md:flex-row gap-4">
          {steps.map((step, i) => (
            <div key={step.label} className="flex-1 card-elevated text-center relative group">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <step.icon size={22} className="text-primary" />
              </div>
              <span className="text-xs text-muted-foreground font-medium">Step {i + 1}</span>
              <h3 className="font-semibold text-lg mt-1 mb-2">{step.label}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductThinkingSection;
