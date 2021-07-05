import axios from "axios";
import React, { Component } from "react";
import { toast } from "react-toastify";
import AuthService from "../Services/auth.service";
class ChangePssword extends Component {
  state = {
    CurrentPassword: "",
    NewPassword: "",

    RetypeNewPassword: "",
  };
  changePassword = async () => {
  
   
    axios
        .post(
          "https://localhost:44340/api/CustomersApi/"+this.state.CurrentPassword+"/"+this.state.NewPassword,{"Id":
          AuthService.getCurrentUser().id}
        ).then(res=>{
          if(res.data.errors){
            toast.error("Incorrect old password")
            console.log(res.data)

          }else{
        
          toast.success("changed successfully")

          window.location.reload()
          console.log(res.data.succeeded)
        }
        }
          )
        
        
  }
       

    //https://localhost:44340/api/CustomersApi/"+AuthService.getCurrentUser().id+"?newpassword="+this.state.NewPassword
 
  render() {
    return (
      <React.Fragment>
        <div className="card col-md-12" style={{ marginTop: 10, padding: 10 }}>
          <div className="card-header">
            <div className="row">
              <div className="col-md-12">
                {" "}
                <h3>Change Password</h3>{" "}
              </div>
            </div>
          </div>
          <div className="card-body" style={{ height: 400 }}>
            <div className="row">
              <div className="container mt-4 ">
                <div className=" form-check-inline col-lg-8 ">
                  <input
                    className="input"
                    id="CurrentPassword"
                    type="password"
                    placeholder="Current Password"
                    onChange={(e) =>
                      this.setState({ CurrentPassword: e.target.value })
                    }
                  />
                  {/* <span className="fa fa-fw fa-eye field-icon toggle-password" /> */}
                </div>
              </div>
            </div>
            <br />
            {/* --------------------------------------------------------- */}
            <div className="row">
              <div className="container mt-4  ">
                <div className=" form-check-inline col-lg-8 ">
                  <input
                    className="input"
                    id="NewPassword"
                    type="password"
                    placeholder="New Password"
                    onChange={(e) =>
                      this.setState({ NewPassword: e.target.value })
                    }
                  />
                  {/* <span className="fa fa-fw fa-eye field-icon toggle-password" /> */}
                </div>
              </div>
            </div>
            <br />
            {/* --------------------------------------------------------- */}
            <div className="row">
              <div className="container mt-4 ">
                <div className=" form-check-inline col-lg-8 ">
                  <input
                    className="input"
                    id="RetypeNewPassword"
                    type="password"
                    placeholder="Retype New Password"
                    onChange={(e) =>
                      this.setState({ RetypeNewPassword: e.target.value })
                    }
                  />
                  {/* <span className="fa fa-fw fa-eye field-icon toggle-password" /> */}
                </div>
              </div>
            </div>
            <br />
            {/*         ---------------------------------------------*/}
            <div className="form-group  mt-4">
              <button
                type="button"
                className="btn btn-warning btn-lg btn-block"
                style={{ color: "white" }}
                onClick={this.changePassword}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default ChangePssword;
