import React from "react";
import Cards from "./Cards";
import web from "../src/images/ReactJS.png";
import web1 from "../src/images/mern.png";
import web2 from "../src/images/native.png";

const Service = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Services that i provide </h1>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              <Cards
                name="React Website"
                image={web}
                para="I will create a custom react website for you using reactjs and modern ui."
              />
              <Cards
                name="Full-stack Website"
                image={web1}
                para="I will create a custom Full-stack website for you using MERN-stack."
              />
              <Cards
                name="Ios/Android App"
                image={web2}
                para="I will create a custom Full-stack Ios/Android Application for you using React-native"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
