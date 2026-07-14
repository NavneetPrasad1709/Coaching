/*
  All page content lives here so copy can be edited without touching components.
  Items marked TODO(client) are representative placeholders — replace with real
  numbers, names and quotes before launch.
*/

import type { LucideIcon } from "lucide-react";
import {
  Home,
  MonitorPlay,
  School,
  UserRound,
  Users,
  BadgeCheck,
  ClipboardCheck,
  MessageSquareText,
  CalendarCheck,
  LineChart,
  ShieldCheck,
  RefreshCcw,
  FileSpreadsheet,
  Clock3,
  Wallet,
  GraduationCap,
} from "lucide-react";

/* ---------------- Stats (hero + trust band) ---------------- */
// TODO(client): confirm real figures.
export const stats = [
  { value: 1200, suffix: "+", label: "Students taught" },
  { value: 50, suffix: "+", label: "Verified tutors" },
  { value: 98, suffix: "%", label: "Parent satisfaction" },
  { value: 10, suffix: "+", label: "Years of teaching" },
] as const;

/* ---------------- Why choose ---------------- */
export const whyChoose: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: BadgeCheck,
    title: "Every tutor is verified",
    body: "Degrees checked, teaching demos reviewed, references called. Only then does a tutor meet your child.",
  },
  {
    icon: ClipboardCheck,
    title: "Matched to your child, not a roster",
    body: "We match on class, board, subject, temperament and learning pace — not on whoever is free.",
  },
  {
    icon: LineChart,
    title: "Progress you can see",
    body: "Monthly tests and a written report after every cycle. You'll know exactly what improved and what's next.",
  },
  {
    icon: MessageSquareText,
    title: "A teacher you can talk to",
    body: "Direct WhatsApp access to your tutor and to Santosh Sir. Questions get answered the same day.",
  },
];

/* ---------------- Services ---------------- */
export const services: {
  icon: LucideIcon;
  title: string;
  body: string;
  points: string[];
}[] = [
  {
    icon: Home,
    title: "Home tuition",
    body: "A verified tutor teaches at your home, on your schedule. The most personal way to learn.",
    points: ["Tutor comes to you", "Fixed weekly timetable", "Parent sits in anytime"],
  },
  {
    icon: MonitorPlay,
    title: "Online tuition",
    body: "Live one-to-one classes with screen sharing, digital whiteboard and recorded revision notes.",
    points: ["Live, not recorded", "Works on any device", "Same tutor every class"],
  },
  {
    icon: School,
    title: "Offline coaching",
    body: "Structured classroom batches in Prayagraj and Varanasi with tests every month.",
    points: ["Small batches", "Monthly test series", "Doubt-clearing hours"],
  },
  {
    icon: UserRound,
    title: "One-to-one classes",
    body: "Full attention on one student. Best for board years, weak subjects, or a confidence rebuild.",
    points: ["Pace set by your child", "Custom study plan", "Weekly parent updates"],
  },
  {
    icon: Users,
    title: "Small group classes",
    body: "Groups of 4–6 students of the same class and board. Peer energy, personal attention.",
    points: ["Max 6 students", "Same board, same level", "Lower fee per student"],
  },
  {
    icon: GraduationCap,
    title: "Teacher hiring & placement",
    body: "Schools and families hire verified, interview-ready teachers through our placement desk.",
    points: ["Pre-screened candidates", "Subject specialists", "Replacement support"],
  },
];

/* ---------------- Classes & boards ---------------- */
export const classGroups = [
  {
    range: "Classes 5–7",
    stage: "Foundation",
    note: "Habits, basics and curiosity. We fix gaps before they become fear.",
    classes: ["5", "6", "7"],
  },
  {
    range: "Classes 8–10",
    stage: "Secondary",
    note: "Concept depth and exam technique. Class 10 boards are prepared for from Class 8.",
    classes: ["8", "9", "10"],
  },
  {
    range: "Classes 11–12",
    stage: "Senior Secondary",
    note: "Stream-specialist tutors for Science and Commerce, with board + entrance alignment.",
    classes: ["11", "12"],
  },
] as const;

export const boards = [
  {
    name: "CBSE",
    full: "Central Board of Secondary Education",
    note: "NCERT-first teaching with sample-paper drills and previous-year analysis.",
  },
  {
    name: "ICSE",
    full: "Indian Certificate of Secondary Education",
    note: "Detail-oriented preparation for ICSE's wider syllabus and language-heavy papers.",
  },
] as const;

/* ---------------- Subjects ---------------- */
export const subjectGroups = [
  {
    group: "Core (Classes 5–10)",
    subjects: ["Mathematics", "Science", "English", "Hindi", "Social Science"],
  },
  {
    group: "Science stream (11–12)",
    subjects: ["Physics", "Chemistry", "Biology", "Mathematics"],
  },
  {
    group: "Commerce stream (11–12)",
    subjects: ["Accountancy", "Economics", "Business Studies"],
  },
  {
    group: "Additional",
    subjects: ["Computer Science", "Any school subject on request"],
  },
] as const;

export const allSubjects = [
  "Mathematics",
  "Science",
  "Physics",
  "Chemistry",
  "Biology",
  "English",
  "Hindi",
  "Social Science",
  "Computer Science",
  "Accountancy",
  "Economics",
  "Business Studies",
] as const;

/* ---------------- How it works ---------------- */
export const steps: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: MessageSquareText,
    title: "Tell us what your child needs",
    body: "Class, board, subjects, and whether you want home, online or classroom tuition. Takes two minutes on WhatsApp or the form below.",
  },
  {
    icon: CalendarCheck,
    title: "Take a free demo class",
    body: "We shortlist a tutor and schedule a no-obligation demo within 24–48 hours. You and your child decide.",
  },
  {
    icon: UserRound,
    title: "Start with your matched tutor",
    body: "A fixed timetable, a study plan for the term, and the same tutor every class. No joining fee.",
  },
  {
    icon: LineChart,
    title: "See the progress, monthly",
    body: "Monthly tests, a written progress report, and a parent call. If it isn't working, we replace the tutor — free.",
  },
];

/* ---------------- Teachers ---------------- */
// TODO(client): replace with real tutor profiles and photos.
export const teachers = [
  {
    name: "Santosh Singh",
    role: "Founder · Mathematics & Science",
    credentials: "M.Sc. Mathematics",
    experience: "12+ years",
    note: "Has personally taught 1,000+ students across Prayagraj and Varanasi.",
    featured: true,
  },
  {
    name: "Priya Mishra",
    role: "Physics & Chemistry (11–12)",
    credentials: "M.Sc. Physics, B.Ed.",
    experience: "8 years",
    note: "Board-exam specialist. Known for making numericals feel routine.",
    featured: false,
  },
  {
    name: "Arvind Tiwari",
    role: "Accountancy & Economics",
    credentials: "M.Com, UGC-NET",
    experience: "9 years",
    note: "Commerce stream lead. Teaches concepts through real business cases.",
    featured: false,
  },
  {
    name: "Neha Srivastava",
    role: "English & Social Science",
    credentials: "M.A. English, B.Ed.",
    experience: "7 years",
    note: "ICSE literature and writing coach. Students stop fearing essays.",
    featured: false,
  },
] as const;

/* ---------------- Success stories ---------------- */
// TODO(client): replace with real student results (with permission).
export const successStories = [
  {
    student: "Aarav S.",
    detail: "Class 10 · CBSE · Prayagraj",
    before: 61,
    after: 92,
    subject: "Mathematics",
    quote:
      "He went from avoiding maths homework to finishing sample papers for fun. The monthly tests showed us the climb, month by month.",
    parent: "Father of Aarav",
  },
  {
    student: "Ananya T.",
    detail: "Class 12 · ICSE · Varanasi",
    before: 68,
    after: 94,
    subject: "Physics",
    quote:
      "One-to-one classes changed how she studies. Her tutor rebuilt the basics first instead of rushing the syllabus.",
    parent: "Mother of Ananya",
  },
  {
    student: "Kabir M.",
    detail: "Class 8 · CBSE · Prayagraj",
    before: 55,
    after: 84,
    subject: "Science",
    quote:
      "The demo class told us everything — the teacher asked Kabir questions for forty minutes before teaching anything.",
    parent: "Father of Kabir",
  },
] as const;

/* ---------------- Parent reviews ---------------- */
// TODO(client): replace with real reviews.
export const reviews = [
  {
    quote:
      "We tried three tutors from local ads before this. The difference is the follow-up — someone actually checks whether my son improved.",
    name: "Rekha Pandey",
    detail: "Parent, Class 9 CBSE · Prayagraj",
  },
  {
    quote:
      "The tutor reached on time for six months straight. The monthly report goes straight to my WhatsApp. This is how it should work.",
    name: "Manoj Gupta",
    detail: "Parent, Class 7 CBSE · Varanasi",
  },
  {
    quote:
      "My daughter is shy and never asked doubts in school. In one-to-one classes she talks the whole hour. Her Chemistry marks show it.",
    name: "Seema Agarwal",
    detail: "Parent, Class 11 Science · Prayagraj",
  },
  {
    quote:
      "We moved from home tuition to online when we shifted cities, and kept the same teacher. Zero disruption in a board year.",
    name: "Vivek Srivastava",
    detail: "Parent, Class 10 ICSE · Varanasi",
  },
] as const;

/* ---------------- Why parents trust us ---------------- */
export const trustPoints: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: ShieldCheck,
    title: "Verified tutors only",
    body: "ID, degree and reference checks on every tutor before their first class.",
  },
  {
    icon: CalendarCheck,
    title: "Free demo, always",
    body: "Every engagement starts with a free demo class. You pay only after you're convinced.",
  },
  {
    icon: RefreshCcw,
    title: "Free tutor replacement",
    body: "If the fit isn't right, we replace the tutor at no cost — no awkward conversation needed.",
  },
  {
    icon: FileSpreadsheet,
    title: "Written monthly reports",
    body: "Test scores, chapters covered and next month's plan — on paper, every month.",
  },
  {
    icon: Clock3,
    title: "Your timings, not ours",
    body: "Early morning, after school, weekends — the timetable is built around your child's day.",
  },
  {
    icon: Wallet,
    title: "No joining fee",
    body: "Transparent monthly fees agreed before classes begin. No registration or hidden charges.",
  },
];

/* ---------------- FAQ ---------------- */
export const faqs = [
  {
    q: "How does the free demo class work?",
    a: "Share your child's class, board and subject on WhatsApp or the enquiry form. Within 24–48 hours we schedule a demo with a shortlisted tutor — at your home, online, or at our centre. There's no fee and no obligation to continue.",
  },
  {
    q: "Which areas of Prayagraj and Varanasi do you cover?",
    a: "Home tutors are available across most localities of both cities. Online classes are available everywhere. Tell us your locality in the enquiry form and we'll confirm tutor availability the same day.",
  },
  {
    q: "What are the monthly fees?",
    a: "Fees depend on the class, subject and format — group classes cost less than one-to-one home tuition. We share the exact fee before the demo class, and there is no joining or registration fee.",
  },
  {
    q: "What if the tutor isn't the right fit?",
    a: "Tell us — that's all. We arrange a replacement tutor at no extra cost. You don't have to have the awkward conversation with the tutor yourself.",
  },
  {
    q: "Do you teach both CBSE and ICSE?",
    a: "Yes. Tutors are matched by board as well as subject, because the two boards demand different preparation styles — NCERT-focused practice for CBSE, and broader, detail-heavy coverage for ICSE.",
  },
  {
    q: "How do online classes work?",
    a: "Live one-to-one classes on Google Meet or Zoom with a digital whiteboard. Your child gets the same tutor every class, homework after each session, and the class notes as a PDF.",
  },
  {
    q: "How will I know my child is improving?",
    a: "Every student takes a monthly test. You receive a written progress report — marks, chapters covered, weak areas, and the plan for next month — plus a parent call with the tutor.",
  },
] as const;

/* ---------------- Lead form options ---------------- */
export const formOptions = {
  classes: ["5", "6", "7", "8", "9", "10", "11", "12"],
  boards: ["CBSE", "ICSE"],
  tuitionTypes: ["Home tuition", "Online tuition", "Offline coaching"],
  cities: ["Prayagraj", "Varanasi", "Other (online)"],
} as const;
