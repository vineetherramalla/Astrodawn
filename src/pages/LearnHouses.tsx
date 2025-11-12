import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Home } from "lucide-react";
import { motion } from "framer-motion";
import { houses } from "@/data/educationalContent";

const LearnHouses = () => {
  return (
    <Layout>
      <Helmet>
        <title>12 Houses in Vedic Astrology - Complete Guide | AstroVeda</title>
        <meta
          name="description"
          content="Learn about the 12 houses (Bhavas) in Vedic astrology. Understand their significance, karaka planets, and what each house represents in your birth chart."
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
            <Home className="h-10 w-10 text-primary" />
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gradient">
              The 12 Houses (Bhavas)
            </h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            The houses divide your birth chart into 12 segments, each governing specific areas of life. Understanding houses is fundamental to interpreting any horoscope.
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
              <CardTitle className="text-2xl font-serif">What are Houses?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-foreground/90">
              <p>
                In Vedic astrology, the 12 houses (Bhavas) represent different areas of life experience. Starting from the Ascendant (Lagna), they move counter-clockwise through the zodiac wheel.
              </p>
              <p>
                Each house has a natural significator (Karaka) planet that represents its themes. The condition of planets in a house, the house lord's position, and aspects to the house all influence its results.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold mb-2">Kendra (Angular)</h4>
                  <p className="text-sm text-muted-foreground">1st, 4th, 7th, 10th - Most powerful houses</p>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold mb-2">Trikona (Trinal)</h4>
                  <p className="text-sm text-muted-foreground">1st, 5th, 9th - Auspicious houses</p>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold mb-2">Dusthana (Malefic)</h4>
                  <p className="text-sm text-muted-foreground">6th, 8th, 12th - Challenging houses</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Houses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {houses.map((house, index) => (
            <motion.div
              key={house.number}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.05 }}
            >
              <Card className="hover-lift h-full border-2">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-3xl font-bold text-primary">{house.number}</span>
                        <div>
                          <CardTitle className="text-xl font-serif">{house.name}</CardTitle>
                          <CardDescription className="text-sm italic">{house.sanskritName}</CardDescription>
                        </div>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {house.naturalKaraka}
                    </Badge>
                  </div>
                  <p className="text-sm font-medium text-primary">{house.significator}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-foreground/90">{house.description}</p>
                  
                  <div>
                    <h4 className="text-sm font-semibold mb-2">Key Representations:</h4>
                    <div className="flex flex-wrap gap-2">
                      {house.represents.map((item, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {item}
                        </Badge>
                      ))}
                    </div>
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
          <Card className="bg-gradient-cosmic text-background border-0">
            <CardContent className="py-12 text-center">
              <h3 className="text-2xl font-serif font-bold mb-4">Want to Understand Your Houses?</h3>
              <p className="mb-6 text-background/90">
                Generate your Kundli to see which planets occupy which houses in your birth chart.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link to="/kundli">Generate Your Kundli</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 border-background text-background hover:bg-background/10">
                  <Link to="/astrologers">Consult an Expert</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>
    </Layout>
  );
};

export default LearnHouses;
