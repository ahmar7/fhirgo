import React from "react";
import Header from "../layout/Header/Header";

import Footer from "../layout/Footer/Footer";
import Navigation from "../components/Reusable/Navigation";
import Contactus from "../components/ContactComponents/Contactus";

const Contact = () => {
  let firstLinkName = "Contact";
  let firstLink = "";
  let pageTitle = "Contact";
  let pageDesc = "Send us a message or call us for more information";

  return (
    <div>
      <Header />
      <Navigation
        firstLinkName={firstLinkName}
        pageTitle={pageTitle}
        pageDesc={pageDesc}
      />
      <Contactus />

      <Footer />
    </div>
  );
};

export default Contact;
