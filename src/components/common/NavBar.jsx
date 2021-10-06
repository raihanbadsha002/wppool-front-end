import React from 'react';
import navLogo from '../../images/nav-logo.png'
import navPhone from '../../icons/nav-phone.png'
import navEnvelope from '../../icons/nav-envelope.png'
import facebook from '../../icons/facebook.png'
import linkedin from '../../icons/linkedin.png'

const NavBar = () => {
    return (
       <>
        <div className="top_nav d-flex align-items-center container justify-content-end mt-3">
           <div className="nav_phone d-flex align-items-center">
               <img src={navPhone} className="img-fluid" alt="" />
               <a href="tel:+(123) 456-7890" className="text-decoration-none text-black-50">Call: <span style={{color: "#008CEC"}}>(123) 456-7890</span></a>
           </div> 
           <div className="nav_envelope d-flex align-items-center mx-md-3">
               <img src={navEnvelope} className="img-fluid" alt="" />
               <a href="mailto:info@wppool.com" className="text-decoration-none text-black-50">Email: <span style={{color: "#008CEC"}}>info@wppool.com</span></a>
           </div> 
           <div className="nav_social d-flex align-items-center">
             <a href="http://www.facebook.com" target="_blank" rel="noopener noreferrer"><img src={facebook} className="img-fluid" alt="" /></a>  
             <a href="http://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="linkedin_icon"><img src={linkedin} className="img-fluid" alt="" /></a>  
           </div>
        </div>
        <div className="nav_bar mb-5">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <a className="navbar-brand" href="#"><img src={navLogo} className="img-fluid" alt="" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                 <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                     <a className="nav-link custom-nav-link" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                     <a className="nav-link custom-nav-link" href="#">About us</a>
                    </li>
                    <li className="nav-item">
                     <a className="nav-link custom-nav-link" href="#">Meet the team</a>
                    </li> 
                    <li className="nav-item">
                     <a className="nav-link custom-nav-link" href="#">Blog</a>
                    </li> 
                    <li className="nav-item">
                     <a className="nav-link custom-nav-link" href="#">Contact</a>
                    </li> 
                </ul>
                </div>
            </div>
           </nav>
        </div>
     </>
    );
};

export default NavBar;