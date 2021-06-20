import React, { Component } from 'react';
class Inbox extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
               
                <div className="card col-md-12" style={{marginTop: 10, padding: 10} }>
          <div className="card-header">
            <div className="row">
              <div className="col-md-6"> <h3>Inbox Message</h3> </div>
            </div>
          </div>
          {/*  --------------------------OpenOrders---------------------- */}
          <div className="row" style={{textAlign: 'center', marginTop: 60}}>
            <div className="container mt-12" id="OpenOrders">
              <img src="../img/message.jpg" width="120px" height="120px" /><br /> <br />
              <div className=" form col-lg-12 ">
                <h6>You don't have any messages</h6><br />
                <p> Here you will be able to see all the messages that we send you. Stay tuned.</p> 
              </div>
            </div>
          </div> 
          <br />
        </div>
     
   

            </React.Fragment>
         );
    }
}
 
export default Inbox;