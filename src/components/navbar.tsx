"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ShinyButton from "./ui/shiny-button";
import { MenuIcon, X } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="py-4 border-b border-white/15 md:border-none sticky top-0 z-20  ">
      <div className="container mx-auto px-4  ">
        <div className="flex md:justify-evenly justify-between backdrop-blur md:backdrop-blur items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto relative">
          <div className="absolute inset-0 backdrop-blur -z-10"></div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 items-center  text-white/70 text-sm">
            <Link href="/" className="hover:text-white transition">
              Home
            </Link>
            <Link href="/sponsors" className="hover:text-white transition">
              Sponsors
            </Link>
            <Link href="/events" className="hover:text-white transition">
              Events
            </Link>
            <Link href="/team" className="hover:text-white transition">
              Team
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex gap-4 items-center md:justify-between md:hidden justify-between w-full">
            <ShinyButton variant="red">Join Waitlist</ShinyButton>
            <button
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="size-8 text-white" />
              ) : (
                <MenuIcon className="size-8 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full  backdrop-blur-lg border-b border-white/10 p-4 flex flex-col gap-4 md:hidden"
          >
            <Link
              href="/"
              className="text-white/80 hover:text-white text-lg transition"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/sponsors"
              className="text-white/80 hover:text-white text-lg transition"
              onClick={() => setIsOpen(false)}
            >
              Sponsors
            </Link>
            <Link
              href="/events"
              className="text-white/80 hover:text-white text-lg transition"
              onClick={() => setIsOpen(false)}
            >
              Events
            </Link>
            <Link
              href="/team"
              className="text-white/80 hover:text-white text-lg transition"
              onClick={() => setIsOpen(false)}
            >
              Team
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};
