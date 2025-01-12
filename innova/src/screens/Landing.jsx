import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Values from "../components/Sections/Values";
import Services from "../components/Sections/Services";
import Blog from "../components/Sections/People";
import Pricing from "../components/Sections/why";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer"

export default function Landing() {
  return (
    <>
      <TopNavbar />
      <Header />
      <Values />
      <Services />
      <Blog />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}


