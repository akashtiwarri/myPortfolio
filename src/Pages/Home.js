import React from "react";
import "./Home.css";
import profileimg from "../assets/img/profileimg3.jpg";
import Pdf from "../assets/pdf/Resume.pdf";
import { Link } from "react-router-dom";
import Linkedinicon from "../assets/img/socialicons/linkedin.png";
import Instagramicon from "../assets/img/socialicons/instagram.png";
import Githubicon from "../assets/img/socialicons/github.png";
import MailIcon from "../assets/img/socialicons/email.png";

const Home = () => {
  return (
    <div id="home">
      <div className="container">
        <div className="row">
          <div className="col-sm-5">
            <div className="imgsec">
              <img
                src={profileimg}
                data-aos="flip-right"
                alt="Akash Tiwari"
                className="img-fluid"
              />
              <div className="socialmedia">
                <a
                  href="https://www.linkedin.com/in/akash-tiwari-3686b7215"
                  target="_blank"
                  rel="noreferrer"
                  title = "LinkedIn"
                >
                  <img
                    src={Linkedinicon}
                    alt="linkedin"
                    data-aos="fade-right"
                    data-aos-delay="1000"
                  />
                </a>
                <a
                  href="https://github.com/whoaakash"
                  target="_blank"
                  rel="noreferrer"
                  title = "Github"
                >
                  <img
                    src={Githubicon}
                    alt="github"
                    data-aos="fade-right"
                    data-aos-delay="1000"
                  />
                </a>
                <a
                  href="https://www.instagram.com/__imakash._/"
                  target="_blank"
                  rel="noreferrer"
                  title = "insta"
                >
                  <img
                    src={Instagramicon}
                    alt="github"
                    data-aos="fade-right"
                    data-aos-delay="1000"
                  />
                </a>
                <a
                  href="mailto:akast2041@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  title = "mail"
                >
                  <img
                    src={MailIcon}
                    alt="email"
                    data-aos="fade-right"
                    data-aos-delay="1000"
                  />
                </a>
              </div>
              <div className="bgblack" data-aos="fade-right"></div>
            </div>
          </div>
          <div className="col-sm-5 offset-sm-2">
            <div className="rightcontent" data-aos="fade-right">
              <h1>Akash Tiwari</h1>
              <h2>Front End Developer</h2>
              <br />
              <div className="row">
                <div className="col-sm-4 col-6">
                  <a href={Pdf} target="_blank" rel="noreferrer">
                    <button type="button" className="btn btn-primary">
                      Resume
                    </button>
                  </a>
                </div>
                <div className="col-sm-5 col-6">
                  <Link to="/contact">
                    <button type="button" className="btn btn-primary">
                      Hire Me
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
