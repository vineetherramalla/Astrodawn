import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState("English");

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Horoscopes", path: "/horoscopes" },
    { name: "Kundli", path: "/kundli" },
    { name: "Learn", path: "/learn" },
    { name: "Astrologers", path: "/astrologers" },
    { name: "Articles", path: "/articles" },
    { name: "Contact", path: "/contact" },
  ];

  const languages = ["English", "తెలుగు", "हिन्दी"];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Sparkles className="h-6 w-6 text-primary" />
          <span className="text-2xl font-serif font-bold text-gradient">AstroVeda</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Language Selector & Mobile Menu */}
        <div className="flex items-center gap-4">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="hidden md:block text-sm border border-border rounded-md px-3 py-1.5 bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          >
            {languages.map((lang) => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </select>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border/40 bg-background"
          >
            <nav className="container mx-auto flex flex-col gap-4 px-4 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="text-sm border border-border rounded-md px-3 py-2 bg-card text-foreground"
              >
                {languages.map((lang) => (
                  <option key={lang} value={lang}>
                    {lang}
                  </option>
                ))}
              </select>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
