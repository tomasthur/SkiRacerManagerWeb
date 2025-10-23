"use client";
import { useEffect, useRef } from "react";

export default function Snowfall() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrame = 0;
    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;

    type Flake = { x: number; y: number; r: number; s: number; vx: number; vy: number };
    let flakes: Flake[] = [];

    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.floor(width * DPR);
      canvas.height = Math.floor(height * DPR);
      ctx.scale(DPR, DPR);
      createFlakes();
    };

    const createFlakes = () => {
      const count = Math.floor((width * height) / 9000);
      flakes = new Array(count).fill(0).map(() => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: 1 + Math.random() * 2.5,
        s: 0.3 + Math.random() * 0.8,
        vx: -0.3 + Math.random() * 0.6,
        vy: 0.4 + Math.random() * 1.2,
      }));
    };

    const step = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "rgba(240,241,245,0.9)";
      for (const f of flakes) {
        ctx.beginPath();
        ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
        ctx.fill();
        f.x += f.vx * f.s;
        f.y += f.vy * f.s;
        if (f.y - f.r > height) {
          f.y = -f.r;
          f.x = Math.random() * width;
        }
        if (f.x < -5) f.x = width + 5;
        if (f.x > width + 5) f.x = -5;
      }
      animationFrame = requestAnimationFrame(step);
    };

    const onResize = () => {
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      resize();
    };

    resize();
    step();
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-10 opacity-60" />
  );
}

