import React from "react";
import Header from "../../layout/Header/Header";

import Footer from "../../layout/Footer/Footer";
import NavigationNest from "../../components/Reusable/NavigationNest";
import RevenueDetails from "../../components/ServiceComponents/SingleService/RevenueDetails.js";

const Revenue = () => {
  let innerLinkName = "Our Services";
  let innerLink = "/services";
  let pageTitle = "Our Services";
  let firstLinkName = "REVENUE";
  let pageDesc = "Learn more about our departments";
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
      <RevenueDetails />

      <Footer />
    </div>
  );
};

export default Revenue;
