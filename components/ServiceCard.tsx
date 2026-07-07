export function ServiceCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="lotus-card rounded-2xl p-6 transition hover:-translate-y-1 hover:border-roseGold/50">
      <h3 className="font-serif text-xl font-semibold text-softRose">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-ivory/68">{body}</p>
    </div>
  );
}
