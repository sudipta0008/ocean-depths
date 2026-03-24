import React, { useEffect, useRef, useState } from 'react'
import './Navbar.css'

const zones = [
  { id: 'hero',      label: '0m',    name: 'Surface' },
  { id: 'sunlight',  label: '200m',  name: 'Sunlight Zone' },
  { id: 'twilight',  label: '1000m', name: 'Twilight Zone' },
  { id: 'midnight',  label: '4000m', name: 'Midnight Zone' },
  { id: 'abyss',     label: '11km',  name: 'The Abyss' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__logo" onClick={() => scrollTo('hero')} data-hover>
        <span className="navbar__logo-icon">⬡</span>
        <span className="navbar__logo-text">OCEAN DEPTHS</span>
      </div>
      <ul className="navbar__links">
        {zones.map(z => (
          <li key={z.id}>
            <button className="navbar__link" onClick={() => scrollTo(z.id)} data-hover>
              <span className="navbar__link-depth">{z.label}</span>
              <span className="navbar__link-name">{z.name}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
