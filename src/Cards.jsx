import React from "react";
import web from "../src/images/ReactJS.png";

const cards = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img src={props.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">{props.para}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default cards;
