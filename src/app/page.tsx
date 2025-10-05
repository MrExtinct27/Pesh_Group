import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import AboutSection from "@/components/sections/AboutSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import ClientsTestimonialsSection from "@/components/sections/ClientsTestimonialsSection";
import ConsultationSection from "@/components/sections/ConsultationSection";
import HappyClients from "@/components/sections/HappyClients";
import Testimonials from "@/components/sections/Testimonials";
import CompanyTimelineSection from "@/components/sections/CompanyTimelineSection";
import FAQSection from "@/components/sections/FAQSection";
import ScheduleVisitSection from "@/components/sections/ScheduleVisitSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HappyClients />
      <ServicesSection />
      <AboutSection />
      <CompanyTimelineSection />
      <PortfolioSection />
      <Testimonials />
      <FAQSection />
      <ScheduleVisitSection />
    </>
  );
}