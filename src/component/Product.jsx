import React, { Component } from "react";
import axios from "axios";
import authHeader from "./Services/auth-header";
import { Link} from "react-router-dom";
import "../Styles/Product.css";
import AuthService from "./Services/auth.service";
import "../Styles/Product.css";
import Productreviews from "./productreviews";
import { toast, ToastContainer}from "react-toastify";
class Product extends Component {
  state = {
    product: {},
    prodreviews:[],
    prodimgs: "",
    mainimg: "",
    user: JSON.parse(localStorage.getItem("user")),
    IsSaved:false
  };

  SaveItems = async() => {
    //console.log(localStorage.getItem("user").id, this.state.Product.id);
    if (AuthService.getCurrentUser()) {
      let _id = AuthService.getCurrentUser().id;
      let _PId = this.state.product.id;
      console.log(_PId);
      if(!this.state.IsSaved)
      {
        axios
          .post(
            "https://localhost:44340/api/UserBagApi/SetProductToSavedItems",
            { UserId: _id, ProductId: _PId },
            { headers: authHeader() }
          )
          .then((res) => {
            toast.success(`Changed To Saved Items`);
           this.changeSavedColor();
          });
      }
      else
      {
        axios
          .delete(
            "https://localhost:44340/api/UserBagApi/DeleteSavedItem/"+_id+"/"+_PId,
            null,
            { headers: authHeader() }
          )
          .then(async (res) => {
            toast.success(`Removed From Saved Items`);
           await this.changeSavedColor();
          });
      }
    }
  };

  findprod = (_id) => {
    axios
      .get("https://localhost:44340/api/ProductsAPi/" + _id)
      .then((res) => {
        //  this.setState({product:res.data,prodimgs:res.data.productImages[0].image})
        this.setState({ product: res.data });
        // console.log("data",res.data,"prod",res.data.productImages)
      })
      .catch((err) => console.log(err));
  };

  changeSavedColor = async () => {
    if(JSON.parse(localStorage.getItem('user'))){
    let x = await axios.get("https://localhost:44340/api/UserBagApi/IsSaved/"+ JSON.parse(localStorage.getItem('user')).id +"/"+this.state.product.id)
    await this.setState({IsSaved:x.data})
  }}

  getprodreviews = (_id) => {
    axios
      .get("https://localhost:44340/api/ProductsAPi/GetAllReviewsOfProduct/" + _id)
      .then((res) => {
      this.setState({ prodreviews: res.data });
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
 async componentDidMount() {
 await   this.findprod(this.props.match.params.id);
 await   this.getprodreviews(this.props.match.params.id);
  await  this.changeSavedColor();

  }
  render() {
     //console.log(this.state.product);
    // console.log(this.props.match.params)
    let nprice;
    this.state.product.discount == 0 || this.state.product.discount == null
      ? (nprice = this.state.product.price)
      : (nprice = this.state.product.price * (1 - this.state.product.discount));
  
    return (
      <React.Fragment>
        <ToastContainer/>
        <div className="container mt-2">
          <div className="row m-0 p-0"
          style={{
            background:
              "url('https://www.almrsal.com/wp-content/uploads/2015/01/shopping.jpg') fixed  no-repeat",
              // backgroundPosition: "left",
              // backgroundRepeat: "no-repeat",
              // backgroundAttachment: "inherit",
              // backgroundOrigin: "border-box",
              // backgroundClip: "border-box", 
              // backgroundColor: "initial",
              // backgroundSize: "contain",
              // backgroundSize: "cover",
              backgroundPositionX: "260px",
              // backgroundPositionY: "0px",

          }}
          >
            <div className="col-12 rounded">
              <div className="row m-0 p-0 mt-3">
                {/*product section */}
                {/* left */}
                <div className="col-12 col-md-5 p-0">
                  {/*image box */}
                  {/* Main Image */}
                  <div>
                    <img
                      src={this.state.product.image ? `https://localhost:44340/${this.state.product.image}`: ""}
                      id="basicImage"
                      width="100%"
                      height="280px"
                      className="rounded"
                      alt={this.state.product.productName}
                    />
                  </div>
                  {/* 4 Images */}
                </div>
                {/* Right */}
                <div
                  className="col-12 col-md-7"
                  style={{ fontFamily: "cursive " }}
                >
                  {/*information box */}
                  <div className="row justify-content-between p-0 m-0">
                    <div className="d-flex justify-content-start badge badge-danger text-light " style={{height:"20px"}}>
                    <Link to={`/chat/${this.state.product.sellerId}`} style={{color:"white"}}> chat with seller </Link>
                    </div>
                    <div className="d-flex justify-content-end heart">
                      <button
                        className="btn mb-2 text-danger col-12"
                        onClick={this.SaveItems}
                        // style={{ backgroundColor: "rgb(0, 139, 182)" }}
                      >
                        <i className={this.state.IsSaved === true ? "fa fa-heart fa-2x text-danger " : "fa fa-heart fa-2x text-primary"}
                        
                        ></i>
                      </button>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-weight-bold">{this.state.product.productName}</h3>
                  </div>
                  {/* <div className=""
                  style={{
                    width:"50px",
                    // whiteSpace: "nowrap",
                    // overflow: "hidden",
                    // textOverflow: "ellipsis",
                }}
                  >
                    <span style={{width:"100px"}}>{this.state.product.description}</h5>
                  </div> */}
                  <div className="align-items-center mt-2 text-left" style={{color:"gold"}}>
                    <span>{this.rate(this.state.product.rating)}</span>
                  </div>
                  <hr className="m-0 mb-2 mt-2 d-md-block" />
                  <div className="p-0 text-left">
                    <p className="mb-0 badge badge-pill oranged text-white p-3 font-weight-bold"
                    >
                      EGP <span>{Math.ceil(nprice)}</span>
                    </p>

                    {this.state.product.discount > 0 && (
                      <span className="sp2 m-1 text-danger" style={{ fontSize: "17px" }}>
                        <span>Egp</span>
                        <span>{Math.ceil(this.state.product.price)}</span>
                      </span>
                    )}
                    {this.state.product.discount > 0 && (
                      <span className="sp3" style={{ fontSize: "17px" }}>
                        <span>Saving :</span>
                        <span>
                          {
                            Math.floor( this.state.product.discount*100)}{" "}
                            
                        </span>
                      </span>
                    )}
                  </div>
                  <div className="text-left text-white cursor col-12 row m-0 p-2">
                    <button
                      style={{ backgroundColor: "rgb(0, 139, 182)" }}
                      onClick={() => this.props.onAdd(this.state.product.id)}
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
                  className="card mt-2 mb-2 p-2  item-box-blog text-left"
                  style={{backgroundColor:"unset",boxShadow:"none"}}
                  id="details"
                >
                  <header className="h">
                    <h2 className="">product details</h2>
                  </header>
                  <ul style={{ fontFamily: "cursive " }}>
                    <li>
                      <div className="">
                        <span style={{ fontWeight: "700" }}>Name : </span>
                        {this.state.product.productName}
                      </div>
                    </li>
                    <li>
                      <div className="w-50">
                        <span style={{ fontWeight: "700" }}>
                          Description :{" "}
                        </span>
                        {this.state.product.description}
                      </div>
                    </li>
                    <li>
                      <div className="">
                        <span style={{ fontWeight: "700" }}>Model : </span>
                        {this.state.product.model}
                      </div>
                    </li>
                    <li>
                      <div className="">
                        <span style={{ fontWeight: "700" }}>Color : </span>
                        <span style={{ color: this.state.product.color }}>
                          {this.state.product.color}
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="">
                        <span style={{ fontWeight: "700" }}>Material : </span>
                        {this.state.product.material}
                      </div>
                    </li>
                    <li>
                      <div className="">
                        <span style={{ fontWeight: "700" }}>manufacture : </span>
                        {this.state.product.manufacture}
                      </div>
                    </li>
                    <li>
                      <div className="">
                        <span style={{ fontWeight: "700" }}>Size : </span>
                        {this.state.product.size == 0 ? "NotApplicable"
                         :(this.state.product.size == 1 ? "M"
                            :(this.state.product.size == 2 ? "L"
                              :(this.state.product.size == 3 ? "XL"
                                :( this.state.product.size == 4 ? "XXL"
                                  :(this.state.product.size == 5 ? "XXXL":"Spesific")
                                )
                              )
                            )
                          )
                        }
                      </div>
                    </li>
                    <li>
                      <div className="">
                        <span style={{ fontWeight: "700" }}>Price : </span>
                        EGP {this.state.product.price}
                      </div>
                    </li>
                    <li>
                      {" "}
                      <div className="">
                        <span style={{ fontWeight: "700" }}>Shipped From </span>
                        <span>
                          {" "}
                          {this.state.product.ship == 1 ? "Egypt" : "Abroad"}
                        </span>
                      </div>
                    </li>
                  </ul>


                </div>
                <br/>
              </div>
            </div>
          </div>
          {this.state.prodreviews.length>0 && <Productreviews prodid={this.state.product.id} ratefn={this.rate}  productreviews={this.state.prodreviews}/>}

        </div>

        {/*DELIVERY Details Modal */}
      </React.Fragment>
    );
  }
}

export default Product;
