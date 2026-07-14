import { Clock3, Mail, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { WhatsAppIcon } from "@/components/ui/icons";
import { services } from "@/lib/data";
import { mailLink, site, telLink, waLink } from "@/lib/site";

const contactRowClass =
  "inline-flex min-h-11 items-center gap-2.5 text-sm text-mist transition-colors duration-300 hover:text-marigold";

const columnHeadingClass = "font-mono text-[0.7rem] uppercase tracking-[0.2em] text-mist";

const linkClass =
  "inline-flex min-h-11 items-center text-sm text-paper/80 transition-colors duration-300 hover:text-marigold";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="ruled-dark relative overflow-hidden bg-board-deep py-20 text-paper">
      {/* Decorative oversized monogram, clipped by the footer edge */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -right-10 select-none font-display text-[16rem] font-semibold leading-none tracking-tight text-paper/[0.04] sm:text-[22rem]"
      >
        SS
      </div>

      <Container>
        <h2 className="sr-only">Santosh Singh Academy — contact and links</h2>

        <div className="grid grid-cols-2 gap-12 lg:grid-cols-12">
          {/* ---- Brand + contact ---- */}
          <Reveal className="col-span-2 lg:col-span-5">
            <a href="#top" className="inline-flex items-center gap-3.5" aria-label="Back to top">
              <span
                aria-hidden="true"
                className="grid size-11 shrink-0 place-items-center rounded-full bg-marigold font-display text-lg font-semibold text-board-deep"
              >
                SS
              </span>
              <span className="font-display text-2xl font-medium text-paper">{site.brand}</span>
            </a>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-mist">
              Verified tutors for Classes 5&ndash;12, CBSE &amp; ICSE &mdash; at home, online and
              in the classroom. Every engagement starts with a free demo class. Serving families
              across Prayagraj and Varanasi.
            </p>

            <ul className="mt-5 space-y-0.5">
              <li>
                <a href={telLink} className={contactRowClass}>
                  <Phone className="size-4 shrink-0" aria-hidden="true" />
                  Call {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={contactRowClass}
                >
                  <WhatsAppIcon className="size-4 shrink-0" />
                  Chat on WhatsApp
                </a>
              </li>
              <li>
                <a href={mailLink} className={contactRowClass}>
                  <Mail className="size-4 shrink-0" aria-hidden="true" />
                  {site.email}
                </a>
              </li>
              <li>
                <span className="inline-flex min-h-11 items-center gap-2.5 text-sm text-mist">
                  <Clock3 className="size-4 shrink-0" aria-hidden="true" />
                  {site.hours}
                </span>
              </li>
            </ul>
          </Reveal>

          {/* ---- Explore ---- */}
          <Reveal delay={0.1} className="lg:col-span-3 lg:col-start-7">
            <h3 className={columnHeadingClass}>Explore</h3>
            <ul className="mt-2.5 space-y-0.5">
              {site.nav.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={linkClass}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* ---- Services ---- */}
          <Reveal delay={0.18} className="lg:col-span-3">
            <h3 className={columnHeadingClass}>Services</h3>
            <ul className="mt-2.5 space-y-0.5">
              {services.map((service) => (
                <li key={service.title}>
                  <a href="#services" className={linkClass}>
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* ---- Bottom bar ---- */}
        <Reveal delay={0.1} y={16}>
          <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-paper/10 pt-8">
            <p className="font-mono text-xs text-mist">
              &copy; {year} {site.brand}
            </p>
            <p className="font-mono text-xs text-mist">
              Classes 5&ndash;12 &middot; CBSE &amp; ICSE &middot; {site.cities[0]} &mdash;{" "}
              {site.cities[1]}
            </p>
          </div>
        </Reveal>
      </Container>
    </footer>
  );
}
