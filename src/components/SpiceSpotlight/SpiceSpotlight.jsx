import Link from 'next/link';
import styles from './SpiceSpotlight.module.css';

// Home: "Innovative Technology Spotlight: German-Engineered SP.ICE Systems" (client copy).
const STATS = [
  { value: 'Up to 40%', label: "of a building's peak utility costs come from commercial cooling" },
  { value: 'Up to 40%', label: 'lower peak demand billing with SP.ICE thermal storage' },
];

export default function SpiceSpotlight() {
  return (
    <section id="spice-spotlight" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.media}>
          <img
            src="/spice/spice-solar.jpg"
            alt="SP.ICE thermal storage container connected to a solar PV array"
            className={styles.img}
            loading="lazy"
          />
          <span className={styles.badge}>Made in Germany</span>
        </div>

        <div className={styles.copy}>
          <span className={styles.label}>Innovative Technology Spotlight</span>
          <h2 className={styles.heading}>
            German-engineered
            <span className={styles.accent}>SP.ICE systems.</span>
          </h2>
          <p className={styles.text}>
            Commercial cooling typically represents up to 40% of a building&apos;s peak utility
            costs. Our SP.ICE Thermal Storage System utilizes proprietary German Technology to
            freeze high-density encapsulated spheres during low-tariff nighttime hours. During
            peak daytime pricing, your primary chillers throttle down, and the melting ice network
            effortlessly handles the building&apos;s thermal load, slashing peak demand billing by
            up to 40%.
          </p>

          <div className={styles.stats}>
            {STATS.map((s) => (
              <div key={s.label} className={styles.stat}>
                <strong className={styles.statValue}>{s.value}</strong>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>

          <Link href="/sp-ice-tes" className={styles.cta}>
            Explore SP.ICE <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
