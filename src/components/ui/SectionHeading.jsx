import styles from "./UI.module.css";
export default function SectionHeading({
  title,
  children,
  eyebrow,
  align = "center",
  variant = "classic",
}) {
  return (
    <div
      className={`${styles.heading} ${align === "left" ? styles.leftHeading : ""} ${variant === "campus" ? styles.campusHeading : ""}`}
    >
      {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}
