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
        <meta name="description" content="The portfolio of Craig Puxty" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      <MobileNav isNavOpen={isNavOpen} />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
