import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import HoroscopeCard from "@/components/HoroscopeCard";
import { zodiacSigns } from "@/data/zodiacSigns";
import { astrologerConfig } from "@/config/astrologer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sparkles, Users, FileText, BookOpen, Star } from "lucide-react";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <Layout>
      <Helmet>
        <title>AstroVeda - Your Guide to Vedic Astrology & Horoscopes</title>
        <meta
          name="description"
          content="Discover your cosmic destiny with AstroVeda. Get daily horoscopes, generate your Kundli, and consult expert Vedic astrologers."
        />
        <meta name="keywords" content="astrology, horoscope, kundli, vedic astrology, birth chart, zodiac signs" />
      </Helmet>

      <Hero />

      {/* Quick Access Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <Card className="hover-lift border-2">
            <CardHeader>
              <Sparkles className="h-8 w-8 text-primary mb-2" />
              <CardTitle className="font-serif">Daily Horoscopes</CardTitle>
              <CardDescription>Your personalized cosmic forecast</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full">
                <Link to="/horoscopes?type=daily">Read Today's Horoscope</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover-lift border-2">
            <CardHeader>
              <FileText className="h-8 w-8 text-primary mb-2" />
              <CardTitle className="font-serif">Generate Kundli</CardTitle>
              <CardDescription>Complete birth chart analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full" variant="secondary">
                <Link to="/kundli">Create Your Kundli</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover-lift border-2 bg-gradient-to-br from-accent/10 to-primary/10">
            <CardHeader>
              <BookOpen className="h-8 w-8 text-primary mb-2" />
              <CardTitle className="font-serif">Learn Astrology</CardTitle>
              <CardDescription>Master houses, planets & dashas</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full" variant="default">
                <Link to="/learn">Start Learning</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover-lift border-2">
            <CardHeader>
              <Users className="h-8 w-8 text-primary mb-2" />
              <CardTitle className="font-serif">Expert Astrologers</CardTitle>
              <CardDescription>Consult verified professionals</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full" variant="outline">
                <Link to="/about">Meet Our Astrologer</Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* Featured Horoscopes */}
      <section className="container mx-auto px-4 py-16 bg-muted/30">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-gradient">
            Today's Horoscope Highlights
          </h2>
          <p className="text-muted-foreground">Quick glimpse of what the stars hold for you today</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {zodiacSigns.slice(0, 4).map((sign, index) => (
            <HoroscopeCard key={sign.id} sign={sign} type="daily" index={index} />
          ))}
        </div>

        <div className="text-center mt-8">
          <Button asChild size="lg" variant="outline">
            <Link to="/horoscopes">View All Zodiac Signs</Link>
          </Button>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Why AstroVeda?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ancient wisdom meets modern technology for accurate astrological guidance
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Vedic Expertise",
              description: "Authentic Vedic astrology rooted in ancient Indian scriptures",
            },
            {
              title: "Expert Astrologers",
              description: "Certified professionals with years of experience",
            },
            {
              title: "Accurate Predictions",
              description: "Precise calculations based on birth details",
            },
            {
              title: "Personalized Guidance",
              description: "Customized remedies and recommendations",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="text-center h-full border-2">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">✨</div>
                  <h3 className="font-serif font-bold text-xl mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Our Astrologer */}
      <section className="container mx-auto px-4 py-16 bg-muted/30 -mx-4 px-4 my-8">
        <motion.div
          className="container mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">About {astrologerConfig.name}</h2>
            <p className="text-lg text-muted-foreground">{astrologerConfig.title}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-2 shadow-lg h-full">
                <CardContent className="pt-8">
                  <p className="text-lg leading-relaxed text-foreground/90 mb-6">
                    {astrologerConfig.bio}
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Star className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-foreground font-semibold">{astrologerConfig.expertise.length}+ Areas of Expertise</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Star className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-foreground font-semibold">{astrologerConfig.services.length}+ Services</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Star className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-foreground font-semibold">{astrologerConfig.testimonials.length}+ Happy Clients</span>
                    </div>
                  </div>
                  <Button asChild className="w-full mt-8">
                    <Link to="/about">Learn More About {astrologerConfig.name.split(' ')[0]}</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-serif font-bold text-foreground">Expertise</h3>
              {astrologerConfig.expertise.map((expert, index) => (
                <Card key={index} className="border-l-4 border-l-primary border-r-0 border-t-0 border-b-0 shadow-sm">
                  <CardContent className="pt-4">
                    <h4 className="font-semibold text-lg text-foreground mb-2">{expert.title}</h4>
                    <p className="text-foreground/70">{expert.description}</p>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Why AstroVeda?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ancient wisdom meets modern technology for accurate astrological guidance
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Vedic Expertise",
              description: "Authentic Vedic astrology rooted in ancient Indian scriptures",
            },
            {
              title: "Expert Astrologers",
              description: "Certified professionals with years of experience",
            },
            {
              title: "Accurate Predictions",
              description: "Precise calculations based on birth details",
            },
            {
              title: "Personalized Guidance",
              description: "Customized remedies and recommendations",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="text-center h-full border-2">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">✨</div>
                  <h3 className="font-serif font-bold text-xl mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-mystical text-background border-0">
            <CardContent className="py-16 text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                Begin Your Cosmic Journey Today
              </h2>
              <p className="text-xl mb-8 text-background/90 max-w-2xl mx-auto">
                Unlock the mysteries of your destiny with personalized Vedic astrological insights
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-glow">
                  <Link to="/kundli">Get Your Free Kundli</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 border-background text-background hover:bg-background/10">
                  <Link to="/astrologers">Talk to an Astrologer</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>
    </Layout>
  );
};

export default Index;
