import React, { Component } from "react";
import {Link } from "react-router-dom";
// import image from "../../J6/wwwroot/images/00522b9e-3ee6-4763-8876-d7d8e5d45de8_maca.jpg"
import { Pagination } from './../Pagination';
class Brand extends Component {
  show(_v){
    console.log(_v)
  };
   state = {
    sendBrands:this.props.sendBrands,
    loading: false,
    currentPage: 1,
    productsPerPage: 12,
  };
  render() {
    if (this.props.sendBrands === undefined) {
      return <div className=" container mt-4 mb-4 p-4 text-center alert alert-info">
      <h3>
        Brands Loading ...
      </h3>  
        </div>;
    } else {
      const { currentPage, productsPerPage, sendBrands } = this.state;

      const indexOfLastProduct = currentPage * productsPerPage;
      const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
      const currentCategories = sendBrands.slice(
        indexOfFirstProduct,
        indexOfLastProduct
      );

      const paginate = pageNum => this.setState({ currentPage: pageNum });

      const nextPage = () => {if(currentPage !== sendBrands.length)this.setState({ currentPage: currentPage + 1 })};

      const prevPage = () =>{if(currentPage !== 1)this.setState({ currentPage: currentPage - 1 })};
      return (
      <React.Fragment>
        <div className="container text-center"
        >
          {/* header Shop By Brand*/}
          <h2 className="alert alert-primary p-2 font-weight-bold" style={{fontFamily:"cursive",width:"300px",margin:"0px auto"}}>Shop By Brand</h2>
          {/* List of 6 Brands */}
          <div className="row m-0 p-0 mt-4  mb-4">
            {currentCategories.map((c, i) => (
              <div key={i} className="col-xl-2 col-md-4 col-6">
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
                      src={`${this.props.imgpath}${c.image}`}
                    />
                 
                  </div>
                  <div className="bg-light">
                    <p style={{overflow:"hidden",textOverflow:"ellipsis",fontFamily:"cursive"}}> {c.brandName}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          {/* See All Brands */}
          {/* <Link
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
          </Link> */}
          <br />
          <Pagination
            productsPerPage={productsPerPage}
            totalproducts={this.props.sendBrands.length}
            paginate={paginate}
            nextPage={nextPage}
            prevPage={prevPage}
          />
        </div>
      </React.Fragment>
    );
  }
}}
export default Brand;
