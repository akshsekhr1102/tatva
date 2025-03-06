"use client";
import Image from "next/image";
import React, { useState } from "react";

const cloudinaryImages = [
  "https://res.cloudinary.com/dsnaaw5iy/image/upload/v1741282254/featured1_nsdp80.jpg",
  "https://res.cloudinary.com/dsnaaw5iy/image/upload/v1741282254/featured2_nxbn2d.webp",
  "https://res.cloudinary.com/dsnaaw5iy/image/upload/v1741282255/featured3_lv55j9.webp",
  "https://res.cloudinary.com/dsnaaw5iy/image/upload/v1741282255/featured4_o1c884.jpg",
  "https://res.cloudinary.com/dsnaaw5iy/image/upload/v1741282256/featured5_kkd4x4.jpg",
  "https://res.cloudinary.com/dsnaaw5iy/image/upload/v1741282256/featured6_hhxne0.webp",
  "https://res.cloudinary.com/dsnaaw5iy/image/upload/v1741282257/featured7_spjy7q.jpg",
  "https://res.cloudinary.com/dsnaaw5iy/image/upload/v1741282258/featured8_fkdaqg.jpg",
  "https://res.cloudinary.com/dsnaaw5iy/image/upload/v1741282258/featured9_mud5uv.jpg",
  "https://res.cloudinary.com/dsnaaw5iy/image/upload/v1741282259/featured10_gsp13i.jpg",
  "https://res.cloudinary.com/dsnaaw5iy/image/upload/v1741282260/featured11_zchrof.jpg",
  "https://res.cloudinary.com/dsnaaw5iy/image/upload/v1741282261/featured12_owz6tq.jpg",
  "https://res.cloudinary.com/dsnaaw5iy/image/upload/v1741282262/featured13_vxom5z.jpg",
  "https://res.cloudinary.com/dsnaaw5iy/image/upload/v1741282262/featured14_rllgwn.jpg",
  "https://res.cloudinary.com/dsnaaw5iy/image/upload/v1741282264/featured15_ng88xq.jpg",
];

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
        {cloudinaryImages.map((image, i) => (
          <div
            key={i}
            className="relative overflow-hidden rounded-xl shadow-inner"
            onMouseEnter={() => setHoverIndex(i)}
            onMouseLeave={() => setHoverIndex(null)}
            onMouseMove={(e) => handleMouseMove(e, i)}
          >
            <Image
              src={image}
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
