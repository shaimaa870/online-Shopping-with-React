import React, { Component } from "react";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Closed from "./ClosedOrders";
import Opened from "./OpenedOrders";
import AuthService from "../Services/auth.service";
import axios from 'axios';
class Orders extends Component {


  render() {
   // console.log(this.props.ondelievery,"hhh",this.props.doneorders)
    return (
      <React.Fragment>
        <div className="col-sm-8 col-md-12" style={{ marginTop: 10 }}>
          <div className="card">
            <div className="card-header">
              <div className="row">
                <div className="col-md-6">
                  {" "}
                  <h3>Order</h3>{" "}
                </div>
              </div>
            </div>
            <nav className="navbar navbar-expand ">
              <div
                className="collapse navbar-collapse flex-grow-0"
                id="navbarSupportedContent"
                style={{ textAlign: "center" }}
              >
                <ul className="navbar-nav text-right">
                  <Router>
                    <li className="nav-item active">
                      <a
                        className="nav-link  text-uppercase"
                        href="/Account/Orders/Opened"
                      >
                       {(this.props.ondelievery) && <span> ondelievery ({this.props.ondelievery.length}) </span>}
                      </a>
                    </li>
                    <li className="nav-item ">
                      <a
                        className="nav-link  text-uppercase"
                        href="/Account/Orders/Closed"
                      >
                        {(this.props.doneorders) && <span> Orders Done ({this.props.doneorders.length})</span>}
                      </a>
                    </li>
                  </Router>
                </ul>
              </div>
            </nav>

            <div className="row" style={{ textAlign: "center", marginTop: 60 }}>
              <Router>
                <Switch>
                  <Opened path="/Account/Orders/Opened" ondelievery={this.props.ondelievery}/>
                  <Closed
                    path="/Account/Orders/Closed"
                    ondone={this.props.doneorders}
                  />
                </Switch>
              </Router>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Orders;
