import React from "react";
import ConversationImage from "../../../images/conversation.png";

const Conversation = () => {
  return (
    <div className="">
    <div className="container conversation_sec" style={{overflow:"hidden"}}>
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-md-8 d-flex justify-content-center align-items-center flex-column text-center"
            data-aos="fade-down"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1300"
            data-aos-easing="ease-in-out"
        >
          <h2 style={{color: "#092772", fontWeight:"bold"}}>Let’s Have a Conversation.</h2>
          <img src={ConversationImage} className="img-fluid" alt="" />
          <p>
            We are currently taking new individual and small business clients.
            If you’re interested in chatting with one of your partners, we would
            love to start a conversation.
          </p>
          <button
            className="custom_btn_1"
            data-aos="fade-down"
            data-aos-offset="200"
            data-aos-delay="60"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Conversation;
