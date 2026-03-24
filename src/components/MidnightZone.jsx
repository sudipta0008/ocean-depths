import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './MidnightZone.css'

gsap.registerPlugin(ScrollTrigger)

const deepCreatures = [
  {
    name: 'Anglerfish',
    depth: '1,000 – 4,000m',
    emoji: '🎣',
    color: '#ff4444',
    desc: 'Lures prey with a bioluminescent spine protruding from its forehead in the pitch black.',
  },
  {
    name: 'Giant Squid',
    depth: '200 – 2,000m',
    emoji: '🦑',
    color: '#cc44ff',
    desc: 'Eyes the size of basketballs to capture the faintest traces of light. Reaches 13 metres long.',
  },
  {
    name: 'Vampire Squid',
    depth: '600 – 900m',
    emoji: '🧛',
    color: '#8844cc',
    desc: 'Not a squid nor an octopus — an ancient cephalopod. Turns itself inside-out when threatened.',
  },
  {
    name: 'Barreleye Fish',
    depth: '600 – 800m',
    emoji: '🐟',
    color: '#44bbff',
    desc: 'Has a transparent head with tubular eyes that can rotate upward to spot prey silhouettes.',
  },
  {
    name: 'Dumbo Octopus',
    depth: '3,000 – 4,000m',
    emoji: '🐙',
    color: '#ff88aa',
    desc: 'Named for ear-like fins resembling Dumbo. Lives deeper than any other octopod species.',
  },
]

export default function MidnightZone() {
  const sectionRef    = useRef(null)
  const headingRef    = useRef(null)
  const trackRef      = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headingRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 1.2,
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 80%',
          }
        }
      )

      // Horizontal scroll for creature cards
      const cards = gsap.utils.toArray('.midnight__creature')
      gsap.to(cards, {
        xPercent: -100 * (cards.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: trackRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (cards.length - 1),
          start: 'top top',
          end: () => '+=' + trackRef.current.offsetWidth * (cards.length - 1),
        }
      })

      // Counter animation
      gsap.fromTo('.midnight__counter',
        { textContent: 1000 },
        {
          textContent: 4000,
          duration: 2,
          snap: { textContent: 100 },
          ease: 'power1.inOut',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top center',
          }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="midnight" className="midnight" ref={sectionRef}>
      {/* Heading before pinned section */}
      <div className="midnight__intro">
        <div className="midnight__header" ref={headingRef}>
          <span className="zone-badge" style={{ borderColor: 'rgba(50,0,80,0.6)', color: '#cc88ff' }}>
            1,000 – 4,000m
          </span>
          <h2 className="zone-title">
            The Midnight<br /><em style={{ color: '#cc88ff' }}>Zone</em>
          </h2>
          <p className="zone-description">
            Zero light. Near-zero temperature. Crushing pressure. Yet life persists —
            alien, tenacious, otherworldly. Scroll to meet the residents.
          </p>
          <div className="midnight__depth-display">
            <span className="midnight__counter">1000</span>
            <span className="midnight__depth-unit">m depth</span>
          </div>
        </div>
      </div>

      {/* Horizontal scroll track */}
      <div className="midnight__track" ref={trackRef}>
        <div className="midnight__slider">
          {deepCreatures.map((c, i) => (
            <div key={i} className="midnight__creature" data-hover>
              <div className="midnight__creature-bg" style={{ '--accent': c.color }} />
              <div className="midnight__creature-content">
                <div className="midnight__creature-emoji">{c.emoji}</div>
                <div className="midnight__creature-number">0{i + 1}</div>
                <h3 className="midnight__creature-name">{c.name}</h3>
                <p className="midnight__creature-depth">{c.depth}</p>
                <p className="midnight__creature-desc">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="zone-divider zone-divider--down">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path d="M0,20 C480,70 960,0 1440,50 L1440,80 L0,80 Z" fill="#000810" />
        </svg>
      </div>
    </section>
  )
}
