import React, { Component } from "react";
import Joi from "joi-browser";
import AuthService from "../Services/auth.service";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
class Register extends Component {
  state = {
    UserName: "",
    FirstName: "",
    LastName: "",
    Email: "",
    Password: "",
    PhoneNumber: "",
    //CheckTerms: false,
    errors: {},
  };

  // CustomRegister = () => {
  //   let newobj = {
  //     UserName: this.state.UserName,
  //     FirstName: this.state.FirstName,
  //     LastName: this.state.LastName,
  //     Email: this.state.Email,
  //     Password: this.state.Password,
  //     PhoneNumber: this.state.PhoneNumber,
  //     //CheckTerms: this.state.CheckTerms,
  //   };
  //   if (newobj.checkTerms == true) {
  //     this.props.SendRegisterRef(newobj);
  //   } else {
  //     //console.log(newobj)
  //     alert("you must accept terms");
  //     console.log(this.props.history);
  //   }
  // };
  // handleChangeCheck = (e) => {
  //   this.setState({
  //     checkTerms: e.target.checked,
  //   });
  //   console.log(e.target.checked);
  //};
  schema = {
    UserName: Joi.string().min(5).max(255).required(),
    FirstName: Joi.string().required(),
    LastName: Joi.string().required(),
    Email: Joi.string().email().required(),
    Password: Joi.string().min(6).required(),
    PhoneNumber: Joi.string().min(7).required(),
    //acceptTerms: Joi.boolean().valid(true).required()
  };

  validate = () => {
    const errors = {};
    const state = { ...this.state };
    delete state.errors;
    const res = Joi.validate(state, this.schema, { abortEarly: false });
    if (res.error === null) {
      this.setState({ errors: {} });
      return null;
    }

    for (const error of res.error.details) {
      errors[error.path] = error.message;
    }
    this.setState({ errors });
    return errors;
  };

  //------------------
  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();

    if (errors) return;
    else {
      AuthService.register(
        this.state.UserName,
        this.state.FirstName,
        this.state.LastName,
        this.state.Email,
        this.state.Password,
        this.state.PhoneNumber
      ).then(
        () => {
          this.props.history.push("/Home");
          window.location.reload();
        },
        (error) => {
          // const resMessage =
          //   (error.response &&
          //     error.response.data &&
          //     error.response.data.message) ||
          //   error.message ||
          //   error.toString();

          console.log(error.response.data);
          alert(error.response.data);
        }
      );
    }
  };
  handleChange = (e) => {
    //Clone
    let state = { ...this.state };
    //Edit
    state[e.currentTarget.name] = e.currentTarget.value;
    //Set state
    this.setState(state);
  };

  render() {
    return (
      <>
        {/* Toast just for notification  */}
        <ToastContainer />
        <header className="header">
          <nav className="navbar navbar-expand-lg navbar-light py-3">
            <div className="container">{/* Navbar Brand */}</div>
          </nav>
        </header>
        <div className="container">
          <div className="row  align-items-center">
            {/* For Demo Purpose */}
            <div className="col-md-5 pr-lg-5 mb-5 mb-md-0">
              <img
                src="./img/register3.jpg"
                alt
                className="img-fluid mb-3 d-none d-md-block"
                style={{ height: 300 }}
              />
              {/* <img src="https://res.cloudinary.com/mhmd/image/upload/v1569543678/form_d9sh6m.svg" alt="" class="img-fluid mb-3 d-none d-md-block">   */}
              <h1>Create an Account</h1>
              <p />
            </div>
            {/* Registeration Form */}
            <div className="col-md-7 col-md-6 ml-auto">
              <form>
                <div className="row">
                  {/* First Name */}
                  <div className="input-group col-md-6 mb-4">
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-white px-4 border-md border-right-0">
                        <i className="fa fa-user text-muted" />
                      </span>
                    </div>
                    <input
                      id="FirstName"
                      type="text"
                      name="FirstName"
                      placeholder="First Name"
                      className="form-control bg-white border-left-0 border-md"
                      value={this.state.FirstName}
                      onChange={this.handleChange}
                    />
                    {this.state.errors.FirstName && (
                      <div className="alert alert-danger">
                        {this.state.errors.FirstName}
                      </div>
                    )}
                  </div>
                  {/* Last Name */}
                  <div className="input-group col-md-6 mb-4">
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-white px-4 border-md border-right-0">
                        <i className="fa fa-user text-muted" />
                      </span>
                    </div>
                    <input
                      id="LastName"
                      type="text"
                      name="LastName"
                      placeholder="Last Name"
                      className="form-control bg-white border-left-0 border-md"
                      value={this.state.LastName}
                      onChange={this.handleChange}
                    />
                    {this.state.errors.LastName && (
                      <div className="alert alert-danger">
                        {this.state.errors.LastName}
                      </div>
                    )}
                  </div>
                  {/* Phone Number */}
                  <div className="input-group col-md-12 mb-4">
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-white px-4 border-md border-right-0">
                        <i className="fa fa-phone-square text-muted" />
                      </span>
                    </div>
                    <select
                      id="countryCode"
                      name="countryCode"
                      style={{ maxWidth: 80 }}
                      className="custom-select form-control bg-white border-left-0 border-md h-100 font-weight-bold text-muted"
                    >
                      <option value>+12</option>
                      <option value>+10</option>
                      <option value>+15</option>
                      <option value>+18</option>
                    </select>
                    <input
                      id="PhoneNumber"
                      type="tel"
                      name="PhoneNumber"
                      placeholder="PhoneNumber "
                      className="form-control bg-white border-md border-left-0 mb-0 "
                      value={this.state.PhoneNumber}
                      onChange={this.handleChange}
                    />
                  </div>
                  {this.state.errors.PhoneNumber && (
                    <div
                      className="alert alert-danger"
                      style={{ marginLeft: "15px", marginTop: "0px" }}
                    >
                      {this.state.errors.PhoneNumber}
                    </div>
                  )}
                  {/* Email Address */}
                  <div className="input-group col-md-12 mb-4">
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-white px-4 border-md border-right-0">
                        <i className="fa fa-envelope text-muted" />
                      </span>
                    </div>

                    <input
                      type="text"
                      name="Email"
                      id="Email"
                      className="form-control"
                      placeholder="Email address"
                      value={this.state.Email}
                      onChange={this.handleChange}
                    />
                  </div>
                  {this.state.errors.Email && (
                    <div
                      className="alert alert-danger form-control"
                      style={{ marginLeft: "15px", marginTop: "0px" }}
                    >
                      {this.state.errors.Email}
                    </div>
                  )}
                  {/* UserName */}
                  <div className="input-group col-md-12 mb-4">
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-white px-4 border-md border-right-0">
                        <i className="fa fa-user text-muted" />
                      </span>
                    </div>
                    <input
                      id="UserName"
                      type="text"
                      name="UserName"
                      placeholder="UserName"
                      className="form-control bg-white border-left-0 border-md"
                      value={this.state.UserName}
                      onChange={this.handleChange}
                    />
                  </div>
                    {this.state.errors.UserName && (
                    <div className="alert alert-danger">
                      {this.state.errors.UserName}
                    </div>
                  )}
                  {/* Password */}
                  <div className="input-group col-md-12 mb-4">
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-white px-4 border-md border-right-0">
                        <i className="fa fa-lock text-muted" />
                      </span>
                    </div>
                    <input
                      id="Password"
                      type="Password"
                      name="Password"
                      placeholder="Password"
                      className="form-control bg-white border-left-0 border-md"
                      value={this.state.Password}
                      onChange={this.handleChange}
                    />
                  </div>
                  {this.state.errors.Password && (
                    <span
                      className="alert alert-danger "
                      style={{ marginLeft: "15px", marginBottom: "0px" }}
                    >
                      {this.state.errors.Password}
                    </span>
                  )}
                  {/* checkbox */}
                  {/* <div className="custom-control "> */}
                    {/* <input
                      type="checkbox"
                      id="checkTerms"
                      name="checkTerms"
                      value={this.state.checkTerms}
                      onChange={this.handleChangeCheck}
                    /> */}
                    {/* <label htmlFor="customCheck1"> &nbsp; I accept the</label>
                    <a
                      href="#!"
                      className="forgot-password-link m-3 d-inline-block font-weight-bold text-warning"
                    >
                      Terms &amp; Conditions
                    </a>
                  </div> */}
                  {/* Submit Button */}
                  <div className="form-group col-lg-12 mx-auto mb-0">
                    <button
                      href="#"
                      type="submit"
                      className="btn btn-primary btn-block py-2"
                      onClick={this.handleSubmit}
                    >
                      <span className="font-weight-bold">
                        Create your account
                      </span>
                    </button>
                  </div>
                  {/* Divider Text */}
                  <div className="form-group col-lg-12 mx-auto d-flex align-items-center my-4">
                    <div className="border-bottom w-100 ml-5" />
                    <span className="px-2 small text-muted font-weight-bold text-muted">
                      OR
                    </span>
                    <div className="border-bottom w-100 mr-5" />
                  </div>
                  {/* Social Login */}
                  {/* <div className="form-group col-lg-12 mx-auto">
                    <a
                      href="#"
                      className="btn btn-primary btn-block py-2 btn-facebook"
                    >
                      <i className="fa fa-facebook-f mr-2" />
                      <span className="font-weight-bold">
                        Continue with Facebook
                      </span>
                    </a>
                    <a
                      href="#"
                      className="btn btn-primary btn-block py-2 btn-twitter"
                    >
                      <i className="fa fa-twitter mr-2" />
                      <span className="font-weight-bold">
                        Continue with Twitter
                      </span>
                    </a>
                  </div> */}
                  {/* Already Registered */}
                  <div className="text-center w-100">
                    <p className="text-muted font-weight-bold">
                      Already Registered?{" "}
                      <Link to="/Login" className="text-reset">
                        Login
                      </Link>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Register;
