"use client";
import ShiftingCountdown from "./countdown";
import { motion } from "framer-motion";
import ShinyButton from "./ui/shiny-button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="container flex min-h-[calc(100vh-3.5rem)] max-w-screen-2xl flex-col space-y-8">
      <div className="relative w-full h-screen flex  items-center justify-center text-white overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute w-full h-full bg-black/50" />

        {/* Content */}
        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold text-yellow-600"
          >
            🎉 Celebrating 25 Glorious Years! 🎉
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mt-4 text-lg"
          >
            <span className="text-yellow-400">Tattva 2025</span> – Where Culture
            Meets Grandeur! 🌟
          </motion.p>
          <p className="text-xl font-semibold mt-2 ">
            April 03-04, 2025 |
            <span className="text-yellow-400">
              {" "}
              Vemana Institute of Technology
            </span>
            , Bangalore
          </p>

          {/* Collaboration Banner */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="mt-6 px-6 py-3 bg-red-600/40 text-white rounded-lg inline-block text-lg font-bold"
          >
            🎥 In Association with <strong>Bigg Boss Kannada</strong> –
            Experience the Ultimate Entertainment! 🔥
          </motion.div>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/passes" passHref>
              <ShinyButton variant="purple">🎟️ Get Your Passes</ShinyButton>
            </Link>
            <Link href="/events" passHref>
              <ShinyButton>📜 Explore Events</ShinyButton>
            </Link>
            <Link
              href="https://linktr.ee/tattva.vemanothsav"
              passHref
              target="_blank"
              rel="noopener noreferrer"
            >
              <ShinyButton variant="green">🔗 Register Now</ShinyButton>
            </Link>
          </div>

          {/* Countdown Timer */}
          <div className="mt-8">
            <ShiftingCountdown />
          </div>
        </div>
      </div>
    </section>
  );
}
