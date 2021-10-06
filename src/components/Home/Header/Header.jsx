import React from "react";
import HeaderImage from "../../../images/header-image.png";
const Header = () => {
  return (
    <div className="header_section py-5">
      <div className="header_container container py-3">
        <div className="row custom_header_row" style={{overflow:"hidden"}}>
          <div className="col-md-6 mb-md-0 mb-4">
            <div className="header_text"
                 data-aos="fade-right"
                 data-aos-offset="200"
                 data-aos-delay="50"
                 data-aos-duration="1000"
                 data-aos-easing="ease-in-out"
            >
              <span style={{color: "#008CEC"}}>What is Lorem Ipsum?</span>
              <h1 style={{color: "#092772", fontWeight:"bold"}}>Lorem Ipsum is simply dummy text of the printing and</h1>
              <button 
                 className="custom_btn_1"
                 data-aos="fade-down"
                 data-aos-offset="200"
                 data-aos-delay="60"
                 data-aos-duration="1500"
                 data-aos-easing="ease-in-out"
              >Learn About</button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="header_image"
               data-aos="fade-left"
               data-aos-offset="200"
               data-aos-delay="50"
               data-aos-duration="1000"
               data-aos-easing="ease-in-out"
            >
              <img src={HeaderImage} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
