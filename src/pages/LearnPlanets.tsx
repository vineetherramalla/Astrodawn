import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { planets } from "@/data/educationalContent";

const LearnPlanets = () => {
  return (
    <Layout>
      <Helmet>
        <title>9 Planets in Vedic Astrology - Complete Guide | AstroVeda</title>
        <meta
          name="description"
          content="Learn about the 9 planets (Navagrahas) in Vedic astrology. Understand their characteristics, exaltation, debilitation, and influence on life."
        />
      </Helmet>

      <section className="container mx-auto px-4 py-12">
        <Link to="/learn" className="inline-flex items-center gap-2 text-primary hover:underline mb-6">
          <ArrowLeft className="h-4 w-4" />
          Back to Learning Center
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="h-10 w-10 text-primary" />
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gradient">
              The 9 Planets (Navagrahas)
            </h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            The nine planets (Grahas) are the primary influencers in Vedic astrology. Each planet governs specific aspects of life and consciousness.
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl font-serif">Understanding Planetary Influences</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-foreground/90">
              <p>
                In Vedic astrology, planets (Grahas) are not just celestial bodies but cosmic forces that influence our consciousness and life experiences. The term "Graha" means "to seize" or "to grasp," indicating their power to influence us.
              </p>
              <p>
                Each planet has specific qualities, governs certain areas of life, and behaves differently in various zodiac signs. Understanding planetary strength, dignity, and aspects is crucial for accurate chart interpretation.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold mb-2">Natural Benefics</h4>
                  <p className="text-sm text-muted-foreground">Jupiter, Venus, Mercury (with benefics), Waxing Moon</p>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold mb-2">Natural Malefics</h4>
                  <p className="text-sm text-muted-foreground">Saturn, Mars, Sun (mild), Rahu, Ketu</p>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold mb-2">Shadow Planets</h4>
                  <p className="text-sm text-muted-foreground">Rahu (North Node) and Ketu (South Node)</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Planets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {planets.map((planet, index) => (
            <motion.div
              key={planet.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.05 }}
            >
              <Card className="hover-lift h-full border-2">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-3xl">{planet.symbol}</span>
                        <CardTitle className="text-xl font-serif">{planet.name}</CardTitle>
                      </div>
                      <CardDescription className="text-sm italic">{planet.sanskritName}</CardDescription>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-2">
                    <Badge variant="outline" className="text-xs">{planet.element}</Badge>
                    <Badge 
                      variant={planet.nature.includes("Benefic") ? "default" : "destructive"} 
                      className="text-xs"
                    >
                      {planet.nature.split(" ")[0]}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-foreground/90">{planet.description}</p>
                  
                  <div>
                    <h4 className="text-xs font-semibold mb-2 text-muted-foreground">GOVERNS</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {planet.governs.map((item, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-3 border-t">
                    <div>
                      <p className="text-xs font-semibold text-green-600 mb-1">Exalted in</p>
                      <p className="text-sm">{planet.exalted}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-destructive mb-1">Debilitated in</p>
                      <p className="text-sm">{planet.debilitated}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold mb-2 text-green-600">POSITIVE TRAITS</h4>
                    <ul className="text-xs space-y-1">
                      {planet.positiveTraits.slice(0, 3).map((trait, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-green-600 mt-0.5">✓</span>
                          <span>{trait}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold mb-2 text-destructive">CHALLENGES</h4>
                    <ul className="text-xs space-y-1">
                      {planet.negativeTraits.slice(0, 3).map((trait, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-destructive mt-0.5">✗</span>
                          <span>{trait}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <Card className="bg-gradient-mystical text-background border-0">
            <CardContent className="py-12 text-center">
              <h3 className="text-2xl font-serif font-bold mb-4">Discover Your Planetary Positions</h3>
              <p className="mb-6 text-background/90">
                See where each planet is positioned in your birth chart and how they influence your life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link to="/kundli">Generate Your Kundli</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 border-background text-background hover:bg-background/10">
                  <Link to="/astrologers">Get Expert Analysis</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>
    </Layout>
  );
};

export default LearnPlanets;
