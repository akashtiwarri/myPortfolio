import React from "react";
import "./Jsprojects.css";
// import ProjectData from "../Data/Jsprojects.json";
// import githubImg from "../assets/img/github.png";
// import pf1 from "../assets/img/project1.png";
// import pf2 from "../assets/img/project2.png";

const Jsprojects = () => {
  return (
    <div className="jsprojects">
      <div className="container">
        <div className="row">
          <div className="col-sm-10 offset-sm-1">
            <h2>Projects</h2>
            <br />
            <div className="row">
              <h4>I will add my projects soon !</h4>
            </div>
            <br />
            {/* <h2>DOM Manipulation | Javascript </h2> */}
            {/* <p>
              Local Storage / Array methods / Filters / Javascript Events / HTML
              Forms window Object / Browser APIs
            </p>
            <br />
            <div className="js">
              <div className="row">
                <div className="col-sm-6">
                  <a href="https://shoplane-by-pooja.glitch.me" target="_blank">
                    <img src={pf1} alt="Ecommerce Small Project" />
                  </a>
                  <br />
                  <a
                    href="https://github.com/poojagarva28/shoplane"
                    className="btn btn-default d-block github"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github Code <img src={githubImg} />
                  </a>
                </div>
                <div className="col-sm-6">
                  <a
                    href="https://poojagarva28.github.io/project/"
                    target="_blank"
                  >
                    <img src={pf2} alt="Ecommerce Small Project" />
                  </a>
                  <a
                    href="https://github.com/poojagarva28/project"
                    className="btn btn-default d-block github"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github Code <img src={githubImg} />
                  </a>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jsprojects;
