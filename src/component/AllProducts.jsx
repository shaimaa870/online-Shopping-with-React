import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class AllProducts extends Component {
  state = {
    // prod: this.props.cardprod
    // posts: [],
  };
  rate = (t) => {
    if (t === 1) {
      return (
        <div>
          {" "}
          <i className="fa fa-star" />
        </div>
      );
    } else if (t > 1 && t <= 2) {
      return (
        <div>
          {" "}
          <i className="fa fa-star" />
          <i className="fa fa-star" />
        </div>
      );
    } else if (t > 2 && t <= 3) {
      return (
        <div>
          {" "}
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
        </div>
      );
    } else if (t > 3 && t <= 4) {
      return (
        <div>
          {" "}
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
        </div>
      );
    } else if (t > 4 && t <= 5) {
      return (
        <div>
          {" "}
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
        </div>
      );
    } else {
      return null;
    }
  };
  render() {
    const { products, loading } = this.props;

    if (loading) {
      return <h2>Loading...</h2>;
    }

    return (
      <React.Fragment>
        {/* {posts.map((post) => ( */}
           <div className="alert alert-primary">
          <div className="container row  ml-3">
            {/* <h4 className="alert-heading">{post.productName}</h4>
                        <p>{post.description}</p> */}
            {/* {this.state.posts.map((c,i)=><Card cardprod={c}  key={i}/> )} */}
            {products.map((product) => (
            <div className="col-md-3" key={product.id}>
              <div className="card m-3 ">
                <NavLink to={"/Product/" + product.productId}>
                  <div className="product-1 align-items-center p-2 text-center">
                    <img
                      // src={product.mainimg}
                      src="https://www.westernheights.k12.ok.us/wp-content/uploads/2020/01/No-Photo-Available.jpg"
                      alt="chips"
                      className="rounded"
                    />
                    <h5>{product.productName}s</h5>
                    {/* card info */}
                    <div className="mt-3 info">
                      <span className="text1 d-block">{product.description}</span>
                      <span className="text1">Lorem, ipsum dolor.</span>
                    </div>
                    <div className="cost mt-3 text-dark">
                      <span className="col-3">
                        {" "}
                        {product.price}Egp
                        <br />
                        {parseInt(product.discount) > 0 && (
                          <div className="mt-2 p-0">
                            <span className="sp  ">
                              (Egp{" "}
                              <span>
                                {parseInt(
                                  parseInt(product.price) *
                                    (1 + parseInt(product.discount) * 0.01)
                                )}
                              </span>
                              )
                            </span>
                            <span className="alert text-danger col-1 p-0">
                              -{product.discount}%
                            </span>
                          </div>
                        )}{" "}
                      </span>
                      <span> {this.rate(product.rating)}</span>
                    </div>
                  </div>
                  {/* button for cards*/}
                  <div className="bbtn col-6 offset-3 p-2 bg-warning text-center text-white my-3 cursor rounded">
                    <span className="text-uppercase">Add to cart</span>
                  </div>
                </NavLink>
              </div>
            </div>
            ))}
          </div>
          </div>
         {/* ))} */}
      </React.Fragment>
    );
  }
}

export default AllProducts;

