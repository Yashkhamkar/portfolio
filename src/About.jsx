import React from "react";
import web from "../src/images/vctr2.jpg";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-100 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>Welcome to</h1>
                  <h1 className="brand-name">
                    <strong>About Page</strong>
                  </h1>
                  <h2 className="my-3">
                    I am an undergraduate student in my second year pursuing
                    Bachelors of Engineering in Information Technology from pune
                    university.
                  </h2>
                  <div className="mt-3">
                    <NavLink to="/contact" className="btn-get-started ">
                      Hire me
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img src={web} className="img-fluid" alt="home" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
