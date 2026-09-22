import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import styles from "./Layout.module.css";

const homeLinks = [["Home", "home"], ["About Us", "about"], ["Admissions", "admissions"], ["Learning", "learning"], ["Campuses", "campuses"], ["Community", "community"], ["Contacts", "contacts"]];
const mandalayLinks = [
  { label: "About Us", children: [["About YIS", "/about"], ["Welcome Messages", "/welcome-messages"]] },
  { label: "Admissions", children: [["Book A Tour", "/book-tour"], ["Apply To YIS", "/apply"], ["Admissions Guides & Req.", "/admissions"], ["Contact the Team", "/contact"]] },
  { label: "Student Life", children: [
    { label: "Academics", children: [["Elementary School", "learning"], ["Secondary School", "learning"], ["IB Diploma Programme", "learning"]] },
    ["Extra & Co-curricular Activities", "/activities"],
  ] },
  { label: "Student Services", children: [["Student Supply Lists", "community"], ["Meal Plan", "community"]] },
  { label: "Contact", children: [["Contact Us", "/contact"], ["Careers", "/careers"]] },
  { label: "Academic Calendars", id: "learning" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [openNested, setOpenNested] = useState(null);
  const isMandalay = /^\/mandalay\/?$/.test(window.location.pathname);
  const usesMandalayNavigation = window.location.pathname !== "/";
  const campusHref = (target) => target.startsWith("/") ? target : isMandalay ? `#${target}` : `/mandalay#${target}`;
  const closeNavigation = () => { setOpen(false); setOpenSubmenu(null); setOpenNested(null); };

  return <nav aria-label="Main navigation" className={styles.navigation}>
    <button
      type="button"
      className={styles.menuToggle}
      aria-label={open ? "Close menu" : "Menu"}
      aria-expanded={open}
      aria-controls="main-navigation"
      onClick={() => setOpen(!open)}
    >
      {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
    </button>
    <ul id="main-navigation" className={`${styles.navLinks} ${open ? styles.open : ""} ${usesMandalayNavigation ? styles.mandalayNav : ""}`}>
      {usesMandalayNavigation ? mandalayLinks.map((item) => <li key={item.label} className={item.children ? styles.hasSubmenu : ""}>
        {item.children ? <>
          <button className={styles.submenuToggle} aria-expanded={openSubmenu === item.label} onClick={() => setOpenSubmenu(openSubmenu === item.label ? null : item.label)}>
            {item.label}<ChevronDown size={13} aria-hidden="true" />
          </button>
          <ul className={`${styles.submenu} ${openSubmenu === item.label ? styles.submenuOpen : ""}`}>
            {item.children.map((child) => Array.isArray(child) ? <li key={child[0]}><a href={campusHref(child[1])} onClick={closeNavigation}>{child[0]}</a></li> : <li key={child.label} className={styles.hasNestedSubmenu}>
              <button className={styles.nestedToggle} aria-expanded={openNested === child.label} onClick={() => setOpenNested(openNested === child.label ? null : child.label)}>
                {child.label}<ChevronDown size={14} aria-hidden="true" />
              </button>
              <ul className={`${styles.nestedSubmenu} ${openNested === child.label ? styles.nestedOpen : ""}`}>
                {child.children.map(([label, id]) => <li key={label}><a href={campusHref(id)} onClick={closeNavigation}>{label}</a></li>)}
              </ul>
            </li>)}
          </ul>
        </> : <a href={campusHref(item.id)} onClick={closeNavigation}>{item.label}</a>}
      </li>) : homeLinks.map(([label, id]) => <li key={id}><a href={id.startsWith("/") ? id : id === "home" ? "/#home" : `/#${id}`} className={id === "home" ? styles.active : ""} onClick={closeNavigation}>{label}</a></li>)}
    </ul>
  </nav>;
}
