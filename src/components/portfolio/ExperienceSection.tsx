import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Associate Product Manager",
    company: "Adda247",
    location: "Gurugram, India",
    period: "Mar 2025 — Present",
    bullets: [
      "Collaborate with engineering, design, and marketing to deliver features aligned with business goals",
      "Support product positioning, messaging, and go-to-market execution for new launches",
      "Drive growth through Meta Ads, email campaigns, and user engagement initiatives",
      "Analyze key metrics (CAC, CTR, conversion, retention) to optimize performance and ROI",
      "Conduct user research, competitive analysis, and prepare PRDs and stakeholder reports",
    ],
  },
  {
    title: "Product Intern",
    company: "Prepinsta Technologies",
    location: "Noida, India",
    period: "Jan 2025 — Mar 2025",
    bullets: [
      "Assisted the product team in researching user needs and improving product features",
      "Analyzed product data and user behavior to identify growth opportunities",
      "Supported writing product requirements and testing new features",
      "Collaborated with design, engineering, and marketing teams to enhance user experience",
    ],
  },
  {
    title: "Big Data Analyst (Intern)",
    company: "Brain Mentor Pvt. Ltd.",
    location: "Noida, India",
    period: "May 2023 — Jul 2023",
    bullets: [
      "Gained hands-on experience with Hadoop, MapReduce, PySpark, and Pig for large-scale data processing",
      "Collaborated with cross-functional teams to design and implement ML algorithms for data-driven problems",
      "Developed and deployed a Big Data project processing large datasets with predictive models",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience">
      <div className="section-container">
        <span className="section-label">Experience</span>
        <h2 className="section-title">Where I've made impact</h2>

        <div className="mt-12 relative">
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp) => (
              <div key={exp.title + exp.company} className="card-elevated md:ml-12 relative">
                <div className="hidden md:flex absolute -left-[calc(3rem+11px)] top-6 w-10 h-10 rounded-full bg-primary items-center justify-center">
                  <Briefcase size={18} className="text-primary-foreground" />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <p className="text-primary font-medium">{exp.company} · {exp.location}</p>
                  </div>
                  <span className="text-sm text-muted-foreground mt-1 sm:mt-0">{exp.period}</span>
                </div>

                <ul className="space-y-3 text-muted-foreground">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
