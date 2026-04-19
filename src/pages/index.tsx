import AboutSection from "@/components/about";
import CTASection from "@/components/cta";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import Navbar from "@/components/nav-bar";
// import ProjectsSection from "@/components/projects";
import ServicesSection from "@/components/services";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      {/* <ProjectsSection /> */}
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
