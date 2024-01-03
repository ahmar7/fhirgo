import React from "react";
import Header from "../../layout/Header/Header";

import Footer from "../../layout/Footer/Footer";
import NavigationNest from "../../components/Reusable/NavigationNest";
import PrepareForVisit from "../../components/ResourcesComponents/SignleResources/PrepareForVisit";

const PrepareVisit = () => {
  let innerLinkName = "Resources";
  let innerLink = "/resources";
  let pageTitle = "Resources";
  let firstLinkName = "PREPARE FOR VISIT";
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
      <PrepareForVisit />

      <Footer />
    </div>
  );
};

export default PrepareVisit;
