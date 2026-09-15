import BackToTop from "./components/BackToTop";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Achievements from "./sections/Achievements";
import Contact from "./sections/Contact";
import DesignGallery from "./sections/DesignGallery";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import FeaturedVideos from "./sections/FeaturedVideos";
import Hero from "./sections/Hero";
import Organizations from "./sections/Organizations";
import RecentWork from "./sections/RecentWork";
import Services from "./sections/Services";
import Skills from "./sections/Skills";
import Work from "./sections/Work";

export default function App() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-violet-500 focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-ink-950"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />
        <Organizations />
        <FeaturedVideos />
        <RecentWork />
        <About />
        <Work />
        <Experience />
        <Education />
        <Skills />
        <Achievements />
        <DesignGallery />
        <Services />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
