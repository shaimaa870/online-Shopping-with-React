import React, { Component } from "react";
import "../Styles/HelpCenter.css";
class HelpCenter extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="container text-center">
          {/* Jumia Customer Care */}
          <div className="m-0 p-3 text-warning">
            <img src="https://static.jumia.com.eg/cms/37-20/Return-Refund/help-center-customer-carem.png" />
            <h1 className="h">Jumia Customer Care</h1>
          </div>
          {/* How can we help you? */}
          <div className="row  m-0">
            <h5 className="col-12">How can we help you?</h5>
            {/* Describe your issue input */}
            <div
              className="input-group mb-4 rounded"
              style={{"width":"75%", "margin": "1px auto","boxShadow":"1px 1px 10px gray, -1px -1px 10px gray" }}
            >
              <span className="input-group-prepend">
                <i className="input-group-text fa fa-search fa-2x myicon"></i>
              </span>
              <input
                type="search"
                className="form-control"
                placeholder="Describe your issue"
                style={{"height":"50px","width":"10px"}}
              />
            </div>
          </div>
          {/* links section 1 */}
          <div className="row m-0 col-12">
            <a href="#" className="divlink col-md-3 col-6 ">
              <div className="links mt-3 p-1 rounded">
                <i className="fa fa-truck-moving fa-4x mb-2 myicon"></i>
                <p>Place & Track Order</p>
              </div>
            </a>
            <a href="#" className="divlink col-md-3 col-6">
              <div className="links mt-3 p-1 rounded">
                <i className="fa fa-box-open fa-4x mb-2 myicon"></i>
                <p>Order Cancellation</p>
              </div>
            </a>
            <a href="#" className="divlink col-md-3 col-6">
              <div className="links mt-3 p-1 rounded">
                <i className="fa fa-undo fa-4x mb-2 myicon"></i>
                <p>Returns & Refunds</p>
              </div>
            </a>
            <a href="#" className="divlink col-md-3 col-6">
              <div className="links mt-3 p-1 rounded">
                <i className="fa fa-hand-holding-usd fa-4x mb-2 myicon"></i>
                <p>Payment & Jumia Account</p>
              </div>
            </a>
          </div>
        </div>
        {/* links section 2 */}
        <div className="row m-0 mt-4 mb-4">
          <a href="#" className="divlink col-md-3 col-6">
            <div className="links2 mt-3 p-1 rounded">
              <img src="https://eg.jumia.is/cms/37-20/Return-Refund/jumia-global.png" />
              <div className="m-1">
                Get millions of products coming from abroad at incredible prices
              </div>
              <div className="text-uppercase btn btn-warning">Learn more</div>
            </div>
          </a>
          <a href="#" className="divlink col-md-3 col-6">
            <div className="links2 mt-3 p-1 rounded">
              <img src="https://eg.jumia.is/cms/37-20/Return-Refund/jumia-pay.png" />
              <div className="m-1">
                Get millions of products coming from abroad at incredible prices
              </div>
              <div className="text-uppercase btn btn-warning">Learn more</div>
            </div>
          </a>
          <a href="#" className="divlink col-md-3 col-6">
            <div className="links2 mt-3 p-1 rounded">
              <img src="https://eg.jumia.is/cms/37-20/Return-Refund/jumia-primo.png" />
              <div className="m-1">
                Get millions of products coming from abroad at incredible prices
              </div>
              <div className="text-uppercase btn btn-warning">Learn more</div>
            </div>
          </a>
          <a href="#" className="divlink col-md-3 col-6">
            <div className="links2 mt-3 p-1 rounded">
              <img src="https://eg.jumia.is/cms/37-20/Return-Refund/official-stores.png" />
              <div className="m-1">
                Get millions of products coming from abroad at incredible prices
              </div>
              <div className="text-uppercase btn btn-warning">Learn more</div>
            </div>
          </a>
        </div>
      </React.Fragment>
    );
  }
}

export default HelpCenter;
