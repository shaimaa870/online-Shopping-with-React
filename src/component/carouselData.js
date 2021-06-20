import React, { Component } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
class CarouselData extends Component {
  render() {
    //console.log("new arrivals from component",this.props.prods)

    if (this.props.prods === undefined || this.props.prods.length === 0) {
      return <div>loading............................</div>;
    } else {
      return (
        <React.Fragment>
          <div className="container">
            <h2>{this.props.heading}</h2>
            <span className="text-right">
              <Link
                to={{
                  pathname: `/allbestselling`,
                  HandlerSaving: this.props.prods,
                }}
                className="btn btn-success p-2 text-uppercase mt-2 mb-2"
                style={{
                  width: "20%",
                  fontWeight: "600",
                  fontSize: "16px",
                  backgroundColor: "teal",
                  color: "white",
                }}
              >
                SEE ALL
              </Link>
            </span>
            <div id="gallery1" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row rounded py-3">
                    {this.props.prods.slice(0, 4).map((c, i) => (
                      <Card cardprod={c} key={i} />
                    ))}
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row rounded py-3">
                    {this.props.prods.slice(4, 8).map((c, i) => (
                      <Card cardprod={c} key={i} />
                    ))}
                  </div>
                </div>
              </div>
              <a
                className="carousel-control-prev slide-arrow"
                href="#gallery1"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next slide-arrow"
                href="#gallery1"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
}
export default CarouselData;
