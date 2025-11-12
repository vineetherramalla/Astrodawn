import { Link } from "react-router-dom";
import { Sparkles, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Horoscopes: [
      { name: "Daily Horoscope", path: "/horoscopes?type=daily" },
      { name: "Weekly Horoscope", path: "/horoscopes?type=weekly" },
      { name: "Monthly Horoscope", path: "/horoscopes?type=monthly" },
    ],
    Services: [
      { name: "Kundli Generator", path: "/kundli" },
      { name: "Consult Astrologers", path: "/astrologers" },
      { name: "Birth Chart", path: "/kundli" },
    ],
    Resources: [
      { name: "Astrology Articles", path: "/articles" },
      { name: "Transit Updates", path: "/articles" },
      { name: "Panchang", path: "/articles" },
    ],
    Company: [
      { name: "About Us", path: "/about" },
      { name: "Contact", path: "/contact" },
      { name: "Privacy Policy", path: "/privacy" },
    ],
  };

  return (
    <footer className="bg-secondary text-secondary-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Sparkles className="h-6 w-6 text-primary" />
              <span className="text-2xl font-serif font-bold text-primary">AstroVeda</span>
            </Link>
            <p className="text-sm text-secondary-foreground/80 mb-4">
              Your trusted companion for Vedic astrology insights and cosmic guidance.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-secondary-foreground/60 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-secondary-foreground/60 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-secondary-foreground/60 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-secondary-foreground/60 hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-serif font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center text-sm text-secondary-foreground/60">
          <p>© {new Date().getFullYear()} AstroVeda. All rights reserved.</p>
          <p className="mt-2">Vedic astrology guidance for enlightenment and self-discovery.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
