import { useParams, useSearchParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { zodiacSigns } from "@/data/zodiacSigns";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Share2, Heart, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const HoroscopeDetail = () => {
  const { signId } = useParams();
  const [searchParams] = useSearchParams();
  const type = (searchParams.get("type") || "daily") as "daily" | "weekly" | "monthly";

  const sign = zodiacSigns.find((s) => s.id === signId);

  if (!sign) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl font-serif font-bold mb-4">Zodiac Sign Not Found</h1>
          <Link to="/horoscopes">
            <Button>Return to Horoscopes</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  // Sample horoscope content (in production, this would come from CMS/API)
  const horoscopeContent = {
    overview: "Today brings powerful cosmic energy to your sign. The alignment of planets suggests a time of transformation and growth. Trust your intuition and embrace new opportunities.",
    love: "Romantic energies are heightened. Single? You might meet someone special. Coupled? Deep conversations strengthen your bond.",
    career: "Professional matters require attention. A new project or opportunity may present itself. Your hard work is about to pay off.",
    health: "Focus on self-care and balance. Listen to your body's needs. Light exercise and meditation will benefit you.",
    lucky: {
      color: "Golden Yellow",
      number: "7",
      time: "10 AM - 12 PM",
    },
  };

  return (
    <Layout>
      <Helmet>
        <title>
          {sign.name} {type.charAt(0).toUpperCase() + type.slice(1)} Horoscope | AstroVeda
        </title>
        <meta
          name="description"
          content={`${sign.name} ${type} horoscope predictions. Read your personalized astrological insights for love, career, and health.`}
        />
      </Helmet>

      <section className="container mx-auto px-4 py-12">
        {/* Back Button */}
        <Link to={`/horoscopes?type=${type}`} className="inline-flex items-center gap-2 text-primary hover:underline mb-6">
          <ArrowLeft className="h-4 w-4" />
          Back to all horoscopes
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="text-6xl">{sign.symbol}</span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gradient">{sign.name}</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            {sign.dates} • {sign.element} • Ruled by {sign.ruler}
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <Button variant="outline" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
            <Button variant="outline" size="sm">
              <Heart className="h-4 w-4 mr-2" />
              Save
            </Button>
          </div>
        </motion.div>

        {/* Horoscope Content */}
        <div className="max-w-4xl mx-auto space-y-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed">{horoscopeContent.overview}</p>
              </CardContent>
            </Card>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>❤️ Love & Relationships</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{horoscopeContent.love}</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>💼 Career & Finance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{horoscopeContent.career}</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>🧘 Health & Wellness</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{horoscopeContent.health}</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
              <Card className="h-full bg-gradient-to-br from-accent/10 to-primary/10">
                <CardHeader>
                  <CardTitle>🍀 Lucky Factors</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p>
                    <strong>Color:</strong> {horoscopeContent.lucky.color}
                  </p>
                  <p>
                    <strong>Number:</strong> {horoscopeContent.lucky.number}
                  </p>
                  <p>
                    <strong>Time:</strong> {horoscopeContent.lucky.time}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <Card className="bg-gradient-cosmic text-background">
              <CardContent className="py-8 text-center">
                <h3 className="text-2xl font-serif font-bold mb-4">Want Personalized Guidance?</h3>
                <p className="mb-6">Consult with our expert astrologers for detailed insights tailored to your birth chart.</p>
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link to="/astrologers">Book Consultation</Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default HoroscopeDetail;
