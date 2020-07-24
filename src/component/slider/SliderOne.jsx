import React, { Component } from "react";
import ServiceOne from "../../elements/service/ServiceOne";

// const logoUrl = <img src="/assets/images/logo/goodup-light.png" alt="Purpose Roundtable Series" style={{width: "140px"}}  />;


class SliderOne extends Component {
  render() {
    return (
      <div className="slider-activation">
        {/* Start Single Slide */}
        <div
          className="slide slide-style-1 slider-fixed--height d-flex align-items-center bg_image bg_image--15"
          data-black-overlay="5"
        >
          <div className="container position-relative">
            <div className="row">
              <div className="col-lg-12">
                <div className="inner">
                  {/* <div className="logo pb--20">
                    <a href="/">{logoUrl}</a>
                  </div> */}
                  <h1 className="title ">
                    Purpose <br /> Roundtable <br /> Series{" "}
                  </h1>
                </div>
              </div>
            </div>
            {/* Start Service Area */}
            <div className="service-wrapper service-white">
              <ServiceOne />
            </div>
            {/* End Service Area */}
          </div>
        </div>
        {/* End Single Slide */}
      </div>
    );
  }
}
export default SliderOne;
