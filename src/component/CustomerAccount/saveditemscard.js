import React, { Component } from "react";
class Saveditemscard extends Component {
  
    render() {
      const  { prod } =this.props;
      let nprice;
      prod.discount == 0 || prod.discount == null
        ? (nprice = prod.price)
        : (nprice =
            parseInt(prod.price*(1-prod.discount)));
        return(
                 <div className="col-12" style={{ marginTop: 20 }}>
                <div
                  className="col-sm-12 "
                  style={{ marginTop: 10, display: "inline-block" }}
                >
                  <div className="card h-100 " style={{ width: "100%" }}>
                    <div className="card-body">
                      <div style={{ float: "left" }}>
                        <img
                          src={`https://localhost:44340/images/${prod.image}`}
                          style={{ display: "inline-block" }}
                          width="80px"
                          height="70px"
                        />
                      
                        <span
                          className=" form col-lg-12 "
                          style={{ display: "inline-block" }}
                        >
                         <span style={{ fontWeight: "700" }}>Description : </span> {prod.description}
                        </span>
                        <span
                          className=" form col-lg-12 "
                          style={{ display: "inline-block" }}
                        >
                          <span style={{ fontWeight: "700" }}>Price : Egp </span>
                          <span>{parseInt(nprice)}</span>
                        </span>
                      </div>
                      <div style={{ float: "right" }}>
                        <button
                          type="button"
                          className="btn  text-uppercase"
                          style={{ color: "white", marginTop: 30,backgroundColor:"teal" }}
                          onClick={()=>this.props.onAdd(prod.id)}
                        >
                          {" "}
                          <b>Add to cart</b>
                        </button>
                        <button
                          type="button"
                          className="btn btn-danger ml-2 "
                          style={{ color: "white", marginTop: 30 }}
                          onClick={() => this.props.Ondelete(prod.id)}
                        >
                          <b>
                            <i className="fas fa-trash-alt" />
                            &nbsp; Remove
                          </b>
                        </button>
                        ‏
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        )
    }}
    export default Saveditemscard;