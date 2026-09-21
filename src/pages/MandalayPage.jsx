import { useEffect } from "react";
import { ArrowRight, BookOpen, Eye, Star, Users } from "lucide-react";
import MainLayout from "../components/layout/MainLayout";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import CampusCard from "../components/cards/CampusCard";
import AccreditationBadge from "../components/cards/AccreditationBadge";
import ContactForm from "./mandalay/ContactForm";
import { learning } from "./mandalay/content";
import { partners } from "../data/partners";
import styles from "./mandalay/Mandalay.module.css";
import useScrollEffects from "../hooks/useScrollEffects";

const asset = (name) => `/mandalay/${name}`;
const events = [["Feb. 3","100th Day of School Celebration"],["Feb. 6","Grade 6 Field Trip – National Museum"],["Feb. 11","KG Chinese New Year Festival"],["Feb. 15","ES Arts & Crafts Showcase"],["Mar. 3","Elementary Science Fair"]];

function Heading({ eyebrow, children, light = false }) { return <div className={`${styles.heading} ${light ? styles.light : ""}`}>{eyebrow && <span>{eyebrow}</span>}<h2>{children}</h2><i aria-hidden="true" /></div>; }
function Hero() { return <section className={styles.hero} aria-labelledby="mandalay-title"><img className={styles.backdrop} src={asset("mdy-camp.jpg")} alt="" fetchPriority="high"/><Container><span>Learning without limits</span><h1 id="mandalay-title">Yangon International<br/>School Mandalay</h1></Container></section>; }
function AtAGlance() {
  const items=[[Eye,"Our vision","YIS prepares students for higher levels of learning and to be responsible global citizens.​"],[Star,"Our core values","Academically well-prepared · Culturally sensitive · Socially responsible · Personally fulfilled"],[Users,"Average class sizes",<><strong>15</strong><em>Elementary</em><strong>22</strong><em>Secondary</em></>]];
  return <section className={styles.glance}><Container narrow><Heading>YIS at a glance</Heading><div className={styles.glanceGrid}>{items.map(([Icon,title,body])=><article key={title}><Icon aria-hidden="true"/><h3>{title}</h3><div>{body}</div></article>)}</div></Container></section>;
}
function About() { return <section className={styles.about}><Container narrow><div className={styles.aboutGrid}><div className={styles.aboutImage}><img src={asset("quality-learning.jpg")} alt="Students learning at YIS Mandalay" loading="lazy"/><b>500+<small>students</small></b></div><div><Heading eyebrow="About the campus">Who we are</Heading><p>YIS Mandalay is part of the Yangon International School group, founded in 2004. Our Mandalay campus was established to bring the same world-class education to the cultural capital of Myanmar, enrolling children aged 3–18.</p><p>Our graduates go on to attend top universities around the world. The United States, Canada, United Kingdom, Australia, Singapore, Switzerland, and Japan are represented in the wealth of educational choices our students make.</p><Button href="#tour">Read more</Button></div></div></Container></section>; }
function Programs({onAction}) { return <section className={styles.programs}><Container narrow><Heading eyebrow="Curriculum" light>Academic programs</Heading><div className={styles.cardGrid}>{learning.map(item=><CampusCard key={item.name} {...item} image={asset(item.image)} imageAlt={`${item.name} learning environment`} variant="editorial" actionLabel="Learn more" onAction={onAction}/>)}</div></Container></section>; }
function Connections() { return <section className={styles.connections}><Container narrow><Heading>Our connections</Heading><div>{partners.map(p=><AccreditationBadge key={p.acronym} {...p}/>)}</div></Container></section>; }
function Tour() { return <section id="tour" className={styles.tour}><Container narrow><div className={styles.tourGrid}><div><Heading eyebrow="Visit us">Book a tour</Heading><p>We invite you to visit our Mandalay campus and see first-hand what makes YIS a wonderful place for your child to grow and develop into a leader of tomorrow.</p><p>Tours are available Monday to Friday, 8:00 AM–4:00 PM. Our admissions team will guide you through every classroom, facility, and programme.</p><address><b>YIS Mandalay</b><br/>No. 2/2, Between 62nd &amp; 63rd Street<br/>Mahar Aung Myay Township, Mandalay<br/><a href="tel:+959777603000">+95 (9) 777 60 3000</a><br/><a href="mailto:admissions.mdy@yismyanmar.com">admissions.mdy@yismyanmar.com</a></address></div><ContactForm/></div></Container></section>; }
function Enrollment() { return <section className={styles.enrollment}><img className={styles.backdrop} src={asset("applying-bg.jpg")} alt="" loading="lazy"/><Container narrow><span>Enrollment open</span><h2>Applying to<br/>YIS Mandalay</h2><p>We welcome families to contact our admissions team, arrange a campus visit, and learn about becoming part of the YIS Mandalay community.</p><div><Button variant="gold" href="#tour">Join us</Button><Button variant="ghost" href="tel:+959777603000">+95 (9) 777 60 3000</Button></div></Container></section>; }
function Events() { return <section className={styles.events}><Container narrow><Heading eyebrow="Calendar">Schoolwide events</Heading><p className={styles.notice}>No upcoming all-school events are scheduled at this time. Please check back soon or contact the campus office.</p><h3>What's happening at YIS?</h3><div className={styles.eventFilters}><b>Elementary</b><span>Secondary</span><span>Athletics</span></div><ol>{events.map(([date,title])=><li key={title}><time>{date}</time><span>{title}</span></li>)}</ol></Container></section>; }
export default function MandalayPage() {
  useScrollEffects();
  useEffect(()=>{
    const previous=document.title;
    document.title="Mandalay Campus | Yangon International School";
    return()=>{document.title=previous};
  },[]);
  return <MainLayout>{onAction=><><Hero/><AtAGlance/><About/><Programs onAction={onAction}/><Connections/><Tour/><Enrollment/><Events/></>}</MainLayout>;
}
