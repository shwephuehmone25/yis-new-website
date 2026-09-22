import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ActionDialog from "../ui/ActionDialog";
export default function MainLayout({ children }) {
  const [action, setAction] = useState(null);
  return (
    <>
      <Header onAction={setAction} />
      <main id="main">
        {typeof children === "function" ? children(setAction) : children}
      </main>
      <Footer onAction={setAction} />
      <ActionDialog action={action} onClose={() => setAction(null)} />
    </>
  );
}
