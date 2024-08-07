import styles from './styles/main.module.scss';
import Landing from "./components/landing";
import About from "./components/about/about";
import './globals.css';


export default function Home() {
  return (
    <main className={styles.main}>
      <Landing />
      <About />
    </main>
  );
}
