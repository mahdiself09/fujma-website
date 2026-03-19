import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Trust from "@/components/Trust";
import Services from "@/components/Services";
import InlineCTA from "@/components/InlineCTA";
import MicroTrust from "@/components/MicroTrust";
import HowItWorks from "@/components/HowItWorks";
import WhyFujma from "@/components/WhyFujma";
import CaseStudies from "@/components/CaseStudies";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Trust />
        <Services />
        <HowItWorks />
        <InlineCTA variant="dark" />
        <WhyFujma />
        <CaseStudies />
        <CTA />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
