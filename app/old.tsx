"use client";

import Image from "next/image";
import ContactForm from "@/components/ContactForm";

const tickerItems = [
  "Business", "Entrepreneurship", "Money Mindset", "SwapKam",
  "Wealth Building", "Stock Market", "Digital Products", "Growth",
];

const topics = [
  { number: "01", name: "Business", desc: "Real frameworks to start, build, and scale a business in India — no fluff, no theory." },
  { number: "02", name: "Money", desc: "How wealth is actually built — investing, markets, trading, and financial freedom." },
  { number: "03", name: "Stocks", desc: "Intraday, swing trading, and market analysis — simplified for the Indian investor." },
  { number: "04", name: "Growth", desc: "Systems, habits, and strategies to level up your career and income." },
  { number: "05", name: "Mindset", desc: "The thinking patterns that separate people who grow from people who stay stuck." },
  { number: "06", name: "Life", desc: "How to design a life you actually want — not the one society handed you." },
];

export default function HomePage() {
  return (
    <div className="bg-neutral-950 text-neutral-100 min-h-screen overflow-x-hidden text-center">

      

      {/* HERO */}
      <section className="min-h-screen grid md:grid-cols-2 pt-20">
        {/* Left */}
        <div className="flex flex-col justify-center px-8 md:px-16 py-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-px bg-yellow-500" />
            <span className="text-yellow-500 text-xs uppercase tracking-widest">Business · Money · Growth</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black leading-[1.05] tracking-tight text-neutral-100 mb-6">
            Stop Working<br />For Money.<br />
            <span className="italic text-yellow-500">Make It Work<br />For You.</span>
          </h1>
          <p className="text-neutral-400 text-base leading-relaxed max-w-md mb-10 font-light">
            I'm Swap — creator, entrepreneur, and market enthusiast. I break down
            business, wealth, and mindset into content that actually moves you forward.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://youtube.com/@swapkam"
              target="_blank"
              rel="noreferrer"
              className="bg-yellow-500 text-neutral-950 px-8 py-3 text-xs uppercase tracking-widest font-medium hover:bg-yellow-400 transition-colors"
            >
              Watch on YouTube
            </a>
            <a
              href="#contact"
              className="border border-neutral-600 text-neutral-100 px-8 py-3 text-xs uppercase tracking-widest font-medium hover:border-neutral-300 transition-colors"
            >
              Work With Me
            </a>
          </div>
        </div>

        {/* Right — Photo placeholder */}
        <div className="hidden md:flex items-center justify-center px-8 py-20">
          <div className="relative w-full max-w-sm">
            <div className="aspect-[3/4] bg-neutral-900 border border-yellow-600/15 relative overflow-hidden">
              
            <Image src="/profile.png" alt="SwapKam" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover" loading="eager" />
            </div>
            {/* Corner accent */}
            <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-yellow-500" />
            {/* Stats card */}
            <div className="absolute -bottom-6 -left-6 bg-neutral-900 border border-yellow-600/20 px-5 py-4">
              <div className="text-yellow-500 text-3xl font-bold leading-none">10K+</div>
              <div className="text-neutral-500 text-xs uppercase tracking-wider mt-1">Subscribers</div>
            </div>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="overflow-hidden border-y border-yellow-600/10 bg-neutral-900 py-3">
        <div className="flex gap-12 animate-[ticker_20s_linear_infinite] whitespace-nowrap">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <div key={i} className="flex items-center gap-3 flex-shrink-0">
              <div className="w-1 h-1 rounded-full bg-yellow-500" />
              <span className="text-neutral-500 text-xs uppercase tracking-widest">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* TOPICS */}
      <section className="bg-neutral-900 px-8 md:px-16 py-24">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-yellow-500" />
          <span className="text-yellow-500 text-xs uppercase tracking-widest">What I Cover</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.1] mb-16">
          Content That Actually<br />
          <span className="italic text-yellow-500">Moves You Forward</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 border border-yellow-600/10">
          {topics.map((topic, i) => (
            <div
              key={topic.number}
              className={`p-8 bg-neutral-950 hover:bg-neutral-900/80 transition-colors cursor-default
                ${i % 3 !== 2 ? "md:border-r border-yellow-600/10" : ""}
                ${i < 3 ? "border-b border-yellow-600/10" : ""}
              `}
            >
              <span className="text-yellow-500 text-xs uppercase tracking-widest block mb-6">{topic.number}</span>
              <div className="text-2xl font-bold text-neutral-100 mb-3">{topic.name}</div>
              <p className="text-neutral-500 text-sm leading-relaxed font-light">{topic.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-8 md:px-16 py-24 border-t border-yellow-600/10 bg-neutral-950">
        <div className="max-w-6xl mx-auto grid gap-16 md:grid-cols-2 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-yellow-500" />
              <span className="text-yellow-500 text-xs uppercase tracking-widest">About Me</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black tracking-tight leading-[1.05] mb-6">
              Building Wealth,<br />
              <span className="italic text-yellow-500">Not Just Income</span>
            </h2>
            <p className="text-neutral-400 text-base leading-relaxed font-light mb-6">
              I'm SwapKam — creator, entrepreneur, and market enthusiast. I've built multiple businesses,
              navigated the stock market, and learned what separates people who build wealth from those who stay stuck.
              Now I share everything I know.
            </p>
            <div className="space-y-4 text-neutral-400 text-sm leading-relaxed font-light">
              <p>
                I didn't grow up with money or connections. What I had was curiosity and the willingness to learn from mistakes.
                I started with nothing, failed at multiple business ideas, and lost money in markets before I figured out the patterns.
              </p>
              <p>
                Every framework I teach, every strategy I share, every market breakdown I create comes from real experience.
                I've done it, gotten burned, learned, and built systems that actually work.
              </p>
              <p>
                Over 50+ videos and 10K+ subscribers later, I'm focused on one thing: helping people understand that building wealth
                isn't about luck or timing — it's about understanding the game.
              </p>
            </div>
          </div>

          <div className="bg-neutral-900 border border-yellow-600/20 p-10">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-yellow-500 text-4xl font-bold leading-none mb-2">50+</div>
                <div className="text-neutral-500 text-xs uppercase tracking-wider">Videos Created</div>
              </div>
              <div>
                <div className="text-yellow-500 text-4xl font-bold leading-none mb-2">10K+</div>
                <div className="text-neutral-500 text-xs uppercase tracking-wider">Subscribers</div>
              </div>
              <div>
                <div className="text-yellow-500 text-4xl font-bold leading-none mb-2">1M+</div>
                <div className="text-neutral-500 text-xs uppercase tracking-wider">Total Views</div>
              </div>
              <div>
                <div className="text-yellow-500 text-4xl font-bold leading-none mb-2">100+</div>
                <div className="text-neutral-500 text-xs uppercase tracking-wider">1:1 Sessions</div>
              </div>
            </div>
            <div className="bg-yellow-500/10 border border-yellow-500/30 p-6 mt-10">
              <p className="text-sm text-neutral-300 font-light leading-relaxed">
                "The best investment you can make is in your own education. Everything I create is designed to speed up your learning curve."
              </p>
              <p className="text-yellow-500 text-xs uppercase tracking-widest mt-4">— SwapKam</p>
            </div>
          </div>
        </div>
      </section>

      {/* YOUTUBE */}
      <section className="px-8 md:px-16 py-24 bg-neutral-950">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Embed */}
          <div className="aspect-video bg-neutral-900 border border-yellow-600/10 relative overflow-hidden">
            {/* Replace src with your actual YouTube video ID */}
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/?listType=user_uploads&list=swapkam"
              title="SwapKam YouTube"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          {/* Text */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-yellow-500" />
              <span className="text-yellow-500 text-xs uppercase tracking-widest">YouTube</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.1] mb-4">
              Watch. Learn.<br />
              <span className="italic text-yellow-500">Execute.</span>
            </h2>
            <p className="text-neutral-400 text-sm leading-relaxed font-light">
              Short-form punches and long-form deep dives — both designed to give you
              the clarity and confidence to actually act, not just scroll.
            </p>
            <div className="flex gap-10 mt-8 pt-8 border-t border-yellow-600/10">
              {[["50+", "Videos"], ["10K+", "Subscribers"], ["1M+", "Views"]].map(([num, label]) => (
                <div key={label}>
                  <div className="text-yellow-500 text-3xl font-bold leading-none">{num}</div>
                  <div className="text-neutral-500 text-xs uppercase tracking-wider mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-8 md:px-16 py-24 bg-neutral-950 border-t border-yellow-600/10">
        <div className="max-w-6xl mx-auto grid gap-16 md:grid-cols-3">
          <div className="md:col-span-1 space-y-12">
            <div>
              <span className="text-yellow-500 text-xs uppercase tracking-widest block mb-3">Email</span>
              <a
                href="mailto:contact@swapkam.com"
                className="text-xl font-medium text-neutral-100 hover:text-yellow-500 transition-colors"
              >
                mail@swapkam.com
              </a>
            </div>

            <div>
              <span className="text-yellow-500 text-xs uppercase tracking-widest block mb-4">Follow</span>
              <div className="flex flex-col gap-3">
                <a
                  href="https://youtube.com/@swapkam"
                  target="_blank"
                  rel="noreferrer"
                  className="text-neutral-400 hover:text-yellow-500 transition-colors text-sm uppercase tracking-widest"
                >
                  YouTube
                </a>
                <a
                  href="https://instagram.com/swapkams"
                  target="_blank"
                  rel="noreferrer"
                  className="text-neutral-400 hover:text-yellow-500 transition-colors text-sm uppercase tracking-widest"
                >
                  Instagram
                </a>
                <a
                  href="https://twitter.com/swapkam"
                  target="_blank"
                  rel="noreferrer"
                  className="text-neutral-400 hover:text-yellow-500 transition-colors text-sm uppercase tracking-widest"
                >
                  Twitter
                </a>
              </div>
            </div>

            <div>
              <span className="text-yellow-500 text-xs uppercase tracking-widest block mb-3">Response Time</span>
              <p className="text-neutral-400 text-sm leading-relaxed font-light">
                I typically respond within 24-48 hours. For urgent matters, try reaching out on social media.
              </p>
            </div>
          </div>

          <div className="md:col-span-2">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 md:px-16 py-32 text-center border-t border-yellow-600/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_50%,rgba(234,179,8,0.05),transparent)] pointer-events-none" />
        <h2 className="text-4xl md:text-7xl font-black tracking-tight leading-[1.1] max-w-3xl mx-auto mb-6 relative z-10">
          Ready to Stop Waiting<br />and Start{" "}
          <span className="italic text-yellow-500">Building?</span>
        </h2>
        <p className="text-neutral-400 text-base font-light max-w-md mx-auto mb-10 leading-relaxed relative z-10">
          Subscribe to the channel. Follow the journey.
        </p>
        <div className="flex flex-wrap gap-4 justify-center relative z-10">
          <a
            href="https://youtube.com/@swapkam"
            target="_blank"
            rel="noreferrer"
            className="bg-yellow-500 text-neutral-950 px-8 py-3 text-xs uppercase tracking-widest font-medium hover:bg-yellow-400 transition-colors"
          >
            Subscribe on YouTube
          </a>
          <a
            href="https://instagram.com/swapkams"
            target="_blank"
            rel="noreferrer"
            className="border border-neutral-600 text-neutral-100 px-8 py-3 text-xs uppercase tracking-widest hover:border-neutral-300 transition-colors"
          >
            Follow on Instagram
          </a>
        </div>
      </section>

    </div>
  );
}