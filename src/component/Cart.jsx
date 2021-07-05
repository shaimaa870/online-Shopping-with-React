import React, { Component } from "react";
import "../Styles/Cart.css";
import { Link } from "react-router-dom";
import Cartitem from "./cartitem";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import AuthService from "./Services/auth.service";
class Cart extends Component {
  state = {
    q: 1,

    totalPrice: 0,
    cartid: localStorage.getItem("cartid"),
    productsIncart: this.props.productsCart,
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

  //Delete Product From Cart

  deleteFromCart = async (productid, e) => {
    try {
      await axios
        .delete(
          "https://localhost:44340/api/CartsItemAPi/deleteProductsFromCart/" +
            this.state.cartid +
            "?productid=" +
            productid
        )
        .then((res) => {
          toast.success(`Product  Deleted`);
          window.location.reload();
        });
    } catch (ex) {
      toast.error("Can't Delete");
    }
  };

  incrementQuantity = async (productid) => {
    const productsIncart = [...this.state.productsIncart];
    this.setState({ productsIncart });
    try {
      await axios
        .put(
          "https://localhost:44340/increaseQuantity/" +
            productid +
            "/" +
            this.state.cartid
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
          "https://localhost:44340/decreaseQuantity/" +
            productid +
            "/" +
            this.state.cartid
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
  async componentDidMount() {
    await this.getTotalPrice();
  }

  render() {
    return (
      <React.Fragment>
        {this.props.productsCart.length === 0 ? (
          <React.Fragment>
            <div className="container text-left">
            <h3 className="alert alert-success col-12 text-center m-0">
                Cart is empty
              </h3>
              <div
                className="bg-light p-0 text-center"
                style={{
                  height: "300px",
                  background:
                    "url('http://sasteedeals.com/assets/uploads/empty-cart.png') fixed no-repeat",
                  backgroundPosition: "right",
                  backgroundRepeat: "no-repeat",
                  backgroundAttachment: "inherit",
                  backgroundOrigin: "border-box",
                  backgroundClip: "border-box",
                  backgroundColor: "initial",
                  backgroundSize: "contain",
                }}
              >

                <div className="p-xl-4 p-0 col-12 col-xl-6">
                  <Link
                    className="btn btn-success p-xl-5 p-0  mt-0 mt-xl-5"
                    style={{
                      textDecoration: "none",
                      width: "80%",
                      fontSize: "24px",
                      fontWeight: "600",
                    }}
                    to="/"
                  >
                    Go Shopping
                  </Link>
                </div>
              </div>
            </div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <div className="container mt-2 table-responsive">
              <h3 className="bg-white col-md-3 text-center p-1 font-weight-bold">
                Cart ({this.props.productsCart.length} items)
              </h3>
              {/* Table  */}
              <table
                className="table table-hovered table-bordered m-0"
                style={{  }}
              >
                <thead
                  className="text-center text-white"
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                    // backgroundColor: "teal",
                    backgroundColor: "rgb(0, 139, 182)"
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
                  {this.props.productsCart.map((p) => (
                    <Cartitem
                      key={p.productId}
                      q={p.quantity}
                      prodid={p.productId}
                      totalPrice={this.state.totalPrice}
                      onDelete={this.deleteFromCart}
                      incrementQuant={this.incrementQuantity}
                      decremenrQuant={this.decrementQuantity}
                    />
                  ))}
                </tbody>
              </table>
            </div>
            {/* Footer */}
            <div className="container">
              <div
                className="row col-12 p-0 m-0 mb-4"
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  // backgroundColor: "teal",
                  backgroundColor: "rgb(0, 139, 182)"
                }}
              >
                <div className="col-12 col-md-6 p-4">
                  <Link
                    className="col-md-6 col-xl-5 col-12  btn btn-warning shadow-lg text-dark p-2 m-1"
                    style={{ textDecoration: "none" }}
                    to="/"
                  >
                    COUNTINUE SHOPING
                  </Link>
                  <Link
                    className="col-md-6 col-xl-5 col-12 btn btn-danger shadow-lg text-white p-2 m-1"
                    style={{ textDecoration: "none" }}
                    to="/Checkout"
                  >
                    Countinue to check out
                  </Link>
                </div>
                <div className="col-12 col-md-6">
                  <div className="row mt-3 m-0 p-0">
                    <p className="col-6 text-center font-weight-bolder text-light">
                      {" "}
                      Total:
                    </p>
                    <p className="col-6 text-center font-weight-bolder bg-light">
                      {" "}
                      EGP <span>{Math.ceil(this.state.totalPrice)}</span>
                    </p>
                  </div>
                  <div>
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
