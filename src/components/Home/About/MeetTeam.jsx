import React from "react";
import MeetImage from "../../../images/meet-image.png";

const MeetTeam = () => {
  return (
    <div className="container py-3 px-5" style={{ backgroundColor: "#2B8FE5" }}>
      <div className="row">
        <div className="col-md-4 mb-md-0 mb-5">
          <div className="meet_image">
            <img src={MeetImage} className="img-fluid" alt="" />
          </div>
        </div>
        <div className="col-md-8 align-self-center meet_content">
          <div className="d-flex flex-column">
            <h4 style={{ color: "#fff", fontWeight: "bold" }}>Meet the Team</h4>
            <span style={{ color: "#fff" }}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy lorem dolor.
            </span>
            <div>
            <button
              className="custom_btn_1 text-white"
              style={{ border: "2px solid #092772" }}
            >
              Meet the Team
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetTeam;
