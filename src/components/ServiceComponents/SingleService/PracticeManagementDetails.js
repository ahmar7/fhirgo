import React, { useState } from "react";
import { Link } from "react-router-dom";
import Banner from "../../../assets/img/steps.jpg";
const PracticeManagementDetails = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const symptomsContent = (
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc{" "}
        <a href="#">vehicula</a> lacinia. Proin adipiscing porta tellus, ut
        feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare
        vel id metus. Vestibulum ante ipsum primis in faucibus orci luctus et
        ultrices posuere cubilia Curae; In eu libero ligula. Fusce eget metus
        lorem, ac viverra leo. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Curabitur pellentesque neque eget diam posuere porta.
        Quisque ut nulla at nunc <a href="#">vehicula</a> lacinia.
      </p>
      <ol className="list list-ordened list-ordened-style-2 m-b-md m-t-md">
        <li>Lorem ipsum consectetur adipi;</li>
        <li>Integer molestie facilisis in pre;</li>
        <li>Faucibus porta la;</li>
      </ol>
    </div>
  );

  const diagnosisContent = (
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget
      leo at velit imperdiet varius. In eu ipsum vitae velit congue iaculis
      vitae at risus. Nullam tortor nunc, bibendum vitae semper a, volutpat eget
      massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
      fringilla, orci sit amet posuere auctor, orci eros pellentesque odio, nec
      pellentesque erat ligula nec massa. Aenean consequat lorem ut felis
      ullamcorper posuere gravida tellus faucibus. Maecenas dolor elit, pulvinar
      eu vehicula eu, consequat et lacus. Duis et purus ipsum. In auctor mattis
      ipsum id molestie. Donec risus nulla, fringilla a rhoncus vitae, semper a
      massa. Vivamus ullamcorper, enim sit amet consequat laoreet, tortor tortor
      dictum urna, ut egestas urna ipsum nec libero. Nulla justo leo, molestie
      vel tempor nec, egestas at massa. Aenean pulvinar, felis porttitor iaculis
      pulvinar, odio orci sodales odio, ac pulvinar felis quam sit.
    </p>
  );
  const toggleData = [
    { label: "Symptoms", content: symptomsContent },
    { label: "Diagnosis", content: diagnosisContent },
    // Add more sections as needed
  ];
  return (
    <>
      <div className="page-content pe-z5 fto">
        <div
          data-vc-full-width="true"
          data-vc-full-width-init="true"
          data-vc-stretch-content="true"
          className="vc_row wpb_row row vc_column-gap-30 vc_row-o-content-middle vc_row-flex"
        >
          <div className="vc_column_container col-md-8 text-left">
            <div className="wpb_wrapper vc_column-inner">
              <div className="porto-feature-box wpb_content_element ">
                <div className="feature-box feature-box-style-2">
                  <div className="feature-box-icon">
                    <i className="icon-image" style={{ fontSize: "14px" }}>
                      <img
                        decoding="async"
                        alt=""
                        src="//fhirgo.com/wp-content/uploads/2016/09/department-icon-pulmonology.png"
                      />
                    </i>
                  </div>
                  <div className="feature-box-info">
                    <h2 className="vc_custom_heading m-b-md align-left">
                      Practice Management
                    </h2>
                    <div className="wpb_text_column wpb_content_element  m-b-sm">
                      <div className="wpb_wrapper">
                        <p>
                          <span>
                            Practice management essentially means managing all
                            the business aspects of your medical practice
                          </span>
                        </p>
                        <p>
                          <span>
                            practice management can significantly boost your
                            clinic’s revenue, it’s important to understand how
                            each specific function can help your clinic become
                            more efficient and profitable, as well as enhance
                            patient care. Practice management will be able to
                            speed the process up and eliminate inefficiencies,
                            saving time and money in the long run.
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="porto-toggles wpb_content_element m-t-xxl toggle-simple toggle-primary">
                      {toggleData.map((item, index) => (
                        <section
                          key={index}
                          className={`toggle ${
                            activeIndex === index ? "active" : ""
                          }`}
                        >
                          <label onClick={() => handleToggle(index)}>
                            {item.label}
                          </label>
                          <div
                            className="toggle-content"
                            style={{
                              maxHeight: activeIndex === index ? "1000px" : "0",
                              opacity: activeIndex === index ? 1 : 0,
                              overflow: "hidden",
                              transition:
                                "max-height 0.3s ease-in-out, opacity 0.3s ease-in-out",
                              display: activeIndex === index ? "block" : "none",
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
              <div className="wpb_single_image wpb_content_element vc_align_left wpb_animate_when_almost_visible wpb_bounceInRight bounceInRight wpb_start_animation animated">
                <div className="wpb_wrapper">
                  <div className="vc_single_image-wrapper   vc_box_border_grey">
                    <img
                      fetchpriority="high"
                      decoding="async"
                      width={675}
                      height={379}
                      src="https://fhirgo.com/wp-content/uploads/2022/05/Cloud_Subscription_Recurring_Billing.jpg"
                      className="vc_single_image-img attachment-full"
                      alt=""
                      srcSet="https://fhirgo.com/wp-content/uploads/2022/05/Cloud_Subscription_Recurring_Billing.jpg 675w, https://fhirgo.com/wp-content/uploads/2022/05/Cloud_Subscription_Recurring_Billing-300x168.jpg 300w, https://fhirgo.com/wp-content/uploads/2022/05/Cloud_Subscription_Recurring_Billing-250x140.jpg 250w, https://fhirgo.com/wp-content/uploads/2022/05/Cloud_Subscription_Recurring_Billing-550x309.jpg 550w, https://fhirgo.com/wp-content/uploads/2022/05/Cloud_Subscription_Recurring_Billing-321x180.jpg 321w, https://fhirgo.com/wp-content/uploads/2022/05/Cloud_Subscription_Recurring_Billing-534x300.jpg 534w"
                      sizes="(max-width: 675px) 100vw, 675px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="vc_row-full-width vc_clearfix" />
        <div className="vc_row wpb_row row">
          <div className="vc_column_container col-md-12">
            <div className="wpb_wrapper vc_column-inner">
              <div className="wpb_text_column wpb_content_element ">
                <div className="wpb_wrapper">
                  <div className="vc_row wpb_row row" />
                  <div className="vc_column_container col-md-12">
                    <div className="wpb_wrapper vc_column-inner" />
                  </div>
                  <div className="wpb_text_column wpb_content_element ">
                    <div className="wpb_wrapper"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="vc_row wpb_row row">
          <div className="vc_column_container col-md-12">
            <div className="wpb_wrapper vc_column-inner">
              <div className="wpb_text_column wpb_content_element ">
                <div className="wpb_wrapper"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="vc_row wpb_row row">
          <div className="vc_column_container col-md-12">
            <div className="wpb_wrapper vc_column-inner">
              <div className="wpb_text_column wpb_content_element ">
                <div className="wpb_wrapper"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PracticeManagementDetails;
