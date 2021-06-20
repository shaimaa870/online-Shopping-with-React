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
    UserName: Joi.string().min(5).max(255).required(),
    Password: Joi.string().min(6).max(255).required(),
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
                <div className="col-md-7">
                  <div className="card-body">
                    <div className="brand-wrapper">
                      <h1 className="text-warning">
                        {" "}
                        <b>JUMIA</b>
                      </h1>
                    </div>
                    <p className="login-card-description   text-primary">
                      Sign into your account
                    </p>
                    <form>
                      {/* <form onSubmit={this.handleSubmit}> */}

                      <div className="form-group">
                        <label htmlFor="UserName" className="sr-only">
                          UserName
                        </label>
                        {/* <input type="UserName" name="UserName" id="UserName" className="form-control" placeholder="UserName address"    value={this.state.UserName}  onChange={(e)=>this.setState({UserName:e.target.value})}/> */}
                        <input
                          name="UserName"
                          type="UserName"
                          value={this.state.UserName}
                          onChange={this.handleChange}
                          placeholder="UserName address"
                          autoFocus
                          id="UserName"
                          type="text"
                          className="form-control"
                        />
                        {this.state.errors.UserName && (
                          <div className="alert alert-danger">
                            {this.state.errors.UserName}
                          </div>
                        )}
                      </div>
                      <div className="form-group mb-4">
                        <label htmlFor="password" className="sr-only">
                          Password
                        </label>
                        <input
                          name="Password"
                          value={this.state.Password}
                          onChange={this.handleChange}
                          id="Password"
                          type="password"
                          placeholder="**********"
                          className="form-control"
                        />
                        {this.state.errors.Password && (
                          <div className="alert alert-danger">
                            {this.state.errors.Password}
                          </div>
                        )}
                      </div>
                      {/* <input name="login" id="login" className="btn btn-block  login-mb-5 bg-warning d-inline-block " type="button" defaultValue="Login" /> */}
                      <button
                        type="submit"
                        onClick={this.handleSubmit}
                        className="btn btn-block  login-mb-5 bg-warning d-inline-block "
                      >
                        login
                      </button>
                    </form>
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck1"
                      />
                      <label
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
                      </a>
                    </div>
                    <p className="login-card-footer-text">
                      Don't have an account?{" "}
                      <Link to="/Register" className="text-reset">
                        Register here
                      </Link>
                    </p>
                    <div className="form-group">
                      <a
                        href="#"
                        className="btn btn-primary  btn-social btn-facebook mb-4  "
                      >
                        <i className="fa fa-facebook-f mr-2" />
                        <span className="font-weight-bold">
                          {" "}
                          login with Facebook
                        </span>
                      </a>
                    </div>
                    <nav className="login-card-footer-nav">
                      <a href="#!">Terms of use.</a>
                      <a href="#!">Privacy policy</a>
                    </nav>
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
