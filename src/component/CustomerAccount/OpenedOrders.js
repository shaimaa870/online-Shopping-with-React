import React,{Component} from 'react'

class Opened extends Component{
    render(){
        return(
            <React.Fragment>
 <div className="container mt-12" id="OpenOrders">
        <img src="../img/ordercart.png" width="120px" height="120px" /><br /> <br />
        <div className=" form col-lg-12 ">
          <h6><i>You have placed no orders yet!</i></h6><br />
          <p><i>All your orders will be saved here for you to access their state anytime.</i></p> 
          <button type="button" className="btn btn-warning " style={{color: 'white', marginTop: 30}}> <b>Continue Shopping</b></button>
        </div>
      </div>
            </React.Fragment>)}}
            export default Opened;