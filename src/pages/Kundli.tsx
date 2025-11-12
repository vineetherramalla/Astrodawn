import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Calendar, MapPin, Clock, Download } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";

const kundliSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  date: z.string().min(1, "Date of birth is required"),
  time: z.string().min(1, "Time of birth is required"),
  place: z.string().min(2, "Place of birth is required").max(100),
  gender: z.enum(["male", "female", "other"]),
});

type KundliFormData = z.infer<typeof kundliSchema>;

const Kundli = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const form = useForm<KundliFormData>({
    resolver: zodResolver(kundliSchema),
    defaultValues: {
      name: "",
      date: "",
      time: "",
      place: "",
      gender: "male",
    },
  });

  const onSubmit = async (data: KundliFormData) => {
    setIsGenerating(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    setIsGenerating(false);
    setShowResult(true);
    toast.success("Your Kundli has been generated!");
  };

  const handleWhatsAppContact = () => {
    const message = `Hello! I would like to get a detailed Kundli reading. My details: ${form.getValues("name")}, DOB: ${form.getValues("date")}`;
    const whatsappUrl = `https://wa.me/91515615597?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Layout>
      <Helmet>
        <title>Free Kundli Generator - Birth Chart | AstroVeda</title>
        <meta
          name="description"
          content="Generate your free Vedic Kundli (birth chart) online. Get detailed astrological analysis based on your date, time and place of birth."
        />
      </Helmet>

      <section className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-gradient">
            Kundli Generator
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get your personalized Vedic birth chart (Janam Kundli) with detailed planetary positions and insights.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="border-2">
                <CardHeader>
                  <CardTitle>Enter Birth Details</CardTitle>
                  <CardDescription>
                    Accurate information ensures precise astrological calculations
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your full name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="date"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Date of Birth</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input type="date" className="pl-10" {...field} />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="time"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Time of Birth</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Clock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input type="time" className="pl-10" {...field} />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="place"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Place of Birth</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input placeholder="City, Country" className="pl-10" {...field} />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="gender"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Gender</FormLabel>
                            <FormControl>
                              <select
                                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                                {...field}
                              >
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                              </select>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        className="w-full bg-primary text-primary-foreground"
                        disabled={isGenerating}
                      >
                        {isGenerating ? "Generating..." : "Generate Kundli"}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Info / Result */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              {!showResult ? (
                <>
                  <Card>
                    <CardHeader>
                      <CardTitle>What is Kundli?</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3 text-sm">
                      <p>
                        A Kundli (or Janam Patri) is your Vedic birth chart that maps the positions of planets at the exact time of your birth.
                      </p>
                      <p>
                        It reveals insights about your personality, strengths, challenges, and life path based on ancient Vedic astrology principles.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>What You'll Get</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-primary">✓</span>
                          <span>Complete planetary positions</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">✓</span>
                          <span>12 houses analysis</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">✓</span>
                          <span>Dasha periods</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">✓</span>
                          <span>Ascendant (Lagna) details</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">✓</span>
                          <span>Downloadable PDF report</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </>
              ) : (
                <Card className="border-2 border-primary">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      ✨ Your Kundli is Ready!
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 bg-muted rounded-lg">
                      <p className="text-sm font-medium mb-2">Basic Analysis Generated</p>
                      <p className="text-sm text-muted-foreground">
                        Your birth chart shows a strong planetary alignment. For detailed interpretations and personalized guidance, consult with our expert astrologers.
                      </p>
                    </div>

                    <Button className="w-full" variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      Download PDF Report
                    </Button>

                    <Button 
                      className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                      onClick={handleWhatsAppContact}
                    >
                      Get Detailed Reading on WhatsApp
                    </Button>

                    <Button
                      variant="ghost"
                      className="w-full"
                      onClick={() => {
                        setShowResult(false);
                        form.reset();
                      }}
                    >
                      Generate Another Kundli
                    </Button>
                  </CardContent>
                </Card>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Kundli;
