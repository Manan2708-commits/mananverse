import { Mail, Linkedin, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-surface-subtle">
      <div className="section-container text-center">
        <span className="section-label">Get in Touch</span>
        <h2 className="section-title">Let's build something great</h2>
        <p className="section-subtitle mx-auto mb-10">
          Whether it's a product role, a collaboration, or just a chat about product thinking — I'd love to connect.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="gap-2" asChild>
            <a href="mailto:mananmrig@gmail.com">
              <Mail size={18} />
              Email Me
            </a>
          </Button>
          <Button variant="outline" size="lg" className="gap-2" asChild>
            <a href="https://linkedin.com/in/mananmrig" target="_blank" rel="noopener noreferrer">
              <Linkedin size={18} />
              LinkedIn
            </a>
          </Button>
          <Button variant="outline" size="lg" className="gap-2" asChild>
            <a href="#" onClick={(e) => e.preventDefault()}>
              <FileDown size={18} />
              Download Resume
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
