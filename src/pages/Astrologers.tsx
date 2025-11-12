import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MessageCircle, Video, Phone } from "lucide-react";
import { motion } from "framer-motion";

interface Astrologer {
  id: number;
  name: string;
  specialization: string[];
  experience: number;
  languages: string[];
  rating: number;
  consultations: number;
  rate: number;
  available: boolean;
}

const astrologers: Astrologer[] = [
  {
    id: 1,
    name: "Dr. Rajesh Sharma",
    specialization: ["Vedic Astrology", "Kundli Reading", "Career Guidance"],
    experience: 15,
    languages: ["English", "Hindi", "Telugu"],
    rating: 4.8,
    consultations: 5000,
    rate: 500,
    available: true,
  },
  {
    id: 2,
    name: "Smt. Priya Devi",
    specialization: ["Love & Relationships", "Marriage Compatibility", "Gemstone Therapy"],
    experience: 12,
    languages: ["English", "Hindi"],
    rating: 4.9,
    consultations: 4200,
    rate: 600,
    available: true,
  },
  {
    id: 3,
    name: "Pt. Arun Kumar",
    specialization: ["Financial Astrology", "Business Consultation", "Remedial Solutions"],
    experience: 20,
    languages: ["English", "Hindi", "Telugu"],
    rating: 4.7,
    consultations: 6500,
    rate: 800,
    available: false,
  },
  {
    id: 4,
    name: "Dr. Meena Reddy",
    specialization: ["Health Astrology", "Medical Astrology", "Wellness Guidance"],
    experience: 10,
    languages: ["English", "Telugu"],
    rating: 4.6,
    consultations: 3000,
    rate: 450,
    available: true,
  },
];

const Astrologers = () => {
  const handleConsult = (astrologer: Astrologer) => {
    const message = `Hello ${astrologer.name}! I would like to book a consultation with you.`;
    const whatsappUrl = `https://wa.me/91515615597?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Layout>
      <Helmet>
        <title>Expert Astrologers - Book Consultation | AstroVeda</title>
        <meta
          name="description"
          content="Consult with experienced Vedic astrologers online. Get personalized guidance on love, career, health and more."
        />
      </Helmet>

      <section className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-gradient">
            Our Expert Astrologers
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect with verified and experienced Vedic astrologers for personalized guidance and remedies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {astrologers.map((astrologer, index) => (
            <motion.div
              key={astrologer.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="hover-lift h-full border-2">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-2xl font-serif">{astrologer.name}</CardTitle>
                      <CardDescription className="mt-1">
                        {astrologer.experience} years experience
                      </CardDescription>
                    </div>
                    <Badge
                      variant={astrologer.available ? "default" : "secondary"}
                      className={astrologer.available ? "bg-green-500" : ""}
                    >
                      {astrologer.available ? "Available" : "Busy"}
                    </Badge>
                  </div>

                  <div className="flex items-center gap-4 mt-3">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-accent text-accent" />
                      <span className="text-sm font-medium">{astrologer.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {astrologer.consultations.toLocaleString()} consultations
                    </span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Specializations */}
                  <div>
                    <h4 className="text-sm font-semibold mb-2">Specializations</h4>
                    <div className="flex flex-wrap gap-2">
                      {astrologer.specialization.map((spec) => (
                        <Badge key={spec} variant="outline" className="text-xs">
                          {spec}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Languages */}
                  <div>
                    <h4 className="text-sm font-semibold mb-2">Languages</h4>
                    <p className="text-sm text-muted-foreground">{astrologer.languages.join(", ")}</p>
                  </div>

                  {/* Consultation Rate */}
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <p className="text-sm text-muted-foreground">Consultation Fee</p>
                      <p className="text-2xl font-bold text-primary">₹{astrologer.rate}</p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-2">
                    <Button
                      className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90"
                      onClick={() => handleConsult(astrologer)}
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Chat
                    </Button>
                    <Button variant="outline" size="icon">
                      <Phone className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Video className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 max-w-3xl mx-auto"
        >
          <Card className="bg-gradient-cosmic text-background border-0">
            <CardContent className="py-12 text-center">
              <h2 className="text-3xl font-serif font-bold mb-4">Can't Decide?</h2>
              <p className="text-lg mb-6 text-background/90">
                Let us help you find the perfect astrologer based on your specific needs and concerns.
              </p>
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Get Matched with an Astrologer
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </section>
    </Layout>
  );
};

export default Astrologers;
