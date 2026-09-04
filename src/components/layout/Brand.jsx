import styles from './Layout.module.css';
export default function Brand({ compact = false }) {
  return <a className={`${styles.brand} ${compact ? styles.compact : ''}`} href="#home" aria-label="Yangon International School home">
    {/* Placeholder: replace monogram with the official school crest when supplied. */}
    <span className={styles.crestPlaceholder} title="Placeholder: official school crest required">YIS</span>
    <span>Yangon International<small>School</small></span>
  </a>;
}
