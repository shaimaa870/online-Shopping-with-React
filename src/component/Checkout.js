import Joi from "joi-browser";
import React, { Component, useState } from "react";
import axios from "axios";
import AuthService from "../component/Services/auth.service";
import { Link } from "react-router-dom";
import Cartitem from "./cartitem";
import CheckoutProduct from "./CheckoutProducts";
import PayPal from "./Paypal";
class CheckOut extends Component {
  state = {
    productsIncart: this.props.productsCart,
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    country: "",
    city: "",
    street:"",
    totalPrice: 0,
    cartid: localStorage.getItem("cartid"),
  };
  schema = {
    address: Joi.string().min(5).max(255).required(),
    government: Joi.string().min(5).max(255).required(),
    city: Joi.string().min(5).max(255).required(),
  };
  handleChange = (e) => {
    //Clone
    let state = { ...this.state };
    //Edit
    state[e.currentTarget.name] = e.currentTarget.value;
    //Set state
    this.setState(state);
  };
  
   getAdressdeatails=async()=>{
    if(AuthService.getCurrentUser().id){
    axios.get("https://localhost:44340/api/CustomersApi/GetUserAddress/"+AuthService.getCurrentUser().id).then(res=>
    this.setState({country:res.data.country,
      city:res.data.city,
      street:res.data.street
    })
    )
  }}
  //   get product
  //   getprod=async()=>{

  //     axios.get("https://localhost:44340/api/ProductsAPi/"+this.props.prodid).
  //     then(res=>{
  //         this.setState({prod:res.data})
  //         //console.log(res.data)
  //     }
  //         )
  // }
  //get Customer data
  getcustomerdeatails = async () => {
    if (AuthService.getCurrentUser().id) {
      axios
        .get(
          "https://localhost:44340/api/CustomersApi/" +
            AuthService.getCurrentUser().id
        )
        .then((res) => {
          console.log(res.data);
          this.setState({
            firstName: res.data.firstName,
            lastName: res.data.lastName,
            email: res.data.email,
            phoneNumber: res.data.phoneNumber,
            address: res.data.address,
          });
        });
    }
  };
  //get Total Price For Cart
  async getTotalPrice() {
    await axios
      .get(
        "https://localhost:44340/api/CartsItemAPI/priceofcart/" +
          this.state.cartid
      )
      .then((res) => this.setState({ totalPrice: res.data }));
  }
  //get product Cart Data
  async componentDidMount() {
    await this.getTotalPrice();
    this.getcustomerdeatails();
    this.getAdressdeatails();

    // script for payment
    // const script = document.createElement("script");
    // script.src =
    //   "https://www.paypal.com/sdk/js?client-id=AZeyyEhHSUoTdfZtIunBIJracGO7IudcmXXcHhuBzq985qTBdWL9nGhVnDkQiwfrhKFqEo7IRY8YJHkn&disable-funding=credit,card";
    // script.async = true;
    // document.body.appendChild(script);
    // const script2 = document.createElement("script");
    // script2.src = "payment.js";
    // script2.async = true;
    // document.body.appendChild(script2);
  }
  render() {
    return (
      <React.Fragment>
        <div className="container mb-4 mt-2">
          <div className="row m-0 p-0">
            {/* left section */}
            <div className="m-0 p-0 col-12 col-md-6 mb-2">
              <h4 className="text-muted col-12 text-center">ORDER SUMMARY</h4>
              <div className="col-12">
                {/* Card */}
                <div className="card">
                  {/* Header */}
                  <div className="card-header">
                    <h5 className="col-12">
                      YOUR ORDER({this.state.productsIncart.length} item)
                    </h5>
                  </div>
                  {/* Product */}
                  {this.props.productsCart.map((p) => (
                    <CheckoutProduct
                      key={p.productId}
                      q={p.quantity}
                      prodid={p.productId}
                    />
                  ))}
                  {/* Total */}
                  <div className="card-body list-group col-12">
                    <ul className="list-group list-group-flush ">
                      {/* Subtotal */}
                      <li className="list-group-item">
                        Subtotal:{" "}
                        <span>{Math.ceil(this.state.totalPrice)} EGP </span>
                      </li>
                      {/* Shipping amount */}
                      <li className="list-group-item">
                        Shipping amount : <span> 40 EGP</span>
                      </li>
                      {/* Total */}
                      <li className="list-group-item">
                        <p className="text-center font-weight-bolder bg-light p-2">
                          Total :{" "}
                          <span>
                            {Math.ceil(this.state.totalPrice) + 40} EGP{" "}
                          </span>
                        </p>
                      </li>
                    </ul>
                  </div>
                  {/* MODIFY CART */}
                  <div className="card-body bg-light text-center">
                    <Link
                      to="/cart"
                      className="card-link  btn btn-warning"
                      style={{ width: "100%" }}
                    >
                      MODIFY CART
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* right section */}
            <div className="m-0 p-0 col-12 col-md-6 mb-2">
              <h4 className="text-muted col-12 text-center">CHECKOUT</h4>
              <div className="bg-light col-12 card pt-5">
                {/* Customer Data */}
                <div className="bg-light pl-3 p-3">
                  <p className="h6">
                    Customer Name:{" "}
                    <span className="h5" style={{color:"#00acee"}}>
                      {this.state.firstName} {this.state.lastName}
                    </span>
                  </p>
                  <p className="h6">
                    Customer Email:{" "}
                    <a className="tel " style={{color:"#00acee"}} href={`mailto:${this.state.email}`}>
                      {this.state.email}
                    </a>
                  </p>
                  <p className="h6">
                    Phone:{" "}
                    <a className="tel" style={{color:"#00acee"}} href={`tel:${this.state.phoneNumber}`}>
                      +20{this.state.phoneNumber}
                    </a>
                  </p>
                  <p className="h6">
                    Address:
                  <span style={{color:"#00acee"}}><b>
                    {this.state.country+','+this.state.city+','+this.state.street}
                    </b>
                    </span>
                  </p>

                  
                  {/* <input
                    id="Region"
                    type="Region"
                    name="Region"
                    placeholder="Region"
                    className="form-control  mt-3"
                    value={this.state.country}
                    onChange={this.handleChange}
                  />
                  <input
                    id="City"
                    type="City"
                    name="City"
                    placeholder="City "
                    className="form-control mt-3"
                    value={this.state.city}
                    onChange={this.handleChange}
                  />
                  <input
                    name="street"
                    type="street"
                    value={this.state.street}
                    onChange={this.handleChange}
                    placeholder="street"
                    autoFocus
                    id="street"
                    type="text"
                    className="form-control mt-3"
                  /> */}
                     <a  href="/Account/NewAdress" type="button" className="btnaddress button form-control text-white mt-4" >Create New Adress</a>
                </div>
                <hr />
                <div className="text-center">
                  <p className="h5 text-danger">
                    Estimated Delivery Between 4 to 15 Days
                  </p>
                  {this.state.checkout ? <PayPal cost={this.state.totalPrice + 40}/> : <button className="my-2 btn btn-primary" onClick={async()=>await this.setState({checkout:true})}>Checkout</button>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CheckOut;