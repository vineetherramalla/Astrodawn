import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Sparkles, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Horoscopes", path: "/horoscopes" },
    { name: "Kundli", path: "/kundli" },
    { name: "Vedic Astrology", path: "/learn" },
    { name: "Why Dr.Pandit?", path: "/about" },
    { name: "Articles", path: "/articles" },
    { name: "Contact", path: "/contact" },
  ];

  const languages = ["English", "తెలుగు", "हिन्दी"];

  return (
    
    <header className="sticky top-0 z-50 w-full border-b-2 border-primary/20 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80 shadow-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity group">
          <Sparkles className="h-7 w-7 text-primary group-hover:text-accent transition-colors" />
          <span className="text-2xl font-serif font-bold text-gradient hidden sm:inline-block">AstroVeda</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {/* Primary links */}
          <Link to="/" className="text-sm font-semibold text-foreground/80 hover:text-primary transition-all relative group">
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
          </Link>

          {/* Horoscopes dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-2 text-sm font-semibold text-foreground/80 hover:text-primary transition-all">
                Horoscopes <ChevronDown className="h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Horoscope</DropdownMenuLabel>
              <DropdownMenuItem asChild>
                <Link to="/horoscopes">All Horoscopes</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/horoscopes?type=daily">Daily Horoscope</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/horoscopes?type=tomorrow">Tomorrow Horoscope</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/horoscopes?type=weekly">Weekly Horoscope</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/horoscopes?type=monthly">Monthly Horoscope</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/horoscopes?type=yearly">Yearly Horoscope</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Astrology dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-2 text-sm font-semibold text-foreground/80 hover:text-primary transition-all">
                Astrology <ChevronDown className="h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-64">
              <DropdownMenuLabel>Astrology</DropdownMenuLabel>
              <DropdownMenuItem asChild>
                <Link to="/astrology/panchang">Today Panchang</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/astrology/festivals">Festivals</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/astrology/transit">Planetary Transit</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link to="/astrology/love-compatibility">Love Compatibility</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/astrology/doshas">Kundli Doshas</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/astrology/nakshatra">Nakshatra</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/astrology/articles">Astrology Articles</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/astrology/news">Astrology News</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link to="/astrology/planets-houses-signs">Planets in Different Houses & Signs</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/astrology/houses">Astrology Houses</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/astrology/remedies">Astrology Remedies</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/astrology/dasha">Astrology Dasha</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/astrology/yoga">Astrology Yoga</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link to="/astrology/vrat-dates">Vrat Dates</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/astrology/rituals">Hindu Rituals</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/astrology/jayanti">Jayanti</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/astrology/muhurata">Muhurata</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Kundli dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-2 text-sm font-semibold text-foreground/80 hover:text-primary transition-all">
                Kundli <ChevronDown className="h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Kundli</DropdownMenuLabel>
              <DropdownMenuItem asChild>
                <Link to="/kundli">Generate Kundli</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/kundli/advanced-matching">Advanced Kundli Matching</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/kundli/matching">Kundli Matching</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Other links */}
          {navItems.filter(i => !["Home","Horoscopes","Kundli"].includes(i.name)).map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="text-sm font-semibold text-foreground/80 hover:text-primary transition-all relative group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </nav>

        {/* Mobile Menu */}
        <div className="flex items-center gap-3">
         
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-foreground hover:text-primary hover:bg-primary/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
            className="lg:hidden border-t-2 border-primary/20 bg-background/95 backdrop-blur-sm shadow-lg"
          >
            <nav className="container mx-auto flex flex-col gap-3 px-4 py-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-sm font-semibold text-foreground/80 hover:text-primary hover:translate-x-1 transition-all px-2 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              {/* Horoscopes section (mobile) */}
              <div className="mt-2 border-t pt-3 border-muted/40">
                <h4 className="text-sm font-semibold text-foreground/90 mb-2">Horoscopes</h4>
                <Link to="/horoscopes" className="text-sm text-foreground/80 px-2 py-1 block" onClick={() => setIsMenuOpen(false)}>All Horoscopes</Link>
                <Link to="/horoscopes?type=daily" className="text-sm text-foreground/80 px-2 py-1 block" onClick={() => setIsMenuOpen(false)}>Daily Horoscope</Link>
                <Link to="/horoscopes?type=tomorrow" className="text-sm text-foreground/80 px-2 py-1 block" onClick={() => setIsMenuOpen(false)}>Tomorrow Horoscope</Link>
                <Link to="/horoscopes?type=weekly" className="text-sm text-foreground/80 px-2 py-1 block" onClick={() => setIsMenuOpen(false)}>Weekly Horoscope</Link>
                <Link to="/horoscopes?type=monthly" className="text-sm text-foreground/80 px-2 py-1 block" onClick={() => setIsMenuOpen(false)}>Monthly Horoscope</Link>
                <Link to="/horoscopes?type=yearly" className="text-sm text-foreground/80 px-2 py-1 block" onClick={() => setIsMenuOpen(false)}>Yearly Horoscope</Link>
              </div>
              {/* Kundli section (mobile) */}
              <div className="mt-2 border-t pt-3 border-muted/40">
                <h4 className="text-sm font-semibold text-foreground/90 mb-2">Kundli</h4>
                <Link to="/kundli" className="text-sm text-foreground/80 px-2 py-1 block" onClick={() => setIsMenuOpen(false)}>Generate Kundli</Link>
                <Link to="/kundli/advanced-matching" className="text-sm text-foreground/80 px-2 py-1 block" onClick={() => setIsMenuOpen(false)}>Advanced Kundli Matching</Link>
                <Link to="/kundli/matching" className="text-sm text-foreground/80 px-2 py-1 block" onClick={() => setIsMenuOpen(false)}>Kundli Matching</Link>
              </div>
              <div className="mt-2 border-t pt-3 border-muted/40">
                <h4 className="text-sm font-semibold text-foreground/90 mb-2">Astrology</h4>
                <Link to="/astrology/panchang" className="text-sm text-foreground/80 px-2 py-1 block" onClick={() => setIsMenuOpen(false)}>Today Panchang</Link>
                <Link to="/astrology/festivals" className="text-sm text-foreground/80 px-2 py-1 block" onClick={() => setIsMenuOpen(false)}>Festivals</Link>
                <Link to="/astrology/transit" className="text-sm text-foreground/80 px-2 py-1 block" onClick={() => setIsMenuOpen(false)}>Planetary Transit</Link>
                <Link to="/astrology/love-compatibility" className="text-sm text-foreground/80 px-2 py-1 block" onClick={() => setIsMenuOpen(false)}>Love Compatibility</Link>
                <Link to="/astrology/doshas" className="text-sm text-foreground/80 px-2 py-1 block" onClick={() => setIsMenuOpen(false)}>Kundli Doshas</Link>
                <Link to="/astrology/nakshatra" className="text-sm text-foreground/80 px-2 py-1 block" onClick={() => setIsMenuOpen(false)}>Nakshatra</Link>
                <Link to="/astrology/articles" className="text-sm text-foreground/80 px-2 py-1 block" onClick={() => setIsMenuOpen(false)}>Astrology Articles</Link>
                <Link to="/astrology/news" className="text-sm text-foreground/80 px-2 py-1 block" onClick={() => setIsMenuOpen(false)}>Astrology News</Link>
                <Link to="/astrology/planets-houses-signs" className="text-sm text-foreground/80 px-2 py-1 block" onClick={() => setIsMenuOpen(false)}>Planets in Different Houses & Signs</Link>
                <Link to="/astrology/houses" className="text-sm text-foreground/80 px-2 py-1 block" onClick={() => setIsMenuOpen(false)}>Astrology Houses</Link>
                <Link to="/astrology/remedies" className="text-sm text-foreground/80 px-2 py-1 block" onClick={() => setIsMenuOpen(false)}>Astrology Remedies</Link>
                <Link to="/astrology/dasha" className="text-sm text-foreground/80 px-2 py-1 block" onClick={() => setIsMenuOpen(false)}>Astrology Dasha</Link>
                <Link to="/astrology/yoga" className="text-sm text-foreground/80 px-2 py-1 block" onClick={() => setIsMenuOpen(false)}>Astrology Yoga</Link>
                <Link to="/astrology/vrat-dates" className="text-sm text-foreground/80 px-2 py-1 block" onClick={() => setIsMenuOpen(false)}>Vrat Dates</Link>
                <Link to="/astrology/rituals" className="text-sm text-foreground/80 px-2 py-1 block" onClick={() => setIsMenuOpen(false)}>Hindu Rituals</Link>
                <Link to="/astrology/jayanti" className="text-sm text-foreground/80 px-2 py-1 block" onClick={() => setIsMenuOpen(false)}>Jayanti</Link>
                <Link to="/astrology/muhurata" className="text-sm text-foreground/80 px-2 py-1 block" onClick={() => setIsMenuOpen(false)}>Muhurata</Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
