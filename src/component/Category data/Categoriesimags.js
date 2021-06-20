import React, { Component } from "react";
import { Link} from "react-router-dom";
class Categoriesimages extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container text-center">
          {/* header Shop By Category*/}
          <h2>Shop By Category</h2>
          {/* List of 6 Category */}
          <div className="row m-0 p-0 mt-4  mb-4">
            {this.props.sendCategories.map((b, i) => (
              <div key={i} className="col-md-2 col-12">
                <Link
                  to={"/category/" + b.categoryId}
                  style={{ color: "black", textDecoration: "none" }}
                >
                  <div
                    className="item-box-blog p-0 bg-light"
                    style={{ height: "150px" }}
                  >
                    <img
                      alt={`brand${b.categoryName}`}
                      className="m-0 p-0"
                      height="100%"
                      width="100%"
                      src="https://www.westernheights.k12.ok.us/wp-content/uploads/2020/01/No-Photo-Available.jpg"
                      // src={b.image}
                    />
                  </div>
                  <div className="bg-warning">
                    <p style={{overflow:"hidden",textOverflow:"ellipsis"}}> {b.categoryName}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          {/* See All categories */}
          {/* <Link
            style={{
              fontWeight: "600",
              fontSize: "16px",
              backgroundColor: "teal",
              color: "white",
            }}
            to={{
              pathname: `/allcategories`,
            }}
            className="btn btn-success m-3 text-uppercase p-2"
          >
            See All Categories
          </Link> */}
        </div>
      </React.Fragment>
    );
  }
}
export default Categoriesimages;
