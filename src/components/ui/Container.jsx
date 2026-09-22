import styles from "./UI.module.css";
export default function Container({
  children,
  narrow = false,
  className = "",
}) {
  return (
    <div
      className={`${styles.container} ${narrow ? styles.narrow : ""} ${className}`}
    >
      {children}
    </div>
  );
}
