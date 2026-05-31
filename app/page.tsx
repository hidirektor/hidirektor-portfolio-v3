import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ScrollingBanner from "./components/ScrollingBanner";
import ServicesSection from "./components/ServicesSection";
import CaseStudySection from "./components/CaseStudySection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top" className="font-sans">
        <HeroSection />
        <ScrollingBanner />
        <ServicesSection />
        <CaseStudySection />
      </main>
      <Footer />
    </>
  );
}
