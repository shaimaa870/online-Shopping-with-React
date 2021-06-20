import React, { Component } from 'react';

class Orders extends Component {
    state = {  }
    render() { 
        return (
            <div className="padding">
            <div className="row">
              <div className="container-fluid d-flex justify-content-center">
                <div className="col-sm-8 col-md-6" style={{marginTop: 50}}>
                  <div className="card">
                    <div className="card-header">
                      <div className="row">
                        <div className="col-md-6"> <h3>Order</h3> </div>
                      </div>
                    </div>
                    <nav className="navbar navbar-expand ">
                      <div className="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent" style={{textAlign: 'center'}}>
                        <ul className="navbar-nav text-right">
                          <li className="nav-item active">
                            <a className="nav-link text-warning" href="#">Open Orders (0)</a>
                          </li>
                          <li className="nav-item active">
                            <a className="nav-link text-warning" href="#">Closed Orders (0)</a>
                          </li>
                        </ul>
                      </div>
                    </nav>
                    {/*  --------------------------OpenOrders---------------------- */}
                    <div className="row" style={{textAlign: 'center', marginTop: 60}}>
                      <div className="container mt-12" id="OpenOrders">
                        <img src="./img/ordercart.png" width="120px" height="120px" /><br /> <br />
                        <div className=" form col-lg-12 ">
                          <h6><i>You have placed no orders yet!</i></h6><br />
                          <p><i>All your orders will be saved here for you to access their state anytime.</i></p> 
                          <button type="button" className="btn btn-warning " style={{color: 'white', marginTop: 30}}> <b>Continue Shopping</b></button>
                        </div>
                      </div>
                    </div> 
                    <br />
                    {/*-------------------------ClosedOrders-------------------*/}
                    <div className="row" style={{textAlign: 'center', marginTop: 60}}>
                      <div className="container mt-12 " id="ClosedOrders">
                        <img src="./img/ordercart.png" width="120px" height="120px" /><br /> <br />
                        <div className=" form  col-lg-12 " style={{textAlign: 'center'}}>
                          <h6> <i>No Closed Orders to Display </i></h6>   <br />
                          <p> <i>All your Closed Orders will be saved here.</i></p>
                          <button type="button" className="btn btn-warning " style={{color: 'white', marginTop: 30}}><b>Start Shopping </b></button>
                        </div>
                      </div>
                    </div> 
                  </div>
                </div>
              </div>
            </div>
          </div>
          
            );
        }
    }
     
    export default Orders