import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './AbyssSection.css'

gsap.registerPlugin(ScrollTrigger)

const abyssData = [
  { label: 'Pressure', value: '1,100 atm', icon: '⬡' },
  { label: 'Temperature', value: '-2°C', icon: '❄' },
  { label: 'Light', value: '0%', icon: '◉' },
  { label: 'Depth', value: '11,034m', icon: '▼' },
]

const discoveries = [
  {
    year: '1960',
    event: 'First Descent',
    desc: 'Jacques Piccard & Don Walsh reach the Challenger Deep in the bathyscaphe Trieste.',
  },
  {
    year: '2012',
    event: "Cameron's Dive",
    desc: 'James Cameron becomes the first solo diver to reach the deepest point on Earth.',
  },
  {
    year: '2019',
    event: 'Victor Vescovo',
    desc: 'Breaks the depth record at 10,928m and discovers new species of snailfish.',
  },
  {
    year: '2023',
    event: 'Microplastics Found',
    desc: 'Scientists confirm microplastic contamination even at the deepest point of all oceans.',
  },
]

export default function AbyssSection() {
  const sectionRef   = useRef(null)
  const headingRef   = useRef(null)
  const statsRef     = useRef(null)
  const timelineRef  = useRef(null)
  const outroRef     = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading
      gsap.fromTo(headingRef.current,
        { opacity: 0, scale: 0.9, filter: 'blur(12px)' },
        {
          opacity: 1, scale: 1, filter: 'blur(0px)', duration: 1.4,
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          }
        }
      )

      // Stats counter pop
      gsap.fromTo('.abyss__stat',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: 'back.out(1.5)',
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 80%',
          }
        }
      )

      // Timeline items slide in
      gsap.fromTo('.abyss__timeline-item',
        { opacity: 0, x: -50 },
        {
          opacity: 1, x: 0,
          stagger: 0.18,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 75%',
          }
        }
      )

      // Outro
      gsap.fromTo(outroRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 1.2,
          scrollTrigger: {
            trigger: outroRef.current,
            start: 'top 85%',
          }
        }
      )

      // Slow parallax on background
      gsap.to('.abyss__bg-rings', {
        rotation: 60,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 2,
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="abyss" className="abyss" ref={sectionRef}>
      {/* Decorative background */}
      <div className="abyss__bg">
        <div className="abyss__bg-rings" />
        <div className="abyss__bg-glow" />
      </div>

      {/* Floating particles */}
      <div className="abyss__particles">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="abyss__particle"
            style={{
              top:  Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              width:  (Math.random() * 3 + 1) + 'px',
              height: (Math.random() * 3 + 1) + 'px',
              animationDelay:    Math.random() * 6 + 's',
              animationDuration: Math.random() * 6 + 6 + 's',
            }}
          />
        ))}
      </div>

      <div className="abyss__container">
        {/* Hero heading */}
        <div className="abyss__header" ref={headingRef}>
          <span className="zone-badge" style={{ borderColor: 'rgba(0,255,231,0.3)', color: 'var(--biolum)' }}>
            4,000 – 11,000m
          </span>
          <h2 className="zone-title">
            The<br /><em style={{ color: 'var(--biolum)', animation: 'glowPulse 3s ease-in-out infinite' }}>Abyss</em>
          </h2>
          <p className="zone-description">
            The Hadal Zone. Earth's final frontier. Deeper than Everest is tall —
            a crushing realm of eternal night where life rewrites its own rules.
          </p>
        </div>

        {/* Stats grid */}
        <div className="abyss__stats" ref={statsRef}>
          {abyssData.map((s, i) => (
            <div className="abyss__stat" key={i} data-hover>
              <span className="abyss__stat-icon">{s.icon}</span>
              <span className="abyss__stat-value">{s.value}</span>
              <span className="abyss__stat-label">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Discovery timeline */}
        <div className="abyss__section-label">HUMAN DISCOVERIES</div>
        <div className="abyss__timeline" ref={timelineRef}>
          {discoveries.map((d, i) => (
            <div className="abyss__timeline-item" key={i} data-hover>
              <div className="abyss__timeline-year">{d.year}</div>
              <div className="abyss__timeline-line">
                <div className="abyss__timeline-dot" />
              </div>
              <div className="abyss__timeline-body">
                <h4 className="abyss__timeline-event">{d.event}</h4>
                <p className="abyss__timeline-desc">{d.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Closing outro */}
        <div className="abyss__outro" ref={outroRef}>
          <div className="abyss__outro-line" />
          <p className="abyss__outro-quote">
            "The sea, once it casts its spell, holds one in its net of wonder forever."
          </p>
          <span className="abyss__outro-author">— Jacques Cousteau</span>
          <div className="abyss__outro-cta">
            <button
              className="abyss__back-btn"
              data-hover
              onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="abyss__back-arrow">↑</span>
              <span>RESURFACE</span>
            </button>
          </div>
          <p className="abyss__credits">
            Frontend Odyssey Challenge · Ocean Depths Experience · Built with React + GSAP
          </p>
        </div>
      </div>
    </section>
  )
}
