import React, { useEffect, useRef } from 'react'
import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import SunlightZone from './components/SunlightZone'
import TwilightZone from './components/TwilightZone'
import MidnightZone from './components/MidnightZone'
import AbyssSection from './components/AbyssSection'
import DepthMeter from './components/DepthMeter'

export default function App() {
  return (
    <>
      <Cursor />
      <Navbar />
      <DepthMeter />
      <main>
        <HeroSection />
        <SunlightZone />
        <TwilightZone />
        <MidnightZone />
        <AbyssSection />
      </main>
    </>
  )
}
