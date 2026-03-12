"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HiOutlineArrowRight } from "react-icons/hi";
import type { Service } from "@/lib/services-data";
import { services } from "@/lib/services-data";

/* ── Hero ──────────────────────────────────────────────────────────────── */
function ServiceHero({ service }: { service: Service }) {
  return (
    <section className="relative flex min-h-[460px] items-end overflow-hidden bg-caoba-primary">
      <Image
        src={service.image}
        alt={service.name}
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-caoba-primary/78" />
      {/* Gold bottom accent */}
      <div className="absolute inset-x-0 bottom-0 h-1 bg-caoba-accent" />

      {/* Decorative ghost number */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.3 }}
        className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 select-none text-[200px] font-black leading-none text-white/[0.035] lg:text-[260px]"
      >
        {service.number}
      </motion.span>

      <div className="relative mx-auto w-full max-w-7xl px-6 pb-16 pt-32">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-5 flex flex-wrap items-center gap-2 text-[11px] text-white/40"
        >
          <a href="/" className="transition-colors hover:text-white/70">Inicio</a>
          <span>/</span>
          <a href="/#servicios" className="transition-colors hover:text-white/70">Nuestros Servicios</a>
          <span>/</span>
          <span className="text-white/70">{service.shortName}</span>
        </motion.div>

        {/* Servicio label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-4 text-[11px] font-bold tracking-[0.25em] text-caoba-accent uppercase"
        >
          Servicio {service.number}
        </motion.p>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mb-5 max-w-3xl text-4xl font-light leading-tight text-white md:text-5xl lg:text-[3.5rem]"
        >
          {service.name}
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="max-w-xl text-sm leading-relaxed text-white/55"
        >
          {service.tagline}
        </motion.p>
      </div>
    </section>
  );
}

/* ── Challenge / Problem section ────────────────────────────────────────── */
function ChallengeSection({ service }: { service: Service }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  // Split into two questions by splitting on "?" and re-appending
  const parts = service.question
    .split("?")
    .map((s) => s.trim())
    .filter(Boolean)
    .map((s) => s + "?");

  return (
    <section className="overflow-hidden bg-caoba-bg-soft py-24">
      <div ref={ref} className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[3fr_2fr]">

          {/* Left: questions */}
          <div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-8 text-xs font-bold tracking-[0.25em] text-caoba-accent uppercase"
            >
              El Desafío
            </motion.p>

            <div className="flex flex-col gap-8">
              {parts.map((part, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -32 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.1 + i * 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="flex gap-5"
                >
                  <div className="mt-1 w-0.5 shrink-0 self-stretch bg-caoba-accent" />
                  <p className="text-xl font-light leading-relaxed text-caoba-heading lg:text-2xl">
                    {part}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: decorative number box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative flex h-52 w-52 items-center justify-center border border-caoba-accent/20">
              <span className="select-none text-[100px] font-black leading-none text-caoba-accent/10">
                {service.number}
              </span>
              {/* Corner accents */}
              <div className="absolute left-0 top-0 h-7 w-0.5 bg-caoba-accent" />
              <div className="absolute left-0 top-0 h-0.5 w-7 bg-caoba-accent" />
              <div className="absolute bottom-0 right-0 h-7 w-0.5 bg-caoba-accent" />
              <div className="absolute bottom-0 right-0 h-0.5 w-7 bg-caoba-accent" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

/* ── Services sidebar ───────────────────────────────────────────────────── */
function ServicesSidebar({ currentSlug }: { currentSlug: string }) {
  return (
    <div className="overflow-hidden border border-white/10">
      <div className="border-b border-white/10 px-6 py-4">
        <p className="text-[10px] font-bold tracking-[0.22em] text-caoba-accent uppercase">
          Nuestros Servicios
        </p>
      </div>
      <div>
        {services.map((s) => {
          const active = s.slug === currentSlug;
          return (
            <a
              key={s.slug}
              href={`/servicios/${s.slug}`}
              className={`group flex items-stretch gap-0 border-b border-white/6 transition-colors last:border-0 ${
                active ? "bg-white/5" : "hover:bg-white/5"
              }`}
            >
              {/* Active accent bar */}
              <div
                className={`w-0.5 shrink-0 transition-colors ${
                  active ? "bg-caoba-accent" : "bg-transparent group-hover:bg-caoba-accent/40"
                }`}
              />
              <div className="flex flex-1 items-center justify-between px-5 py-4">
                <span
                  className={`text-xs leading-snug transition-colors ${
                    active ? "font-bold text-white" : "text-white/60 group-hover:text-white/80"
                  }`}
                >
                  {s.name}
                </span>
                {active && (
                  <span className="ml-3 shrink-0 text-[10px] font-black text-caoba-accent">
                    {s.number}
                  </span>
                )}
              </div>
            </a>
          );
        })}
      </div>
      <div className="border-t border-white/10 bg-caoba-primary-dark p-6">
        <p className="mb-1 text-[10px] font-bold tracking-[0.2em] text-caoba-accent uppercase">
          ¿Tienes dudas?
        </p>
        <p className="mb-4 text-xs leading-relaxed text-white/50">
          Conversemos sobre cómo podemos ayudarte a alcanzar tus objetivos.
        </p>
        <a
          href="/contacto"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/60 transition-colors hover:text-caoba-accent"
        >
          Contáctanos
          <HiOutlineArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  );
}

/* ── Solutions section ──────────────────────────────────────────────────── */
function SolutionsSection({ service }: { service: Service }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="overflow-hidden bg-caoba-primary py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[7fr_5fr]">

          {/* ── Main: solutions list ── */}
          <div ref={ref}>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-3 text-xs font-bold tracking-[0.25em] text-caoba-accent uppercase"
            >
              Soluciones Especializadas
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mb-14 max-w-lg text-sm leading-relaxed text-white/55"
            >
              Cada uno de nuestros servicios se complementa con soluciones diseñadas para abordar
              desafíos específicos y potenciar el crecimiento estratégico de tu organización.
              Adaptamos cada propuesta a las necesidades reales de tu empresa, garantizando
              resultados medibles y sostenibles.
            </motion.p>

            {/* Solutions */}
            <div>
              {service.solutions.map((solution, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -44 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.7,
                    delay: 0.2 + i * 0.14,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group flex gap-6 border-b border-white/8 py-8 last:border-0"
                >
                  {/* Number */}
                  <span className="w-10 shrink-0 text-4xl font-black leading-none text-caoba-accent/20 transition-colors group-hover:text-caoba-accent/50">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {/* Text */}
                  <div className="pt-1">
                    <p className="mb-2 text-sm font-black uppercase tracking-wide text-white">
                      {solution.title}
                    </p>
                    <p className="text-sm leading-relaxed text-white/55">
                      {solution.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA button */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.2 + service.solutions.length * 0.14 + 0.25,
              }}
              className="mt-10"
            >
              <a
                href="/contacto"
                className="inline-flex items-center gap-3 bg-caoba-accent px-7 py-3.5 text-xs font-black uppercase tracking-widest text-caoba-primary-dark transition-colors hover:bg-caoba-accent-hover"
              >
                Solicita tu asesoría
                <HiOutlineArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          </div>

          {/* ── Sidebar ── */}
          <div className="hidden lg:block">
            <div className="sticky top-28">
              <ServicesSidebar currentSlug={service.slug} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ── CTA banner ─────────────────────────────────────────────────────────── */
function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <section className="overflow-hidden bg-caoba-accent py-20">
      <div ref={ref} className="mx-auto max-w-7xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-4 text-[10px] font-bold tracking-[0.25em] text-caoba-primary-dark/60 uppercase"
        >
          Siguiente Paso
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-5 text-3xl font-light leading-tight text-caoba-primary-dark md:text-4xl"
        >
          ¿Listo para{" "}
          <strong className="font-black">transformar tu organización?</strong>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.2 }}
          className="mx-auto mb-10 max-w-md text-sm leading-relaxed text-caoba-primary-dark/65"
        >
          Conversemos sobre cómo podemos ayudarte a alcanzar tus objetivos estratégicos.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <a
            href="/contacto"
            className="inline-flex items-center gap-3 bg-caoba-primary-dark px-8 py-4 text-xs font-black uppercase tracking-widest text-white transition-colors hover:bg-caoba-primary"
          >
            Solicita tu asesoría
            <HiOutlineArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* ── Main export ─────────────────────────────────────────────────────────── */
export function ServicePageContent({ service }: { service: Service }) {
  return (
    <>
      <ServiceHero service={service} />
      <ChallengeSection service={service} />
      <SolutionsSection service={service} />
      <CTASection />
    </>
  );
}
