import React from "react";
import Header from "../layout/Header/Header";
import Banner from "../components/HomeComponents/Banner";
import Aboutus from "../components/HomeComponents/Aboutus";
import Services from "../components/HomeComponents/Services";
import Resources from "../components/HomeComponents/Resources";
import Review from "../components/HomeComponents/Review";
import Footer from "../layout/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <div className="column1 wide clearfix no-breadcrumbs">
        <div className="container-fluid">
          <div className="row main-content-wrap">
            <div className="main-content col-lg-12">
              <div className="main bg-custom-template ">
                <div className="bge-content-main">
                  <article
                    id="post-143"
                    className="bg-page-article post-143 page type-page status-publish hentry"
                  >
                    <div className="bge-entry-content">
                      <div className="vc_row wpb_row row">
                        <div
                          className="
                        vc_column_container col-md-12"
                        >
                          <div className="wpb_wrapper vc_column-inner">
                            <div className="wpb_text_column wpb_content_element ">
                              <Aboutus />
                              <Services />
                              <Resources />
                              <Review />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
