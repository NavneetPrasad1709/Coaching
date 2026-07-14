import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import { WhatsAppIcon } from "@/components/ui/icons";
import { site, telLink, mailLink, waLink } from "@/lib/site";

const serviceLinks = [
  "Home tuition",
  "Online tuition",
  "Offline coaching",
  "One-to-one classes",
  "Small group classes",
  "Teacher hiring",
];

const linkCls =
  "inline-flex min-h-11 items-center text-[0.95rem] text-gray transition-colors hover:text-ink";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-cream">
      <Container className="py-14">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <a href="#top" className="font-display text-4xl font-bold tracking-tight text-ink">
              Santosh&nbsp;Singh<span className="text-leaf">.</span>
            </a>
            <p className="mt-4 max-w-sm leading-relaxed text-gray">
              Verified tutors for Classes 5-12, CBSE &amp; ICSE. Home, online and classroom
              tuition across Prayagraj &amp; Varanasi, first class always free.
            </p>
            <ul className="mt-6 space-y-1">
              <li>
                <a href={telLink} className={linkCls}>
                  <Phone className="mr-2.5 size-4 text-leaf" aria-hidden="true" />
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={waLink()} target="_blank" rel="noopener noreferrer" className={linkCls}>
                  <WhatsAppIcon className="mr-2.5 size-4 text-leaf" />
                  Chat on WhatsApp
                </a>
              </li>
              <li>
                <a href={mailLink} className={linkCls}>
                  <Mail className="mr-2.5 size-4 text-leaf" aria-hidden="true" />
                  {site.email}
                </a>
              </li>
              <li>
                <span className="inline-flex min-h-11 items-center text-[0.95rem] text-gray">
                  <Clock3 className="mr-2.5 size-4 text-leaf" aria-hidden="true" />
                  {site.hours}
                </span>
              </li>
              <li>
                <span className="inline-flex min-h-11 items-center text-[0.95rem] text-gray">
                  <MapPin className="mr-2.5 size-4 text-leaf" aria-hidden="true" />
                  Prayagraj &amp; Varanasi
                </span>
              </li>
            </ul>
          </div>

          <nav aria-label="Footer, explore" className="lg:col-span-3">
            <h3 className="font-display text-lg font-bold text-ink">Explore</h3>
            <ul className="mt-3 space-y-0.5">
              {site.nav.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={linkCls}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer, services" className="lg:col-span-4">
            <h3 className="font-display text-lg font-bold text-ink">Services</h3>
            <ul className="mt-3 space-y-0.5">
              {serviceLinks.map((label) => (
                <li key={label}>
                  <a href="#services" className={linkCls}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-7">
          <p className="text-sm text-gray">
            © {new Date().getFullYear()} {site.brand}. All rights reserved.
          </p>
          <p className="text-sm font-semibold text-gray">
            Classes 5-12 · CBSE &amp; ICSE · Prayagraj, Varanasi
          </p>
        </div>
      </Container>
    </footer>
  );
}
