import Image from "next/image";
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { NavbarClient } from "@/components/ui/navbar-client";
import { HeroContent } from "@/components/ui/hero-content";

export function HeroSection() {
  return (
    <>
      {/* ── Slim contact strip ── */}
      <div className="bg-caoba-primary-dark">
        <div className="mx-auto flex max-w-7xl items-center justify-end gap-0 px-6 py-2 md:gap-0">
          <a href="mailto:info@caobaconsultores.com" className="flex items-center gap-1.5 border-r border-white/10 px-4 text-[11px] text-white/60 transition-colors hover:text-caoba-accent-light">
            <MdOutlineEmail className="h-3.5 w-3.5" />
            info@caobaconsultores.com
          </a>
          <a href="tel:+18495077413" className="flex items-center gap-1.5 border-r border-white/10 px-4 text-[11px] text-white/60 transition-colors hover:text-caoba-accent-light">
            <MdOutlinePhone className="h-3.5 w-3.5" />
            +1 (849) 507-7413
          </a>
          <span className="flex items-center gap-1.5 pl-4 text-[11px] text-white/40">
            <IoLocationOutline className="h-3.5 w-3.5" />
            Santo Domingo, RD
          </span>
        </div>
      </div>

      {/* ── Navbar with logo (client — only interactive part) ── */}
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
