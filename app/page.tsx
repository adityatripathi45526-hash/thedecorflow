import FAQ from "@/components/FAQ";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Button from "@/components/Button";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Gallery />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <CTA />
      <Contact />
      <Footer />

      <Button>Book Consultation</Button>

      <BackToTop />
      <WhatsAppButton />
    </>
  );
}