import styles from "./Cards.module.css";

export default function ProgramCard({ title, ages, students, index }) {
  return (
    <article className={styles.program}>
      <span className={styles.programNumber} aria-hidden="true">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className={styles.programTitle}>
        <h3>{title}</h3>
        <span>{ages}</span>
      </div>
      <p>
        Comprehensive international curriculum aligned with global standards,
        preparing pupils for successive stages of cognitive and social growth.
      </p>
      <div className={styles.density}>
        <span>Est. student density:</span> <strong>{students} Students</strong>
      </div>
    </article>
  );
}
