import React from "react";
import Header from "../layout/Header/Header";

import Footer from "../layout/Footer/Footer";
import Blog from "../components/IndustryComponents/Blog";
import Navigation from "../components/Reusable/Navigation";

const Industry = () => {
  let firstLinkName = "Industry";
  let firstLink = "";
  let pageTitle = "Industry";
  return (
    <div>
      <Header />
      <Navigation firstLinkName={firstLinkName} pageTitle={pageTitle} />
      <div id="main" className="column1 boxed">
        <div className="container">
          <div className="row main-content-wrap">
            <div className="main-content col-lg-12">
              <div id="content" role="main">
                <article className="post-640 page type-page status-publish hentry">
                  <Blog />
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

export default Industry;
