import type { Metadata } from "next";
import styles from './styles/main.module.scss';
import Menu from "./components/ui/menu";
import './globals.css';

export const metadata: Metadata = {
  title: "Angelica Lopez",
  description: "Angelica Lopez\'s web portfolio",
  icons: "/favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={styles.html}>
      <body className={styles.body}>
        <Menu />
        {children}
      </body>
    </html>
  );
}
