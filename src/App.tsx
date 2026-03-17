import './App.css'

function App() {
  return (
    <div className="page">
      <header className="hero-header">
        <nav className="top-nav">
          <div className="brand">
            <span className="brand-mark" aria-hidden="true">
              hd.
            </span>
          </div>

          <ul className="nav-links">
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#case-studies">Case Studies</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
          </ul>

          <a className="cta-ghost" href="mailto:hello@alexcarter.studio">
            Let&apos;s talk
          </a>
        </nav>

        <div className="hero-body">
          <div className="copy">
            <p className="eyebrow">Product designer · Frontend engineer</p>
            <h1 className="hero-title">
              I design calm, confident experiences for fast-moving teams.
            </h1>
            <p className="lede">
              Blending design systems thinking with pragmatic code to ship polished web
              products—brand stories, SaaS dashboards, and everything in between.
            </p>

            <div className="actions">
              <a className="cta-primary" href="#projects">
                View projects
              </a>
              <a className="cta-secondary" href="#contact">
                Download résumé
              </a>
            </div>

            <div className="meta">
              <div className="pill">
                <span className="pill-label">Current</span>
                <span className="pill-value">NYC · Remote</span>
              </div>
              <div className="pill">
                <span className="pill-label">Focus</span>
                <span className="pill-value">Design systems & dashboards</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default App
