import React, { useEffect, useState } from 'react'
import './DepthMeter.css'

export default function DepthMeter() {
  const [progress, setProgress] = useState(0)
  const [depth, setDepth] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const total = document.body.scrollHeight - window.innerHeight
      const p = window.scrollY / total
      setProgress(p)
      setDepth(Math.round(p * 11000))
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="depth-meter">
      <div className="depth-meter__track">
        <div className="depth-meter__fill" style={{ height: `${progress * 100}%` }} />
        <div className="depth-meter__bubble" style={{ top: `${progress * 100}%` }} />
      </div>
      <div className="depth-meter__label">
        <span className="depth-meter__value">{depth.toLocaleString()}</span>
        <span className="depth-meter__unit">m</span>
      </div>
    </div>
  )
}
