import React from "react";
import "./Services.css";
import services from "../Data/Services.json";
import webdesignpng from "../assets/img/web-design.png"
import webdevelopment from "../assets/img/web-development.png"

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
              <div className="col-sm-6" >
                <div className="servicebox" data-aos="fade-zoom-in">
                  <img src={webdesignpng} alt="serviceimg" className="img-fluid" />
                  <h4>Web Design</h4>
                </div>
              </div>
              <div className="col-sm-6" >
                <div className="servicebox" data-aos="fade-zoom-in">
                  <img src={webdevelopment} alt="serviceimg" className="img-fluid" />
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
