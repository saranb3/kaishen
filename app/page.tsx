export default function Home() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center gap-3 text-center">
      <p className="rounded-full bg-jade-soft px-3 py-1 text-xs font-medium text-jade">
        Ledger empty
      </p>
      <h2 className="font-display text-2xl">No transactions yet</h2>
      <p className="max-w-[28ch] text-sm text-ink-soft">
        Link a bank account to start pulling in spending automatically.
      </p>
    </section>
  );
}
