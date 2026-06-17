import React from 'react';
import TopHeader from "../components/topheader/topHeader";
import Header from "../components/header/Header";
import Nav from "../components/nav/Nav";
import About from "../components/about/About";
import Experience from "../components/experience/Experience";
import Services from "../components/services/Services";
import Portfolio from "../components/portfolio/Portfolio";
import Testimonial from "../components/testimonials/Testimonials";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";

function Home() {
  return (
    <div>
        <TopHeader />
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      {/* <Testimonial /> */}
      <Footer />
    </div>
  )
}

export default Home