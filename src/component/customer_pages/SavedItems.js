import React, { Component } from 'react';

class SavedItems extends Component {
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
                        <div className="col-md-6"> <h3>Saved Item</h3> </div>
                      </div>
                    </div>
                    {/*  --------------------------OpenOrders---------------------- */}
                    <div className="row" style={{textAlign: 'center', marginTop: 60}}>
                      <div className="container mt-12" id="OpenOrders">
                        <img src="./img/saveditems.png" width="80px" height="70px" /><br /> <br />
                        <div className=" form col-lg-12 ">
                          <h6><i>You haven’t saved an item yet!</i></h6><br />
                          <p><i>  Found something you like? Tap on the heart shaped icon next 
                              to the item to add it to your wishlist! All your saved items will appear here.</i></p> 
                          <button type="button" className="btn btn-warning " style={{color: 'white', marginTop: 30}}><b>Continue Shopping </b></button>
                        </div>
                      </div>
                    </div> 
                    <br/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
            );
        }
    }
     
    export default SavedItems