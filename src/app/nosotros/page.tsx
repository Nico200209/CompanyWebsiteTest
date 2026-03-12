import { NosotrosClient } from "@/components/ui/nosotros-client";
import { NavbarClient } from "@/components/ui/navbar-client";
import { FooterSection } from "@/components/ui/footer-section";
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nosotros — Caoba Consulting & Investment",
  description:
    "Conoce quiénes somos, nuestra misión, visión y los valores que guían cada decisión en Caoba Consulting & Investment.",
};

export default function NosotrosPage() {
  return (
    <main>
      {/* ── Top strip ── */}
      <div className="bg-caoba-primary-dark">
        <div className="mx-auto flex max-w-7xl items-center justify-end gap-0 px-6 py-2 md:gap-0">
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
      <section className="relative flex min-h-[340px] items-end overflow-hidden bg-caoba-primary">
        <Image
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&auto=format&fit=crop&q=80"
          alt="Equipo Caoba Consulting"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-caoba-primary/70" />
        {/* Gold bottom accent line */}
        <div className="absolute inset-x-0 bottom-0 h-1 bg-caoba-accent" />

        <div className="relative mx-auto w-full max-w-7xl px-6 pb-14 pt-24">
          <p className="mb-3 text-[11px] font-bold tracking-[0.25em] text-caoba-accent uppercase">
            Caoba Consulting &amp; Investment
          </p>
          <h1 className="text-5xl font-light leading-tight text-white md:text-6xl">
            Sobre <strong className="font-black">nosotros</strong>
          </h1>
          {/* Breadcrumb */}
          <div className="mt-5 flex items-center gap-2 text-[11px] text-white/40">
            <a href="/" className="hover:text-white/70 transition-colors">Inicio</a>
            <span>/</span>
            <span className="text-white/70">Nosotros</span>
          </div>
        </div>
      </section>

      {/* ── Animated client sections ── */}
      <NosotrosClient />

      {/* ── Footer ── */}
      <FooterSection />
    </main>
  );
}
