import "../styles/globals.scss";
import { useState } from "react";
import Head from "next/head";
import Navbar from "../components/layout/Navbar";
import MobileNav from "../components/layout/MobileNav";
import Footer from "../components/layout/Footer";

function MyApp({ Component, pageProps }) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <>
      <Head>
        <title>Craig Puxty | Portfolio</title>
        <meta
          name="description"
          content="Craig Puxty's online portfolio using React js, Next js and GSAP."
        />
        <meta
          name="keywords"
          content="HTML, CSS, SCSS, Javascript, React js, Next js, GSAP, Photoshop artist, Web design, Web development, Portfolio"
        />
        <meta name="author" contents="Craig Puxty" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      <MobileNav isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
