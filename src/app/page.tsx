"use client";
import { useRef } from "react";
import About from "./components/about/about";
import Landing from "./components/landing";
import Projects from './components/projects/projects';
import Contact from "./components/contact/contact";
import Footer from "./components/footer";


/**
 * TODO : isMenuModalOpen to adjust tabIndex of links/buttons in page components
 */
export default function Home() {
  const contactRef = useRef<HTMLDivElement | null>(null);

  const scrollToContact = () => {
    if (contactRef && contactRef.current) {
      contactRef.current.scrollIntoView();
    }
  };

  return (
    <main>
      <Landing scrollToContact={scrollToContact} />
      <About />
      <Projects />
      <Contact ref={contactRef} />
      <Footer />
    </main>
  );
}
