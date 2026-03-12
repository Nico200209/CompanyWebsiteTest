import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { NavbarClient } from "@/components/ui/navbar-client";
import { FooterSection } from "@/components/ui/footer-section";
import { ServicePageContent } from "@/components/ui/service-page-content";
import { getServiceBySlug, services } from "@/lib/services-data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: `${service.name} — Caoba Consulting & Investment`,
    description: service.tagline,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

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

      {/* ── Animated service content ── */}
      <ServicePageContent service={service} />

      {/* ── Footer ── */}
      <FooterSection />
    </main>
  );
}
