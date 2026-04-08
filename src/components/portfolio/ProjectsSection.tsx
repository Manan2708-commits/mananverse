import { Smartphone, Database, Brain, Users, Mic, ArrowRight } from "lucide-react";

const projects = [
  {
    icon: Database,
    title: "CMS Optimization",
    problem: "High dependency on backend engineers for routine content updates created bottlenecks and slowed time-to-market.",
    insight: "Mapped the content update workflow and identified that 70%+ of requests were simple CRUD operations.",
    solution: "Led the implementation of a structured CMS using Strapi, enabling non-technical teams to manage content independently.",
    impact: ["Faster content execution cycles", "Reduced dev effort on content tasks", "Improved team autonomy & velocity"],
  },
  {
    icon: Smartphone,
    title: "PrepInsta Mobile App",
    problem: "Students struggled to access learning content on mobile, leading to high drop-off and poor engagement on smaller screens.",
    insight: "Synthesized feedback from students and internal teams to uncover the core accessibility gap.",
    solution: "Proposed and scoped a dedicated mobile app focused on content accessibility, offline support, and streamlined navigation.",
    impact: ["Improved mobile content accessibility", "Increased student engagement", "Reduced support tickets related to mobile issues"],
  },
  {
    icon: Brain,
    title: "Cognitrack — F1 Driver Cognitive Load Analysis",
    problem: "No reliable way to assess driver cognitive load during races, making it hard to predict high-risk scenarios.",
    insight: "Proxies like driver errors, radio stress, and lap-time variability correlate strongly with cognitive overload.",
    solution: "Integrated FastF1 and OpenWeatherMap APIs; built gradient-boosted regression and time-series models using Python and scikit-learn.",
    impact: ["Detected high-risk race scenarios", "Real-time telemetry analysis", "Novel ML approach to F1 safety"],
  },
  {
    icon: Users,
    title: "Customer Segmentation Analysis",
    problem: "Marketing lacked actionable customer segments, leading to generic campaigns with low conversion.",
    insight: "Behavioral and demographic features could reliably predict distinct customer groups using ML models.",
    solution: "Applied Logistic Regression and Random Forest for segmentation; preprocessed data with normalization and encoding.",
    impact: ["Data-driven targeting enabled", "Key segments identified", "Improved marketing & retention strategies"],
  },
  {
    icon: Mic,
    title: "Speech Emotion Recognition",
    problem: "No automated way to detect emotions from speech for user experience and accessibility applications.",
    insight: "MFCC audio features effectively capture emotional tone when combined with deep learning models.",
    solution: "Built an emotion detection system using SVM and DNN, deployed via Streamlit; trained on Kaggle audio datasets.",
    impact: ["Real-time emotion classification", "Streamlit-based interactive demo", "GPU-optimized model training"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-surface-subtle">
      <div className="section-container">
        <span className="section-label">Projects</span>
        <h2 className="section-title">Case studies in product thinking</h2>
        <p className="section-subtitle mb-12">
          Real problems I identified, solutions I drove, and impact I delivered.
        </p>

        <div className="space-y-8">
          {projects.map((project) => (
            <div key={project.title} className="card-elevated">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <project.icon size={20} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{project.title}</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">Problem</span>
                  <p className="text-sm text-muted-foreground mt-2">{project.problem}</p>
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">Insight</span>
                  <p className="text-sm text-muted-foreground mt-2">{project.insight}</p>
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">Solution</span>
                  <p className="text-sm text-muted-foreground mt-2">{project.solution}</p>
                </div>
              </div>

              <div className="border-t border-border pt-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">Impact</span>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.impact.map((item) => (
                    <span key={item} className="inline-flex items-center gap-1.5 text-sm bg-primary/5 text-foreground px-3 py-1 rounded-full">
                      <ArrowRight size={12} className="text-primary" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
