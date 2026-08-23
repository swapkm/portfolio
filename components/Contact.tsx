"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  

  return (
    <section className="px-6 md:px-8 py-20 max-w-4xl mx-auto text-center">
      <motion.div
        id="contact"
        className="relative mb-16"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-white/10 text-7xl md:text-8xl absolute -z-10 left-1/2 -translate-x-1/2 select-none">
          CONTACT
        </span>

        <h2 className="text-4xl font-bold">
          <span>GET IN </span>
          <span className="text-yellow-500">TOUCH</span>
        </h2>
      </motion.div>

      <motion.h3
        className="text-2xl font-bold my-4"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.08 }}
      >
        DON&apos;T BE SHY!
      </motion.h3>
      <motion.p
        className="max-w-2xl mx-auto text-gray-400 mb-12"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.12 }}
      >
        Feel free to get in touch with me. I&apos;m always open to talking about new projects or wild level ideas.
      </motion.p>

      <motion.div
        className="md:col-span-2"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.16 }}
      >
        <ContactForm />
      </motion.div>

      <div className="space-y-8 text-sm text-left max-w-xl mx-auto my-12">
        {[
          {
            icon: <FaMapMarkerAlt className="text-yellow-500 text-xl mt-1" />,
            title: "ADDRESS POINT",
            content: "79, Shree Hari Nagar, Manewada, Nagpur, Maharashtra, India - 440027",
          },
          {
            icon: <FaEnvelope className="text-yellow-500 text-xl mt-1" />,
            title: "MAIL ME",
            content: (
              <a href="mailto:mail@swapkam.com" className="text-gray-400 hover:text-yellow-500 transition">
                mail@swapkam.com
              </a>
            ),
          },
          {
            icon: <FaPhone className="text-yellow-500 text-xl mt-1" />,
            title: "CALL ME",
            content: (
              <a href="tel:+917262022182" className="text-gray-400 hover:text-yellow-500 transition">
                +91 72620 22182
              </a>
            ),
          },
        ].map(({ icon, title, content }, i) => (
          <motion.div
            key={title}
            className="flex items-start gap-4"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.18 + i * 0.06 }}
            whileHover={{ x: 4, scale: 1.01 }}
          >
            {icon}
            <div>
              <p className="font-semibold">{title}</p>
              <div className="text-gray-400">{content}</div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="flex justify-center gap-6 mt-12 text-lg"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.a whileHover={{ y: -4, scale: 1.08 }} href="https://facebook.com/swapkams" className="hover:text-yellow-500 transition">
          <FaFacebookF />
        </motion.a>
        <motion.a whileHover={{ y: -4, scale: 1.08 }} href="https://twitter.com/swapkams" className="hover:text-yellow-500 transition">
          <FaTwitter />
        </motion.a>
        <motion.a whileHover={{ y: -4, scale: 1.08 }} href="https://youtube.com/@swapkam" className="hover:text-yellow-500 transition">
          <FaYoutube />
        </motion.a>
        <motion.a whileHover={{ y: -4, scale: 1.08 }} href="https://www.linkedin.com/in/swapkam/" className="hover:text-yellow-500 transition">
          <FaLinkedinIn />
        </motion.a>
      </motion.div>
    </section>
  );
}
