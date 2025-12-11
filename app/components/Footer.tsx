"use client";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const isEnglish = !pathname.startsWith('/sk');
  
  return (
    <footer className="py-10 border-t border-white/10 mt-10">
      <div className="container-max flex flex-col sm:flex-row items-center justify-between gap-4 text-lightBlue/70">
        <div>© {new Date().getFullYear()} Ski Racer Manager</div>
        <div className="flex items-center gap-4">
          <a className="hover:text-white" href="#">Facebook</a>
          <a className="hover:text-white" href="#">Instagram</a>
        </div>
      </div>
    </footer>
  );
}

