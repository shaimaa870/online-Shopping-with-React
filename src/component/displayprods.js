import React, { Component } from "react";
class DisplayProds extends Component {
  
  
  render() {
    return (
        <React.Fragment>
             <div className="row col-md-8 mt-sm-5 mt-md-0" style={{backgroundColor: 'white', marginLeft: 20}}>
        <div className="card mt-4 mb-4" style={{width: '70rem'}}>
          <ul className="list-group list-group-flush"> 
            <li className="list-group-item ">Health &amp; Beauty Products</li>
            <li className="list-group-item">56589 products found</li>
            <li className="list-group-item">      
              <section>
                <div className="container productCont">
                  <div id="gallery1" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <div className="row rbg rounded py-3">
                          {/* cart 1 ends here */}
                          {/* card 2 */}
                          <div className="col-md-4">
                            <div className="card mt-3">
                              <div className="product-1 align-items-center p-2 text-center">
                                <img src="https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/04/720312/1.jpg?9384" alt="chips" className="rounded" width={160} />
                                <h5>Kamar El Din</h5>
                                {/* card info */}
                                <div className="mt-3 info">
                                  <span className="text1 d-block">Lorem ipsum, dolor sit amet.</span>
                                  <span className="text1">Lorem, ipsum dolor.</span>
                                </div>
                                <div className="cost mt-3 text-dark">
                                  <span>$23.99</span>
                                  <div className="star mt-3 align-items-center">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                  </div>
                                </div>
                              </div>
                              {/* button for cards*/}
                              <div className="bbtn col-6 offset-3 p-2 bg-warning text-center text-white my-3 cursor rounded">
                                <span className="text-uppercase ">Add to cart</span>
                              </div>
                            </div>
                          </div>
                          {/* cart 2 ends here */}
                          {/* card 3 */}
                          {/*------*/}
                          <div className="col-md-4">
                            <div className="card mt-3">
                              <div className="product-1 align-items-center p-2 text-center">
                                <img src="https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/04/720312/1.jpg?9384" alt="chips" className="rounded" width={160} />
                                <h5>Kamar El Din</h5>
                                {/* card info */}
                                <div className="mt-3 info">
                                  <span className="text1 d-block">Lorem ipsum, dolor sit amet.</span>
                                  <span className="text1">Lorem, ipsum dolor.</span>
                                </div>
                                <div className="cost mt-3 text-dark">
                                  <span>$23.99</span>
                                  <div className="star mt-3 align-items-center">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                  </div>
                                </div>
                              </div>
                              {/* button for cards*/}
                              <div className="bbtn col-6 offset-3 p-2 bg-warning text-center text-white my-3 cursor rounded">
                                <span className="text-uppercase">Add to cart</span>
                              </div>
                            </div>
                          </div>
                          {/* cart 3 ends here */}
                          {/* card 4 */}
                          {/*------*/}
                          <div className="col-md-4">
                            <div className="card mt-3">
                              <div className="product-1 align-items-center p-2 text-center">
                                <img src="https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/04/720312/1.jpg?9384" alt="chips" className="rounded" width={160} />
                                <h5>Kamar El Din</h5>
                                {/* card info */}
                                <div className="mt-3 info">
                                  <span className="text1 d-block">Lorem ipsum, dolor sit amet.</span>
                                  <span className="text1">Lorem, ipsum dolor.</span>
                                </div>
                                <div className="cost mt-3 text-dark">
                                  <span>$23.99</span>
                                  <div className="star mt-3 align-items-center">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                  </div>
                                </div>
                              </div>
                              {/* button for cards*/}
                              <div className="bbtn col-6 offset-3 p-2 bg-warning text-center text-white my-3 cursor rounded">
                                <span className="text-uppercase">Add to cart</span>
                              </div>
                            </div>
                          </div>
                          {/*----*/}
                          <div className="col-md-4">
                            <div className="card mt-3">
                              <div className="product-1 align-items-center p-2 text-center">
                                <img src="https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/04/720312/1.jpg?9384" alt="chips" className="rounded" width={160} />
                                <h5>Kamar El Din</h5>
                                {/* card info */}
                                <div className="mt-3 info">
                                  <span className="text1 d-block">Lorem ipsum, dolor sit amet.</span>
                                  <span className="text1">Lorem, ipsum dolor.</span>
                                </div>
                                <div className="cost mt-3 text-dark">
                                  <span>$23.99</span>
                                  <div className="star mt-3 align-items-center">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                  </div>
                                </div>
                              </div>
                              {/* button for cards*/}
                              <div className="bbtn col-6 offset-3 p-2 bg-warning text-center text-white my-3 cursor rounded">
                                <span className="text-uppercase">Add to cart</span>
                              </div>
                            </div>
                          </div>
                          {/*  ------*/}
                          <div className="col-md-4">
                            <div className="card mt-3">
                              <div className="product-1 align-items-center p-2 text-center">
                                <img src="https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/04/720312/1.jpg?9384" alt="chips" className="rounded" width={160} />
                                <h5>Kamar El Din</h5>
                                {/* card info */}
                                <div className="mt-3 info">
                                  <span className="text1 d-block">Lorem ipsum, dolor sit amet.</span>
                                  <span className="text1">Lorem, ipsum dolor.</span>
                                </div>
                                <div className="cost mt-3 text-dark">
                                  <span>$23.99</span>
                                  <div className="star mt-3 align-items-center">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                  </div>
                                </div>
                              </div>
                              {/* button for cards*/}
                              <div className="bbtn col-6 offset-3 p-2 bg-warning text-center text-white my-3 cursor rounded">
                                <span className="text-uppercase">Add to cart</span>
                              </div>
                            </div>
                          </div>
                          {/*------*/}
                          <div className="col-md-4">
                            <div className="card mt-3">
                              <div className="product-1 align-items-center p-2 text-center">
                                <img src="https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/04/720312/1.jpg?9384" alt="chips" className="rounded" width={160} />
                                <h5>Kamar El Din</h5>
                                {/* card info */}
                                <div className="mt-3 info">
                                  <span className="text1 d-block">Lorem ipsum, dolor sit amet.</span>
                                  <span className="text1">Lorem, ipsum dolor.</span>
                                </div>
                                <div className="cost mt-3 text-dark">
                                  <span>$23.99</span>
                                  <div className="star mt-3 align-items-center">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                  </div>
                                </div>
                              </div>
                              {/* button for cards*/}
                              <div className="bbtn col-6 offset-3 p-2 bg-warning text-center text-white my-3 cursor rounded">
                                <span className="text-uppercase">Add to cart</span>
                              </div>
                            </div>
                          </div>
                          {/*----*/}
                          <div className="col-md-4">
                            <div className="card mt-3">
                              <div className="product-1 align-items-center p-2 text-center">
                                <img src="https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/04/720312/1.jpg?9384" alt="chips" className="rounded" width={160} />
                                <h5>Kamar El Din</h5>
                                {/* card info */}
                                <div className="mt-3 info">
                                  <span className="text1 d-block">Lorem ipsum, dolor sit amet.</span>
                                  <span className="text1">Lorem, ipsum dolor.</span>
                                </div>
                                <div className="cost mt-3 text-dark">
                                  <span>$23.99</span>
                                  <div className="star mt-3 align-items-center">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                  </div>
                                </div>
                              </div>
                              {/* button for cards*/}
                              <div className="bbtn col-6 offset-3 p-2 bg-warning text-center text-white my-3 cursor rounded">
                                <span className="text-uppercase">Add to cart</span>
                              </div>
                            </div>
                          </div>
                          {/*----*/}
                          <div className="col-md-4">
                            <div className="card mt-3">
                              <div className="product-1 align-items-center p-2 text-center">
                                <img src="https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/04/720312/1.jpg?9384" alt="chips" className="rounded" width={160} />
                                <h5>Kamar El Din</h5>
                                {/* card info */}
                                <div className="mt-3 info">
                                  <span className="text1 d-block">Lorem ipsum, dolor sit amet.</span>
                                  <span className="text1">Lorem, ipsum dolor.</span>
                                </div>
                                <div className="cost mt-3 text-dark">
                                  <span>$23.99</span>
                                  <div className="star mt-3 align-items-center">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                  </div>
                                </div>
                              </div>
                              {/* button for cards*/}
                              <div className="bbtn col-6 offset-3 p-2 bg-warning text-center text-white my-3 cursor rounded">
                                <span className="text-uppercase">Add to cart</span>
                              </div>
                            </div>
                          </div>
                          {/*0----*/}
                          <div className="col-md-4">
                            <div className="card mt-3">
                              <div className="product-1 align-items-center p-2 text-center">
                                <img src="https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/04/720312/1.jpg?9384" alt="chips" className="rounded" width={160} />
                                <h5>Kamar El Din</h5>
                                {/* card info */}
                                <div className="mt-3 info">
                                  <span className="text1 d-block">Lorem ipsum, dolor sit amet.</span>
                                  <span className="text1">Lorem, ipsum dolor.</span>
                                </div>
                                <div className="cost mt-3 text-dark">
                                  <span>$23.99</span>
                                  <div className="star mt-3 align-items-center">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                  </div>
                                </div>
                              </div>
                              {/* button for cards*/}
                              <div className="bbtn col-6 offset-3 p-2 bg-warning text-center text-white my-3 cursor rounded">
                                <span className="text-uppercase">Add to cart</span>
                              </div>
                            </div>
                          </div>
                          {/*------*/}
                          <div className="col-md-4">
                            <div className="card mt-3">
                              <div className="product-1 align-items-center p-2 text-center">
                                <img src="https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/04/720312/1.jpg?9384" alt="chips" className="rounded" width={160} />
                                <h5>Kamar El Din</h5>
                                {/* card info */}
                                <div className="mt-3 info">
                                  <span className="text1 d-block">Lorem ipsum, dolor sit amet.</span>
                                  <span className="text1">Lorem, ipsum dolor.</span>
                                </div>
                                <div className="cost mt-3 text-dark">
                                  <span>$23.99</span>
                                  <div className="star mt-3 align-items-center">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                  </div>
                                </div>
                              </div>
                              {/* button for cards*/}
                              <div className="bbtn col-6 offset-3 p-2 bg-warning text-center text-white my-3 cursor rounded">
                                <span className="text-uppercase">Add to cart</span>
                              </div>
                            </div>
                          </div>
                          {/*------*/}
                          <div className="col-md-4">
                            <div className="card mt-3">
                              <div className="product-1 align-items-center p-2 text-center">
                                <img src="https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/04/720312/1.jpg?9384" alt="chips" className="rounded" width={160} />
                                <h5>Kamar El Din</h5>
                                {/* card info */}
                                <div className="mt-3 info">
                                  <span className="text1 d-block">Lorem ipsum, dolor sit amet.</span>
                                  <span className="text1">Lorem, ipsum dolor.</span>
                                </div>
                                <div className="cost mt-3 text-dark">
                                  <span>$23.99</span>
                                  <div className="star mt-3 align-items-center">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                  </div>
                                </div>
                              </div>
                              {/* button for cards*/}
                              <div className="bbtn col-6 offset-3 p-2 bg-warning text-center text-white my-3 cursor rounded">
                                <span className="text-uppercase">Add to cart</span>
                              </div>
                            </div>
                          </div>
                          {/*------*/}
                          <div className="col-md-4">
                            <div className="card mt-3">
                              <div className="product-1 align-items-center p-2 text-center">
                                <img src="https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/04/720312/1.jpg?9384" alt="chips" className="rounded" width={160} />
                                <h5>Kamar El Din</h5>
                                {/* card info */}
                                <div className="mt-3 info">
                                  <span className="text1 d-block">Lorem ipsum, dolor sit amet.</span>
                                  <span className="text1">Lorem, ipsum dolor.</span>
                                </div>
                                <div className="cost mt-3 text-dark">
                                  <span>$23.99</span>
                                  <div className="star mt-3 align-items-center">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                  </div>
                                </div>
                              </div>
                              {/* button for cards*/}
                              <div className="bbtn col-6 offset-3 p-2 bg-warning text-center text-white my-3 cursor rounded">
                                <span className="text-uppercase">Add to cart</span>
                              </div>
                            </div>
                          </div>
                          {/*------*/}
                          <div className="col-md-4">
                            <div className="card mt-3">
                              <div className="product-1 align-items-center p-2 text-center">
                                <img src="https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/04/720312/1.jpg?9384" alt="chips" className="rounded" width={160} />
                                <h5>Kamar El Din</h5>
                                {/* card info */}
                                <div className="mt-3 info">
                                  <span className="text1 d-block">Lorem ipsum, dolor sit amet.</span>
                                  <span className="text1">Lorem, ipsum dolor.</span>
                                </div>
                                <div className="cost mt-3 text-dark">
                                  <span>$23.99</span>
                                  <div className="star mt-3 align-items-center">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                  </div>
                                </div>
                              </div>
                              {/* button for cards*/}
                              <div className="bbtn col-6 offset-3 p-2 bg-warning text-center text-white my-3 cursor rounded">
                                <span className="text-uppercase">Add to cart</span>
                              </div>
                            </div>
                          </div>
                          {/*------*/}
                          <div className="col-md-4">
                            <div className="card mt-3">
                              <div className="product-1 align-items-center p-2 text-center">
                                <img src="https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/04/720312/1.jpg?9384" alt="chips" className="rounded" width={160} />
                                <h5>Kamar El Din</h5>
                                {/* card info */}
                                <div className="mt-3 info">
                                  <span className="text1 d-block">Lorem ipsum, dolor sit amet.</span>
                                  <span className="text1">Lorem, ipsum dolor.</span>
                                </div>
                                <div className="cost mt-3 text-dark">
                                  <span>$23.99</span>
                                  <div className="star mt-3 align-items-center">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                  </div>
                                </div>
                              </div>
                              {/* button for cards*/}
                              <div className="bbtn col-6 offset-3 p-2 bg-warning text-center text-white my-3 cursor rounded">
                                <span className="text-uppercase">Add to cart</span>
                              </div>
                            </div>
                          </div>
                          {/*------*/}
                          <div className="col-md-4">
                            <div className="card mt-3">
                              <div className="product-1 align-items-center p-2 text-center">
                                <img src="https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/04/720312/1.jpg?9384" alt="chips" className="rounded" width={160} />
                                <h5>Kamar El Din</h5>
                                {/* card info */}
                                <div className="mt-3 info">
                                  <span className="text1 d-block">Lorem ipsum, dolor sit amet.</span>
                                  <span className="text1">Lorem, ipsum dolor.</span>
                                </div>
                                <div className="cost mt-3 text-dark">
                                  <span>$23.99</span>
                                  <div className="star mt-3 align-items-center">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                  </div>
                                </div>
                              </div>
                              {/* button for cards*/}
                              <div className="bbtn col-6 offset-3 p-2 bg-warning text-center text-white my-3 cursor rounded">
                                <span className="text-uppercase">Add to cart</span>
                              </div>
                            </div>
                          </div>
                          {/*------*/}
                          <div className="col-md-4">
                            <div className="card mt-3">
                              <div className="product-1 align-items-center p-2 text-center">
                                <img src="https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/04/720312/1.jpg?9384" alt="chips" className="rounded" width={160} />
                                <h5>Kamar El Din</h5>
                                {/* card info */}
                                <div className="mt-3 info">
                                  <span className="text1 d-block">Lorem ipsum, dolor sit amet.</span>
                                  <span className="text1">Lorem, ipsum dolor.</span>
                                </div>
                                <div className="cost mt-3 text-dark">
                                  <span>$23.99</span>
                                  <div className="star mt-3 align-items-center">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                  </div>
                                </div>
                              </div>
                              {/* button for cards*/}
                              <div className="bbtn col-6 offset-3 p-2 bg-warning text-center text-white my-3 cursor rounded">
                                <span className="text-uppercase">Add to cart</span>
                              </div>
                            </div>
                          </div>
                          {/*------*/}
                          <div className="col-md-4">
                            <div className="card mt-3">
                              <div className="product-1 align-items-center p-2 text-center">
                                <img src="https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/04/720312/1.jpg?9384" alt="chips" className="rounded" width={160} />
                                <h5>Kamar El Din</h5>
                                {/* card info */}
                                <div className="mt-3 info">
                                  <span className="text1 d-block">Lorem ipsum, dolor sit amet.</span>
                                  <span className="text1">Lorem, ipsum dolor.</span>
                                </div>
                                <div className="cost mt-3 text-dark">
                                  <span>$23.99</span>
                                  <div className="star mt-3 align-items-center">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                  </div>
                                </div>
                              </div>
                              {/* button for cards*/}
                              <div className="bbtn col-6 offset-3 p-2 bg-warning text-center text-white my-3 cursor rounded">
                                <span className="text-uppercase">Add to cart</span>
                              </div>
                            </div>
                          </div>
                          {/*------*/}
                          <div className="col-md-4">
                            <div className="card mt-3">
                              <div className="product-1 align-items-center p-2 text-center">
                                <img src="https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/04/720312/1.jpg?9384" alt="chips" className="rounded" width={160} />
                                <h5>Kamar El Din</h5>
                                {/* card info */}
                                <div className="mt-3 info">
                                  <span className="text1 d-block">Lorem ipsum, dolor sit amet.</span>
                                  <span className="text1">Lorem, ipsum dolor.</span>
                                </div>
                                <div className="cost mt-3 text-dark">
                                  <span>$23.99</span>
                                  <div className="star mt-3 align-items-center">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                  </div>
                                </div>
                              </div>
                              {/* button for cards*/}
                              <div className="bbtn col-6 offset-3 p-2 bg-warning text-center text-white my-3 cursor rounded">
                                <span className="text-uppercase">Add to cart</span>
                              </div>
                            </div>
                          </div>
                          {/*------*/}
                          <div className="col-md-4">
                            <div className="card mt-3">
                              <div className="product-1 align-items-center p-2 text-center">
                                <img src="https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/04/720312/1.jpg?9384" alt="chips" className="rounded" width={160} />
                                <h5>Kamar El Din</h5>
                                {/* card info */}
                                <div className="mt-3 info">
                                  <span className="text1 d-block">Lorem ipsum, dolor sit amet.</span>
                                  <span className="text1">Lorem, ipsum dolor.</span>
                                </div>
                                <div className="cost mt-3 text-dark">
                                  <span>$23.99</span>
                                  <div className="star mt-3 align-items-center">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                  </div>
                                </div>
                              </div>
                              {/* button for cards*/}
                              <div className="bbtn col-6 offset-3 p-2 bg-warning text-center text-white my-3 cursor rounded">
                                <span className="text-uppercase">Add to cart</span>
                              </div>
                            </div>
                          </div>
                          {/*------*/}
                          <div className="col-md-4">
                            <div className="card mt-3">
                              <div className="product-1 align-items-center p-2 text-center">
                                <img src="https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/04/720312/1.jpg?9384" alt="chips" className="rounded" width={160} />
                                <h5>Kamar El Din</h5>
                                {/* card info */}
                                <div className="mt-3 info">
                                  <span className="text1 d-block">Lorem ipsum, dolor sit amet.</span>
                                  <span className="text1">Lorem, ipsum dolor.</span>
                                </div>
                                <div className="cost mt-3 text-dark">
                                  <span>$23.99</span>
                                  <div className="star mt-3 align-items-center">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                  </div>
                                </div>
                              </div>
                              {/* button for cards*/}
                              <div className="bbtn col-6 offset-3 p-2 bg-warning text-center text-white my-3 cursor rounded">
                                <span className="text-uppercase">Add to cart</span>
                              </div>
                            </div>
                          </div>
                          {/*------*/}
                          <div className="col-md-4">
                            <div className="card mt-3">
                              <div className="product-1 align-items-center p-2 text-center">
                                <img src="https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/04/720312/1.jpg?9384" alt="chips" className="rounded" width={160} />
                                <h5>Kamar El Din</h5>
                                {/* card info */}
                                <div className="mt-3 info">
                                  <span className="text1 d-block">Lorem ipsum, dolor sit amet.</span>
                                  <span className="text1">Lorem, ipsum dolor.</span>
                                </div>
                                <div className="cost mt-3 text-dark">
                                  <span>$23.99</span>
                                  <div className="star mt-3 align-items-center">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                  </div>
                                </div>
                              </div>
                              {/* button for cards*/}
                              <div className="bbtn col-6 offset-3 p-2 bg-warning text-center text-white my-3 cursor rounded">
                                <span className="text-uppercase">Add to cart</span>
                              </div>
                            </div>
                          </div>
                        </div></div></div></div></div></section>
            </li>
          </ul>
          {/*pagination---*/}
          <nav aria-label="Page navigation example" style={{marginTop: 30}}>
            <ul className="pagination justify-content-center">
              <li className="page-item disabled">
                <a className="page-link" href="#" tabIndex={-1}>Previous</a>
              </li>
              <li className="page-item"><a className="page-link" href="#">1</a></li>
              <li className="page-item"><a className="page-link" href="#">2</a></li>
              <li className="page-item"><a className="page-link" href="#">3</a></li>
              <li className="page-item">
                <a className="page-link" href="#">Next</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

        </React.Fragment>
    )}}
    export default DisplayProds;