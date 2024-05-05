import FeaturesNav from "@/components/FeaturesNav";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProcessSection from "@/components/ProcessSection";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProcessSection />
      <FeaturesNav />
      <Testimonials />
      <Footer />
    </>
  );
}
