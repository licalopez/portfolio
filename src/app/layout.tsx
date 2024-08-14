import type { Metadata } from "next";
import styles from "./styles/main.module.scss";
import Menu from "./components/ui/menu";
import ModalProvider from "./contexts/modal-context";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Angelica Lopez",
    template: "Angelica Lopez | %s",
  },
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
        <ModalProvider>
          <Menu />
          {children}
        </ModalProvider>
      </body>
    </html>
  );
}
