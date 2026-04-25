import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check, Megaphone, PhoneCall, CalendarCheck, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-dental.webp";
import consultImg from "@/assets/clinic-consultation.webp";

import { SiteHeader, BOOKING_URL } from "@/components/SiteHeader";
import { FaqItem } from "@/components/FaqItem";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dax Media — 10 Qualified Dental Patients Per Month, Guaranteed" },
      {
        name: "description",
        content:
          "We help implant & cosmetic dental practices in the US get 10+ qualified patient inquiries per month with Meta ads and AI lead qualification — or you pay nothing.",
      },
      { property: "og:title", content: "Dax Media — Patient Generation for Dental Practices" },
      {
        property: "og:description",
        content:
          "Targeted Meta ads + AI that calls, qualifies, and books leads in 60 seconds. 10 qualified patients per month or your retainer back.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div id="top" className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <Stats />
        <Process />
        <Included />
        <WhoFor />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}

/* -------------------- HERO -------------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute -top-40 -right-40 h-[480px] w-[480px] rounded-full bg-brand/15 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-2 lg:py-28">
        <div>
          <p className="eyebrow mb-6">For Implant & Cosmetic Dental Practices in the US</p>
          <h1 className="font-serif text-5xl font-semibold leading-[1.05] text-foreground sm:text-6xl lg:text-[68px]">
            We Get You{" "}
            <span className="text-brand">10 Qualified Dental Patients</span> Per
            Month — Or You Pay Nothing
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Most dental practices lose dozens of potential implant and cosmetic
            patients every month because leads go cold before anyone follows
            up. We fix that with targeted Meta ads and an AI system that calls,
            qualifies, and books every lead within 60 seconds — automatically.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-brand px-7 py-4 text-base font-semibold text-brand-foreground shadow-soft transition-all hover:scale-[1.02] hover:shadow-lg"
            >
              Book Your Free Strategy Call
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <p className="mt-6 max-w-lg text-sm leading-relaxed text-muted-foreground">
            <Check className="mr-1 inline h-4 w-4 text-brand" />
            <span className="font-semibold text-foreground">Guarantee:</span>{" "}
            If we don't deliver 10 qualified patient inquiries in your first 30
            days, we return your retainer. No questions asked.
          </p>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-brand/30 to-transparent blur-2xl" />
          <img
            src={heroImg}
            alt="Professional dentist performing dental procedure"
            className="relative aspect-[4/5] w-full rounded-[2rem] object-cover shadow-card"
          />
        </div>
      </div>
    </section>
  );
}

/* -------------------- STATS -------------------- */
function Stats() {
  const items = [
    { v: "$4,000+", l: "Average value of a single implant case" },
    { v: "60 sec", l: "How fast our AI follows up with every new lead" },
    { v: "10+", l: "Qualified patient inquiries guaranteed per month" },
  ];
  return (
    <section className="border-y border-border bg-secondary/50">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:grid-cols-3">
        {items.map((s) => (
          <div key={s.v} className="text-center sm:text-left">
            <div className="font-serif text-5xl font-semibold text-brand sm:text-6xl">
              {s.v}
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {s.l}
            </p>
          </div>
        ))}
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-7xl px-6 py-5 text-center text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Meta Ads Management · AI Lead Qualification · Automated Booking · 30-Day Money-Back Guarantee
        </p>
      </div>
    </section>
  );
}

/* -------------------- PROCESS -------------------- */
function Process() {
  const steps = [
    {
      n: "01",
      icon: Megaphone,
      title: "We Build and Run Your Ads",
      body: "We create and manage high-converting Facebook and Instagram ad campaigns targeting people in your city who are actively researching dental implants or cosmetic procedures. Every ad is written, designed, and optimized by us — you don't touch a thing.",
    },
    {
      n: "02",
      icon: PhoneCall,
      title: "AI Calls Every Lead Within 60 Seconds",
      body: "The moment someone submits their details, our AI caller rings them automatically. It introduces your practice, asks the right qualifying questions, and filters out anyone who isn't a serious prospect — all without your front desk lifting a finger.",
    },
    {
      n: "03",
      icon: CalendarCheck,
      title: "Qualified Patients Land in Your Calendar",
      body: "Leads who pass qualification get booked directly into your appointment calendar. Your team only speaks to people who have already confirmed their interest, their location, and their intent to move forward.",
    },
  ];
  return (
    <section id="how" className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <p className="eyebrow mb-5">The Process</p>
        <h2 className="font-serif text-4xl font-semibold leading-tight sm:text-5xl">
          From ad to booked consultation in under 24 hours.
        </h2>
        <p className="mt-5 text-lg text-muted-foreground">
          A fully done-for-you system that generates, qualifies, and books
          patients while you focus on dentistry.
        </p>
      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-3">
        {steps.map(({ n, icon: Icon, title, body }) => (
          <article
            key={n}
            className="group relative flex flex-col rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-card"
          >
            <div className="flex items-center justify-between">
              <span className="font-serif text-5xl font-semibold text-brand/30 transition-colors group-hover:text-brand/60">
                {n}
              </span>
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/15 text-brand">
                <Icon className="h-6 w-6" />
              </span>
            </div>
            <h3 className="mt-6 text-xl font-semibold leading-snug">{title}</h3>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              {body}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

/* -------------------- INCLUDED -------------------- */
function Included() {
  const items = [
    {
      title: "Meta Ad Campaign Management",
      body: "Full setup, copywriting, creative, audience targeting, and daily optimization of your Facebook and Instagram campaigns. We handle everything from day one.",
    },
    {
      title: "AI Caller and Lead Qualification",
      body: "Every lead gets called within 60 seconds by our AI system. It qualifies them using natural conversation, confirms their interest, and eliminates time-wasters before they ever reach your front desk.",
    },
    {
      title: "Automated Calendar Booking",
      body: "Qualified leads are booked directly into your practice calendar through our automated system. No manual follow-up required from your team.",
    },
  ];
  return (
    <section id="included" className="bg-secondary/50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-5">What You Get</p>
          <h2 className="font-serif text-4xl font-semibold leading-tight sm:text-5xl">
            A complete done-for-you patient generation system.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            One flat monthly retainer. No long-term contracts. No surprises.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {items.map((it) => (
            <div
              key={it.title}
              className="flex flex-col rounded-2xl border border-border bg-card p-8 shadow-sm"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand text-brand-foreground">
                <Sparkles className="h-5 w-5" />
              </span>
              <h3 className="mt-6 text-xl font-semibold">{it.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {it.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- WHO FOR -------------------- */
function WhoFor() {
  const points = [
    "You offer dental implants or cosmetic procedures and currently have capacity to take on new patients",
    "You're frustrated with leads that go cold, don't pick up, or never book a consultation",
    "You're ready to invest in ad spend to build a consistent flow of new patients",
  ];
  return (
    <section id="who" className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <div className="relative order-last lg:order-first">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-brand/25 to-transparent blur-2xl" />
          <img
            src={consultImg}
            alt="Dentist consultation with patient"
            className="relative aspect-square w-full rounded-[2rem] object-cover shadow-card"
          />
        </div>

        <div>
          <p className="eyebrow mb-5">Is This For You?</p>
          <h2 className="font-serif text-4xl font-semibold leading-tight sm:text-5xl">
            This works best for practices that match this profile.
          </h2>
          <ul className="mt-10 space-y-5">
            {points.map((p) => (
              <li key={p} className="flex gap-4">
                <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand text-brand-foreground">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </span>
                <span className="text-lg leading-relaxed text-foreground">
                  {p}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* -------------------- FAQ -------------------- */
function Faq() {
  const items = [
    {
      q: "We've tried Facebook ads before and they didn't work.",
      a: "Most agencies just run ads and dump raw leads on your front desk. The reason they fail isn't usually the ad — it's the follow-up. By the time someone calls back, the lead has already moved on. Our AI calls every lead within 60 seconds, so you're talking to people while their interest is still hot. That single change is what makes the system work.",
    },
    {
      q: "How do I know the leads will actually be qualified?",
      a: "Our AI follows a structured qualification script: it confirms location, the procedure they're interested in, budget readiness, and timeline. Anyone who doesn't pass never gets booked. Your team only ever speaks to people who are pre-screened and have actively confirmed they want a consultation.",
    },
    {
      q: "What if it doesn't work?",
      a: "If we don't deliver at least 10 qualified patient inquiries in your first 30 days, we refund your retainer in full. You take on zero risk — we either perform or you don't pay.",
    },
    {
      q: "Do I need to be involved day to day?",
      a: "No. The system is fully done-for-you. We handle the ads, the AI caller, the qualification, and the booking. Your only job is to show up to consultations and treat the patients who walk through your door.",
    },
  ];
  return (
    <section id="faq" className="bg-secondary/50 py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-5">FAQ</p>
          <h2 className="font-serif text-4xl font-semibold leading-tight sm:text-5xl">
            Straight answers to what you're probably thinking.
          </h2>
        </div>
        <div className="mt-14">
          {items.map((it) => (
            <FaqItem key={it.q} question={it.q} answer={it.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- FINAL CTA -------------------- */
function FinalCta() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-28 text-center">
      <h2 className="font-serif text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
        Let's Find Out What This Looks Like For Your Practice.
      </h2>
      <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
        We'll tell you whether your city is available, walk you through the
        system, and give you a realistic number of patients to expect in your
        first 30 days. You'll leave with clarity — whether you work with us or
        not.
      </p>
      <a
        href={BOOKING_URL}
        target="_blank"
        rel="noreferrer"
        className="group mt-10 inline-flex items-center gap-2 rounded-full bg-brand px-8 py-4 text-base font-semibold text-brand-foreground shadow-soft transition-transform hover:scale-[1.03]"
      >
        Book Your Free Strategy Call
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </a>
      <p className="mt-5 text-sm text-muted-foreground">Spots are limited.</p>
    </section>
  );
}

/* -------------------- FOOTER -------------------- */
function Footer() {
  return (
    <footer className="w-full border-t border-border bg-black">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <span className="font-serif text-2xl font-semibold tracking-tight text-white">
          Dax Media
        </span>
        <p className="text-xs text-white/70">
          © {new Date().getFullYear()} Dax Media. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
