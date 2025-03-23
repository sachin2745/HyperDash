import React from "react";
import Header from "../components/header";
import Section2 from "../components/section2";
import Section3 from "../components/section3";
import Section4 from "../components/section4";
import Section5 from "../components/section5";
import ModalAir from "../components/modalair";
import Stats from "../components/stats";
import Section8 from "../components/section8";
import Section9 from "../components/section9";
import Section10 from "../components/section10";
import Footer from "../components/footer";

const Home = () => {
  return (
    <section className="bg-primary">
      <Header />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <ModalAir />
      <Stats />
      <Section8 />
      <Section9 />
      <Section10 />
      <Footer />
    </section>
  );
};

export default Home;
