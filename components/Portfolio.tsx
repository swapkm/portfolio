"use client";

import { motion } from "motion/react";

export default function Portfolio() {
  const verticalVideos = [
    "yCc4F6O7YDI",
    "6bDZ8f0OlZU",
    "zHiM6tEjwxA",
    "ux1PeLKem9s",
    "SmO2TTRQDJ0",
    "caEzKaB7Shs",
    "h-S3cQ8YLdY",
    "n0lG3Fzqxgw",
    "oyrtJV4rsRQ",
    "39B2kvS4XqM",
    "uQBGxbSQj24",
    "-VvbKvFQqRU",
  ];

  const horizontalVideos = [
    "6PVIG8xVT6E",
    "yXUEI79ZPYY",
    "XRLA93k2UtI",
    "dgrBGqXQLhU",
  ];

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const card = {
    hidden: {
      opacity: 0,
      y: 80,
      scale: 0.9,
      rotateX: 20,
      filter: "blur(10px)",
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.7,
      },
    },
  };

  return (
    <motion.section
      className="w-full max-w-6xl mx-auto px-6 py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.15 }}
    >
      {/* TITLE */}
      <motion.div
        className="text-center mb-20 relative"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="absolute left-1/2 -translate-x-1/2 text-7xl md:text-8xl text-white/10 -z-10 select-none">
          WORKS
        </span>

        <h2 className="text-4xl font-bold">
          MY <span className="text-yellow-500">PORTFOLIO</span>
        </h2>
      </motion.div>

      {/* SHORT FORM */}
      <motion.div
        className="mb-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <motion.h3
          className="text-2xl font-bold mb-8 text-center"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          SHORT FORM <span className="text-yellow-500">VIDEOS</span>
        </motion.h3>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
        >
          {verticalVideos.map((id) => (
            <motion.div
              key={id}
              variants={card}
              whileHover={{
                y: -10,
                scale: 1.05,
                rotate: 1,
              }}
              transition={{ type: "spring", stiffness: 250 }}
              className="rounded-lg overflow-hidden shadow-lg hover:shadow-yellow-500/40"
            >
              <iframe
                src={`https://www.youtube.com/embed/${id}`}
                className="w-full aspect-[9/16]"
                allowFullScreen
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* LONG FORM */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <motion.h3
          className="text-2xl font-bold mb-8 text-center"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          LONG FORM <span className="text-yellow-500">VIDEOS</span>
        </motion.h3>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-8"
        >
          {horizontalVideos.map((id) => (
            <motion.div
              key={id}
              variants={card}
              whileHover={{
                scale: 1.03,
                y: -10,
              }}
              transition={{ type: "spring", stiffness: 250 }}
              className="rounded-lg overflow-hidden shadow-lg hover:shadow-yellow-500/40"
            >
              <iframe
                src={`https://www.youtube.com/embed/${id}`}
                className="w-full aspect-video"
                allowFullScreen
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}