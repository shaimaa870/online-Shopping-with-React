import React, { Component } from "react";
import SmallCard from "../smallCard";
import { Link } from "react-router-dom";
class SubcatProd extends Component {
  render() {
    if (
      this.props.subcategories === undefined ||
      this.props.subcategories.length === 0
    ) {
      return null;
    } else {
      return (
        <div
        // style={{
        //   background:
        //     "url('https://www.hiamag.com/sites/default/files/article/19/09/2018/7242506-1865873101.jpg') fixed no-repeat",
        //   // backgroundPosition: "right",
        //   // backgroundRepeat: "no-repeat",
        //   // backgroundAttachment: "inherit",
        //   // backgroundOrigin: "border-box",
        //   // backgroundClip: "border-box",
        //   // backgroundColor: "initial",
        //   // backgroundSize: "contain",
        //   backgroundSize: "cover",
        //   // backgroundPositionX: "350px",
        //   // backgroundPositionY: "10px",
        // }}
        >
          {this.props.subcategories[0].products &&
            this.props.subcategories[0].products.length > 0 && (
              <React.Fragment>
                <div className="container rounded text-center">
                  <h2
                    className="alert alert-primary p-2 font-weight-bold mb-2"
                    style={{
                      fontFamily: "cursive",
                      width: "800px",
                      margin: "0px auto",
                    }}
                  >
                    Most Popular Products in SubCategory
                  </h2>
                  <div
                    className=" text-center p-0 m-0"
                    style={{
                      backgroundColor: "unset",
                    }}
                  >
                    {/* <div
                      style={{ backgroundColor: "" }}
                      className="m-0 p-2"
                    > */}
                      <h5 className="col-12 m-0 text-left">
                        <Link
                          to={
                            `/subcategory/` +
                            this.props.subcategories[0].subcategoryId
                          }
                          style={{color:"black",fontWeight:"600"}}
                        >
                          {this.props.subcategories[0].subcategoryName}
                        </Link>
                      </h5>
                    {/* </div> */}
                    <div className="row m-0 p-4">
                      {this.props.subcategories[0].products
                        .slice(0, 5)
                        .map((c, i) => (
                          <SmallCard key={i} cardprod={c} />
                        ))}
                    </div>
                  </div>
                </div>
              </React.Fragment>
            )}
          {this.props.subcategories[1].products &&
            this.props.subcategories[1].products.length > 0 && (
              <React.Fragment>
                <div className="container rounded text-center">
                  <div
                    className=" text-center p-0 m-0"
                    style={{
                      backgroundColor: "unset",
                    }}
                  >
                    {/* <div
                      style={{ backgroundColor: "" }}
                      className="m-0 p-2"
                    > */}
                      <h5 className="col-12 text-left m-0">
                        <Link
                          to={
                            `/subcategory/` +
                            this.props.subcategories[0].subcategoryId
                          }
                          style={{color:"black",fontWeight:"600"}}
                        >
                          {this.props.subcategories[0].subcategoryName}
                        </Link>
                      </h5>
                    {/* </div> */}
                    <div className="row mt-0 m-0 p-4">
                      {this.props.subcategories[1].products
                        .slice(0, 5)
                        .map((c, i) => (
                          <SmallCard key={i} cardprod={c} />
                        ))}
                    </div>
                  </div>
                </div>
              </React.Fragment>
            )}
        </div>
      );
    }
  }
}
export default SubcatProd;
