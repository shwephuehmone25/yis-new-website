import HomePage from './pages/HomePage';
import MandalayPage from './pages/MandalayPage';
export default function App() {
  return /^\/mandalay\/?$/.test(window.location.pathname) ? <MandalayPage /> : <HomePage />;
}
