import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './SunlightZone.css'

gsap.registerPlugin(ScrollTrigger)

const creatures = [
  { emoji: '🐠', name: 'Clownfish', depth: '1–10m', fact: 'Symbiotic with anemones for mutual protection.' },
  { emoji: '🐢', name: 'Sea Turtle', depth: '10–50m', fact: 'Navigate using the Earth\'s magnetic field.' },
  { emoji: '🦈', name: 'Reef Shark', depth: '30–80m', fact: 'Electroreceptors detect the faintest heartbeat.' },
  { emoji: '🐋', name: 'Blue Whale', depth: '0–200m', fact: 'Loudest animal on Earth at 188 decibels.' },
]

export default function SunlightZone() {
  const sectionRef  = useRef(null)
  const headingRef  = useRef(null)
  const cardsRef    = useRef(null)
  const parallaxRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading reveal
      gsap.fromTo(headingRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 1,
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          }
        }
      )

      // Staggered card reveal
      gsap.fromTo('.sunlight__card',
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1, y: 0, scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          }
        }
      )

      // Parallax background
      gsap.to(parallaxRef.current, {
        yPercent: -20,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="sunlight" className="sunlight" ref={sectionRef}>
      <div className="sunlight__parallax-bg" ref={parallaxRef} />

      <div className="sunlight__container">
        <div className="sunlight__header" ref={headingRef}>
          <span className="zone-badge">0 – 200m</span>
          <h2 className="zone-title">
            The Sunlight<br />
            <em>Zone</em>
          </h2>
          <p className="zone-description">
            Where golden light pierces the waves, nurturing a kaleidoscope of life.
            Photosynthesis powers the base of the ocean food chain here.
          </p>
        </div>

        <div className="sunlight__stats">
          <div className="stat">
            <span className="stat__value">90%</span>
            <span className="stat__label">of marine life</span>
          </div>
          <div className="stat">
            <span className="stat__value">28°C</span>
            <span className="stat__label">avg temperature</span>
          </div>
          <div className="stat">
            <span className="stat__value">200m</span>
            <span className="stat__label">light penetration</span>
          </div>
        </div>

        <div className="sunlight__cards" ref={cardsRef}>
          {creatures.map((c, i) => (
            <div key={i} className="sunlight__card" data-hover>
              <div className="sunlight__card-emoji">{c.emoji}</div>
              <div className="sunlight__card-info">
                <div className="sunlight__card-name">{c.name}</div>
                <div className="sunlight__card-depth">{c.depth}</div>
                <p className="sunlight__card-fact">{c.fact}</p>
              </div>
              <div className="sunlight__card-glow" />
            </div>
          ))}
        </div>
      </div>

      <div className="zone-divider zone-divider--down">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path d="M0,0 C480,80 960,0 1440,40 L1440,80 L0,80 Z" fill="#00142b" />
        </svg>
      </div>
    </section>
  )
}
