import React, { Component } from "react";
import { Link} from "react-router-dom";
import { Pagination } from './../Pagination';
class Categoriesimages extends Component {
  state = {
    sendCategories:this.props.sendCategories,
    loading: false,
    currentPage: 1,
    productsPerPage: 12,
  };
  render() {
    if (this.props.sendCategories === undefined) {
      return <div className=" container mt-4 mb-4  p-4 text-center alert alert-info">
      <h3>
      Categories Loading ...
      </h3>  
        </div>;
    } else {
      const { currentPage, productsPerPage, sendCategories } = this.state;

      const indexOfLastProduct = currentPage * productsPerPage;
      const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
      const currentCategories = sendCategories.slice(
        indexOfFirstProduct,
        indexOfLastProduct
      );

      const paginate = pageNum => this.setState({ currentPage: pageNum });

      const nextPage = () => {if(currentPage!=sendCategories.length)this.setState({ currentPage: currentPage + 1 })};

      const prevPage = () =>{if(currentPage!=1)this.setState({ currentPage: currentPage - 1 })};
    return (
      <React.Fragment>
        <div className="container text-center">
          {/* header Shop By Category*/}
          <h2 className="alert alert-primary p-2 font-weight-bold" style={{fontFamily:"cursive",width:"300px",margin:"0px auto"}}>Shop By Category</h2>
          {/* List of 6 Category */}
          <div className="row m-0 p-0 mt-4  mb-4">
            {currentCategories.map((b, i) => (
              <div key={i} className="col-xl-2 col-md-4 col-6">
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
                      src={`https://localhost:44340/${b.image}`}
                    />
                  </div>
                  <div className="bg-light">
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
                      <br />
          <Pagination
            productsPerPage={productsPerPage}
            totalproducts={this.props.sendCategories.length}
            paginate={paginate}
            nextPage={nextPage}
            prevPage={prevPage}
          />
        </div>
      </React.Fragment>
    );
  }
}}
export default Categoriesimages;
