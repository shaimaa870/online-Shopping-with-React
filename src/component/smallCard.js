import React, { Component } from "react";

import { NavLink } from "react-router-dom";

class SmallCard extends Component {
  render() {
    let nprice;
    this.props.cardprod.discount == 0 || this.props.cardprod.discount == null
      ? (nprice = this.props.cardprod.price)
      : (nprice = 
          this.props.cardprod.price * (1 - this.props.cardprod.discount)
        );
    return (
      <React.Fragment>
        <a
          className=" col-md-2 col-5 mt-3 mr-3 mb-3 h-100 item-box-blog rounded"
          style={{
            color: "black",
            textDecoration: "none",
            border: "1px solid black",
            backgroundColor:"unset",
          }}
          href={"/product/" + this.props.cardprod.id}
        >
          {/* IMAGES*/}
          <img
            className="card-img-top mt-1"
            height="150px"
            alt={this.props.cardprod.productName}
            src={`https://localhost:44340/images/${this.props.cardprod.image}`}
          />

          <h6
            className="card-title text-center mt-1"
            style={{
              fontSize: "15px",
              fontWeight: "700",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              color: "black",
            }}
          >
            {" "}
            {this.props.cardprod.productName}
          </h6>
          <div className="">
            <p className="card-text text-center">
              {this.props.cardprod.discount > 0 ? (
                <>
                  <span className="sp1 m-1 ">
                    <b>
                      <span>EGP</span>
                      &nbsp; <span>{Math.ceil(nprice)}</span>
                    </b>
                  </span>
                  <span className="sp2 m-1 text-danger">
                    <span>Egp</span>
                    &nbsp; <span>{Math.ceil(this.props.cardprod.price)}</span>
                  </span>
                </>
              ) : (
                <span className="sp1 mt-1 ">
                  <b>
                    <span>EGP</span>
                    &nbsp; <span>{parseInt(nprice)}</span>
                  </b>
                </span>
              )}
            </p>
          </div>
        </a>
      </React.Fragment>
    );
  }
}
export default SmallCard;
