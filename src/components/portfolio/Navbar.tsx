import { useState, useEffect } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-sm" : ""}`}>
        <div className="max-w-4xl mx-auto px-6 h-16 hidden md:flex items-center justify-center">
          <div className="flex items-center gap-8">
            {links.map((l) => (
              <button key={l.href} onClick={() => handleClick(l.href)} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {l.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/95 backdrop-blur-lg border-t border-border">
        <div className="flex items-center justify-around px-2 h-14 overflow-x-auto scrollbar-none gap-1">
          {links.map((l) => (
            <button key={l.href} onClick={() => handleClick(l.href)} className="text-xs text-muted-foreground hover:text-foreground transition-colors px-2 py-1">
              {l.label}
            </button>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
