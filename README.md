# 🌊 Ocean Depths — Frontend Odyssey Challenge

> An immersive scroll-driven React + GSAP experience through the layers of the ocean.

---

## 📁 Complete Project Structure

```
ocean-depths/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── AbyssSection.css
│   │   ├── AbyssSection.jsx
│   │   ├── Cursor.jsx
│   │   ├── DepthMeter.css
│   │   ├── DepthMeter.jsx
│   │   ├── HeroSection.css
│   │   ├── HeroSection.jsx
│   │   ├── MidnightZone.css
│   │   ├── MidnightZone.jsx
│   │   ├── Navbar.css
│   │   ├── Navbar.jsx
│   │   ├── SunlightZone.css
│   │   ├── SunlightZone.jsx
│   │   ├── TwilightZone.css
│   │   └── TwilightZone.jsx
│   ├── styles/
│   │   └── global.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
├── .gitignore
├── PROJECT_DESCRIPTION.md
└── README.md
```

---

## 🛠️ STEP-BY-STEP SETUP IN VS CODE

### STEP 1 — Install Prerequisites

Before anything, make sure these are installed on your PC:

1. **Node.js** → Download from https://nodejs.org (choose LTS version)
   - After installing, open a terminal and run:
   ```
   node -v
   ```
   You should see something like `v20.x.x`

2. **VS Code** → Download from https://code.visualstudio.com

---

### STEP 2 — Create the Project Folder

1. Create a new folder on your desktop or anywhere you prefer. Name it:
   ```
   ocean-depths
   ```

2. Open **VS Code**

3. Go to **File → Open Folder** and select the `ocean-depths` folder

---

### STEP 3 — Create Subfolders Inside VS Code

In VS Code's left sidebar (Explorer panel), create this folder structure manually:

1. Click the **New Folder** icon in the Explorer
2. Create: `src`
3. Inside `src`, create: `components`
4. Inside `src`, create: `styles`
5. Create: `public`

Your structure should look like:
```
ocean-depths/
  ├── src/
  │   ├── components/
  │   └── styles/
  └── public/
```

---

### STEP 4 — Create & Save All Files

Create each file by right-clicking the correct folder → **New File**, then paste the code:

#### Root files (directly inside `ocean-depths/`):
| File | What to paste |
|------|--------------|
| `package.json` | Package config with React + GSAP |
| `vite.config.js` | Vite bundler config |
| `index.html` | HTML entry point |
| `.gitignore` | Git ignore rules |
| `PROJECT_DESCRIPTION.md` | Submission description |

#### Inside `src/`:
| File | What to paste |
|------|--------------|
| `main.jsx` | React app entry point |
| `App.jsx` | Root component |

#### Inside `src/styles/`:
| File | What to paste |
|------|--------------|
| `global.css` | Ocean theme variables & base styles |

#### Inside `src/components/`:
| File | What to paste |
|------|--------------|
| `Cursor.jsx` | Custom bioluminescent cursor |
| `Navbar.jsx` | Fixed navigation bar |
| `Navbar.css` | Navbar styles |
| `DepthMeter.jsx` | Scroll depth indicator |
| `DepthMeter.css` | Depth meter styles |
| `HeroSection.jsx` | Ocean surface hero |
| `HeroSection.css` | Hero styles |
| `SunlightZone.jsx` | 0–200m zone |
| `SunlightZone.css` | Sunlight zone styles |
| `TwilightZone.jsx` | 200–1000m zone |
| `TwilightZone.css` | Twilight zone styles |
| `MidnightZone.jsx` | 1000–4000m horizontal scroll |
| `MidnightZone.css` | Midnight zone styles |
| `AbyssSection.jsx` | 4000–11000m final zone |
| `AbyssSection.css` | Abyss styles |

#### Inside `public/`:
| File | What to paste |
|------|--------------|
| `favicon.svg` | Browser tab icon |

> ⚠️ **SAVE EVERY FILE** with `Ctrl + S` (Windows) or `Cmd + S` (Mac) after pasting.

---

### STEP 5 — Open the Terminal in VS Code

1. In VS Code, go to **Terminal → New Terminal**
2. Make sure the terminal path shows your `ocean-depths` folder
   - If not, run: `cd path/to/your/ocean-depths`

---

### STEP 6 — Install Dependencies

In the VS Code terminal, run:

```bash
npm install
```

This will:
- Download React, ReactDOM, GSAP, and Vite
- Create a `node_modules` folder (this is normal, don't touch it)
- Create a `package-lock.json` file

Wait until it says: `added XXX packages`

---

### STEP 7 — Run the Development Server

```bash
npm run dev
```

You will see output like:
```
  VITE v5.x.x  ready in XXX ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

Open your browser and go to: **http://localhost:5173**

🎉 Your Ocean Depths website is now running!

---

### STEP 8 — Make Changes & Hot Reload

- Edit any `.jsx` or `.css` file in VS Code
- Save with `Ctrl + S`
- The browser **automatically refreshes** — no need to restart

---

## 🌐 DEPLOYMENT TO VERCEL (Free)

### Method 1: Deploy via GitHub (Recommended)

**Step 1 — Push to GitHub**
1. Go to https://github.com and create a new repository named `ocean-depths`
2. In VS Code terminal:
```bash
git init
git add .
git commit -m "Initial commit: Ocean Depths"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/ocean-depths.git
git push -u origin main
```

**Step 2 — Deploy to Vercel**
1. Go to https://vercel.com and sign in with GitHub
2. Click **"New Project"**
3. Select your `ocean-depths` repository
4. Settings will auto-detect Vite — click **"Deploy"**
5. Wait ~60 seconds → get your live URL!

### Method 2: Deploy directly via Vercel CLI
```bash
npm install -g vercel
npm run build
vercel --prod
```

---

## 🚀 Build for Production

```bash
npm run build
```
Creates an optimized `dist/` folder ready for any host.

---

## ✅ Rulebook Checklist

| Requirement | Status | How |
|-------------|--------|-----|
| 5+ sections | ✅ | Hero, Sunlight, Twilight, Midnight, Abyss |
| 2+ scroll effects | ✅ | Parallax + ScrollTrigger reveals + horizontal pin |
| 3+ interactions | ✅ | Hover cards, fact toggle, creature slider, resurface btn |
| 3+ animations | ✅ | Bubble rise, glow pulse, wave float, counter, blur reveal |
| Responsive | ✅ | Mobile/tablet/desktop tested |
| GitHub repo | ✅ | Follow Step 8 above |
| Live deployment | ✅ | Deploy via Vercel |
| Project description | ✅ | See PROJECT_DESCRIPTION.md |

---

## 🛠️ VS Code Extensions (Recommended)

Install these from the Extensions panel (`Ctrl+Shift+X`):

- **ES7+ React/Redux/React-Native snippets** — fast React shortcuts
- **Prettier - Code formatter** — auto-format on save
- **Auto Rename Tag** — rename JSX tags automatically
- **GitLens** — better Git integration

---

## 📦 Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 | UI components |
| Vite 5 | Build tool & dev server |
| GSAP 3 + ScrollTrigger | All animations |
| Cormorant Garamond | Display typography |
| Josefin Sans | Body typography |
| Pure CSS | Styling (no Tailwind) |
