import React, { Component } from 'react';
import axios from 'axios';
import DisplayedProducts from '../displyedproducts';
import Brand from '../Brand data/brandimgs';
import { IconContext } from "react-icons";
import { FaStar } from "react-icons/fa";

class  Subcategory extends Component {
  state = {

    subcategoryprods: [],
    subcatatbrands: [],

    colors: [],
    slidprice: 0,
    maxslid: 0,
    minslid: 0,
    prices: [],


    fcolor: [],
    fbrand: [],
    frating: "",
    fshipping: [],
    fdiscount: "",
    filteredArray: [],
    filterDiscount: []
  }

  getsubcategdata = (_id) => {

    axios("https://localhost:44340/CATegoryPRoduct/" + _id).then(res => {

      this.setState({
        subcategoryprods: res.data
      })

    });
  }
  getsubcategorybrands = (_id) => {
    axios("https://localhost:44340/api/CategoriesAPi/allBrandInsubcategory/" + _id).then(res => {

      this.setState({
        subcatatbrands: res.data
      })
    });
  }
  getsubcategorycolors = async (_id) => {
    await axios("https://localhost:44340/api/SubCategoriesAPI/allsubcolor/" + _id).then(async res => {
      await this.setState({ colors: res.data })
    }).catch(err => console.log(err))
  }
  getsubcatprices = async (_id) => {
    await axios("https://localhost:44340/api/SubCategoriesApi/allsubprice/" + _id).then(async res => {
      //console.log(res.data);
      await this.setState({ prices: res.data, slidprice: Math.max.apply(null, res.data) })
    }).catch(err => console.log(err))

  }
  handlechecked = async (e) => {
    if (e.target) {
      if (e.target.name == "color") {
        //Copy List of checked colors
        let ncolors = this.state.fcolor;
        //Push New color
        if (e.target.checked) {
          ncolors.push(e.target.value)
        } else {
          let I = ncolors.indexOf(e.target.value);
          ncolors.splice(I, 1);
        }
        await this.setState({ fcolor: ncolors })
        //console.log(this.state.fcolor)
        //get Filterd Products with fcolor array
        let filteredProducts = this.state.subcategoryprods.filter(item =>
          (this.state.fcolor.includes(item.color))
          || (this.state.fbrand.includes(`${item.brandId}`))
          || (this.state.fshipping.includes(item.ship))
          || (item.rating >= parseFloat(this.state.frating))
          || (item.discount >= parseFloat(this.state.fdiscount))
          // ||(item.price >= this.state.minslid && item.price <= parseFloat(this.state.slidprice))
        );
        await this.setState({ filteredArray: filteredProducts })
      }
    }
    //Color Filteration complete
    //TODO Rest Filters
    //==========================brands filter======================================================
    if (e.target.name == "brand") {
      //Copy List of checked brand
      let nbrands = this.state.fbrand;
      //Push New brand
      if (e.target.checked) {
        nbrands.push(e.target.value)
      } else {
        let I = nbrands.indexOf(e.target.value);
        nbrands.splice(I, 1);
      }
      await this.setState({ fbrand: nbrands })

      let filteredProducts = this.state.subcategoryprods.filter(item =>
        (this.state.fcolor.includes(item.color))
        || (this.state.fbrand.includes(`${item.brandId}`))
        || (this.state.fshipping.includes(item.ship))
        || (item.rating >= parseFloat(this.state.frating))
        || (item.discount >= parseFloat(this.state.fdiscount))
        // ||(item.price >= this.state.minslid && item.price <= parseFloat(this.state.slidprice))
      );
      await this.setState({ filteredArray: filteredProducts })


    }
    //Color Filteration complete
    //TODO Rest Filters
    //=========================shipping filters=====================================================
    if (e.target.name == "shipping") {
      //Copy List of checked brand
      let nshipping = this.state.fshipping;
      //Push New brand
      if (e.target.checked) {
        nshipping.push(parseInt(e.target.value))
      } else {
        let I = nshipping.indexOf(parseInt(e.target.value));
        nshipping.splice(I, 1);
      }
      await this.setState({ fnshipping: nshipping })
      console.log("state fcolor", this.state.fshipping)


      // Finsh updating fshipping Array

      //get Filterd Products with fshipping array
      let filteredProducts = this.state.subcategoryprods.filter(item =>
        (this.state.fcolor.includes(item.color))
        || (this.state.fbrand.includes(`${item.brandId}`))
        || (this.state.fshipping.includes(item.ship))
        || (item.rating >= parseFloat(this.state.frating))
        || (item.discount >= parseFloat(this.state.fdiscount))
        //||(item.price >= this.state.minslid && item.price <= parseFloat(this.state.slidprice))
      );
      await this.setState({ filteredArray: filteredProducts })
    }
  }
  handlercheckedradio = async (e) => {

    //=========================discount filter=============================================
    if (e.target.name == "discount") {

      //console.log(parseInt(e.target.value) * .01)

      if (e.target.checked) {

        this.setState({ fdiscount: parseInt(e.target.value) * .01 })
      } else {
        this.setState({ fdiscount: "" })

      }
      let filteredProducts = this.state.subcategoryprods.filter(item =>
        (this.state.fcolor.includes(item.color))
        || (this.state.fbrand.includes(`${item.brandId}`))
        || (this.state.fshipping.includes(item.ship))
        || (item.rating >= parseFloat(this.state.frating))
        || (item.discount >= parseFloat(this.state.fdiscount))
        //||(item.price >= this.state.minslid && item.price <= parseFloat(this.state.slidprice))
      );
      await this.setState({ filteredArray: filteredProducts })

      console.log(this.state.filteredArray)
    }
    //===============================rating filter====================================
    if (e.target.name == "rating") {


      if (e.target.checked) {

        await this.setState({ frating: parseInt(e.target.value) })

      } else {
        await this.setState({ frating: "" })

      }

      let filteredProducts = this.state.subcategoryprods.filter(item =>
        (this.state.fcolor.includes(item.color))
        || (this.state.fbrand.includes(`${item.brandId}`))
        || (this.state.fshipping.includes(item.ship))
        || (item.rating >= parseFloat(this.state.frating))
        || (item.discount >= parseFloat(this.state.fdiscount))
        //||(item.price >= this.state.minslid && item.price <= parseFloat(this.state.slidprice))
      );
      await this.setState({ filteredArray: filteredProducts })

      //console.log(this.state.filteredArray)
    }
  }



  //Color Filteration complete
  //TODO Rest Filters
  handleprice = async (e) => {
    if (e.target.name == "price") {
      await this.setState({ slidprice: e.target.value, maxslid: e.target.max, minslid: e.target.min * .2 })
      console.log(this.state.minslid, this.state.slidprice)
      let filteredProducts = this.state.subcategoryprods.filter(item =>
        (this.state.fcolor.includes(item.color))
        || (this.state.fbrand.includes(`${item.brandId}`))
        || (this.state.fshipping.includes(item.ship))
        || (item.rating >= parseFloat(this.state.frating))
        || (item.discount >= parseFloat(this.state.fdiscount))
        || (item.price >= this.state.minslid && item.price <= parseFloat(this.state.slidprice)));
      await this.setState({ filteredArray: filteredProducts })
      // console.log(this.state.filteredArray)
    }
  }



  async componentDidMount() {
    await this.getsubcategdata(this.props.match.params.id);
    await this.getsubcategorybrands(this.props.match.params.id);
    await this.getsubcategorycolors(this.props.match.params.id);
    await this.getsubcatprices(this.props.match.params.id);
    //console.log(this.props.match.params.id)
  }
    render() { 
        return (
          <div className="container my-3">
         <div className="container p-0 rounded">
          <div className="row m-0 p-0">
            {/* Filter */}
            
            <div
              className="col-md-3 rounded p-0"
              style={{
                background: "url('') fixed no-repeat",
                backgroundPosition: "left",
                // backgroundRepeat: "no-repeat",
                backgroundAttachment: "inherit",
                // backgroundOrigin: "border-box",
                // backgroundClip: "border-box",
                // backgroundColor: "initial",
                // backgroundSize: "contain",
                backgroundSize: "cover",
                // backgroundPositionX: "350px",
                // backgroundPositionY: "10px",
              }}
            >
              <nav className="navbar p-0">
                <ul
                  className="navbar-nav w-100"
                  style={{ fontSize: "16px", fontWeight: "600" }}
                >
                  <h4 className="text-center card-header">Filter By</h4>
                  <div className="dropdown-divider" />
                  {this.state.subcatatbrands && (
                    <>
                      {" "}
                      <li className="nav-item mt-2  mb-2">Brand</li>
                      <li className="nav-item ml-3 ni">
                        {this.state.subcatatbrands.map((c, i) => (
                          <div key={i}>
                            <input
                              value={c.brandId}
                              name="brand"
                              type="checkbox"
                              onChange={this.handlechecked}
                            />{" "}
                            {c.brandName}
                          </div>
                        ))}
                      </li>
                    </>
                  )}
                  <li className="nav-item mt-2  mb-2">PRICE(EGP)</li>
                  <li className="nav-item ml-3">
                    <input
                      name="price"
                      className="w-50 appearance-none bg-transparent range-slider-thumb-custom"
                      type="range"
                      min={Math.min.apply(null, this.state.prices)}
                      max={Math.max.apply(null, this.state.prices)}
                      step={10}
                      onChange={this.handleprice}
                    />
                    <br />
                    from :{" "}
                    <span className="badge badge-pill oranged text-white p-1 font-weight-bold">
                      {Math.ceil(Math.min.apply(null, this.state.prices))}
                    </span>{" "}
                    EGY
                    <br /> to :{" "}
                    <span className="badge badge-pill oranged text-white p-1 font-weight-bold">
                      {" "}
                      {Math.ceil(this.state.slidprice)}
                    </span>{" "}
                    EGY
                  </li>
                  
                  {this.state.colors && (
                    <>
                      <li className="nav-item mt-2  mb-2">Color</li>
                      <li className="nav-item ml-3 ni">
                        {this.state.colors.map((c, i) => (
                          <div key={i}>
                            <input
                              type="checkbox"
                              value={c}
                              name="color"
                              onChange={this.handlechecked}
                            />{" "}
                            {c}
                          </div>
                        ))}
                      </li>
                    </>
                  )}

                  <div className="dropdown-divider" />
                  <li className="nav-item mt-2  mb-2">Shipped from</li>
                  <li className="nav-item ml-3">
                    <input
                      type="checkbox"
                      name="shipping"
                      value="0"
                      onChange={this.handlechecked}
                    />{" "}
                    Shipped from Egypt <br />
                    <input
                      type="checkbox"
                      name="shipping"
                      name="shipping"
                      value="1"
                      onChange={this.handlechecked}
                    />{" "}
                    Shipped from abroad
                  </li>
                  <div className="dropdown-divider" />
                  <li className="nav-item  mt-2  mb-2 ">PRODUCT DISCOUNT</li>
                  <li className="nav-item ml-3 ni">
                    <input
                      type="radio"
                      name="discount"
                      value="80"
                      onChange={this.handlercheckedradio}
                    />{" "}
                    80% or more <br />
                    <input
                      type="radio"
                      name="discount"
                      value="60"
                      onChange={this.handlercheckedradio}
                    />{" "}
                    60% or more <br />
                    <input
                      type="radio"
                      name="discount"
                      value="40"
                      onChange={this.handlercheckedradio}
                    />{" "}
                    40% or more <br />
                    <input
                      type="radio"
                      name="discount"
                      value="20"
                      onChange={this.handlercheckedradio}
                    />{" "}
                    20% or more <br />
                  </li>
                  <div className="dropdown-divider" />
                  <li className="nav-item  mt-2  mb-2 ">Product Rating</li>
                  <IconContext.Provider
                    value={{ color: "", className: "mr-1" }}
                  >
                    <li className="nav-item ml-3 ni ">
                      <input
                        type="radio"
                        className="mr-2"
                        className="mr-2"
                        name="rating"
                        value={4}
                        onChange={this.handlercheckedradio}
                      />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      &amp; above
                      <br />
                      <input
                        type="radio"
                        className="mr-2"
                        className="mr-2"
                        name="rating"
                        value={3}
                        onChange={this.handlercheckedradio}
                      />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      &amp; above
                      <br />
                      <input
                        type="radio"
                        className="mr-2"
                        name="rating"
                        value={2}
                        onChange={this.handlercheckedradio}
                      />
                      <FaStar />
                      <FaStar />
                      &amp; above
                      <br />
                      <input
                        type="radio"
                        className="mr-2"
                        name="rating"
                        value={1}
                        onChange={this.handlercheckedradio}
                      />
                      <FaStar />
                      &amp; above
                      <br />
                    </li>
                  </IconContext.Provider>
                  
                 
                </ul>
              </nav>
            </div>
            {(this.state.filteredArray.length == 0 && this.state.fcolor == 0 && this.state.fbrand == 0 && this.state.fshipping == 0 && this.state.fdiscount == "" && this.state.frating == "") ?
              <DisplayedProducts prods={this.state.subcategoryprods} name={this.props.location.name} /> : <DisplayedProducts prods={this.state.filteredArray} name={this.props.location.name} />}
          </div>
        </div>
        {this.state.subcatatbrands.length>0&&  <div className="container-fluid mt-5">
          <Brand sendBrands={this.state.subcatatbrands} imgpath="https://localhost:44340/images/" />
        </div>}
        </div>
        )}}

        export default Subcategory;