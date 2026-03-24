import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './TwilightZone.css'

gsap.registerPlugin(ScrollTrigger)

const facts = [
  { title: 'Bioluminescence', icon: '✦', body: 'Up to 90% of deep-sea organisms produce their own light through chemical reactions — an alien glow in perpetual darkness.' },
  { title: 'Pressure', icon: '◈', body: 'At 1000m, pressure reaches 100 atmospheres — equivalent to 100kg crushing every square centimetre of your body.' },
  { title: 'Temperature', icon: '❄', body: 'The ocean thermocline drops temperatures to near-freezing 4°C in permanent cold that supports unique cold-adapted life.' },
  { title: 'Sound Channel', icon: '◎', body: 'The SOFAR channel lets whale songs travel thousands of kilometres, forming the ocean\'s own communication highway.' },
]

export default function TwilightZone() {
  const sectionRef    = useRef(null)
  const headingRef    = useRef(null)
  const [activeFact, setActiveFact] = useState(0)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headingRef.current,
        { opacity: 0, x: -60 },
        {
          opacity: 1, x: 0, duration: 1.2,
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          }
        }
      )

      gsap.fromTo('.twilight__fact-btn',
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0,
          stagger: 0.12,
          duration: 0.7,
          scrollTrigger: {
            trigger: '.twilight__facts',
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          }
        }
      )

      // Scroll-triggered background darkening
      gsap.to(sectionRef.current, {
        backgroundColor: '#00091a',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
          end: 'bottom top',
          scrub: true,
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="twilight" className="twilight" ref={sectionRef}>
      <div className="twilight__orbs">
        <div className="twilight__orb twilight__orb--1" />
        <div className="twilight__orb twilight__orb--2" />
      </div>

      <div className="twilight__container">
        <div className="twilight__header" ref={headingRef}>
          <span className="zone-badge" style={{ borderColor: 'rgba(0,87,168,0.5)', color: '#4db8ff' }}>
            200 – 1,000m
          </span>
          <h2 className="zone-title">
            The Twilight<br /><em style={{ color: '#4db8ff' }}>Zone</em>
          </h2>
          <p className="zone-description">
            The last light fades here. Where shadows dominate and bioluminescence
            becomes the only language.
          </p>
        </div>

        <div className="twilight__interactive">
          <div className="twilight__facts">
            {facts.map((f, i) => (
              <button
                key={i}
                className={`twilight__fact-btn ${activeFact === i ? 'twilight__fact-btn--active' : ''}`}
                onClick={() => setActiveFact(i)}
                data-hover
              >
                <span className="twilight__fact-icon">{f.icon}</span>
                <span className="twilight__fact-title">{f.title}</span>
              </button>
            ))}
          </div>

          <div className="twilight__fact-display">
            <div className="twilight__fact-content" key={activeFact}>
              <div className="twilight__fact-big-icon">{facts[activeFact].icon}</div>
              <h3 className="twilight__fact-name">{facts[activeFact].title}</h3>
              <p className="twilight__fact-body">{facts[activeFact].body}</p>
            </div>
            <div className="twilight__biolum-dots">
              {Array.from({ length: 20 }).map((_, i) => (
                <div key={i} className="biolum-dot" style={{
                  top: Math.random() * 100 + '%',
                  left: Math.random() * 100 + '%',
                  animationDelay: Math.random() * 4 + 's',
                  width: (Math.random() * 4 + 2) + 'px',
                  height: (Math.random() * 4 + 2) + 'px',
                }} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="zone-divider zone-divider--down">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path d="M0,40 C360,0 720,80 1080,30 C1260,5 1380,60 1440,40 L1440,80 L0,80 Z" fill="#000d1f" />
        </svg>
      </div>
    </section>
  )
}
