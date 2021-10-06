import React, { useState } from 'react';
import ServicesData from '../Services/ServicesData'
import ServiceCards from './ServiceCards';

const Services = () => {
    const [serviceData, setServiceData] = useState(ServicesData);
    
    return (
        <div className="Services pb-4">
            <div className="container">
                <div className="services_title text-center"
                  data-aos="fade-down"
                  data-aos-offset="200"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                >
                    <h3 style={{color: "#092772", fontWeight:"bold"}}>Lorem Ipsum is simply dummy text</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                </div>
                <div className="row">
                   {
                     serviceData.map(service => (
                         <ServiceCards 
                           key={service.id}
                           service={service}
                         />
                     ))  
                   }
                </div>
                <hr style={{color: "yellow", height: "2px"}}/>
            </div>
        </div>
    );
};

export default Services;