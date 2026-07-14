/*
  Single source of truth for brand + contact details.
  TODO(client): replace the placeholder phone/WhatsApp/email before going live.
*/

export const site = {
  name: "Santosh Singh",
  brand: "Santosh Singh Academy",
  tagline: "Personal tuition, proven results",
  url: "https://santoshsinghacademy.in", // TODO(client): real domain
  phoneDisplay: "+91 90000 00000", // TODO(client): real number
  phoneE164: "+919000000000",
  whatsappNumber: "919000000000", // digits only, country code first
  email: "hello@santoshsinghacademy.in", // TODO(client): real email
  cities: ["Prayagraj", "Varanasi"] as const,
  hours: "Mon–Sat, 8 AM – 9 PM",
  nav: [
    { label: "Services", href: "#services" },
    { label: "Subjects", href: "#subjects" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Teachers", href: "#teachers" },
    { label: "Results", href: "#results" },
    { label: "FAQ", href: "#faq" },
  ],
} as const;

export const DEFAULT_WA_MESSAGE =
  "Hello Santosh Sir, I'm looking for a tuition teacher for my child. Please share the details.";

/** Build a WhatsApp deep link with a prefilled message. */
export function waLink(message: string = DEFAULT_WA_MESSAGE): string {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const telLink = `tel:${site.phoneE164}`;
export const mailLink = `mailto:${site.email}`;
