"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { titleToSlug } from "@/lib/utils";
import { Calendar, Clock, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Define a type for the event object
export interface Event {
  title: string;
  description: string;
  isPublished: boolean;
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
      <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 bg-black/40 backdrop-blur-sm border-gray-800 group">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent overflow-hidden to-black/80 z-10" />
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
