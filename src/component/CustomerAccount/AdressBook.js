import React, { Component } from 'react';
import {NavLink, Route ,BrowserRouter as Router,Switch} from 'react-router-dom';


class AdressBook extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
               
  
    <div className="container-fluid d-flex justify-content-center">
    <div className="card col-md-12" style={{marginTop:5, padding: 5}}>
          <div className="card-header">
            <div className="row">
              <div className="col-md-6"> <h3>Address Book</h3> </div>
            </div>
          </div>
          {/*  --------------------------OpenOrders---------------------- */}
          <div className="row" style={{textAlign: 'center', marginTop: 60}}>
            <div className="container mt-12" id="OpenOrders">
              <img src="../img/addressbook.jpeg" width="100px" height="90px" /><br /> <br />
              <div className=" form col-lg-12 ">
                <h6><i>You have not added any address yet!</i></h6><br />
                <p><i>Add your shipping addresses here for a fast purchase experience!
                    You will be able to add, modify or delete them at any time.</i> </p> 
                <a  href="/Account/NewAdress" type="button" className="btn btn-warning " style={{color: 'white', marginTop: 30}}><b>Add New Adress </b></a>
              </div>
            </div>
          </div> 
          <br />
        </div>
      </div>
 
  


            </React.Fragment>
         );
    }
}
 
export default AdressBook;