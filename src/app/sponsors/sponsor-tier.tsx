"use client";

import { motion } from "framer-motion";
import { SponsorCard } from "./sponsor-card";

type Sponsor = {
  name: string;
  logo: string;
  website: string;
};

type SponsorTierProps = {
  title: string;
  description: string;
  tier: "platinum" | "gold" | "silver" | "bronze";
  sponsors: Sponsor[];
};

export function SponsorTier({
  title,
  description,
  tier,
  sponsors,
}: SponsorTierProps) {
  // Define tier-specific styles
  const tierStyles = {
    platinum: {
      background: "bg-gradient-to-r from-slate-300 to-slate-100",
      border: "border-white/40",
      shadow: "shadow-[0_0_30px_rgba(255,255,255,0.2)]",
      titleColor: "text-slate-800",
      descColor: "text-slate-600",
      size: "lg:grid-cols-3",
      badge: "bg-gradient-to-r from-slate-400 to-slate-300 text-slate-900",
    },
    gold: {
      background: "bg-gradient-to-r from-amber-300 to-yellow-200",
      border: "border-yellow-200/40",
      shadow: "shadow-[0_0_30px_rgba(251,191,36,0.2)]",
      titleColor: "text-amber-900",
      descColor: "text-amber-800",
      size: "lg:grid-cols-4",
      badge: "bg-gradient-to-r from-amber-500 to-yellow-400 text-amber-900",
    },
    silver: {
      background: "bg-gradient-to-r from-gray-300 to-gray-200",
      border: "border-gray-200/40",
      shadow: "shadow-[0_0_20px_rgba(156,163,175,0.2)]",
      titleColor: "text-gray-700",
      descColor: "text-gray-600",
      size: "lg:grid-cols-5",
      badge: "bg-gradient-to-r from-gray-400 to-gray-300 text-gray-800",
    },
    bronze: {
      background: "bg-gradient-to-r from-amber-700/90 to-amber-600/90",
      border: "border-amber-600/40",
      shadow: "shadow-[0_0_15px_rgba(180,83,9,0.2)]",
      titleColor: "text-amber-100",
      descColor: "text-amber-200",
      size: "lg:grid-cols-6",
      badge: "bg-gradient-to-r from-amber-800 to-amber-700 text-amber-100",
    },
  };

  const style = tierStyles[tier];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
      className="relative"
    >
      <div className="absolute -inset-1 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 z-0" />

      <div className="relative z-10 p-8 md:p-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
          <div>
            <div className="flex items-center mb-4">
              <span
                className={`px-4 py-1 rounded-full text-sm font-semibold ${style.badge}`}
              >
                {tier.charAt(0).toUpperCase() + tier.slice(1)} Tier
              </span>
            </div>
            <h2
              className={`text-3xl md:text-4xl font-bold mb-3 ${style.titleColor}`}
            >
              {title}
            </h2>
            <p className={`text-lg max-w-2xl ${style.descColor}`}>
              {description}
            </p>
          </div>
        </div>

        <motion.div
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ${style.size} gap-6`}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {sponsors.map((sponsor, index) => (
            <SponsorCard key={index} sponsor={sponsor} tier={tier} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
