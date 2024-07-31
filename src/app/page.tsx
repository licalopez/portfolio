import Image from "next/image";
import styles from './styles/main.module.scss';

import Landing from "./components/landing";


export default function Home() {
  return (
    <main className={styles.main}>
      <Landing />
    </main>
  );
}
