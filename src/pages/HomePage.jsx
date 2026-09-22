import MainLayout from "../components/layout/MainLayout";
import Container from "../components/ui/Container";
import Section from "../components/ui/Section";
import SectionHeading from "../components/ui/SectionHeading";
import Button from "../components/ui/Button";
import CampusCard from "../components/cards/CampusCard";
import ProgramCard from "../components/cards/ProgramCard";
import AccreditationBadge from "../components/cards/AccreditationBadge";
import { partners } from "../data/partners";
import styles from "./HomePage.module.css";
import useScrollEffects from "../hooks/useScrollEffects";

const MANDALAY_CAMPUS_VIDEO = "https://www.youtube.com/watch?v=lxdT8bA1T14";
const YANGON_CAMPUS_VIDEO = "https://www.youtube.com/watch?v=RGbOVaR1UsQ";
const vision =
  "YIS prepares students for higher levels of learning and to be responsible global citizens.";
const stats = [
  ["2", "State-of-the-art campuses"],
  ["1,200+", "Enrolled students"],
  ["95%", "University placement"],
  ["40+", "Student nationalities"],
  ["20+", "Years of excellence"],
];
const programs = [
  ["Early Years", "Ages 2-5", 240],
  ["Primary School", "Grades 1-5", 420],
  ["Middle School", "Grades 6-8", 280],
  ["High School", "Grades 9-12", 300],
];
const steps = [
  ["Apply Online", "Submit application form & academic transcripts."],
  ["Campus Visit", "Tour our outstanding academic facilities."],
  ["Assessment", "Student readiness interview & evaluation."],
  ["Enrollment", "Receive formal offer & join our cohort."],
];

function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <img
        className={styles.heroImage}
        src="/yangon.webp"
        alt=""
        fetchPriority="high"
      />
      <Container>
        <p className={styles.eyebrow}>Welcome to Yangon International School</p>
        <h1 id="hero-title">
          Progress Through
          <br />
          Education
        </h1>
        <p className={styles.intro}>{vision}</p>
      </Container>
    </section>
  );
}
function SchoolStats() {
  return (
    <section className={styles.stats} aria-label="School at a glance">
      <Container>
        <dl>
          {stats.map(([value, label]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
function AboutUs() {
  return (
    <section id="about" className={styles.about} aria-labelledby="about-title">
      <Container className={styles.aboutInner}>
        <figure className={styles.aboutImage}>
          <img
            src="/mandalay/about-yis.webp"
            alt="A YIS teacher supporting a student in the classroom"
            loading="lazy"
          />
          <figcaption>
            <strong>2004</strong>
            <span>Yangon campus established</span>
          </figcaption>
        </figure>
        <div className={styles.aboutContent}>
          <span>About YIS</span>
          <h2 id="about-title">Yangon International School</h2>
          <i aria-hidden="true" />
          <p>
            Yangon International School is a college preparatory group of
            schools. The Yangon Campus was established in 2004. For over 15
            years, we have been committed to delivering the highest level of
            education for our students. We are proud to be opening the Mandalay
            Campus this year to expand the reach of our dedication to lifelong
            learning to more students across Myanmar.
          </p>
        </div>
      </Container>
    </section>
  );
}
function Campuses({ onAction }) {
  return (
    <Section id="campuses" narrow>
      <SectionHeading title="Our Campuses">
        Serving key regions in Myanmar with dedicated faculty, modern
        infrastructure, and vibrant student communities.
      </SectionHeading>
      <div className={styles.campusGrid}>
        <CampusCard
          name="Yangon"
          image="https://yis.edu.mm/wp-content/uploads/2025/12/YIS_933x700.webp"
          videoHref={YANGON_CAMPUS_VIDEO}
          description="Our Yangon campus has been creating the leaders of tomorrow for over 15 years. Our international, certified teaching faculty and local support staff create a winning environment for every student."
          onAction={onAction}
        />
        <CampusCard
          name="Mandalay"
          href="/mandalay"
          image="/mandalay/mdy.jpg"
          videoHref={MANDALAY_CAMPUS_VIDEO}
          description="Opening this year in a state-of-the-art facility with world-class teachers, following the learning philosophy and dedication to students that has helped YIS to be so well regarded as a learning institution."
          onAction={onAction}
        />
      </div>
    </Section>
  );
}
function VisionMission() {
  return (
    <section className={styles.values}>
      <Container className={styles.valuesGrid}>
        <div>
          <h2>Our Vision</h2>
          <p>{vision}</p>
        </div>
        <div>
          <h2>Our Mission</h2>
          <p>
            YIS is a network of college preparatory schools that seeks to foster
            the development of the whole child, who is a participating global
            citizen and lifelong learner: one who is academically well-prepared,
            socially responsible, culturally sensitive, and personally
            fulfilled.
          </p>
        </div>
      </Container>
    </section>
  );
}
function AcademicPrograms() {
  return (
    <Section id="learning" tone="cream">
      <SectionHeading title="Academic Programs">
        A challenging, student-centered curriculum from Early Years to
        graduation, preparing global scholars.
      </SectionHeading>
      <div className={styles.programGrid}>
        {programs.map(([title, ages, students], index) => (
          <ProgramCard
            key={title}
            title={title}
            ages={ages}
            students={students}
            index={index}
          />
        ))}
      </div>
    </Section>
  );
}
function Admissions({ onAction }) {
  return (
    <Section id="admissions">
      <SectionHeading title="Admissions">
        The first step is to contact our admissions and to arrange a visit to
        truly understand how special our school is and what a wonderful place
        for your child to grow and develop into a leader of tomorrow.
        <br></br>We look forward to welcoming you to our Campus
      </SectionHeading>
      <ol className={styles.steps}>
        {steps.map(([title, description], index) => (
          <li key={title}>
            <span className={styles.stepNumber}>{index + 1}</span>
            <div>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </li>
        ))}
      </ol>
      <div className={styles.applyActions}>
        <Button onClick={() => onAction("Apply for Mandalay")}>
          Apply for Mandalay
        </Button>
        <Button variant="gold" onClick={() => onAction("Apply for Yangon")}>
          Apply for Yangon
        </Button>
      </div>
    </Section>
  );
}
function Accreditations() {
  return (
    <section className={styles.affiliations} id="community">
      <Container>
        <h2>Our Connections</h2>
        <div className={styles.affiliationGrid}>
          {partners.map((partner) => (
            <AccreditationBadge key={partner.acronym} {...partner} />
          ))}
        </div>
      </Container>
    </section>
  );
}
export default function HomePage() {
  useScrollEffects();

  return (
    <MainLayout>
      {(onAction) => (
        <>
          <Hero />
          <SchoolStats />
          <AboutUs />
          <Campuses onAction={onAction} />
          <VisionMission />
          <AcademicPrograms />
          <Admissions onAction={onAction} />
          <Accreditations />
        </>
      )}
    </MainLayout>
  );
}
