import styles from "../styles/Home.module.css";
import { Footer } from "../components/Footer";
import { Main } from "../components/Main";
import { Header } from "../components/Header";

export default function About({
  count,
  doubleCount,
  isShow,
  handleClick,
  handleDisplay,
  text,
  array,
  handleChange,
  handleAdd,
}) {
  return (
    <div className={styles.container}>
      <Header />

      {isShow ? <h1>{doubleCount}</h1> : null}
      <button onClick={handleClick}>ボタン</button>
      <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>

      <input type="text" value={text} onChange={handleChange} />
      <button onClick={handleAdd}>追加</button>
      <ul>
        {array.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>

      <Main page="about" />

      <Footer />
    </div>
  );
}
