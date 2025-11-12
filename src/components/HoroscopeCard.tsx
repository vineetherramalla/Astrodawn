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
    Fire: "from-destructive/20 to-accent/20",
    Earth: "from-secondary/20 to-primary/20",
    Air: "from-primary/20 to-accent/20",
    Water: "from-primary/30 to-secondary/30",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -5 }}
    >
      <Link to={`/horoscopes/${sign.id}?type=${type}`}>
        <Card className={`hover-lift cursor-pointer border-2 bg-gradient-to-br ${elementColors[sign.element as keyof typeof elementColors]}`}>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl font-serif flex items-center gap-2">
                <span className="text-4xl">{sign.symbol}</span>
                {sign.name}
              </CardTitle>
            </div>
            <CardDescription className="text-sm">
              {sign.dates} • {sign.element}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Ruled by {sign.ruler}
            </p>
            <p className="mt-2 text-sm font-medium text-primary">
              Read your {type} horoscope →
            </p>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
};

export default HoroscopeCard;
