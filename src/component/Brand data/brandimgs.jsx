import React, { Component } from "react";
import {Link } from "react-router-dom";
// import image from "../../J6/wwwroot/images/00522b9e-3ee6-4763-8876-d7d8e5d45de8_maca.jpg"
class Brand extends Component {
  render() {
    // let image="../../J6/wwwroot/images/"
    // console.log("image= "+image);
    return (
      <React.Fragment>
        
        <div className="container text-center">
          {/* header Shop By Brand*/}
          <h2>Shop By Brand</h2>
          {/* List of 6 Brands */}
          <div className="row m-0 p-0 mt-4  mb-4">
            {this.props.sendBrands.slice(0, 6).map((c, i) => (
              <div key={i} className="col-md-2 col-12">
                <Link
                  to={`/brand/` + c.brandId}
                  style={{ color: "black", textDecoration: "none" }}
                >
                  <div
                    className="item-box-blog p-0 bg-light"
                    style={{ height: "150px" }}
                  >
                    <img
                      alt={`brand${c.brandName}`}
                      className="m-0 p-0"
                      height="100%"
                      width="100%"
                      // src="https://www.westernheights.k12.ok.us/wp-content/uploads/2020/01/No-Photo-Available.jpg"
                      //  src={require(`../../../J6/wwwroot/images/${c.image}`)}
                      //  src="../../J6/wwwroot/images/0ac638c5-3cb7-45ca-af4d-f6d4be43969b_FB_IMG_1496904814546.jpg"
                      //  {`V3/J6/wwwroot/images/${c.image}`}
                      // src={image}
                      src={c.image}
                    />
                  </div>
                  <div className="bg-warning">
                    <p style={{overflow:"hidden",textOverflow:"ellipsis"}}> {c.brandName}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          {/* See All Brands */}
          <Link
            style={{
              fontWeight: "600",
              fontSize: "16px",
              backgroundColor: "teal",
              color: "white",
            }}
            to={{
              pathname: `/AllBrands`,
              HandlerSaving: this.props.sendBrands,
            }}
            className="btn btn-success m-3 text-uppercase p-2"
          >
            See All Brands
          </Link>
        </div>
      </React.Fragment>
    );
  }
}

export default Brand;
