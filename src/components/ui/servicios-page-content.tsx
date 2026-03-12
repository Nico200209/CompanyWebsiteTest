"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HiOutlineArrowRight } from "react-icons/hi";
import { services, type Service } from "@/lib/services-data";

/* ── Intro section ──────────────────────────────────────────────────── */
function IntroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="overflow-hidden bg-caoba-bg-soft py-24">
      <div ref={ref} className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[5fr_7fr] lg:gap-24">

          {/* Left: label + service count */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55 }}
              className="mb-6 text-xs font-bold tracking-[0.25em] text-caoba-accent uppercase"
            >
              Servicios de Consultoría Estratégica
            </motion.p>

            {/* Animated divider */}
            <motion.div
              initial={{ scaleX: 0, originX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mb-8 h-0.5 w-20 bg-caoba-accent"
            />

            {/* Service count badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.25 }}
              className="relative inline-flex items-center gap-4 border border-caoba-heading/12 px-6 py-4"
            >
              <span className="text-5xl font-black leading-none text-caoba-heading">5</span>
              <span className="text-xs font-bold leading-tight tracking-[0.15em] text-caoba-body uppercase">
                Áreas de<br />Especialización
              </span>
              {/* Corner accents */}
              <div className="absolute left-0 top-0 h-5 w-0.5 bg-caoba-accent" />
              <div className="absolute left-0 top-0 h-0.5 w-5 bg-caoba-accent" />
              <div className="absolute bottom-0 right-0 h-5 w-0.5 bg-caoba-accent" />
              <div className="absolute bottom-0 right-0 h-0.5 w-5 bg-caoba-accent" />
            </motion.div>
          </div>

          {/* Right: description */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="mb-6 text-3xl font-light leading-tight text-caoba-heading md:text-4xl">
              En Caoba Consulting &amp; Investment ofrecemos{" "}
              <strong className="font-black">soluciones estratégicas</strong> diseñadas para
              responder a los desafíos más críticos de las organizaciones modernas.
            </h2>
            <p className="text-sm leading-relaxed text-caoba-body">
              Desde el desarrollo de talento hasta la inteligencia de datos, trabajamos contigo
              para impulsar la eficiencia, la innovación y el crecimiento sostenible.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ── Single service row ─────────────────────────────────────────────── */
function ServiceRow({ service, index }: { service: Service; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });

  const firstQuestion = service.question.split("?")[0] + "?";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.75, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
    >
      <a
        href={`/servicios/${service.slug}`}
        className="group relative flex flex-col gap-6 py-10 lg:flex-row lg:items-center lg:gap-10"
      >
        {/* Hover bg sweep */}
        <motion.div
          className="pointer-events-none absolute inset-0 bg-white/[0.025] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
        {/* Left accent bar */}
        <div className="absolute left-0 top-0 h-full w-0.5 scale-y-0 bg-caoba-accent transition-transform duration-500 origin-top group-hover:scale-y-100" />

        {/* Number */}
        <span className="ml-6 shrink-0 text-[56px] font-black leading-none text-caoba-accent/15 transition-colors duration-300 group-hover:text-caoba-accent/50 lg:text-[72px]">
          {service.number}
        </span>

        {/* Content */}
        <div className="ml-6 flex-1 lg:ml-0">
          <p className="mb-2 text-xl font-black leading-snug text-white transition-colors duration-300 group-hover:text-caoba-accent lg:text-2xl">
            {service.name}
          </p>
          <p className="max-w-2xl text-sm leading-relaxed text-white/45">
            {firstQuestion}
          </p>
        </div>

        {/* CTA arrow */}
        <div className="ml-6 flex shrink-0 items-center gap-2 lg:ml-0 lg:pr-2">
          <span className="text-[10px] font-bold tracking-widest text-white/25 uppercase transition-colors duration-300 group-hover:text-caoba-accent">
            Ver servicio
          </span>
          <span className="translate-x-0 text-caoba-accent/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-caoba-accent">
            <HiOutlineArrowRight className="h-4 w-4" />
          </span>
        </div>
      </a>
    </motion.div>
  );
}

/* ── Services list section ──────────────────────────────────────────── */
function ServicesListSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.05 });

  return (
    <section className="overflow-hidden bg-caoba-primary py-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-4 flex items-center gap-4 border-b border-white/8 pb-6"
        >
          <span className="text-[10px] font-bold tracking-[0.25em] text-caoba-accent uppercase">
            Nuestros Servicios
          </span>
          <div className="h-px flex-1 bg-white/8" />
          <span className="text-[10px] text-white/30">05 especialidades</span>
        </motion.div>

        {/* Rows */}
        <div className="divide-y divide-white/8">
          {services.map((service, i) => (
            <ServiceRow key={service.slug} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Trust / quote section ──────────────────────────────────────────── */
function TrustSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="overflow-hidden bg-caoba-bg-soft py-28">
      <div ref={ref} className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">

          {/* Left: heading */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55 }}
              className="mb-6 text-xs font-bold tracking-[0.25em] text-caoba-accent uppercase"
            >
              Nuestro compromiso
            </motion.p>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                animate={inView ? { y: "0%" } : {}}
                transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl font-light leading-tight text-caoba-heading md:text-5xl lg:text-[3.25rem]"
              >
                Confianza que{" "}
                <strong className="font-black">genera resultados duraderos</strong>
              </motion.h2>
            </div>

            {/* Animated divider */}
            <motion.div
              initial={{ scaleX: 0, originX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-8 h-px w-full bg-caoba-heading/12"
            />
          </div>

          {/* Right: description + CTA */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mb-8 text-base leading-relaxed text-caoba-body">
              Más que implementar soluciones, en Caoba Consulting &amp; Investment dejamos
              capacidades instaladas en tu equipo, ayudándote a crecer de manera{" "}
              <strong className="font-bold text-caoba-heading">autónoma, adaptable y sostenible</strong>{" "}
              frente a los desafíos del mercado.
            </p>

            <p className="mb-8 text-xl font-light text-caoba-heading">
              ¿Listo para llevar tu empresa al{" "}
              <strong className="font-black">siguiente nivel?</strong>
            </p>

            <a
              href="/contacto"
              className="inline-flex items-center gap-3 bg-caoba-accent px-7 py-3.5 text-xs font-black uppercase tracking-widest text-caoba-primary-dark transition-colors hover:bg-caoba-accent-hover"
            >
              Solicita una consulta
              <HiOutlineArrowRight className="h-4 w-4" />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

/* ── Main export ────────────────────────────────────────────────────── */
export function ServiciosPageContent() {
  return (
    <>
      <IntroSection />
      <ServicesListSection />
      <TrustSection />
    </>
  );
}
