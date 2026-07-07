import { ArrowRight } from "lucide-react";
import { Container } from "@/components/Container";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";

const services = [
  ["Brand Identity", "Logo direction, brand colors, voice, and a professional visual foundation."],
  ["Business Documents", "Invoices, work orders, customer forms, pricing sheets, and polished documents."],
  ["Interactive Forms", "Clean forms for clients, employees, leads, revisions, and file collection."],
  ["Websites", "Modern website foundations designed to be simple, elegant, and easy to grow."],
  ["Marketing Graphics", "Flyers, social posts, covers, ads, banners, and launch visuals."],
  ["AI Automation", "Practical systems that save time without removing the human touch."]
];

const portfolio = ["Brand Suite", "Client Form", "Invoice System", "Website Foundation", "Social Campaign", "Business Card"];

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,#2B1D1A_0%,#090708_42%,#090708_100%)] text-ivory">
      <Navbar />

      <section id="home" className="py-24 sm:py-32">
        <Container className="grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-roseGold">Black Lotus Branding</p>
            <h1 className="font-serif text-5xl font-semibold leading-tight text-ivory sm:text-7xl">
              Turning Ideas Into Identities
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-9 text-ivory/72">
              Premium branding, websites, business documents, and form systems for small businesses that deserve to look established without breaking their budget.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a href="#services" className="inline-flex items-center justify-center gap-2 rounded-full bg-roseGold px-7 py-3 font-semibold text-lotusBlack transition hover:bg-softRose">
                Explore Services <ArrowRight size={18} />
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-roseGold/40 px-7 py-3 font-semibold text-softRose transition hover:bg-roseGold hover:text-lotusBlack">
                Request Project
              </a>
            </div>
          </div>

          <div className="lotus-card rounded-[2rem] p-8">
            <div className="rounded-[1.5rem] border border-roseGold/20 bg-lotusBlack/70 p-8 text-center">
              <p className="font-serif text-3xl text-softRose">People over Paychecks</p>
              <p className="mt-5 text-sm leading-8 text-ivory/65">
                Human-designed brand foundations created with care, clarity, and a mission to make professional identity accessible.
              </p>
              <div className="mt-8 grid gap-4 text-left sm:grid-cols-2">
                <div className="rounded-2xl border border-roseGold/15 p-4">
                  <p className="text-2xl font-semibold text-softRose">75%</p>
                  <p className="text-xs text-ivory/60">below market focus</p>
                </div>
                <div className="rounded-2xl border border-roseGold/15 p-4">
                  <p className="text-2xl font-semibold text-softRose">100%</p>
                  <p className="text-xs text-ivory/60">human guided work</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="services" className="py-20">
        <Container>
          <SectionHeader eyebrow="Services" title="Clean systems for serious small businesses" body="V1 keeps the offer clear, organized, and stable so the website can grow without breaking." />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map(([title, body]) => <ServiceCard key={title} title={title} body={body} />)}
          </div>
        </Container>
      </section>

      <section id="portfolio" className="py-20">
        <Container>
          <SectionHeader eyebrow="Portfolio" title="Simple preview grid" body="Replace these placeholders with real client work as your project library grows." />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {portfolio.map((item) => (
              <div key={item} className="lotus-card flex min-h-52 items-end rounded-3xl p-6">
                <p className="font-serif text-2xl text-softRose">{item}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="about" className="py-20">
        <Container className="grid gap-8 lg:grid-cols-2">
          <div>
            <SectionHeader eyebrow="About" title="Built for identity, not confusion" />
          </div>
          <div className="space-y-5 text-base leading-8 text-ivory/72">
            <p>
              Black Lotus Branding helps businesses turn rough ideas into polished identities with elegant design, clear documents, and practical digital systems.
            </p>
            <p>
              The mission is simple: give small businesses access to premium presentation without forcing them to pay agency-level prices before they are ready.
            </p>
            <p className="font-semibold text-softRose">Minimal. Modern. Elegant. Human designed.</p>
          </div>
        </Container>
      </section>

      <section id="contact" className="py-20">
        <Container>
          <SectionHeader eyebrow="Contact" title="Request a project" body="This V1 form is visual only. In V1.3, it can be connected to email, a database, or a client portal." />
          <ContactForm />
        </Container>
      </section>

      <Footer />
    </main>
  );
}
