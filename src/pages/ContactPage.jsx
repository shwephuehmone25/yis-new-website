import { useEffect, useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import MainLayout from "../components/layout/MainLayout";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import useScrollEffects from "../hooks/useScrollEffects";
import styles from "./contact/Contact.module.css";

function Heading({ children }) {
  return (
    <div className={styles.heading}>
      <h2>{children}</h2>
      <span />
    </div>
  );
}
function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="contact-title">
      <img src="/mandalay/mdy-camp.jpg" alt="" />
      <div>
        <h1 id="contact-title">Contact us</h1>
        <span aria-hidden="true" />
      </div>
    </section>
  );
}
function ContactStrip() {
  return (
    <section className={styles.strip}>
      <Container narrow>
        <div className={styles.contactItem}>
          <Phone aria-hidden="true" />
          <span>
            <b>Admissions hotline</b>
            <a href="tel:+959777603000">+95 (9) 777 60 3000</a>
          </span>
        </div>
        <div className={styles.contactItem}>
          <Mail aria-hidden="true" />
          <span>
            <b>Admission inquiries</b>
            <a href="mailto:admission.mdy@yis.edu.mm">
              admission.mdy@yis.edu.mm
            </a>
          </span>
        </div>

        <div className={styles.contactItem}>
          <Mail aria-hidden="true" />
          <span>
            <b>Business inquiries</b>
            <a href="mailto:businessoffice@yis.edu.mm">
              businessoffice@yis.edu.mm
            </a>
          </span>
        </div>
      </Container>
    </section>
  );
}
const contactTeam = [
  {
    image: "/mandalay/contact-one.jpg",
    name: "Hnin Akari Oo@Nora",
    role: "Admission Officer",
    email: "Hninakarioo@yis.edu.mm",
    phone: "+95(9)777603000",
  },
  {
    image: "/mandalay/contact-2.jpg",
    name: "Khaing Thiri Wai@Karen",
    role: "Administrative Assistant (High School)",
    email: "ktwai@yis.edu.mm",
    phone: "+95(9)777602000",
  },
  {
    image: "/mandalay/contact-3.jpg",
    name: "May Zin Soe",
    role: "Administrative Assistant (Elementary)",
    email: "mzsoe@yis.edu.mm",
    phone: "+95(9)777602000",
  },
];
function ContactTeam() {
  return (
    <section className={styles.team} aria-labelledby="team-title">
      <Container narrow>
        <div className={styles.teamIntro}>
          <small>Admissions support</small>
          <h2 id="team-title">Contact the Team</h2>
          <i aria-hidden="true" />
          <p>
            We welcome prospective students and parents to visit our campuses
            and view the facilities and resources available to our students.
            Admissions staff and school faculty are available on the Main Campus
            to conduct tours and answer your questions.
          </p>
          <p>
            Our admission staff can assist you in any way, please contact us.
          </p>
        </div>
        <div className={styles.teamGrid}>
          {contactTeam.map((member) => (
            <article key={member.email}>
              <div className={styles.teamPortrait}>
                <img
                  src={member.image}
                  alt={`Portrait of ${member.name}`}
                  loading="lazy"
                />
              </div>
              <div className={styles.teamDetails}>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
                <a href={`mailto:${member.email}`}>{member.email}</a>
                <a href={`tel:${member.phone.replace(/[^+\d]/g, "")}`}>
                  {member.phone}
                </a>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
function FindUs() {
  return (
    <section className={styles.find}>
      <Container narrow>
        <Heading>Find us</Heading>
        <div className={styles.findGrid}>
          <article>
            <h3>YIS Mandalay</h3>
            <div>
              <MapPin />
              <span>
                <b>Campus address</b>
                MA-42, Between 42nd Street & 43rd Street, Between 52nd Street &
                East Circular Road (Mandalay-Pyin Oo Lwin Road), Ye Mon Taung
                Quarter,
                <br />
                Mahar Aung Myay Township, Mandalay
              </span>
            </div>
            <div>
              <Mail />
              <span>
                <b>General enquiries</b>
                <a href="mailto:admissions.mdy@yismyanmar.com">
                  admissions.mdy@yismyanmar.com
                </a>
              </span>
            </div>
            <footer>
              <b>Follow us</b>
              <nav aria-label="Social media">
                <a
                  href="https://www.facebook.com/YISMandalay21C"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF aria-hidden="true" />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCnTUWGLkpL6SysjIyWabAUw/featured"
                  aria-label="YouTube"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube aria-hidden="true" />
                </a>
              </nav>
            </footer>
          </article>
          <div className={styles.map}>
            <iframe
              title="YIS Mandalay location on Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29606.399836498455!2d96.08420361449033!3d21.942239676375237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30cb6dd23bf6bbd7%3A0xe283b80bc76774f5!2sYangon%20International%20School%20Mandalay!5e0!3m2!1sen!2smm!4v1790051652933!5m2!1sen!2smm"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
function MessageForm() {
  const [draft, setDraft] = useState("");
  function submit(e) {
    e.preventDefault();
    const v = new FormData(e.currentTarget);
    const body = `Campus: ${v.get("campus")}\nPhone: ${v.get("phone")}\n\n${v.get("message")}\n\nFrom: ${v.get("name")}\nEmail: ${v.get("email")}`;
    setDraft(
      `mailto:admissions.mdy@yismyanmar.com?subject=${encodeURIComponent(v.get("subject"))}&body=${encodeURIComponent(body)}`,
    );
  }
  return (
    <section className={styles.message}>
      <Container narrow>
        <div>
          <small>Get in touch</small>
          <h2>Send us a message</h2>
          <i />
          <p>
            Whether you have a question about admissions, programmes, or school
            life at YIS, our team is happy to help. Fill in the form and we will
            be in touch as soon as possible.
          </p>
          <aside>
            <b>Office hours</b>
            <strong>Monday – Friday</strong>
            <span>7:30 AM – 4:30 PM</span>
            <strong>Saturday – Sunday</strong>
            <span>Closed</span>
          </aside>
        </div>
        <form onSubmit={submit} onChange={() => setDraft("")}>
          <div className={styles.formGrid}>
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
              Phone number
              <input name="phone" type="tel" placeholder="+95 9 ..." />
            </label>
            <label>
              Campus
              <select name="campus">
                <option>Mandalay Campus</option>
                <option>Yangon Campus</option>
              </select>
            </label>
            <label className={styles.full}>
              Subject *
              <select name="subject" required defaultValue="">
                <option value="" disabled>
                  Select a subject...
                </option>
                <option>Admissions enquiry</option>
                <option>Campus tour</option>
                <option>Academic programmes</option>
                <option>General enquiry</option>
              </select>
            </label>
            <label className={styles.full}>
              Message *
              <textarea
                name="message"
                rows="6"
                placeholder="Write your message here..."
                required
              />
            </label>
          </div>
          <Button type="submit">Send message</Button>
          {draft && (
            <p className={styles.status} role="status">
              Your message is ready, but has not been sent.{" "}
              <a href={draft}>Open your email app to send it.</a>
            </p>
          )}
        </form>
      </Container>
    </section>
  );
}
export default function ContactPage() {
  useScrollEffects();
  useEffect(() => {
    const p = document.title;
    document.title = "Contact Us | Yangon International School";
    return () => {
      document.title = p;
    };
  }, []);
  return (
    <MainLayout>
      <Hero />
      <ContactStrip />
      <ContactTeam />
      <FindUs />
      <MessageForm />
    </MainLayout>
  );
}
