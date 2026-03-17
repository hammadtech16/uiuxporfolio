import { useEffect } from 'react'
import './App.css'

function App() {
  useEffect(() => {
    const cards = document.querySelectorAll('.project-card')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.35 }
    )

    cards.forEach((card) => observer.observe(card))
    return () => observer.disconnect()
  }, [])

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

      <section className="work" id="projects">
        <div className="work-inner">
          <div className="work-copy">
            <p className="eyebrow">Best work</p>
            <h2 className="work-title">Apps & dashboards</h2>
            <p className="work-lede">
              Product stories that balance clarity and delight. These shipped experiences
              brought structure to complex data and kept teams moving quickly.
            </p>
            <a className="cta-primary visit" href="#projects">
              Visit
            </a>
          </div>

          <div className="work-grid">
            <article className="project-card app">
              <div className="project-visual">
                <span className="tag">App</span>
              </div>
              <div className="project-info">
                <h3>Northwind Mobile</h3>
                <p>Inventory and logistics app with calm workflows and crisp typography.</p>
              </div>
            </article>

            <article className="project-card app">
              <div className="project-visual dark">
                <span className="tag">App</span>
              </div>
              <div className="project-info">
                <h3>Habitat Finance</h3>
                <p>Personal finance coach that surfaces insights with playful motion.</p>
              </div>
            </article>

            <article className="project-card dashboard">
              <div className="project-visual grid">
                <span className="tag">Dashboard</span>
              </div>
              <div className="project-info">
                <h3>Pulse Analytics</h3>
                <p>Executive dashboard with modular tiles, live metrics, and night-ready UI.</p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
