import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ScrollingBanner from "./components/ScrollingBanner";
import TrustedLogos from "./components/TrustedLogos";
import ProjectsSection from "./components/ProjectsSection";
import EntertainmentSection from "./components/EntertainmentSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top" className="font-sans bg-white dark:bg-[#050505] min-h-screen overflow-x-hidden">
        <HeroSection />
        <ScrollingBanner />
        <TrustedLogos />
        <ProjectsSection />
        <EntertainmentSection />
        <Footer />
      </main>
    </>
  );
}
