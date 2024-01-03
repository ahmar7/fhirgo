import React from "react";
import Header from "../layout/Header/Header";

import Footer from "../layout/Footer/Footer";
import Blog from "../components/IndustryComponents/Blog";
import Navigation from "../components/Reusable/Navigation";
import Service from "../components/ServiceComponents/Service";

const Services = () => {
  let firstLinkName = "Our Services";
  let firstLink = "";
  let pageTitle = "Our Services";
  let pageDesc = "Learn more about our departments";
  return (
    <div>
      <Header />
      <Navigation
        firstLinkName={firstLinkName}
        pageTitle={pageTitle}
        pageDesc={pageDesc}
      />
      <Service />

      <Footer />
    </div>
  );
};

export default Services;
