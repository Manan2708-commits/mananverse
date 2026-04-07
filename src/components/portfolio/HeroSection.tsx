import { ArrowDown, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border))_1px,transparent_1px)] bg-[size:64px_64px] opacity-40" />
      
      <div className="section-container text-center relative z-10">
        <div className="animate-fade-in opacity-0" style={{ animationDelay: "0.1s" }}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Associate Product Manager
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in opacity-0" style={{ animationDelay: "0.2s" }}>
          Hi, I'm <span className="gradient-text">Manan Mrig</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-4 animate-fade-in opacity-0" style={{ animationDelay: "0.35s" }}>
          Building user-centric, data-driven products
        </p>
        
        <p className="text-muted-foreground max-w-xl mx-auto mb-10 animate-fade-in opacity-0" style={{ animationDelay: "0.45s" }}>
          Passionate about edtech, crafting seamless user journeys, driving growth, and turning insights into impactful product decisions.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in opacity-0" style={{ animationDelay: "0.55s" }}>
          <Button size="lg" className="gap-2" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
            <ArrowDown size={18} />
            View My Work
          </Button>
          <Button variant="outline" size="lg" className="gap-2" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
            <Mail size={18} />
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
