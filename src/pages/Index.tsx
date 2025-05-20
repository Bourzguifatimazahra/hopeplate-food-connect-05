
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import HowItWorks from "@/components/home/HowItWorks";
import Testimonials from "@/components/home/Testimonials";
import Stats from "@/components/home/Stats";
import Cta from "@/components/home/Cta";

const Index = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Stats />
      <HowItWorks />
      <Testimonials />
      <Cta />
    </div>
  );
  
};

export default Index;
