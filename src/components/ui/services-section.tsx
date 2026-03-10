"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HiOutlineArrowRight } from "react-icons/hi";
import { GlareCard } from "@/components/ui/glare-card";

const services = [
  {
    number: "01",
    title: "Cierre de Brechas de Competencias",
    description:
      "¿Su equipo requiere nuevas habilidades para enfrentar los desafíos actuales y futuros? La falta de capacitación está limitando su crecimiento.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=80",
  },
  {
    number: "02",
    title: "Data y Modelos de Inteligencia Corporativa",
    description:
      "¿Toma decisiones basadas en intuición en lugar de datos? La falta de información precisa le impide identificar oportunidades y anticipar riesgos.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
  },
  {
    number: "03",
    title: "Planificación Estratégica Sostenible",
    description:
      "¿Su estrategia actual no está generando los resultados esperados? ¿Le cuesta alinear a su equipo alrededor de objetivos comunes?",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
  },
  {
    number: "04",
    title: "Eficiencia Operativa con Enfoque Estratégico",
    description:
      "¿Sus procesos operativos son lentos, costosos o ineficientes? La falta de optimización consume recursos que podrían impulsar el crecimiento.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80",
  },
  {
    number: "05",
    title: "Transformación Cultural y Comunicación Estratégica",
    description:
      "¿Su cultura organizacional no está alineada con sus objetivos? La falta de comunicación interna genera desmotivación y desalineación.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=80",
  },
];

function ServiceCard({
  service,
  index,
  inView,
}: {
  service: (typeof services)[number];
  index: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: 0.15 + index * 0.08 }}
      className="flex justify-center"
    >
      <GlareCard
        containerClassName="w-full [aspect-ratio:4/3]"
        className="relative overflow-hidden"
      >
        <img
          src={service.image}
          alt={service.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
        <div className="absolute left-5 top-5">
          <span className="text-[11px] font-bold tracking-[0.22em] text-caoba-accent">
            {service.number}
          </span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="mb-2 text-sm font-black uppercase leading-tight tracking-wide text-white">
            {service.title}
          </h3>
          <p className="mb-4 text-xs leading-relaxed text-white/60">
            {service.description}
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-widest text-caoba-accent transition-colors hover:text-caoba-accent-light uppercase"
          >
            Leer más
            <HiOutlineArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </GlareCard>
    </motion.div>
  );
}

export function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="bg-caoba-bg-soft py-24" id="servicios">
      <div className="mx-auto max-w-7xl px-6">

        {/* ── Header ── */}
        <div ref={ref} className="mb-16 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-4 text-xs font-bold tracking-[0.25em] text-caoba-accent uppercase"
          >
            Estrategias integrales para organizaciones que evolucionan con visión, resiliencia y sostenibilidad
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-4xl font-light leading-tight text-caoba-heading md:text-5xl"
          >
            Servicios que fortalecen{" "}
            <strong className="font-black block">tu transformación estratégica</strong>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-caoba-body"
          >
            En Caoba Consulting &amp; Investment acompañamos a las empresas en sus desafíos más
            críticos, combinando diagnóstico riguroso, planificación estratégica, eficiencia
            operativa y transformación cultural.
          </motion.p>
        </div>

        {/* ── Cards: row 1 (3) + row 2 (2 centered) ── */}
        <div className="flex flex-col gap-5">
          {/* Row 1 — 3 cards */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {services.slice(0, 3).map((service, i) => (
              <ServiceCard key={service.number} service={service} index={i} inView={inView} />
            ))}
          </div>
          {/* Row 2 — 2 cards, centered */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:mx-auto sm:w-2/3">
            {services.slice(3).map((service, i) => (
              <ServiceCard key={service.number} service={service} index={i + 3} inView={inView} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
