"use client";

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

  return (
    <div
      style={{
        backgroundImage: "url('/background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="relative min-h-screen w-full flex flex-col items-center bg-gradient-to-b from-indigo-800 to-[#1c1c1d] text-white"
    >
      {/* Navbar */}
      <Navbar />

      {/* Background Image */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/background.png')" }}
      ></div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center flex-grow text-center px-6">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold mb-4">🎉 Coming Soon...</h1>
          <p className="text-lg text-gray-300 mb-6">
            We&apos;re working on something amazing! Meanwhile, you can check
            out our event details by downloading the official brochure.
          </p>
          <button
            onClick={handleDownload}
            className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600 transition duration-300"
          >
            📥 Download Brochure
          </button>
        </div>
      </div>
    </div>
  );
}
