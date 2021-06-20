import React,{Component} from 'react'

class Closed extends Component{
    render(){
        return(
            <React.Fragment>
          <div className="container mt-12 " id="ClosedOrders">
        <img src="../img/ordercart.png" width="120px" height="120px" /><br /> <br />
        <div className=" form  col-lg-12 " style={{textAlign: 'center'}}>
          <h6> <i>No Closed Orders to Display </i></h6>   <br />
          <p> <i>All your Closed Orders will be saved here.</i></p>
          <button type="button" className="btn btn-warning " style={{color: 'white', marginTop: 30}}><b>Start Shopping </b></button>
        </div>
      </div>
            </React.Fragment>)}}
            export default Closed;