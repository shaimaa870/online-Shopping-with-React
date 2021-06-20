import React, { Component } from "react";

import { NavLink } from "react-router-dom";

class SmallCard extends Component {
  render() {
    // console.log("card product data",this.props.cardprod)
    return (
      <React.Fragment>
          <NavLink
            style={{ color: "black", textDecoration: "none" }}
            to={"/product/" + this.props.cardprod.productId}
          >
            {/* IMAGES*/}
            <img
                className="card-img-top"
                height="250"
                alt={this.props.cardprod.productName}
                src="https://www.westernheights.k12.ok.us/wp-content/uploads/2020/01/No-Photo-Available.jpg"
            />

            <div className="card-body" style={{ backgroundColor: "beige" }}>
                {/*Heading*/}
                <h6 className="card-title" style={{overflow:"hidden",textOverflow:"ellipsis"}}> {this.props.cardprod.productName}</h6>
                {/*Text*/}
                <div className="card-text">
                  <span>EGP</span> <span>{this.props.cardprod.price}</span>
                </div>  
                <div>
                    <del>
                        {parseInt(this.props.cardprod.discount) > 0 && (
                        <div className="mt-2 p-0">
                            <span className="sp  ">
                            (Egp{" "}
                            <span>
                                {parseInt(
                                parseInt(this.props.cardprod.price) *
                                    (1 +
                                    parseInt(this.props.cardprod.discount) * 0.01)
                                )}
                            </span>
                            )
                            </span>
                            <span className="alert text-danger col-1 p-0">
                            -{this.props.cardprod.discount}%
                            </span>
                        </div>
                        )}
                    </del>
                </div>
            </div>
          </NavLink>
      </React.Fragment>
    );
  }
}
export default SmallCard;
