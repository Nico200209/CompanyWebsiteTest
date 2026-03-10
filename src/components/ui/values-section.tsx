"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const values = [
  {
    number: "01",
    title: "Pasión por la Estrategia",
    description:
      "Creemos en el poder de una estrategia bien diseñada para impulsar el éxito organizacional.",
  },
  {
    number: "02",
    title: "Pensamiento Estratégico",
    description:
      "Valoramos el desarrollo continuo de habilidades estratégicas en los equipos, capacitándolos para tomar decisiones informadas.",
  },
  {
    number: "03",
    title: "Adaptabilidad y Resiliencia",
    description:
      "Fomentamos una cultura de resiliencia y adaptabilidad para que las empresas prosperen en cualquier circunstancia.",
  },
];

// Desktop: 3 cols in max-w-7xl (≈1280px) with gap-8 (32px)
// Each card ≈ (1280 - 64) / 3 ≈ 405px wide → column offset ≈ 437px
const CARD_OFFSET = 440; // px between grid columns
const FAN = 28;          // px each card peeks to the left of the previous

export function ValuesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="overflow-hidden bg-caoba-primary py-28">
      <div className="mx-auto max-w-7xl px-6">

        {/* ── Header ── */}
        <div className="mb-20 max-w-2xl">
          <p className="mb-5 text-xs font-bold tracking-[0.25em] text-caoba-accent uppercase">
            Consultoría estratégica con visión, datos y equipos capaces de liderar el cambio
          </p>
          <h2 className="text-4xl font-light leading-tight text-white md:text-5xl">
            Impulsamos la transformación{" "}
            <strong className="font-black">real en tu organización</strong>
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-white/60">
            En Caoba Consulting &amp; Investment desafiamos lo convencional para
            entregar soluciones profundas y sostenibles. No nos limitamos a
            entregar diagnósticos: nos involucramos en la evolución real de cada
            organización, integrando análisis estratégico, implementación
            concreta y desarrollo de capacidades internas.
          </p>
        </div>

        {/* ── Cards: stacked → spread on scroll ── */}
        <div ref={ref} className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {values.map((v, i) => {
            // All cards start piled near card 0 (leftmost), each peeking FAN px left
            const initialX = i === 0 ? 0 : -(i * CARD_OFFSET + i * FAN);
            const initialRotate = -i * 1.5; // slight tilt = deck-of-cards feel
            // Card 2 starts moving first (longest journey), card 0 last (stays)
            const delay = (values.length - 1 - i) * 0.1;

            return (
              <motion.div
                key={v.number}
                // Card 0 on top of the initial stack (highest z-index)
                style={{ zIndex: values.length - i }}
                initial={{ x: initialX, rotate: initialRotate }}
                animate={inView ? { x: 0, rotate: 0 } : {}}
                transition={{
                  duration: 0.95,
                  delay,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative overflow-hidden border-t-2 border-caoba-accent bg-white p-8"
              >
                {/* Ghost number watermark */}
                <span className="pointer-events-none absolute -right-2 -top-5 select-none text-[120px] font-black leading-none text-caoba-heading/[0.05]">
                  {v.number}
                </span>

                <p className="mb-4 text-[11px] font-bold tracking-[0.22em] text-caoba-accent uppercase">
                  {v.number}
                </p>
                <h3 className="mb-4 text-sm font-black uppercase tracking-wider text-caoba-heading">
                  {v.title}
                </h3>
                <p className="text-sm leading-relaxed text-caoba-body">
                  {v.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
