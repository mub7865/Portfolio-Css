import About from "@/components/about/About";
import Contact from "@/components/contacts/Contact";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import HeroSection from "@/components/hero-section/HeroSection";
import Portfolio from "@/components/porfolio/Portfolio";
import Services from "@/components/services/Services";
import Testimonials from "@/components/testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <Header/>
       <HeroSection/>
      <About/>
      <Portfolio/>
      <Services/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </>
  );
}
