import "../styles/globals.css";
import Head from "next/head";
import { useCounter } from "src/hooks/useCounter";
import { useInputArray } from "src/hooks/useInputArray";
import { useBgLightBlue } from "src/hooks/useBgLightBlue";

function MyApp({ Component, pageProps }) {
  const counter = useCounter();
  console.log(counter);
  const inputArray = useInputArray();
  useBgLightBlue();

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} {...counter} {...inputArray} />
    </div>
  );
}

export default MyApp;
