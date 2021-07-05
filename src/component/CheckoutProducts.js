import React,{Component} from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import authHeader from "./Services/auth-header";
import AuthService from './Services/auth.service';
 class CheckoutProduct extends Component{

state={
    prod:{}
}
    getprod=async()=>{


        axios.get("https://localhost:44340/api/ProductsAPi/"+this.props.prodid).
        then(res=>{
            this.setState({prod:res.data})
        }
            )
    }
   async componentDidMount (){
       this.getprod()

    }
render(){
    return(
        <React.Fragment>
                    <div
                      className="card-body row bg-light m-0 p-3"
                      style={{ borderBottom: "1px solid black" }}
                    >
                      {/* image */}
                      <div className="card-text text-left col-md-6 col-12 ">
                        <img
                          className="mt-2 rounded"
                        src={`https://localhost:44340/${this.state.prod.image}`}  
                        alt={this.state.prod.productName}
                          height="150"
                          width="150"
                        />
                      </div>
                      {/* info */}
                      <div
                        className="card-text text-left col-md-6 col-12"
                        style={{
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {/* Name */}
                        <h6
                          className="card-title text-left"
                          style={{
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {this.state.prod.productName}
                        </h6>
                        {/* Price */}
                        <p className="card-text">{Math.ceil(this.state.prod.price*(1-this.state.prod.discount))} Egp</p>
                        {/* Quantity */}
                        <p className="card-text">Qty: {this.props.q}</p>
                      </div>
                    </div>



        </React.Fragment>
    )
}







 }
 export default CheckoutProduct;