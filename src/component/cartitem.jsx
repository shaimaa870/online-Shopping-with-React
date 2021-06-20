import React,{Component} from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import authHeader from "./Services/auth-header";
import AuthService from './Services/auth.service';
 class Cartitem extends Component{

state={
    prod:{}
}
SaveItems = () => {

    console.log(localStorage.getItem("user").id,this.props.prodid)
    if (AuthService.getCurrentUser()) {
      let _id = AuthService.getCurrentUser().id;
      let _PId = this.props.prodid;
      axios
        .post(
          "https://localhost:44340/api/UserBagApi/SetProductToSavedItems",
          { UserId: _id, ProductId: _PId },
          { headers: authHeader() }
        )
        .then(//console.log(_id, _PId, authHeader())
        );
    }
  };

    getprod=async()=>{


        axios.get("https://localhost:44340/api/ProductsAPi/"+this.props.prodid).
        then(res=>{
            this.setState({prod:res.data})
            //console.log(res.data)
        }
            )
    }
   async componentDidMount (){
       this.getprod()

    }
render(){
   // console.log("prod",this.state.prod,"id",this.props.prodid)
    return(
        <React.Fragment>
          
                
              
       
                    <tr >
                      {/* image */}
                      {/* <Cartitem   prodid={product.productId}/> */}
                      <td>
                        <Link 
                        to={{
                          pathname: `/Product/${this.state.prod.productId}`,
                        }}
                        >
                          <img
                            src="https://www.westernheights.k12.ok.us/wp-content/uploads/2020/01/No-Photo-Available.jpg"
                            alt="item"
                            className="mr-2 mt-3 rounded-circle"
                            width="80"
                            height="80"
                          />
                        </Link>
                      </td>
                      {/* Item */}
                      <td>
                        <p className="mb-0 col-12">
                          <Link 
                          to={{
                            pathname: `/Product/${this.props.prodid}`,
                          }}
                          className="link">
                            {" "}
                            {this.state.prod.productName}{" "}
                          </Link>
                        </p>
                        <p
                          className="mb-0 col-12"
                          style={{
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {" "}
                          {this.state.prod.description}
                        </p>
                      </td>
                      {/* QUANTITY */}
                      <td>
                      
                        <button type="submit" onClick={()=>{this.props.incrementQuant(this.props.prodid)}} className="btn btn-sm btn-primary text-uppercase p-1 m-2"><i className="fas fa-plus-circle fa-2x"></i></button>
                        {this.props.q==0? this.props.onDelete(this.props.prodid):this.props.q}
                        <button type="submit" onClick={()=>{this.props.decremenrQuant(this.props.prodid)}} className="btn btn-sm btn-primary text-uppercase p-1 m-2"><i className="fas fa-minus-circle fa-2x"></i></button>
                                  
                                  
                                 
                                  
                                  
                      </td>
                      {/* UNIT PRICE	 */}
                      <td>
                        <span className="sp1 m-1 ">
                          <span>Egp</span>
                          <span>{this.state.prod.price}</span>
                        </span>
                        <span className="sp2 m-1">
                          <span>Egp</span>
                          <span>
                            {parseInt(
                              parseInt(this.state.prod.price) *
                                (1 + parseInt(this.state.prod.discount) * 0.01)
                            )}
                          </span>
                        </span>
                        <span className="sp3">
                          <span>Saving :</span>
                          <span>{this.state.prod.discount}%</span>
                        </span>
                      </td>
                      {/* SUBTOTAL */}
                      <td>
                        <span className="sp1" style={{ color: "orange" }}>
                          <span>Egp</span>
                          <span>{this.state.prod.price* this.props.q}</span>
                        </span>
                      </td>
                      {/* Saved/Removed Buttons */}
                      <td>
                        <button className="btn btn-light mb-2 text-danger col-12" onClick={this.SaveItems}>
                          <i className="fa fa-heart mr-2"></i>
                        </button>
                        <button
                          onClick={(event) => {
                            this.props.onDelete(this.props.prodid);
                          }}
                          type="submit"
                          className=" btn btn-light text-danger col-12"
                        >
                          <i className="fa fa-trash mr-2"></i>
                        </button>
                      </td>
                    </tr>
                

        </React.Fragment>
    )
}







 }
 export default Cartitem;