import React from "react";
import HeroImage from "../../../images/book-1.png";

const HeroSection = () => {
  return (
    <div className="hero_section pb-5">
      <div
        className="container py-4 px-5"
        style={{ backgroundColor: "#f8f9fa" }}
      >
        <div className="row">
          <div className="col-md-6 align-self-center">
            <div className="hero_text">
              <h3 style={{ color: "#092772", fontWeight: "bold" }}>
                Lorem Ipsum is simply dummy text
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, diam
                nonumy eirmod tempor invidunt ut labore et dolore.
              </p>
              <p>
                Sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="hero_image d-flex justify-content-evenly align-items-center">
              <img src={HeroImage} className="img-fluid" alt="" />
              <img src={HeroImage} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
