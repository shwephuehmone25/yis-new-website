import styles from "./Layout.module.css";
export default function Brand({ compact = false }) {
  return (
    <a
      className={`${styles.brand} ${compact ? styles.compact : ""}`}
      href="/#home"
      aria-label="Yangon International School home"
    >
      <span className={styles.crest}>
        <img src="/yis-logo.webp" alt="" width="2112" height="1440" />
      </span>
      <span>
        Yangon International<small>School</small>
      </span>
    </a>
  );
}
