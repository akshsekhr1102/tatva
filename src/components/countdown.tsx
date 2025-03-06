"use client";
import { useAnimate } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

// NOTE: Change this date to whatever date you want to countdown to :)
const COUNTDOWN_FROM = "2025-04-03";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

type Units = "Day" | "Hour" | "Minute" | "Second";

const ShiftingCountdown = () => {
  return (
    <div className="bg-transparent p-2 rounded-[48px] shadow-lg">
      <div className="mx-auto flex w-full max-w-xl items-center text-white">
        <CountdownItem unit="Day" text="days" /> <h1 className="text-6xl">:</h1>
        <CountdownItem unit="Hour" text="hours" />{" "}
        <h1 className="text-6xl">:</h1>
        <CountdownItem unit="Minute" text="minutes" />{" "}
        <h1 className="text-6xl">:</h1>
        <CountdownItem unit="Second" text="seconds" />
      </div>
    </div>
  );
};

const CountdownItem = ({ unit, text }: { unit: Units; text: string }) => {
  const { ref, time } = useTimer(unit);

  return (
    <div className="flex h-12 w-1/4 flex-col items-center justify-center gap-1 rounded-xl border-[1px] border-slate-200 backdrop-blur-sm md:h-24 md:gap-2">
      <div className="relative w-full overflow-hidden text-center">
        <span
          ref={ref}
          className="block text-xl font-medium text-white md:text-2xl lg:text-4xl xl:text-5xl"
        >
          {time}
        </span>
      </div>
      <span className="text-xs text-red-400 md:text-sm lg:text-base">
        {text}
      </span>
    </div>
  );
};

export default ShiftingCountdown;
const useTimer = (unit: Units) => {
  const [ref, animate] = useAnimate();
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeRef = useRef(0);
  const [time, setTime] = useState(0);

  // Memoize the animation function
  const animateExitEnter = useCallback(
    async (newTime: number) => {
      if (!ref.current) return;

      // Exit animation
      await animate(
        ref.current,
        { y: ["0%", "-50%"], opacity: [1, 0] },
        { duration: 0.35 }
      );

      setTime(newTime);

      // Enter animation
      await animate(
        ref.current,
        { y: ["50%", "0%"], opacity: [0, 1] },
        { duration: 0.35 }
      );
    },
    [animate, ref]
  );

  // Memoize the countdown function
  const handleCountdown = useCallback(async () => {
    if (!ref.current) return; // Ensure ref is assigned before animating

    const end = new Date(COUNTDOWN_FROM);
    const now = new Date();
    const distance = +end - +now;

    let newTime = 0;
    if (unit === "Day") {
      newTime = Math.floor(distance / DAY);
    } else if (unit === "Hour") {
      newTime = Math.floor((distance % DAY) / HOUR);
    } else if (unit === "Minute") {
      newTime = Math.floor((distance % HOUR) / MINUTE);
    } else {
      newTime = Math.floor((distance % MINUTE) / SECOND);
    }

    if (newTime !== timeRef.current) {
      timeRef.current = newTime;
      await animateExitEnter(newTime);
    }
  }, [unit, animateExitEnter, ref]); // ✅ Included missing dependencies

  useEffect(() => {
    intervalRef.current = setInterval(handleCountdown, 1000);
    return () => clearInterval(intervalRef.current || undefined);
  }, [handleCountdown]); // ✅ Included `handleCountdown` in dependencies

  return { ref, time };
};
