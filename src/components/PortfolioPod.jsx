'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three';
import styles from './PortfolioPod.module.css';

gsap.registerPlugin(ScrollTrigger);

// ─── Service Data ─────────────────────────────────────────────────────────────
const SERVICES = [
  {
    name: 'WEB DESIGN',
    code: 'UPD-001',
    colors: {
      main: '#6378ff',
      glow: 'rgba(99,120,255,0.35)',
      iconBg: 'rgba(99,120,255,0.15)',
      indicator: '#6378ff',
    },
    planetColors: ['#4a5fcc', '#6378ff', '#8a9dff', '#2a3580', '#1a2060', '#c8d0ff', '#5568ee'],
  },
  {
    name: 'SOCIAL MEDIA',
    code: 'UPD-002',
    colors: {
      main: '#ff5078',
      glow: 'rgba(255,80,120,0.35)',
      iconBg: 'rgba(255,80,120,0.15)',
      indicator: '#ff5078',
    },
    planetColors: ['#cc2050', '#ff4070', '#ff7090', '#801030', '#600820', '#ffb0c0', '#ee3060'],
  },
  {
    name: 'PAID ADS',
    code: 'UPD-003',
    colors: {
      main: '#ff8c1e',
      glow: 'rgba(255,140,30,0.35)',
      iconBg: 'rgba(255,140,30,0.15)',
      indicator: '#ff8c1e',
    },
    planetColors: ['#cc5500', '#e06020', '#e8803a', '#a34200', '#873300', '#f0a070', '#d46030'],
  },
  {
    name: 'AI & CHATBOTS',
    code: 'UPD-004',
    colors: {
      main: '#00c8c8',
      glow: 'rgba(0,200,200,0.35)',
      iconBg: 'rgba(0,200,200,0.15)',
      indicator: '#00c8c8',
    },
    planetColors: ['#008888', '#00b8b8', '#00d8d8', '#005555', '#003333', '#80f0f0', '#00c0c0'],
  },
  {
    name: 'ERP SERVICES',
    code: 'UPD-005',
    colors: {
      main: '#BFFE03',
      glow: 'rgba(191, 254, 3,0.35)',
      iconBg: 'rgba(191, 254, 3,0.15)',
      indicator: '#BFFE03',
    },
    planetColors: ['#5acc00', '#BFFE03', '#aaff70', '#3a8800', '#206000', '#d0ff90', '#70dd20'],
  },
];

// ─── Clean monochrome line icons (inherit currentColor) ──────────────────────
const iconProps = {
  width: 18,
  height: 18,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

const SERVICE_ICONS = [
  // WEB DESIGN — browser window
  (
    <svg key="web" {...iconProps}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 8.5h18M7 12.5h7M7 16h10" />
    </svg>
  ),
  // SOCIAL MEDIA — share / broadcast nodes
  (
    <svg key="social" {...iconProps}>
      <circle cx="6" cy="12" r="2.4" />
      <circle cx="17.5" cy="6" r="2.4" />
      <circle cx="17.5" cy="18" r="2.4" />
      <path d="M8.2 10.9l7.1-3.7M8.2 13.1l7.1 3.7" />
    </svg>
  ),
  // PAID ADS — target
  (
    <svg key="ads" {...iconProps}>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
    </svg>
  ),
  // AI & CHATBOTS — chat bubble
  (
    <svg key="ai" {...iconProps}>
      <path d="M4 5h16a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H9l-4 4v-4H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z" />
      <path d="M8.5 10.5h.01M12 10.5h.01M15.5 10.5h.01" />
    </svg>
  ),
  // BRANDING — award / medal
  (
    <svg key="brand" {...iconProps}>
      <circle cx="12" cy="9" r="5" />
      <path d="M9 13.5L7.8 21 12 18.8 16.2 21 15 13.5" />
    </svg>
  ),
];

// ─── Build planet texture from canvas ────────────────────────────────────────
function buildPlanetTexture(serviceIdx) {
  const c = SERVICES[serviceIdx].planetColors;
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');

  // Base gradient
  const grad = ctx.createLinearGradient(0, 0, 512, 256);
  grad.addColorStop(0, c[0]);
  grad.addColorStop(0.4, c[1]);
  grad.addColorStop(0.7, c[2]);
  grad.addColorStop(1, c[3]);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 512, 256);

  // Atmosphere bands
  ctx.globalAlpha = 0.4;
  for (let i = 0; i < 8; i++) {
    const y = 20 + (i / 8) * 220;
    const bg = ctx.createLinearGradient(0, y - 12, 0, y + 12);
    bg.addColorStop(0, 'transparent');
    bg.addColorStop(0.5, c[i % 2 === 0 ? 3 : 5]);
    bg.addColorStop(1, 'transparent');
    ctx.fillStyle = bg;
    ctx.beginPath();
    ctx.ellipse(256, y, 256 + Math.sin(i) * 50, 14 + i * 2, 0, 0, Math.PI * 2);
    ctx.fill();
  }

  // Highlight noise
  ctx.globalAlpha = 0.12;
  for (let i = 0; i < 25; i++) {
    ctx.beginPath();
    ctx.arc(Math.random() * 512, Math.random() * 256, 3 + Math.random() * 14, 0, Math.PI * 2);
    ctx.fillStyle = c[5];
    ctx.fill();
  }

  ctx.globalAlpha = 1;
  return new THREE.CanvasTexture(canvas);
}

// ─── Three.js hook ────────────────────────────────────────────────────────────
function usePlanetScene(mountRef) {
  const meshRef = useRef(null);
  const sceneDataRef = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const SIZE = 180;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.z = 2.8;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(SIZE, SIZE);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Lighting
    scene.add(new THREE.AmbientLight(0xffffff, 0.3));
    const sun = new THREE.DirectionalLight(0xffffff, 1.2);
    sun.position.set(-3, 2, 4);
    scene.add(sun);
    const rim = new THREE.PointLight(0x4466ff, 0.4, 10);
    rim.position.set(3, -2, -2);
    scene.add(rim);

    // Planet mesh
    const geo = new THREE.SphereGeometry(1, 64, 64);
    const mat = new THREE.MeshStandardMaterial({
      map: buildPlanetTexture(2),
      roughness: 0.7,
      metalness: 0.1,
    });
    const mesh = new THREE.Mesh(geo, mat);
    scene.add(mesh);
    meshRef.current = mesh;

    // Atmosphere glow
    const atmGeo = new THREE.SphereGeometry(1.08, 32, 32);
    const atmMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(SERVICES[2].planetColors[1]),
      transparent: true,
      opacity: 0.08,
      side: THREE.BackSide,
    });
    const atm = new THREE.Mesh(atmGeo, atmMat);
    scene.add(atm);

    sceneDataRef.current = { renderer, mat, atmMat, atm };

    // Render loop
    let t = 0;
    const tick = () => {
      t += 0.004;
      mesh.rotation.y = t;
      mesh.rotation.x = Math.sin(t * 0.3) * 0.08;
      atm.rotation.y = t * 0.8;
      renderer.render(scene, camera);
      frameRef.current = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      cancelAnimationFrame(frameRef.current);
      renderer.dispose();
      mat.map?.dispose();
      if (mountRef.current?.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  const switchPlanet = useCallback((idx) => {
    const d = sceneDataRef.current;
    const mesh = meshRef.current;
    if (!d || !mesh) return;

    gsap.to(mesh.scale, {
      x: 0, y: 0, z: 0,
      duration: 0.2,
      ease: 'power2.in',
      onComplete: () => {
        d.mat.map?.dispose();
        d.mat.map = buildPlanetTexture(idx);
        d.mat.map.needsUpdate = true;
        d.mat.needsUpdate = true;
        d.atmMat.color.set(SERVICES[idx].planetColors[1]);
        gsap.to(mesh.scale, {
          x: 1, y: 1, z: 1,
          duration: 0.38,
          ease: 'back.out(1.8)',
        });
      },
    });
  }, []);

  const hoverScale = useCallback((enter) => {
    const mesh = meshRef.current;
    if (!mesh) return;
    gsap.to(mesh.scale, {
      x: enter ? 1.2 : 1,
      y: enter ? 1.2 : 1,
      z: enter ? 1.2 : 1,
      duration: 0.5,
      ease: enter ? 'back.out(2)' : 'power3.out',
    });
  }, []);

  return { switchPlanet, hoverScale };
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function PortfolioPod() {
  const sectionRef      = useRef(null);
  const podRef          = useRef(null);
  const podContainerRef = useRef(null);
  const planetMountRef  = useRef(null);
  const planetViewRef   = useRef(null);
  const serviceListRef  = useRef(null);
  const serviceItemsRef = useRef([]);
  const headlineRef     = useRef(null);
  const badgeRef        = useRef(null);
  const subtitleRef     = useRef(null);
  const hintRef         = useRef(null);
  const labelRef        = useRef(null);
  const planetRingRef   = useRef(null);
  const podGlowRef      = useRef(null);

  const [activeService, setActiveService] = useState(2);
  const activeServiceRef = useRef(2);
  const isOpenRef = useRef(false);

  const { switchPlanet } = usePlanetScene(planetMountRef);

  // ── keep ref in sync ──
  useEffect(() => {
    activeServiceRef.current = activeService;
  }, [activeService]);

  // ── Scroll entrance animations ──
  useGSAP(() => {
    const ctx = gsap.context(() => {
      const st = { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none none' };

      gsap.from(badgeRef.current, {
        opacity: 0, y: -20, scale: 0.85, duration: 0.7, ease: 'back.out(2)', scrollTrigger: st,
      });

      gsap.from(headlineRef.current?.querySelectorAll('.word'), {
        opacity: 0, y: 60, rotateX: -45, stagger: 0.1, duration: 0.85, ease: 'power4.out',
        scrollTrigger: { ...st, start: 'top 75%' },
      });

      gsap.from(subtitleRef.current, {
        opacity: 0, y: 24, duration: 0.7, delay: 0.35, ease: 'power3.out',
        scrollTrigger: { ...st, start: 'top 70%' },
      });

      gsap.from(podRef.current, {
        opacity: 0, y: 60, scale: 0.9, duration: 1, delay: 0.2, ease: 'back.out(1.5)',
        scrollTrigger: { ...st, start: 'top 65%' },
      });

      gsap.from(hintRef.current, {
        opacity: 0, y: 16, duration: 0.6, delay: 0.55, ease: 'power2.out',
        scrollTrigger: { ...st, start: 'top 65%' },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // ── Label transition ──
  const updateLabel = useCallback((idx) => {
    if (!labelRef.current) return;
    gsap.to(labelRef.current, {
      opacity: 0, y: -8, duration: 0.16, ease: 'power2.in',
      onComplete: () => {
        labelRef.current.textContent = SERVICES[idx].name;
        gsap.to(labelRef.current, { opacity: 1, y: 0, duration: 0.26, ease: 'power3.out' });
      },
    });
  }, []);

  // ── Open pod ──
  const openPod = useCallback(() => {
    if (isOpenRef.current) return;
    isOpenRef.current = true;

    const pv   = planetViewRef.current;
    const sl   = serviceListRef.current;
    const items = serviceItemsRef.current.filter(Boolean);

    gsap.timeline()
      .to(pv, {
        opacity: 0, scale: 0.88, y: -18,
        duration: 0.25, ease: 'power3.in',
        onComplete: () => {
          pv.style.display = 'none';
          sl.style.display = 'flex';
          gsap.set(sl, { opacity: 0 });
          gsap.set(items, { opacity: 0, x: -20, y: 8 });
        },
      })
      .to(sl, { opacity: 1, duration: 0.2, ease: 'power2.out' })
      .to(items, {
        opacity: 1, x: 0, y: 0,
        stagger: 0.055, duration: 0.28, ease: 'power3.out',
      }, '-=0.1');
  }, []);

  // ── Close pod ──
  const closePod = useCallback(() => {
    if (!isOpenRef.current) return;
    isOpenRef.current = false;

    const pv    = planetViewRef.current;
    const sl    = serviceListRef.current;
    const items = serviceItemsRef.current.filter(Boolean);

    gsap.timeline()
      .to(items, {
        opacity: 0, x: 20, y: -6,
        stagger: { each: 0.04, from: 'end' },
        duration: 0.2, ease: 'power2.in',
      })
      .to(sl, {
        opacity: 0, duration: 0.16, ease: 'power2.in',
        onComplete: () => {
          sl.style.display = 'none';
          pv.style.display = 'flex';
          gsap.set(pv, { opacity: 0, scale: 0.88, y: 18 });
        },
      }, '-=0.04')
      .to(pv, { opacity: 1, scale: 1, y: 0, duration: 0.42, ease: 'back.out(1.6)' });
  }, []);

  // ── Select service ──
  const selectService = useCallback((idx) => {
    setActiveService(idx);
    activeServiceRef.current = idx;
    switchPlanet(idx);
    updateLabel(idx);
    if (!isOpenRef.current) openPod();
  }, [switchPlanet, updateLabel, openPod]);

  // ── Auto-cycle ──
  useEffect(() => {
    const t = setInterval(() => {
      if (!isOpenRef.current) {
        const next = (activeServiceRef.current + 1) % SERVICES.length;
        setActiveService(next);
        activeServiceRef.current = next;
        switchPlanet(next);
        updateLabel(next);
      }
    }, 2800);
    return () => clearInterval(t);
  }, [switchPlanet, updateLabel]);

  // ── Planet ring glow on service change ──
  useEffect(() => {
    if (!planetRingRef.current) return;
    gsap.to(planetRingRef.current, {
      boxShadow: `0 0 44px ${SERVICES[activeService].colors.glow}, inset 0 0 40px rgba(0,0,0,0.6)`,
      duration: 0.6, ease: 'power2.out',
    });
  }, [activeService]);

  // ── Pod hover (open + neon glow, no size change) ──
  const onPodEnter = useCallback(() => {
    openPod();
    gsap.to(podGlowRef.current, { opacity: 0.55, duration: 0.4, ease: 'power2.out' });
  }, [openPod]);

  const onPodLeave = useCallback(() => {
    closePod();
    gsap.to(podGlowRef.current, { opacity: 0, duration: 0.45, ease: 'power2.out' });
  }, [closePod]);

  return (
    <section ref={sectionRef} className={styles.section} suppressHydrationWarning>

      <div className={styles.bgText}>PORTFOLIO</div>

      {/* Ambient star dots */}
      {[
        { top: '12%',  left:  '8%',  animationDelay: '0s'   },
        { top: '22%',  right: '10%', animationDelay: '1.2s' },
        { top: '60%',  left:  '5%',  animationDelay: '0.6s' },
        { bottom:'20%',right: '7%',  animationDelay: '1.8s' },
        { top: '40%',  left: '15%',  animationDelay: '2.1s' },
        { top: '75%',  right:'18%',  animationDelay: '0.3s' },
      ].map((s, i) => <span key={i} className={styles.starDot} style={s} />)}

      {/* Badge */}
      <div ref={badgeRef} className={styles.badge}>
        <span className={styles.badgeDot} />
        OUR PORTFOLIO · 5 SERVICES
      </div>

      {/* Headline */}
      <div ref={headlineRef} className={styles.headline}>
        <h1 className={styles.h1}>
          <span className="word">CHECK</span>{' '}
          <span className="word">OUT</span>
        </h1>
        <h2 className={styles.h2}>
          <span className="word">OUR</span>{' '}
          <span className="word">WORK.</span>
        </h2>
      </div>

      {/* Subtitle */}
      <p ref={subtitleRef} className={styles.subtitle}>
        Open the pod to explore 5 service portfolios — or click anywhere to dive into the full case study library.
      </p>

      {/* Pod wrapper */}
      <div
        ref={podRef}
        className={styles.podWrapper}
        onMouseEnter={onPodEnter}
        onMouseLeave={onPodLeave}
      >
        {/* Neon glow behind the box (shows on hover) */}
        <div
          ref={podGlowRef}
          className={styles.podGlow}
          style={{ background: SERVICES[activeService].colors.main }}
        />

        <div
          ref={podContainerRef}
          className={styles.podContainer}
        >
          {/* Top bar */}
          <div className={styles.podTopBar}>
            <div className={styles.podDots}>
              <span className={styles.podDot} />
              <span className={`${styles.podDot} ${styles.podDotActive}`} />
              <span className={styles.podDot} />
            </div>
            <span className={styles.podLabel}>POD · 01</span>
          </div>

          {/* Status bar */}
          <div className={styles.podStatusBar}>
            <div className={styles.statusLeft}>
              <span className={styles.statusDot} />
              SYSTEMS NOMINAL
            </div>
            <span className={styles.statusRight}>POD · UPD-01</span>
          </div>

          {/* Planet viewport */}
          <div ref={planetViewRef} className={styles.podViewport}>
            <div className={`${styles.sideBar} ${styles.sideBarLeft}`}>
              <div className={styles.sideBarFill} />
            </div>

            <div className={styles.planetCenter}>
              <div ref={planetRingRef} className={styles.planetRing}>
                <div className={styles.planetInnerRing}>
                  <div ref={planetMountRef} className={styles.planetMount} />
                </div>
              </div>
              <div ref={labelRef} className={styles.planetLabel}>PAID ADS</div>

              {[
                { top: '18px', left: '55px',  animationDelay: '0s'   },
                { top: '30px', right: '70px', animationDelay: '1s'   },
                { bottom:'40px',left:'72px',  animationDelay: '2s'   },
                { bottom:'25px',right:'50px', animationDelay: '0.5s' },
              ].map((s, i) => <span key={i} className={styles.scatterDot} style={s} />)}
            </div>

            <div className={`${styles.sideBar} ${styles.sideBarRight}`}>
              <div className={`${styles.sideBarFill} ${styles.sideBarFillRight}`} />
            </div>
          </div>

          {/* Service list */}
          <div ref={serviceListRef} className={styles.serviceList} style={{ display: 'none' }}>
            <div className={styles.listHeader}>
              <span className={styles.listTitle}>/// PORTFOLIO · 5 ITEMS</span>
              <span className={styles.listReady}>READY</span>
            </div>

            {SERVICES.map((svc, i) => (
              <div
                key={i}
                ref={(el) => (serviceItemsRef.current[i] = el)}
                className={`${styles.serviceItem} ${activeService === i ? styles.serviceItemActive : ''}`}
                style={{ '--item-glow': svc.colors.glow }}
                onClick={() => selectService(i)}
              >
                <div
                  className={styles.svcIcon}
                  style={{ background: svc.colors.iconBg, color: svc.colors.main }}
                >
                  {SERVICE_ICONS[i]}
                </div>
                <div className={styles.svcInfo}>
                  <div className={styles.svcName}>{svc.name}</div>
                  <div className={styles.svcCode}>{svc.code}</div>
                </div>
                {activeService === i
                  ? <div className={styles.activeIndicator} style={{ borderColor: svc.colors.indicator, background: svc.colors.iconBg }} />
                  : <div className={styles.svcArrow}>→</div>
                }
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom hint */}
      <div ref={hintRef} className={styles.bottomHint}>
        <span className={styles.hintDot} />
        HOVER TO OPEN · CLICK TO EXPLORE
        <span className={styles.hintArrow}>↓</span>
      </div>

    </section>
  );
}
