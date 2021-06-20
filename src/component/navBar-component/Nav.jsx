import React, { Component } from "react";
import { NavLink} from "react-router-dom";
import { BiStar } from "react-icons/bi";
import { Link } from "react-router-dom";
import AuthService from "../Services/auth.service";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
class NavBar extends Component {
  state = {
    prod: this.props.cardprod,
    user: {},
    searchString:'',
    searchResult:[],
  };
// Add To Cart (Mahmoud)
addToCart = async (productid) => {
  const productsIncart = {...this.state.prod};
  this.setState({ productsIncart });
  try {
    await axios
      .post(
        "https://localhost:44340/api/CartsItemAPi/addproducttoCART/1?productid=" +
          productid
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


// Get Search
async search(name,e){
  e.preventDefault();
  try{
  await axios.get("https://localhost:44340/api/SearchsAPi/"+name)
  .then((res) => {
    this.setState({ searchResult: res.data });
    // toast.success("Success Search");
    console.log(this.state.searchResult);
    // window.location.replace("/search");
  })}
  catch (ex) {
    toast.error("Enter Valid String");
  }
};

//Form input Search
handleChange = (e) => {
  this.setState({searchString:e.target.value});
  console.log(e.currentTarget.value);
};
  render() {
    return (
      <React.Fragment>
        <nav
          className="navbar navbar-expand-lg navbar-light text-white fixed-top"
          style={{ backgroundColor: "#343a40",position: "sticky",
          display: "flex" }}
        >
          <div className="col-md-2 col-12 offset-md-1">
            <button
              className="navbar-toggler "
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <Link className="navbar-brand text-white" to="/" title="Home">
              <h1>
                {" "}
                <b>JUMIA</b> <i className="fa fa-shopping-cart text-light" />
              </h1>
            </Link>
          </div>
          <form 
            // action="/search"
            onSubmit={(event)=>this.search(this.state.searchString,event)}
            className="form-inline col-md-5 offset-1 col-12"
            >
            <input
              className="form-control mr-sm-2 col-7"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={this.handleChange}
              value={this.state.searchString}
              name="searchString"
            />
            <button
              className="btn btn-primary my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
          <div
            className="collapse navbar-collapse col-12 col-md-3"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mr-auto">
              <li className="nav-item m-2 dropdown ml-md-2">
                <NavLink
                  className="nav-NavLink dropdown-toggle text-light font-weight-bolder"
                  to=""
                  id="navbarScrollingDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  {/* <i className="fas fa-user"> Login</i> */}
                  {!JSON.parse(localStorage.getItem("user")) ? (
                      <i className="fas fa-user"> Login</i>
                    ) : (
                        // <i className="fas fa-user">Logout</i>
                        <i>
                         { JSON.parse(localStorage.getItem("user")).userName}
                        </i>
                    )}
                </NavLink>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarScrollingDropdown"
                >
                  {!JSON.parse(localStorage.getItem("user")) ? (
                  <li>
                    <NavLink
                      className="dropdown-item bg-light text-dark"
                      to="/Register"
                    >
                      Create An Account
                    </NavLink>
                  </li>)
                  :(
                    <li className="dropdown-item bg-light text-dark text-center h5 font-weight-bold"><Link to="Account/Index">{ JSON.parse(localStorage.getItem("user")).userName}</Link></li>
                  )}
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    {!JSON.parse(localStorage.getItem("user")) ? (
                      <NavLink
                        className="dropdown-item bg-light text-dark"
                        to="/Login"
                      >
                        <i className="fas fa-user mr-2"></i>Login
                      </NavLink>
                    ) : (
                      <button
                        className="dropdown-item bg-light text-dark"
                        onClick={AuthService.logout}
                      >
                        <i className="fas fa-user mr-2"></i>Logout
                      </button>
                    )}
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item bg-light text-dark"
                      to="#"
                    >
                      <i className="fas fa-shopping-cart mr-2"></i>Social Orders
                    </NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    {AuthService.getCurrentUser() ? (
                      <NavLink
                        className="dropdown-item bg-light text-dark"
                        to="/Account/wishlist"
                      >
                        <i className="fas fa-heart mr-2"></i>Saved Items
                      </NavLink>
                    ) : (
                      <NavLink
                        className="dropdown-item bg-light text-dark"
                        to="/Login"
                      >
                        <i className="fas fa-heart mr-2"></i>Saved Items
                      </NavLink>
                    )}
                  </li>
                </ul>
              </li>
              <li className="nav-item m-2 dropdown">
                <NavLink
                  className="nav-NavLink dropdown-toggle text-light font-weight-bolder"
                  to="#"
                  id="navbarScrollingDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fas fa-question-circle mr-2">help</i>
                </NavLink>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarScrollingDropdown"
                >
                  <li>
                    <NavLink
                      className="dropdown-item bg-light text-dark"
                      to="/HelpCenter"
                    >
                      Help Center
                    </NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item bg-light text-dark"
                      to="#"
                    >
                      Place &amp; track Order
                    </NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item bg-light text-dark"
                      to="#"
                    >
                      Payment and Account
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item m-2">
                <NavLink
                  className="nav-NavLink text-white font-weight-bolder"
                  to="/cart"
                  title="Cart"
                  role="button"
                  aria-expanded="false"
                >
                  <span>
                    <i className="fas fa-shopping-cart fa-2x"></i>
                    <span className="badge rounded-pill badge-notification bg-danger align-top">
                      {this.props.productsCart.length}
                    </span>
                  </span>
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <Link
          to="/Knowledge/Guide"
          target="_blank"
          className="m-2 font-weight-bolder"
          style={{ color: "teal" }}
        >
          <BiStar size="22" /> Sell On Jumia
        </Link>




        {/* Search Result */}
        <React.Fragment>
          {(this.state.searchResult.length===1)
            ?(
            <React.Fragment>
              {Object.keys(this.state.searchResult).map((key) => {
                return (
                  <div key={key} className="container text-center">
                    <h1>Search Result</h1>
                    <div className="row m-0 p-0 mt-4  mb-4">
                        {this.state.searchResult[key].map((dataItem) => {
                          {if(this.state.searchResult.length[key]!==0)
                            return (
                              //Cards
                              <React.Fragment>
                                <div  key={dataItem.productId} className="col-md-4 col-12">
                                  <div className="card item-box-blog">
                                    <Link
                                      to={{
                                        pathname: `/Product/${dataItem.productId}`,
                                        HandlerSaving: this.state.user,
                                      }}
                                      onClick={this.SaveinViews}
                                      style={{ color: "black", textDecoration: "none" ,backgroundColor:"beige"}}
                                    >
                                        <img
                                          className="card-img-top"
                                          src="https://www.westernheights.k12.ok.us/wp-content/uploads/2020/01/No-Photo-Available.jpg"
                                          alt={`${dataItem.productName}`}
                                          height="250"
                                        />
                                        <div className="card-body" style={{height:"350px",direction:"ltr"}}>
                                          <h6 className="card-title text-left" style={{overflow:"hidden",textOverflow:"ellipsis"}}>
                                            {dataItem.productName}
                                          </h6>
                                          <div className="card-text text-left" style={{overflow:"hidden",textOverflow:"ellipsis",height:"150px"}}>
                                            {dataItem.description}
                                          </div>
                                          <p className="card-text text-right">
                                              {dataItem.price} Egp
                                              {parseInt(dataItem.discount) > 0 && (
                                                <div className="mt-2 p-0">
                                                  <span className="sp">
                                                    (Egp
                                                    <span>
                                                      {parseInt(
                                                        parseInt(dataItem.price) *
                                                          (1 +
                                                            parseInt(dataItem.discount) * 0.01)
                                                      )}
                                                    </span>
                                                    )
                                                  </span>
                                                </div>
                                              )}
                                              <p className="card-text text-right">
                                                  <span className="alert text-danger col-1 p-0">
                                                    -{dataItem.discount}%
                                                  </span>
                                              </p>
                                          </p>
                                        </div>
                                    </Link>
                                    <button className="mb-5 mt-2 ml-5" onClick={()=>this.addToCart(dataItem.productId)} style={{width:"50%",fontWeight:"600",fontSize:"16px",backgroundColor:"teal",color:"white"}}>Add to cart</button>
                                  </div>
                                </div>
                              </React.Fragment>
                            );
                          }
                          {
                            if(this.state.searchResult.length[key]===0)
                            {
                              return(
                                <React.Fragment>
                                  <div className="alert alert-danger container text-center">
                                    <h1>Not Found</h1>
                                  </div>
                                </React.Fragment>
                              );
                            }
                          }
                        })}
                    </div>
                  </div>
                );
              })}
            </React.Fragment>
            )
            :(
              <div className="alert alert-danger container text-center">
                <h1>Search Not Found</h1>
              </div>
            )
          }
        </React.Fragment>
      </React.Fragment>
    );
  }
}
export default NavBar;
