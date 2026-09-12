import { useEffect } from "react";
import { ArrowRight, Play } from "lucide-react";
import MainLayout from "../components/layout/MainLayout";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import styles from "./about/About.module.css";
import useScrollEffects from "../hooks/useScrollEffects";

const image = (name) => `/mandalay/${name}`;

function Heading({ children, light = false }) {
  return <div className={`${styles.heading} ${light ? styles.light : ""}`}><h2>{children}</h2><span aria-hidden="true" /></div>;
}

function Hero() {
  return <section className={styles.hero} aria-labelledby="about-title"><img src={image("7-scaled.jpg")} alt=""/><div><h1 id="about-title">About us</h1><span aria-hidden="true" /></div></section>;
}

function VisionMission() {
  return <section className={styles.vision}><Container narrow><Heading light>Vision &amp; mission</Heading><div className={styles.mosaic}>
    <img src={image("about-yis.webp")} alt="A YIS teacher supporting a student"/>
    <article><small>Our vision</small><h3>Responsible global citizens</h3><i/><p>YIS prepares students for advanced levels of learning and to become responsible global citizens — equipped with the academic skills, cultural awareness, and personal character to thrive in an interconnected world and make meaningful contributions to their communities.</p></article>
    <article><small>Our mission</small><h3>Developing the whole child</h3><i/><p>YIS operates as a network of college-preparatory schools, fostering the development of the whole child as a participating global citizen and lifelong learner — academically prepared, socially responsible, culturally sensitive, and personally fulfilled in all they pursue.</p></article>
    <img src={image("about-yis-2.webp")} alt="YIS students learning science with their teacher"/>
  </div></Container></section>;
}

function Stats() {
  const stats=[["20+","Years of excellence"],["500+","Alumni graduates"],["2","Campuses in Myanmar"],["30+","Universities worldwide"]];
  return <section className={styles.stats}><Container narrow>{stats.map(([value,label])=><div key={label}><strong>{value}</strong><span>{label}</span></div>)}</Container></section>;
}

function Legacy() {
  return <section className={styles.legacy}><Container narrow><div><small>Established 2004</small><h2>A legacy of<br/>international<br/>education</h2><i/><p>Yangon International School was founded in 2004 with a singular purpose: to deliver world-class, college-preparatory education to the international and local community of Myanmar. Over the past two decades, we have grown into a trusted institution with campuses in both Yangon and Mandalay.</p><p>Our educators are field-certified and experienced in international curricula, ensuring every student receives a rigorous and compassionate education that honors both global standards and local cultural identity.</p><p>As we celebrate over 20 years of educational excellence, more than 500 YIS alumni have gone on to attend leading universities across the world.</p></div><figure><img src={image("mdy-about-1.jpg")} alt="YIS teacher supporting students in the classroom"/></figure></Container></section>;
}

function Leadership() {
  return <section className={styles.leadership}><Container narrow><Heading>School leadership</Heading><div className={styles.leaderGrid}><article><img src={image("about-yis.webp")} alt="YIS educational leadership in the classroom"/><div><strong>Educational leadership</strong><span>Director's office</span></div></article><article><img src={image("about-yis-2.webp")} alt="YIS academic leadership working with students"/><div><strong>Academic leadership</strong><span>Principal's office</span></div></article></div></Container></section>;
}

function Community() {
  return <section className={styles.community}><Container narrow><div className={styles.story}><img src={image("quality-feature-image.jpg")} alt="Books and learning materials"/><button type="button" aria-label="Watch our story"><Play fill="currentColor"/><span>Watch our story</span></button></div><div><small>Who we are</small><h2>More than a school —<br/>a community</h2><i/><p>At Yangon International School, education extends far beyond the classroom. We are a vibrant, multicultural community of students, families, and educators united by a shared commitment to excellence, integrity, and global citizenship.</p><p>From our IB Diploma Programme to our rich co-curricular life — athletics, arts, community service, and more — every YIS student is given the tools and encouragement to discover their passion, develop their strengths, and grow into the person they are meant to become.</p><div className={styles.actions}><Button href="/mandalay#tour">Visit our campus</Button><Button variant="outline" href="/#admissions">Admissions enquiry <ArrowRight size={14}/></Button></div></div></Container></section>;
}

export default function AboutPage(){useScrollEffects();useEffect(()=>{const previous=document.title;document.title="About YIS | Yangon International School";return()=>{document.title=previous};},[]);return <MainLayout><Hero/><VisionMission/><Stats/><Legacy/><Leadership/><Community/></MainLayout>}
