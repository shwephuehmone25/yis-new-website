import { useEffect } from "react";
import MainLayout from "../components/layout/MainLayout";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import useScrollEffects from "../hooks/useScrollEffects";
import styles from "./apply/Apply.module.css";

function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="apply-title">
      <img src="/mandalay/mdy-about-1.jpg" alt="" />
      <div>
        <h1 id="apply-title">Apply to YIS</h1>
        <span />
      </div>
    </section>
  );
}
function ApplyCTA() {
  return (
    <section className={styles.apply}>
      <Container narrow>
        <h2>Apply to YIS Mandalay</h2>
        <span />
        <p>
          We welcome families to contact our admissions team, arrange a campus
          visit, and learn about becoming part of the YIS Mandalay community.
          Enrollment is now open for the upcoming academic year.
        </p>
        <div>
          <Button variant="gold" href="/book-tour">
            Join us
          </Button>
          <Button variant="outline" href="tel:+959777603000">
            +95 (0) 9 777 60 3000
          </Button>
        </div>
      </Container>
    </section>
  );
}
export default function ApplyPage() {
  useScrollEffects();
  useEffect(() => {
    const previous = document.title;
    document.title = "Apply to YIS | Yangon International School";
    return () => {
      document.title = previous;
    };
  }, []);
  return (
    <MainLayout>
      <Hero />
      <ApplyCTA />
    </MainLayout>
  );
}
