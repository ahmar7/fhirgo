import React from "react";
import Header from "../../layout/Header/Header";

import Footer from "../../layout/Footer/Footer";
import NavigationNest from "../../components/Reusable/NavigationNest";
import SurgeryProcess from "../../components/ResourcesComponents/SignleResources/SuregeryProcess";

const Surgery = () => {
  let innerLinkName = "Resources";
  let innerLink = "/resources";
  let pageTitle = "Resources";
  let firstLinkName = "SURGERY PROCCESS";
  let pageDesc = "Everything you need to know";
  return (
    <div>
      <Header />
      <NavigationNest
        firstLinkName={firstLinkName}
        pageTitle={pageTitle}
        pageDesc={pageDesc}
        innerLink={innerLink}
        innerLinkName={innerLinkName}
      />
      <SurgeryProcess />

      <Footer />
    </div>
  );
};

export default Surgery;
