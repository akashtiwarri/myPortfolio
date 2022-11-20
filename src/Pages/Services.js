import React from 'react';
import './Services.css';
import services from '../Data/Services.json';
import I1 from '../assets/img/web-design.png'
import I2 from '../assets/img/web-development.png'

const Services = () => {
  return (
    <div id="services" data-aos="fade-in">
      <div className="container">
        <div className="row">
          <div className="col-sm-11 offset-sm-1">
            <h2 className="text-center">What I do</h2>
            <br />
          </div>
          <div className="col-sm-11 offset-sm-1">
            <div className="row">
              <div className="col-sm-6">
                <div className="servicebox" data-aos="fade-zoom-in">
                  <img src={I1} alt="serviceimg" className="img-fluid" />
                  <h4>Interface / Web Design</h4>
                </div>
               
              </div>
              <div className="col-sm-6">
                <div className="servicebox" data-aos="fade-zoom-in">
                  <img src={I2} alt="serviceimg" className="img-fluid" />
                  <h4>Web Development</h4>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
