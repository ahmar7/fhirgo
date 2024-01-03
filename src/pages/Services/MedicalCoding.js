import React from "react";
import Header from "../../layout/Header/Header";

import Footer from "../../layout/Footer/Footer";
import Navigation from "../../components/Reusable/Navigation";
import MedicalCodingDetail from "../../components/ServiceComponents/SingleService/MedicalCodingDetail";

const MedicalCoding = () => {
  let firstLinkName = "Services";
  let firstLink = "";
  let pageTitle = "SERVICES";
  return (
    <div>
      <Header />
      <Navigation firstLinkName={firstLinkName} pageTitle={pageTitle} />
      <MedicalCodingDetail />

      <Footer />
    </div>
  );
};

export default MedicalCoding;
