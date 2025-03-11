"use client";

import { EventCard, type Event } from "@/components/event-card";
import { Navbar } from "@/components/navbar";

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
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-600">
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
