import React, { useState } from "react";
import { Link } from "react-router-dom";
import Banner from "../../../assets/img/steps.jpg";
const DenialManagementDetails = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  const toggleData = [
    {
      label: "Identifying Denial Reasons",
      content: "We drill down to the root cause for which the claim was denied",
    },
    {
      label: "Categorizing Denials",
      content:
        "The identified reasons are then categorized and assigned to respective teams for corrective action.",
    },
    {
      label: "Resubmitting Claims",
      content:
        "Upon receiving the claims from respective departments, they are resubmitted again for a claim.",
    },
    {
      label: "Developing a Tracking Mechanism",
      content:
        "Tracking the status of the resubmitted claims with regular follow-ups.",
    },
    {
      label: "Building a Prevention Mechanism",
      content:
        "Preparing a handy checklist on top denial reasons and how to handle them.",
    },
    {
      label: "Monitoring Future Claims",
      content:
        "Creating a second level check based on the findings of denial reasons to avoid future rejections.",
    },
  ];
  return (
    <>
      <div className="banner-sec">
        <img src={Banner} />
      </div>
      <div id="main" className="column2 column2-left-sidebar boxed fto">
        <div className="container">
          <div className>
            <div className="main-content ">
              <div id="content" role="main">
                <article className="post-176 page type-page status-publish hentry">
                  <span className="entry-title" style={{ display: "none" }}>
                    denial management
                  </span>
                  <span className="vcard" style={{ display: "none" }}>
                    <span className="fn">
                      <a
                        href="https://fhirgo.com/author/medicorex_ghul8z/"
                        title="Posts by medicorex_ghul8z"
                        rel="author"
                      >
                        medicorex_ghul8z
                      </a>
                    </span>
                  </span>
                  <span className="updated" style={{ display: "none" }}>
                    2022-05-22T21:39:06+00:00
                  </span>
                  <div className="page-content">
                    <div
                      className="vc_row-full-width vc_clearfix"
                      style={{ left: "0px" }}
                    />
                    <div
                      className="vc_row wpb_row row vc_row-no-padding"
                      data-vc-full-width="true"
                      data-vc-full-width-init="true"
                      data-vc-stretch-content="true"
                      style={{ boxSizing: "border-box", width: "100%" }}
                    >
                      <div className="vc_column_container col-md-8 pods">
                        <div className="wpb_wrapper vc_column-inner">
                          <div className="porto-feature-box wpb_content_element ">
                            <div className="feature-box feature-box-style-6">
                              <div className="feature-box-icon">
                                <i
                                  className="fa fa-cogs"
                                  aria-hidden="true"
                                  style={{ fontSize: "20px" }}
                                />
                              </div>
                              <div className="feature-box-info">
                                <h2 className="vc_custom_heading m-b-md align-left">
                                  Denial Management
                                </h2>
                                <div className="wpb_text_column wpb_content_element  lead">
                                  <div className="wpb_wrapper">
                                    <p>
                                      Healthcare organizations should be
                                      concerned about both rejected claims and
                                      denied claims. The claims rejection
                                      management process provides an
                                      understanding of the claim’s issues and an
                                      opportunity to correct the problems.
                                      Denied Claims represent lost revenue or
                                      delayed revenue (if the claim gets paid
                                      after appeals).
                                    </p>
                                    <p>
                                      To successfully appeal denied claims, the
                                      billers must perform a root-cause
                                      analysis, take actions to correct the
                                      identifies issues, and file an appeal with
                                      the payer. To thrive, a healthcare
                                      organization must continuously address the
                                      front-end processes’ problems to prevent
                                      denials from recurring in the future.
                                    </p>
                                    <p>
                                      <span>
                                        Our experienced and proactive denial
                                        management team carefully analyze your
                                        remittance advice to identify the root
                                        causes of denials, zero pays, claim
                                        reversals and meticulously work on them
                                        until the claim is closed out.
                                      </span>
                                    </p>
                                  </div>
                                </div>
                                <h2
                                  className="vc_custom_heading m-b-md align-left"
                                  style={{ color: "rgb(238, 238, 34)" }}
                                >
                                  Our Denial Management Solutions
                                </h2>
                                <div className="porto-toggles wpb_content_element m-t-xxl toggle-simple toggle-lg toggle-primary">
                                  {toggleData.map((item, index) => (
                                    <section
                                      key={index}
                                      className={`toggle ${
                                        activeIndex === index ? "active" : ""
                                      }`}
                                    >
                                      <label
                                        onClick={() => handleToggle(index)}
                                      >
                                        {item.label}
                                      </label>
                                      <div
                                        className="toggle-contents"
                                        style={{
                                          maxHeight:
                                            activeIndex === index
                                              ? "1000px"
                                              : "0",
                                          opacity:
                                            activeIndex === index ? 1 : 0,
                                          overflow: "hidden",
                                          transition:
                                            "max-height 0.3s ease-in-out, opacity 0.3s ease-in-out",
                                        }}
                                      >
                                        <p>{item.content}</p>
                                      </div>
                                    </section>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="vc_column_container col-md-4">
                        <div className="wpb_wrapper vc_column-inner">
                          <div className="wpb_single_image wpb_content_element vc_align_left">
                            <div className="wpb_wrapper">
                              <div className="vc_single_image-wrapper   vc_box_border_grey">
                                <img
                                  decoding="async"
                                  width={612}
                                  height={563}
                                  src="https://fhirgo.com/wp-content/uploads/2022/05/10-Denial-Management-Infographics-1.png"
                                  className="vc_single_image-img attachment-full"
                                  alt=""
                                  srcSet="https://fhirgo.com/wp-content/uploads/2022/05/10-Denial-Management-Infographics-1.png 612w, https://fhirgo.com/wp-content/uploads/2022/05/10-Denial-Management-Infographics-1-300x276.png 300w, https://fhirgo.com/wp-content/uploads/2022/05/10-Denial-Management-Infographics-1-250x230.png 250w, https://fhirgo.com/wp-content/uploads/2022/05/10-Denial-Management-Infographics-1-550x506.png 550w, https://fhirgo.com/wp-content/uploads/2022/05/10-Denial-Management-Infographics-1-196x180.png 196w, https://fhirgo.com/wp-content/uploads/2022/05/10-Denial-Management-Infographics-1-326x300.png 326w, https://fhirgo.com/wp-content/uploads/2022/05/10-Denial-Management-Infographics-1-544x500.png 544w"
                                  sizes="(max-width: 612px) 100vw, 612px"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="vc_row-full-width vc_clearfix" style={{}} />
                    <div className="vc_row wpb_row row">
                      <div className="vc_column_container col-md-12">
                        <div className="wpb_wrapper vc_column-inner">
                          <div className="wpb_text_column wpb_content_element ">
                            <div className="wpb_wrapper" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
                <div />
              </div>
            </div>
            <div className="col-lg-3 sidebar left-sidebar mobile-hide-sidebar">
              <div className="sidebar-content" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DenialManagementDetails;
