import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Find and Post Remote Jobs</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
