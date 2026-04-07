import { useState } from "react";
import { Mail, Linkedin, FileDown, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const EMAIL = "mananmrig27@gmail.com";

const ContactSection = () => {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="bg-surface-subtle">
      <div className="section-container text-center">
        <span className="section-label">Get in Touch</span>
        <h2 className="section-title">Let's build something great</h2>
        <p className="section-subtitle mx-auto mb-10">
          Whether it's a product role, a collaboration, or just a chat about product thinking — I'd love to connect.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="gap-2" onClick={() => setOpen(true)}>
            <Mail size={18} />
            Email Me
          </Button>
          <Button variant="outline" size="lg" className="gap-2" asChild>
            <a href="https://linkedin.com/in/mananmrig" target="_blank" rel="noopener noreferrer">
              <Linkedin size={18} />
              LinkedIn
            </a>
          </Button>
          <Button variant="outline" size="lg" className="gap-2" asChild>
            <a href="/Manan_Resume.pdf" download>
              <FileDown size={18} />
              Download Resume
            </a>
          </Button>
        </div>
      </div>

      {/* Email Popup */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-6 w-80 flex flex-col items-center gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Mail size={32} className="text-primary" />
            <p className="text-sm text-muted-foreground">Reach me at</p>
            <span className="font-medium text-base select-all">{EMAIL}</span>
            <Button className="w-full gap-2" onClick={handleCopy}>
              {copied ? <Check size={16} /> : <Copy size={16} />}
              {copied ? "Copied!" : "Copy Email"}
            </Button>
            <button
              className="text-xs text-muted-foreground hover:underline"
              onClick={() => setOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactSection;
