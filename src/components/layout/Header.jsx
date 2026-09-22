import Container from "../ui/Container";
import Brand from "./Brand";
import Navigation from "./Navigation";
import styles from "./Layout.module.css";
export default function Header({ onAction }) {
  return (
    <header id="home">
      <a className={styles.skipLink} href="#main">
        Skip to content
      </a>
      <div className={styles.topbar}>
        <Container className={styles.topbarInner}>
          <div className={styles.emails}>
            <a href="mailto:admissions.ygn@yis-yangon.edu.mm">
              Yangon: admissions.ygn@yis-yangon.edu.mm
            </a>
            <a href="mailto:admissions.mdy@yismyanmar.com">
              Mandalay: admissions.mdy@yismyanmar.com
            </a>
          </div>
          <div className={styles.topActions}>
            <button onClick={() => onAction("Sign In")}>Sign In</button>
            <a href="https://yismandalay.openapply.com" target="_blank" rel="noopener noreferrer">
              Apply Now
            </a>
          </div>
        </Container>
      </div>
      <Container className={styles.headerInner}>
        <Brand />
        <Navigation />
      </Container>
    </header>
  );
}
