import { useEffect } from "react";
import { ArrowRight, Play } from "lucide-react";
import MainLayout from "../components/layout/MainLayout";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import styles from "./about/About.module.css";
import useScrollEffects from "../hooks/useScrollEffects";

const image = (name) => /^https?:\/\//i.test(name) ? name : `/mandalay/${name}`;

function Heading({ children, light = false }) {
  return <div className={`${styles.heading} ${light ? styles.light : ""}`}><h2>{children}</h2><span aria-hidden="true" /></div>;
}

function Hero() {
  return <section className={styles.hero} aria-labelledby="about-title"><img src={image("7-scaled.jpg")} alt=""/><div><h1 id="about-title">About us</h1><span aria-hidden="true" /></div></section>;
}

function VisionMission() {
  return <section className={styles.vision}><Container narrow><Heading light>Vision &amp; mission</Heading><div className={styles.mosaic}>
    <img src={image("about-mdy-1.jpg")} alt="A YIS teacher supporting a student"/>
    <article><small>Our vision</small><i/><p>YIS prepares students for higher levels of learning and to be responsible global citizens.​</p></article>
    <article><small>Our mission</small><i/><p>YIS is a network of college preparatory schools that seeks to foster the development of the whole child, who is a participating global citizen and lifelong learner: one who is academically well-prepared, socially responsible, culturally sensitive, and personally fulfilled.​</p></article>
    <img src={image("mission.jpg")} alt="YIS students learning science with their teacher"/>
  </div></Container></section>;
}

function Stats() {
  const stats=[["20+","Strong legacy of more than 20 years"],["500+","Alumni graduates"],["2","Campuses in Myanmar"]];
  return <section className={styles.stats}><Container narrow>{stats.map(([value,label])=><div key={label}><strong>{value}</strong><span>{label}</span></div>)}</Container></section>;
}

function Legacy() {
  return <section className={styles.legacy}><Container narrow><div><small>Established 2004</small><h2>A legacy of<br/>international<br/>education</h2><i/>
  <p>Founded in 2019, Yangon International School Yangon celebrated its 20th anniversary during the 2023–2024 academic year. Our certified educators are experts in their fields, nurturing an international community that embraces and celebrates local culture. We offer a rigorous Common Core curriculum complemented by an inclusive International Baccalaureate (IB) Diploma Programme. With over 500 graduates, our alumni have gone on to study at top-ranked universities around the world, including institutions in the United States, Canada, the United Kingdom, Australia, Singapore, Switzerland, South Korea, and Japan. ​</p></div><figure><img src={image("about-mdy.jpg")} alt="YIS teacher supporting students in the classroom"/></figure></Container></section>;
}

function Leadership() {
  return <section className={styles.leadership}><Container narrow><Heading>Our Leadership Team​</Heading><div className={styles.leaderGrid}><article><img src={image("https://yis.edu.mm/wp-content/uploads/2026/09/Mike-Livingston.jpg")} alt="YIS educational leadership in the classroom"/><div><strong>Mr. Mike Livingston</strong><span>Director</span></div></article><article><img src={image("https://yis.edu.mm/wp-content/uploads/2024/08/image-1-1.png")} alt="YIS academic leadership working with students"/><div><strong>Ms.Heather Kissack</strong><span>Principal</span></div></article></div></Container></section>;
}

function Community() {
  return <section className={styles.community}><Container narrow><div className={styles.story}><img src={image("quality-feature-image.jpg")} 
  alt="Books and learning materials"/><button type="button" aria-label="Watch our story"><Play fill="currentColor"/><span>Watch our story</span></button></div><div><small>Who we are</small><h2>More than a school —<br/>a community</h2><i/><p> Join us at Yangon International School, where we cultivate excellence in education while nurturing essential values that shape global citizens. Our commitment to academic
excellence is unwavering, ensuring students reach their highest potential.</p><p>We believe in social responsibility, empowering students to make a positive impact on their communities. Embracing cultural sensitivity, we celebrate diversity and foster understandingamong our
students.</p><div className={styles.actions}><Button href="/mandalay#tour">Visit our campus</Button><Button variant="outline" href="/#admissions">Admissions enquiry <ArrowRight size={14}/></Button></div></div></Container></section>;
}

export default function AboutPage(){useScrollEffects();useEffect(()=>{const previous=document.title;document.title="About YIS | Yangon International School";return()=>{document.title=previous};},[]);return <MainLayout><Hero/><VisionMission/><Stats/><Legacy/><Leadership/><Community/></MainLayout>}
