import styles from './Cards.module.css';
export default function AccreditationBadge({ acronym, name }) {
  return <div className={styles.accreditation}><span>{acronym}</span><p>{name}</p></div>;
}
