# Portfolio Pod — Complete Next.js Project

## Folder structure (pura project)

```
portfolio-pod/
├── src/
│   ├── app/
│   │   ├── globals.css       ← global reset styles
│   │   ├── layout.js         ← root layout (Next.js App Router)
│   │   └── page.js           ← homepage — sirf PortfolioPod import karta hai
│   └── components/
│       ├── PortfolioPod.jsx  ← main component (Three.js + GSAP)
│       └── PortfolioPod.module.css  ← styles
├── jsconfig.json             ← @/ path alias
├── next.config.js            ← Three.js transpile config
├── package.json              ← sab dependencies
└── README.md                 ← yeh file
```

---

## Step 1 — Dependencies install karo

Project folder mein jaake yeh run karo:

```bash
npm install
```

Yeh automatically install karega:
- `next` 14
- `react` + `react-dom`
- `gsap` + `@gsap/react`
- `three` (3D planet ke liye)

---

## Step 2 — Dev server chalao

```bash
npm run dev
```

Browser mein kholo:
```
http://localhost:3000
```

---

## Step 3 — Production build (deploy ke liye)

```bash
npm run build
npm run start
```

---

## Agar koi error aaye

### Error: `Cannot find module 'three'`
```bash
npm install three
```

### Error: `useGSAP is not a function`
```bash
npm install @gsap/react
```

### Error: `SyntaxError` ya `Unexpected token`
Node.js version check karo — **Node 18+** chahiye:
```bash
node -v
```

### Three.js SSR error (server side)
`next.config.js` already fix hai — `transpilePackages: ['three']` laga hua hai.

---

## Features

| Feature | Kya karta hai |
|---|---|
| **Three.js planet** | Real 3D sphere, CanvasTexture, lighting, atmosphere glow |
| **Planet hover scale** | Mouse enter pe planet bada hota hai (GSAP + Three.js mesh.scale) |
| **Open transition** | Planet upar ki taraf fade out → service items stagger in (left se) |
| **Close transition** | Items stagger out (right side) → planet spring bounce in |
| **ScrollTrigger** | Badge, headline words (3D rotateX flip), pod — scroll pe reveal |
| **Planet switch** | Service click pe planet scale to 0, texture swap, back.out spring |
| **Auto cycle** | Har 2.8s mein planet change — hover pe pause |
| **Ring glow** | Active service ke color se ring glow update hoti hai |
