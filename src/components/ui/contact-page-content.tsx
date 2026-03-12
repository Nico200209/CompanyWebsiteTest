"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { HiOutlineArrowRight } from "react-icons/hi";
import {
  MdOutlineEmail,
  MdOutlinePhone,
  MdOutlineLocationOn,
  MdOutlineAccessTime,
} from "react-icons/md";

const contactInfo = [
  {
    icon: MdOutlineLocationOn,
    label: "Nuestra Ubicación",
    value: "Av. Sarasota N° 55, Ensanche Bella Vista. Santo Domingo, República Dominicana.",
    href: undefined,
  },
  {
    icon: MdOutlinePhone,
    label: "Teléfono",
    value: "+1 (849) 507-7413",
    href: "tel:+18495077413",
  },
  {
    icon: MdOutlineEmail,
    label: "Email",
    value: "info@caobaconsultores.com",
    href: "mailto:info@caobaconsultores.com",
  },
  {
    icon: MdOutlineAccessTime,
    label: "Horario de atención",
    value: "09:00am – 06:00pm",
    href: undefined,
  },
];

/* ── Animated input field ─────────────────────────────────────────────── */
function Field({
  id,
  label,
  type = "text",
  placeholder,
  required,
  inView,
  delay,
}: {
  id: string;
  label: string;
  type?: string;
  placeholder: string;
  required?: boolean;
  inView: boolean;
  delay: number;
}) {
  const [focused, setFocused] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      <label
        htmlFor={id}
        className="mb-2 block text-[10px] font-bold tracking-[0.2em] text-caoba-heading/70 uppercase"
      >
        {label}
        {required && <span className="ml-1 text-caoba-accent">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        required={required}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full border-b bg-transparent pb-3 text-sm text-caoba-heading placeholder:text-caoba-body/40 focus:outline-none transition-colors"
        style={{
          borderColor: focused ? "var(--color-caoba-accent, #d4a020)" : "rgba(30,50,60,0.18)",
        }}
      />
    </motion.div>
  );
}

/* ── Contact form ────────────────────────────────────────────────────── */
function ContactForm({ inView }: { inView: boolean }) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-4 border-l-2 border-caoba-accent py-6 pl-7"
        >
          <div className="h-1.5 w-10 bg-caoba-accent" />
          <p className="text-xl font-black text-caoba-heading">¡Mensaje enviado!</p>
          <p className="text-sm leading-relaxed text-caoba-body">
            Gracias por contactarnos. Nos pondremos en contacto contigo a la brevedad posible.
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={handleSubmit}
          className="space-y-9"
          exit={{ opacity: 0 }}
        >
          <Field
            id="nombre"
            label="Nombre completo"
            placeholder="Ej: María García"
            required
            inView={inView}
            delay={0.3}
          />
          <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
            <Field
              id="email"
              label="Email"
              type="email"
              placeholder="correo@empresa.com"
              required
              inView={inView}
              delay={0.4}
            />
            <Field
              id="telefono"
              label="Teléfono"
              type="tel"
              placeholder="+1 (849) 000-0000"
              inView={inView}
              delay={0.45}
            />
          </div>

          {/* Mensaje textarea */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <label
              htmlFor="mensaje"
              className="mb-2 block text-[10px] font-bold tracking-[0.2em] text-caoba-heading/70 uppercase"
            >
              Mensaje <span className="text-caoba-accent">*</span>
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows={5}
              required
              placeholder="¿Cómo podemos ayudarte?"
              className="w-full resize-none border-b border-caoba-heading/18 bg-transparent pb-3 text-sm text-caoba-heading placeholder:text-caoba-body/40 focus:border-caoba-accent focus:outline-none transition-colors"
            />
          </motion.div>

          {/* Submit */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <button
              type="submit"
              className="inline-flex items-center gap-3 bg-caoba-accent px-8 py-4 text-xs font-black uppercase tracking-widest text-caoba-primary-dark transition-colors hover:bg-caoba-accent-hover"
            >
              Enviar mensaje
              <HiOutlineArrowRight className="h-4 w-4" />
            </button>
          </motion.div>
        </motion.form>
      )}
    </AnimatePresence>
  );
}

/* ── Contact info cards ──────────────────────────────────────────────── */
function ContactInfoCards({ inView }: { inView: boolean }) {
  return (
    <div className="flex flex-col gap-0 overflow-hidden border border-caoba-heading/10">
      {contactInfo.map((info, i) => {
        const Icon = info.icon;
        return (
          <motion.div
            key={info.label}
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-start gap-5 border-b border-caoba-heading/8 px-6 py-5 last:border-0"
          >
            <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center bg-caoba-accent/10">
              <Icon className="h-4.5 w-4.5 text-caoba-accent" />
            </div>
            <div>
              <p className="mb-1 text-[10px] font-bold tracking-[0.18em] text-caoba-accent uppercase">
                {info.label}
              </p>
              {info.href ? (
                <a
                  href={info.href}
                  className="text-sm text-caoba-heading transition-colors hover:text-caoba-accent"
                >
                  {info.value}
                </a>
              ) : (
                <p className="text-sm leading-relaxed text-caoba-heading">{info.value}</p>
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

/* ── Map embed ───────────────────────────────────────────────────────── */
function MapEmbed({ inView }: { inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.85, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden"
    >
      {/* Border overlay */}
      <div className="pointer-events-none absolute inset-0 z-10 border border-caoba-accent/25" />
      {/* Corner accents */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-8 w-0.5 bg-caoba-accent" />
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-0.5 w-8 bg-caoba-accent" />
      <div className="pointer-events-none absolute bottom-0 right-0 z-10 h-8 w-0.5 bg-caoba-accent" />
      <div className="pointer-events-none absolute bottom-0 right-0 z-10 h-0.5 w-8 bg-caoba-accent" />

      <iframe
        src="https://maps.google.com/maps?q=Av+Sarasota+55+Ensanche+Bella+Vista+Santo+Domingo+Dominican+Republic&t=&z=16&ie=UTF8&iwloc=&output=embed"
        width="100%"
        height="320"
        style={{ border: 0, display: "block", filter: "grayscale(20%)" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Ubicación Caoba Consulting"
      />
    </motion.div>
  );
}

/* ── Main export ─────────────────────────────────────────────────────── */
export function ContactPageContent() {
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const formInView = useInView(formRef, { once: true, amount: 0.15 });
  const infoInView = useInView(infoRef, { once: true, amount: 0.15 });

  return (
    <section className="overflow-hidden bg-caoba-bg-soft py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-[7fr_5fr]">

          {/* ── Left: Form ── */}
          <div ref={formRef}>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={formInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="mb-3 text-xs font-bold tracking-[0.25em] text-caoba-accent uppercase"
            >
              Reserva una cita · Solicita un servicio
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              animate={formInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mb-4 text-4xl font-light leading-tight text-caoba-heading md:text-5xl"
            >
              Hablemos sobre{" "}
              <strong className="font-black">tu proyecto</strong>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={formInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.2 }}
              className="mb-12 text-sm leading-relaxed text-caoba-body"
            >
              Si tienes alguna pregunta, no dudes en contactarnos. Nuestro equipo estará
              encantado de ayudarte a encontrar la solución estratégica que necesitas.
            </motion.p>

            <ContactForm inView={formInView} />
          </div>

          {/* ── Right: Info + Map ── */}
          <div ref={infoRef} className="flex flex-col gap-8">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={infoInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-xs font-bold tracking-[0.25em] text-caoba-accent uppercase"
            >
              Información de contacto
            </motion.p>

            <ContactInfoCards inView={infoInView} />
            <MapEmbed inView={infoInView} />
          </div>

        </div>
      </div>
    </section>
  );
}
