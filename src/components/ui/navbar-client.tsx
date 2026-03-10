"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const navItems = [
  { name: "INICIO",    url: "#inicio" },
  { name: "NOSOTROS",  url: "#nosotros" },
  { name: "SERVICIOS", url: "#servicios" },
  { name: "CONTACTO",  url: "#contacto" },
];

export function NavbarClient() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5">
        {/* Logo */}
        <a href="#inicio" className="flex flex-col leading-none">
          <span className="text-xl font-bold tracking-wide text-white">Caoba</span>
          <span className="text-[9px] tracking-[0.22em] text-white/50 uppercase">Consulting &amp; Investment</span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.url}
              className="text-xs font-bold tracking-widest text-white/70 transition-colors hover:text-white"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#contacto"
          className="hidden items-center gap-2 rounded-sm border border-caoba-accent px-4 py-2 text-[11px] font-bold tracking-widest text-caoba-accent transition-colors hover:bg-caoba-accent hover:text-caoba-primary-dark md:flex"
        >
          CONTÁCTANOS
        </a>

        {/* Mobile hamburger */}
        <button
          className="text-white md:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <FaTimes className="h-5 w-5" /> : <FaBars className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col gap-4 bg-caoba-primary-dark px-6 py-5 md:hidden"
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.url}
              onClick={() => setMobileOpen(false)}
              className="text-xs font-bold tracking-widest text-white/80 hover:text-white"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contacto"
            className="mt-1 text-sm font-semibold text-caoba-accent"
            onClick={() => setMobileOpen(false)}
          >
            Hablemos sobre tu proyecto →
          </a>
        </motion.div>
      )}
    </>
  );
}
