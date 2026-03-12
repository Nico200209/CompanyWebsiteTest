"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const pillars = [
  {
    title: "Pasión por la estrategia",
    description:
      "Creemos en el poder de una estrategia bien diseñada para impulsar el éxito organizacional.",
  },
  {
    title: "Pensamiento estratégico",
    description:
      "Valoramos el desarrollo continuo de habilidades estratégicas en los equipos, capacitándolos para tomar decisiones informadas.",
  },
  {
    title: "Adaptabilidad y resiliencia",
    description:
      "Fomentamos una cultura de resiliencia y adaptabilidad para que las empresas prosperen en cualquier circunstancia.",
  },
];

/* ── Animated checkmark SVG ─────────────────────────────────────── */
function AnimatedCheck({ inView, delay }: { inView: boolean; delay: number }) {
  return (
    <div className="mt-0.5 shrink-0">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <motion.circle
          cx="10" cy="10" r="9"
          stroke="#d4a020"
          strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={inView ? { pathLength: 1, opacity: 1 } : {}}
          transition={{ duration: 0.7, delay, ease: "easeOut" }}
        />
        <motion.path
          d="M6 10l3 3 5-5"
          stroke="#d4a020"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={inView ? { pathLength: 1, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: delay + 0.5, ease: "easeOut" }}
        />
      </svg>
    </div>
  );
}

export function NosotrosFilosofiaSection() {
  // Ref placed on "Nuestros Pilares" subheading — midway through the section —
  // so the heading + description above are visible before anything animates.
  const triggerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(triggerRef, { once: true, amount: 0.4 });

  return (
    <section className="bg-caoba-primary-dark overflow-hidden py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">

          {/* ── Left: text + pillars ── */}
          <div>

            {/* Heading — no trigger yet, just fades in when section enters */}
            <motion.h2
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="mb-6 text-4xl font-light leading-tight text-white lg:text-5xl"
            >
              Filosofía{" "}
              <strong className="font-black">de trabajo</strong>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.85, delay: 0.2, ease: "easeOut" }}
              className="mb-10 text-sm leading-relaxed text-white/60"
            >
              Transformamos la manera en la que las organizaciones piensan sobre
              su desarrollo estratégico. Cada empresa tiene un potencial único que
              necesita una estrategia hecha a medida, con un enfoque en la
              formación continua de su equipo para generar impacto duradero.
            </motion.p>

            {/* ── Trigger point: pillar animations fire when this label is almost fully visible ── */}
            <div ref={triggerRef}>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="mb-8 text-2xl font-light text-white"
              >
                Nuestros <strong className="font-black">Pilares</strong>
              </motion.p>

              <div className="flex flex-col gap-7">
                {pillars.map((p, i) => (
                  <motion.div
                    key={p.title}
                    initial={{ opacity: 0, x: -28 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.8,
                      delay: 0.2 + i * 0.25,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="flex gap-4"
                  >
                    <AnimatedCheck inView={inView} delay={0.3 + i * 0.25} />
                    <div>
                      <p className="mb-1 text-xs font-black uppercase tracking-[0.18em] text-white">
                        {p.title}
                      </p>
                      <p className="text-xs leading-relaxed text-white/50">
                        {p.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right: image ── */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/3] overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&auto=format&fit=crop&q=80"
              alt="Filosofía de trabajo Caoba"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 border border-caoba-accent/20" />
            <div className="absolute bottom-0 left-0 h-12 w-1 bg-caoba-accent" />
            <div className="absolute bottom-0 left-0 h-1 w-12 bg-caoba-accent" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
