import React from "react";
import Header from "../layout/Header/Header";

import Footer from "../layout/Footer/Footer";
import Navigation from "../components/Reusable/Navigation";
import Resource from "../components/ResourcesComponents/Resource";

const Resources = () => {
  let firstLinkName = "Resources";
  let firstLink = "";
  let pageTitle = "Resources";
  let pageDesc = "Everything you need to know";
  return (
    <div>
      <Header />
      <Navigation
        firstLinkName={firstLinkName}
        pageTitle={pageTitle}
        pageDesc={pageDesc}
      />
      <div id="main" className="column1 boxed">
        <div className="container">
          <div className="row main-content-wrap">
            <div className="main-content col-lg-12">
              <div id="content" role="main">
                <article className="post-144 page type-page status-publish hentry">
                  <Resource />
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Resources;
