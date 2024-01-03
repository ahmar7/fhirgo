import React from "react";
import Header from "../layout/Header/Header";

import Footer from "../layout/Footer/Footer";
import Navigation from "../components/Reusable/Navigation";
import Aboutus from "../components/AboutComponents/About";

const About = () => {
  let firstLinkName = "About Us";
  let firstLink = "";
  let pageTitle = "About Us";
  return (
    <div>
      <Header />
      <Navigation firstLinkName={firstLinkName} pageTitle={pageTitle} />
      <Aboutus />

      <Footer />
    </div>
  );
};

export default About;
