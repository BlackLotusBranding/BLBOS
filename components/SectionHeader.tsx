export function SectionHeader({ eyebrow, title, body }: { eyebrow: string; title: string; body?: string }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-roseGold">{eyebrow}</p>
      <h2 className="font-serif text-3xl font-semibold text-ivory sm:text-5xl">{title}</h2>
      {body ? <p className="mt-5 text-base leading-8 text-ivory/70">{body}</p> : null}
    </div>
  );
}
