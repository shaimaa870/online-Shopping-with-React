import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavSeller extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <nav
          className="navbar navbar-expand-md fixed-top "
          style={{
            backgroundColor: "lightgray",
            position: "sticky",
            display: "flex",
            width: "100%",
          }}
        >
          <div className="row p-2">
            <NavLink className="navbar-brand pt-0" to="/VendorHub">
              <img
                className=""
                src="https://3cv9ak2ajf5r17hu9d2d3jsa-wpengine.netdna-ssl.com/wp-content/uploads/2017/02/Jumia-Vendor-Hub-Logo_ws.png"
                alt="Jumia Hub"
                width="200"
              />
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarScroll"
              aria-controls="navbarScroll"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse pt-2 " id="navbarScroll">
              <ul className="navbar-nav my-lg-0 navbar-nav-scroll" style={{"fontSize":"13px"}}>
                {/* Knowledge/Training */}
                <li className="nav-item mr-3 dropdown">
                  <NavLink
                    className="nav-NavLink dropdown-toggle text-white font-weight-bolder"
                    to="/Knowledge/Guide"
                    id="navbarScrollingDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Knowledge/Training
                  </NavLink>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarScrollingDropdown"
                  >
                    <li>
                      <NavLink
                        className="dropdown-item bg-light text-dark"
                        to="/Knowledge/Guide"
                      >
                        Guide to start selling
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="dropdown-item bg-light text-dark"
                        to="/Knowledge/Tricks"
                      >
                        9 Tricks to grow your sales on Jumia!
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="dropdown-item bg-light text-dark"
                        to={{
                          pathname:
                            "https://www.youtube.com/channel/UCnq3m5VktVwmEFtBhwc3vkA",
                        }}
                        target="_blank"
                      >
                        Youtube Channal
                      </NavLink>
                    </li>
                  </ul>
                </li>
                {/* Our Services */}
                {/* <li className="nav-item mr-3 dropdown">
                  <NavLink
                    className="nav-NavLink dropdown-toggle text-white font-weight-bolder"
                    to="/OurServices/Services"
                    id="navbarScrollingDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Our Services
                  </NavLink>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarScrollingDropdown"
                  >
                    <li>
                      <NavLink
                        className="dropdown-item bg-light text-dark"
                        to="/OurServices/NewVendor"
                      >
                        New Vender Referral Program
                      </NavLink>
                    </li>
                  </ul>
                </li> */}
               {/* Vendor Community */}
               <li className="nav-item mr-3 dropdown">
                  <NavLink
                    className="nav-NavLink dropdown-toggle text-white font-weight-bolder"
                    to="/Vendor/Stories"
                    id="navbarScrollingDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Vendor Community
                  </NavLink>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarScrollingDropdown"
                  >
                    <li>
                      <NavLink
                        className="dropdown-item bg-light text-dark"
                        to="/Vendor/Stories"
                      >
                        Vendor Success Stories
                      </NavLink>
                    </li>
                    {/* <li>
                      <NavLink
                        className="dropdown-item bg-light text-dark"
                        to="/Vendor/Events"
                      >
                        Events & Gallery
                      </NavLink>
                    </li> */}
                    <li>
                      <NavLink
                        className="dropdown-item bg-light text-dark"
                        to={{
                          pathname:
                            "https://t.me/Jvendors",
                        }}
                        target="_blank"
                      >
                        Telegram
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="dropdown-item bg-light text-dark"
                        to={{
                          pathname:
                            "https://www.facebook.com/groups/451027205693527/",
                        }}
                        target="_blank"
                      >
                        Facebook
                      </NavLink>
                    </li>
                  </ul>
                </li>
               {/* Dropoff Stations */}
               <li className="nav-item mr-3">
                  <NavLink
                    className="nav-NavLink text-white font-weight-bolder"
                    to="/Stations"
                    role="button"
                  >
                    Drop off Stations
                  </NavLink>
                </li>
                {/*  BookTraining */}
                <li className="nav-item mr-3 ">
                  <NavLink
                    className="nav-NavLink text-white font-weight-bolder"
                    to="/BookTraining"
                    role="button"
                  >
                    Book Your Training Now !
                  </NavLink>
                </li>
                {/*  Help Center */}
                <li className="nav-item mr-3">
                  <NavLink
                    className="nav-NavLink text-white font-weight-bolder"
                    to="/VendorHelp"
                    role="button"
                  >
                    Help Center
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavSeller;
