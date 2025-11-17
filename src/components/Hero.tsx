import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";


const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden"
    style={{
    backgroundImage: "url('/hero.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed'
  }} >
      
      

      {/* Hero Content */}
      <div className="container relative z-10 mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="mb-6 text-5xl md:text-7xl font-serif font-bold text-background drop-shadow-lg">
            Unlock Your Cosmic Destiny
          </h1>
          <p className="mb-8 text-xl md:text-2xl text-background font-semibold max-w-3xl mx-auto drop-shadow-md leading-relaxed">
            Discover your path through ancient Vedic wisdom and personalized astrological insights
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 shadow-lg hover-lift font-semibold"
            >
              <Link to="/kundli">Generate Your Kundli</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-background bg-background/20 backdrop-blur-sm text-background hover:bg-background/40 text-lg px-8 py-6 font-semibold"
            >
              <Link to="/horoscopes">Read Daily Horoscope</Link>
            </Button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
