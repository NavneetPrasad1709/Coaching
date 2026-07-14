"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { CheckCircle, MapPin, Phone } from "lucide-react";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { WhatsAppIcon } from "@/components/ui/icons";
import { EASE } from "@/lib/motion";
import { formOptions } from "@/lib/data";
import { site, waLink, telLink } from "@/lib/site";
import { cn } from "@/lib/utils";

/* ---------------- Shared field styles ---------------- */

const labelCls = "mb-2 block text-xs font-bold uppercase tracking-wide text-gray";

const inputCls =
  "w-full rounded-xl border border-line bg-cream-soft px-4 py-3 text-[0.95rem] text-ink placeholder:text-gray outline-none transition focus:border-ink focus:ring-2 focus:ring-ink/15";

const pillBase =
  "cursor-pointer select-none rounded-full border px-5 py-3 text-sm font-semibold transition-all duration-200 focus-within:ring-2 focus-within:ring-ink/40 focus-within:ring-offset-1";

const pillOff = "border-line bg-cream-soft text-gray hover:border-ink/40 hover:text-ink";

const pillOn = "border-ink bg-ink text-cream";

/* ---------------- Form state ---------------- */

type FormState = {
  parentName: string;
  phone: string;
  studentName: string;
  locality: string;
  city: string;
  cls: string;
  board: string;
  subjects: string;
  tuitionType: string;
};

type ErrorKey = "parentName" | "phone" | "cls" | "board" | "tuitionType";

const EMPTY: FormState = {
  parentName: "",
  phone: "",
  studentName: "",
  locality: "",
  city: "",
  cls: "",
  board: "",
  subjects: "",
  tuitionType: "",
};

/** Accepts 10-digit Indian mobiles, with or without +91 / 0 prefixes and spacing. */
function normalisePhone(raw: string): string | null {
  let digits = raw.replace(/\D/g, "");
  if (digits.length === 12 && digits.startsWith("91")) digits = digits.slice(2);
  if (digits.length === 11 && digits.startsWith("0")) digits = digits.slice(1);
  return /^[6-9]\d{9}$/.test(digits) ? digits : null;
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-1.5 text-xs font-semibold text-coral" role="alert">
      {message}
    </p>
  );
}

/* ---------------- Component ---------------- */

export default function Contact() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<ErrorKey, string>>>({});
  const [sent, setSent] = useState(false);
  // Kept so the success screen can re-offer the link, window.open is blocked
  // in Instagram/Facebook in-app browsers, our main ad traffic source.
  const [waHref, setWaHref] = useState("");

  const setField = (key: keyof FormState) => (value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const next: Partial<Record<ErrorKey, string>> = {};
    const phone = normalisePhone(form.phone);
    if (!form.parentName.trim()) next.parentName = "Please add your name.";
    if (!phone) next.phone = "Enter a valid 10-digit mobile number.";
    if (!form.cls) next.cls = "Select a class.";
    if (!form.board) next.board = "Choose a board.";
    if (!form.tuitionType) next.tuitionType = "Choose a tuition type.";

    if (Object.values(next).some(Boolean)) {
      setErrors(next);
      return;
    }

    const area = [form.locality.trim(), form.city].filter(Boolean).join(", ");
    const subjectsPart = form.subjects.trim() ? `, ${form.subjects.trim()}` : "";
    // Written in the parent's voice, this is the message THEY press send on.
    const message =
      `Hello Santosh Sir, I'm ${form.parentName.trim()}. ` +
      `I'm looking for ${form.tuitionType.toLowerCase()} for ${form.studentName.trim() || "my child"} ` +
      `(Class ${form.cls}, ${form.board}${subjectsPart})${area ? ` in ${area}` : ""}. ` +
      `My number is ${phone}. Please share a free demo slot.`;

    // TODO(integration): POST the payload to a server action / CRM endpoint here
    // (e.g. await submitEnquiry(form)) before, or instead of, the WhatsApp handoff.
    const href = waLink(message);
    setWaHref(href);
    setSent(true);
    // In-app browsers (Instagram/Facebook) often block window.open, the
    // success screen's primary button re-offers the same link either way.
    window.open(href, "_blank", "noopener,noreferrer");
  }

  function reset() {
    setForm(EMPTY);
    setErrors({});
    setSent(false);
    setWaHref("");
  }

  // Reduced motion handled globally by MotionProvider (transform is dropped,
  // opacity still cross-fades), keep the tree identical on server and client.
  const swap = {
    initial: { opacity: 0, y: 14 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
    transition: { duration: 0.5, ease: EASE },
  } as const;

  return (
    <Section id="enquiry" tone="soft">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-12">
          {/* ---- Left: heading + contact methods ---- */}
          <div className="lg:col-span-5">
            <SectionHeading
              align="left"
              title="Tell Us About Your Child"
              sticker="2 min"
              stickerColor="lime"
              description="Share the basics and we'll call you back the same day with a tutor shortlist and a demo slot."
            />

            <div className="mt-10 space-y-4">
              <Reveal delay={0.1}>
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-card transition hover:shadow-lift"
                >
                  <span
                    className="grid size-11 shrink-0 place-items-center rounded-full bg-wa/10 text-wa"
                    aria-hidden="true"
                  >
                    <WhatsAppIcon className="size-5" />
                  </span>
                  <span>
                    <h3 className="text-[0.95rem] font-bold text-ink">
                      Fastest, Chat on WhatsApp
                    </h3>
                    <p className="mt-0.5 text-sm text-gray">
                      Replies within minutes, 8 AM-9 PM
                    </p>
                  </span>
                </a>
              </Reveal>

              <Reveal delay={0.18}>
                <a
                  href={telLink}
                  className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-card transition hover:shadow-lift"
                >
                  <span
                    className="grid size-11 shrink-0 place-items-center rounded-full bg-cream text-ink"
                    aria-hidden="true"
                  >
                    <Phone className="size-5" />
                  </span>
                  <span>
                    <h3 className="text-[0.95rem] font-bold text-ink">
                      Call {site.phoneDisplay}
                    </h3>
                    <p className="mt-0.5 text-sm text-gray">Mon-Sat</p>
                  </span>
                </a>
              </Reveal>

              <Reveal delay={0.26}>
                <div className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-card transition hover:shadow-lift">
                  <span
                    className="grid size-11 shrink-0 place-items-center rounded-full bg-cream text-ink"
                    aria-hidden="true"
                  >
                    <MapPin className="size-5" />
                  </span>
                  <span>
                    <h3 className="text-[0.95rem] font-bold text-ink">
                      Prayagraj &amp; Varanasi
                    </h3>
                    <p className="mt-0.5 text-sm text-gray">
                      Civil Lines, Naini, Jhunsi, Lanka, Sigra, Bhelupur &amp; more · online
                      everywhere
                    </p>
                  </span>
                </div>
              </Reveal>
            </div>
          </div>

          {/* ---- Right: the lead form card ---- */}
          <div className="lg:col-span-7">
            <Reveal delay={0.12}>
              <div className="rounded-3xl bg-white p-7 shadow-lift md:p-9">
                <AnimatePresence mode="wait" initial={false}>
                  {sent ? (
                    <motion.div key="success" {...swap}>
                      <div className="flex flex-col items-center gap-4 py-14 text-center">
                        <CheckCircle className="size-10 text-wa" aria-hidden="true" />
                        <h3 className="font-display text-2xl font-bold text-ink">
                          One step left
                        </h3>
                        <p className="max-w-sm leading-relaxed text-gray">
                          WhatsApp has opened with your details. Press send there and
                          we&apos;ll reply with a tutor shortlist and a demo slot ,
                          usually within minutes, 8 AM-9 PM.
                        </p>
                        <Button
                          href={waHref}
                          variant="whatsapp"
                          size="lg"
                          wa
                          external
                          className="mt-2"
                        >
                          Open WhatsApp &amp; press send
                        </Button>
                        <Button variant="outline" size="md" onClick={reset}>
                          Send another enquiry
                        </Button>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.form key="form" {...swap} onSubmit={handleSubmit} noValidate>
                      <div className="grid gap-5 sm:grid-cols-2">
                        {/* Parent name */}
                        <div>
                          <label htmlFor="enquiry-parent" className={labelCls}>
                            Parent name *
                          </label>
                          <input
                            id="enquiry-parent"
                            type="text"
                            autoComplete="name"
                            value={form.parentName}
                            onChange={(e) => setField("parentName")(e.target.value)}
                            className={inputCls}
                            aria-invalid={!!errors.parentName}
                            aria-describedby={
                              errors.parentName ? "enquiry-parent-error" : undefined
                            }
                          />
                          <FieldError id="enquiry-parent-error" message={errors.parentName} />
                        </div>

                        {/* Phone */}
                        <div>
                          <label htmlFor="enquiry-phone" className={labelCls}>
                            Phone number *
                          </label>
                          <input
                            id="enquiry-phone"
                            type="tel"
                            inputMode="numeric"
                            autoComplete="tel"
                            placeholder="10-digit mobile"
                            value={form.phone}
                            onChange={(e) => setField("phone")(e.target.value)}
                            className={inputCls}
                            aria-invalid={!!errors.phone}
                            aria-describedby={
                              errors.phone ? "enquiry-phone-error" : undefined
                            }
                          />
                          <FieldError id="enquiry-phone-error" message={errors.phone} />
                        </div>

                        {/* Student name */}
                        <div>
                          <label htmlFor="enquiry-student" className={labelCls}>
                            Student name
                          </label>
                          <input
                            id="enquiry-student"
                            type="text"
                            value={form.studentName}
                            onChange={(e) => setField("studentName")(e.target.value)}
                            className={inputCls}
                          />
                        </div>

                        {/* Location + city */}
                        <div>
                          <label htmlFor="enquiry-locality" className={labelCls}>
                            Location
                          </label>
                          <div className="flex gap-2.5">
                            <input
                              id="enquiry-locality"
                              type="text"
                              placeholder="Locality"
                              value={form.locality}
                              onChange={(e) => setField("locality")(e.target.value)}
                              className={cn(inputCls, "min-w-0 flex-1")}
                            />
                            <select
                              aria-label="City"
                              value={form.city}
                              onChange={(e) => setField("city")(e.target.value)}
                              className={cn(inputCls, "w-auto shrink-0")}
                            >
                              <option value="">City</option>
                              {formOptions.cities.map((city) => (
                                <option key={city} value={city}>
                                  {city}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        {/* Class */}
                        <div>
                          <label htmlFor="enquiry-class" className={labelCls}>
                            Class *
                          </label>
                          <select
                            id="enquiry-class"
                            value={form.cls}
                            onChange={(e) => setField("cls")(e.target.value)}
                            className={inputCls}
                            aria-invalid={!!errors.cls}
                            aria-describedby={
                              errors.cls ? "enquiry-class-error" : undefined
                            }
                          >
                            <option value="">Select class</option>
                            {formOptions.classes.map((c) => (
                              <option key={c} value={c}>
                                Class {c}
                              </option>
                            ))}
                          </select>
                          <FieldError id="enquiry-class-error" message={errors.cls} />
                        </div>

                        {/* Board */}
                        <fieldset>
                          <legend className={labelCls}>Board *</legend>
                          <div className="flex flex-wrap gap-2.5">
                            {formOptions.boards.map((board) => (
                              <label
                                key={board}
                                className={cn(
                                  pillBase,
                                  form.board === board ? pillOn : pillOff
                                )}
                              >
                                <input
                                  type="radio"
                                  name="board"
                                  value={board}
                                  checked={form.board === board}
                                  onChange={() => setField("board")(board)}
                                  className="sr-only"
                                  aria-describedby={
                                    errors.board ? "enquiry-board-error" : undefined
                                  }
                                />
                                {board}
                              </label>
                            ))}
                          </div>
                          <FieldError id="enquiry-board-error" message={errors.board} />
                        </fieldset>

                        {/* Subjects */}
                        <div className="sm:col-span-2">
                          <label htmlFor="enquiry-subjects" className={labelCls}>
                            Subjects needed
                          </label>
                          <input
                            id="enquiry-subjects"
                            type="text"
                            placeholder="e.g. Maths, Science"
                            value={form.subjects}
                            onChange={(e) => setField("subjects")(e.target.value)}
                            className={inputCls}
                          />
                        </div>

                        {/* Tuition type */}
                        <fieldset className="sm:col-span-2">
                          <legend className={labelCls}>Tuition type *</legend>
                          <div className="flex flex-wrap gap-2.5">
                            {formOptions.tuitionTypes.map((type) => (
                              <label
                                key={type}
                                className={cn(
                                  pillBase,
                                  form.tuitionType === type ? pillOn : pillOff
                                )}
                              >
                                <input
                                  type="radio"
                                  name="tuitionType"
                                  value={type}
                                  checked={form.tuitionType === type}
                                  onChange={() => setField("tuitionType")(type)}
                                  className="sr-only"
                                  aria-describedby={
                                    errors.tuitionType ? "enquiry-type-error" : undefined
                                  }
                                />
                                {type}
                              </label>
                            ))}
                          </div>
                          <FieldError
                            id="enquiry-type-error"
                            message={errors.tuitionType}
                          />
                        </fieldset>
                      </div>

                      {/* Submit row */}
                      <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <Button
                          variant="primary"
                          size="lg"
                          arrow
                          type="submit"
                          className="w-full sm:w-auto"
                        >
                          Request a callback &amp; demo
                        </Button>
                        <p className="max-w-60 text-xs font-medium text-gray">
                          Opens WhatsApp with your details prefilled, you just press
                          send. No spam.
                        </p>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
