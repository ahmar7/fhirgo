import React from "react";
import Header from "../../layout/Header/Header";

import Footer from "../../layout/Footer/Footer";
import NavigationNest from "../../components/Reusable/NavigationNest";
import PracticeManagementDetails from "../../components/ServiceComponents/SingleService/PracticeManagementDetails";

const PracticeManagement = () => {
  let innerLinkName = "Our Services";
  let innerLink = "/services";
  let pageTitle = "Our Services";
  let firstLinkName = "PRACTICE MANAGEMENT";
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
      <PracticeManagementDetails />

      <Footer />
    </div>
  );
};

export default PracticeManagement;
