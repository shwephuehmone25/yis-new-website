import styles from "./Cards.module.css";
export default function AccreditationBadge({
  acronym,
  name,
  image,
  variant = "outline",
  tone = "wine",
}) {
  return (
    <div
      className={`${styles.accreditation} ${image ? styles.imageBadge : variant === "solid" ? styles.solidBadge : ""} ${styles[tone] || ""}`}
    >
      {image ? (
        <img
          src={image}
          alt={`${acronym} logo`}
          width="160"
          height="96"
          loading="lazy"
        />
      ) : (
        <span>{acronym}</span>
      )}
      <p>{name}</p>
    </div>
  );
}
