"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TestimonialCard } from "@/components/ui/testimonial-card";

const testimonials = [
  {
    author: {
      name: "Laura Méndez",
      role: "Ger. de RR. HH, sector farmacéutico",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    },
    text: "Gracias a Caoba, logramos cerrar brechas de competencias críticas en nuestro equipo. Hoy contamos con un talento más preparado para enfrentar los desafíos del mercado.",
  },
  {
    author: {
      name: "Sebastián Rojas",
      role: "Director de Operaciones, sector logístico",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    text: "La asesoría de Caoba en eficiencia operativa nos permitió optimizar procesos logísticos y reducir costos en un 20% sin comprometer la calidad del servicio.",
  },
  {
    author: {
      name: "Alejandro Fuentes",
      role: "Gerente General, sector retail",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    },
    text: "Caoba nos ayudó a implementar un modelo de inteligencia de datos que transformó nuestra manera de tomar decisiones estratégicas, haciéndolas más rápidas y efectivas.",
  },
  {
    author: {
      name: "María González",
      role: "CEO, sector tecnología",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    },
    text: "El equipo de Caoba nos acompañó en una transformación cultural profunda. Su enfoque humano y estratégico fue clave para que nuestros colaboradores abrazaran el cambio.",
  },
  {
    author: {
      name: "Carlos Ramírez",
      role: "Director Financiero, sector bancario",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    },
    text: "La planificación estratégica que desarrollamos con Caoba nos dio una hoja de ruta clara y alcanzable. Hoy operamos con mayor foco y nuestros resultados lo reflejan.",
  },
  {
    author: {
      name: "Ana Castillo",
      role: "VP de Estrategia, sector salud",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    },
    text: "Trabajar con Caoba fue una experiencia transformadora. Su metodología de diagnóstico organizacional nos reveló oportunidades que no habíamos podido ver internamente.",
  },
];

export function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="overflow-hidden bg-caoba-bg-soft py-24">
      {/* ── Header ── */}
      <div ref={ref} className="mx-auto mb-14 max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-end">
          {/* Left: heading */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="mb-4 text-xs font-bold tracking-[0.25em] text-caoba-accent uppercase"
            >
              Historias reales de transformación y resultados sostenibles
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="text-4xl font-light leading-tight text-caoba-heading md:text-5xl"
            >
              Lo que dicen{" "}
              <strong className="font-black">nuestros clientes</strong>
            </motion.h2>
          </div>

          {/* Right: subtext */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="text-base leading-relaxed text-caoba-body md:text-right"
          >
            Cada testimonio representa una organización que decidió transformarse.
            Estas son sus historias.
          </motion.p>
        </div>
      </div>

      {/* ── Marquee ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="group relative flex w-full flex-col items-center justify-center overflow-hidden [--gap:1.25rem] [--duration:45s]"
      >
        {/* 2 identical sets — keyframe moves -50% so one full set scrolls then loops */}
        <div className="flex [gap:var(--gap)] animate-marquee group-hover:[animation-play-state:paused]">
          {[...Array(2)].map((_, setIndex) =>
            testimonials.map((t, i) => (
              <TestimonialCard key={`${setIndex}-${i}`} {...t} />
            ))
          )}
        </div>

        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-caoba-bg-soft to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-caoba-bg-soft to-transparent" />
      </motion.div>
    </section>
  );
}
