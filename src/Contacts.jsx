import React, { useState } from "react";
import "./Conatcts.css";

const Contacts = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    msg: "",
  });
  const formSubmit = () => {};
  return (
    <div className="cont">
      <div className="my-5">
        <h1 className="text-center">Contact Me</h1>
      </div>
      <div className="container contact_div">
        <div className="col-md-6 col-10 mx-auto">
          <form onSubmit={formSubmit}>
            <div className="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="name"
                value={data.name}
                onChange={InputEvent}
                placeholder="Enter Your name"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputPassword1"
                name="email"
                value={data.email}
                onChange={InputEvent}
                placeholder="Enter your email"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="exampleInputPassword1"
                name="msg"
                value={data.msg}
                onChange={InputEvent}
                placeholder="Enter your message"
              />
            </div>
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
