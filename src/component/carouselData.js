import React, { Component } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
class CarouselData extends Component {
  render() {
    //console.log("new arrivals from component",this.props.prods)

    if (this.props.prods === undefined || this.props.prods.length === 0) {
      return <div className=" container mt-4 mb-4  p-4 text-center alert alert-info">
      <h3>
      Products Loading ...
      </h3>  
        </div>;
    } else {
      return (
        <React.Fragment>
          <div className="container mt-2">
              <h3 className="alert alert-dark font-weight-bold  p-2 m-0" style={{fontFamily:"cursive",width:"340px",margin:""}}>
                <div className="text-left"> 
                <i className="fa fa-hand-point-down mr-1"></i>
                 {this.props.heading}
                </div>
                
              </h3>
              <div className="text-md-right ml-md-0">
                  <Link
                    to={{
                      pathname: `/allbestselling`,
                      // HandlerSaving: this.props.prods,
                    }}
                    className="btn p-2 mt-2 text-uppercase"
                    style={{
                      fontWeight: "700",
                      fontSize: "20px",
                      backgroundColor: "#00348d",
                      color: "white",
                      width:"180px",
                    }}
                  >
                    SEE ALL
                  </Link>
              </div>
           
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
