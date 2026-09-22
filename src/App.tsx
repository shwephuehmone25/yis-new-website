import HomePage from './pages/HomePage';
import MandalayPage from './pages/MandalayPage';
import AboutPage from './pages/AboutPage';
import WelcomeMessagesPage from './pages/WelcomeMessagesPage';
import ActivitiesPage from './pages/ActivitiesPage';
import ContactPage from './pages/ContactPage';
import CareersPage from './pages/CareersPage';
import ApplyPage from './pages/ApplyPage';
import BookTourPage from './pages/BookTourPage';
import AdmissionsPage from './pages/AdmissionsPage';
export default function App() {
  if (/^\/mandalay\/?$/.test(window.location.pathname) && window.location.hash === '#admissions') return <AdmissionsPage />;
  if (/^\/mandalay\/?$/.test(window.location.pathname)) return <MandalayPage />;
  if (/^\/about\/?$/.test(window.location.pathname)) return <AboutPage />;
  if (/^\/welcome-messages\/?$/.test(window.location.pathname)) return <WelcomeMessagesPage />;
  if (/^\/activities\/?$/.test(window.location.pathname)) return <ActivitiesPage />;
  if (/^\/contact\/?$/.test(window.location.pathname)) return <ContactPage />;
  if (/^\/careers\/?$/.test(window.location.pathname)) return <CareersPage />;
  if (/^\/apply\/?$/.test(window.location.pathname)) return <ApplyPage />;
  if (/^\/book-tour\/?$/.test(window.location.pathname)) return <BookTourPage />;
  if (/^\/admissions\/?$/.test(window.location.pathname)) return <AdmissionsPage />;
  return <HomePage />;
}
