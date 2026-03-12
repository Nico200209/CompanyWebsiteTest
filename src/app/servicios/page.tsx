import type { Metadata } from "next";
import Image from "next/image";
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { NavbarClient } from "@/components/ui/navbar-client";
import { FooterSection } from "@/components/ui/footer-section";
import { ServiciosPageContent } from "@/components/ui/servicios-page-content";

export const metadata: Metadata = {
  title: "Nuestros Servicios — Caoba Consulting & Investment",
  description:
    "Soluciones estratégicas para responder a los desafíos más críticos de las organizaciones modernas.",
};

export default function ServiciosPage() {
  return (
    <main>
      {/* ── Top strip ── */}
      <div className="bg-caoba-primary-dark">
        <div className="mx-auto flex max-w-7xl items-center justify-end px-6 py-2">
          <a
            href="mailto:info@caobaconsultores.com"
            className="flex items-center gap-1.5 border-r border-white/10 px-4 text-[11px] text-white/60 transition-colors hover:text-caoba-accent-light"
          >
            <MdOutlineEmail className="h-3.5 w-3.5" />
            info@caobaconsultores.com
          </a>
          <a
            href="tel:+18495077413"
            className="flex items-center gap-1.5 border-r border-white/10 px-4 text-[11px] text-white/60 transition-colors hover:text-caoba-accent-light"
          >
            <MdOutlinePhone className="h-3.5 w-3.5" />
            +1 (849) 507-7413
          </a>
          <span className="flex items-center gap-1.5 pl-4 text-[11px] text-white/40">
            <IoLocationOutline className="h-3.5 w-3.5" />
            Santo Domingo, RD
          </span>
        </div>
      </div>

      {/* ── Navbar ── */}
      <nav className="sticky top-0 z-50 bg-caoba-primary shadow-md">
        <NavbarClient />
      </nav>

      {/* ── Hero banner ── */}
      <section className="relative flex min-h-[360px] items-end overflow-hidden bg-caoba-primary">
        <Image
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1920&auto=format&fit=crop&q=80"
          alt="Nuestros Servicios Caoba Consulting"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-caoba-primary/76" />
        {/* Gold bottom accent */}
        <div className="absolute inset-x-0 bottom-0 h-1 bg-caoba-accent" />

        {/* Decorative ghost text */}
        <span className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 select-none text-[160px] font-black leading-none text-white/[0.03] lg:text-[220px]">
          05
        </span>

        <div className="relative mx-auto w-full max-w-7xl px-6 pb-16 pt-28">
          <p className="mb-3 text-[11px] font-bold tracking-[0.25em] text-caoba-accent uppercase">
            Caoba Consulting &amp; Investment
          </p>
          <h1 className="mb-5 text-5xl font-light leading-tight text-white md:text-6xl">
            Nuestros <strong className="font-black">Servicios</strong>
          </h1>
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-[11px] text-white/40">
            <a href="/" className="transition-colors hover:text-white/70">Inicio</a>
            <span>/</span>
            <span className="text-white/70">Nuestros Servicios</span>
          </div>
        </div>
      </section>

      {/* ── Page content ── */}
      <ServiciosPageContent />

      {/* ── Footer ── */}
      <FooterSection />
    </main>
  );
}
