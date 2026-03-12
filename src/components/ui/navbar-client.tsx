"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

const serviceLinks = [
  { number: "01", name: "Cierre de Brechas", url: "/servicios/cierre-de-brechas" },
  { number: "02", name: "Data e Inteligencia", url: "/servicios/data-e-inteligencia" },
  { number: "03", name: "Planificación Estratégica", url: "/servicios/planificacion-estrategica" },
  { number: "04", name: "Eficiencia Operativa", url: "/servicios/eficiencia-operativa" },
  { number: "05", name: "Transformación Cultural", url: "/servicios/transformacion-cultural" },
];

export function NavbarClient() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  return (
    <>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5">
        {/* Logo */}
        <a href="/" className="flex flex-col leading-none">
          <span className="text-xl font-bold tracking-wide text-white">Caoba</span>
          <span className="text-[9px] tracking-[0.22em] text-white/50 uppercase">
            Consulting &amp; Investment
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-10 md:flex">
          <a href="/" className="text-xs font-bold tracking-widest text-white/70 transition-colors hover:text-white">
            INICIO
          </a>
          <a href="/nosotros" className="text-xs font-bold tracking-widest text-white/70 transition-colors hover:text-white">
            NOSOTROS
          </a>

          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <a
              href="/#servicios"
              className="flex items-center gap-1.5 text-xs font-bold tracking-widest text-white/70 transition-colors hover:text-white"
            >
              SERVICIOS
              <motion.span
                animate={{ rotate: servicesOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="inline-block"
              >
                <FaChevronDown className="h-2 w-2" />
              </motion.span>
            </a>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.18 }}
                  className="absolute left-0 top-full z-50 mt-4 w-72 overflow-hidden bg-caoba-primary-dark shadow-2xl"
                >
                  <div className="h-0.5 w-full bg-caoba-accent" />
                  {serviceLinks.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      className="flex items-center gap-3 border-b border-white/6 px-5 py-3.5 text-xs text-white/65 transition-colors last:border-0 hover:bg-white/5 hover:text-white"
                    >
                      <span className="text-[10px] font-black text-caoba-accent">
                        {link.number}
                      </span>
                      {link.name}
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a href="/contacto" className="text-xs font-bold tracking-widest text-white/70 transition-colors hover:text-white">
            CONTACTO
          </a>
        </div>

        {/* Desktop CTA */}
        <a
          href="/contacto"
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

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col gap-1 bg-caoba-primary-dark px-6 py-5 md:hidden"
        >
          <a href="/" onClick={() => setMobileOpen(false)} className="py-2 text-xs font-bold tracking-widest text-white/80 hover:text-white">
            INICIO
          </a>
          <a href="/nosotros" onClick={() => setMobileOpen(false)} className="py-2 text-xs font-bold tracking-widest text-white/80 hover:text-white">
            NOSOTROS
          </a>

          {/* Mobile services accordion */}
          <div>
            <button
              onClick={() => setMobileServicesOpen((v) => !v)}
              className="flex w-full items-center justify-between py-2 text-xs font-bold tracking-widest text-white/80 hover:text-white"
            >
              SERVICIOS
              <motion.span
                animate={{ rotate: mobileServicesOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="inline-block"
              >
                <FaChevronDown className="h-2.5 w-2.5" />
              </motion.span>
            </button>
            <AnimatePresence>
              {mobileServicesOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <div className="mb-2 ml-3 flex flex-col border-l border-caoba-accent/30 pl-4">
                    {serviceLinks.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-2 py-2 text-xs text-white/60 hover:text-white"
                      >
                        <span className="text-[9px] font-black text-caoba-accent">
                          {link.number}
                        </span>
                        {link.name}
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a href="/contacto" onClick={() => setMobileOpen(false)} className="py-2 text-xs font-bold tracking-widest text-white/80 hover:text-white">
            CONTACTO
          </a>
          <a href="/contacto" onClick={() => setMobileOpen(false)} className="mt-2 text-sm font-semibold text-caoba-accent">
            Hablemos sobre tu proyecto →
          </a>
        </motion.div>
      )}
    </>
  );
}
