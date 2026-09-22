import { useEffect, useState } from "react";
import { CheckCircle2, ChevronDown } from "lucide-react";
import MainLayout from "../components/layout/MainLayout";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import useScrollEffects from "../hooks/useScrollEffects";
import styles from "./careers/Careers.module.css";

const benefits = [
  [
    "🌏",
    "Global community",
    "Work alongside educators and students from dozens of nationalities in one of Southeast Asia's most dynamic cities.",
  ],
  [
    "🎓",
    "Academic excellence",
    "Deliver a rigorous American-based curriculum and IB Diploma Programme supported by professional development.",
  ],
  [
    "🏛️",
    "Cultural immersion",
    "Myanmar is a country of breathtaking culture, history, and warmth. Life at YIS is an adventure rich in meaning.",
  ],
  [
    "❤️",
    "Meaningful impact",
    "Shape the lives of students who will become leaders, innovators, and global citizens.",
  ],
  [
    "📈",
    "Professional growth",
    "Benefit from ongoing professional development, a collaborative team culture, and access to ISS's extensive educator network.",
  ],
  [
    "🤝",
    "Community & support",
    "Join a tight-knit staff community that looks out for one another from your first day to your farewell gathering.",
  ],
];
const requirements = [
  "Bachelor's degree or higher in your subject area or education",
  "Teaching certification or licensure from your home country",
  "2+ years of classroom experience preferred",
  "Strong interpersonal and cross-cultural communication skills",
  "Openness to adventure, cultural immersion, and community life",
  "Commitment to whole-child development and lifelong learning",
  "Experience with IB, AP, or American curriculum is an advantage",
];
const jobs = [
  {
    title: "Elementary classroom teacher",
    team: "Teaching",
    level: "Elementary",
    type: "Full-time",
  },
  {
    title: "High school English teacher",
    team: "Teaching",
    level: "High School",
    type: "Full-time",
  },
  {
    title: "IB Diploma mathematics teacher",
    team: "Teaching",
    level: "IB Diploma",
    type: "Full-time",
  },
  {
    title: "Middle school science teacher",
    team: "Teaching",
    level: "Middle School",
    type: "Full-time",
  },
  {
    title: "Physical education teacher",
    team: "Teaching",
    level: "All Levels",
    type: "Full-time",
  },
  {
    title: "ESL / ELL support teacher",
    team: "Support Staff",
    level: "K–12",
    type: "Full-time",
  },
  {
    title: "Division coordinator",
    team: "Leadership",
    level: "Secondary",
    type: "Full-time",
  },
];
const steps = [
  [
    "01",
    "Browse openings",
    "Visit the ISS-Schrole Advantage platform to explore current vacancies at YIS Yangon and YIS Mandalay.",
  ],
  [
    "02",
    "Submit application",
    "Apply through ISS-Schrole Advantage, or email your CV and cover letter to our Director.",
  ],
  [
    "03",
    "Interview",
    "Shortlisted candidates are invited to an interview — virtual or in-person — with school leadership.",
  ],
  [
    "04",
    "Join the Eagles",
    "Receive your offer, complete onboarding, and begin one of the most rewarding chapters of your career.",
  ],
];

function Heading({ eyebrow, children, light = false }) {
  return (
    <div className={`${styles.heading} ${light ? styles.light : ""}`}>
      {eyebrow && <small>{eyebrow}</small>}
      <h2>{children}</h2>
      <i />
    </div>
  );
}
function Hero() {
  return (
    <section className={styles.hero}>
      <img src="/mandalay/mdy-about-1.jpg" alt="" />
      <h1>Career</h1>
    </section>
  );
}
function Life() {
  return (
    <section className={styles.life}>
      <Container narrow>
        <Heading>Life at YIS Yangon</Heading>
        <p className={styles.intro}>
          Teaching at YIS is more than a job — it is an adventure, a calling,
          and a community. Here is what makes our campus a remarkable place to
          grow your career.
        </p>
        <div className={styles.benefits}>
          {benefits.map(([icon, title, text]) => (
            <article key={title}>
              <span>{icon}</span>
              <h3>{title}</h3>
              <i />
              <p>{text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
function Educator() {
  return (
    <section className={styles.educator}>
      <Container narrow>
        <figure>
          <img
            src="/mandalay/mdy-about-1.jpg"
            alt="A YIS educator supporting a student"
          />
        </figure>
        <div>
          <h2>The ideal YIS educator</h2>
          <i />
          <p>
            We seek subject-matter experts who bring passion, professionalism,
            and a genuine love of learning to every classroom. Beyond
            credentials, we value curiosity, resilience, and a spirit of
            cultural openness.
          </p>
          <ul>
            {requirements.map((item) => (
              <li key={item}>
                <CheckCircle2 />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
function Openings() {
  const [filter, setFilter] = useState("Teaching");
  const [open, setOpen] = useState(null);
  const visible = jobs.filter((job) => job.team === filter);
  return (
    <section className={styles.openings}>
      <Container narrow>
        <Heading eyebrow="2026–27 academic year">Current openings</Heading>
        <p className={styles.intro}>
          Positions below are representative openings. For the most current
          listings, please visit ISS-Schrole Advantage.
        </p>
        <div className={styles.tabs}>
          {["Teaching", "Leadership", "Support Staff"].map((tab) => (
            <button
              className={filter === tab ? styles.active : ""}
              onClick={() => {
                setFilter(tab);
                setOpen(null);
              }}
              key={tab}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className={styles.jobs}>
          {visible.map((job) => (
            <article key={job.title}>
              <button
                onClick={() => setOpen(open === job.title ? null : job.title)}
                aria-expanded={open === job.title}
              >
                <strong>{job.title}</strong>
                <span>{job.type}</span>
                <span>{job.level}</span>
                <b>Open</b>
                <ChevronDown />
              </button>
              {open === job.title && (
                <div>
                  <p>
                    YIS is seeking an experienced, collaborative educator
                    committed to student growth and international education.
                  </p>
                  <a href="#apply">Apply for this position</a>
                </div>
              )}
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
function Process() {
  return (
    <section className={styles.process}>
      <Container narrow>
        <Heading eyebrow="How to apply" light>
          The application process
        </Heading>
        <div className={styles.steps}>
          {steps.map(([number, title, text]) => (
            <article key={number}>
              <strong>{number}</strong>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <div className={styles.applicants}>
          <div>
            <b>International applicants</b>
            <span>Contact our Director directly:</span>
            <a href="mailto:admissions.mdy@yismyanmar.com">
              admissions.mdy@yismyanmar.com
            </a>
          </div>
          <div>
            <b>Myanmar national applicants</b>
            <span>Contact our HR office directly:</span>
            <a href="mailto:admissions.mdy@yismyanmar.com">
              admissions.mdy@yismyanmar.com
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
function Apply() {
  const [draft, setDraft] = useState("");
  function submit(e) {
    e.preventDefault();
    const v = new FormData(e.currentTarget);
    const body = `Position: ${v.get("position")}\nApplicant type: ${v.get("type")}\nProfile: ${v.get("profile")}\n\n${v.get("message")}\n\nFrom: ${v.get("name")} (${v.get("email")})`;
    setDraft(
      `mailto:admissions.mdy@yismyanmar.com?subject=${encodeURIComponent(`Career application: ${v.get("position")}`)}&body=${encodeURIComponent(body)}`,
    );
  }
  return (
    <section id="apply" className={styles.apply}>
      <Container narrow>
        <div>
          <h2>Apply to YIS directly</h2>
          <i />
          <p>
            Prefer to apply directly to our school? Send us your details below
            and our leadership team will be in touch.
          </p>
          <p>
            You can also attend one of the seasonal ISS Job Fair events where
            YIS recruiters are present.
          </p>
        </div>
        <form onSubmit={submit} onChange={() => setDraft("")}>
          <div>
            <label>
              Full name *
              <input name="name" placeholder="Your full name" required />
            </label>
            <label>
              Email address *
              <input
                name="email"
                type="email"
                placeholder="your@email.com"
                required
              />
            </label>
            <label>
              Position of interest
              <input
                name="position"
                placeholder="e.g. High School English"
                required
              />
            </label>
            <label>
              Applicant type
              <select name="type">
                <option>International Applicant</option>
                <option>Myanmar National Applicant</option>
              </select>
            </label>
            <label className={styles.full}>
              LinkedIn / portfolio URL
              <input
                name="profile"
                type="url"
                placeholder="https://linkedin.com/in/yourprofile"
              />
            </label>
            <label className={styles.full}>
              Cover letter / message *
              <textarea
                name="message"
                rows="5"
                placeholder="Tell us about yourself, your experience, and why you want to join YIS..."
                required
              />
            </label>
          </div>
          <Button type="submit">Submit application</Button>
          {draft && (
            <p role="status">
              Your application draft is ready.{" "}
              <a href={draft}>Open your email app to send it.</a>
            </p>
          )}
        </form>
      </Container>
    </section>
  );
}
export default function CareersPage() {
  useScrollEffects();
  useEffect(() => {
    const p = document.title;
    document.title = "Careers | Yangon International School";
    return () => {
      document.title = p;
    };
  }, []);
  return (
    <MainLayout>
      <Hero />
      <Life />
      <Educator />
      <Openings />
      <Process />
      <Apply />
    </MainLayout>
  );
}
