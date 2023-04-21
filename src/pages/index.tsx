import React from "react";
import Head from "next/head";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import About from "../components/About";
import Work from "../components/Work";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>JJCX</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Nav />
      <Hero />
      <About />
      <Work />
      <Footer />
    </>
  );
};

export default Home;
