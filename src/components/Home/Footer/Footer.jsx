import React from 'react';
import FooterImage from '../../../images/logo.png';
import navPhone from "../../../icons/phone.png"
import navEnvelope from '../../../icons/envelope.png'

const Footer = () => {
    return (
        <div className="py-5" style={{ background: "#092772" }}>
            <div className="container">
            <div className="row d-flex justify-content-center align-items-center footer_row">
                <div className="col-md-8 d-flex justify-content-center align-items-center flex-column text-center">
                <img src={FooterImage} className="img-fluid" alt="" />
              <div className="my-5">
                <div className="d-flex align-items-center justify-content-around footer_contact">
                    <div className="footer_phone">
                        <img src={navPhone} className="img-fluid me-3" alt="" />
                        <a href="tel:+(123) 456-7890" className="text-decoration-none text-white">Call: <span>(123) 456-7890</span></a>
                    </div>
                    <div className="footer_env">
                        <img src={navEnvelope} className="img-fluid me-3" alt="" />
                        <a href="mailto:info@wppool.com" className="text-decoration-none text-white">Email: <span>info@wppool.com</span></a>
                    </div>
                </div>
                <div className="nav_bar my-2">
                    <nav className="">
                        <div className="container">
                            <div>
                            <ul className="navbar-nav d-flex footer_navbar">
                                <li className="nav-item me-5">
                                  <a className="nav-link custom-nav-link text-white" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item me-5">
                                  <a className="nav-link custom-nav-link text-white" href="#">AboutUs</a>
                                </li>
                                <li className="nav-item me-5">
                                  <a className="nav-link custom-nav-link text-white" href="#">MeetTheTeam</a>
                                </li> 
                                <li className="nav-item me-5">
                                  <a className="nav-link custom-nav-link text-white" href="#">Blog</a>
                                </li> 
                                <li className="nav-item me-5">
                                  <a className="nav-link custom-nav-link text-white" href="#">Contact</a>
                                </li> 
                            </ul>
                            </div>
                        </div>
                    </nav>
                  </div>
                  </div>
                <div className="">
                    <p style={{color: "#818181"}}>© Copyright 2020. WPPOOL, LLC. All rights reserved.</p>
                </div>
                </div>
            </div>
            </div>
       </div>
    );
};

export default Footer;