import { Briefcase } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section id="experience">
      <div className="section-container">
        <span className="section-label">Experience</span>
        <h2 className="section-title">Where I've made impact</h2>

        <div className="mt-12 relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border hidden md:block" />

          <div className="card-elevated md:ml-12 relative">
            <div className="hidden md:flex absolute -left-[calc(3rem+11px)] top-6 w-10 h-10 rounded-full bg-primary items-center justify-center">
              <Briefcase size={18} className="text-primary-foreground" />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold">Associate Product Manager</h3>
                <p className="text-primary font-medium">Adda247</p>
              </div>
              <span className="text-sm text-muted-foreground mt-1 sm:mt-0">2024 — Present</span>
            </div>

            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                <span>Improved user journeys and product experience across web and mobile platforms, driving measurable engagement gains</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                <span>Collaborated with engineering, design, and marketing teams to ship features aligned with business OKRs</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                <span>Implemented structured CMS using Strapi, reducing backend dependency and accelerating content workflows</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                <span>Leveraged GA4, MoEngage, and Tableau to generate insights and inform product decisions</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
