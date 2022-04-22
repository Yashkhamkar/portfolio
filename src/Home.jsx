import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/vtr.png";

const Home = () => {
  return (
    <section id="header" className="d-flex align-items-center">
      <div className="container-fluid ">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              <div className="col-md-6 pt-100 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <h1>Hi I Am</h1>
                <h1 className="brand-name">
                  <strong>Yash Khamkar</strong>
                </h1>
                <h2 className="my-3">
                  Mern-stack Developer with intermediate level of experience and
                  also a competitive-programmer with good level of
                  problem-solving skills
                </h2>
                <div className="mt-3">
                  <NavLink exact to="/about" className="btn-get-started ">
                    Know more
                  </NavLink>
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 header-img">
                <img src={web} className="img-fluid animated" alt="home" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
