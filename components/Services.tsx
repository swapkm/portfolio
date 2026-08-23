"use client";

import { useState } from "react";
import { motion } from "motion/react";

const myServices = [
 
  {
    style: "Reels/Shorts",
    duration: "15-60 sec",
    price: "$50+",
    features: ["Trend-based editing", "Transitions & effects", "Color grading", "Text & captions", "Music sync"],
  },
  {
    style: "Motion Graphics & Animation",
    duration: "1-3 min",
    price: "$200+",
    description: "Custom animated graphics, intros, logos, and animated explainers",
    features: ["2D animations", "3D effects", "Logo animation", "Explainer videos"],
  },
  {
    style: "Content Strategy Consultation",
    duration: "for growth",
    price: "$80+",
    description: "Personalized content plan for Instagram, YouTube, or TikTok growth",
    features: ["Audience analysis", "Platform optimization", "Content calendar", "Growth strategy"],
  },
  // {
  //   style: "YouTube Videos",
  //   duration: "5-15 min",
  //   price: "$120+",
  //   features: ["Professional editing", "Motion graphics", "Sound design", "Thumbnails", "Multi-color grading"],
  // },
  // {
  //   style: "Cinematic/Documentary",
  //   duration: "5-30 min",
  //   price: "₹3,500+",
  //   features: ["Cinematic color grading", "Advanced VFX", "Professional sound mixing", "Slow-motion effects", "Custom animations"],
  // },
  // {
  //   style: "Full Video Production",
  //   price: "₹5,000+",
  //   description: "Complete package: concept, shoot, edit, and delivery",
  //   features: ["Concept development", "Professional shoot", "Complete editing", "Multiple revisions"],
  // },
  // {
  //   style: "Video Shoot",
  //   price: "₹2,500+",
  //   features: ["Professional equipment", "Gimbal", "4K footage", "Multiple angles", "Raw footage delivery"],
  // },
  // {
  //   style: "Profile/Account Audit",
  //   price: "$30+",
  //   features: ["Know Mistakes", "What to do next", "How to improve", "Content strategy"],
  // },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState<"editing" | "shoot" | "other">("editing");

  return (
    <motion.section
  id="services"
  className="max-w-6xl w-full mx-auto py-20 px-4"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.6 }}
>
  {/* TITLE */}
  <motion.div
    className="text-center mb-16 relative"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
  >
    <span className="absolute left-1/2 -translate-x-1/2 text-7xl md:text-8xl text-white/10 -z-10 select-none">
      PRICING
    </span>

    <h2 className="text-4xl font-bold">
      MY <span className="text-yellow-500">SERVICES</span>
    </h2>

    <p className="text-gray-400 mt-4 text-lg">
      Professional video services tailored to your needs
    </p>
  </motion.div>

  {/* SERVICES */}
  {activeTab === "editing" && (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
    >
      {myServices.map((service, idx) => (
        <motion.div
          key={idx}
          variants={{
            hidden: {
              opacity: 0,
              y: 60,
            },
            show: {
              opacity: 1,
              y: 0,
            },
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          whileHover={{
            y: -10,
            scale: 1.03,
          }}
          className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl p-6 hover:border-yellow-500 hover:shadow-lg hover:shadow-yellow-500/20"
        >
          <h3 className="text-xl font-bold text-yellow-500 mb-2">
            {service.style}
          </h3>

          <p className="text-gray-400 text-sm mb-4">
            {service.duration}
          </p>

          <p className="text-2xl font-bold text-white mb-6">
            {service.price}
          </p>

          <ul className="space-y-2">
            {service.features.map((feature, fidx) => (
              <motion.li
                key={fidx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: fidx * 0.05,
                }}
                className="text-gray-300 text-sm flex items-start"
              >
                <span className="text-yellow-500 mr-2">✓</span>
                {feature}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      ))}
    </motion.div>
  )}

  {/* CTA */}
  <motion.div
    className="mt-16 bg-gradient-to-r from-yellow-500/10 to-transparent border border-yellow-500/30 rounded-xl p-8 text-center"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <h3 className="text-2xl font-bold mb-4">
      Don't see what you need?
    </h3>

    <p className="text-gray-300 mb-6">
      I offer custom packages tailored to your specific requirements.
      Let's discuss your project!
    </p>

    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <motion.a
        whileHover={{
          scale: 1.05,
          y: -3,
        }}
        whileTap={{ scale: 0.95 }}
        href="tel:+917262022182"
        className="inline-block px-8 py-3 bg-yellow-500 text-black font-bold rounded-lg"
      >
        CALL
      </motion.a>

      <motion.a
        whileHover={{
          scale: 1.05,
          y: -3,
        }}
        whileTap={{ scale: 0.95 }}
        href="https://wa.me/917262022182?text=Hi%20Swapnil%2C%20I%20would%20love%20to%20connect."
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-8 py-3 border border-green-500 text-green-400 font-bold rounded-lg hover:bg-green-500 hover:text-black transition"
      >
        CONNECT ON WHATSAPP
      </motion.a>
    </div>
  </motion.div>
</motion.section>
  );
}
