import Link from "next/link";
import { Container } from "./Container";

const nav = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-roseGold/15 bg-lotusBlack/95 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="#home" className="font-serif text-lg font-semibold tracking-[0.22em] text-softRose">
          BLACK LOTUS
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-ivory/75 transition hover:text-softRose">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="#contact" className="rounded-full border border-roseGold/40 px-4 py-2 text-sm text-softRose transition hover:bg-roseGold hover:text-lotusBlack">
          Request Project
        </Link>
      </Container>
    </header>
  );
}
