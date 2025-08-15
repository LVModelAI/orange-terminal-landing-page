import React from "react";

const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    aria-hidden="true"
    className="transition-transform duration-200 group-hover:translate-x-1"
  >
    <path
      d="M13 5l7 7-7 7M5 12h14"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function App() {
  return (
    <div className="min-h-screen  bg-neutral-950  text-white relative">
      {/* Animated Blob */}
      <div className="blob" />

      {/* Nav: toned-down borders */}
      <header className="sticky top-0 z-10 flex justify-between items-center px-6 py-3 border-b border-neutral-800 bg-black/60 backdrop-blur">
        <a
          href="/"
          className="flex items-center gap-2 hover:opacity-90 transition"
        >
          <img
            src="/images/orange-terminal.png"
            alt="Orange Terminal"
            width={40}
            height={40}
            className="drop-shadow-[0_0_6px_rgba(234,88,12,0.5)]"
          />
          <span className="text-xl font-semibold text-orange-400 ">
            Orange Terminal
          </span>
        </a>
        <nav className="flex gap-5 items-center">
          <a
            href="#features"
            className="hidden sm:inline-block text-neutral-300 hover:text-white transition"
          >
            Features
          </a>
          <a
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold bg-orange-400 text-black hover:bg-orange-400 transition"
            href="https://app.orangeterminal.com"
            target="_blank"
            rel="noreferrer"
          >
            Launch App
          </a>
        </nav>
      </header>

      <main className="flex-1 flex flex-col gap-10 z-10 ">
        {/* Hero: bigger spacing, neutral headline */}
        <section className="min-h-screen flex flex-col justify-center items-center px-6 text-center max-w-6xl mx-auto relative">
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-5">
            Front Page of Bitcoin DeFi on CORE
          </h1>
          <p className="text-neutral-300 max-w-3xl mx-auto mb-15 text-lg">
            Your AI co-pilot for finding, analyzing, and executing the best BTC
            opportunities on CORE.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-orange-400 text-black hover:bg-orange-400 transition"
              href="https://app.orangeterminal.com"
              target="_blank"
              rel="noreferrer"
            >
              Open App
              <ArrowIcon />
            </a>
          </div>

          {/* Scroll Down */}
          <a
            href="#features"
            className="absolute bottom-20 flex flex-col items-center  text-neutral-400 hover:text-white transition"
          >
            <span className="font-medium">See what it does</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-bounce"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </a>
        </section>

        {/* Features: airy grid, minimal orange accent bar */}
        <section id="features" className="px-6 mb-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-15">
              Welcome to{" "}
              <span className="text-orange-400">Orange Terminal</span> - the
              simplest portal to CORE!
            </h2>
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Intent-centric UX",
                  text: "Say what you want — “best CORE yield” — and get one-click actions.",
                },
                {
                  title: "Cross-protocol search",
                  text: "Compare APYs across native staking, liquid staking, lending, and DEX LPs.",
                },
                {
                  title: "One Click Transactions",
                  text: "Generate ready-to-sign payloads for staking, supplying, borrowing, and LPing.",
                },
                {
                  title: "Portfolio view",
                  text: "See staked CORE, BTC positions, pending rewards, and validator details.",
                },
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="group relative rounded-r-2xl border border-neutral-800 bg-neutral-950/60 p-6 hover:border-neutral-700 transition"
                >
                  <span className="absolute left-0 top-0 h-1.5 w-16 rounded-br-xl bg-orange-400/50 group-hover:bg-orange-400/70 transition" />
                  <h3 className="font-semibold mb-2 text-white">
                    {item.title}
                  </h3>
                  <p className="text-neutral-400">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA band: roomy, neutral, orange only on button */}
        <section className="px-6 ">
          <div className="max-w-6xl mx-auto rounded-3xl border border-neutral-800 bg-neutral-950/60 p-10 text-center">
            <h3 className="text-3xl font-semibold mb-3">
              Ready to explore Bitcoin DeFi on Core?
            </h3>
            <p className="text-neutral-300 mb-6 max-w-2xl mx-auto">
              Open the app, ask, analyse, and execute.
            </p>
            <a
              className="group inline-flex items-center gap-2 px-7 py-3 rounded-xl font-semibold bg-orange-400 text-black hover:bg-orange-400 transition"
              href="https://app.orangeterminal.com"
              target="_blank"
              rel="noreferrer"
            >
              Launch Orange Terminal
              <ArrowIcon />
            </a>
          </div>
        </section>
      </main>

      {/* Footer: neutral border, neutral hover */}
      <footer className="flex justify-between items-center px-6 py-6 border-t border-neutral-800 text-neutral-500 text-sm mt-6">
        <div>© {new Date().getFullYear()} Orange Terminal</div>
        <a
          href="https://github.com/LVModelAI/orange-terminal-v2"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 hover:text-neutral-300 transition"
          aria-label="GitHub repository"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 
               3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 
               0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61 
               -.546-1.387-1.333-1.757-1.333-1.757 
               -1.089-.744.084-.729.084-.729 
               1.205.084 1.84 1.237 1.84 1.237 
               1.07 1.835 2.809 1.305 3.495.998 
               .108-.775.418-1.305.762-1.605 
               -2.665-.3-5.466-1.332-5.466-5.93 
               0-1.31.468-2.38 1.235-3.22 
               -.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23 
               .96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 
               2.28-1.552 3.285-1.23 3.285-1.23 
               .645 1.653.24 2.873.12 3.176 
               .765.84 1.23 1.91 1.23 3.22 
               0 4.61-2.805 5.625-5.475 5.92 
               .43.372.81 1.102.81 2.222 
               0 1.606-.015 2.896-.015 3.286 
               0 .315.21 .69 .825 .57 
               C20.565 22.092 24 17.592 24 12.297 
               c0-6.627-5.373-12-12-12"
            />
          </svg>
        </a>
      </footer>
    </div>
  );
}
