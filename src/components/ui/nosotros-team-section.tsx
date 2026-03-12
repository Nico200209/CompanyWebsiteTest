"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HiOutlineArrowRight } from "react-icons/hi";
import { FaLinkedinIn } from "react-icons/fa";

const team = [
  {
    name: "Nicole Paetz",
    role: "Founder & CEO",
    bio: "Más de 15 años liderando transformaciones estratégicas en empresas e instituciones de América Latina.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=80",
    linkedin: "#",
    accent: true,
  },
  {
    name: "Matias Garcia",
    role: "Director de Estrategia",
    bio: "Especialista en planificación estratégica sostenible y modelos de inteligencia corporativa aplicada.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&auto=format&fit=crop&q=80",
    linkedin: "#",
    accent: false,
  },
  {
    name: "Cristian Garcia",
    role: "Director de Operaciones",
    bio: "Experto en eficiencia operativa y transformación cultural con enfoque en resultados medibles y sostenibles.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&auto=format&fit=crop&q=80",
    linkedin: "#",
    accent: false,
  },
  {
    name: "Valentina Reyes",
    role: "Consultora de Transformación",
    bio: "Consultora especializada en cierre de brechas de competencias y desarrollo del talento organizacional.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&auto=format&fit=crop&q=80",
    linkedin: "#",
    accent: false,
  },
];

function TeamCard({
  member,
  index,
  inView,
}: {
  member: (typeof team)[number];
  index: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.1 + index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="group relative cursor-default overflow-hidden shadow-md ring-1 ring-black/8"
    >
      {/* ── Photo ── */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <motion.div
          className="h-full w-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover object-top"
          />
        </motion.div>

        {/* Base gradient — always visible */}
        <div className="absolute inset-0 bg-gradient-to-t from-caoba-primary via-caoba-primary/40 to-transparent" />

        {/* Hover overlay — slides up */}
        <motion.div
          initial={{ y: "100%" }}
          whileHover={{ y: "0%" }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 flex flex-col justify-end bg-caoba-primary/90 p-6"
        >
          {/* Gold accent bar at top of overlay */}
          <div className="absolute inset-x-0 top-0 h-1 bg-caoba-accent" />

          <p className="mb-3 text-[10px] font-bold tracking-[0.22em] text-caoba-accent uppercase">
            {member.role}
          </p>
          <p className="mb-5 text-sm leading-relaxed text-white/70">
            {member.bio}
          </p>
          <a
            href={member.linkedin}
            className="inline-flex w-fit items-center gap-2 border border-white/20 px-4 py-2 text-[10px] font-bold tracking-widest text-white/70 transition-colors hover:border-caoba-accent hover:text-caoba-accent uppercase"
          >
            <FaLinkedinIn className="h-3 w-3" />
            LinkedIn
          </a>
        </motion.div>

        {/* CEO accent: gold left border */}
        {member.accent && (
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-caoba-accent" />
        )}
      </div>

      {/* ── Name block (always visible below photo) ── */}
      <div className="border-b border-white/10 bg-caoba-primary px-5 py-4 transition-colors group-hover:border-caoba-accent/40">
        <p className="text-sm font-black tracking-wide text-white">
          {member.name}
        </p>
        <p className="mt-0.5 text-[10px] font-medium tracking-[0.18em] text-caoba-accent uppercase">
          {member.role}
        </p>
      </div>
    </motion.div>
  );
}

export function NosotrosTeamSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section className="bg-caoba-bg-soft overflow-hidden py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* ── Header ── */}
        <div ref={ref} className="mb-16 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-20">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-5 text-xs font-bold tracking-[0.25em] text-caoba-accent uppercase"
            >
              Las personas detrás de Caoba

            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl font-light leading-tight text-caoba-heading md:text-5xl"
            >
              Nuestro{" "}
              <strong className="font-black">equipo</strong>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="flex flex-col justify-end"
          >
            <p className="text-sm leading-relaxed text-caoba-body">
              Un equipo multidisciplinario con experiencia profunda en estrategia,
              operaciones y transformación organizacional. Cada miembro aporta una
              perspectiva única orientada a resultados reales.
            </p>
            <motion.div
              initial={{ scaleX: 0, originX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-6 h-px w-full bg-caoba-heading/15"
            />
          </motion.div>
        </div>

        {/* ── Cards grid ── */}
        <div className="grid grid-cols-2 gap-4 md:gap-5 lg:grid-cols-4">
          {team.map((member, i) => (
            <TeamCard key={member.name} member={member} index={i} inView={inView} />
          ))}
        </div>

        {/* ── Bottom CTA banner ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="mt-14 overflow-hidden bg-caoba-primary"
        >
          <div className="flex flex-col items-start justify-between gap-6 px-10 py-10 sm:flex-row sm:items-center">
            <div>
              <p className="mb-1 text-[10px] font-bold tracking-[0.22em] text-caoba-accent uppercase">
                Únete al equipo
              </p>
              <p className="text-xl font-light text-white">
                ¿Quieres ser parte de{" "}
                <strong className="font-black">nuestro equipo?</strong>
              </p>
            </div>
            <a
              href="/contacto"
              className="inline-flex shrink-0 items-center gap-3 bg-caoba-accent px-7 py-3.5 text-xs font-black uppercase tracking-widest text-caoba-primary-dark transition-colors hover:bg-caoba-accent-hover"
            >
              Contáctanos
              <HiOutlineArrowRight className="h-4 w-4" />
            </a>
          </div>
          {/* Gold bottom line */}
          <div className="h-1 w-full bg-caoba-accent" />
        </motion.div>

      </div>
    </section>
  );
}
