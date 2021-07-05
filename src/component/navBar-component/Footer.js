import React, { Component } from "react";
import { Link } from "react-router-dom";
class Footer extends Component {
  state = {};
  render() {
    return (
      // <!-- Footer -->
      <footer className="col-12  text-center text-white"
      style={{
        backgroundColor: "#00348d"
      }}
      >
        {/* <!-- Grid container --> */}
        <div className="container p-2">
          <Link className="navbar-brand" style={{ color: "white" }} to="/">
            <h1>
              {" "}
              <b>J6 E-Commerce </b> <i className="fa fa-shopping-cart"></i>
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
                      Sell On J6
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
          <span className="mr-2">©️ 2021 Copyright:</span>
          <a className="text-white" href="/">
            J6.com
          </a>
        </div>
        {/* <!-- Copyright --> */}
      </footer>
    );
  }
}

export default Footer;
