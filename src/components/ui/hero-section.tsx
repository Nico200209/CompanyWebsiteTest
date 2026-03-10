import Image from "next/image";
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { NavbarClient } from "@/components/ui/navbar-client";
import { HeroContent } from "@/components/ui/hero-content";

export function HeroSection() {
  return (
    <>
      {/* ── Top info bar (server-rendered, no layout shift) ── */}
      <div className="border-b border-caoba-border bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 py-4 md:flex-row md:justify-between">
          {/* Logo */}
          <div className="flex flex-col items-center leading-none md:items-start">
            <span className="text-3xl font-bold tracking-wide text-caoba-heading">Caoba</span>
            <span className="text-[11px] tracking-[0.2em] text-caoba-body">Consulting &amp; Investment</span>
          </div>

          {/* Contact items */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:justify-end">
            <div className="flex items-start gap-2">
              <IoLocationOutline className="mt-0.5 h-5 w-5 shrink-0 text-caoba-heading" />
              <div className="text-xs leading-5">
                <p className="font-semibold text-caoba-heading">República Dominicana</p>
                <p className="text-caoba-body">Av. Sarasota N° 55, Santo Domingo.</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <MdOutlineEmail className="mt-0.5 h-5 w-5 shrink-0 text-caoba-heading" />
              <div className="text-xs leading-5">
                <p className="font-semibold text-caoba-heading">info@caobaconsultores.com</p>
                <p className="text-caoba-body">Horario de atención: 09:00am – 06:00pm</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <MdOutlinePhone className="mt-0.5 h-5 w-5 shrink-0 text-caoba-heading" />
              <div className="text-xs leading-5">
                <p className="font-semibold text-caoba-heading">+1 (849) 507-7413</p>
                <p className="text-caoba-body">Contáctanos</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Navbar (client — only interactive part) ────────── */}
      <nav className="sticky top-0 z-50 bg-caoba-primary shadow-md">
        <NavbarClient />
      </nav>

      {/* ── Hero (background image server-rendered) ─────────── */}
      <section id="inicio" className="relative flex min-h-[90vh] items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&auto=format&fit=crop&q=80"
          alt="Sala de reuniones Caoba Consulting"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-caoba-primary/65" />

        {/* Client: animated text + social icons */}
        <HeroContent />
      </section>
    </>
  );
}
