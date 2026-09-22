import { useState } from "react";
import Button from "../../components/ui/Button";
import styles from "./Mandalay.module.css";

export default function ContactForm() {
  const [draft, setDraft] = useState("");
  function prepareMessage(event) {
    event.preventDefault();
    const v = new FormData(event.currentTarget);
    const body = `Tour date: ${v.get("date")}\nGrade: ${v.get("grade")}\nPhone: ${v.get("phone")}\n\n${v.get("message")}\n\nFrom: ${v.get("firstName")} ${v.get("lastName")}\nEmail: ${v.get("email")}`;
    setDraft(
      `mailto:admissions.mdy@yismyanmar.com?subject=${encodeURIComponent("Campus tour request")}&body=${encodeURIComponent(body)}`,
    );
  }
  return (
    <form
      className={styles.contactForm}
      onSubmit={prepareMessage}
      onChange={() => setDraft("")}
    >
      <h3>Tour request form</h3>
      <div className={styles.formGrid}>
        <label>
          First name
          <input name="firstName" placeholder="First Name" required />
        </label>
        <label>
          Last name
          <input name="lastName" placeholder="Last Name" required />
        </label>
        <label>
          Email
          <input
            name="email"
            type="email"
            placeholder="you@email.com"
            required
          />
        </label>
        <label>
          Phone
          <input name="phone" type="tel" placeholder="Mobile number" required />
        </label>
        <label>
          Preferred tour date
          <input name="date" type="date" required />
        </label>
        <label>
          Grade level
          <select name="grade" defaultValue="">
            <option value="" disabled>
              Select grade
            </option>
            <option>Early childhood</option>
            <option>Elementary</option>
            <option>Secondary</option>
          </select>
        </label>
        <label className={styles.full}>
          Questions or comments
          <textarea
            name="message"
            rows="4"
            placeholder="Tell us what brought you to YIS Mandalay..."
          />
        </label>
      </div>
      <Button type="submit">Submit tour request</Button>
      {draft && (
        <p className={styles.formStatus} role="status">
          Your request is ready, but has not been sent.{" "}
          <a href={draft}>Open your email app to send it.</a>
        </p>
      )}
    </form>
  );
}
