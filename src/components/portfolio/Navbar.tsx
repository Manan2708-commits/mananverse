import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-sm" : ""}`}>
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-bold text-lg" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          MM<span className="text-primary">.</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button key={l.href} onClick={() => handleClick(l.href)} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </button>
          ))}
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border">
          <div className="px-6 py-4 space-y-3">
            {links.map((l) => (
              <button key={l.href} onClick={() => handleClick(l.href)} className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                {l.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
