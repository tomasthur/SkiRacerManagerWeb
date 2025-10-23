"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

function useCounter(target: number, durationMs = 1800) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const step = (now: number) => {
      const t = Math.min(1, (now - start) / durationMs);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.floor(target * eased));
      if (t < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, durationMs]);
  return value;
}

export default function HudStrip() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith('/en');
  const players = useCounter(12000);
  const clubs = useCounter(540);
  const events = useCounter(38);

  return (
    <div className="bg-black/30 border-y border-white/10">
      <div className="container-max py-4 grid grid-cols-3 gap-4">
        <div className="text-center">
          <div className="text-2xl font-extrabold text-mediumBlue drop-shadow-[0_0_12px_rgba(47,140,231,0.75)]">{players.toLocaleString()}</div>
          <div className="text-xs tracking-widest text-lightBlue/70">{isEnglish ? "PRE-REGISTRATIONS" : "PRE-REGISTRÁCIÍ"}</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-extrabold text-orange drop-shadow-[0_0_12px_rgba(255,165,0,0.75)]">{clubs}</div>
          <div className="text-xs tracking-widest text-lightBlue/70">{isEnglish ? "CLUBS" : "KLUBOV"}</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-extrabold text-lightBlue drop-shadow-[0_0_12px_rgba(240,241,245,0.75)]">{events}</div>
          <div className="text-xs tracking-widest text-lightBlue/70">{isEnglish ? "SEASONAL EVENTS" : "SEZÓNNYCH PODUJATÍ"}</div>
        </div>
      </div>
    </div>
  );
}

