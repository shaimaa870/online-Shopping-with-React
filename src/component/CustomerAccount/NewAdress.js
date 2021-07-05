import axios from "axios";
import React, { Component } from "react";
import AuthService from "../Services/auth.service";
class NewAdress extends Component {
  state = { 
    firstName:"",
    lastName:"",
    phoneNumber:"",
    Adress:"",
    city:"",
    country:"",
    Street:""
   }
   
  AdressEdit=()=>{
   let  newObj={
      //  firstName:this.state.firstName,
      //  lastName:this.state.lastName,
      //  phoneNumber:this.state.phoneNumber,
      street:this.state.street,
       city:this.state.city,
       country:this.state.country
     }
     this.props.onEdit(newObj);
    // console.log(newObj)
    window.location.reload();

   }
 
  
  render() { 
    console.log(this.state.firstName,this.props.Adres)
      return (
          <React.Fragment>
              {/* <div className="padding">
<div className="row">
  <div className="container-fluid d-flex justify-content-center">
    <div className="col-sm-8 col-md-6"> */}
    <div className="card col-md-12" style={{marginTop: 10, padding: 10} }>
     
        <div className="card-header">
          <div className="row">
            <div className="col-md-6"> <h6>Add New Address</h6> </div>
          </div>
        </div>
        <div className="card-body" style={{height:450}}>
          {/* <div className="row">
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
          <br /> */}
          {/* --------------------------------------------------------- */}
          {/* <div className="row">
          <div className="input-group col-lg-6 mb-4">
              <div className="input-group-prepend">
                <span className="input-group-text bg-white px-4 border-md border-right-0">
                  <i className="fa fa-phone-square text-muted" />
                </span>
              </div>
              <select id="countryCode" name="countryCode" style={{maxWidth: 80}} className="custom-select form-control bg-white border-left-0 border-md h-100 font-weight-bold text-muted">
                <option value>+20</option>
               
              </select>
              <input id="phoneNumber" type="tel" name="phone" placeholder="Phone Number" className="form-control bg-white border-md border-left-0 pl-3"   value={this.state.phoneNumber} onChange={(e)=>this.setState({phoneNumber:e.target.value})}/>
            </div>
            <div className="input-group col-lg-6 mb-4">
              <div className="input-group-prepend">
                <span className="input-group-text bg-white px-4 border-md border-right-0">
                <i class="fa fa-address-card" aria-hidden="true"/>
                </span>
              </div>
              <input id="Adress" type="Adress" name="Adress" placeholder="Adress Address" className="form-control bg-white border-left-0 border-md"  value={this.state.Adress} onChange={(e)=>this.setState({Adress:e.target.value})}/>
            </div>
          
          </div>
          <br /> */}
          {/* --------------------------------------------------------- */}
          <div className="row">
          
            
    
             
               <input id="Region" type="Region" name="Region" placeholder="Region"  className="form-control bg-white  border-md mt-3 "    
                 value={this.state.country} onChange={(e)=>this.setState({country:e.target.value})}/>
           </div>      
           <br/>
            <div  className="row">
               <input id="City" type="City" name="City" placeholder="City " className="form-control bg-white  border-md mt-3"  value={this.state.city} onChange={(e)=>this.setState({city:e.target.value})}/>
            </div>
            <br />
            <div className="row">
            <input id="street" type="street" name="street" placeholder="street"  className="form-control bg-white  border-md mt-3 "    
                 value={this.state.street} onChange={(e)=>this.setState({street:e.target.value})}/>
            </div>
        
          <br />
          <div className="form-group"> 
            <button type="button" onClick={this.AdressEdit}className="btn btn-warning btn-lg btn-block mt-5" style={{backgroundColor: 'orange'}}>Save</button>
          </div>
        </div>
      </div>
   
 

          </React.Fragment>
        );
  }
}

export default NewAdress;