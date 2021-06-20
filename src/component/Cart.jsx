import React, { Component } from "react";
import "../Styles/Cart.css";
import { Link } from "react-router-dom";
import Cartitem from './cartitem';
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import AuthService from "./Services/auth.service";
class Cart extends Component {
  state = {
    q:1,
  
    totalPrice: 0,
    cartid:localStorage.getItem("cartid"),
    productsIncart:this.props.productsCart
  
  };
  
   //get Total Price For Cart
   async getTotalPrice() {
     const { data } = await axios.get(
       "https://localhost:44340/api/CartsItemAPI/priceofcart/"+this.state.cartid
     );
     this.setState({ totalPrice: data });
    
   }
 
 
 
   //Delete Product From Cart
 
   deleteFromCart= async(productid,e)=> {
  ;
      try {
       await axios.delete(
         'https://localhost:44340/api/CartsItemAPi/deleteProductsFromCart/'+this.state.cartid+'?productid='+productid
 
 
       ).then(res=>{
         toast.success(`Product  Deleted`)
        ;window.location.reload();});
     } catch (ex) {
       toast.error("Can't Delete");
      
     }}

  
 
    incrementQuantity = async (productid) => {
      const productsIncart = [...this.state.productsIncart];
     this.setState({ productsIncart });
      try {
        await axios
          .put(
            "https://localhost:44340/increaseQuantity/"+
              productid +
              "/" +this.state.cartid
              
          )
          .then((res) => {
         
  
            toast.success(`quantity increment`);
            window.location.reload();
          });
      } catch (ex) {
        toast.error("Can't Add");
        this.setState({ productsIncart: productsIncart });
      }
    };
    decrementQuantity = async (productid) => {
      const productsIncart = [...this.state.productsIncart];
      this.setState({ productsIncart });
      try {
        await axios
          .put(
            "https://localhost:44340/decreaseQuantity/"+
              productid +
              "/" +this.state.cartid
              
          )
          .then((res) => {
           
  
            toast.success(`quantity increment`);
            window.location.reload();
          });
      } catch (ex) {
        toast.error("Can't Add");
        this.setState({ productsIncart: productsIncart });
      }
    };
  async componentDidMount(){
  await  this.getTotalPrice();

   }

  render() {
 
    return (
      <React.Fragment>
        {this.props.productsCart.length === 0 ? (
          <React.Fragment>
            <div className="container text-center m-4">
            <h1 className="alert alert-danger">Cart is empty</h1>
              <Link
                className="btn btn-warning"
                style={{ textDecoration: "none" }}
                to="/"
              >
                Go Shopping
              </Link>
            </div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <div className="container col-12 col-lg-10 mt-2 table-responsive">
              <h3>Cart ({this.props.productsCart.length} items)</h3>
              <p className="font-weight-bolder text-justify">
                Your order is eligible for Free Shipping with Jumia Express or
                Jumia Primo. (Excludes large and bulky items)
              </p>

              {/* Table  */}
              <table className="table table-hovered table-bordered m-0">
                <thead
                  className="text-center text-white"
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                    backgroundColor: "teal",
                  }}
                >
                  <tr>
                    <th>image</th>
                    <th>ITEM</th>
                    <th>QUANTITY</th>
                    <th>UNIT PRICE</th>
                    <th>SUBTOTAL</th>
                    <th>Saved/Removed</th>
                  </tr>
                </thead>
                <tbody>
                 
                  {
                    this.props.productsCart.map(p=>
                      <Cartitem key={p.productId} q={p.quantity} prodid={p.productId}
                      totalPrice={this.state.totalPrice}
                      onDelete={this.deleteFromCart}
                      incrementQuant={this.incrementQuantity}
                      decremenrQuant={this.decrementQuantity}
                      />
                      )
                  }
                </tbody>
              </table>
            </div>
            {/* Footer */}
            <div className="container col-12 col-lg-10">
              <div
                className="row col-12 m-0 mb-4"
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  backgroundColor: "teal",
                }}
              >
                <div className="col-12 col-md-6 mt-5">
                  <Link
                    className="col-md-6  btn-sm btn-light bg-warning shadow-lg text-dark p-2 m-2"
                    style={{ textDecoration: "none" }}
                    to="/"
                  >
                    COUNTINUE SHOPING
                  </Link>
                  <Link
                    className="col-md-6  btn-sm btn-light bg-danger shadow-lg text-white p-2 m-2"
                    style={{ textDecoration: "none" }}
                    to="#"
                  >
                    Countinue to check out
                  </Link>
                </div>
                <div className="col-12 col-md-6">
                  <div className="row mt-3">
                    <p className="col-6 text-center font-weight-bolder text-light">
                      {" "}
                      Total:
                    </p>
                    <p className="col-6 text-center font-weight-bolder bg-light">
                      {" "}
                      EGP <span>{this.state.totalPrice}</span>

                    </p>
                  </div>
                  <div>
                    <p className="p-2 border border-success m-2 mr-0 rounded text-light">
                      Your order is eligible for Free Shipping with Jumia
                      Express or Jumia Primo. (Excludes large and bulky items)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

export default Cart;
