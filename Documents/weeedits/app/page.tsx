export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-24">
      <h1 className="font-display text-5xl font-extrabold tracking-tight">
        Edits that make people stop scrolling.
      </h1>
      <p className="mt-4 text-lg text-text-secondary">
        Design tokens test page. If the background is near black and the button is purple, Part 1 is wired up.
      </p>
      <button className="mt-8 h-11 rounded-md bg-accent-500 px-5 font-semibold text-white transition hover:bg-accent-600">
        See pricing
      </button>
    </main>
  );
}