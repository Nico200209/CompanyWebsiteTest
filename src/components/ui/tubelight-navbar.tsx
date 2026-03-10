"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import type { IconType } from "react-icons";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  url: string;
  icon: IconType;
}

interface TubelightNavBarProps {
  items: NavItem[];
  className?: string;
}

export function TubelightNavBar({ items, className }: TubelightNavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 120;
      for (let i = items.length - 1; i >= 0; i--) {
        const el = document.querySelector(items[i].url) as HTMLElement | null;
        if (el && el.offsetTop <= scrollY) {
          setActiveTab(items[i].name);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [items]);

  return (
    <div className={cn("flex items-center", className)}>
      <div className="flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-1 py-1 backdrop-blur-sm">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.name;

          return (
            <Link
              key={item.name}
              href={item.url}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                "relative cursor-pointer rounded-full px-5 py-2 text-xs font-bold tracking-widest uppercase transition-colors",
                isActive ? "text-white" : "text-white/60 hover:text-white/90"
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden"><Icon size={16} /></span>

              {isActive && (
                <motion.div
                  layoutId="tubelight-lamp"
                  className="absolute inset-0 -z-10 w-full rounded-full bg-white/10"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <div className="absolute -top-2 left-1/2 h-1 w-8 -translate-x-1/2 rounded-t-full bg-caoba-accent">
                    <div className="absolute -left-2 -top-2 h-6 w-12 rounded-full bg-caoba-accent/20 blur-md" />
                    <div className="absolute -top-1 h-6 w-8 rounded-full bg-caoba-accent/20 blur-md" />
                    <div className="absolute left-2 top-0 h-4 w-4 rounded-full bg-caoba-accent/30 blur-sm" />
                  </div>
                </motion.div>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
