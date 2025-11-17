import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { astrologerConfig } from "@/config/astrologer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, MapPin, Phone, Mail, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <Layout>
      <Helmet>
        <title>About {astrologerConfig.name} - Expert Astrologer</title>
        <meta name="description" content={astrologerConfig.bio} />
      </Helmet>

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 py-20">
        <motion.div
          className="container mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 text-foreground">
              {astrologerConfig.name}
            </h1>
            <p className="text-2xl text-primary font-semibold mb-3">{astrologerConfig.title}</p>
            <p className="text-lg italic text-muted-foreground mb-6 max-w-3xl mx-auto">
              "{astrologerConfig.tagline}"
            </p>
          </div>
        </motion.div>
      </section>

      {/* Bio Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="border-2 shadow-lg">
            <CardHeader>
              <CardTitle className="text-3xl font-serif">About Me</CardTitle>
            </CardHeader>
            <CardContent className="text-lg leading-relaxed text-foreground/90">
              <p className="mb-6">{astrologerConfig.bio}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Location</h3>
                    <p className="text-muted-foreground">{astrologerConfig.location}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Phone</h3>
                    <p className="text-muted-foreground">{astrologerConfig.phone}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <p className="text-muted-foreground">{astrologerConfig.email}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* Expertise Section */}
      <section className="container mx-auto px-4 py-16 bg-muted/30 -mx-4 px-4 my-8">
        <motion.div
          className="container mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold mb-4 text-foreground">Areas of Expertise</h2>
            <p className="text-lg text-muted-foreground">Specializing in ancient wisdom and spiritual sciences</p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {astrologerConfig.expertise.map((expert, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full border-2 hover:shadow-lg transition-all">
                  <CardHeader>
                    <Star className="h-8 w-8 text-accent mb-3" />
                    <CardTitle className="text-2xl font-serif">{expert.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80 leading-relaxed">{expert.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold mb-4 text-foreground">Services Offered</h2>
            <p className="text-lg text-muted-foreground">Comprehensive astrological guidance for life's journey</p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {astrologerConfig.services.map((service) => (
              <motion.div key={service.id} variants={itemVariants}>
                <Card className="h-full border-2 hover:shadow-lg transition-all group">
                  <CardHeader>
                    <CardTitle className="text-2xl font-serif group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-base text-foreground/70">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="default" className="w-full">
                      <Link to="/contact">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-16 bg-muted/30 -mx-4 px-4 my-8">
        <motion.div
          className="container mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold mb-4 text-foreground">What Clients Say</h2>
            <p className="text-lg text-muted-foreground">Real stories from satisfied clients</p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {astrologerConfig.testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full border-2">
                  <CardContent className="pt-6 flex flex-col h-full">
                    <div className="flex gap-1 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 fill-accent text-accent"
                        />
                      ))}
                    </div>
                    <p className="text-foreground/80 flex-1 mb-4 leading-relaxed italic">"{testimonial.text}"</p>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Social & CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-gradient-mystical text-background border-0 shadow-lg">
            <CardContent className="py-16 text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                Connect With Me
              </h2>
              <p className="text-xl mb-8 text-background/90 max-w-2xl mx-auto leading-relaxed">
                Ready to explore your cosmic destiny? Connect with me on social media or book a consultation
              </p>
              
              <div className="flex justify-center gap-4 mb-8">
                <a
                  href={astrologerConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-background/20 hover:bg-background/40 rounded-full transition-all"
                >
                  <Instagram className="h-6 w-6 text-background" />
                </a>
                <a
                  href={astrologerConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-background/20 hover:bg-background/40 rounded-full transition-all"
                >
                  <Facebook className="h-6 w-6 text-background" />
                </a>
                <a
                  href={astrologerConfig.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-background/20 hover:bg-background/40 rounded-full transition-all"
                >
                  <Twitter className="h-6 w-6 text-background" />
                </a>
                <a
                  href={astrologerConfig.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-background/20 hover:bg-background/40 rounded-full transition-all"
                >
                  <Youtube className="h-6 w-6 text-background" />
                </a>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link to="/contact">Book a Consultation</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-background text-background hover:bg-background/10"
                >
                  <a href={`mailto:${astrologerConfig.email}`}>Send Email</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>
    </Layout>
  );
};

export default About;
