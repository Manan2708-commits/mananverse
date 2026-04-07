import { TrendingUp, Zap, Clock } from "lucide-react";

const achievements = [
  { icon: TrendingUp, metric: "Engagement ↑", description: "Improved user engagement through optimized journeys and content accessibility on mobile" },
  { icon: Zap, metric: "Faster Execution", description: "Reduced content update cycles by implementing structured CMS, freeing up engineering bandwidth" },
  { icon: Clock, metric: "Reduced Dependencies", description: "Enabled non-technical teams to ship content changes independently, cutting turnaround time significantly" },
];

const AchievementsSection = () => {
  return (
    <section id="achievements">
      <div className="section-container">
        <span className="section-label">Impact</span>
        <h2 className="section-title">Results that matter</h2>
        <p className="section-subtitle mb-12">
          I focus on outcomes, not outputs. Here's the impact I've driven.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {achievements.map((a) => (
            <div key={a.metric} className="card-elevated text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <a.icon size={22} className="text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">{a.metric}</h3>
              <p className="text-sm text-muted-foreground">{a.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
