"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { HiOutlineArrowRight } from "react-icons/hi";

/* ── Section 1 data ─────────────────────────────────────────────── */
const features = [
  {
    number: "01",
    title: "Nuestra Misión",
    description:
      "Somos un socio estratégico para empresas e instituciones que necesitan definir y/o alinear su norte estratégico.",
  },
  {
    number: "02",
    title: "Nuestra Visión",
    description:
      "Impulsar la transformación estratégica de empresas e instituciones, asegurando su éxito a largo plazo a través de un crecimiento sostenible y equipos preparados para los desafíos del futuro.",
  },
];

/* ── Section 2 data ─────────────────────────────────────────────── */
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
        {/* Circle */}
        <motion.circle
          cx="10" cy="10" r="9"
          stroke="#d4a020"
          strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={inView ? { pathLength: 1, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay, ease: "easeOut" }}
        />
        {/* Checkmark */}
        <motion.path
          d="M6 10l3 3 5-5"
          stroke="#d4a020"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={inView ? { pathLength: 1, opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: delay + 0.3, ease: "easeOut" }}
        />
      </svg>
    </div>
  );
}

/* ── Component ──────────────────────────────────────────────────── */
export function NosotrosClient() {
  const s1Ref = useRef<HTMLDivElement>(null);
  const s2Ref = useRef<HTMLDivElement>(null);
  const s1InView = useInView(s1Ref, { once: true, amount: 0.35 });
  const s2InView = useInView(s2Ref, { once: true, amount: 0.3 });

  return (
    <>
      {/* ══════════════════════════════════════════════════════════════
          SECTION 1 — Somos tu socio estratégico
      ══════════════════════════════════════════════════════════════ */}
      <section className="bg-caoba-primary overflow-hidden">
        <div ref={s1Ref} className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr]">

            {/* Image panel */}
            <div className="relative min-h-[340px] lg:min-h-0">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&auto=format&fit=crop&q=80"
                alt="Equipo Caoba Consulting"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-caoba-primary/30" />
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-caoba-primary/90 to-transparent" />
              <div className="absolute right-0 top-0 bottom-0 w-1 bg-caoba-accent" />
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={s1InView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute bottom-8 left-8 right-8"
              >
                <p className="text-xs font-bold tracking-[0.22em] text-caoba-accent uppercase mb-1">
                  Caoba Consulting &amp; Investment
                </p>
                <p className="text-white/80 text-xs leading-relaxed">
                  Más de 15 años transformando organizaciones en América Latina.
                </p>
              </motion.div>
            </div>

            {/* Content panel */}
            <div className="flex flex-col justify-center px-10 py-20 lg:px-16">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={s1InView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="mb-5 text-xs font-bold tracking-[0.25em] text-caoba-accent uppercase"
              >
                Sobre Caoba Consulting &amp; Investment
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={s1InView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-6 text-4xl font-light leading-tight text-white lg:text-5xl"
              >
                Somos tu{" "}
                <strong className="font-black">socio estratégico</strong>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={s1InView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.2 }}
                className="mb-3 text-base leading-relaxed text-white/70"
              >
                Desafiamos el status quo para garantizar que nuestros clientes no solo
                sobrevivan, sino que prosperen.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={s1InView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.25 }}
                className="mb-10 text-sm leading-relaxed text-white/50"
              >
                Somos un socio estratégico para empresas e instituciones que necesitan
                definir y/o alinear su norte estratégico.
              </motion.p>

              <motion.div
                initial={{ scaleX: 0, originX: 0 }}
                animate={s1InView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-10 h-px w-full bg-white/10"
              />

              <div className="mb-10 grid grid-cols-1 gap-0 sm:grid-cols-2">
                {features.map((f, i) => (
                  <motion.div
                    key={f.number}
                    initial={{ opacity: 0, x: 16 }}
                    animate={s1InView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.35 + i * 0.1 }}
                    className="flex gap-4 border-b border-white/8 py-5 pr-6 last:border-0 sm:[&:nth-child(odd)]:border-r sm:[&:nth-child(odd)]:border-white/8 sm:[&:nth-child(even)]:pl-6"
                  >
                    <span className="mt-0.5 shrink-0 text-xs font-black tracking-widest text-caoba-accent">
                      {f.number}
                    </span>
                    <div>
                      <p className="mb-1 text-xs font-black uppercase tracking-wider text-white">
                        {f.title}
                      </p>
                      <p className="text-xs leading-relaxed text-white/50">
                        {f.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={s1InView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.75 }}
              >
                <a
                  href="/#contacto"
                  className="inline-flex items-center gap-3 rounded-sm bg-caoba-accent px-6 py-3 text-xs font-black uppercase tracking-widest text-caoba-primary-dark transition-colors hover:bg-caoba-accent-hover"
                >
                  Hablemos sobre tu proyecto
                  <HiOutlineArrowRight className="h-4 w-4" />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 2 — Filosofía de trabajo
      ══════════════════════════════════════════════════════════════ */}
      <section className="bg-caoba-primary-dark overflow-hidden py-24">
        <div ref={s2Ref} className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">

            {/* Left: text + pillars */}
            <div>
              {/* Heading */}
              <div className="overflow-hidden mb-6">
                <motion.h2
                  initial={{ y: 60, opacity: 0 }}
                  animate={s2InView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="text-4xl font-light leading-tight text-white lg:text-5xl"
                >
                  Filosofía{" "}
                  <strong className="font-black">de trabajo</strong>
                </motion.h2>
              </div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={s2InView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-10 text-sm leading-relaxed text-white/60"
              >
                Transformamos la manera en la que las organizaciones piensan sobre
                su desarrollo estratégico. Cada empresa tiene un potencial único que
                necesita una estrategia hecha a medida, con un enfoque en la
                formación continua de su equipo para generar impacto duradero.
              </motion.p>

              {/* Pillars label */}
              <motion.p
                initial={{ opacity: 0, x: -16 }}
                animate={s2InView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mb-6 text-2xl font-light text-white"
              >
                Nuestros <strong className="font-black">Pilares</strong>
              </motion.p>

              {/* Pillar items */}
              <div className="flex flex-col gap-6">
                {pillars.map((p, i) => (
                  <motion.div
                    key={p.title}
                    initial={{ opacity: 0, x: -24 }}
                    animate={s2InView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.55,
                      delay: 0.4 + i * 0.15,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="flex gap-4"
                  >
                    <AnimatedCheck inView={s2InView} delay={0.5 + i * 0.15} />
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

            {/* Right: image */}
            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.97 }}
              animate={s2InView ? { opacity: 1, x: 0, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[4/3] overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&auto=format&fit=crop&q=80"
                alt="Filosofía de trabajo Caoba"
                fill
                className="object-cover"
              />
              {/* Subtle gold border accent */}
              <div className="absolute inset-0 border border-caoba-accent/20" />
              {/* Bottom-left gold corner */}
              <div className="absolute bottom-0 left-0 h-12 w-1 bg-caoba-accent" />
              <div className="absolute bottom-0 left-0 h-1 w-12 bg-caoba-accent" />
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}
