"use client"

import Link from "next/link"
import { useState } from "react"

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b border-yellow-600/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LEFT: Logo */}
        <Link href="/" className="text-yellow-500 text-xl font-bold">
          SwapKam
        </Link>

        {/* RIGHT: Desktop Nav */}
        <nav className="hidden md:flex items-center gap-3">
          <Link href="/#services" className="text-neutral-400 text-xs uppercase tracking-widest hover:text-yellow-500">
            Services
          </Link>
          <Link href="/#about" className="text-neutral-400 text-xs uppercase tracking-widest hover:text-yellow-500">
            About
          </Link>

          <Link
            href="tel:+917262022182"
            className="text-xs uppercase tracking-widest text-yellow-500 border border-yellow-600 px-4 py-2 hover:bg-yellow-500 hover:text-neutral-950 transition"
          >
            Call
          </Link>

          <Link
            href="https://wa.me/917262022182?text=Hi%20Swapnil%2C%20I%20would%20love%20to%20connect."
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-widest text-neutral-950 bg-green-500 px-4 py-2 hover:bg-yellow-400 transition"
          >
            WhatsApp
          </Link>
        </nav>

        {/* RIGHT: Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-yellow-500 text-xl"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden w-full px-6 pb-6 space-y-3 border-t border-yellow-600/10 bg-neutral-950">

          <Link href="/#about" className="block text-neutral-300 text-sm" onClick={() => setOpen(false)}>
            About
          </Link>

          <Link
            href="tel:+917262022182"
            className="block text-center text-sm text-yellow-500 border border-yellow-600 py-2"
            onClick={() => setOpen(false)}
          >
            Call Now
          </Link>

          <Link
            href="https://wa.me/917262022182?text=Hello%20Swapkam%2C%20I%20would%20love%20to%20connect."
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center text-sm text-neutral-950 bg-yellow-500 py-2"
            onClick={() => setOpen(false)}
          >
            WhatsApp
          </Link>

        </div>
      )}
    </header>
  )
}