import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ScrollingBanner from "./components/ScrollingBanner";
import SocialsBar from "./components/SocialsBar";
import ServicesSection from "./components/ServicesSection";
import ExperienceList from "./components/ExperienceList";
import CaseStudySection from "./components/CaseStudySection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top" className="font-sans">
        <HeroSection />
        <ScrollingBanner />
        <SocialsBar />
        <ServicesSection />
        
        <section className="py-24" id="experience">
          <div className="wrap">
            <ExperienceList />
          </div>
        </section>

        <CaseStudySection />
      </main>
      <Footer />
    </>
  );
}
