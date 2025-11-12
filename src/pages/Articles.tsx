import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";
import { motion } from "framer-motion";

interface Article {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  readTime: number;
  date: string;
}

const articles: Article[] = [
  {
    id: 1,
    title: "Understanding Saturn Transit 2024: Effects on All Zodiac Signs",
    excerpt: "Saturn's transit through different signs brings significant changes. Learn how this powerful planet will influence your life in 2024.",
    category: "Transits",
    readTime: 5,
    date: "2024-01-15",
  },
  {
    id: 2,
    title: "Panchang Today: Auspicious Timings and Muhurat",
    excerpt: "Daily Panchang guide for favorable timings, tithis, and nakshatras to plan your important activities.",
    category: "Panchang",
    readTime: 3,
    date: "2024-01-14",
  },
  {
    id: 3,
    title: "Mercury Retrograde Survival Guide: Do's and Don'ts",
    excerpt: "Navigate Mercury retrograde periods with confidence. Essential tips to minimize disruptions in communication and travel.",
    category: "Planetary Movements",
    readTime: 6,
    date: "2024-01-12",
  },
  {
    id: 4,
    title: "Vedic Remedies for Career Growth and Success",
    excerpt: "Powerful astrological remedies and mantras to overcome career obstacles and achieve professional success.",
    category: "Remedies",
    readTime: 7,
    date: "2024-01-10",
  },
  {
    id: 5,
    title: "Understanding Your Birth Chart: A Beginner's Guide",
    excerpt: "Learn to read and interpret your Kundli. Understand houses, planets, and their significance in Vedic astrology.",
    category: "Education",
    readTime: 8,
    date: "2024-01-08",
  },
  {
    id: 6,
    title: "Gemstone Therapy: Choosing the Right Stone for You",
    excerpt: "Discover how gemstones can enhance positive planetary influences and provide protection based on your birth chart.",
    category: "Remedies",
    readTime: 5,
    date: "2024-01-05",
  },
];

const Articles = () => {
  return (
    <Layout>
      <Helmet>
        <title>Astrology Articles & Blog | AstroVeda</title>
        <meta
          name="description"
          content="Read expert articles on Vedic astrology, planetary transits, Panchang, remedies and astrological guidance."
        />
      </Helmet>

      <section className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-gradient">
            Astrology Articles & Insights
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of articles on Vedic astrology, planetary transits, remedies, and cosmic wisdom.
          </p>
        </motion.div>

        {/* Featured Article */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <Card className="border-2 border-primary hover-lift cursor-pointer bg-gradient-to-br from-primary/5 to-accent/5">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Badge className="bg-accent text-accent-foreground">Featured</Badge>
                <Badge variant="outline">{articles[0].category}</Badge>
              </div>
              <CardTitle className="text-3xl font-serif">{articles[0].title}</CardTitle>
              <CardDescription className="text-base mt-2">{articles[0].excerpt}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {new Date(articles[0].date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {articles[0].readTime} min read
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.slice(1).map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (index + 2) }}
            >
              <Card className="hover-lift cursor-pointer h-full border-2">
                <CardHeader>
                  <Badge variant="outline" className="w-fit mb-2">
                    {article.category}
                  </Badge>
                  <CardTitle className="text-xl font-serif">{article.title}</CardTitle>
                  <CardDescription>{article.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(article.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {article.readTime} min
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Articles;
