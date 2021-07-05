import React, { Component } from 'react';
import axios from 'axios';
import AuthService from '../Services/auth.service';
class AccountDetails extends Component {
    state = { 
      firstName:"",
      lastName:"",
      email:"",
      phoneNumber:""
      // firstName:this.props.cust.firstName,
      // lastName:this.props.cust.lastName,
      // email:this.props.cust.email,
      // phoneNumber:this.props.cust.phoneNumber
     }
     getcustomerdeatails=async()=>{
      if(AuthService.getCurrentUser().id){
      axios.get("https://localhost:44340/api/CustomersApi/"+AuthService.getCurrentUser().id).then(res=>
      this.setState({firstName:res.data.firstName,
        lastName:res.data.lastName,
        email:res.data.email,
        phoneNumber:res.data.phoneNumber
      })
      )
    }}
     custEdit=()=>{
     let  newObj={
         firstName:this.state.firstName,
         lastName:this.state.lastName,
         email:this.state.email,
         phoneNumber:this.state.phoneNumber
       }
       this.props.onEdit(newObj);
      // console.log(newObj)
      window.location.reload();

     }
    async componentDidMount(){
      this.getcustomerdeatails();

     }
    
    render() { 
      console.log(this.state.firstName,this.props.cust)
        return (
            <React.Fragment>
                {/* <div className="padding">
  <div className="row">
    <div className="container-fluid d-flex justify-content-center">
      <div className="col-sm-8 col-md-6"> */}
      <div className="card col-md-12" style={{marginTop: 10, padding: 10} }>
       
          <div className="card-header">
            <div className="row">
              <div className="col-md-6"> <span>Details</span> </div>
            </div>
          </div>
          <div className="card-body" style={{height:300}}>
            <div className="row">
              <div className="input-group col-lg-6 mb-4">
                <div className="input-group-prepend">
                  <span className="input-group-text bg-white px-4 border-md border-right-0">
                    <i className="fa fa-user text-muted" />
                  </span>
                </div>
                <input id="firstName" type="text" name="firstName" placeholder="First Name" className="form-control bg-white border-left-0 border-md" value={this.state.firstName} onChange={(e)=>this.setState({firstName:e.target.value})}  />
              </div>
              <div className="input-group col-lg-6 mb-4">
                <div className="input-group-prepend">
                  <span className="input-group-text bg-white px-4 border-md border-right-0">
                    <i className="fa fa-user text-muted" />
                  </span>
                </div>
                <input id="lastName" type="text" name="lastName" placeholder="Last Name" className="form-control bg-white border-left-0 border-md"  value={this.state.lastName} onChange={(e)=>this.setState({lastName:e.target.value})}/>
              </div>
            </div>
            <br />
            {/* --------------------------------------------------------- */}
            <div className="row">
              <div className="input-group col-lg-6 mb-4">
                <div className="input-group-prepend">
                  <span className="input-group-text bg-white px-4 border-md border-right-0">
                    <i className="fa fa-envelope text-muted" />
                  </span>
                </div>
                <input id="email" type="email" name="email" placeholder="Email Address" className="form-control bg-white border-left-0 border-md"  value={this.state.email} onChange={(e)=>this.setState({Email:e.target.value})}/>
              </div>
              <div className="input-group col-lg-6 mb-4">
                <div className="input-group-prepend">
                  <span className="input-group-text bg-white px-4 border-md border-right-0">
                    <i className="fa fa-phone-square text-muted" />
                  </span>
                </div>
                <select id="countryCode" name="countryCode" style={{maxWidth: 80}} className="custom-select form-control bg-white border-left-0 border-md h-100 font-weight-bold text-muted">
                  <option value>+20</option>
                 
                </select>
                <input id="phoneNumber" type="tel" name="phone" placeholder="Phone Number" className="form-control bg-white border-md border-left-0 pl-3"   value={this.state.phoneNumber} onChange={(e)=>this.setState({PhoneNumber:e.target.value})}/>
              </div>
            </div>
            <br />
            {/* --------------------------------------------------------- */}
           
           
            <br />
            <div className="form-group"> 
              <button type="button" onClick={this.custEdit}className="btn btn-warning btn-lg btn-block">Save</button>
            </div>
          </div>
        </div>
     
   

            </React.Fragment>
          );
    }
}
 
export default AccountDetails;