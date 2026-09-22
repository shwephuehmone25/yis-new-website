import { useEffect, useState } from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import MainLayout from "../components/layout/MainLayout";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import useScrollEffects from "../hooks/useScrollEffects";
import styles from "./book-tour/BookTour.module.css";

function Hero() {
  return (
    <section className={styles.hero}>
      <img src="/mandalay/mdy-about-1.jpg" alt="" />
      <div>
        <h1>Book a tour</h1>
        <span />
      </div>
    </section>
  );
}
function TourForm() {
  const [draft, setDraft] = useState("");
  function submit(e) {
    e.preventDefault();
    const v = new FormData(e.currentTarget);
    const lines = [
      "YIS Mandalay tour request",
      `Student: ${v.get("student")}`,
      `Date of birth: ${v.get("dob")}`,
      `Gender: ${v.get("gender")}`,
      `Parent: ${v.get("parent")}`,
      `Email: ${v.get("email")}`,
      `Phone: ${v.get("phone")}`,
      `Relationship: ${v.get("relationship")}`,
      `Preferred date: ${v.get("date")}`,
      `Preferred time: ${v.get("time")}`,
      `Enrollment year: ${v.get("year")}`,
      `Grade applying for: ${v.get("grade")}`,
      `Grade completed: ${v.get("completed")}`,
      `Current school: ${v.get("school")}`,
      `Referral: ${v.get("referral")}`,
      "",
      v.get("reasons"),
    ];
    setDraft(
      `mailto:admissions.mdy@yismyanmar.com?subject=${encodeURIComponent("Campus tour request")}&body=${encodeURIComponent(lines.join("\n"))}`,
    );
  }
  const grades = [
    "Pre-Kindergarten",
    "Kindergarten",
    "Grade 1",
    "Grade 2",
    "Grade 3",
    "Grade 4",
    "Grade 5",
    "Grade 6",
    "Grade 7",
    "Grade 8",
    "Grade 9",
    "Grade 10",
    "Grade 11",
    "Grade 12",
  ];
  return (
    <form onSubmit={submit} onChange={() => setDraft("")}>
      <h2>Tour request form</h2>
      <i />
      <div className={styles.formGrid}>
        <label>
          Student's name
          <input name="student" placeholder="Full name" required />
        </label>
        <label>
          Date of birth
          <input name="dob" type="date" required />
        </label>
        <label>
          Gender
          <select name="gender" defaultValue="" required>
            <option value="" disabled>
              Select
            </option>
            <option>Female</option>
            <option>Male</option>
            <option>Prefer not to say</option>
          </select>
        </label>
        <label>
          Parent's name
          <input name="parent" placeholder="Full name" required />
        </label>
        <label>
          Parent's email
          <input
            name="email"
            type="email"
            placeholder="your@email.com"
            required
          />
        </label>
        <label>
          Contact number
          <input name="phone" type="tel" placeholder="+95 ..." required />
        </label>
        <label>
          Relationship with student
          <select name="relationship">
            <option>Parent</option>
            <option>Guardian</option>
            <option>Other</option>
          </select>
        </label>
        <label>
          Preferred tour time
          <select name="time">
            <option>8:00 AM</option>
            <option>10:00 AM</option>
            <option>1:00 PM</option>
            <option>3:00 PM</option>
          </select>
        </label>
        <label>
          Preferred tour date
          <input name="date" type="date" required />
        </label>
        <label>
          Anticipated enrollment year
          <select name="year">
            <option>2026–27</option>
            <option>2027–28</option>
          </select>
        </label>
        <label>
          Grade applying for
          <select name="grade" defaultValue="" required>
            <option value="" disabled>
              Select grade
            </option>
            {grades.map((g) => (
              <option key={g}>{g}</option>
            ))}
          </select>
        </label>
        <label>
          Grade completed
          <input name="completed" placeholder="e.g. Grade 4" />
        </label>
        <label>
          Current school
          <input name="school" placeholder="School name" />
        </label>
        <label>
          How did you hear about YIS?
          <select name="referral" defaultValue="">
            <option value="">Select</option>
            <option>Friend or family</option>
            <option>Social media</option>
            <option>Web search</option>
            <option>School event</option>
            <option>Other</option>
          </select>
        </label>
        <label className={styles.full}>
          Reasons for considering YIS
          <textarea
            name="reasons"
            rows="5"
            placeholder="Tell us what brought you to YIS Mandalay..."
          />
        </label>
        <div className={`${styles.full} ${styles.campus}`}>
          <b>Campus</b>
          <span>◉ YIS Mandalay</span>
        </div>
      </div>
      <Button type="submit">Submit tour request</Button>
      {draft && (
        <p className={styles.status} role="status">
          Your tour request is ready, but has not been sent.{" "}
          <a href={draft}>Open your email app to send it.</a>
        </p>
      )}
    </form>
  );
}
function Content() {
  return (
    <section className={styles.content}>
      <Container narrow>
        <div className={styles.copy}>
          <small>Visit us</small>
          <h2>Book a tour</h2>
          <i />
          <p>
            We invite you to visit our Mandalay campus and see first-hand what
            makes YIS a wonderful place for your child to grow and develop into
            a leader of tomorrow.
          </p>
          <p>
            Tours are available Monday to Friday, 8:00 AM – 4:00 PM. Our
            admissions team will guide you through every classroom, facility,
            and programme.
          </p>
          <address>
            <span>
              <MapPin />
              MA-42, Between 42nd Street & 43rd Street, Between 52nd Street & East Circular Road (Mandalay-Pyin Oo Lwin Road), Ye Mon Taung Quarter,
              <br />
              Mahar Aung Myay Township, Mandalay
            </span>
            <span>
              <Phone />
              <a href="tel:+959777603000">+95 (0) 9 777 60 3000</a>
            </span>
            <span>
              <Mail />
              <a href="mailto:admissions.mdy@yismyanmar.com">
                admissions.mdy@yismyanmar.com
              </a>
            </span>
            <span>
              <Clock />
              Mon–Fri: 8:00 AM – 4:00 PM
            </span>
          </address>
        </div>
        <TourForm />
      </Container>
    </section>
  );
}
export default function BookTourPage() {
  useScrollEffects();
  useEffect(() => {
    const p = document.title;
    document.title = "Book a Tour | Yangon International School";
    return () => {
      document.title = p;
    };
  }, []);
  return (
    <MainLayout>
      <Hero />
      <Content />
    </MainLayout>
  );
}
