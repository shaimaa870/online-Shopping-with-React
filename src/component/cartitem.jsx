import React, { Component } from "react";
import axios from "axios";
import {toast}from "react-toastify";
import { Link } from "react-router-dom";
import authHeader from "./Services/auth-header";
import AuthService from "./Services/auth.service";
class Cartitem extends Component {
  state = {
    prod: {},
    IsSaved: false
  };
  SaveItems = () => {
    //console.log(localStorage.getItem("user").id, this.props.prodid);
    if (AuthService.getCurrentUser()) {
      let _id = AuthService.getCurrentUser().id;
      let _PId = this.props.prodid;
      if(!this.state.IsSaved){
        axios
          .post(
            "https://localhost:44340/api/UserBagApi/SetProductToSavedItems",
            { UserId: _id, ProductId: _PId },
            { headers: authHeader() }
          )
          .then((res) => {
            toast.success(`Changed To Saved Items`);
           this.changeSavedColor();
          });
      }else{
        axios
          .delete(
            "https://localhost:44340/api/UserBagApi/DeleteSavedItem/"+_id+"/"+_PId,
            null,
            { headers: authHeader() }
          )
          .then((res) => {
            toast.success(`RemovedFrom Saved Items`);
           this.changeSavedColor();
          });
      }
    }
  };

  changeSavedColor = async () => {
    let x = await axios.get("https://localhost:44340/api/UserBagApi/IsSaved/"+ JSON.parse(localStorage.getItem('user')).id +"/"+this.props.prodid)
    await this.setState({IsSaved:x.data})
  }

  getprod = async () => {
    axios
      .get("https://localhost:44340/api/ProductsAPi/" + this.props.prodid)
      .then((res) => {
        this.setState({ prod: res.data });
        //console.log(res.data)
      });
  };
  async componentDidMount() {
    this.getprod();
    this.changeSavedColor();
  }
  render() {

    let nprice;
    this.state.prod.discount === 0 || this.state.prod.discount === null
      ? (nprice = this.state.prod.price)
      : (nprice = this.state.prod.price*(1-this.state.prod.discount));

    return (
      <React.Fragment>
        <tr>
          {/* image */}
          {/* <Cartitem   prodid={product.productId}/> */}
          <td>
            <Link
              to={{
                pathname: `/Product/${this.state.prod.id}`,
              }}
            >
              <img
                // src="https://www.westernheights.k12.ok.us/wp-content/uploads/2020/01/No-Photo-Available.jpg"
                //src={`https://localhost:44340/${this.state.prod.image}`}
                src={this.state.prod.image ? `https://localhost:44340/${this.state.prod.image}`: ""}
                alt={this.state.prod.productName}
                className="rounded"
                width="80"
                height="80"
              />
            </Link>
          </td>
          {/* Item */}
          <td>
            <p className="mb-0 col-12"
            style={{whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",width:"200px"}}
            >
              <Link
                to={{
                  pathname: `/Product/${this.props.prodid}`,
                }}
                className="link"
                
              >
                {" "}
                {this.state.prod.productName}{" "}
              </Link>
            </p>
            <p
              className="mb-0 col-12"
              style={{whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",width:"200px"}}
            >
              {" "}
              {this.state.prod.description}
            </p>
          </td>
          {/* QUANTITY */}
          <td>
            <button
              type="submit"
              onClick={() => {
                this.props.incrementQuant(this.props.prodid);
              }}
              className="btn btn-sm btn-primary text-uppercase p-1 m-2"
            >
              <i className="fas fa-plus-circle fa-2x"></i>
            </button>
            {this.props.q === 0
              ? this.props.onDelete(this.props.prodid)
              : this.props.q}
            <button
              type="submit"
              onClick={() => {
                this.props.decremenrQuant(this.props.prodid);
              }}
              className="btn btn-sm btn-primary text-uppercase p-1 m-2"
            >
              <i className="fas fa-minus-circle fa-2x"></i>
            </button>
          </td>
          {/* UNIT PRICE	 */}
          <td>
            {this.state.prod.discount > 0 ? (
              <>
              
              <span className="sp1 m-1 ">
                <span>EGP</span>
                <span>{Math.ceil(nprice)}</span>
              </span>
              <span className="sp2 m-1">
                <span>Egp</span>
                <span>{Math.ceil(this.state.prod.price)}</span>
              </span>
              <span className="sp3">
                <span>Saving :</span>
                <span>  {Math.floor(this.state.prod.discount*100)} </span>
              </span>
            </>)
            :
            <span className="sp1 m-1 ">
            <span>Egp</span>
            <span>{Math.ceil(nprice)}</span>
          </span>
            }
            
          </td>
          {/* SUBTOTAL */}
          <td>
            <span className="sp1" style={{ color: "orange" }}>
              <span>EGP</span>
              <span>{Math.ceil(nprice*this.props.q)}</span>
            </span>
          </td>
          {/* Saved/Removed Buttons */}
          <td>
            <button
              className={this.state.IsSaved === true ? "btn btn-light mb-2 col-12 text-light bg-danger " : "btn btn-light mb-2 col-12 text-danger"}
              onClick={this.SaveItems}
            >
              <i className="fa fa-heart mr-2 "></i>
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
    );
  }
}
export default Cartitem;
