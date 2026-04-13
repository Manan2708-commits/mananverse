import { useState } from "react";
import { Database, Mic, TrendingUp } from "lucide-react";

const achievements = [
  {
    icon: Database,
    title: "Structured CMS Implementation",
    tag: "Engineering Efficiency",
    metrics: ["2hrs turnaround", "~85% less backend", "2x publish speed"],
    problem: "Content updates required backend engineers, causing 24–48 hour delays and bottlenecks.",
    action: "Led implementation of a headless CMS (Strapi), enabling non-technical teams to manage content independently.",
    impact: "Reduced turnaround from 24–48 hrs to under 2 hrs, eliminated ~80–90% backend involvement, and doubled publishing speed.",
  },
  {
    icon: Mic,
    title: "PSW Webinar — End-to-End Ownership",
    tag: "Cross-functional Execution",
    metrics: ["0 escalations", "↑ Registrations", "↑ Conversions"],
    problem: "Webinars lacked structured ownership, leading to coordination gaps and inconsistent outcomes.",
    action: "Owned full lifecycle — planning, cross-functional coordination, execution, and post-event analysis.",
    impact: "Delivered smooth execution with zero escalations, measurable lift in registrations, attendance, and conversion rates.",
  },
  {
    icon: TrendingUp,
    title: "Growth Marketing & Funnel Optimization",
    tag: "Data-driven Growth",
    metrics: ["↑ CTR", "↓ CAC", "↑ Conversion Rate"],
    problem: "Campaigns lacked funnel visibility, resulting in high CAC and low conversion efficiency.",
    action: "Executed Meta Ads and email campaigns; used GA4 and MoEngage to identify drop-offs and optimize funnel stages.",
    impact: "Improved CTR, reduced CAC, and increased conversion rates through continuous data-driven iteration.",
  },
];

const KeyAchievementsSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="key-achievements" className="bg-background">
      <div className="section-container">
        <span className="section-label">Key Achievements</span>
        <h2 className="section-title">Impact I've driven</h2>
        <p className="section-subtitle mb-12">
          Real ownership, measurable outcomes, and cross-functional execution.
        </p>

        <div className="flex flex-col md:flex-row gap-6 md:items-start" onMouseLeave={() => setOpenIndex(null)}>
          {achievements.map((a, i) => (
            <div
              key={a.title}
              className="card-elevated flex flex-col gap-4 cursor-pointer w-full md:w-1/3 overflow-hidden"
              onMouseEnter={() => setOpenIndex(i)}
            >
              {/* Header */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <a.icon size={20} className="text-primary" />
                </div>
                <div>
                  <span className="text-xs font-medium text-primary/70 uppercase tracking-wider">{a.tag}</span>
                  <h3 className="font-semibold text-base leading-snug mt-0.5">{a.title}</h3>
                </div>
              </div>

              {/* Metrics */}
              <div className="flex flex-wrap gap-2">
                {a.metrics.map((m) => (
                  <span key={m} className="text-xs font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full">
                    {m}
                  </span>
                ))}
              </div>

              {/* Expandable */}
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === i ? "max-h-screen" : "max-h-0"}`}>
                <div className="space-y-3 text-sm pt-2 border-t border-border">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Problem</span>
                    <p className="text-muted-foreground mt-1">{a.problem}</p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Action</span>
                    <p className="text-muted-foreground mt-1">{a.action}</p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary">Impact</span>
                    <p className="text-foreground mt-1">{a.impact}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyAchievementsSection;
