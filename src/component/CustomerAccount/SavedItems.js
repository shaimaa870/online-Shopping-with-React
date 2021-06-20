import React, { Component } from "react";
import AuthService from "../Services/auth.service";
import axios from 'axios';
import authHeader from   '../Services/auth-header';
class SavedItems extends Component {
  state = {
    SavedItems: [],
  };
  getsavedItems = () => {
    if (AuthService.getCurrentUser()) {
      axios
        .get(
          "https://localhost:44340/api/UserBagApi/GetProductFromSavedItems/"+
            AuthService.getCurrentUser().id,{ headers: authHeader() }
        )
        .then(res => {
         this.setState({
            SavedItems:res.data
          });
         // console.log( res.data);
        });
    }
  };
  removesavedItems = (_pid) => {
   //console.log("pid",_pid,AuthService.getCurrentUser().id)
    if (AuthService.getCurrentUser()) {
      axios.delete(
          "https://localhost:44340/api/UserBagApi/DeleteSavedItem/"+
            AuthService.getCurrentUser().id+"?ProductId="+_pid,{ headers: authHeader() }
        )
        .then(
          window.location.reload()
        )
    }
  };
  componentDidMount(){
    this.getsavedItems();
  }

  render() {
    // console.log(AuthService.getCurrentUser().id);
    if(this.state.SavedItems.length===0||this.state.SavedItems===undefined){
    return (
      <React.Fragment>
        <div className="col-sm-8 col-md-12" style={{ marginTop: 10 }}>
          <div className="card">
            <div className="card-header">
              <div className="row">
                <div className="col-md-6">
                  {" "}
                  <h3>Saved Item</h3>{" "}
                </div>
              </div>
            </div>
            {/*  --------------------------OpenOrders---------------------- */}
            <div className="row" style={{ textAlign: "center", marginTop: 60 }}>
              <div className="container mt-12" id="OpenOrders">
                <img src="../img/saveditems.png" width="80px" height="70px" />
                <br /> <br />
                <div className=" form col-lg-12 ">
                  <h6>
                    <i>You haven’t saved an item yet!</i>
                  </h6>
                  <br />
                  <p>
                    <i>
                      {" "}
                      Found something you like? Tap on the heart shaped icon
                      next to the item to add it to your wishlist! All your
                      saved items will appear here.
                    </i>
                  </p>
                  <a
                  href="/home"
                   
                    className="btn btn-warning "
                    style={{ color: "white", marginTop: 30 }}
                  >
                    <b>Continue Shopping </b>
                  </a>
                </div>
              </div>
            </div>
            <br />
        
          
          </div>
        </div>
      </React.Fragment>
    );
  }
else{

  return (
    <React.Fragment>
      <div className="container row ">
      {
        this.state.SavedItems.map((c,i)=>
         <div key={i} className="col-12" style={{ marginTop: 20 }}>
              <div
                className="col-sm-12 "
                style={{ marginTop: 10, display: "inline-block" }}
              >
                <div className="card h-100 " style={{ width: "100%" }}>
                  <div className="card-body">
                    <div style={{ float: "left" }}>
                      <img
                        src="./img/saveditems.png"
                        style={{ display: "inline-block" }}
                        width="80px"
                        height="70px"
                      />
                      <span
                        className=" form col-lg-12 "
                        style={{ display: "inline-block" }}
                      >
                        <i>
                          {" "}
                          {c.description}
                        </i>
                      </span>
                      <p> {c.price}EGP </p>
                      <p>
                      {parseInt(c.discount) > 0 && (
                      <div className="mt-2 p-0">
                        <span className="sp  ">
                          (Egp{" "}
                          <span>
                            {parseInt(
                              parseInt(c.price) *
                                (1 + parseInt(c.discount) * 0.01)
                            )}
                          </span>
                          )
                        </span>
                        <span className="alert text-danger col-1 p-0">
                          -{c.discount}%
                        </span>
                      </div>
                    )}{" "}
                      </p>
                    </div>
                    <div style={{ float: "right" }}>
                      <button
                        type="button"
                        className="btn btn-warning "
                        style={{ color: "white", marginTop: 30 }}
                      >
                        {" "}
                        <b>Buy Now</b>
                      </button>
                      <button
                        type="button"
                        className="btn btn-warning ml-2 "
                        style={{ color: "white", marginTop: 30 }}
                        onClick={()=>this.removesavedItems(c.productId)}
                      >
                      
                        <b>
                          <i className="fas fa-trash-alt" />
                          &nbsp; Remove
                        </b>
                      </button>
                      ‏
                    </div>
                  </div>
                </div>
              </div>
            </div> 
        )
      }
      </div>
    </React.Fragment>
  )
}
  }
}
export default SavedItems;
