import React from "react";
import Header from "../layout/Header/Header";

import Footer from "../layout/Footer/Footer";
import Navigation from "../components/Reusable/Navigation";
import Resource from "../components/ResourcesComponents/Resource";
import FhirbaseDetail from "../components/FhirbaseComponents/Banner";
import Detail from "../components/FhirbaseComponents/Detail";

const Fhirbase = () => {
  let firstLinkName = "FHIRBase";
  let firstLink = "";
  let pageTitle = "FHIRBase";
  let pageDesc = "";
  return (
    <div>
      <Header />
      <Navigation
        firstLinkName={firstLinkName}
        pageTitle={pageTitle}
        pageDesc={pageDesc}
      />
      <FhirbaseDetail />
      <div className="container">
        <div className="row main-content-wrap">
          <div className="main-content col-lg-12">
            <div id="content" role="main">
              <Detail />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Fhirbase;
