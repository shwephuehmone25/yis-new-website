import styles from './UI.module.css';
export default function SectionHeading({ title, children }) {
  return <div className={styles.heading}><h2>{title}</h2>{children && <p>{children}</p>}</div>;
}
