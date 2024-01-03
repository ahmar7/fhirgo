import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-wrapper ">
      <div id="footer" className="footer-1">
        <div className="footer-main">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <aside id="text-2" className="widget widget_text">
                  <h3 className="widget-title">Location</h3>{" "}
                  <div className="textwidget">
                    <b>FHIRGo</b>
                    <br />
                    30 N Gould St Ste R, Sheridan, WY 82801
                    <br />
                    United State
                    <br />
                    Phone : +1 307-381-8051
                  </div>
                </aside>{" "}
              </div>
              <div className="col-lg-4">
                <aside id="text-3" className="widget widget_text">
                  <h3 className="widget-title">Products</h3>{" "}
                  <div className="textwidget">
                    <a href="#" target="_blank" rel="noopener">
                      <b>FHIRGo</b>
                    </a>{" "}
                    <br />
                    <a href="#" target="_blank" rel="noopener">
                      <b>FHIR+</b>
                    </a>{" "}
                    <br />
                    <a href="#" target="_blank" rel="noopener">
                      <b>FHIR365</b>
                    </a>
                  </div>
                </aside>{" "}
              </div>
              <div className="col-lg-3">
                <aside id="follow-us-widget-2" className="widget follow-us">
                  <h3 className="widget-title">Social Media</h3>{" "}
                  <div className="share-links disable-br default-skin">
                    <a
                      href="#"
                      rel="nofollow"
                      target="_blank"
                      title="Facebook"
                      className="share-facebook"
                    >
                      Facebook
                    </a>
                    <a
                      href="#"
                      rel="nofollow"
                      target="_blank"
                      title="Twitter"
                      className="share-twitter"
                    >
                      Twitter
                    </a>
                    <a
                      href="#"
                      rel="nofollow"
                      target="_blank"
                      title="Linkedin"
                      className="share-linkedin"
                    >
                      Linkedin
                    </a>{" "}
                  </div>
                </aside>{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="footer-left">
              <span className="logo">
                <Link
                  to="/"
                  title="FHIRGo - Digital Health Care Transformation"
                >
                  <img
                    className="img-responsive"
                    src="//fhirgo.com/wp-content/uploads/2023/01/3.png"
                    alt="FHIRGo"
                  />{" "}
                </Link>
              </span>
            </div>
            <div className="footer-center">
              © Copyright 2023 All Rights Reserved.{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
