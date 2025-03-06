"use client";
import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";

interface CountUpProps {
  from?: number;
  to: number;
  duration?: number;
  start?: boolean;
}

const CountUp: React.FC<CountUpProps> = ({
  from = 0,
  to,
  duration = 2,
  start,
}) => {
  const [count, setCount] = useState<number>(from);

  useEffect(() => {
    if (!start) return; // Only start counting when the section is in view

    let startVal = from;
    const increment = (to - from) / (duration * 60);

    const interval = setInterval(() => {
      startVal += increment;
      if (startVal >= to) {
        setCount(to);
        clearInterval(interval);
      } else {
        setCount(Math.ceil(startVal));
      }
    }, 1000 / 60);

    return () => clearInterval(interval);
  }, [from, to, duration, start]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: start ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className="text-5xl font-bold text-yellow-500"
    >
      {count}+
    </motion.span>
  );
};

const FestStats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Start animation only once when in view

  return (
    <div
      ref={ref}
      className="flex flex-wrap items-center justify-center gap-12 py-16 px-6 bg-gradient-to-b from-transparent/40 to-transparent/60 text-white"
    >
      <div className="flex flex-col items-center text-center w-1/3 min-w-[250px]">
        <h2 className="text-2xl font-semibold">🎉 Total Footfall</h2>
        <CountUp from={3000} to={5000} duration={4} start={isInView} />
        <p className="text-lg text-zinc-400">
          People attended this year’s festival
        </p>
      </div>

      <div className="flex flex-col items-center text-center w-1/3 min-w-[250px]">
        <h2 className="text-2xl font-semibold">🎭 Competitions Hosted</h2>
        <CountUp from={10} to={30} duration={3} start={isInView} />
        <p className="text-lg text-zinc-400">
          A variety of exciting challenges & events
        </p>
      </div>

      <div className="flex flex-col items-center text-center w-1/3 min-w-[250px]">
        <h2 className="text-2xl font-semibold">🌟 Special Guests</h2>
        <CountUp from={2} to={7} duration={3} start={isInView} />
        <p className="text-lg text-zinc-400">
          Renowned artists & celebrities joined us
        </p>
      </div>
    </div>
  );
};

export default FestStats;
