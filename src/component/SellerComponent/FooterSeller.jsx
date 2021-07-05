import React, { Component } from "react";
import { FaFacebook } from "react-icons/fa";
import { ImYoutube2 } from "react-icons/im";

import { Link } from "react-router-dom";
class FooterSeller extends Component {
  state = {};
  render() {
    return (
      <footer className="mt-3 p-5 text-white" style={{"backgroundColor":"black"}}>
        <div className="row">
          <div className="col-md-3 col-12">
            <h4 style={{ color: "#f68b1e" }}>NEED HELP?</h4>
          </div>
          <div className="col-md-2 col-12">
            <Link to="/ClaimForm" style={{ color: "white", textDecoration: "none" }}>
              RAISE A CLAIM{" "}
            </Link>
          </div>
          <div className="col-md-3 col-12">
            <Link to="/JumiaTrain" style={{ color: "white", textDecoration: "none" }}>
              BOOK YOUR TRAINING HERE!
            </Link>
          </div>
          <div className="col-md-3 col-12">
            <Link to="#" style={{ color: "white", textDecoration: "none" }}>
              BECOME A VENDOR ON JUMIA!
            </Link>
          </div>
        </div>
        <hr className="bg-white"/>
        <div className="row">
        <div className="col-md-6 p-3 col-12">
        © 2021 VendorHub J6 Egypt.
        </div>
        <div className="col-md-3 offset-md-3 col-12">
       <Link to={{pathname:"https://www.facebook.com/groups/451027205693527/"}} target="_blank" style={{"color":"#f68b1e","textDecoration":"none"}}><FaFacebook size="50" className="mr-4"/></Link>
        <Link to={{pathname:"https://www.youtube.com/channel/UCnq3m5VktVwmEFtBhwc3vkA"}} target="_blank" style={{"color":"#f68b1e","textDecoration":"none"}}><ImYoutube2 size="50"/></Link>
        </div>
        </div>
      </footer>
    );
  }
}

export default FooterSeller;
