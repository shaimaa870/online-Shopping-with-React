import React, { Component } from "react";
import { NavLink,Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { ImYoutube2 } from "react-icons/im";
class NavSeller extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <nav
          className="navbar col-12 navbar-expand-md fixed-top"
          style={{
            backgroundColor: "#00348d",position: "sticky",
          display: "flex" }}
        >
          {/* <div className="row p-2 m-0"> */}
{/*             
            <NavLink className="navbar-brand pt-0" to="/VendorHub">
              <img
                className=""
                src="https://3cv9ak2ajf5r17hu9d2d3jsa-wpengine.netdna-ssl.com/wp-content/uploads/2017/02/Jumia-Vendor-Hub-Logo_ws.png"
                alt="Jumia Hub"
                width="200"
              />
            </NavLink>
             */}
              <button
              className="navbar-toggler bg-light"
              type="button"
              data-toggle="collapse"
              data-target="#navbarScroll"
              aria-controls="navbarScroll"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              {/* <span className="navbar-toggler-icon"></span> */}
              open
            </button>
              <div className="navbar-brand col-md-2 col-8  offset-md-1">
       <Link to={{pathname:"https://www.facebook.com/groups/451027205693527/"}} target="_blank" style={{"color":"white","textDecoration":"none"}}><FaFacebook size="50" className="mr-4"/></Link>
        <Link to={{pathname:"https://www.youtube.com/channel/UCnq3m5VktVwmEFtBhwc3vkA"}} target="_blank" style={{"color":"white","textDecoration":"none"}}><ImYoutube2 size="50"/></Link>
        </div>
           
            <div className="collapse navbar-collapse p-3" id="navbarScroll">
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
                        9 Tricks to grow your sales on J6!
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
                {/* <li className="nav-item mr-3">
                  <NavLink
                    className="nav-NavLink text-white font-weight-bolder"
                    to="/VendorHelp"
                    role="button"
                  >
                    Help Center
                  </NavLink>
                </li> */}
                <li className="nav-item mr-3">
                <NavLink to="/ClaimForm" style={{ color: "white", textDecoration: "none" }}>
              RAISE A CLAIM{" "}
              </NavLink>
                </li>
                {/* <li className="nav-item mr-3">
                <NavLink to="/JumiaTrain" style={{ color: "white", textDecoration: "none" }}>
              BOOK YOUR TRAINING HERE!
            </NavLink>
                </li> */}
              </ul>
            </div>
          {/* </div> */}
        </nav>
      </React.Fragment>
    );
  }
}

export default NavSeller;
