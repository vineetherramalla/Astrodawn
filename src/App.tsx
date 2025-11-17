import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import Horoscopes from "./pages/Horoscopes";
import HoroscopeDetail from "./pages/HoroscopeDetail";
import Kundli from "./pages/Kundli";
import Learn from "./pages/Learn";
import LearnHouses from "./pages/LearnHouses";
import LearnPlanets from "./pages/LearnPlanets";
import LearnDashas from "./pages/LearnDashas";
import Articles from "./pages/Articles";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/horoscopes" element={<Horoscopes />} />
            <Route path="/horoscopes/:signId" element={<HoroscopeDetail />} />
            <Route path="/kundli" element={<Kundli />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/learn/houses" element={<LearnHouses />} />
            <Route path="/learn/planets" element={<LearnPlanets />} />
            <Route path="/learn/dashas" element={<LearnDashas />} />
            <Route path="/about" element={<About />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/contact" element={<Contact />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
