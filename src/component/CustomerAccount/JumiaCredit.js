import React, { Component } from 'react';

class JumiaCredit extends Component {
    state = {  }
    render() { 
        return (
            <React.Fragment>
 


      <div className="col-sm-8 col-md-12" style={{marginTop: 10}}>
        <div className="card">
          <div className="card-header">
            <div className="row">
              <div className="col-md-6"> <h3>Jumia Credit</h3> </div>
            </div>
          </div>
          {/*  --------------------------OpenOrders---------------------- */}
          <div className="row" style={{textAlign: 'center', marginTop: 60}}>
            <div className="container mt-12" id="OpenOrders">
              <img src="../img/credit.png" width="120px" height="120px" /><br /> <br />
              <div className=" form col-lg-12 ">
                <h6><i>You currently have no available Jumia Credit </i></h6><br />
                <p> <i>  All your available Jumia credit and coupons will be displayed here </i></p> 
                <button type="button" className="btn btn-warning " style={{color: 'white', marginTop: 30}}><b>Continue Shopping </b></button>
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
 
export default JumiaCredit;