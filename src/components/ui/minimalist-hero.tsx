"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

type SocialIconName = "facebook" | "linkedin" | "instagram";

const socialIconMap: Record<SocialIconName, React.ElementType> = {
  facebook: Facebook,
  linkedin: Linkedin,
  instagram: Instagram,
};

interface NavLink {
  label: string;
  href: string;
}

interface SocialLink {
  icon: SocialIconName;
  href: string;
}

interface MinimalistHeroProps {
  logoText: string;
  logoSubtext?: string;
  navLinks: NavLink[];
  ctaLabel: string;
  ctaHref: string;
  mainText: string;
  imageSrc: string;
  imageAlt: string;
  overlayText: {
    part1: string;
    part2: string;
  };
  socialLinks: SocialLink[];
  locationText: string;
  className?: string;
}

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-xs font-semibold tracking-widest text-white/70 transition-colors hover:text-white uppercase"
  >
    {children}
  </a>
);

const SocialIcon = ({ href, icon }: { href: string; icon: SocialIconName }) => {
  const Icon = socialIconMap[icon];
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/60 transition-colors hover:border-white/60 hover:text-white"
    >
      <Icon className="h-4 w-4" />
    </a>
  );
};

export const MinimalistHero = ({
  logoText,
  logoSubtext,
  navLinks,
  ctaLabel,
  ctaHref,
  mainText,
  imageSrc,
  imageAlt,
  overlayText,
  socialLinks,
  locationText,
  className,
}: MinimalistHeroProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div
      className={cn(
        "relative flex min-h-screen w-full flex-col overflow-hidden bg-caoba-primary font-sans",
        className
      )}
    >
      {/* Background subtle texture overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(212,160,32,0.08)_0%,_transparent_60%)]" />

      {/* ── Header ──────────────────────────────────────────── */}
      <header className="relative z-30 flex w-full items-center justify-between px-8 py-7 md:px-14">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col leading-none"
        >
          <span className="text-2xl font-bold tracking-wide text-white">{logoText}</span>
          {logoSubtext && (
            <span className="text-[10px] font-medium tracking-[0.25em] text-caoba-accent uppercase">
              {logoSubtext}
            </span>
          )}
        </motion.div>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.label} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA */}
        <motion.a
          href={ctaHref}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden items-center gap-2 rounded-full bg-caoba-accent px-5 py-2.5 text-xs font-bold tracking-widest text-caoba-primary uppercase transition-colors hover:bg-caoba-accent-hover md:flex"
        >
          {ctaLabel}
          <span>→</span>
        </motion.a>

        {/* Mobile hamburger */}
        <button
          className="text-white md:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute inset-x-0 top-20 z-40 flex flex-col gap-5 bg-caoba-primary-dark px-8 py-6 md:hidden"
        >
          {navLinks.map((link) => (
            <NavLink key={link.label} href={link.href}>
              {link.label}
            </NavLink>
          ))}
          <a
            href={ctaHref}
            className="mt-2 inline-block rounded-full bg-caoba-accent px-5 py-2.5 text-center text-xs font-bold tracking-widest text-caoba-primary uppercase"
          >
            {ctaLabel}
          </a>
        </motion.div>
      )}

      {/* ── Main grid ───────────────────────────────────────── */}
      <div className="relative flex flex-1 flex-col items-center justify-center px-8 py-10 md:grid md:grid-cols-3 md:items-end md:px-14 md:pb-0">

        {/* Left — description text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="z-20 mb-8 text-center md:mb-0 md:pb-24 md:text-left"
        >
          <div className="mb-3 h-px w-10 bg-caoba-accent mx-auto md:mx-0" />
          <p className="text-sm leading-relaxed text-white/70 max-w-[240px] mx-auto md:mx-0">
            {mainText}
          </p>
          <a
            href={ctaHref}
            className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest text-caoba-accent uppercase hover:text-caoba-accent-light transition-colors"
          >
            Contáctanos <span>→</span>
          </a>
        </motion.div>

        {/* Center — image with circle */}
        <div className="relative flex items-end justify-center order-first md:order-none h-[380px] md:h-[520px]">
          {/* Glowing circle */}
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 z-0 h-[280px] w-[280px] rounded-full bg-caoba-accent/15 ring-1 ring-caoba-accent/30 md:h-[400px] md:w-[400px]"
          />
          {/* Inner circle */}
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 z-0 h-[200px] w-[200px] rounded-full bg-caoba-accent/20 md:h-[280px] md:w-[280px]"
          />
          {/* Photo */}
          <motion.img
            src={imageSrc}
            alt={imageAlt}
            className="relative z-10 h-full w-auto max-w-[260px] object-cover object-top md:max-w-[340px]"
            style={{ maskImage: "linear-gradient(to top, transparent 0%, black 18%)" }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            onError={(e) => {
              const t = e.target as HTMLImageElement;
              t.onerror = null;
              t.src = "https://placehold.co/400x600/1a2f38/d4a020?text=Caoba";
            }}
          />
        </div>

        {/* Right — large headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="z-20 mt-8 text-center md:mt-0 md:pb-24 md:text-left"
        >
          <h1 className="text-5xl font-extrabold leading-none tracking-tight text-white md:text-6xl lg:text-7xl">
            {overlayText.part1}
            <br />
            <span className="text-caoba-accent">{overlayText.part2}</span>
          </h1>
        </motion.div>
      </div>

      {/* ── Footer bar ──────────────────────────────────────── */}
      <footer className="relative z-30 flex w-full items-center justify-between border-t border-white/10 px-8 py-5 md:px-14">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.3 }}
          className="flex items-center gap-3"
        >
          {socialLinks.map((link, i) => (
            <SocialIcon key={i} href={link.href} icon={link.icon} />
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.4 }}
          className="flex items-center gap-2 text-xs font-medium tracking-widest text-white/50 uppercase"
        >
          <span className="inline-block h-1 w-1 rounded-full bg-caoba-accent" />
          {locationText}
        </motion.div>
      </footer>
    </div>
  );
};
