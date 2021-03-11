import React from "react";
import "./form.style.css";

const Form = props => {
  return (
    <div className="container">
      <div>{props.error ? error() : ""}</div>
      <form onSubmit={props.loadweather}>
        <div className="row">
          <div className="col-md-3 offset-md-3">
            <input
              type="text"
              className="form-control"
              name="city"
              autoComplete="off"
              placeholder="City"
            />
          </div>
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              name="country"
              autoComplete="off"
              placeholder="Country"
            />
          </div>
          <div className="col-md-3 mt-md-0 text-md-left">
            <button className="btn">Get Weather</button>
          </div>
        </div>
      </form>
    </div>
  );
};

function error() {
  return (
    <div className="alert alert-danger mx-5" role="alert">
      Please Enter City and Country
    </div>
  );
}

export default Form;