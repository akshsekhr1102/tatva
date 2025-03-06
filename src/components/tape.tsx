import { StarIcon } from "lucide-react";

const words = [
  "Electrifying",
  "Creative",
  "Dynamic",
  "Cultural",
  "Thrilling",
  "Entertaining",
  "Engaging",
  "Unforgettable",
  "Star-Studded",
  "Exciting",
];
export const TapeSection = () => {
  return (
    <div className="py-16 overflow-hidden lg:py-24 bg-gradient-to-b from-transparent/80 to-transparent/40">
      <div className="relative -rotate-2">
        {/* Scrolling Wrapper */}
        <div className="flex w-full overflow-hidden bg-gradient-to-tr from-yellow-600 via-[#FFD700] to-yellow-700 py-3">
          <div className="flex animate-marquee whitespace-nowrap gap-6 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
            {words.map((word, index) => (
              <div key={index} className="inline-flex items-center gap-4">
                <span className="text-gray-900 uppercase font-extrabold text-sm tracking-wide">
                  {word}
                </span>
                <StarIcon className="size-5 text-gray-900 -rotate-12" />
              </div>
            ))}
            {/* Duplicate to ensure seamless animation */}
            {words.map((word, index) => (
              <div
                key={`dup-${index}`}
                className="inline-flex items-center gap-4"
              >
                <span className="text-gray-900 uppercase font-extrabold text-sm tracking-wide">
                  {word}
                </span>
                <StarIcon className="size-5 text-gray-900 -rotate-12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
