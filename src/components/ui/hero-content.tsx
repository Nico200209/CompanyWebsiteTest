"use client";

import { motion } from "framer-motion";
import { FaChevronRight, FaFacebook, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const socialLinks = [
  { icon: FaFacebook, href: "#" },
  { icon: FaLinkedinIn, href: "#" },
  { icon: FaInstagram, href: "#" },
];

export function HeroContent() {
  return (
    <>
      {/* Animated text content */}
      <div className="relative z-10 flex flex-col items-center px-6 py-24 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 border-b border-caoba-accent pb-2 text-xs font-bold tracking-[0.3em] text-caoba-accent uppercase"
        >
          Bienvenido a Caoba Consulting &amp; Investment
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-4xl text-5xl font-extrabold leading-tight text-white md:text-6xl lg:text-7xl"
        >
          Tu socio estratégico para
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-4 max-w-3xl text-xl font-light text-white/85 md:text-2xl"
        >
          diagnosticar, definir y alinear el rumbo de tu organización
        </motion.p>

        <motion.a
          href="/contacto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-caoba-accent px-8 py-4 text-xs font-bold tracking-widest text-caoba-primary uppercase transition-colors hover:bg-caoba-accent-hover"
        >
          Agenda una reunión con nuestro equipo
          <FaChevronRight className="h-3 w-3" />
        </motion.a>
      </div>

      {/* Social links */}
      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 items-center gap-4">
        {socialLinks.map(({ icon: Icon, href }, i) => (
          <a
            key={i}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 text-white/60 transition-colors hover:border-caoba-accent hover:text-caoba-accent"
          >
            <Icon className="h-3.5 w-3.5" />
          </a>
        ))}
      </div>
    </>
  );
}
