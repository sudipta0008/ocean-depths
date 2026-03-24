# Ocean Depths — Project Description
### Frontend Odyssey Challenge Submission

**Concept**

Ocean Depths is an immersive, scroll-driven web experience that takes the user on a vertical journey from the sunlit ocean surface all the way down to the Hadal Zone at 11,000 metres below sea level. The narrative is structured around five distinct zones: Surface/Hero, Sunlight Zone (0–200m), Twilight Zone (200–1,000m), Midnight Zone (1,000–4,000m), and The Abyss (4,000–11,000m). As the user descends, the visual palette shifts — from bright ocean blues into crushing black — reinforcing the story through colour and atmosphere alone.

**Design Process**

The aesthetic was inspired by deep-sea photography and bioluminescent organisms. A deliberate typographic pairing was chosen: Cormorant Garamond (a refined serif with oceanic elegance) for headlines and Josefin Sans (clean, lightweight) for body text, creating contrast between the poetic and the scientific. CSS custom properties anchor the entire colour system, ensuring visual harmony across all five zones.

**Technical Approach**

Built with React (Vite) and GSAP with ScrollTrigger, every section is animated in a purposeful way. The Sunlight Zone uses staggered card reveals. The Twilight Zone features an interactive fact-toggle panel with bioluminescent dot overlays. The Midnight Zone implements GSAP's horizontal scroll-pinning for a creature gallery. The Abyss concludes with counter animations and a timeline reveal. A custom cursor, real-time depth meter, and floating bubble system run persistently throughout the experience. The site is fully responsive across desktop, tablet, and mobile devices.

