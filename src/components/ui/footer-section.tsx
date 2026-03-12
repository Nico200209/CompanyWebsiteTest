"use client";

import { useState } from "react";
import { HiOutlineArrowRight } from "react-icons/hi";
import { HiOutlineMapPin, HiOutlinePhone, HiOutlineEnvelope } from "react-icons/hi2";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const services = [
  { label: "Cierre de brechas de competencias organizacionales", href: "/servicios/cierre-de-brechas" },
  { label: "Data y modelos de inteligencia corporativa", href: "/servicios/data-e-inteligencia" },
  { label: "Planificación estratégica sostenible", href: "/servicios/planificacion-estrategica" },
  { label: "Eficiencia operativa con enfoque estratégico", href: "/servicios/eficiencia-operativa" },
  { label: "Transformación cultural y comunicación estratégica", href: "/servicios/transformacion-cultural" },
];

const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Servicios", href: "/servicios" },
  { label: "Contacto", href: "/contacto" },
];

const socials = [
  { icon: FaFacebookF, label: "Facebook", href: "#" },
  { icon: FaLinkedinIn, label: "LinkedIn", href: "#" },
  { icon: FaInstagram, label: "Instagram", href: "#" },
];

export function FooterSection() {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-caoba-primary-dark text-white">

      {/* ── Newsletter band ── */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-caoba-accent mb-1">
              Mantente informado
            </p>
            <h3 className="text-xl font-light text-white">
              Recibe nuestros <strong className="font-black">insights estratégicos</strong>
            </h3>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex w-full max-w-sm items-center gap-2"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Tu correo electrónico"
              className="flex-1 rounded-sm border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/35 focus:border-caoba-accent focus:outline-none focus:ring-0 transition-colors"
            />
            <button
              type="submit"
              className="flex items-center gap-2 rounded-sm bg-caoba-accent px-5 py-2.5 text-xs font-black uppercase tracking-widest text-caoba-primary-dark transition-colors hover:bg-caoba-accent-hover whitespace-nowrap"
            >
              Suscribir
              <HiOutlineArrowRight className="h-3.5 w-3.5" />
            </button>
          </form>
        </div>
      </div>

      {/* ── Main grid ── */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[2fr_1fr_1fr_1.5fr] lg:gap-16">

          {/* Col 1: Brand */}
          <div>
            {/* Logo */}
            <div className="mb-5">
              <p className="text-xl font-black tracking-tight text-white">Caoba</p>
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-caoba-accent">
                Consulting &amp; Investment
              </p>
            </div>

            <p className="mb-8 text-sm leading-relaxed text-white/55">
              Somos tu socio estratégico para liderar y prosperar en un entorno
              dinámico. Transformamos organizaciones con visión, datos y las
              personas correctas.
            </p>

            {/* Social icons */}
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-sm border border-white/15 text-white/50 transition-all hover:border-caoba-accent hover:text-caoba-accent"
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.2em] text-caoba-accent">
              Servicios
            </p>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="group flex gap-2 text-xs text-white/50 transition-colors hover:text-white"
                  >
                    <HiOutlineArrowRight className="mt-[3px] h-3 w-3 shrink-0 self-start text-caoba-accent/50 transition-colors group-hover:text-caoba-accent" />
                    <span className="leading-relaxed">{s.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.2em] text-caoba-accent">
              Navegación
            </p>
            <ul className="space-y-3">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-xs text-white/50 transition-colors hover:text-white"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.2em] text-caoba-accent">
              Contacto
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <HiOutlineMapPin className="mt-0.5 h-4 w-4 shrink-0 text-caoba-accent" />
                <span className="text-xs leading-relaxed text-white/55">
                  Av. Sarasota N° 55, Ensanche Bella Vista,<br />
                  Santo Domingo.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <HiOutlinePhone className="h-4 w-4 shrink-0 text-caoba-accent" />
                <a
                  href="tel:+18495077413"
                  className="text-xs text-white/55 transition-colors hover:text-white"
                >
                  +1 (849) 507-7413
                </a>
              </li>
              <li className="flex items-center gap-3">
                <HiOutlineEnvelope className="h-4 w-4 shrink-0 text-caoba-accent" />
                <a
                  href="mailto:info@caobaconsultores.com"
                  className="text-xs text-white/55 transition-colors hover:text-white"
                >
                  info@caobaconsultores.com
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-center sm:flex-row">
          <p className="text-[11px] text-white/30">
            © {new Date().getFullYear()} Caoba Consulting &amp; Investment. Todos los derechos reservados.
          </p>
          <nav className="flex gap-5">
            {["Política de Privacidad", "Términos de Servicio"].map((t) => (
              <a key={t} href="#" className="text-[11px] text-white/30 transition-colors hover:text-white/60">
                {t}
              </a>
            ))}
          </nav>
        </div>
      </div>

    </footer>
  );
}
