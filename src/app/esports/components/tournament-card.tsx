"use client";

import { cn } from "@/lib/utils";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Trophy, Users } from "lucide-react";

interface TournamentCardProps {
  title: string;
  image: string;
  date: string;
  prizePool: string;
  teamSize: string;
  registrationOpen: boolean;
  slug: string;
  game: "valorant" | "bgmi";
}

export function TournamentCard({
  title,
  image,
  date,
  prizePool,
  teamSize,
  registrationOpen,
  slug,
  game,
}: TournamentCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group relative overflow-hidden rounded-lg bg-black/50 backdrop-blur-sm"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover opacity-50 transition-all duration-300 group-hover:scale-105 group-hover:opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </div>

      <div className="relative z-10 p-6">
        <div className="mb-4">
          <span
            className={cn(
              "inline-block rounded-full px-3 py-1 text-xs font-medium",
              game === "valorant"
                ? "bg-[#FF4655]/20 text-[#FF4655]"
                : "bg-[#1F85DE]/20 text-[#1F85DE]"
            )}
          >
            {game.toUpperCase()}
          </span>
        </div>

        <h3 className="mb-2 text-xl font-bold text-white">{title}</h3>

        <div className="space-y-2 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Trophy className="h-4 w-4" />
            <span>{prizePool}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            <span>{teamSize}</span>
          </div>
        </div>

        <Link
          href={`/esports/${slug}`}
          className={cn(
            "mt-6 inline-block rounded-sm px-4 py-2 text-sm font-medium transition-all duration-300",
            registrationOpen
              ? "bg-gradient-to-r from-[#FF4655] to-[#FF4655]/80 text-white hover:from-[#FF4655]/90 hover:to-[#FF4655]/70"
              : "bg-gray-800 text-gray-400"
          )}
        >
          {registrationOpen ? "Register Now" : "Registration Closed"}
        </Link>

        {/* Glowing effect */}
        <div className="absolute -left-20 -top-20 h-[400px] w-[400px] rounded-full bg-gradient-to-r from-[#FF4655]/20 to-[#1F85DE]/20 blur-3xl transition-all duration-500 group-hover:opacity-100 opacity-0" />
      </div>
    </motion.div>
  );
}
