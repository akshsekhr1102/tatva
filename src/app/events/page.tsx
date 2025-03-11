"use client";

import { Navbar } from "@/components/navbar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { titleToSlug } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, Clock } from "lucide-react";

// Define a type for the event object
interface Event {
  title: string;
  description: string;
  isPublished: boolean;
}

export default function EventPage() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/brochure.pdf"; // Ensure the file is placed in the public folder
    link.download = "Tattva_2025_Brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const events: Event[] = [
    {
      title: "Solo Singing",
      description: "Showcase your singing talent on stage.",
      isPublished: true,
    },
    {
      title: "Group Singing",
      description: "Sing in harmony with your team.",
      isPublished: true,
    },
    {
      title: "Solo Dance",
      description: "A stage to express your emotions through dance.",
      isPublished: true,
    },
    {
      title: "Duo Dance",
      description: "Pair up and show your best moves.",
      isPublished: true,
    },
    {
      title: "Group Dance",
      description: "A high-energy performance with your crew.",
      isPublished: true,
    },
    {
      title: "Mime",
      description: "Express without words through the art of mime.",
      isPublished: true,
    },
    {
      title: "Mad Ads",
      description: "A fun advertising competition with a creative twist.",
      isPublished: true,
    },
    {
      title: "Ad Making",
      description: "Create an impactful advertisement in a limited time.",
      isPublished: true,
    },
    {
      title: "Photography",
      description: "Capture the perfect shot in this photography contest.",
      isPublished: true,
    },
    {
      title: "Short Film",
      description: "Direct and present a compelling short film.",
      isPublished: true,
    },
    {
      title: "Treasure Hunt",
      description: "Solve clues and find the hidden treasure.",
      isPublished: true,
    },
    {
      title: "Fashion Show",
      description: "Walk the ramp and showcase your fashion sense.",
      isPublished: true,
    },
  ];

  return (
    <div
      className="min-h-screen w-full flex flex-col bg-fixed bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/background.png')" }}
    >
      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12 mt-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Tattva 2025 Events
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            Explore our exciting lineup of events and competitions. Showcase
            your talents and win amazing prizes!
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-16">
          {events.map((event, i) => (
            <EventCard key={i} event={event} index={i} />
          ))}
        </div>

        {/* Brochure Download Section */}
        <div className="bg-black/50 backdrop-blur-md rounded-2xl p-8 text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            🎉 Want More Details?
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            Get complete information about all our events, rules, and prizes by
            downloading the official brochure.
          </p>
          <button
            onClick={handleDownload}
            className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-amber-600 text-black font-bold rounded-lg hover:from-yellow-600 hover:to-amber-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            📥 Download Brochure
          </button>
        </div>
      </div>
    </div>
  );
}

// Enhanced EventCard with animations and better styling
export function EventCard({ event, index }: { event: Event; index: number }) {
  // Generate a unique gradient for each card based on index
  const gradients = [
    "from-purple-500 to-indigo-600",
    "from-blue-500 to-teal-400",
    "from-green-500 to-emerald-600",
    "from-yellow-500 to-orange-500",
    "from-pink-500 to-rose-500",
    "from-indigo-500 to-purple-600",
    "from-teal-500 to-cyan-400",
    "from-orange-500 to-red-500",
    "from-rose-500 to-pink-600",
    "from-emerald-500 to-green-600",
    "from-cyan-500 to-blue-600",
    "from-red-500 to-orange-600",
  ];

  const gradient = gradients[index % gradients.length];

  // Generate a unique image for each event (in a real app, you'd have actual images)
  const imageId = index + 1;
  const imageUrl = `/events/image${imageId}.jpeg`;

  return (
    <Link href={`/events/${titleToSlug(event.title)}`} className="block h-full">
      <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20  bg-black/40 backdrop-blur-sm border-gray-800 group">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10" />
          <div
            className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${gradient}`}
          />
          <Image
            src={imageUrl || "/placeholder.svg"}
            width={500}
            height={300}
            alt={event.title}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <Badge
            className={`absolute top-3 right-3 z-20 bg-gradient-to-r ${gradient}`}
          >
            Featured
          </Badge>
        </div>

        <CardHeader className="relative z-20 -mt-6 pb-0">
          <CardTitle className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-600 transition-all duration-300">
            {event.title}
          </CardTitle>
          <CardDescription className="flex items-center gap-1 text-gray-300">
            <Calendar className="h-3 w-3" />
            <span>SAT 01 JAN 2025</span>
          </CardDescription>
        </CardHeader>

        <CardContent className="pt-3">
          <div className="flex items-center gap-1 text-xs text-gray-400 mb-2">
            <Clock className="h-3 w-3" />
            <span>7:00 AM</span>
            <span className="mx-1">•</span>
            <MapPin className="h-3 w-3" />
            <span>Main Auditorium</span>
          </div>
          <p className="text-sm text-gray-300 line-clamp-2">
            {event.description}
          </p>
        </CardContent>

        <CardFooter className="pt-0">
          <div className="w-full pt-2 border-t border-gray-800 flex justify-between items-center">
            <span className="text-xs text-gray-400">Registration open</span>
            <span
              className={`text-xs font-semibold bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}
            >
              Learn more →
            </span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
