import { useEffect, useState } from "react";
import { Check, ChevronDown, Download, Mail, Phone } from "lucide-react";
import MainLayout from "../components/layout/MainLayout";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import useScrollEffects from "../hooks/useScrollEffects";
import styles from "./admissions/Admissions.module.css";

const requirements = [
  "Highly skilled and caring, certified educators​",
  "Motivated and curious students​",
  "A community of students, faculty, staff, and parents that are passionate about the school’s mission​",
];

const documents = [
  [
    "Application form",
    "The primary application to be completed by parents or guardians.",
  ],
  [
    "YIS flyer 2026–27",
    "Overview of our programmes, fees structure, and key dates for the upcoming academic year.",
  ],
  [
    "Student developmental questionnaire",
    "Provides our admissions team with insight into your child’s learning profile and developmental history.",
  ],
  [
    "Medical form",
    "Essential health and immunisation information required for all enrolled students.",
  ],
  [
    "Re-enrollment form",
    "For currently enrolled families confirming their place for the next academic year.",
  ],
  [
    "Admission guide 2025–26",
    "Comprehensive guide covering admissions criteria, processes, and what to expect at YIS.",
  ],
];

const faqs = [
  [
    "What is the best description about YIS?",
    "YIS Mandalay prides itself on offering a more supportive learning environment, with greater personal attention given to students than in other US universities. Delivering a rewarding learning experience with the personal touch forms the core of what we do at YIS Mandalay.",
  ],
  [
    "Is YIS a selective school?",
    "YIS uses a careful admissions process to ensure we can support each student academically, socially, and emotionally within our programmes.",
  ],
  [
    "What is our mission?",
    "YIS Mandalay is a Pre-K-12 college preparatory school. The school seeks to foster the development of the whole child who is a participating global citizen and lifelong learner: one who is academically well prepared, socially responsible, culturally sensitive, and personally fulfilled.To achieve this, the faculty believes in treating each child as an individual, who develops at his/her own rate. The faculty maintains a close, caring, and nurturing relationship with the students.The goal of YIS Mandalay is to provide an educational environment through staff, program and setting in which students can continue to grow in academic competence, personal fulfillment, self-discipline, social and environmental responsibility and appreciation of their own and others’ artistic and cultural heritage.",
  ],
  [
    "About Teaching and Learning Method at a YIS School?",
    "YIS Mandalay is based on an American curriculum and primarily utilizes materials from the United States. We are dedicated to providing teaching that is informed by our research and focused on delivering real-world, experiential learning. In addition, the school offers a program in local Myanmar culture and language and encourages members of the community to share national customs and traditions from around the world. High School students have a wide choice of AP or advanced level courses. Our teaching is outstanding in several areas, and our ambition is to continue on this upward trend.",
  ],
  [
    "How about our school's facilities?",
    "Please update the text with this “Conveniently located in the heart of Mandalay, Yangon International School (YIS) Mandalay is outfitted with state of the art facilities to create a safe, secure, and comfortable learning environment for students of all ages.Our new campus is almost four hectares in total. It features large classrooms, libraries with a wide range of books and other media, and dedicated laboratories for science and research work.A theatre and dedicated music and art rooms provide space for students to stretch their creative muscles, while a 6 lanes swimming pool and a soccer field encourage an active, healthy lifestyle.”",
  ],
  [
    "What are the details of the Founding Family Scholarship?",
    "Please prepare the items in the admission requirements checklist above. The admissions team will confirm any additional documents needed for your child’s application.",
  ],
];

function SectionHeading({ children, description }) {
  return (
    <div className={styles.heading}>
      <h2>{children}</h2>
      <i aria-hidden="true" />
      {description && <p>{description}</p>}
    </div>
  );
}

function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="admissions-title">
      <img src="/mandalay/23-scaled.jpg" alt="" />
      <div>
        <h1 id="admissions-title">Admissions requirements</h1>
        <span aria-hidden="true" />
      </div>
    </section>
  );
}

function Requirements() {
  return (
    <section className={styles.requirements}>
      <Container narrow>
        <div className={styles.requirementsGrid}>
          <div>
            <h2>About Us​</h2>
            <i />
            <p>
              Whether your family currently lives in Mandalay or will relocate
              to Myanmar, the choice of a school for your children is one of the
              most critical decision you will make. At Yangon International
              School Mandalay (YIS MDY) you will find:​
            </p>
            <ul>
              {requirements.map((item) => (
                <li key={item}>
                  <span>
                    <Check aria-hidden="true" />
                  </span>
                  {item}
                </li>
              ))}
            </ul><br />
            <p>
             For families moving to Myanmar for the first time, we understand that the challenge of addressing
            your child’s educational needs is a daunting task. For families currently residing in Mandalay, we
            understand the demands of moving your child to a new school.​
            </p><br />
            <p>
             Our Admissions office is committed to assisting families with these transitions. We are available
             to answer any and all questions you might have in order to make the process as seamless as
             possible for you and your family.​​
            </p>
          </div>
          <figure>
            <img
              src="/mandalay/about-mdy-1.jpg"
              alt="YIS student learning with teachers"
            />
          </figure>
        </div>
      </Container>
    </section>
  );
}

function ProspectiveFamilies() {
  const expectations = [
    ["Academic programme", "YIS has an academically rigorous, American, standards-based academic program."],
    ["Language of instruction", "All instruction is in English and a grade appropriate level of proficiency is necessary."],
    ["Secondary education", "The Secondary program at YIS is a college preparatory program."],
    ["Student experience", "The school promotes social activities, the appreciation of the Myanmar culture, and the personal fulfillment of each student."],
  ];

  return (
    <section className={styles.prospective} aria-labelledby="prospective-title">
      <Container narrow>
        <div className={styles.prospectiveIntro}>
          <div>
            <span>Before applying</span>
            <h2 id="prospective-title">Prospective students and parents</h2>
          </div>
          <p>Prospective students and parents should be familiar with the school’s program, facilities, and student expectations.</p>
        </div>
        <div className={styles.expectationGrid}>
          {expectations.map(([title, text], index) => (
            <article key={title}>
              <b>{String(index + 1).padStart(2, "0")}</b>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <aside className={styles.selectiveNote}>
          <span>Our admissions approach</span>
          <p>To ensure student success at YIS, admissions processes are selective; assessments and interviews are used with applicants to determine their ability and potential with our school and student body.</p>
        </aside>
        <div className={styles.prospectiveGallery} aria-label="Learning and facilities at YIS">
          <img src="/mandalay/admission-1.jpg" alt="A student focused on classroom work" loading="lazy" />
          <img src="/mandalay/admission-2.jpg" alt="A student walking through the school library" loading="lazy" />
          <img src="/mandalay/admission-3.jpg" alt="The YIS school theatre" loading="lazy" />
        </div>
      </Container>
    </section>
  );
}

function Documents() {
  return (
    <section className={styles.documents}>
      <Container narrow>
        <SectionHeading description="Download, complete, and submit the following forms as part of your application package.">
          Admissions documents
        </SectionHeading>
        <div className={styles.documentGrid}>
          {documents.map(([title, text]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
              <a
                href={`mailto:admissions.mdy@yismyanmar.com?subject=${encodeURIComponent(`Request: ${title}`)}`}
              >
                <Download aria-hidden="true" /> Request form
              </a>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function FAQ() {
  return (
    <section className={styles.faq}>
      <Container narrow>
        <SectionHeading>Frequently asked questions</SectionHeading>
        <div className={styles.faqList}>
          {faqs.map(([question, answer]) => (
            <details key={question}>
              <summary>
                {question}
                <ChevronDown aria-hidden="true" />
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Enquiry() {
  const [draft, setDraft] = useState("");
  function submit(event) {
    event.preventDefault();
    const values = new FormData(event.currentTarget);
    const body = `Parent / guardian: ${values.get("parent")}\nPhone: ${values.get("phone")}\nChild: ${values.get("child")}\nGrade applying for: ${values.get("grade")}\n\n${values.get("message")}\n\nEmail: ${values.get("email")}`;
    setDraft(
      `mailto:admissions.mdy@yismyanmar.com?subject=${encodeURIComponent("Admissions enquiry")}&body=${encodeURIComponent(body)}`,
    );
  }
  const grades = [
    "Pre-Kindergarten",
    "Kindergarten",
    ...Array.from({ length: 12 }, (_, index) => `Grade ${index + 1}`),
  ];
  return (
    <section className={styles.enquiry}>
      <Container narrow>
        <div className={styles.enquiryGrid}>
          <div>
            <h2>Admissions enquiry</h2>
            <i />
            <p>
              Ready to take the first step? Fill in the form and our Admissions
              team will be in touch to guide you through the process and answer
              any questions.
            </p>
            <address>
              <b>Admissions office</b>
              <a href="tel:+959777711118">
                <Phone aria-hidden="true" />
                +959 7777 1111 8
              </a>
              <a href="mailto:admissions.ygn@yis-yangon.edu.mm">
                <Mail aria-hidden="true" />
                admissions.ygn@yis-yangon.edu.mm
              </a>
            </address>
          </div>
          <form onSubmit={submit} onChange={() => setDraft("")}>
            <div>
              <label>
                Parent / guardian name *
                <input name="parent" placeholder="Full name" required />
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
                Child’s name
                <input name="child" placeholder="Student’s full name" />
              </label>
              <label className={styles.full}>
                Grade applying for *
                <select name="grade" defaultValue="" required>
                  <option value="" disabled>
                    Select a grade level...
                  </option>
                  {grades.map((grade) => (
                    <option key={grade}>{grade}</option>
                  ))}
                </select>
              </label>
              <label className={styles.full}>
                Message / questions
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Tell us about your child or ask us anything about admissions..."
                />
              </label>
            </div>
            <Button type="submit">Submit enquiry</Button>
            {draft && (
              <p className={styles.status} role="status">
                Your enquiry is ready.{" "}
                <a href={draft}>Open your email app to send it.</a>
              </p>
            )}
          </form>
        </div>
      </Container>
    </section>
  );
}

function ApplyCTA() {
  return (
    <section className={styles.apply}>
      <Container narrow>
        <h2>Apply to YIS Mandalay</h2>
        <p>
          We welcome families to contact our admissions team, arrange a campus
          visit, and learn about becoming part of the YIS Mandalay community.
          Enrollment is now open for the upcoming academic year.
        </p>
        <div>
          <Button variant="gold" href="/apply">
            Join us
          </Button>
          <Button variant="outline" href="tel:+959777603000">
            +95 (0) 9 777 60 3000
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default function AdmissionsPage() {
  useScrollEffects();
  useEffect(() => {
    const previous = document.title;
    document.title = "Admissions Requirements | YIS Mandalay";
    return () => {
      document.title = previous;
    };
  }, []);
  return (
    <MainLayout>
      <Hero />
      <Requirements />
      <ProspectiveFamilies />
      <Documents />
      <FAQ />
      <Enquiry />
      <ApplyCTA />
    </MainLayout>
  );
}
