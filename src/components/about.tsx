"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import Link from "next/link";
import { Button } from "./ui/button";

const AboutSection = () => {
  const handleLearnMore = () => {
    console.log("Learn More clicked!");
  };

  return (
    <section className="relative bg-gradient-to-b from-transparent/50 to-transparent/30 text-zinc-50 py-16 px-6 overflow-hidden">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Main Title */}
          <motion.h2
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1.1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-6xl font-extrabold text-red-500 mb-6 drop-shadow-lg"
          >
            About Tattva 2025 🎭
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl text-zinc-300 leading-relaxed tracking-wide"
          >
            Celebrating{" "}
            <span className="text-yellow-400 font-bold">25 Years</span> of
            culture, creativity, and passion,
            <span className="text-red-400 font-bold"> Tattva 2025</span> is a
            one-of-a-kind cultural extravaganza at
            <span className="text-blue-400 font-bold">
              {" "}
              Vemana Institute of Technology, Bangalore
            </span>
            . Featuring
            <span className="text-green-400 font-bold">
              {" "}
              electrifying performances
            </span>
            ,{" "}
            <span className="text-purple-400 font-bold">
              thrilling competitions
            </span>
            , and an exclusive
            <span className="text-pink-400 font-bold">
              {" "}
              collaboration with Bigg Boss Kannada
            </span>
            , this year’s festival is set to be an unforgettable experience!
          </motion.p>

          {/* Learn More Button */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mt-8"
          >
            <Link href="/about">
              <Button variant="default" onClick={handleLearnMore}>
                Learn More
              </Button>
            </Link>
          </motion.div>

          {/* Additional Content Below */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-12"
          >
            <h3 className="text-4xl font-bold text-yellow-400 mb-4 drop-shadow-md">
              What to Expect? 🚀
            </h3>
            <ul className="text-lg text-zinc-300 space-y-3">
              <li>
                🎤{" "}
                <span className="text-green-400 font-semibold">
                  Live Music & Dance
                </span>{" "}
                - Experience stunning performances from talented artists.
              </li>
              <li>
                🏆{" "}
                <span className="text-purple-400 font-semibold">
                  Exciting Competitions
                </span>{" "}
                - Participate in thrilling contests and showcase your talent.
              </li>
              <li>
                🎭{" "}
                <span className="text-blue-400 font-semibold">
                  Drama & Theatre
                </span>{" "}
                - Witness captivating plays and theatrical performances.
              </li>
              <li>
                🎉{" "}
                <span className="text-pink-400 font-semibold">
                  Fun Activities
                </span>{" "}
                - Engage in interactive games, food stalls, and much more!
              </li>
            </ul>

            {/* Call-to-Action Button */}
            <div className="mt-8">
              <Link href="https://linktr.ee/tattva.vemanothsav">
                <Button variant="secondary">Register Now</Button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default AboutSection;
