import React, { Component } from "react";
import Joi from "joi-browser";
import { toast } from "react-toastify";
import AuthService from "../Services/auth.service";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
class Login extends Component {
  state = {
    UserName: "",
    Password: "",
    errors: {},
  };

  schema = {
    UserName: Joi.string().max(255).required(),
    Password: Joi.string().max(255).required(),
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
      //console.log(error )
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
      //  let _userN=this.state.UserName;
      //  let _pass=this.state.Password;
      //   axios.post("http://localhost:21231/api/Account/Login",{_userN,_pass}).then(res=>console.log(res.data)

      //   ).catch(err=>console.log(err))
      AuthService.login(this.state.UserName, this.state.Password).then(
        () => {
          this.props.history.push("/Home");
          toast.success(this.state.UserName+" Is Login Successfully");
          window.location.reload();
        },
        (error) => {
          // const resMessage =
          //   (error.response &&
          //     error.response.data &&
          //     error.response.data.message) ||
          //   error.message ||
          //   error.toString();

          //  console.log(error.response)
          //  alert(error.response)
          toast.success("Enter Valid UserName , Password");
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
  // CustomLoginHAndler = () => {
  //     let newobj = {
  //       UserName: this.state.UserName,
  //       password:this.state.password

  //     }
  //     console.log(newobj);
  //     this.props.SendLoginRef(newobj);
  // }
  render() {
    return (
      <>
        {/* Toast just for notification  */}
        <ToastContainer />
        <main className="d-flex align-items-center min-vh-100 py-3 py-md-0">
          <div className="container">
            <div className="card login-card">
              <div className="row no-gutters">
                <div className="col-md-5">
                  <img
                    src="./img/login.jpg"
                    height="600px"
                    alt="login"
                    className="login-card-img w-100"
                  />
                </div>
                <div className="col-md-7 ">
                  <div className="card-body" >
                    <div className="brand-wrapper">
                      <h1 className="text-warning">
                        {" "}
                        <b>J6</b>
                      </h1>
                    </div>
                    <p className="login-card-description   text-primary">
                      Sign into your account
                    </p>
                    <form>
                      {/* <form onSubmit={this.handleSubmit}> */}

                      <div class="wrap-input100  m-b-10">
                        <input
                          name="UserName"
                          type="UserName"
                          value={this.state.UserName}
                          onChange={this.handleChange}
                          placeholder="UserName"
                          autoFocus
                          id="UserName"
                          type="text"
                          className="input100"
                        />
                        <span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-user"></i>
						</span>
                        {this.state.errors.UserName && (
                          <div className="alert alert-danger">
                            {this.state.errors.UserName}
                          </div>
                        )}
                      </div>
                      
                      <div class="wrap-input100  m-b-10">
                        <label htmlFor="password" className="sr-only">
                          Password
                        </label>
                        <input
                          name="Password"
                          value={this.state.Password}
                          onChange={this.handleChange}
                          id="Password"
                          type="password"
                          placeholder="**"
                          className="input100 mt-3"
                        />
                        <span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-lock"></i>
						</span>
                        {this.state.errors.Password && (
                          <div className="alert alert-danger">
                            {this.state.errors.Password}
                          </div>
                        )}
                      </div>
                  <div  className="container-login100-form-btn p-t-10">
                      <button
                        type="submit"
                        onClick={this.handleSubmit}
                        className="login100-form-btn mt-5"
                      >
                        login
                      </button>
                      </div>
                    </form>
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck1"
                      />
                      {/* <label
                        className="custom-control-label m-3 d-inline-block"
                        htmlFor="customCheck1"
                      >
                        Rember me
                      </label>
                      <a
                        href="#!"
                        className="forgot-password-link m-3 d-inline-block font-weight-bold text-warning"
                      >
                        Forgot your password?
                      </a> */}
                    </div>
                    <p className="login-card-footer-text">
                      Don't have an account?{" "}
                      <Link to="/Register" className="text-warning" >
                        Register here
                      </Link>
                    </p>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }
}

export default Login;