"use client";

import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import TransformSection from "./components/TransformSection";
import ServiceCards from "./components/ServiceCards";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <AboutSection />
      <ServiceCards />
      <Contact />
      <TransformSection />
      <Footer />
    </main>
  );
}