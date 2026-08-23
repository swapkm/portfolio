"use client";

import Image from "next/image";
import { motion } from "motion/react";

type HeroProps = {
  scrollToPortfolio: () => void;
};

export default function Hero({ scrollToPortfolio }: HeroProps) {
  return (
    <motion.section
      className="min-h-screen flex items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl w-full px-4 md:flex items-center justify-between gap-10">

        {/* Profile Image */}
        <motion.div
          className="md:w-1/2 mb-8 md:mb-0"
          initial={{ opacity: 0, x: -80, scale: 0.9 }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
            y: [0, -10, 0],
          }}
          transition={{
            opacity: { duration: 0.8 },
            x: { duration: 0.8 },
            scale: { duration: 0.8 },
            y: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          <div className="rounded-2xl overflow-hidden border-8 border-white shadow-2xl">
            <Image
              src="/profile.png"
              alt="Profile"
              width={500}
              height={600}
              className="object-cover w-full h-auto"
              priority
            />
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="md:w-1/2 space-y-6"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.18,
                delayChildren: 0.4,
              },
            },
          }}
        >
          {/* Intro */}
          <motion.div
            className="flex items-center gap-4"
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
          >
            <motion.span
              className="w-3 h-3 rounded-full bg-yellow-500"
              animate={{
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            />

            <span className="uppercase text-sm tracking-widest font-semibold">
              Intro
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="text-4xl md:text-4xl font-bold leading-tight"
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0 },
            }}
          >
            I'M{" "}
            <motion.span
              className="text-yellow-500 inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 1,
                duration: 0.5,
              }}
            >
              SWAP KAM
            </motion.span>
            .
            <br />
            · VIDEO EDITOR
            <br />
            · CONTENT STRATEGIST
            <br />
            · CONSULTANT
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            className="text-md md:text-lg leading-relaxed"
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
          >
            Creative Short Form Video Editor & Content Strategist, helping
            creators and brands grow on Instagram & YouTube. Skilled in
            high-retention video editing, content structuring, and
            platform-specific growth strategy. Strong understanding of audience
            psychology, hooks, and pacing.
          </motion.p>

          {/* Button */}
          <motion.button
            onClick={scrollToPortfolio}
            whileHover={{
              scale: 1.05,
              y: -3,
            }}
            whileTap={{
              scale: 0.95,
            }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
            className="inline-flex items-center gap-2 px-6 py-3 border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black font-semibold rounded-lg transition-colors"
          >
            MORE ABOUT ME →
          </motion.button>

          {/* Scroll Indicator */}
          <motion.div
            className="pt-8 flex flex-col items-center md:items-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
          
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}