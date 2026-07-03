import "./globals.css";
import PageLoader from "@/components/layout/PageLoader";
import Topbar from "@/components/layout/Topbar";
import Navbar from "@/components/layout/Navbar";
import MegaMenu from "@/components/layout/MegaMenu";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import PlatformBento from "@/components/sections/PlatformBento";
import IndustryGallery from "@/components/sections/IndustryGallery";
import CustomerCarousel from "@/components/sections/CustomerCarousel";
import WhySection from "@/components/sections/WhySection";
import CtaBand from "@/components/sections/CtaBand";
import HomeReveal from "@/components/sections/HomeReveal";

export default function HomePage() {
  return (
    <>
      <PageLoader />
      <HomeReveal />
      <Topbar />
      <Navbar />
      <MegaMenu />

      <Hero />
      <Stats />
      <PlatformBento />
      <IndustryGallery />
      <CustomerCarousel />
      <WhySection />
      <CtaBand />
      <Footer />
    </>
  );
}
