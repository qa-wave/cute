import Link from "next/link";

const moods = [
  "soft motion",
  "tiny delight",
  "warm light",
  "clean output",
];

export default function Home() {
  return (
    <main className="min-h-svh bg-[#091822] text-white">
      <section
        className="relative flex min-h-svh overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/cute-bg.png')" }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(9,24,34,0.70)_0%,rgba(9,24,34,0.40)_42%,rgba(9,24,34,0.06)_100%)]" />

        <div className="relative z-10 flex min-h-svh w-full flex-col px-6 py-5 sm:px-10 lg:px-16">
          <header className="flex items-center justify-between gap-6">
            <Link
              href="/"
              className="font-mono text-sm font-semibold tracking-normal text-white/90"
            >
              cute.qawave.ai
            </Link>
            <span className="text-sm font-medium text-white/70">QA Wave</span>
          </header>

          <div className="flex flex-1 items-center">
            <div className="max-w-3xl py-16">
              <p className="mb-5 font-mono text-sm font-semibold uppercase tracking-normal text-[#ffd166]">
                Small web experiments
              </p>
              <h1 className="max-w-2xl text-5xl font-black leading-none tracking-normal text-white sm:text-6xl lg:text-7xl">
                Cute things, shipped clean.
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-white/82 sm:text-xl">
                A tiny place for playful prototypes, polished previews, and
                soft little ideas that need their own URL.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#mood"
                  className="inline-flex min-h-12 items-center justify-center rounded-md bg-white px-6 text-base font-bold text-[#091822] transition hover:bg-[#ffd166] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#091822]"
                >
                  Open mood
                </a>
                <a
                  href="https://qawave.ai"
                  className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/55 px-6 text-base font-bold text-white transition hover:border-white hover:bg-white/12 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#091822]"
                >
                  qawave.ai
                </a>
              </div>
            </div>
          </div>

          <section
            id="mood"
            aria-label="Mood"
            className="mb-4 grid gap-2 border-t border-white/25 pt-4 sm:grid-cols-4"
          >
            {moods.map((mood) => (
              <div
                key={mood}
                className="min-h-14 rounded-md border border-white/20 bg-white/10 px-4 py-3 text-sm font-semibold text-white/88 backdrop-blur-sm"
              >
                {mood}
              </div>
            ))}
          </section>
        </div>
      </section>
    </main>
  );
}
