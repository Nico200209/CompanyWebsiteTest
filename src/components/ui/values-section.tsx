"use client";

import { useRef, useEffect } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { HiOutlineTrendingUp, HiOutlineLightBulb, HiOutlineRefresh } from "react-icons/hi";

/* ── Count-up number ───────────────────────────────────────────────── */
function CountUp({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration: 1.8, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, count, to]);

  return (
    <span ref={ref} className="inline-flex items-baseline">
      <motion.span>{rounded}</motion.span>
      <span>{suffix}</span>
    </span>
  );
}

/* ── Data ──────────────────────────────────────────────────────────── */
const values = [
  {
    number: "01",
    title: "Pasión por la Estrategia",
    description:
      "Creemos en el poder de una estrategia bien diseñada para impulsar el éxito organizacional. Cada decisión que tomamos está respaldada por análisis profundos y un compromiso genuino con los resultados.",
    Icon: HiOutlineTrendingUp,
  },
  {
    number: "02",
    title: "Pensamiento Estratégico",
    description:
      "Valoramos el desarrollo continuo de habilidades estratégicas en los equipos, capacitándolos para tomar decisiones informadas. Cultivamos una mentalidad que anticipa el cambio y actúa con claridad.",
    Icon: HiOutlineLightBulb,
  },
  {
    number: "03",
    title: "Adaptabilidad y Resiliencia",
    description:
      "Fomentamos una cultura de resiliencia y adaptabilidad para que las empresas prosperen en cualquier circunstancia. La capacidad de pivotar con inteligencia es hoy una ventaja competitiva clave.",
    Icon: HiOutlineRefresh,
  },
];

const stats = [
  { to: 15, suffix: "+", label: "Años de experiencia" },
  { to: 100, suffix: "+", label: "Proyectos completados" },
  { to: 98, suffix: "%", label: "Satisfacción de clientes" },
];

// Desktop: 3 cols in max-w-7xl (≈1280px) with gap-8 (32px)
// Each card ≈ (1280 - 64) / 3 ≈ 405px wide → column offset ≈ 437px
const CARD_OFFSET = 440;
const FAN = 28;

/* ── Component ─────────────────────────────────────────────────────── */
export function ValuesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  // Attach to the cards grid: triggers when 55% of the cards are visible,
  // both entering (spread) and leaving (revert). Cards are clearly on screen
  // at that threshold in both scroll directions.
  const inView = useInView(cardsRef, { once: false, amount: 0.55 });

  return (
    <section ref={sectionRef} className="overflow-hidden bg-caoba-primary py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* ── Header: full-width 2-col layout ── */}
        <div className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-20">
          {/* Left: label + heading */}
          <div>
            <p className="mb-5 text-xs font-bold tracking-[0.25em] text-caoba-accent uppercase">
              Consultoría estratégica con visión, datos y equipos capaces de liderar el cambio
            </p>
            <h2 className="text-4xl font-light leading-tight text-white md:text-5xl">
              Impulsamos la transformación{" "}
              <strong className="font-black">real en tu organización</strong>
            </h2>
          </div>

          {/* Right: expanded description */}
          <div className="flex flex-col">
            <p className="text-base leading-loose text-white/60">
              En Caoba Consulting &amp; Investment desafiamos lo convencional para
              entregar soluciones profundas y sostenibles. No nos limitamos a
              entregar diagnósticos: nos involucramos en la evolución real de cada
              organización, integrando análisis estratégico, implementación concreta
              y desarrollo de capacidades internas. Acompañamos a nuestros clientes
              a construir un futuro más competitivo, ágil y alineado con sus
              desafíos actuales — porque el éxito no es un destino, es un proceso
              que se construye con visión, datos y las personas correctas.
            </p>
          </div>
        </div>

        {/* ── Stats row with count-up ── */}
        <div className="mb-16 border-t border-white/10 pt-10">
          <div className="grid grid-cols-3 gap-6 md:gap-0">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`flex flex-col gap-1 ${
                  i > 0 ? "md:border-l md:border-white/10 md:pl-10" : ""
                }`}
              >
                <span className="text-4xl font-black text-caoba-accent md:text-5xl">
                  <CountUp to={s.to} suffix={s.suffix} />
                </span>
                <span className="text-xs tracking-wide text-white/40 uppercase">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Cards: stacked → spread on scroll, reverses on scroll up ── */}
        <div ref={cardsRef} className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {values.map((v, i) => {
            // Stack centered on the grid midpoint.
            // Card 01 (front) sits left-of-center, 02 at center, 03 right-of-center.
            // Fan opens to the right; cards slide outward symmetrically to spread.
            // Formula: (1 - i) * (CARD_OFFSET - FAN)
            //   i=0 → +(CARD_OFFSET - FAN)  card 01 shifts right to center-left
            //   i=1 → 0                     card 02 already at grid center
            //   i=2 → -(CARD_OFFSET - FAN)  card 03 shifts left to center-right
            const initialX = (1 - i) * (CARD_OFFSET - FAN);
            // Rightward tilt — back cards lean right as they peek from behind card 01
            const initialRotate = i * 1.5;
            // Card 2 departs first (longest distance), card 0 last
            const delay = inView ? (values.length - 1 - i) * 0.12 : i * 0.08;

            return (
              <motion.div
                key={v.number}
                style={{ zIndex: values.length - i }}
                initial={{ x: initialX, rotate: initialRotate }}
                animate={
                  inView
                    ? { x: 0, rotate: 0 }
                    : { x: initialX, rotate: initialRotate }
                }
                transition={{
                  duration: 1.5,
                  delay,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative overflow-hidden border-t-2 border-caoba-accent bg-white p-8"
              >
                {/* Ghost number watermark */}
                <span className="pointer-events-none absolute -right-2 -top-5 select-none text-[120px] font-black leading-none text-caoba-heading/[0.05]">
                  {v.number}
                </span>

                {/* Icon */}
                <div className="mb-5 inline-flex items-center justify-center rounded-sm bg-caoba-primary/5 p-3">
                  <v.Icon className="h-6 w-6 text-caoba-accent" />
                </div>

                <p className="mb-3 text-[11px] font-bold tracking-[0.22em] text-caoba-accent uppercase">
                  {v.number}
                </p>
                <h3 className="mb-3 text-sm font-black uppercase tracking-wider text-caoba-heading">
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
