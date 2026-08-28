"use client";

import { useRef } from "react";
import { motion } from "motion/react";

import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";

export default function Home() {
  const portfolioRef = useRef<HTMLDivElement>(null);

  const scrollToPortfolio = () => {
    portfolioRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="font-sans min-h-screen p-2 pb-20 sm:p-2">
      <motion.main
        className="flex flex-col gap-[32px] items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <Hero scrollToPortfolio={scrollToPortfolio} />
        <div ref={portfolioRef}>
          <Portfolio />
        </div>
        <AboutMe />
        <Contact />
      </motion.main>
    </div>
  );
}
