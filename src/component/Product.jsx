import React, { Component } from "react";
import axios from "axios";
import authHeader from "./Services/auth-header";
import "../Styles/Product.css";
class Product extends Component {
  state = {
    product: {},
    prodimgs: "",
    mainimg: "",
    user: JSON.parse(localStorage.getItem("user")),
  };

  SaveItems = () => {
    //console.log(this.props.location.HandlerSaving)
    //  console.log(this.props)
    if (this.state.user) {
      let _id = this.state.user.id;
      let _PId = this.state.product.productId;
      axios
        .post(
          "https://localhost:44340/api/UserBagApi/SetProductToSavedItems",
          { UserId: _id, ProductId: _PId },
          { headers: authHeader() }
        )
        .then(console.log(_id, _PId, authHeader()));
    }
  };
  findprod = (_id) => {
    axios
      .get("https://localhost:44340/api/ProductsAPi/"+ _id)
      .then((res) => {
        //  this.setState({product:res.data,prodimgs:res.data.productImages[0].image})
        this.setState({ product: res.data });
        // console.log("data",res.data,"prod",res.data.productImages)
      })
      .catch((err) => console.log(err));
  };
  rate = (t) => {
    if (t === 1) {
      return (
        <div>
          {" "}
          <i className="fa fa-star" />
        </div>
      );
    } else if (t > 1 && t <= 2) {
      return (
        <div>
          {" "}
          <i className="fa fa-star" />
          <i className="fa fa-star" />
        </div>
      );
    } else if (t > 2 && t <= 3) {
      return (
        <div>
          {" "}
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
        </div>
      );
    } else if (t > 3 && t <= 4) {
      return (
        <div>
          {" "}
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
        </div>
      );
    } else if (t > 4 && t <= 5) {
      return (
        <div>
          {" "}
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
        </div>
      );
    } else {
      return null;
    }
  };
  componentDidMount() {
    this.findprod(this.props.match.params.id);
    //console.log(this.props)
    //console.log(this.props.match)
  }
  render() {
    //  console.log(this.props);
    // console.log(this.props.match.params)
    return (
      <React.Fragment>
        <div className="container mt-2">
          <div className="row m-0 p-0">
            <div className="col-12 rounded">
              <div className="row m-0 p-0  mt-3">
                {/*product section */}
                {/* left */}
                <div className="col-12 col-md-5 p-0" style={{height:"550px"}}>
                  {/*image box */}
                  {/* Main Image */}
                    <div  className="" >
                      {/* <img src={this.state.product.mimg}  id="basicImage" width="100%" /> */}
                      <img
                        src="https://www.westernheights.k12.ok.us/wp-content/uploads/2020/01/No-Photo-Available.jpg"
                        id="basicImage"
                        width="100%"
                        height="280px"
                        alt={this.state.product.productName}
                      />
                    </div>
                    {/* 4 Images */}
                  <div className="m-0 row p-0">
                            <div className="p-2 col-6 col-md-3">
                              <img alt={this.state.product.productName}  src="https://www.westernheights.k12.ok.us/wp-content/uploads/2020/01/No-Photo-Available.jpg" width="100%" height="100"/>
                            </div>
                            <div className="p-2 col-6 col-md-3">
                              <img alt={this.state.product.productName} src="https://www.westernheights.k12.ok.us/wp-content/uploads/2020/01/No-Photo-Available.jpg" width="100%" height="100"/>
                            </div>
                            <div className="p-2 col-6 col-md-3">
                              <img alt={this.state.product.productName} src="https://www.westernheights.k12.ok.us/wp-content/uploads/2020/01/No-Photo-Available.jpg" width="100%" height="100"/>
                            </div>
                            <div className="p-2 col-6 col-md-3">
                              <img alt={this.state.product.productName} src="https://www.westernheights.k12.ok.us/wp-content/uploads/2020/01/No-Photo-Available.jpg" width="100%" height="100"/>
                            </div>
                        </div>
                </div>
                {/* Right */}
                <div className="col-12 col-md-7">
                  {/*information box */}
                  <div className="row justify-content-between p-2">
                    <div className="d-flex justify-content-start badge badge-danger text-light">
                      Official Store
                    </div>
                    <div className="d-flex justify-content-end heart">
                      <i
                        className="far fa-heart fa-1x text-right"
                        onClick={this.SaveItems}
                      ></i>
                    </div>
                  </div>
                  <div>
                    <h3>{this.state.product.productName}</h3>
                  </div>
                  <div className="">
                    <h5>{this.state.product.description}</h5>
                  </div>
                  {/* <div>
                    <span>Brand: </span>{" "}
                    <a href="#">{this.state.product.brandId}</a>
                  </div> */}
                  <div className="align-items-center mt-2 text-left">
                    <span>{this.rate(this.state.product.rating)}</span>
                  </div>
                  <hr className="m-0 mb-2 mt-2 d-md-block" />
                  {/* <div className="row  d-md-block text-center"> */}
                    <div className="p-0 text-left">
                      <h2 className="mb-0 badge badge-pill oranged text-white p-2">
                        EGP <span>{this.state.product.price}</span>
                      </h2>
                    {parseInt(this.state.product.discount) > 0 && (
                      <div className="mt-2 p-0 mb-2">
                        <span className="sp  col-3 p-1">
                          (Egp{" "}
                          <span>
                            {parseInt(
                              parseInt(this.state.product.price) *
                                (1 +
                                  parseInt(this.state.product.discount) * 0.01)
                            )}
                          </span>
                          )
                        </span>
                        <span className="alert text-danger col-3 p-0">
                          -{this.state.product.discount}%
                        </span>
                      </div>
                      
                    )}
                    </div>
                    <div className="text-center text-white cursor col-12 row m-0 p-2">
                    <button
                      style={{backgroundColor:"teal" }}
                      onClick={() =>
                        this.props.onAdd(this.state.product.productId)
                      }
                      className="btn text-uppercase text-white font-weight-bold mb-2 offset-md-2 col-12 col-md-8"
                    >
                      Add to cart
                    </button>
                  </div>
                  {/* </div> */}
                </div>
                <hr className="my-2 m-0" />
                {/* Product details */}
                <div
                  className="card border-0 mt-2 p-2 font-size-small item-box-blog text-left"
                  id="details"
                >
                  <header className="h">
                    <h2 className="">Product details</h2>
                  </header>
                  <div className="">
                    <span style={{ fontWeight: "800" }}>Name: </span>
                    {this.state.product.productName}
                  </div>
                  <div className="">
                    <span style={{ fontWeight: "800" }}>Description: </span>
                    {this.state.product.description}
                  </div>
                  <div className="">
                    <span style={{ fontWeight: "800" }}>Model: </span>
                    {this.state.product.model}
                  </div>
                  {/* <div className="">
                    <span style={{ fontWeight: "800" }}>Brand: </span>
                    {this.state.product.brand}
                  </div> */}
                  <div className="">
                    <span style={{ fontWeight: "800" }}>Color: </span>
                    <span style={{ color: this.state.product.color }}>
                      {this.state.product.color}
                    </span>
                  </div>
                  <div className="">
                    <span style={{ fontWeight: "800" }}>Size: </span>
                    {this.state.product.size}
                  </div>
                  <div className="">
                    <span style={{ fontWeight: "800" }}>Price: </span>
                    EGP {this.state.product.price}
                  </div>
                </div>
                {/*  specifications */}
                <div
                  id="specifications"
                  className="col-12 border-0 mt-2 p-2 font-size-small mb-3"
                >
                  <div className="h">
                    <h2>Specifications</h2>
                  </div>
                  <div className="row p-0 m-0">
                    <div className="col-md-6 col-12">
                      <div className="card  item-box-blog text-left">
                        <h6>Key Features</h6>
                        <div className="">
                          <ul>
                            <li>
                              <b>Our Model Is wearing Size L</b>
                            </li>
                            <li>Cotton Blended Material</li>
                            <li>Regular fit</li>
                            <li>Short Sleeves</li>
                            <li>Heather pattern</li>
                            <li>Crew Neck</li>
                            <li>Slip On</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-12">
                      <div className="card  item-box-blog text-left">
                        <h6>Specifications</h6>
                        <ul className="">
                          <li className="">
                            <b className="">SKU</b>: KA433MW0NZAV8NAFAMZ
                          </li>
                          <li className="">
                            <b className="">Color</b>:{" "}
                           <span style={{ color: this.state.product.color }}>{this.state.product.color}</span> 
                          </li>
                          <li className="">
                            <b className="">Main Material</b>: Cotton
                          </li>
                          <li className="">
                            <b className="">Model</b>:{" "}
                            {this.state.product.model}
                          </li>
                          <li className="">
                            <b className="">Production Country</b>: Egypt
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*DELIVERY Details Modal */}
       
      
       
      </React.Fragment>
    );
  }
}

export default Product;
