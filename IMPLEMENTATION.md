# YIS React implementation

New and modified files only. CSS Modules are used for component styling; shared values live in `tokens.css`. Existing `/hero.png`, `/mandalay.png`, and `/yangon.png` are reused unchanged.

The official crest is a marked placeholder in Brand.jsx. Campus sites, videos, applications, sign-in, parent portal, and alumni URLs must be supplied before launch; unconfigured actions show a notice.

```jsx
// src/App.tsx
import HomePage from './pages/HomePage';
export default function App() { return <HomePage />; }
```

```css
// src/index.css
@import './styles/tokens.css';
* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body { margin: 0; color: var(--text); font-family: Arial, Helvetica, sans-serif; -webkit-font-smoothing: antialiased; }
button, input { font: inherit; }
a { color: inherit; text-decoration: none; }
button { cursor: pointer; }
img { display: block; max-width: 100%; }
h1, h2, h3, p { margin: 0; }
section { scroll-margin-top: 24px; }
:focus-visible { outline: 3px solid var(--gold); outline-offset: 5px; }
@media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto; } }
```

```css
// src/styles/tokens.css
:root {
  --red: #a51d24;
  --red-dark: #971b1e;
  --wine: #4f0e10;
  --gold: #ffa900;
  --text: #414141;
  --muted: #777;
  --cream: #fdfbf7;
  --sand: #f4f0e6;
  --border: #e6e2db;
  --white: #fff;
  --serif: Georgia, 'Times New Roman', serif;
  --radius: 6px;
  --container: 1280px;
  --section-space: 96px;
  --card-shadow: 0 4px 14px rgb(0 0 0 / 6%);
}
```

```jsx
// src/components/layout/Brand.jsx
import styles from './Layout.module.css';
export default function Brand({ compact = false }) {
  return <a className={`${styles.brand} ${compact ? styles.compact : ''}`} href="#home" aria-label="Yangon International School home">
    {/* Placeholder: replace monogram with the official school crest when supplied. */}
    <span className={styles.crestPlaceholder} title="Placeholder: official school crest required">YIS</span>
    <span>Yangon International<small>School</small></span>
  </a>;
}
```

```jsx
// src/components/layout/Navigation.jsx
import { useState } from 'react';
import styles from './Layout.module.css';
const links = [['Home', 'home'], ['About Us', 'about'], ['Admissions', 'admissions'], ['Learning', 'learning'], ['Campuses', 'campuses'], ['Community', 'community'], ['Contacts', 'contacts']];
export default function Navigation() {
  const [open, setOpen] = useState(false);
  return <nav aria-label="Main navigation" className={styles.navigation}>
    <button className={styles.menuToggle} aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>{open ? 'Close' : 'Menu'}</button>
    <ul id="main-navigation" className={`${styles.navLinks} ${open ? styles.open : ''}`}>
      {links.map(([label, id]) => <li key={id}><a href={`#${id}`} className={id === 'home' ? styles.active : ''} onClick={() => setOpen(false)}>{label}</a></li>)}
    </ul>
  </nav>;
}
```

```jsx
// src/components/layout/Header.jsx
import Container from '../ui/Container';
import Brand from './Brand';
import Navigation from './Navigation';
import styles from './Layout.module.css';
export default function Header({ onAction }) {
  return <header id="home"><a className={styles.skipLink} href="#main">Skip to content</a>
    <div className={styles.topbar}><Container className={styles.topbarInner}>
      <div className={styles.emails}><a href="mailto:admissions.ygn@yis-yangon.edu.mm">Yangon: admissions.ygn@yis-yangon.edu.mm</a><a href="mailto:admissions.mdy@yismyanmar.com">Mandalay: admissions.mdy@yismyanmar.com</a></div>
      <div className={styles.topActions}><button onClick={() => onAction('Sign In')}>Sign In</button><a href="#admissions">Apply Now</a></div>
    </Container></div><Container className={styles.headerInner}><Brand /><Navigation /></Container>
  </header>;
}
```

```jsx
// src/components/layout/Footer.jsx
import Container from '../ui/Container';
import Brand from './Brand';
import styles from './Layout.module.css';
export default function Footer({ onAction }) {
  return <footer className={styles.footer} id="contacts"><Container><div className={styles.footerGrid}>
    <div><Brand compact /><p>A college preparatory group of schools established in 2004,<br /> serving Yangon and Mandalay with world-class<br /> international education.</p><em>“Progress Through Education”</em></div>
    <div><h2>Quick Links</h2><ul><li><a href="#yangon">Yangon Campus</a></li><li><a href="#mandalay">Mandalay Campus</a></li><li><a href="#admissions">Admissions Process</a></li><li><a href="#learning">Academic Learning</a></li><li><button onClick={() => onAction('Parent Portal')}>Parent Portal</button></li><li><button onClick={() => onAction('Alumni Association')}>Alumni Association</button></li></ul></div>
    <div><h2>Contacts</h2><address><strong>Yangon Campus</strong><span>Yangon, Myanmar</span><strong>Mandalay Campus</strong><span>Mandalay, Myanmar</span></address></div>
  </div><div className={styles.copyright}><span>© Yangon International School (YIS). All rights reserved.</span><span>Supported by ISS – International Schools Services</span></div></Container></footer>;
}
```

```jsx
// src/components/layout/MainLayout.jsx
import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import ActionDialog from '../ui/ActionDialog';
export default function MainLayout({ children }) {
  const [action, setAction] = useState(null);
  return <><Header onAction={setAction} /><main id="main">{typeof children === 'function' ? children(setAction) : children}</main><Footer onAction={setAction} /><ActionDialog action={action} onClose={() => setAction(null)} /></>;
}
```

```css
// src/components/layout/Layout.module.css
.topbar { background: var(--red-dark); color: #ecd0d0; font-size: 12px; }
.topbarInner { min-height: 34px; display: flex; justify-content: space-between; align-items: center; gap: 16px; }
.emails, .topActions { display: flex; gap: 26px; align-items: center; }
.topActions button { background: none; border: 0; color: inherit; padding: 0; font-size: inherit; }
.topActions > :last-child { border-left: 1px solid #d79393; padding-left: 20px; }
.headerInner { min-height: 88px; display: flex; align-items: center; justify-content: space-between; gap: 36px; }
.brand { display: inline-flex; align-items: center; gap: 12px; color: var(--red); font: 700 19px/1.3 var(--serif); text-transform: uppercase; white-space: nowrap; }
.brand small { display: block; font: 10px/1.5 Arial, sans-serif; letter-spacing: 5px; }
.crestPlaceholder { display: grid; place-items: center; width: 46px; height: 54px; border: 2px solid currentColor; border-radius: 6px; font: 700 16px var(--serif); }
.navLinks { display: flex; align-items: center; gap: 32px; margin: 0; padding: 0; list-style: none; }
.navLinks a { font-size: 12px; font-weight: 700; text-transform: uppercase; }
.navLinks a:hover, .active { color: var(--red); }
.menuToggle { display: none; }
.skipLink { position: absolute; top: -100px; left: 20px; padding: 12px; background: white; z-index: 5; }
.skipLink:focus { top: 10px; }
.footer { background: var(--wine); padding-top: 80px; color: #b78a8b; font-size: 13px; line-height: 1.65; }
.footerGrid { display: grid; grid-template-columns: 1.35fr 1fr .8fr; gap: 80px; padding-bottom: 60px; }
.compact { color: white; font-size: 14px; gap: 10px; }
.compact small { font-size: 8px; letter-spacing: 3px; }
.compact .crestPlaceholder { width: 36px; height: 42px; font-size: 12px; }
.footer p { margin-block: 20px 12px; }
.footer em { font-size: 12px; color: #d38d24; }
.footer h2 { color: #e6c9c9; font: 700 18px var(--serif); letter-spacing: .6px; }
.footer h2::after { content: ''; display: block; width: 30px; height: 2px; background: var(--gold); margin-block: 16px; }
.footer ul { list-style: none; margin: 0; padding: 0; }
.footer li::before { content: ''; display: inline-block; width: 4px; height: 4px; border-top: 1px solid currentColor; border-right: 1px solid currentColor; transform: rotate(45deg); margin-right: 5px; }
.footer li { margin-bottom: 5px; }
.footer button { border: 0; background: none; padding: 0; color: inherit; font-size: inherit; }
.footer a:hover, .footer button:hover { color: white; }
.footer address { font-style: normal; line-height: 1.35; }
.footer address strong, .footer address span { display: block; }
.footer address strong { color: #d4b2b2; margin-top: 16px; }
.copyright { border-top: 1px solid #692426; display: flex; justify-content: space-between; gap: 20px; padding-block: 24px 36px; font-size: 12px; }
@media (max-width: 1150px) { .navLinks { gap: 18px; } .brand { font-size: 16px; } .headerInner { gap: 20px; } }
@media (max-width: 900px) { .menuToggle { display: block; background: white; border: 1px solid var(--red); color: var(--red); padding: 10px 16px; } .headerInner { position: relative; } .navLinks { display: none; position: absolute; left: 0; right: 0; top: 100%; padding: 20px; background: white; z-index: 3; box-shadow: var(--card-shadow); } .navLinks.open { display: grid; gap: 20px; } .footerGrid { gap: 36px; grid-template-columns: 1.2fr 1fr; } .footerGrid > :first-child { grid-column: 1 / -1; } }
@media (max-width: 600px) { .topbarInner { padding-block: 8px; } .emails { flex-direction: column; gap: 4px; align-items: flex-start; font-size: 10px; } .topActions { gap: 10px; font-size: 11px; } .topActions > :last-child { padding-left: 10px; } .brand { font-size: 13px; gap: 8px; } .crestPlaceholder { width: 34px; height: 42px; font-size: 12px; } .headerInner { min-height: 76px; gap: 12px; } .footer { padding-top: 52px; } .footerGrid { gap: 32px; padding-bottom: 40px; } .copyright { flex-direction: column; gap: 10px; } }
```

```jsx
// src/components/ui/Container.jsx
import styles from './UI.module.css';
export default function Container({ children, narrow = false, className = '' }) {
  return <div className={`${styles.container} ${narrow ? styles.narrow : ''} ${className}`}>{children}</div>;
}
```

```jsx
// src/components/ui/Section.jsx
import Container from './Container';
import styles from './UI.module.css';
export default function Section({ children, id, tone = 'white', narrow = false }) {
  return <section id={id} className={`${styles.section} ${styles[tone]}`}><Container narrow={narrow}>{children}</Container></section>;
}
```

```jsx
// src/components/ui/Button.jsx
import styles from './UI.module.css';
export default function Button({ children, href, variant = 'primary', ...props }) {
  const className = `${styles.button} ${styles[variant]}`;
  return href ? <a className={className} href={href} {...props}>{children}</a> : <button type="button" className={className} {...props}>{children}</button>;
}
```

```jsx
// src/components/ui/SectionHeading.jsx
import styles from './UI.module.css';
export default function SectionHeading({ title, children }) {
  return <div className={styles.heading}><h2>{title}</h2>{children && <p>{children}</p>}</div>;
}
```

```jsx
// src/components/ui/ActionDialog.jsx
import { useEffect, useRef } from 'react';
import Button from './Button';
import styles from './UI.module.css';
export default function ActionDialog({ action, onClose }) {
  const ref = useRef(null);
  useEffect(() => { if (action && !ref.current.open) ref.current.showModal(); }, [action]);
  return <dialog ref={ref} className={styles.dialog} onCancel={onClose} onClose={onClose} aria-labelledby="action-title">
    <h2 id="action-title">{action}</h2><p>This {action?.toLowerCase().includes('video') ? 'video' : 'destination'} has not been provided yet. Please contact the school for details.</p>
    <a href="mailto:admissions.ygn@yis-yangon.edu.mm">admissions.ygn@yis-yangon.edu.mm</a><Button onClick={() => ref.current.close()}>Close</Button>
  </dialog>;
}
```

```css
// src/components/ui/UI.module.css
.container { width: calc(100% - 80px); max-width: var(--container); margin-inline: auto; }
.narrow { max-width: 1152px; }
.section { padding-block: var(--section-space); }
.white { background: var(--white); }
.cream { background: var(--cream); }
.heading { text-align: center; margin-bottom: 56px; }
.heading h2 { color: var(--red); font: 700 38px/1.2 var(--serif); letter-spacing: 1px; text-transform: uppercase; }
.heading h2::after { content: ''; display: block; width: 80px; height: 3px; margin: 14px auto; background: var(--gold); }
.heading p { max-width: 720px; margin-inline: auto; color: var(--muted); font-size: 16px; line-height: 1.5; }
.button { display: inline-flex; justify-content: center; align-items: center; min-height: 38px; padding: 10px 18px; border: 1px solid var(--red); font-size: 13px; font-weight: 700; letter-spacing: .8px; text-transform: uppercase; }
.primary { background: var(--red); color: white; }
.primary:hover { background: var(--wine); }
.outline { background: white; color: var(--red); }
.outline:hover { background: var(--cream); }
.gold { border-color: var(--gold); background: var(--gold); color: #342809; }
.gold:hover { background: #ed9d00; }
.dialog { max-width: 460px; width: calc(100% - 40px); padding: 32px; border: 1px solid var(--border); border-radius: var(--radius); color: var(--text); }
.dialog::backdrop { background: rgb(0 0 0 / 55%); }
.dialog h2 { color: var(--red); font-family: var(--serif); }
.dialog p { margin-block: 20px; line-height: 1.6; }
.dialog > a { display: block; color: var(--red); text-decoration: underline; margin-bottom: 24px; }
@media (max-width: 900px) { .container { width: calc(100% - 48px); } .section { padding-block: 64px; } .heading h2 { font-size: 32px; } }
@media (max-width: 600px) { .container { width: calc(100% - 36px); } .heading { margin-bottom: 32px; } .heading h2 { font-size: 28px; } .section { padding-block: 52px; } }
```

```jsx
// src/components/cards/CampusCard.jsx
import Button from '../ui/Button';
import styles from './Cards.module.css';
export default function CampusCard({ name, image, description, onAction }) {
  return <article className={styles.campus} id={name.toLowerCase()}><img src={image} alt={`${name} campus ${name === 'Mandalay' ? 'library' : 'school building'}`} width="560" height="220" loading="lazy" />
    <div className={styles.campusBody}><h3>{name}</h3><p>{description}</p><div className={styles.actions}><Button onClick={() => onAction(`${name} campus website`)}>Go to site</Button><Button variant="outline" onClick={() => onAction(`${name} campus video`)}>Campus video</Button></div></div>
  </article>;
}
```

```jsx
// src/components/cards/ProgramCard.jsx
import styles from './Cards.module.css';
export default function ProgramCard({ title, ages, students }) {
  return <article className={styles.program}><div className={styles.programTitle}><h3>{title}</h3><span>{ages}</span></div><p>Comprehensive international curriculum aligned with global standards, preparing pupils for successive stages of cognitive and social growth.</p><div className={styles.density}><span>Est. student density:</span> <strong>{students} Students</strong></div></article>;
}
```

```jsx
// src/components/cards/AccreditationBadge.jsx
import styles from './Cards.module.css';
export default function AccreditationBadge({ acronym, name }) {
  return <div className={styles.accreditation}><span>{acronym}</span><p>{name}</p></div>;
}
```

```css
// src/components/cards/Cards.module.css
.campus { background: white; box-shadow: var(--card-shadow); overflow: hidden; border-radius: var(--radius) var(--radius) 0 0; }
.campus > img { width: 100%; height: 220px; object-fit: cover; }
.campusBody { padding: 24px; }
.campus h3 { color: var(--red); text-transform: uppercase; font-size: 26px; letter-spacing: 1px; }
.campus h3::after { content: ''; display: block; width: 36px; height: 2px; background: var(--gold); margin-block: 14px; }
.campus p { font-size: 14px; line-height: 1.7; color: var(--muted); margin-bottom: 18px; }
.actions { display: flex; gap: 12px; flex-wrap: wrap; }
.program { border: 1px solid #dedede; border-radius: var(--radius); padding: 30px; background: white; box-shadow: 0 2px 8px rgb(0 0 0 / 2%); }
.programTitle { display: flex; align-items: center; justify-content: space-between; gap: 8px; border-bottom: 1px solid #eee; padding-bottom: 16px; }
.program h3 { color: var(--red); font: 700 21px/1.2 var(--serif); }
.programTitle > span { background: var(--sand); font-size: 10px; font-weight: 700; padding: 5px 8px; white-space: nowrap; border-radius: 2px; }
.program p { color: var(--muted); font-size: 14px; line-height: 1.55; margin-block: 18px 28px; }
.density { font-size: 11px; display: flex; gap: 6px; flex-wrap: wrap; }
.density > span { color: #e99200; font-weight: 700; text-transform: uppercase; }
.accreditation { text-align: center; }
.accreditation > span { display: grid; place-items: center; width: 96px; height: 96px; border: 1px solid #ecdfc5; border-radius: 50%; margin: 0 auto 14px; font: 700 17px var(--serif); color: var(--red); }
.accreditation p { color: var(--muted); font-size: 12px; line-height: 1.5; }
@media (max-width: 1150px) { .program { padding: 22px; } .programTitle { flex-wrap: wrap; } }
@media (max-width: 600px) { .campusBody { padding: 22px; } .campus > img { height: auto; aspect-ratio: 28 / 11; } .programTitle { flex-wrap: nowrap; } }
```

```jsx
// src/pages/HomePage.jsx
import MainLayout from '../components/layout/MainLayout';
import Container from '../components/ui/Container';
import Section from '../components/ui/Section';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import CampusCard from '../components/cards/CampusCard';
import ProgramCard from '../components/cards/ProgramCard';
import AccreditationBadge from '../components/cards/AccreditationBadge';
import styles from './HomePage.module.css';

const vision = 'YIS prepares students for higher levels of learning and to be responsible global citizens who are equipped with the skills, knowledge, and character to thrive in an interconnected world.';
const stats = [['2', 'State-of-the-art campuses'], ['1,200+', 'Enrolled students'], ['95%', 'University placement'], ['40+', 'Student nationalities'], ['20+', 'Years of excellence']];
const programs = [['Early Years', 'Ages 2-5', 240], ['Primary School', 'Grades 1-5', 420], ['Middle School', 'Grades 6-8', 280], ['High School', 'Grades 9-12', 300]];
const steps = [['Apply Online', 'Submit application form & academic transcripts.'], ['Campus Visit', 'Tour our outstanding academic facilities.'], ['Assessment', 'Student readiness interview & evaluation.'], ['Enrollment', 'Receive formal offer & join our cohort.']];
const affiliations = [['ISS', 'International Schools Services'], ['IB', 'IB Diploma Programme'], ['EARCOS', 'East Asia Regional Council'], ['ISA', 'International School Accreditation']];

function Hero() {
  return <section className={styles.hero} aria-labelledby="hero-title"><img className={styles.heroImage} src="/hero.png" alt="" fetchPriority="high" /><Container><p className={styles.eyebrow}>Welcome to Yangon International School</p><h1 id="hero-title">Progress Through<br />Education</h1><p className={styles.intro}>{vision}</p></Container></section>;
}
function SchoolStats() {
  return <section className={styles.stats} aria-label="School at a glance"><Container><dl>{stats.map(([value, label]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl></Container></section>;
}
function Campuses({ onAction }) {
  return <Section id="campuses" narrow><SectionHeading title="Our Campuses">Serving key regions in Myanmar with dedicated faculty, modern infrastructure, and vibrant student communities.</SectionHeading><div className={styles.campusGrid}>
    <CampusCard name="Mandalay" image="/mandalay.png" description="Our Mandalay campus offers a state-of-the-art facility with world-class teachers dedicated to academic excellence and holistic development." onAction={onAction} />
    <CampusCard name="Yangon" image="/yangon.png" description="Creating the leaders of tomorrow for over 15 years, our Yangon campus features internationally certified faculty and a rich tradition of learning." onAction={onAction} />
  </div></Section>;
}
function VisionMission() {
  return <section id="about" className={styles.values}><Container className={styles.valuesGrid}><div><h2>Our Vision</h2><p>{vision}</p></div><div><h2>Our Mission</h2><p>Yangon International School fosters the development of the whole child — academically prepared, socially responsible, and culturally sensitive — inspiring lifelong learning and positive contributions to the global community.</p></div></Container></section>;
}
function AcademicPrograms() {
  return <Section id="learning" tone="cream"><SectionHeading title="Academic Programs">A challenging, student-centered curriculum from Early Years to graduation, preparing global scholars.</SectionHeading><div className={styles.programGrid}>{programs.map(([title, ages, students]) => <ProgramCard key={title} title={title} ages={ages} students={students} />)}</div></Section>;
}
function Admissions({ onAction }) {
  return <Section id="admissions"><SectionHeading title="Admissions">We welcome families to visit our campuses and learn more about the YIS educational experience.</SectionHeading><ol className={styles.steps}>{steps.map(([title, description], index) => <li key={title}><span className={styles.stepNumber}>{index + 1}</span><div><h3>{title}</h3><p>{description}</p></div></li>)}</ol><div className={styles.applyActions}><Button onClick={() => onAction('Apply for Mandalay')}>Apply for Mandalay</Button><Button variant="gold" onClick={() => onAction('Apply for Yangon')}>Apply for Yangon</Button></div></Section>;
}
function Accreditations() {
  return <section className={styles.affiliations} id="community"><Container><h2>Affiliations &amp; Accreditations</h2><div className={styles.affiliationGrid}>{affiliations.map(([acronym, name]) => <AccreditationBadge key={acronym} acronym={acronym} name={name} />)}</div></Container></section>;
}
export default function HomePage() {
  return <MainLayout>{onAction => <><Hero /><SchoolStats /><Campuses onAction={onAction} /><VisionMission /><AcademicPrograms /><Admissions onAction={onAction} /><Accreditations /></>}</MainLayout>;
}
```

```css
// src/pages/HomePage.module.css
.hero { position: relative; isolation: isolate; min-height: 600px; display: flex; align-items: center; color: white; background: #33292b; }
.heroImage { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; z-index: -2; }
.hero::before { content: ''; position: absolute; inset: 0; background: rgb(17 12 16 / 60%); z-index: -1; }
.eyebrow { color: var(--gold); text-transform: uppercase; font-size: 16px; font-weight: 700; letter-spacing: 3px; margin-bottom: 14px; }
.hero h1 { font: 700 62px/1.08 var(--serif); letter-spacing: -.5px; }
.intro { margin-top: 28px; max-width: 820px; color: #e1dcdc; font-size: 19px; line-height: 1.6; }
.stats { background: var(--cream); border-bottom: 1px solid #e9dfcd; padding-block: 40px 38px; }
.stats dl { margin: 0; display: grid; grid-template-columns: repeat(5, 1fr); gap: 20px; text-align: center; }
.stats dl > div { display: flex; flex-direction: column; gap: 10px; }
.stats dd { order: -1; margin: 0; color: var(--red); font: 700 42px/1.1 var(--serif); }
.stats dt { font-size: 11px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; }
.campusGrid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px; }
.values { background: var(--red-dark); padding-block: 96px; color: #ead1d1; }
.valuesGrid { display: grid; grid-template-columns: 1fr 1fr; }
.valuesGrid > div { padding-inline: 20px 64px; }
.valuesGrid > div + div { border-left: 1px solid rgb(255 255 255 / 12%); padding-inline: 64px 20px; }
.values h2 { color: var(--gold); font: 700 30px var(--serif); letter-spacing: .7px; }
.values h2::after { content: ''; display: block; width: 50px; height: 2px; background: #c65d51; margin-block: 20px; }
.values p { font-size: 16px; line-height: 1.75; }
.programGrid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
.steps { display: grid; grid-template-columns: repeat(4, 1fr); list-style: none; padding: 34px 30px; margin: 0; background: var(--sand); border: 1px solid #ecdfc7; border-radius: var(--radius); gap: 36px; }
.steps li { position: relative; display: flex; align-items: center; gap: 20px; }
.steps li:not(:last-child)::after { content: ''; position: absolute; right: -17px; width: 10px; height: 5px; border-top: 1px solid var(--red); border-right: 1px solid var(--red); transform: skewX(35deg); }
.stepNumber { display: grid; place-items: center; background: var(--red); color: white; border-radius: 50%; width: 48px; height: 48px; flex-shrink: 0; font: 700 20px var(--serif); }
.steps h3 { font: 700 16px var(--serif); margin-bottom: 4px; }
.steps p { font-size: 13px; line-height: 1.3; color: var(--muted); max-width: 185px; }
.applyActions { display: flex; justify-content: center; gap: 16px; margin-top: 56px; }
.applyActions > * { padding: 14px 26px; border-radius: 4px; }
.affiliations { padding-block: 80px; background: var(--cream); border-top: 1px solid var(--border); }
.affiliations h2 { text-align: center; color: var(--muted); text-transform: uppercase; font: 700 19px var(--serif); letter-spacing: 1.4px; margin-bottom: 48px; }
.affiliationGrid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 32px; }
@media (max-width: 1000px) { .programGrid { grid-template-columns: repeat(2, 1fr); } .steps { grid-template-columns: repeat(2, 1fr); gap: 30px; } .steps li::after { display: none; } .valuesGrid > div { padding-inline: 0 32px; } .valuesGrid > div + div { padding-inline: 32px 0; } }
@media (max-width: 600px) { .hero { min-height: 510px; } .heroImage { object-position: 55% center; } .eyebrow { font-size: 12px; line-height: 1.6; letter-spacing: 2px; } .hero h1 { font-size: 44px; } .intro { font-size: 16px; margin-top: 24px; } .stats dl { grid-template-columns: repeat(2, 1fr); gap: 28px 12px; } .stats dl > div:last-child { grid-column: 1 / -1; } .stats dd { font-size: 36px; } .stats dt { font-size: 10px; } .campusGrid, .programGrid, .valuesGrid { grid-template-columns: 1fr; } .values { padding-block: 52px; } .valuesGrid > div { padding: 0 0 30px; } .valuesGrid > div + div { padding: 30px 0 0; border-left: 0; border-top: 1px solid rgb(255 255 255 / 15%); } .steps { grid-template-columns: 1fr; padding: 28px; } .steps p { max-width: none; } .applyActions { flex-direction: column; margin-top: 32px; } .affiliationGrid { grid-template-columns: repeat(2, 1fr); gap: 32px 16px; } .affiliations { padding-block: 52px; } .affiliations h2 { font-size: 16px; line-height: 1.5; } }
```

```jsx
// src/App.test.tsx
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders shared layout and home page sections', () => {
  render(<App />);
  expect(screen.getByRole('banner')).toBeInTheDocument();
  expect(screen.getByRole('main')).toBeInTheDocument();
  expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Progress ThroughEducation');
  ['Our Campuses', 'Our Vision', 'Our Mission', 'Academic Programs', 'Admissions', 'Affiliations & Accreditations'].forEach(name => expect(screen.getByRole('heading', { name })).toBeInTheDocument());
  expect(screen.getAllByRole('article')).toHaveLength(6);
});

test('mobile navigation closes after choosing a section', () => {
  render(<App />);
  const toggle = screen.getByRole('button', { name: 'Menu' });
  fireEvent.click(toggle);
  expect(toggle).toHaveAttribute('aria-expanded', 'true');
  fireEvent.click(screen.getByRole('link', { name: 'Learning' }));
  expect(toggle).toHaveAttribute('aria-expanded', 'false');
});

test('unconfigured actions show an honest notice', () => {
  HTMLDialogElement.prototype.showModal = function () { this.setAttribute('open', ''); };
  HTMLDialogElement.prototype.close = function () { this.removeAttribute('open'); this.dispatchEvent(new Event('close')); };
  render(<App />);
  fireEvent.click(screen.getByRole('button', { name: 'Apply for Yangon' }));
  expect(screen.getByRole('dialog')).toHaveAttribute('open');
  expect(screen.getByText(/destination has not been provided/i)).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: 'Close' }));
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
});
```

```html
// public/index.html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#971b1e" />
    <meta
      name="description"
      content="Yangon International School — Progress Through Education. Explore our Yangon and Mandalay campuses, academic programs, and admissions."
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <!--
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
    -->
    <title>Yangon International School | Progress Through Education</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
    -->
  </body>
</html>
```

Reusable across future pages: Header, Footer, MainLayout, Navigation, Brand, Container, Section, Button, SectionHeading, ActionDialog, CampusCard, ProgramCard, and AccreditationBadge.

