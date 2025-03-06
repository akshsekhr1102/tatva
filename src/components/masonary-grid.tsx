"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function MasonryGrid() {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, i: number) => {
    if (hoverIndex === i) {
      const rect = (e.target as HTMLDivElement).getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMousePosition({ x, y });
    }
  };
  return (
    <div className="p-5 sm:p-7 bg-gradient-to-b from-transparent/30 via-transparent/65 to-transparent/80">
      <h1 className="text-center text-3xl  text-white font-semibold md:text-6xl py-10 mb-10 md:mb-30">
        Gallery
      </h1>
      <div className="w-full flex items-center "></div>
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 [&>div:not(:first-child)]:mt-6">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="relative overflow-hidden rounded-xl shadow-inner"
            onMouseEnter={() => setHoverIndex(i)}
            onMouseLeave={() => setHoverIndex(null)}
            onMouseMove={(e) => handleMouseMove(e, i)}
          >
            <Image
              src={`/featured/featured${i + 1}.jpeg`}
              alt="Featured post"
              width={500}
              height={500}
              className="cursor-pointer hover:scale-150 transition-transform duration-500 ease-in-out"
              style={{
                transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
