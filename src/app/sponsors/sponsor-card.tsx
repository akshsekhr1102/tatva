"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

type Sponsor = {
  name: string;
  logo: string;
  website: string;
};

type SponsorCardProps = {
  sponsor: Sponsor;
  tier: "platinum" | "gold" | "silver" | "bronze";
};

export function SponsorCard({ sponsor, tier }: SponsorCardProps) {
  // Define tier-specific styles
  const tierStyles = {
    platinum: {
      background: "bg-white/20",
      border: "border-white/40",
      hover: "group-hover:border-white/60",
      shadow: "shadow-lg",
      hoverShadow: "group-hover:shadow-xl group-hover:shadow-white/10",
      height: "h-40",
      scale: 1.05,
    },
    gold: {
      background: "bg-white/15",
      border: "border-amber-200/30",
      hover: "group-hover:border-amber-200/50",
      shadow: "shadow-md",
      hoverShadow: "group-hover:shadow-lg group-hover:shadow-amber-300/10",
      height: "h-36",
      scale: 1.04,
    },
    silver: {
      background: "bg-white/10",
      border: "border-gray-200/20",
      hover: "group-hover:border-gray-200/40",
      shadow: "shadow-sm",
      hoverShadow: "group-hover:shadow-md group-hover:shadow-gray-300/10",
      height: "h-32",
      scale: 1.03,
    },
    bronze: {
      background: "bg-white/5",
      border: "border-amber-700/20",
      hover: "group-hover:border-amber-700/40",
      shadow: "shadow-sm",
      hoverShadow: "group-hover:shadow-md group-hover:shadow-amber-800/10",
      height: "h-28",
      scale: 1.02,
    },
  };

  const style = tierStyles[tier];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ scale: style.scale, zIndex: 10 }}
      className={`group relative rounded-xl ${style.background} backdrop-blur-lg ${style.border} border ${style.shadow} ${style.hoverShadow} transition-all duration-300 overflow-hidden`}
    >
      <Link
        href={sponsor.website}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center"
      >
        <div
          className={`relative w-full ${style.height} mb-4 flex items-center justify-center`}
        >
          <Image
            src={sponsor.logo || "/placeholder.svg"}
            alt={sponsor.name}
            fill
            className="object-contain p-4"
          />
        </div>

        <div className="mt-auto flex items-center justify-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-white font-medium">Visit</span>
          <ExternalLink className="h-4 w-4 text-white" />
        </div>

        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
        />
      </Link>
    </motion.div>
  );
}
