import { Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/icons";
import { site, telLink, waLink } from "@/lib/site";

/**
 * Sticky bottom action bar on mobile, most ad traffic arrives on phones,
 * so call / WhatsApp / demo stay one thumb-tap away at all times.
 */
export default function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-md lg:hidden">
      <div className="mx-auto flex max-w-md items-center gap-2.5">
        <a
          href={telLink}
          aria-label={`Call ${site.phoneDisplay}`}
          className="grid size-12 shrink-0 place-items-center rounded-full border border-line bg-white text-ink"
        >
          <Phone className="size-5" aria-hidden="true" />
        </a>
        <a
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="grid size-12 shrink-0 place-items-center rounded-full bg-wa text-white"
        >
          <WhatsAppIcon className="size-6" />
        </a>
        <a
          href="#enquiry"
          className="flex h-12 flex-1 items-center justify-center rounded-full bg-ink text-[0.95rem] font-semibold text-white"
        >
          Book Free Demo
        </a>
      </div>
    </div>
  );
}
