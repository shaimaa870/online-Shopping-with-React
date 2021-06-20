import React, { Component } from "react";
import { Link } from "react-router-dom";
class Footer extends Component {
  state = {};
  render() {
    return (
      // <!-- Footer -->
      <footer className="bg-dark text-center text-white">
        {/* <!-- Grid container --> */}
        <div className="container p-2">
          <Link className="navbar-brand" style={{ color: "white" }} to="/">
            <h1>
              {" "}
              <b>J6E-Commerce </b> <i className="fa fa-shopping-cart"></i>
            </h1>
          </Link>
          {/* <!-- Section: Social media --> */}
          <section className="mb-4">
            {/* <!-- Facebook --> */}
            <Link
              className="btn btn-outline-light btn-info m-1"
              to={{
                pathname: "https://www.facebook.com/JumiaEgypt/",
              }}
              target="_blank"
              role="button"
            >
              <i className="fab fa-facebook-f"></i>
            </Link>
            {/* <!-- Google --> */}
            {/* <Link className="btn btn-outline-light btn-light m-1" to="" role="button"
                        ><i className="fab fa-google"></i></Link> */}
            {/* <!-- Twitter --> */}
            <Link
              className="btn btn-outline-light btn-primary m-1"
              to={{
                pathname: "https://twitter.com/JUMIAEgypt/",
              }}
              target="_blank"
              role="button"
            >
              <i className="fab fa-twitter"></i>
            </Link>
            {/* <!-- Instagram --> */}
            <Link
              className="btn btn-outline-light btn-light m-1"
              to={{
                pathname: "https://www.instagram.com/jumiaegypt/",
              }}
              target="_blank"
              role="button"
            >
              <i className="fab fa-instagram"></i>
            </Link>
            {/* <!-- Linkedin --> */}
            <Link
              className="btn btn-outline-light btn-danger m-1"
              to={{
                pathname: "https://www.youtube.com/user/JumiaEgypt",
              }}
              target="_blank"
              role="button"
            >
              <i className="fab fa-youtube"></i>
            </Link>
          </section>
          <div className="col-auto text-center">
            <p className="pt-2">
              <strong>New to Jumia?</strong>
              <br />
              <label>Subscribe to get updates on our latest offers!</label>
            </p>
          </div>
          {/* <!-- Section: Social media --> */}
          {/* <!-- Section: Form --> */}
          <section className="m-2 ml-5">
            <form action="">
              {/* <!--Grid row--> */}
              <div className="row d-flex justify-content-center">
                {/* <!--Grid column--> */}

                {/* <!--Grid column--> */}

                {/* <!--Grid column--> */}
                <div className="col-md-5 col-12">
                  {/* <!-- Email input --> */}
                  <div className="form-outline form-white mb-4">
                    <input
                      type="email"
                      id="form5Example2"
                      className="form-control "
                      placeholder="Enter E-mail address"
                    />
                    {/* <!-- <label className="form-label" for="form5Example2">Email address</label> --> */}
                  </div>
                </div>

                {/* <!--Grid column--> */}

                {/* <!--Grid column--> */}
                <div className="col-auto">
                  {/* <!-- Submit button --> */}
                  <button
                    type="submit"
                    className="btn btn-outline-warning mb-4 mr-1"
                    style={{ height: "45px" }}
                  >
                    female
                  </button>
                  <button
                    type="submit"
                    className="btn btn-outline-warning mb-4"
                    style={{ height: "45px" }}
                  >
                    male
                  </button>
                </div>

                {/* <!--Grid column--> */}
              </div>
              {/* <!--Grid row--> */}
            </form>
          </section>

          {/* <!-- Section: Form --> */}
          {/* <!-- Section: Text --> */}
          {/* <!-- Section: Links --> */}
          <section className="">
            {/* <!--Grid row--> */}
            <div className="row">
              {/* <!--Grid column--> */}
              <div className="col-lg-6 col-md-6 mb-4 mb-md-0  text-left ">
                <h6 className="text-uppercase">let us help you</h6>
                <ul className="list-unstyled mb-0 ">
                  <li>
                    <Link to="/HelpCenter" className="text-white">
                      Help center
                    </Link>
                  </li>
                  <li>
                    <Link to="/ContactUs" className="text-white">
                      Contact us
                    </Link>
                  </li>
                </ul>
              </div>
              {/* <!--Grid column--> */}
              {/* <!--Grid column--> */}
              <div className="col-lg-6 col-md-6 mb-4 mb-md-0 text-left ">
                <h6 className="text-uppercase">About J6E-Commerce Egypt</h6>
                <ul className="list-unstyled mb-0">
                  <li>
                    <Link to="/AboutUS" className="text-white">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/Knowledge/Guide" className="text-white">
                      Sell On Jumia
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          <span className="mr-2">©️ 2020 Copyright:</span>
          <a className="text-white" href="https://www.jumia.com.eg/">
            JUMIA.com
          </a>
        </div>
        {/* <!-- Copyright --> */}
      </footer>
    );
  }
}

export default Footer;
