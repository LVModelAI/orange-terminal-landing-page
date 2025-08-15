import React from 'react'

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
    <path d="M13 5l7 7-7 7M5 12h14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function App() {
  return (
    <div className="page">
      <header className="nav">
        <div className="brand">
          <img src="/favicon.ico" alt="" className="dot" />
          <span>Orange&nbsp;Terminal</span>
        </div>
        <nav className="links">
          <a href="#features">Features</a>
          <a href="#how">How it works</a>
          <a href="#builders">For builders</a>
          <a className="cta" href="https://app.orangeterminal.com" target="_blank" rel="noreferrer">Open App</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h1>Front Page of Bitcoin DeFi on CORE</h1>
          <p className="lead">
            Discover, analyze, and act on yield across staking, lending, and liquidity — with one intent-first interface.
          </p>
          <div className="hero-actions">
            <a className="btn primary" href="https://app.orangeterminal.com" target="_blank" rel="noreferrer">
              Open App
              <ArrowIcon />
            </a>
            <a className="btn ghost" href="#features">See what it does</a>
          </div>
          <div className="hero-card">
            <div className="row">
              <span>Live projection</span>
              <strong>4.65% BTC staking</strong>
            </div>
            <div className="row">
              <span>CORE staked</span>
              <strong>240M+</strong>
            </div>
            <div className="row">
              <span>DeFi TVL</span>
              <strong>$386M+</strong>
            </div>
            <small className="muted">Figures are illustrative. Check Core Scan for current metrics.</small>
          </div>
        </section>

        <section id="features" className="section features">
          <h2>What you get</h2>
          <ul className="cards">
            <li>
              <h3>Intent‑centric UX</h3>
              <p>Say what you want — “best CORE yield” — and get one‑click actions.</p>
            </li>
            <li>
              <h3>Cross‑protocol search</h3>
              <p>Compare APYs across native staking, liquid staking, lending, and DEX LPs.</p>
            </li>
            <li>
              <h3>Transaction builders</h3>
              <p>Generate ready‑to‑sign payloads for staking, supplying, borrowing, and LPing.</p>
            </li>
            <li>
              <h3>Portfolio view</h3>
              <p>See staked CORE, BTC positions, pending rewards, and validator details.</p>
            </li>
          </ul>
        </section>

        <section id="how" className="section how">
          <h2>How it works</h2>
          <ol className="steps">
            <li><strong>Connect</strong> your wallet on Core mainnet.</li>
            <li><strong>Ask</strong> for an outcome — yield, stake, supply, or swap.</li>
            <li><strong>Review</strong> the best path from supported protocols and validators.</li>
            <li><strong>Sign</strong> the prepared transaction. Done.</li>
          </ol>
          <div className="grid">
            <div className="panel">
              <h3>Supported intents</h3>
              <ul>
                <li>Stake CORE, Unstake, Claim</li>
                <li>Liquid stake to stCORE, dual staking</li>
                <li>Supply/borrow via Colend</li>
                <li>Provide liquidity on DEX pools</li>
              </ul>
            </div>
            <div className="panel">
              <h3>Tooling under the hood</h3>
              <ul>
                <li>Core staking APIs for validator + rewards</li>
                <li>Colend supply/borrow tx builders</li>
                <li>Portfolio scanners for token balances</li>
                <li>On‑chain data sources for APYs and TVL</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="builders" className="section builders">
          <h2>For builders</h2>
          <p>
            Orange Terminal exposes on‑chain and off‑chain search with transaction creation.
            Integrate via API to power intent‑driven DeFi experiences in your app.
          </p>
          <a className="btn" href="https://app.orangeterminal.com" target="_blank" rel="noreferrer">Try the App</a>
        </section>
      </main>

      <footer className="footer">
        <div>© {new Date().getFullYear()} Orange Terminal</div>
        <a href="https://app.orangeterminal.com" target="_blank" rel="noreferrer">app.orangeterminal.com</a>
      </footer>
    </div>
  )
}
