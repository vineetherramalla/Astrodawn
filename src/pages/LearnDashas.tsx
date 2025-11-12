import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { dashas } from "@/data/educationalContent";

const LearnDashas = () => {
  return (
    <Layout>
      <Helmet>
        <title>Dasha Periods in Vedic Astrology - Complete Guide | AstroVeda</title>
        <meta
          name="description"
          content="Learn about Vimshottari Dasha system and planetary periods in Vedic astrology. Understand how dashas influence different life phases."
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
            <Clock className="h-10 w-10 text-primary" />
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gradient">
              Dasha Periods
            </h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Dashas are planetary periods that divide your life into time segments, each ruled by a specific planet. Understanding dashas is key to timing life events.
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
              <CardTitle className="text-2xl font-serif">What is Vimshottari Dasha?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-foreground/90">
              <p>
                The Vimshottari Dasha system is the most widely used predictive tool in Vedic astrology. It divides a person's life into periods (Mahadasha) and sub-periods (Antardasha), each ruled by one of the nine planets.
              </p>
              <p>
                The starting planet of your dasha sequence is determined by the Moon's nakshatra position at your time of birth. Each planet's period brings specific themes, opportunities, and challenges based on that planet's placement and strength in your birth chart.
              </p>
              <div className="bg-muted p-6 rounded-lg mt-6">
                <h4 className="font-semibold mb-3">Dasha Hierarchy</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">1.</span>
                    <span><strong>Mahadasha</strong> - Main period (6-20 years depending on planet)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">2.</span>
                    <span><strong>Antardasha</strong> - Sub-period within Mahadasha</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">3.</span>
                    <span><strong>Pratyantardasha</strong> - Sub-sub-period for finer timing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">4.</span>
                    <span><strong>Sookshma Dasha</strong> - Most detailed period division</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* First Card - System Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto mb-8"
        >
          <Card className="border-2 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Badge className="text-sm">System Overview</Badge>
              </div>
              <CardTitle className="text-2xl font-serif">{dashas[0].name}</CardTitle>
              <CardDescription>{dashas[0].planet}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground/90">{dashas[0].description}</p>
              
              <div>
                <h4 className="font-semibold mb-3">Key Characteristics:</h4>
                <div className="grid md:grid-cols-3 gap-3">
                  {dashas[0].characteristics.map((char, i) => (
                    <div key={i} className="p-3 bg-background rounded-lg border">
                      <p className="text-sm">{char}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Important Points:</h4>
                <ul className="space-y-2">
                  {dashas[0].keyPoints.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="text-primary mt-0.5">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Planetary Mahadashas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {dashas.slice(1).map((dasha, index) => (
            <motion.div
              key={dasha.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.05 }}
            >
              <Card className="hover-lift h-full border-2">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <CardTitle className="text-xl font-serif">{dasha.name}</CardTitle>
                      <CardDescription className="mt-1">{dasha.planet}</CardDescription>
                    </div>
                    <Badge variant="outline" className="text-sm">
                      {dasha.duration}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-foreground/90">{dasha.description}</p>
                  
                  <div>
                    <h4 className="text-xs font-semibold mb-2 text-muted-foreground">KEY THEMES</h4>
                    <div className="flex flex-wrap gap-2">
                      {dasha.characteristics.map((char, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {char}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t">
                    <h4 className="text-xs font-semibold mb-2">WHAT TO EXPECT:</h4>
                    <ul className="space-y-1.5">
                      {dasha.keyPoints.slice(0, 4).map((point, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs">
                          <span className="text-primary mt-0.5">✓</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* How to Use Dashas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 max-w-4xl mx-auto"
        >
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl font-serif">How to Use Dasha Analysis</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <span className="text-primary text-xl">1</span>
                    Identify Current Period
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Know which Mahadasha and Antardasha you're currently running through your birth chart analysis.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <span className="text-primary text-xl">2</span>
                    Assess Planet Strength
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Check the dasha lord's position, dignity, and aspects in your birth chart to gauge the period's effects.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <span className="text-primary text-xl">3</span>
                    Plan Important Events
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Time major life decisions during favorable dasha periods of well-placed benefic planets.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <span className="text-primary text-xl">4</span>
                    Apply Remedies
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Use planetary remedies during challenging dasha periods to minimize negative effects.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <Card className="bg-gradient-hero text-background border-0">
            <CardContent className="py-12 text-center">
              <h3 className="text-2xl font-serif font-bold mb-4">Want to Know Your Current Dasha?</h3>
              <p className="mb-6 text-background/90">
                Generate your Kundli to discover which planetary period you're currently experiencing and what lies ahead.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link to="/kundli">Check Your Dasha</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 border-background text-background hover:bg-background/10">
                  <Link to="/astrologers">Get Dasha Analysis</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>
    </Layout>
  );
};

export default LearnDashas;
