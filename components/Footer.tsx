import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="border-t border-roseGold/15 py-10">
      <Container className="flex flex-col gap-4 text-center text-sm text-ivory/60 md:flex-row md:items-center md:justify-between md:text-left">
        <p className="font-serif tracking-[0.2em] text-softRose">BLACK LOTUS BRANDING</p>
        <p>© 2026 Black Lotus Branding. Turning Ideas Into Identities.</p>
      </Container>
    </footer>
  );
}
