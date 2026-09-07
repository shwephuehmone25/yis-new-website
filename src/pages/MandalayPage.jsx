import { useEffect } from 'react';
import { ArrowRight, BookOpen, Clock, Flag, Globe, Handshake, Lightbulb, Mail, MapPin, Phone, Play, School } from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';
import Container from '../components/ui/Container';
import Section from '../components/ui/Section';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import CampusCard from '../components/cards/CampusCard';
import AccreditationBadge from '../components/cards/AccreditationBadge';
import ContactForm from './mandalay/ContactForm';
import { facilities, learning, news } from './mandalay/content';
import { partners } from '../data/partners';
import styles from './mandalay/Mandalay.module.css';

const asset = name => `/mandalay/${name}`;
const outcomes = [
  [BookOpen, 'Academically Well-Prepared', 'Equipped with the knowledge, skills, and critical thinking needed to thrive at the world’s best universities.'],
  [Handshake, 'Socially Responsible', 'Committed to contributing positively to their community and to society at large, locally and globally.'],
  [Globe, 'Culturally Sensitive', 'Respectful and appreciative of diverse cultures, perspectives, and ways of life across our interconnected world.'],
  [Lightbulb, 'Personally Fulfilled', 'Confident in their own identity, values, and purpose — ready to lead a meaningful and rewarding life.'],
];

function CampusHero({ onAction }) {
  return <section id="mandalay" className={styles.hero} aria-labelledby="mandalay-title">
    <img className={styles.backdrop} src={asset('mdy-hero.jpg')} alt="" fetchPriority="high" />
    <Container><h1 id="mandalay-title">Mandalay<br />Campus</h1><p>The newest addition to the YIS group of schools. A tradition of educational commitment, now bringing world-class learning to the heart of Mandalay.</p>
      <div className={styles.actions}><Button variant="gold" onClick={() => onAction('Mandalay campus video')}><Play size={15} aria-hidden="true" /> View campus video</Button><Button variant="ghost" href="/#yangon">Yangon campus</Button></div>
    </Container>
  </section>;
}

function Educators() {
  return <Section id="about" narrow><div className={styles.split}>
    <div className={styles.copy}><SectionHeading align="left" variant="campus" eyebrow="Our educators" title={<>World-class<br />international<br />teachers</>} />
      <p>At YIS Mandalay, our small class sizes are led by experienced, internationally certified teachers who are deeply committed to each student’s academic and personal growth.</p>
      <p>Every educator brings a global perspective and a passion for student-centered learning, ensuring every child is known, supported, and challenged to reach their fullest potential.</p>
      <dl className={styles.stats}>{[['40+', 'Teachers'], ['15+', 'Nationalities'], ['100%', 'Commitment']].map(([value, label]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
    </div><div className={styles.teacherImages}><img src={asset('mdy-about-1.jpg')} alt="Teachers participating in a professional learning session" loading="lazy" /><img src={asset('mdy-bout-2.jpg')} alt="A bright classroom ready for students" loading="lazy" /></div>
  </div></Section>;
}

function Facilities() {
  return <Section id="campuses" narrow tone="cream"><SectionHeading variant="campus" eyebrow="State of the art" title={<>The best facilities<br />in Mandalay</>} />
    <div className={styles.facilities}>{facilities.map(([title, image]) => <figure key={title}><img src={asset(image)} alt="" loading="lazy" /><figcaption>{title}</figcaption></figure>)}</div>
  </Section>;
}

function Community() {
  return <Section id="community" narrow><div className={styles.split}>
    <div className={styles.communityImage}><img src={asset('quality-feature-image.jpg')} alt="A student’s notebook and study materials" loading="lazy" /><span><strong>500+</strong>Students</span></div>
    <div className={styles.copy}><SectionHeading variant="campus" align="left" eyebrow="Our community" title={<>Quality learning for Myanmar, Chinese &amp; international students</>} />
      <p>YIS Mandalay serves a vibrant, diverse student body bringing together Myanmar, China, and expatriate communities across the region. We believe that diversity strengthens learning and prepares every student for an interconnected world.</p>
      <p>Every student who joins our community is supported to grow as an individual — finding their place, building confidence, and discovering what they are uniquely capable of.</p>
      <div className={styles.nationalities}>{[[Flag, 'Myanmar'], [Flag, 'Chinese'], [Globe, 'International']].map(([Icon, label]) => <div key={label}><Icon size={26} aria-hidden="true" /><span>{label}</span></div>)}</div>
    </div>
  </div></Section>;
}

function StudentOutcomes() {
  return <Section narrow tone="cream"><SectionHeading variant="campus" eyebrow="Student outcomes" title={<>What to expect<br />from a YIS student</>} />
    <div className={styles.outcomes}>{outcomes.map(([Icon, title, text]) => <article key={title}><Icon size={36} aria-hidden="true" /><h3>{title}</h3><p>{text}</p></article>)}</div>
  </Section>;
}

function Learning({ onAction }) {
  return <Section id="learning" narrow><div className={styles.sectionTop}><SectionHeading variant="campus" align="left" eyebrow="What we offer" title="Learning" /><p>From Pre-Kindergarten through Grade 12, our programmes prepare every student for the next stage of their education and life.</p></div>
    <div className={styles.cardGrid}>{learning.map(item => <CampusCard key={item.name} {...item} image={asset(item.image)} imageAlt={`${item.name} learning environment`} variant="editorial" actionLabel="Learn more" onAction={onAction} />)}</div>
  </Section>;
}

function Enrollment() {
  return <section id="admissions" className={styles.enrollment}><img className={styles.backdrop} src={asset('applying-bg.jpg')} alt="" loading="lazy" /><Container narrow>
    <span className={styles.eyebrow}>Enrollment open</span><h2>Applying to<br />YIS Mandalay</h2><p>We welcome families to contact our admissions team, arrange a campus visit, and learn about becoming part of the YIS Mandalay community. Enrollment is now open for the upcoming academic year.</p>
    <div className={styles.actions}><Button variant="gold" href="#contact-mandalay">Join us</Button><Button variant="ghost" href="tel:+959777603000">+95 (9) 777 60 3000</Button></div>
  </Container></section>;
}

function LatestNews({ onAction }) {
  return <Section id="news" narrow tone="cream"><div className={styles.sectionTop}><SectionHeading variant="campus" align="left" eyebrow="Stay updated" title="Latest news" /><Button variant="text" onClick={() => onAction('All Mandalay news')}>All news <ArrowRight size={14} aria-hidden="true" /></Button></div>
    <div className={styles.cardGrid}>{news.map(item => <CampusCard key={item.name} {...item} image={asset(item.image)} imageAlt={item.name} variant="news" actionLabel="Read more" onAction={onAction} />)}</div>
  </Section>;
}

function Connections() {
  return <Section narrow><div className={styles.connections}><SectionHeading variant="campus" title="Our connections" /><div>{partners.map(partner => <AccreditationBadge key={partner.acronym} {...partner} />)}</div></div></Section>;
}

function Contact() {
  const contacts = [
    [MapPin, 'Address', 'No. 2/2, Between 62nd & 63rd Street, Mahar Aung Myay Township, Mandalay', null],
    [Phone, 'Phone', '+95 (9) 777 60 3000', 'tel:+959777603000'],
    [Mail, 'Email', 'admissions.mdy@yismyanmar.com', 'mailto:admissions.mdy@yismyanmar.com'],
    [Clock, 'Office hours', 'Mon–Fri: 7:30 AM – 4:30 PM', null],
    [School, 'Facebook', 'facebook.com/YISMandalay', 'https://www.facebook.com/YISMandalay'],
  ];
  return <Section id="contact-mandalay" narrow tone="cream"><div className={styles.split}><div><SectionHeading variant="campus" align="left" eyebrow="Find us" title={<>Contact<br />YIS Mandalay</>} /><address className={styles.contactList}>{contacts.map(([Icon, label, value, href]) => <div key={label}><Icon size={20} aria-hidden="true" /><div><strong>{label}</strong>{href ? <a href={href}>{value}</a> : <span>{value}</span>}</div></div>)}</address></div><ContactForm /></div></Section>;
}

function VisitYangon() {
  return <Section id="yangon" narrow><div className={styles.visit}><span className={styles.eyebrow}>Also part of YIS</span><h2>Visit the Yangon campus</h2><Button variant="gold" href="/#yangon">YIS Yangon <ArrowRight size={14} aria-hidden="true" /></Button></div></Section>;
}

export default function MandalayPage() {
  useEffect(() => {
    const previous = document.title;
    document.title = 'Mandalay Campus | Yangon International School';
    return () => { document.title = previous; };
  }, []);
  return <MainLayout>{onAction => <><CampusHero onAction={onAction} /><Educators /><Facilities /><Community /><StudentOutcomes /><Learning onAction={onAction} /><Enrollment /><LatestNews onAction={onAction} /><Connections /><Contact /><VisitYangon /></>}</MainLayout>;
}
