"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HiOutlineArrowRight } from "react-icons/hi";

/* ── Name split: each word reveals from behind a mask ─────────────── */
function SplitName({ inView }: { inView: boolean }) {
  const words = [
    { text: "Nicole", bold: false },
    { text: "Paetz",  bold: true  },
  ];
  return (
    <h2 className="mb-6 flex flex-wrap gap-x-4 text-5xl leading-tight text-caoba-heading md:text-6xl lg:text-7xl">
      {words.map((w, i) => (
        <span key={w.text} className="overflow-hidden">
          <motion.span
            className={`inline-block ${w.bold ? "font-black" : "font-light"}`}
            initial={{ y: "110%" }}
            animate={inView ? { y: "0%" } : {}}
            transition={{ duration: 0.75, delay: 0.3 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            {w.text}
          </motion.span>
        </span>
      ))}
    </h2>
  );
}

export function NosotrosCEOSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });

  return (
    <section className="bg-caoba-bg overflow-hidden py-24">
      <div ref={ref} className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[5fr_6fr]">

          {/* ── Left: photo with clip-path reveal ── */}
          <div className="relative">
            {/* Decorative background block */}
            <motion.div
              initial={{ scaleY: 0, originY: 1 }}
              animate={inView ? { scaleY: 1 } : {}}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -bottom-6 -left-6 h-full w-full bg-caoba-primary"
            />

            {/* Photo */}
            <motion.div
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              animate={inView ? { clipPath: "inset(0% 0 0 0)" } : {}}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[3/4] overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80"
                alt="Nicole Paetz — Founder Caoba Consulting & Investment"
                fill
                className="object-cover object-top"
              />
              {/* Subtle dark gradient at bottom */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-caoba-primary/60 to-transparent" />
            </motion.div>

            {/* Gold corner accents */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="absolute bottom-0 right-0 h-16 w-1 bg-caoba-accent"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="absolute bottom-0 right-0 h-1 w-16 bg-caoba-accent"
            />
          </div>

          {/* ── Right: content ── */}
          <div className="lg:pl-8">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="mb-6 inline-flex items-center gap-2 border border-caoba-primary/20 bg-caoba-primary px-3 py-1.5"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-caoba-accent" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">
                CEO Caoba
              </span>
            </motion.div>

            {/* Label */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-4 text-[11px] font-bold tracking-[0.25em] text-caoba-accent uppercase"
            >
              Founder Caoba Consulting &amp; Investment
            </motion.p>

            {/* Name — split-word reveal */}
            <SplitName inView={inView} />

            {/* Animated divider line */}
            <motion.div
              initial={{ scaleX: 0, originX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mb-8 h-px w-24 bg-caoba-accent"
            />

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="mb-10 max-w-lg text-base leading-relaxed text-caoba-body"
            >
              Como fundadora de{" "}
              <strong className="font-black text-caoba-heading">Caoba</strong>
              , trabajo con empresas e instituciones para cerrar brechas de
              competencias y fortalecer el desarrollo organizacional, creando
              soluciones prácticas y sostenibles a largo plazo.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.85 }}
            >
              <a
                href="/#contacto"
                className="inline-flex items-center gap-3 rounded-sm bg-caoba-primary px-7 py-3.5 text-xs font-black uppercase tracking-widest text-white transition-colors hover:bg-caoba-primary-light"
              >
                Solicita tu asesoría
                <HiOutlineArrowRight className="h-4 w-4" />
              </a>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
