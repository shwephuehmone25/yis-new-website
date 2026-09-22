import { useEffect, useRef } from "react";
import Button from "./Button";
import styles from "./UI.module.css";
export default function ActionDialog({ action, onClose }) {
  const ref = useRef(null);
  useEffect(() => {
    if (action && !ref.current.open) ref.current.showModal();
  }, [action]);
  return (
    <dialog
      ref={ref}
      className={styles.dialog}
      onCancel={onClose}
      onClose={onClose}
      aria-labelledby="action-title"
    >
      <h2 id="action-title">{action}</h2>
      <p>
        This {action?.toLowerCase().includes("video") ? "video" : "destination"}{" "}
        has not been provided yet. Please contact the school for details.
      </p>
      <a href="mailto:admissions.ygn@yis-yangon.edu.mm">
        admissions.ygn@yis-yangon.edu.mm
      </a>
      <Button onClick={() => ref.current.close()}>Close</Button>
    </dialog>
  );
}
