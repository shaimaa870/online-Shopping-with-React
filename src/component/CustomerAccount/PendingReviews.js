import React,{Component} from 'react'
class PendingReviews extends Component{
    render(){
        return(
            <React.Fragment>
<div className="card col-md-12">
  <div className="card-header">
    <div className="row">
      <div className="col-md-6"> <h3>Pending View</h3> </div>
    </div>
  </div>
  {/*  --------------------------OpenOrders---------------------- */}
  <div className="row" style={{textAlign: 'center', marginTop: 60}}>
    <div className="container mt-12" id="OpenOrders">
      <img src="./img/review.jpg" width="120px" height="100px" /><br /> <br />
      <div className=" form col-lg-12 ">
        <h6><i>You have no orders waiting for feedback</i></h6><br />
        <p><i>After getting your products delivered, you will be able to rate and review them. 
            Your feedback will be published on the product page to help all Jumia's users get the best shopping experience!</i></p> 
        <button type="button" className="btn btn mb-5 " style={{color: 'white', marginTop: 30,backgroundColor:'orange'}}><b>Continue Shopping </b></button>
      </div>
    </div>
  </div> 
  <br />
</div>

            </React.Fragment>)}}
            export default PendingReviews;