import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import HoroscopeCard from "@/components/HoroscopeCard";
import { zodiacSigns } from "@/data/zodiacSigns";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

const Horoscopes = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const type = (searchParams.get("type") || "daily") as "daily" | "weekly" | "monthly";

  const handleTypeChange = (newType: string) => {
    setSearchParams({ type: newType });
  };

  return (
    <Layout>
      <Helmet>
        <title>Free {type.charAt(0).toUpperCase() + type.slice(1)} Horoscope | AstroVeda</title>
        <meta
          name="description"
          content={`Read your free ${type} horoscope for all zodiac signs. Get personalized astrological predictions and insights.`}
        />
      </Helmet>

      <section className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-gradient">
            {type.charAt(0).toUpperCase() + type.slice(1)} Horoscopes
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover what the stars have in store for you. Select your zodiac sign to read your personalized horoscope.
          </p>
        </motion.div>

        {/* Type Selector */}
        <div className="flex justify-center mb-12">
          <Tabs value={type} onValueChange={handleTypeChange} className="w-full max-w-md">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="daily">Daily</TabsTrigger>
              <TabsTrigger value="weekly">Weekly</TabsTrigger>
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Zodiac Signs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {zodiacSigns.map((sign, index) => (
            <HoroscopeCard key={sign.id} sign={sign} type={type} index={index} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Horoscopes;
