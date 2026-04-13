import { TrendingUp, Zap, Clock, Trophy, Users } from "lucide-react";

const achievements = [
  { icon: TrendingUp, metric: "Engagement ↑", description: "Improved user engagement through optimized journeys and content accessibility on mobile" },
  { icon: Zap, metric: "Faster Execution", description: "Reduced content update cycles by implementing structured CMS, freeing up engineering bandwidth" },
  { icon: Clock, metric: "Reduced Dependencies", description: "Enabled non-technical teams to ship content changes independently, cutting turnaround time significantly" },
];

const extras = [
  { icon: Trophy, label: "Hospitality Core Award — Annual Cultural Fest, The NorthCap University" },
  { icon: Users, label: "President, Club Success Mantra" },
  { icon: Users, label: "IEEE Member" },
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

        {/* Awards & Leadership */}
        <div className="mt-8 card-elevated">
          <h3 className="font-semibold mb-4">Awards & Leadership</h3>
          <ul className="space-y-3">
            {extras.map((e, i) => (
              <li key={i} className="flex items-center gap-3 text-muted-foreground">
                <e.icon size={16} className="text-primary flex-shrink-0" />
                <span>{e.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
