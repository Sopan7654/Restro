import React from "react";
import Navbar from "../Components/Navbar";
import HeroSection from "../Components/Hero";
import About from "../Components/About";
import Qualities from "../Components/Qualities";
import Menu from "../Components/Menu";
import WhoAreWe from "../Components/WhoareWe";
import Team from "../Components/Team";
import Reservation from "../Components/Reservation";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <>
      <HeroSection />
      <About />
      <Qualities />
      <Menu />
      <WhoAreWe />
      <Team />
      <Reservation />
      <Footer />
    </>
  );
};

export default Home;
