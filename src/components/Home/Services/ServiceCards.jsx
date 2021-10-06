import React from "react";

const ServiceCards = (props) => {
  const { icon, serviceText } = props.service;
  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="service_info text-center"
         data-aos="fade-down"
         data-aos-offset="200"
         data-aos-delay="60"
         data-aos-duration="1500"
         data-aos-easing="ease-in-out"
      >
        <img src={icon} alt="" />
        <p style={{color: "#092772"}}>{serviceText}</p>
        <button className="custom_btn_1">Learn More</button>
      </div>
    </div>
  );
};

export default ServiceCards;
