export function ContactForm() {
  return (
    <form className="lotus-card mx-auto grid max-w-3xl gap-4 rounded-3xl p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <input className="rounded-xl border border-roseGold/20 bg-lotusBlack px-4 py-3 text-ivory outline-none focus:border-roseGold" placeholder="Name" />
        <input className="rounded-xl border border-roseGold/20 bg-lotusBlack px-4 py-3 text-ivory outline-none focus:border-roseGold" placeholder="Business" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <input className="rounded-xl border border-roseGold/20 bg-lotusBlack px-4 py-3 text-ivory outline-none focus:border-roseGold" placeholder="Email" type="email" />
        <input className="rounded-xl border border-roseGold/20 bg-lotusBlack px-4 py-3 text-ivory outline-none focus:border-roseGold" placeholder="Phone" />
      </div>
      <textarea className="min-h-32 rounded-xl border border-roseGold/20 bg-lotusBlack px-4 py-3 text-ivory outline-none focus:border-roseGold" placeholder="Project description" />
      <div className="grid gap-4 sm:grid-cols-2">
        <input className="rounded-xl border border-roseGold/20 bg-lotusBlack px-4 py-3 text-ivory outline-none focus:border-roseGold" placeholder="Budget" />
        <input className="rounded-xl border border-roseGold/20 bg-lotusBlack px-4 py-3 text-ivory outline-none focus:border-roseGold" placeholder="Timeline" />
      </div>
      <button type="button" className="rounded-full bg-roseGold px-6 py-3 font-semibold text-lotusBlack transition hover:bg-softRose">
        Submit Request
      </button>
    </form>
  );
}
