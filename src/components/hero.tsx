"use client";
import ShiftingCountdown from "./countdown";
import { motion } from "framer-motion";
import ShinyButton from "./ui/shiny-button";
import Link from "next/link";
import { CalendarDays, MapPin, PartyPopper } from "lucide-react";

export default function Hero() {
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <section className="container flex min-h-screen  flex-col space-y-8 bg-gradient-to-b from-transparent to-transparent/50">
      <div className="relative w-full  flex  items-center justify-center text-white overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute w-full h-full " />

        {/* Content */}
        <div className="relative z-10 text-center px-6">
          {/* Highlight Banner */}
          <motion.div
            variants={item}
            className="my-6 sm:mb-6 inline-flex items-center rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-1.5 text-sm font-medium text-yellow-400"
          >
            <PartyPopper className="mr-2 h-5 w-5" />
            <span>25th Anniversary Edition</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={item}
            className="mb-4 sm:mb-6 bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300 bg-clip-text text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-transparent"
          >
            Tattva 2025
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={item}
            className="mb-6 sm:mb-8 max-w-3xl text-lg sm:text-xl lg:text-2xl text-white/80"
          >
            Where Culture Meets Grandeur! Experience the ultimate celebration of
            art, music, and innovation.
          </motion.p>

          {/* Event Details */}
          <motion.div
            variants={item}
            className="mb-6 sm:mb-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-white/70"
          >
            <div className="flex items-center">
              <CalendarDays className="mr-2 h-5 w-5 text-yellow-400" />
              <span className="text-base font-medium">April 04-05, 2025</span>
            </div>
            <div className="hidden sm:block text-white/50">•</div>
            <div className="flex items-center">
              <MapPin className="mr-2 h-5 w-5 text-yellow-400" />
              <span className="text-base font-medium">
                Vemana Institute of Technology, Bangalore
              </span>
            </div>
          </motion.div>

          {/* Collaboration Banner */}
          <motion.div
            variants={item}
            className="mb-8 relative group w-full  mx-auto"
          >
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-red-500 via-yellow-500 to-red-500 opacity-70 blur-lg transition-all duration-1000 group-hover:opacity-100 group-hover:blur-xl animate-gradient-x"></div>
            <div className="relative rounded-lg border border-white/20 bg-gradient-to-r from-red-600 via-red-500 to-red-600 px-6 py-4 shadow-lg backdrop-blur-sm">
              <div className="flex flex-wrap items-center justify-center gap-2 text-lg font-bold text-white">
                <span className="text-2xl">🎥</span>
                <span>In Association with</span>
                <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-xl font-extrabold text-transparent">
                  Bigg Boss Kannada
                </span>
                <span className="hidden xs:inline">–</span>
                <span>Experience the Ultimate Entertainment!</span>
                <span className="text-2xl">🔥</span>
              </div>
            </div>
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
          <div className="mt-4">
            <ShiftingCountdown />
          </div>
        </div>
      </div>
    </section>
  );
}
