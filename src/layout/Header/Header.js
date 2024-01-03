import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  const [nav, setnav] = useState(false);
  let toggleNav = () => {
    nav ? setnav(false) : setnav(true);
  };

  return (
    <div className="header-wrapper clearfix">
      {/* header wrapper */}
      <header
        id="header"
        className="header-corporate header-10 search-sm header-loaded"
      >
        <div className="header-top">
          <div className="container">
            <div className="header-left"></div>
            <div className="header-right"></div>
          </div>
        </div>
        <div className="header-main header-body">
          <div className="header-container container">
            <div className="header-left">
              <h1 className="logo logo-transition">
                {" "}
                <Link
                  to="/"
                  title="FHIRGo - Digital Health Care Transformation"
                  rel="home"
                >
                  <img
                    className="img-responsive standard-logo"
                    src="//fhirgo.com/wp-content/uploads/2023/01/3.png"
                    alt="FHIRGo"
                  />
                  <img
                    className="img-responsive retina-logo"
                    src="//fhirgo.com/wp-content/uploads/2023/01/3.png"
                    alt="FHIRGo"
                    style={{ display: "none" }}
                  />{" "}
                </Link>
              </h1>{" "}
            </div>
            <div className="header-right">
              <div className="header-right-top">
                <div className="header-contact">
                  <ul className="nav nav-pills">
                    <li className="d-none d-sm-block">
                      <span className="ws-nowrap">
                        <i className="Simple-Line-Icons-location-pin" /> 30 N
                        Gould St Ste R, Sheridan, WY 82801
                      </span>
                    </li>
                    <li className="d-none d-sm-block">
                      <span className="ws-nowrap">
                        <i className="Simple-Line-Icons-envelope-open" />{" "}
                        <a
                          className="text-decoration-none"
                          href="mailto:info@fhirgo.com"
                        >
                          {" "}
                          info@fhirgo.com
                        </a>
                      </span>
                    </li>
                    <li>
                      <span className="ws-nowrap">
                        <i className="Simple-Line-Icons-call-out" />{" "}
                        307-381-8051
                      </span>
                    </li>
                  </ul>
                </div>{" "}
              </div>
              <div className="header-right-bottom">
                <div id="main-menu">
                  <ul
                    id="menu-main-menu"
                    className="main-menu mega-menu show-arrow effect-down subeffect-fadein-left"
                  >
                    <li
                      id="nav-menu-item-361"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-143 current_page_item  narrow "
                    >
                      <NavLink to="/" className="current">
                        Home
                      </NavLink>
                    </li>
                    <li
                      id="nav-menu-item-643"
                      className="menu-item menu-item-type-post_type menu-item-object-page  narrow "
                    >
                      <NavLink to="/industry" className="current">
                        Industry
                      </NavLink>
                    </li>
                    <li
                      id="nav-menu-item-363"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children  has-sub narrow "
                    >
                      <NavLink to="/services" className="current">
                        Products
                      </NavLink>
                      <div className="popup" style={{ display: "block" }}>
                        <div className="inner" style={{}}>
                          <ul className="sub-menu">
                            <li
                              id="nav-menu-item-545"
                              className="menu-item menu-item-type-post_type menu-item-object-page "
                              data-cols={1}
                            >
                              <NavLink to="/fhirbase" className="current">
                                FHIRGo
                              </NavLink>
                            </li>
                            <li
                              id="nav-menu-item-504"
                              className="menu-item menu-item-type-post_type menu-item-object-page "
                              data-cols={1}
                            >
                              <NavLink to="/medical-coding-2" className>
                                FHIRPlus
                              </NavLink>
                            </li>
                            <li
                              id="nav-menu-item-201"
                              className="menu-item menu-item-type-post_type menu-item-object-page "
                              data-cols={1}
                            >
                              <NavLink
                                to="/services/denial-management"
                                className
                              >
                                FHIR365
                              </NavLink>
                            </li>
                            <li
                              id="nav-menu-item-462"
                              className="menu-item menu-item-type-post_type menu-item-object-page "
                              data-cols={1}
                            >
                              <NavLink
                                to="/services/practice-management"
                                className
                              >
                                NewRelease
                              </NavLink>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li
                      id="nav-menu-item-803"
                      className="menu-item menu-item-type-post_type menu-item-object-page  narrow "
                    >
                      <NavLink to="/services" className="current">
                        Services
                      </NavLink>
                    </li>
                    <li
                      id="nav-menu-item-362"
                      className="menu-item menu-item-type-post_type menu-item-object-page  narrow "
                    >
                      <NavLink to="/about-us" className="current">
                        About Us
                      </NavLink>
                    </li>
                    <li
                      id="nav-menu-item-283"
                      className="menu-item menu-item-type-post_type menu-item-object-page  narrow "
                    >
                      <NavLink to="/contact" className="current">
                        Connect
                      </NavLink>
                    </li>
                    <li
                      id="nav-menu-item-760"
                      className="menu-item menu-item-type-post_type menu-item-object-page  narrow "
                    >
                      <a href="#" className="current">
                        Request Demo
                      </a>
                    </li>
                  </ul>{" "}
                </div>
                <a className="mobile-toggle" onClick={toggleNav}>
                  <i className="fa fa-reorder" />
                </a>
              </div>
            </div>
          </div>
          <div id="nav-panel none" className={nav ? "display-f" : "display-n"}>
            <div className="container">
              <div className="mobile-nav-wrap">
                <div className="menu-wrap">
                  <ul
                    id="menu-main-menu-1"
                    className="mobile-menu accordion-menu"
                  >
                    <li
                      id="accordion-menu-item-361"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-143 current_page_item active"
                    >
                      <NavLink to="/" rel="nofollow" className=" current ">
                        Home
                      </NavLink>
                    </li>
                    <li
                      id="accordion-menu-item-643"
                      className="menu-item menu-item-type-post_type menu-item-object-page "
                    >
                      <NavLink
                        to="/industry"
                        rel="nofollow"
                        className="current"
                      >
                        Industry
                      </NavLink>
                    </li>
                    <li
                      id="accordion-menu-item-363"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children  has-sub"
                    >
                      <NavLink to="/services" className="current">
                        Products
                      </NavLink>
                      <span className="arrow" />
                      <ul className="sub-menu">
                        <li
                          id="accordion-menu-item-545"
                          className="menu-item menu-item-type-post_type menu-item-object-page "
                        >
                          <NavLink to="/fhirbase" rel="nofollow" className>
                            FHIRGo
                          </NavLink>
                        </li>
                        <li
                          id="accordion-menu-item-504"
                          className="menu-item menu-item-type-post_type menu-item-object-page "
                        >
                          <NavLink
                            href="/medical-coding-2"
                            rel="nofollow"
                            className
                          >
                            FHIRPlus
                          </NavLink>
                        </li>
                        <li
                          id="accordion-menu-item-201"
                          className="menu-item menu-item-type-post_type menu-item-object-page "
                        >
                          <NavLink to="/services/denial-management" className>
                            FHIR365
                          </NavLink>
                        </li>
                        <li
                          id="accordion-menu-item-462"
                          className="menu-item menu-item-type-post_type menu-item-object-page "
                        >
                          <NavLink to="/services/practice-management" className>
                            NewRelease
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    <li
                      id="accordion-menu-item-803"
                      className="menu-item menu-item-type-post_type menu-item-object-page "
                    >
                      <NavLink to="/services" className="current">
                        Services
                      </NavLink>
                    </li>
                    <li
                      id="accordion-menu-item-362"
                      className="menu-item menu-item-type-post_type menu-item-object-page "
                    >
                      <NavLink to="/about-us" className="current">
                        About Us
                      </NavLink>
                    </li>
                    <li
                      id="accordion-menu-item-283"
                      className="menu-item menu-item-type-post_type menu-item-object-page "
                    >
                      <NavLink to="/contact" className="current">
                        Connect
                      </NavLink>
                    </li>
                    <li
                      id="accordion-menu-item-760"
                      className="menu-item menu-item-type-post_type menu-item-object-page "
                    >
                      <a href="#" rel="nofollow" className>
                        Request Demo
                      </a>
                    </li>
                  </ul>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
