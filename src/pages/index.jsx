import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Footer } from "../components/Footer";
import { Main } from "../components/Main";
import { Header } from "../components/Header";
import { useCallback } from "react";

export default function Home() {
  const handleClick = useCallback((e) => {
    console.log(e.target.href);
    e.preventDefault();
  }, []);

  return (
    <div className={styles.container}>
      <Header />
      <a href="/about" onClick={handleClick}>
        ボタン
      </a>

      <Main page="index" />

      <Footer />
    </div>
  );
}
