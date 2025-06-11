"use client";

import Hero from "@/components/hero";
import TechStack from "@/components/techstack";
import Feature from "@/components/feature";
import Header from "@/components/header";
import HowItWorks from "@/components/how-it-works";
import Testimonials from "@/components/testimonials";
import FAQ from "@/components/faq";
import Footer from "@/components/footer";
import Projects from "@/components/projects";
import ContactUs from "@/components/contact-us";
import FloatingActionButton from "@/components/floating-action-button";

export default function LandingPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <TechStack />
        <Feature />
        <HowItWorks />
        <Projects />
        <Testimonials />
        <FAQ />
        <ContactUs />
        <FloatingActionButton />
      </main>
      <Footer />
    </div>
  );
}
