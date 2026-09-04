import styles from './Cards.module.css';
export default function ProgramCard({ title, ages, students }) {
  return <article className={styles.program}><div className={styles.programTitle}><h3>{title}</h3><span>{ages}</span></div><p>Comprehensive international curriculum aligned with global standards, preparing pupils for successive stages of cognitive and social growth.</p><div className={styles.density}><span>Est. student density:</span> <strong>{students} Students</strong></div></article>;
}
