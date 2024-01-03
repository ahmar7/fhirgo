import React from "react";
import { Link } from "react-router-dom";

const NavigationNest = (props) => {
  return (
    <section className="page-top page-header-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 clearfix">
            <div className="pt-left">
              <h1 className="page-title b-none">{props.pageTitle}</h1>
              <p className="page-sub-title">{props.pageDesc}</p>
            </div>
            <div className="breadcrumbs-wrap pt-right">
              <ul className="breadcrumb">
                <li
                  className="home"
                  itemScope
                  itemType="http://schema.org/BreadcrumbList"
                >
                  <Link itemProp="url" to="/" title="Go to Home Page">
                    <span itemProp="title">Home</span>
                  </Link>
                  <i className="fa-solid fa-chevron-right ms-2 me-2jh"></i>
                  <Link
                    itemProp="url"
                    to={props.innerLink}
                    title="Go to Home Page"
                  >
                    <span itemProp="title">{props.innerLinkName}</span>
                  </Link>
                  <i className="fa-solid fa-chevron-right ms-2 me-2jh"></i>
                  {/* <i className="delimiter delimiter-2" /> */}
                </li>
                <li>{props.firstLinkName}</li>
              </ul>{" "}
            </div>
          </div>
        </div>
      </div>{" "}
    </section>
  );
};

export default NavigationNest;
