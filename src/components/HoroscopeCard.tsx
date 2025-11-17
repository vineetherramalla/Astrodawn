import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { ZodiacSign } from "@/data/zodiacSigns";

interface HoroscopeCardProps {
  sign: ZodiacSign;
  type?: "daily" | "weekly" | "monthly";
  index?: number;
}

const HoroscopeCard = ({ sign, type = "daily", index = 0 }: HoroscopeCardProps) => {
  const elementColors = {
    Fire: "from-destructive/20 via-accent/15 to-accent/20",
    Earth: "from-secondary/20 via-primary/15 to-primary/20",
    Air: "from-primary/20 via-accent/15 to-accent/20",
    Water: "from-primary/30 via-secondary/20 to-secondary/30",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -8 }}
    >
      <Link to={`/horoscopes/${sign.id}?type=${type}`}>
        <Card className={`hover-lift cursor-pointer border-2 shadow-lg bg-gradient-to-br ${elementColors[sign.element as keyof typeof elementColors]} group transition-all`}>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl font-serif flex items-center gap-3 text-foreground">
                <span className="text-4xl drop-shadow-md group-hover:scale-110 transition-transform">{sign.symbol}</span>
                <span className="font-bold">{sign.name}</span>
              </CardTitle>
            </div>
            <CardDescription className="text-sm text-foreground/70 font-medium">
              {sign.dates} • {sign.element}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-foreground/75 font-medium mb-3">
              ♦ Ruled by <span className="text-primary font-semibold">{sign.ruler}</span>
            </p>
            <p className="text-sm font-semibold text-primary group-hover:text-accent transition-colors flex items-center gap-2">
              Read your {type} horoscope 
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </p>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
};

export default HoroscopeCard;
