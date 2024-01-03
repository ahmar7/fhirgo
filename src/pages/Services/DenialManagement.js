import React from "react";
import Header from "../../layout/Header/Header";

import Footer from "../../layout/Footer/Footer";
import NavigationNest from "../../components/Reusable/NavigationNest";
import DenialManagementDetails from "../../components/ServiceComponents/SingleService/DenialManagementDetails";

const DenialManagement = () => {
  let innerLinkName = "Our Services";
  let innerLink = "/services";
  let pageTitle = "Our Services";
  let firstLinkName = "DENIAL MANAGEMENT";
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
      <DenialManagementDetails />

      <Footer />
    </div>
  );
};

export default DenialManagement;
