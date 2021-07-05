import axios from "axios";
import React, { Component } from "react";
import { toast } from "react-toastify";
import AuthService from "../Services/auth.service";
import SmallCard from "../smallCard";
import Saveditemscard from './saveditemscard'

class Closed extends Component {
state={
  ratevalue:"",
  ratetext:"",

}
handlerchange=async(e)=>{
  if(e.target.name=="ratevalue"){
    await  this.setState({ratevalue:e.target.value})
  

  }
  if(e.target.name=="ratetext"){
  await  this.setState({ratetext:e.target.value})
  console.log(e.target.value)
  }


}
handlerclick=async(_pid)=>{
  try{
await axios.post("https://localhost:44340/api/ProductsAPi/AddReviewToProduct",{
  "CustomerId":AuthService.getCurrentUser().id,
  "ProductId":_pid,
  "Comment":this.state.ratetext,
  "Rating":this.state.ratevalue,
})
 toast.success("done")
 window.location.reload();
}
catch{
  toast.error("you set it befor go to product to edit yor review")
}

}
  
  render() {
    const { ondone } = this.props;
    if (ondone.length == 0) {
      return (
        <React.Fragment>
          <div className="container mt-2 " id="ClosedOrders">
            {/* <img src="../img/message.jpg" width="120px" height="120px" /> */}
            <br /> <br />
            <div className=" form  col-lg-12 " style={{ textAlign: "center" }}>
              <h6>
                {" "}
                <i>No Closed Orders to Display </i>
              </h6>{" "}
              <br />
              <p>
                {" "}
                <i>All your Closed Orders will be saved here.</i>
              </p>
              <a type="button" href="/home" className="btn btn-warning mb-3 " style={{color: 'white', marginTop: 30}}> <b>Continue Shopping</b></a>
            
            </div>
          </div>
        </React.Fragment>
      );
    } else {
      return (<div className="container " >
        {ondone.map((o, i) =>
          <>
            <h4 className="text text-center">order {i + 1}</h4>
            <div key={i} className="row p-0 m-0" style={{alignItems:"center"}}>

              {o.products.map((p, j) =>
               < >
                  <SmallCard key={j} cardprod={p}  />
                  <select className="col-12" name="ratevalue" onChange={(e)=>this.handlerchange(e)}>
                   <option>choose</option>
                    <option value="5">5</option>
                    <option value="4">4</option>
                    <option value="3">3</option>
                    <option value="2">2</option>
                    <option value="1">1</option>
                  </select>
              
                  <input className="col-10" type="text" name="ratetext" placeholder="set your review" onChange={(e)=>this.handlerchange(e)}  />
                  <button className="col-2 bg-primary" onClick={()=>this.handlerclick(p.id)}>enter</button>
               
                </>

              )}
            </div>
          </>)}
      </div>
      )
    }
  }
}
export default Closed;
