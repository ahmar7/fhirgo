import React from "react";

const Detail = () => {
  return (
    <div>
      <div className="row">
        <div className="col-md-12 col-xs-12 col-sm-12 col-lg-12">
          <div className="row bg-editor-hr-wrap">
            <div className="col-md-12 col-xs-12 col-sm-12 col-lg-12">
              <hr />
            </div>
          </div>
        </div>
      </div>
      <h3>FHIR Base</h3>
      <ul className="list-unstyled">
        <li>FHIR Server with different RDBMS</li>
        <li>Supports API mechanism</li>
        <li>Integrate with different API Gateways</li>
        <li>
          {" "}
          Supports integration with different Authentication & Authorization
          mechanisms
        </li>
      </ul>
    </div>
  );
};

export default Detail;
