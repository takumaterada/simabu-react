import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Footer } from "../components/Footer";
import { Main } from "../components/Main";
import { Header } from "../components/Header";
import { useEffect, useState } from "react";

export default function Home() {
  const [count, setCount] = useState(1);
  // let foo = 1;
  const handleClick = (e) => {
    setCount((count) => count + 1);
  };

  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div className={styles.container}>
      <Header />
      <h1>{foo}</h1>
      <button onClick={handleClick}>ボタン</button>

      <Main page="index" />

      <Footer />
    </div>
  );
}
