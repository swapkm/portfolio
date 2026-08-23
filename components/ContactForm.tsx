"use client";

import { useState } from "react";

type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Unable to send message. Please try again later.");
      }

      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {submitted ? (
        <div className="bg-neutral-900 border border-yellow-500 px-8 py-12 text-center">
          <div className="text-4xl mb-4">✓</div>
          <h3 className="text-2xl font-bold text-yellow-500 mb-2">Message Sent!</h3>
          <p className="text-neutral-400 text-sm">
            Your message was sent successfully. I will follow up by email soon.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {error ? (
            <div className="rounded-md border border-red-500 bg-red-950/50 px-4 py-3 text-sm text-red-200">
              {error}
            </div>
          ) : null}

          {/* Name */}
          <div>
            
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-neutral-900 border border-yellow-600/20 px-6 py-3 text-neutral-100 placeholder-neutral-600 focus:border-yellow-500 focus:outline-none transition-colors"
              placeholder="Your Name"
            />
          </div>

          {/* Email */}
          <div>
            
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-neutral-900 border border-yellow-600/20 px-6 py-3 text-neutral-100 placeholder-neutral-600 focus:border-yellow-500 focus:outline-none transition-colors"
              placeholder="Your Mail"
            />
          </div>

          {/* Subject */}
          <div>
           
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full bg-neutral-900 border border-yellow-600/20 px-6 py-3 text-neutral-100 placeholder-neutral-600 focus:border-yellow-500 focus:outline-none transition-colors"
              placeholder="What Is This About?"
            />
          </div>

          {/* Message */}
          <div>
            
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full bg-neutral-900 border border-yellow-600/20 px-6 py-3 text-neutral-100 placeholder-neutral-600 focus:border-yellow-500 focus:outline-none transition-colors resize-none"
              placeholder="Your Message Here..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-yellow-500 text-neutral-950 px-8 py-3 text-xs uppercase tracking-widest font-medium hover:bg-yellow-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      )}
    </>
  );
}
