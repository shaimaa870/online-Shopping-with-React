import React, { Component } from "react";
import axios from "axios";
import Brand from "../Brand data/brandimgs";
import DisplayedProducts from "../displyedproducts";
import SubcatProd from "./subcatprod";
import { IconContext } from "react-icons";
import { FaStar } from "react-icons/fa";
class Category extends Component {
  state = {
    subcategCat: [],
    slidprice: 0,
    maxslid:0,
    minslid:0,
    Catbrands: [],
    colors: [],
    sizes: [],
    prices: [],
    categoryprods: [],

    fcolor: [],
    fbrand: [],
    frating: "",
    fshipping: [],
    fdiscount: "",
    filteredArray: []

  }


  getcategprods = async (_id) => {
    await axios("https://localhost:44340/api/CategoriesAPi/allproductonlyIncategory/" + _id).then(async res => {
      await this.setState({ categoryprods: res.data })
    });
  }
  getcategorybrands = async (_id) => {
    await axios("https://localhost:44340/api/CategoriesAPi/allBrandIncategory/" + _id).then(async res => {
      await this.setState({ Catbrands: res.data })
    });
  }
  getcategorycolors = async (_id) => {
    await axios("https://localhost:44340/api/CategoriesAPi/allcategorycolor/" + _id).then(async res => {
      await this.setState({ colors: res.data })
    }).catch(err => console.log(err))
  }
  getcatsizes = async (_size) => {
    await axios("https://localhost:44340/api/Categories/brand/").then(async res => {
      console.log(res.data);
      await this.setState({ catbrandprods: res.data })
    }).catch(err => console.log(err))

  }
  getcatprices = async (_id) => {
    await axios("https://localhost:44340/api/CategoriesAPi/allcategoryprice/" + _id).then(async res => {
      //console.log(res.data);
      await this.setState({ prices: res.data, slidprice: Math.max.apply(null, res.data) })
    }).catch(err => console.log(err))

  }
  getcatbrandprods = async (_barnd) => {
    await axios("https://localhost:44340/api/Categories/brand/").then(async res => {
      console.log(res.data);
      await this.setState({ catbrandprods: res.data })
    }).catch(err => console.log(err))

  }


  getsubcategincategory = async (_id) => {
    await axios("https://localhost:44340/api/CategoriesAPi/categoryproduct/" + _id).then(async res => {
      await this.setState({ subcategCat: res.data })
      //console.log(res.data,"kkkkk",this.state.subcategCat)
    }).catch(err => console.log(err));

  }



  handlechecked = async (e) => {
    const{fcolor,fbrand,fshipping,frating,fdiscount,categoryprods,filteredArray}=this.state;
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
     
         let filteredProducts = categoryprods.filter(item =>
          (fcolor.includes(item.color))
          || (fbrand.includes(`${item.brandId}`))
          || (fshipping.includes(item.ship))
          || (item.rating >=parseFloat(frating))
         || (item.discount >=parseFloat(fdiscount))
        //  ||(item.price >= this.state.minslid && item.price <= parseFloat(this.state.slidprice))
         );
        await this.setState({ filteredArray: filteredProducts })
        //console.log(this.state.filteredArray)
        } 
      
      //==========================brands filter======================================================
      if (e.target.name == "brand") {
        //Copy List of checked brand
        let nbrands = fbrand;
        //Push New brand
        if (e.target.checked) {
          nbrands.push(e.target.value)
        } else {
          let I = nbrands.indexOf(e.target.value);
          nbrands.splice(I, 1);
        }
        await this.setState({ fbrand: nbrands })
        if(frating && fbrand.length>0){
          let filteredProducts = categoryprods.filter(item =>
           (fbrand.includes(`${item.brandId}`))
          && (item.rating >=parseFloat(frating))
           );
          await this.setState({ filteredArray: filteredProducts })
    
         }else{
        let filteredProducts =categoryprods.filter(item =>
          (fcolor.includes(item.color))
          || (fbrand.includes(`${item.brandId}`))
          || (fshipping.includes(item.ship))
          || (item.rating >=parseFloat(frating))
         || (item.discount >=parseFloat(fdiscount))
        // ||(item.price >= this.state.minslid && item.price <= parseFloat(this.state.slidprice))
         );
         await this.setState({ filteredArray: filteredProducts })
        //console.log(this.state.filteredArray)
      }}
      //=========================shipping filters=====================================================
      if (e.target.name == "shipping") {
        //Copy List of checked brand
        let nshipping = fshipping;
        //Push New brand
        if (e.target.checked) {
          nshipping.push(parseInt(e.target.value))
        } else {
          let I = nshipping.indexOf(parseInt(e.target.value));
          nshipping.splice(I, 1);
        }
        await this.setState({ fnshipping: nshipping })
        if(frating && fbrand.length>0){
          let filteredProducts = categoryprods.filter(item =>
           (fbrand.includes(`${item.brandId}`))
          && (item.rating >=parseFloat(frating))
           );
          await this.setState({ filteredArray: filteredProducts })
    
         }else{
        let filteredProducts = categoryprods.filter(item =>
          (fcolor.includes(item.color))
          || (fbrand.includes(`${item.brandId}`))
          || (this.state.fshipping.includes(item.ship))
          || (item.rating >=parseFloat(this.state.frating))
         || (item.discount >=parseFloat(this.state.fdiscount))
         //||(item.price >= this.state.minslid && item.price <= parseFloat(this.state.slidprice))
         );
        await this.setState({ filteredArray: filteredProducts })
        //console.log(filteredProducts)
     }}
    }
  }


  handlercheckedradio = async (e) => {
    const{fcolor,fbrand,fshipping,frating,fdiscount,categoryprods,filteredArray}=this.state;

    //   //=========================discount filter=============================================
    if (e.target.name == "discount") {
      if (e.target.checked) {
     await  this.setState({ fdiscount: parseInt(e.target.value) * .01 })
      } else {
        this.setState({ fdiscount: "" })
          }
      let filteredProducts =categoryprods.filter(item =>
        (fcolor.includes(item.color))
        || (fbrand.includes(`${item.brandId}`))
        || (fshipping.includes(item.ship))
        || (item.rating >=parseFloat(frating))
         || (item.discount >=parseFloat(fdiscount))
        // ||(item.price >= this.state.minslid && item.price <= parseFloat(this.state.slidprice))
         );
      await this.setState({ filteredArray: filteredProducts })
  
     // console.log(this.state.filteredArray)
    }
  
  //===============================rating filter====================================
  if(e.target.name == "rating") {
    if (e.target.checked) {
   await   this.setState({ frating: parseInt(e.target.value) })
   } else {
      await  this.setState({ frating: ""})
     }
     if(frating && fbrand.length>0){
      let filteredProducts = categoryprods.filter(item =>
       (fbrand.includes(`${item.brandId}`))
      && (item.rating >=parseFloat(frating))
       );
      await this.setState({ filteredArray: filteredProducts })

     }else{
    let filteredProducts = categoryprods.filter(item =>
      (fcolor.includes(item.color))
      || (fbrand.includes(`${item.brandId}`))
      || (fshipping.includes(item.ship))
      || (item.rating >=parseFloat(frating))
      || (item.discount >=parseFloat(fdiscount))
      ||(item.price >= this.state.minslid && item.price <= parseFloat(this.state.slidprice)));
    await this.setState({ filteredArray: filteredProducts })
   // console.log(this.state.filteredArray)
          }}
        }


//Color Filteration complete
//TODO Rest Filters
handleprice = async (e) => {
  const{fcolor,fbrand,fshipping,frating,fdiscount,categoryprods,filteredArray}=this.state;
  if (e.target.name == "price") {
  await  this.setState({ slidprice: e.target.value,maxslid:e.target.max,minslid:e.target.min*.2 })
   console.log(this.state.minslid,this.state.slidprice)
   let filteredProducts = categoryprods.filter(item =>
    (fcolor.includes(item.color))
    || (fbrand.includes(`${item.brandId}`))
    || (fshipping.includes(item.ship))
    || (item.rating >=parseFloat(frating))
    || (item.discount >=parseFloat(fdiscount))
    ||(item.price >= this.state.minslid && item.price <= parseFloat(this.state.slidprice)));
    await this.setState({ filteredArray: filteredProducts })
    // console.log(this.state.filteredArray)



  }

}



async componentDidMount() {
  await this.getsubcategincategory(this.props.match.params.id);
  await this.getcategorybrands(this.props.match.params.id);
  await this.getcategorycolors(this.props.match.params.id);
  await this.getcategprods(this.props.match.params.id);
  await this.getcatprices(this.props.match.params.id);


}
  render() {
    return (
      <div
        className="container mb-2 p-2 rounded"
       
      >
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
                  {/* <li className="nav-item  mt-2  mb-2 ">Product Rating</li>
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
                  </IconContext.Provider> */}
                  <div className="dropdown-divider" />
                  {this.state.Catbrands && (
                    <>
                      {" "}
                      <li className="nav-item mt-2  mb-2">Brand</li>
                      <li className="nav-item ml-3 ni">
                        {this.state.Catbrands.map((c, i) => (
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
                  <div className="dropdown-divider" />
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
                  
                  <div className="dropdown-divider" />
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
            {/* Products */}
            {(this.state.filteredArray.length == 0 && this.state.fcolor == 0 && this.state.fbrand == 0 && this.state.fshipping == 0 && this.state.fdiscount == "" && this.state.frating == "") ?
            <DisplayedProducts prods={this.state.categoryprods} name={this.props.location.name} /> : <DisplayedProducts prods={this.state.filteredArray} name={this.props.location.name} />}
          </div>
        </div>
        {this.state.Catbrands.length > 0 && (
          <div className="container mt-3 mb-3 rounded">
            <Brand
              sendBrands={this.state.Catbrands}
              imgpath="https://localhost:44340/images/"
            />
          </div>
        )}
        {this.state.subcategCat && (
          <div className="container-fluid mt-5">
            <SubcatProd subcategories={this.state.subcategCat} />
          </div>
        )}
      </div>
    );
  }
}

export default Category;
