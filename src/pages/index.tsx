// import HeroSection from "@/components/HeroSection";
// import ServicesSection from "@/components/ServicesSection";
// import AboutSection from "@/components/AboutSection";
// import ProjectsSection from "@/components/ProjectsSection";
// import CTASection from "@/components/CTASection";
// import Footer from "@/components/Footer";

import HeroSection from "@/components/hero-section";
import Navbar from "@/components/nav-bar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      {/*
      <ServicesSection />
      <AboutSection />
      <ProjectsSection />
      <CTASection />
      <Footer /> */}
    </div>
  );
};

export default Index;
