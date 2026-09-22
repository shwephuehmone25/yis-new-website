import { useEffect } from "react";
import {
  Activity,
  Award,
  BookOpen,
  Dumbbell,
  Medal,
  Music,
  Palette,
  Sparkles,
  Trophy,
  Users,
} from "lucide-react";
import MainLayout from "../components/layout/MainLayout";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import styles from "./activities/Activities.module.css";
import useScrollEffects from "../hooks/useScrollEffects";

const img = (name) => `/mandalay/${name}`;
const sports = [
  [
    "⚽",
    "Soccer",
    "Eagles soccer teams compete across age groups, building tactical thinking, teamwork, and genuine school spirit.",
  ],
  [
    "🏀",
    "Basketball",
    "Fast-paced court action develops agility, communication, and strategic play while fostering friendships.",
  ],
  [
    "🏊",
    "Swimming",
    "From technique clinics to gala races, our swimming programme builds endurance, discipline, and confidence.",
  ],
  [
    "🏓",
    "Table tennis",
    "Precision and reflexes meet mental focus as students compete in a favourite year-round activity.",
  ],
  [
    "🏃",
    "Track & field",
    "Sprint, jump, and throw: our athletics programme celebrates individual achievement and perseverance.",
  ],
  [
    "🏐",
    "Volleyball",
    "A team game built entirely on communication, students work together to set each other up for success.",
  ],
  [
    "🥋",
    "Taekwondo",
    "Discipline, respect, and self-confidence are the cornerstones of our taekwondo programme.",
  ],
];
const challenges = [
  [
    Dumbbell,
    "Big Family Fitness Walk",
    "A beloved whole-school event where students, families, and staff come together for a walk celebrating health and community.",
  ],
  [
    BookOpen,
    "Science Fair",
    "Students design, test, and present their own scientific investigations, nurturing curiosity and discovery.",
  ],
  [
    Users,
    "Sports Together",
    "An inter-school partnership event bringing students together through sport, building bridges and lasting friendships.",
  ],
  [
    Award,
    "Spell-a-thon",
    "Our annual spelling competition sharpens vocabulary, boosts confidence in public speaking, and rewards academic dedication.",
  ],
  [
    Sparkles,
    "Myanmar Picnic & Field Day",
    "A celebration of Myanmar culture and the outdoors with traditional games, local food, and a day of joyful community connection.",
  ],
  [
    Medal,
    "Swimming Gala",
    "The highlight of our aquatics calendar where students compete in individual and relay events before the whole school.",
  ],
];
const arts = [
  [Palette, "Art exhibition"],
  [Music, "Musical music show"],
  [Sparkles, "Talent show"],
  [BookOpen, "Book character dress-up day"],
  [Trophy, "YIS Live"],
  [Users, "Fashion show"],
  [Activity, "TEDx YIS"],
  [Music, "Strings program"],
  [Users, "Choir"],
];
const gallery = [
  "art-1.jpg",
  "art-2.jpg",
  "art-3.jpg",
  "art-4.jpg",
  "art-5.jpg",
  "about-yis.webp",
  "about-yis-2.webp",
  "mdy-about-1.jpg",
  "770612831_1004431875954033_1482376510335680171_n.jpg",
  "770738450_2273716363468353_1001414716257395112_n.png",
  "771802143_1241902099010315_2643673728778546979_n.png",
  "9a-scaled.jpg",
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
      <img src={img("high.jpg")} alt="" />
      <h1>Learning beyond the classroom</h1>
    </section>
  );
}
function Athletics() {
  return (
    <section className={styles.athletics}>
      <Container narrow>
        <Heading>Eagles on the field</Heading>
        <p className={styles.intro}>
          Sport at YIS is more than competition — it is a training ground for
          perseverance, sportsmanship, and the unbeatable feeling of
          representing your school with pride.
        </p>
        <div className={styles.sportStrip}>
          {[
            "770612831_1004431875954033_1482376510335680171_n.jpg",
            "gym.jpg",
            "high.jpg",
          ].map((name) => (
            <img key={name} src={img(name)} alt="YIS athletics and sports" />
          ))}
        </div>
        <div className={styles.sportGrid}>
          {sports.map(([icon, title, text]) => (
            <article key={title}>
              <span>{icon}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
          <aside>
            <b>Teamwork</b>
            <b>Perseverance</b>
            <b>Sportsmanship</b>
            <b>School spirit</b>
          </aside>
        </div>
      </Container>
    </section>
  );
}
function Challenge() {
  return (
    <section className={styles.challenge}>
      <Container narrow>
        <Heading>Rise to the challenge</Heading>
        <p className={styles.intro}>
          From science labs to picnic fields, YIS competitions challenge
          students to think, collaborate, and push beyond their limits.
        </p>
        <div className={styles.challengeGrid}>
          {challenges.map(([Icon, title, text]) => (
            <article key={title}>
              <Icon />
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
function Arts() {
  return (
    <section className={styles.arts}>
      <Container narrow>
        <Heading light>Create. Express. Inspire.</Heading>
        <p className={styles.intro}>
          Every Eagle has a creative voice. Through art, music, drama, and
          design, our performing arts programme gives students the freedom to
          explore and inspire the world around them.
        </p>
        <div className={styles.artStrip}>
          {["art-1.jpg", "art-2.jpg", "art-3.jpg", "art-4.jpg"].map((name) => (
            <img
              key={name}
              src={img(name)}
              alt="Students taking part in the arts"
            />
          ))}
        </div>
        <div className={styles.artGrid}>
          {arts.map(([Icon, title]) => (
            <article key={title}>
              <Icon />
              <h3>{title}</h3>
              <p>
                Students explore their creativity, develop confidence, and share
                their talents through performance and collaboration.
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
function Overview() {
  return (
    <section className={styles.overview}>
      <Container narrow>
        <Heading eyebrow="2025–26 academic year">Activity overview</Heading>
        <p className={styles.intro}>
          A full calendar of activities across three pillars — every Eagle finds
          their place.
        </p>
        <div className={styles.pills}>
          <b>Athletics</b>
          <span>Competition</span>
          <span>Performing arts</span>
        </div>
        <div className={styles.schedule}>
          {sports.slice(0, 7).map(([, title], i) => (
            <span key={title} className={styles[`type${i % 3}`]}>
              {title}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
function Gallery() {
  return (
    <section className={styles.gallery}>
      <Container narrow>
        <Heading eyebrow="Gallery">Eagles in action</Heading>
        <p className={styles.intro}>
          Moments from the field, the stage, and the classroom — a glimpse into
          the full richness of life at YIS.
        </p>
        <div>
          {gallery.map((name, i) => (
            <img
              key={name}
              className={styles[`photo${i % 5}`]}
              src={img(name)}
              alt="YIS students in action"
              loading="lazy"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
function CTA() {
  return (
    <section className={styles.cta}>
      <Container narrow>
        <Heading light>Lead. Perform. Thrive.</Heading>
        <p>
          Co-curricular activities are not extras at YIS — they are essential.
          Every sport played, every note sung, and every competition entered is
          a vital part of the Eagle journey.
        </p>
        <div>
          <Button variant="gold" href="/mandalay#tour">
            Explore our campus
          </Button>
          <Button variant="ghost" href="/welcome-messages">
            Meet our leaders
          </Button>
        </div>
      </Container>
    </section>
  );
}
export default function ActivitiesPage() {
  useScrollEffects();
  useEffect(() => {
    const prev = document.title;
    document.title = "Activities | Yangon International School";
    return () => {
      document.title = prev;
    };
  }, []);
  return (
    <MainLayout>
      <Hero />
      <Athletics />
      <Challenge />
      <Arts />
      <Overview />
      <Gallery />
      <CTA />
    </MainLayout>
  );
}
