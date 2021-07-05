import axios from "axios";
import React, { Component } from "react";
import { Link,BrowserRouter as Router, Route, Switch  } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import AuthService from "./Services/auth.service";

class Card extends Component {
  state = {
    prod: this.props.cardprod,
    user: {},
  };
  // Add To Cart (Mahmoud)
  addToCart = async (productid) => {
    // console.log("prodid",productid)
    const productsIncart = { ...this.state.prod };
    this.setState({ productsIncart });
    try {
      await axios
        .post(
          "https://localhost:44340/addproducttoCART/" +
            AuthService.getCurrentUser().id,
          { id: productid }
        )
        .then((res) => {
          toast.success(`Product Added`);
          window.location.reload();
        });
    } catch (ex) {
      toast.error("Can't Add Or already Exist");
      this.setState({ prod: productsIncart });
    }
  };
  rate = (v) => {
    let t = parseFloat(v);
    if (t >= 1 && t < 1.5) {
      return (
        <div>
          {" "}
          <i className="fa fa-star" />
        </div>
      );
    } else if (t >= 1.5 && t < 2.5) {
      return (
        <div>
          {" "}
          <i className="fa fa-star" />
          <i className="fa fa-star" />
        </div>
      );
    } else if (t > 2.5 && t < 3.5) {
      return (
        <div>
          {" "}
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
        </div>
      );
    } else if (t >= 3.5 && t < 4.5) {
      return (
        <div>
          {" "}
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
        </div>
      );
    } else if (t >= 4.5 && t <= 5) {
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
  SaveinViews = () => {
    axios
      .post("https://localhost:44340/api/ProductsAPi/SetView", {
        UserId: this.state.user.id,
        ProductId: this.props.cardprod.id,
      })
      .then(console.log("ok"));
  };

  componentDidMount() {
    if (localStorage.getItem("user")) {
      let user = JSON.parse(localStorage.getItem("user"));
      //console.log(localStorage.getItem('user')

      this.setState({ user });
    }
  }

  render() {
    //console.log(this.state.prod.image)
    let nprice;
    //this.props.cardprod.discount==0||this.props.cardprod.discount==null?nprice=this.props.cardprod.price:nprice=this.props.cardprod.price*(1-this.props.cardprod.discount)
    this.props.cardprod.discount == 0 || this.props.cardprod.discount == null
      ? (nprice = this.props.cardprod.price)
      : (nprice = parseInt(
          this.props.cardprod.price * (1 - this.props.cardprod.discount)
        ));

    return (
      <React.Fragment>
        {/* Toast just for notification  */}
        <ToastContainer />
        <div className=" col-6 col-md-3 mt-2">
          <div className="card item-box-blog"
          //  style={{backgroundColor: "rgb(0 0 0 / 8%)",boxShadow:"none"}}
           >
            <Link
              to={{
                pathname: `/Product/${this.state.prod.id}`,
                HandlerSaving: this.state.user,
              }}
              onClick={this.SaveinViews}
              style={{ color: "black", textDecoration: "none" }}
            >
              <Router>
              <Switch>
              <Route 
                 render={(props) => <img
                  className="card-img-top"
                  src={`https://localhost:44340/images/${this.state.prod.image}`}
                  alt={`${this.state.prod.productName}`}
                  height="200px"
                />}
                  path="/" exact
                         />
                         <Route 
                 render={(props) => <img
                  className="card-img-top"
                  src={`https://localhost:44340/images/${this.state.prod.image}`}
                  alt={`${this.state.prod.productName}`}
                  height="200px"
                />}
                  path="/Home" exact
                         />
                         <Route 
                 render={(props) => <img
                  className="card-img-top"
                  src={`https://localhost:44340/images/${this.state.prod.image}`}
                  alt={`${this.state.prod.productName}`}
                  height="200px"
                />}
                  path="/category"
                         />
                          <Route 
                 render={(props) => <img
                  className="card-img-top"
                  src={`https://localhost:44340/images/${this.state.prod.image}`}
                  alt={`${this.state.prod.productName}`}
                  height="200px"
                />}
                  path="/subcategory"
                         />
                            <Route 
                 render={(props) => <img
                  className="card-img-top"
                  src={`https://localhost:44340/images/${this.state.prod.image}`}
                  alt={`${this.state.prod.productName}`}
                  height="200px"
                />}
                  path="/search"
                         />
                          <Route 
                 render={(props) => <img
                  className="card-img-top"
                  src={`https://localhost:44340/images/${this.state.prod.image}`}
                  alt={`${this.state.prod.productName}`}
                  height="200px"
                />}
                  path="/brand"
                         />
                         
              <Route 
                 render={(props) => <img
                  className="card-img-top"
                  src={`https://localhost:44340/${this.state.prod.image}`}
                  alt={`${this.state.prod.productName}`}
                  height="200px"
                />}
                  path="/allbestselling" exact
                         />
                  
              </Switch>
              </Router>
              {/* <img
                className="card-img-top"
                src={`https://localhost:44340/images/${this.state.prod.image}`}
                alt={`${this.state.prod.productName}`}
                height="200px"
              /> */}
              <h6
                className="card-title text-center mt-1"
                style={{
                  fontSize: "15px",
                  fontWeight: "700",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  color: "black",
                }}
              >
                {" "}
                {this.state.prod.productName}
              </h6>
                <div
                  className="card-text text-left"
                  style={{
                    fontSize: "15px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    height: "90px",
                  }}
                >
                  {this.state.prod.description}

                  <p className="card-text text-left ">
                    {this.props.cardprod.discount > 0 ? (
                      <>
                        <span className="sp1 mt-1 m-0">
                          <b>
                            <span>EGP</span>
                            &nbsp; <span>{nprice}</span>
                          </b>
                        </span>
                        <span className="sp2 mt-1 m-0 text-danger">
                          <span>Egp</span>
                          &nbsp;{" "}
                          <span>{parseInt(this.props.cardprod.price)}</span>
                        </span>
                      </>
                    ) : (
                      <span className="sp1 mt-1 m-0">
                        <b>
                          <span>EGP</span>
                          &nbsp; <span>{parseInt(nprice)}</span>
                        </b>
                      </span>
                    )}
                  <span className=" text-center m-0" style={{color:"gold"}}>
                    {this.rate(this.state.prod.rating)}
                  </span>
                  </p>
                </div>
             
            </Link>
            <div className="text-center mb-2 mt-3">
              <button
                className="btn"
                onClick={() => this.addToCart(this.state.prod.id)}
                style={{
                  // width: "60%",
                  fontWeight: "600",
                  fontSize: "16px",
                  backgroundColor: "rgb(0, 139, 182)",
                  color: "white",
                }}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Card;
