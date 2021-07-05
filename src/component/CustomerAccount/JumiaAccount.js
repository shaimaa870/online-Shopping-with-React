import React, { Component } from 'react';
import { NavLink,Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Index from './AccountIndex';
import ChangePssword from './ChangePassword'
import RecentlyViewed from './Recentlyviews';
import SavedItems from './SavedItems';
import PendingReviews from './PendingReviews';
import Orders from './Orders';
import AccountDetails from './AccountDetails';
import AdressBook from './AdressBook';
import JumiaCredit from './JumiaCredit';
import NewAdress from './NewAdress';
import Inbox from './Inbox';
import axios from 'axios';
import AuthService from '../Services/auth.service';
class JumiaAccount extends Component {
  state = {
    customer: {},
    Adress: {},

    doneorders: [],
    ondelievery: [],
    allordersprods: []

  }
  getAllProductsWithCustomerId = async () => {
    if (AuthService.getCurrentUser().id) {
      axios
        .get(
          "https://localhost:44340/api/OrderAPi/getAllProductsWithCustomerId/" +
          AuthService.getCurrentUser().id)
        .then((res) => {
          this.setState({ allordersprods: res.data });
          // console.log(res.data);
        });
    }

  }
  getdoneorders = async () => {
    if (AuthService.getCurrentUser().id) {
      axios
        .get(
          "https://localhost:44340/api/OrderApi/getOrderProductsInStatus/" +
          AuthService.getCurrentUser().id +
          "/" +
          2
        )
        .then((res) => {
          this.setState({ doneorders: res.data });
          // console.log(res.data);
        });
    }
  };

  getondelieveryorders = async () => {
    if (AuthService.getCurrentUser().id) {
      axios
        .get(
          "https://localhost:44340/api/OrderApi/getOrderProductsInStatus/" +
          AuthService.getCurrentUser().id +
          "/" +
          1
        )
        .then((res) => {
          this.setState({ ondelievery: res.data });
          //console.log(res.data);
        });
    }
  };

  getcustomerdeatails = async () => {
    if (AuthService.getCurrentUser().id) {
      axios.get("https://localhost:44340/api/CustomersApi/" + AuthService.getCurrentUser().id).then(res =>
        this.setState({ customer: res.data })
      )
    }
  }
  // getchatmessage=async()=>{
  //   if(AuthService.getCurrentUser().id){
  //     axios.get("https://localhost:44340/api/ChatHubs/"+AuthService.getCurrentUser().id+"/12").then(res=>
  //     this.setState({messages:res.data})
  //     )

  // }}
  // sendmessage=async(_text)=>{
  //   if(AuthService.getCurrentUser().id){
  //     axios.post("https://localhost:44340/api/ChatHubs/",{"UserName":this.state.customer.UserName,
  //     "Text":_text,
  //     "UserID":AuthService.getCurrentUser().id,
  //     "sellerId":12,
  //     "SenderId":AuthService.getCurrentUser().id
  //   }).then(
  //     window.location.reload()
  //     //this.setState({messages:res.data})
  //     )

  // }}
  editcustomerdata = async (obj) => {
    if (AuthService.getCurrentUser().id) {
      axios.put("https://localhost:44340/api/CustomersApi/" + AuthService.getCurrentUser().id, obj).then(
        //this.setState({customer:res.data})
      )
    }
  }
  editAdressofcustomer = async (obj) => {
    if (AuthService.getCurrentUser().id) {
      axios.put("https://localhost:44340/api/CustomersApi/EditUserAddress/" + AuthService.getCurrentUser().id, obj).then(

      )
    }
  }
  async componentDidMount() {
    await this.getcustomerdeatails();
    // await this.getchatmessage();
    await this.getdoneorders();
    await this.getondelieveryorders();
    await this.getAllProductsWithCustomerId();
    await this.editAdressofcustomer();



  }
  render() {
    //console.log(this.state.messages);
    return (
      <React.Fragment>

        <div className="header" style={{ marginTop: 20, marginLeft: 20 }}>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-3">
                <nav className="navbar  bg-white">
                  <Router>
                    <ul className="navbar-nav  w-100 ">
                      <li className="nav-item ">
                        <a href="/Account/Index" id="myaccount"  className="nav-link">
                          <i className="fa fa-user" aria-hidden="true" />&nbsp;  My Jumia Accounnt</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/Account/Orders/Opened"><i className="fa fa-shopping-bag" />&nbsp;   Orders</a>
                        <a className="nav-link" href="/Account/Inbox"><i class="far fa-envelope" />&nbsp;   Inbox </a>

                        {/* <a className="nav-link" href="/Account/JumiaCredit"><i class="fas fa-credit-card"/> &nbsp; Jumia Credit</a> */}
                        <a className="nav-link" href="/Account/wishlist"><i className="fa fa-heart" aria-hidden="true" />&nbsp; Saved
                          Items</a>

                      </li>
                      <div className="dropdown-divider" />
                      <li className="nav-item">
                        <a className="nav-link" href="/Account/AccountDetails">Details</a>
                        <a className="nav-link" href="/Account/AdressBook">Adress Book</a>
                        <a className="nav-link" href="/Account/ChangePass">Change Password</a>


                      </li>
                      <div className="dropdown-divider" />
                      <li className="nav-item  text text-center ">
                        <button className="btn btn" onClick={AuthService.logout} style={{ backgroundColor: 'orange' }}>Log out</button>
                      </li>
                    </ul>
                  </Router>
                </nav>
                
              </div>
              <div className="row col-md-8" style={{ backgroundColor: 'white', marginLeft: 20 }}>
                {/* routes for index */}
                <Router>
                  <Switch>
                    <Index cust={this.state.customer} path="/Account/Index" />
                    <ChangePssword path="/Account/ChangePass" />
                    <SavedItems path="/Account/wishlist" />

                    <Orders path="/Account/Orders/" doneorders={this.state.doneorders}
                      ondelievery={this.state.ondelievery} />
                    <JumiaCredit path='/Account/JumiaCredit' />
                    <NewAdress Adres={this.state.Adress} onEdit={this.editAdressofcustomer} path='/Account/NewAdress' />
                    <AccountDetails cust={this.state.customer} onEdit={this.editcustomerdata} path="/Account/AccountDetails" />
                    <RecentlyViewed path="Account/RecentlyViewed" />
                    <AdressBook path="/Account/AdressBook" />
                    <Inbox path="/Account/Inbox" mess={this.state.messages} sendmess={this.sendmessage}
                    />
                  </Switch>
                </Router>
                {/* <Route path="/Account/Index" Component={Index} exact/>
        <Route path="/Account/ChangePass" Component={ChangePssword} exact/> */}


              </div>
              {/*       carousel               */}
              <div className="container-fluid  " style={{ backgroundColor: 'white', margin: 30 }}>
                <RecentlyViewed path="/Account/" />
              </div>
            </div>
          </div>
        </div>

      </React.Fragment>)
  }
}
export default JumiaAccount;