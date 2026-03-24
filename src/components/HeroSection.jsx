import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import './HeroSection.css'

export default function HeroSection() {
  const sectionRef = useRef(null)
  const titleRef   = useRef(null)
  const subtitleRef = useRef(null)
  const ctaRef     = useRef(null)
  const waveRef    = useRef(null)
  const bubblesRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance timeline
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.fromTo(titleRef.current,
        { opacity: 0, y: 60, filter: 'blur(20px)' },
        { opacity: 1, y: 0,  filter: 'blur(0px)', duration: 1.4 }
      )
      .fromTo(subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.0 }, '-=0.6'
      )
      .fromTo(ctaRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.7 }, '-=0.4'
      )

      // Continuous wave bob
      gsap.to(waveRef.current, {
        y: -12,
        duration: 3,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  // Generate bubbles
  const bubbles = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    size: Math.random() * 14 + 4,
    left: Math.random() * 100,
    delay: Math.random() * 8,
    duration: Math.random() * 6 + 8,
  }))

  return (
    <section id="hero" className="hero" ref={sectionRef}>
      {/* Animated gradient background layers */}
      <div className="hero__bg">
        <div className="hero__gradient-1" />
        <div className="hero__gradient-2" />
        <div className="hero__rays" />
      </div>

      {/* Floating bubbles */}
      <div className="hero__bubbles" ref={bubblesRef}>
        {bubbles.map(b => (
          <div
            key={b.id}
            className="hero__bubble"
            style={{
              width: b.size + 'px',
              height: b.size + 'px',
              left: b.left + '%',
              animationDelay: b.delay + 's',
              animationDuration: b.duration + 's',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="hero__content">
        <p className="hero__eyebrow">AN IMMERSIVE DESCENT</p>
        <h1 className="hero__title" ref={titleRef}>
          <span className="hero__title-line">Into the</span>
          <span className="hero__title-line hero__title-line--accent">Ocean</span>
          <span className="hero__title-line">Depths</span>
        </h1>
        <p className="hero__subtitle" ref={subtitleRef}>
          From sunlit shallows to the crushing darkness of the hadal zone —<br />
          a journey 11,000 metres beneath the waves.
        </p>
        <button
          className="hero__cta"
          ref={ctaRef}
          data-hover
          onClick={() => document.getElementById('sunlight')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="hero__cta-text">BEGIN DESCENT</span>
          <span className="hero__cta-arrow">↓</span>
        </button>
      </div>

      {/* Wave divider */}
      <div className="hero__wave" ref={waveRef}>
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path
            d="M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,120 L0,120 Z"
            fill="rgba(0,33,71,0.6)"
          />
          <path
            d="M0,80 C360,40 720,110 1080,70 C1260,50 1380,90 1440,80 L1440,120 L0,120 Z"
            fill="#002147"
          />
        </svg>
      </div>

      <div className="hero__scroll-hint">
        <div className="hero__scroll-line" />
        <span>SCROLL TO DIVE</span>
      </div>
    </section>
  )
}
