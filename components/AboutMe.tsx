
"use client";

import { motion } from "motion/react";

const personalInfo = [
  { label: "First Name", value: "Swapnil" },
  { label: "Last Name", value: "Kamble" },
  { label: "Age", value: "30 Years" },
  { label: "Nationality", value: "Indian" },
  { label: "Freelance", value: "Available", highlight: true },
  { label: "Address", value: "Nagpur, MH, India" },
  { label: "Phone", value: "+91 72620 22182" },
  { label: "Email", value: "mail@swapkam.com" },
  { label: "Languages", value: "English, Hindi" },
];

const stats = [
  { number: "5+", label: "Years of Experience" },
  { number: "1000+", label: "Projects Delivered" },
  { number: "40+", label: "Happy Clients" },
  { number: "4000+", label: "Execution Hours" },
];

const skills = [
  { label: "Video Editing", percent: 90 },
  { label: "Storytelling", percent: 88 },
  { label: "Motion Graphics", percent: 85 },
  { label: "Sound Design", percent: 77 },
  { label: "Cinematography", percent: 76 },
  { label: "Graphic design", percent: 61 },
  { label: "Content Writing", percent: 70 },
  { label: "AI Tools", percent: 70 },
];

const tools = [
  {
    name: "Adobe Premiere Pro",
    src: "premiere-pro.png",
  },
  {
    name: "After Effects",
    src: "after-effects.png",
  },
  {
    name: "DaVinci Resolve",
    src: "davinci.png",
  },
  {
    name: "Photoshop",
    src: "photoshop.png",
  },
  {
    name: "Audition",
    src: "adobe-audition.png",
  },
];

const radius = 40;
const circumference = 2 * Math.PI * radius;

function SkillProgress({ label, percent }: { label: string; percent: number }) {
  const offset = circumference - (percent / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col items-center gap-3"
    >
      <div className="relative w-24 h-24">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r={radius} strokeWidth="8" stroke="#1f2937" fill="none" />
          <motion.circle
            cx="50"
            cy="50"
            r={radius}
            strokeWidth="8"
            stroke="#facc15"
            fill="none"
            strokeDasharray={circumference}
            strokeLinecap="round"
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset: offset }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
          />
        </svg>
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
          className="absolute inset-0 flex items-center justify-center text-lg font-bold"
        >
          {percent}%
        </motion.span>
      </div>
      <span className="uppercase text-sm font-semibold text-center">{label}</span>
    </motion.div>
  );
}

export default function AboutMe() {
  return (
    <section className="max-w-6xl w-full mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-20 relative"
      >
        <span className="absolute left-1/2 -translate-x-1/2 text-7xl md:text-8xl text-white/10 -z-10 select-none">
          RESUME
        </span>
        <h2 className="text-4xl font-bold">
          ABOUT <span className="text-yellow-500">ME</span>
        </h2>
      </motion.div>

      <div className="mt-24">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-2xl font-bold mb-10 text-center"
        >
          MY <span className="text-yellow-500">SKILLS</span>
        </motion.h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {skills.map(({ label, percent }) => (
            <SkillProgress key={label} label={label} percent={percent} />
          ))}
        </div>
      </div>

      <div className="mt-24">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-2xl font-bold mb-10 text-center"
        >
          SOFTWARE <span className="text-yellow-500">I USE</span>
        </motion.h3>

        <div className="flex flex-wrap justify-center gap-10 max-w-5xl mx-auto">
          {tools.map(({ name, src }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: i * 0.06, ease: "easeOut" }}
              className="flex flex-col items-center gap-3 opacity-100 hover:opacity-80 transition-opacity duration-200"
            >
              <img
                src={src}
                alt={name}
                className="h-14 w-auto hover:grayscale transition-all duration-200"
              />
              <span className="text-xs text-zinc-400 uppercase tracking-wide">{name}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="grid mt-24 lg:grid-cols-2 gap-32">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h3 className="text-2xl font-bold mb-6">PERSONAL INFO</h3>

          <div className="grid grid-cols-2 gap-4 mb-10">
            {personalInfo.map(({ label, value, highlight }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: i * 0.04, ease: "easeOut" }}
              >
                <span className="text-sm text-zinc-500">{label}:</span>{" "}
                <span className={`font-semibold ${highlight ? "text-green-500" : ""}`}>
                  {value}
                </span>
              </motion.div>
            ))}
          </div>

          <a href="/Resume.pdf" download>
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black font-semibold rounded-lg transition-all duration-200"
            >
              DOWNLOAD CV
            </motion.button>
          </a>

          <div className="grid grid-cols-2 gap-6 mt-12">
            {stats.map(({ number, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: i * 0.05, ease: "easeOut" }}
                className="border border-zinc-700 p-6 rounded-lg text-center"
              >
                <p className="text-3xl font-bold text-yellow-500">{number}</p>
                <p className="text-xs uppercase tracking-wide mt-2 text-zinc-400">{label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h3 className="text-2xl font-bold mb-10">EXPERIENCE</h3>

          <div className="space-y-10 border-l border-white/10 pl-6">
            <motion.div className="relative pl-6" initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}>
              <div className="absolute -left-3 top-2 w-3 h-3 bg-yellow-500 rounded-full"></div>

              <h4 className="font-bold">Video Editor, Content Strategist</h4>
              <p className="text-yellow-500 text-sm mb-2">Imborn Digital • 2024 - Present</p>

              <ul className="list-disc ml-5 text-gray-400 text-sm space-y-1">
                <li>Create branded video & reels</li>
                <li>Deliver high-impact story-based edits</li>
              </ul>
            </motion.div>

            <motion.div className="relative pl-6" initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}>
              <div className="absolute -left-3 top-2 w-3 h-3 bg-yellow-500 rounded-full"></div>

              <h4 className="font-bold">Freelance Video Editor</h4>
              <p className="text-yellow-500 text-sm mb-2">2022 - Present</p>

              <ul className="list-disc ml-5 text-gray-400 text-sm space-y-1">
                <li>Delivered projects across multiple niches</li>
                <li>Edited Shorts, Reels & YouTube content</li>
              </ul>
            </motion.div>

            <motion.div className="relative pl-6" initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}>
              <div className="absolute -left-3 top-2 w-3 h-3 bg-yellow-500 rounded-full"></div>

              <h4 className="font-bold">SwapKam (YouTube)</h4>
              <p className="text-yellow-500 text-sm mb-2">2020 - 2025</p>

              <ul className="list-disc ml-5 text-gray-400 text-sm space-y-1">
                <li>Built Gaming, Stock & Tech content channel</li>
                <li>Analyzed retention & algorithm behavior</li>
                <li>Developed content strategies</li>
              </ul>
            </motion.div>

            <motion.div className="relative pl-6" initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}>
              <div className="absolute -left-3 top-2 w-3 h-3 bg-yellow-500 rounded-full"></div>

              <h4 className="font-bold">AZ The Learning App</h4>
              <p className="text-yellow-500 text-sm mb-2">2018 - 2022</p>

              <ul className="list-disc ml-5 text-gray-400 text-sm space-y-1">
                <li>Built educational platform</li>
                <li>Created syllabus-based content</li>
                <li>Simplified complex topics</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
