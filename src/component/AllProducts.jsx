import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import  Card  from './Card';


export class AllProducts extends Component {
 
  render() {
    const { products, loading } = this.props;
   
    if (loading) {
      return <h2>Loading...</h2>;
    }

    return (
      <React.Fragment>
       
        <ToastContainer />
          <div className="row m-0 p-0 mb-3 p-2">
            {
              products.map(p=><Card cardprod={p} key={p.id}/>)
            }
          </div>
      </React.Fragment>
    );
  }
}

export default AllProducts;

