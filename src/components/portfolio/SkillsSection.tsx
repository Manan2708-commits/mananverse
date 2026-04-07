import { FileText, BarChart3, Megaphone, Code } from "lucide-react";

const skillGroups = [
  {
    icon: FileText,
    title: "Product",
    skills: ["PRD Writing", "Roadmap Planning", "RICE Prioritization", "User Stories", "A/B Testing"],
  },
  {
    icon: BarChart3,
    title: "Analytics",
    skills: ["GA4", "Tableau", "Excel / Sheets", "Funnel Analysis", "Cohort Analysis"],
  },
  {
    icon: Megaphone,
    title: "Marketing",
    skills: ["Meta Ads", "MoEngage", "Push Notifications", "Campaign Analysis"],
  },
  {
    icon: Code,
    title: "Tech Understanding",
    skills: ["APIs & Integrations", "CMS (Strapi)", "SQL Basics", "HTML/CSS", "Git"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills">
      <div className="section-container">
        <span className="section-label">Skills & Tools</span>
        <h2 className="section-title">My toolkit</h2>
        <p className="section-subtitle mb-12">
          The skills and tools I use to go from zero to shipped.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {skillGroups.map((group) => (
            <div key={group.title} className="card-elevated">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                  <group.icon size={18} className="text-primary" />
                </div>
                <h3 className="font-semibold">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="text-sm bg-secondary text-secondary-foreground px-3 py-1 rounded-md">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
