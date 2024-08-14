"use client";
import { useRef } from "react";
import { useModalContext } from "./hooks/useModalContext";

import About from "./components/about/about";
import Landing from "./components/landing";
import Projects from './components/projects/projects';
import Contact from "./components/contact/contact";
import Footer from "./components/footer";


export default function Home() {
  const contactRef = useRef<HTMLDivElement | null>(null);
  const [isMenuModalOpen] = useModalContext();

  const scrollToContact = () => {
    if (contactRef && contactRef.current) {
      contactRef.current.scrollIntoView();
    }
  };

  return (
    <main aria-hidden={isMenuModalOpen}>
      <Landing scrollToContact={scrollToContact} />
      <About />
      <Projects />
      <Contact ref={contactRef} />
      <Footer />
    </main>
  );
}
