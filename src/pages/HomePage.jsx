import React from "react";
import NavBar from "../components/common/NavBar";
import About from "../components/Home/About/About";
import BlogSlider from "../components/Home/BlogSlider/BlogSlider";
import Conversation from "../components/Home/Conversation/Conversation";
import Footer from "../components/Home/Footer/Footer";
import Header from "../components/Home/Header/Header";
import HeroSection from "../components/Home/Hero/HeroSection";
import Services from "../components/Home/Services/Services";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <Header />
      <Services />
      <HeroSection />
      <About />
      <BlogSlider />
      <Conversation />
      <Footer />
    </>
  );
};

export default HomePage;
