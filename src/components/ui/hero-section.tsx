"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaFacebook, FaLinkedinIn, FaInstagram, FaBars, FaTimes, FaChevronRight } from "react-icons/fa";
import { HiHome, HiUsers, HiBriefcase, HiMail } from "react-icons/hi";
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { TubelightNavBar } from "@/components/ui/tubelight-navbar";

const navItems = [
  { name: "INICIO",    url: "#inicio",    icon: HiHome },
  { name: "NOSOTROS",  url: "#nosotros",  icon: HiUsers },
  { name: "SERVICIOS", url: "#servicios", icon: HiBriefcase },
  { name: "CONTACTO",  url: "#contacto",  icon: HiMail },
];

const socialLinks = [
  { icon: FaFacebook, href: "#" },
  { icon: FaLinkedinIn, href: "#" },
  { icon: FaInstagram, href: "#" },
];

export function HeroSection() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* ── Top info bar ─────────────────────────────────── */}
      <div className="bg-white border-b border-caoba-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 py-4 md:flex-row md:justify-between">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start leading-none">
            <span className="text-3xl font-bold tracking-wide text-caoba-heading">Caoba</span>
            <span className="text-[11px] tracking-[0.2em] text-caoba-body">Consulting &amp; Investment</span>
          </div>

          {/* Contact items */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-caoba-heading md:justify-end">
            <div className="flex items-start gap-2">
              <IoLocationOutline className="mt-0.5 h-5 w-5 shrink-0 text-caoba-heading" />
              <div className="text-xs leading-5">
                <p className="font-semibold">República Dominicana</p>
                <p className="text-caoba-body">Av. Sarasota N° 55, Santo Domingo.</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <MdOutlineEmail className="mt-0.5 h-5 w-5 shrink-0 text-caoba-heading" />
              <div className="text-xs leading-5">
                <p className="font-semibold">info@caobaconsultores.com</p>
                <p className="text-caoba-body">Horario de atención: 09:00am – 06:00pm</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <MdOutlinePhone className="mt-0.5 h-5 w-5 shrink-0 text-caoba-heading" />
              <div className="text-xs leading-5">
                <p className="font-semibold">+1 (849) 507-7413</p>
                <p className="text-caoba-body">Contáctanos</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Navbar ───────────────────────────────────────── */}
      <nav className="sticky top-0 z-50 bg-caoba-primary shadow-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          {/* Tubelight nav — desktop center */}
          <TubelightNavBar items={navItems} className="hidden md:flex" />

          {/* Desktop CTA */}
          <a
            href="#contacto"
            className="hidden items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-caoba-accent md:flex"
          >
            Hablemos sobre tu proyecto
            <span className="inline-block h-px w-10 bg-white" />
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
      </nav>

      {/* ── Hero ─────────────────────────────────────────── */}
      <section id="inicio" className="relative flex min-h-[90vh] items-center justify-center overflow-hidden">
        {/* Background image */}
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&auto=format&fit=crop&q=80"
          alt="Sala de reuniones Caoba Consulting"
          fill
          priority
          className="object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-caoba-primary/65" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center px-6 py-24 text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-xs font-bold tracking-[0.3em] text-caoba-accent uppercase border-b border-caoba-accent pb-2"
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
            href="#contacto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-caoba-accent px-8 py-4 text-xs font-bold tracking-widest text-caoba-primary uppercase transition-colors hover:bg-caoba-accent-hover"
          >
            Agenda una reunión con nuestro equipo
            <FaChevronRight className="h-3 w-3" />
          </motion.a>
        </div>

        {/* Bottom social strip */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 z-10">
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
      </section>
    </>
  );
}
