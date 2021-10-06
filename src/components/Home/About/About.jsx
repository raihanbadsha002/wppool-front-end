import React from "react";
import AboutImage from "../../../images/about-image.png";
import Honesty from '../../../icons/honesty.png';
import Quality from '../../../icons/quality.png';
import Knowledge from '../../../icons/idea.png';
import Respect from '../../../icons/handshake.png';
import Culture from '../../../icons/teamwork.png';
import Community from '../../../icons/community-network.png';
import Mines from '../../../images/about-mines-bg.png';
import Plus from '../../../images/about-plus-bg.png';
import Close from '../../../images/about-close-bg.png';
import Eco from '../../../images/about-eco-bg.png';

import MeetTeam from "./MeetTeam";

const About = () => {
  return (
   <>
    <div className="about_section" style={{ background: "#092772" }} >
      <div className="container py-md-5 py-0" style={{overflow:"hidden"}}>
        <div className="row">
          <div className="col-md-6 mb-md-0 mb-4">
            <div
              className="about_text"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <h3 style={{ color: "#fff", fontWeight: "bold" }}>
                About Our Firm
              </h3>
              <span style={{ color: "#fff" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </span>
              <button
                className="custom_btn_1 text-white"
                data-aos="fade-down"
                data-aos-offset="200"
                data-aos-delay="60"
                data-aos-duration="1500"
                data-aos-easing="ease-in-out"
              >
                About Us
              </button>
            </div>
          </div>
          <div className="col-md-6 about_image_sec">
            <div
              className="about_image"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <img src={AboutImage} className="img-fluid" alt="" />
            </div>
            {/* About Image Position */}
              <div className="about_mines"><img src={Mines} className="img-fluid" alt="" /></div>
              <div className="about_plus"><img src={Plus} className="img-fluid" alt="" /></div>
              <div className="about_close"><img src={Close} className="img-fluid" alt="" /></div>
              <div className="about_eco"><img src={Eco} className="img-fluid" alt="" /></div>
            {/* About Image Position */}
            
          </div>
        </div>
      </div>
      {/* Our Mission + Values Section */}
      <div className="container position-relative">
       <div className="mission_mines position-absolute"><img src={Mines} className="img-fluid" alt="" /></div>
        <div
          className="text-center text-white py-4 custom_mission_div"
          data-aos="fade-down"
          data-aos-offset="200"
          data-aos-delay="70"
          data-aos-duration="1600"
          data-aos-easing="ease-in-out"
        >
          <h3 style={{ fontWeight: "bold" }}>Our Mission + Values</h3>
          <p className="our_mission_text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="mission_value text-center">
        <div className="row"
           data-aos="fade-down"
           data-aos-offset="200"
           data-aos-delay="60"
           data-aos-duration="1500"
           data-aos-easing="ease-in-out"
        >
            <div className="col-lg-2 col-md-4 col-6 text-center">
                <img src={Honesty} className="img-fluid" alt="" />
                <h6 className="text-white">Honesty</h6>
            </div>
            <div className="col-lg-2 col-md-4 col-6 text-center">
                <img src={Quality} className="img-fluid" alt="" />
                <h6 className="text-white">Quality</h6>
            </div>
            <div className="col-lg-2 col-md-4 col-6 text-center">
                <img src={Knowledge} className="img-fluid" alt="" />
                <h6 className="text-white">Knowledge</h6>
            </div>
            <div className="col-lg-2 col-md-4 col-6 text-center">
                <img src={Respect} className="img-fluid" alt="" />
                <h6 className="text-white">Respect</h6>
            </div>
            <div className="col-lg-2 col-md-4 col-6 text-center">
                <img src={Culture} className="img-fluid" alt="" />
                <h6 className="text-white">Culture</h6>
            </div>
            <div className="col-lg-2 col-md-4 col-6 text-center">
                <img src={Community} className="img-fluid" alt="" />
                <h6 className="text-white">Community</h6>
            </div>
        </div>
        <button
                className="custom_btn_1 text-white text-center mission_btn"
                data-aos="fade-down"
                data-aos-offset="200"
                data-aos-delay="60"
                data-aos-duration="1500"
                data-aos-easing="ease-in-out"
              >
                Mission + value
        </button>
        </div>
      </div>
      <div className="meet_section">
         <MeetTeam/>
      </div>
    </div>
   
    </>
  );
};

export default About;
