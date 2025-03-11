"use client";
import Image from "next/image";
import React, { useState } from "react";

const cloudinaryImages = [
  "https://3bvv3yffqy.ufs.sh/f/zNuOBIssVhSAwjPvPeBzr3Xm6ekJ0KNG51sqTaHyEit4UDCL",
  "https://3bvv3yffqy.ufs.sh/f/zNuOBIssVhSA8FSXoOykUsCM2h6GHmpeRxOyVEvTioSDWz50",
  "https://3bvv3yffqy.ufs.sh/f/zNuOBIssVhSAPnTj4ZhHY0NQjtgd6sIa2Jn14MH39bwWFDku",
  "https://3bvv3yffqy.ufs.sh/f/zNuOBIssVhSAHg3CdSW1WqU7kIVBg36iphTJn2lyDAbKuxjf",
  "https://3bvv3yffqy.ufs.sh/f/zNuOBIssVhSAOJQ60DxlM89G0fsIvjSHpyqVBzDiNF3wcT1k",
  "https://3bvv3yffqy.ufs.sh/f/zNuOBIssVhSAVMih9QKjrGSe02nmHWkXacIFo57wdZgQJDpK",
  "https://3bvv3yffqy.ufs.sh/f/zNuOBIssVhSAsilvcDGjS5t36ceUpXEmQqArv2zhyofJLV9d",
  "https://3bvv3yffqy.ufs.sh/f/zNuOBIssVhSArOXssq1cyEFbTuBhAXsg0IHa5ZGwc9oxmN2d",
  "https://3bvv3yffqy.ufs.sh/f/zNuOBIssVhSAM2PKSJsOFOh3u9Td1WJytVUbRgHQnXZfPArx",
  "https://3bvv3yffqy.ufs.sh/f/zNuOBIssVhSA4IiBZpQ0DuUbSij9FhCdWM4fypeYA5vRGk7J",
  "https://3bvv3yffqy.ufs.sh/f/zNuOBIssVhSASsztJLjUXHwn9EAok2LhOVIuTbgZeJ16Nqzi",
  "https://3bvv3yffqy.ufs.sh/f/zNuOBIssVhSA1AqBO7EDm74hLkPWHSTQueZlXvYBCx5gKdFy",
  "https://3bvv3yffqy.ufs.sh/f/zNuOBIssVhSATT9yTjR9suFPa1fLKoVW6dI3J8Ab5mQS02Xp",
  "https://3bvv3yffqy.ufs.sh/f/zNuOBIssVhSADOkiOPpPA1InTftYkFDp6uazB2cqoOgrjH9E",
  "https://3bvv3yffqy.ufs.sh/f/zNuOBIssVhSAorGuIHvxMVTEH2zOf1ue8XLJyaDdK7Nrh3ki",
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
