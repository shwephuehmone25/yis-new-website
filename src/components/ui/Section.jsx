import Container from "./Container";
import styles from "./UI.module.css";
export default function Section({
  children,
  id,
  tone = "white",
  narrow = false,
}) {
  return (
    <section id={id} className={`${styles.section} ${styles[tone]}`}>
      <Container narrow={narrow}>{children}</Container>
    </section>
  );
}
