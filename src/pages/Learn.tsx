import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Home, Sparkles, Clock } from "lucide-react";
import { motion } from "framer-motion";

const Learn = () => {
  const topics = [
    {
      id: "houses",
      title: "12 Houses",
      icon: Home,
      description: "Learn about the 12 houses (Bhavas) in Vedic astrology and their significance in your birth chart",
      path: "/learn/houses",
      color: "from-primary/20 to-accent/20",
    },
    {
      id: "planets",
      title: "9 Planets",
      icon: Sparkles,
      description: "Understand the nine planets (Grahas) and their influence on different aspects of life",
      path: "/learn/planets",
      color: "from-secondary/20 to-primary/20",
    },
    {
      id: "dashas",
      title: "Dasha Periods",
      icon: Clock,
      description: "Explore the planetary periods (Dashas) and how they shape different phases of your life",
      path: "/learn/dashas",
      color: "from-accent/20 to-secondary/20",
    },
  ];

  return (
    <Layout>
      <Helmet>
        <title>Learn Vedic Astrology - Educational Resources | AstroVeda</title>
        <meta
          name="description"
          content="Learn Vedic astrology fundamentals: 12 houses, 9 planets, and dasha periods. Comprehensive educational resources for beginners and enthusiasts."
        />
      </Helmet>

      <section className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen className="h-10 w-10 text-primary" />
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gradient">
              Learn Vedic Astrology
            </h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Master the fundamentals of Vedic astrology. Understand houses, planets, and dashas to interpret your birth chart.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {topics.map((topic, index) => {
            const Icon = topic.icon;
            return (
              <motion.div
                key={topic.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`hover-lift h-full border-2 bg-gradient-to-br ${topic.color}`}>
                  <CardHeader>
                    <Icon className="h-12 w-12 text-primary mb-3" />
                    <CardTitle className="text-2xl font-serif">{topic.title}</CardTitle>
                    <CardDescription className="text-base">{topic.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild className="w-full">
                      <Link to={topic.path}>Start Learning</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Why Learn Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl font-serif">Why Learn Vedic Astrology?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    Self-Understanding
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Gain deep insights into your personality, strengths, and life purpose through your birth chart.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    Timing Life Events
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Understand planetary periods (dashas) to time important decisions and life changes effectively.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    Relationship Insights
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Analyze compatibility and understand relationship dynamics through planetary positions.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    Career Guidance
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Discover your natural talents and ideal career paths based on your astrological blueprint.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>
    </Layout>
  );
};

export default Learn;
