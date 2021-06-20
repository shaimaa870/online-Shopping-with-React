import React, { Component } from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
class VendorHub extends Component {
  state = {}
  render() {
    return (
      <React.Fragment>
        {/* Header Slider */}
        <div className="container">
        <div className="row m-0 mt-2 p-0 text-center">
          <div className="text-center m-2  col-12" >
            {/* <h1>Slider Here ....</h1> */}
            <Carousel
              className="p-0"
              autoPlay="true"
              infiniteLoop="true"
              dynamicHeight="true"
              width="100% "
            >
              <div>
                <img src="https://3cv9ak2ajf5r17hu9d2d3jsa-wpengine.netdna-ssl.com/wp-content/uploads/2019/12/Untitled-11.jpg" />
              </div>
              <div>
                <img src="https://3cv9ak2ajf5r17hu9d2d3jsa-wpengine.netdna-ssl.com/wp-content/uploads/2020/12/AR__banner-1.png" />
              </div>
              <div>
                <img src="https://3cv9ak2ajf5r17hu9d2d3jsa-wpengine.netdna-ssl.com/wp-content/uploads/2021/04/Training-Slider-VH-EN.png" />
              </div>
              <div>
                <img src="https://3cv9ak2ajf5r17hu9d2d3jsa-wpengine.netdna-ssl.com/wp-content/uploads/2021/04/EN_EXC-VH-HP-Slider-1205x299-Updated.png" />
              </div>
            </Carousel>
          </div>
        </div>
        {/* Footer Sections */}
        <div className="container mt-3 mb-3">
          <div className="row mt-3 mb-3 p-0 m-5 text-center">
            <div
              className="col-md-6 col-12  p-5"
              style={{
                border: "1px solid black",
                "boxShadow": "7px 10px 5px gray, -1px -1px 5px gray",
              }}
            >
              <Link style={{ textDecoration: "none" }} to="/Guide">
                <img
                  src="https://3cv9ak2ajf5r17hu9d2d3jsa-wpengine.netdna-ssl.com/wp-content/uploads/2019/11/new-vendor-1.png"
                  width="100"
                />
              </Link>
              <h5 className="text-primary">Guide to Start Selling</h5>
              <p>Discover the Essentials to start selling on JUMIA</p>
              <button
                className="btn"
                style={{
                  backgroundColor: "#f68b1e",
                  color: "white",
                  fontWeight: "700",
                  "boxShadow": "0px 7px 5px gray",
                }}
              >
                Click here
              </button>
            </div>
            <div
              className="col-md-6 col-12 p-5"
              style={{
                border: "1px solid black",
                "boxShadow": "7px 10px 5px gray, -1px -1px 5px gray",
              }}
            >
              <Link>
                <img
                  src="https://3cv9ak2ajf5r17hu9d2d3jsa-wpengine.netdna-ssl.com/wp-content/uploads/2019/11/old-vendor.png"
                  width="100"
                />
              </Link>
              <h5 className="text-primary">
                Opportunities to develop your business
              </h5>
              <p>Discover our services and tips to grow your sales</p>
              <button
                className="btn"
                style={{
                  backgroundColor: "#f68b1e",
                  color: "white",
                  fontWeight: "700",
                  "boxShadow": "0px 7px 5px gray",
                }}
              >
                Click here
              </button>
            </div>
          </div>
        </div>
        </div>
        </React.Fragment>
    );
  }
}

export default VendorHub;
