
import React, { Component } from "react";
import SmallCard from "../smallCard";
class RecentlyViewed extends Component {
  render() {
    if (this.props.prods == undefined || this.props.prods.length == 0)
      return null;
  
    else {
      return (
        <React.Fragment>
          <div className="container  ">
            <h4 className="mb-2 ">RecentlyViewed</h4>
            <div className="row blog m-0 p-0">
              <div className="col-md-12 h-100">
                <div
               
                >
                  
                  {/* Carousel items */}
                  <div>
                    <div >
                      <div className="row m-0 p-0">
                        {this.props.prods.slice(0, 5).map((c, i) => (
                          <SmallCard cardprod={c} key={i} />
                        ))}
                      </div>
                    </div>
                  </div>
                  {/*.row*/}
                </div>
                {/*.item*/}
                <div className="carousel-item ">
                  <div className="row m-0 p-0">
                    {this.props.prods.slice(6, 12).map((c, i) => (
                      <SmallCard cardprod={c} key={i} />
                    ))}
                  </div>
                  {/*.item*/}
                </div>
                {/*.carousel-inner*/}
              </div>
              {/*.Carousel*/}
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
}
export default RecentlyViewed;

