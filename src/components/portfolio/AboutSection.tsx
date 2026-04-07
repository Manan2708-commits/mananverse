import { GraduationCap, Heart, BarChart3, Users } from "lucide-react";

const strengths = [
  { icon: Heart, title: "User Empathy", description: "Deep understanding of user pain points through research and feedback loops" },
  { icon: BarChart3, title: "Data-Driven", description: "Leveraging analytics to validate hypotheses and measure product impact" },
  { icon: Users, title: "Cross-Functional", description: "Bridging engineering, design, and marketing to ship cohesive experiences" },
  { icon: GraduationCap, title: "Ownership Mindset", description: "Taking end-to-end accountability from ideation to impact measurement" },
];

const AboutSection = () => {
  return (
    <section id="about" className="bg-surface-subtle">
      <div className="section-container">
        <span className="section-label">About Me</span>
        <h2 className="section-title">A product thinker with a technical foundation</h2>
        <p className="section-subtitle mb-12">
          B.Tech CSE graduate from The NorthCap University (2021–2025), currently working as an Associate Product Manager at Adda247. Skilled in product requirements, GTM execution, and performance-driven user acquisition. I thrive at the intersection of user needs, business goals, and technical feasibility.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {strengths.map((s) => (
            <div key={s.title} className="card-elevated flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <s.icon size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
