import React from "react";
import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Resume from "./components/resume/Resume";
import Contact from "./components/contact/Contact";
import Projects from "./components/projects/Projects";
import Features from "./components/features/Features";
import FooterBottom from "./components/footer/FooterBottom";
import Testimonial from "./components/tesimonial/Testimonial";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <Banner />
        <Features />
        <Projects />
        <Resume />
        <Testimonial />
        <Contact />
        <Footer />
        <FooterBottom />
      </div>
    </div>
  );
}

export default App;
