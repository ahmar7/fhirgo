import React from "react";
import Header from "../../layout/Header/Header";

import Footer from "../../layout/Footer/Footer";
import NavigationNest from "../../components/Reusable/NavigationNest";
import Patient from "../../components/ResourcesComponents/SignleResources/Patients";

const PrayerExchange = () => {
  let innerLinkName = "Resources";
  let innerLink = "/resources";
  let pageTitle = "Resources";
  let firstLinkName = "PATIENTS";
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
      <Patient />

      <Footer />
    </div>
  );
};

export default PrayerExchange;
