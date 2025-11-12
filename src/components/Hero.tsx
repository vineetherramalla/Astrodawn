import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles, Moon, Sun } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-[10%] text-primary/20"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Sparkles className="h-16 w-16" />
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-[15%] text-accent/20"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Moon className="h-20 w-20" />
        </motion.div>
        <motion.div
          className="absolute top-40 right-[20%] text-primary/10"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Sun className="h-24 w-24" />
        </motion.div>
      </div>

      {/* Hero Content */}
      <div className="container relative z-10 mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="mb-6 text-5xl md:text-7xl font-serif font-bold text-background">
            Unlock Your Cosmic Destiny
          </h1>
          <p className="mb-8 text-xl md:text-2xl text-background/90 max-w-3xl mx-auto">
            Discover your path through ancient Vedic wisdom and personalized astrological insights
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 shadow-glow hover-lift"
            >
              <Link to="/kundli">Generate Your Kundli</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-background text-background hover:bg-background/10 text-lg px-8 py-6"
            >
              <Link to="/horoscopes">Read Daily Horoscope</Link>
            </Button>
          </div>
        </motion.div>

        {/* Zodiac symbols showcase */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-16 flex flex-wrap justify-center gap-6 text-4xl text-background/60"
        >
          {["♈", "♉", "♊", "♋", "♌", "♍", "♎", "♏", "♐", "♑", "♒", "♓"].map((symbol, i) => (
            <motion.span
              key={i}
              whileHover={{ scale: 1.3, color: "hsl(50 94% 49%)" }}
              className="cursor-pointer transition-colors"
            >
              {symbol}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
