import React, { Component } from "react";
import axios from "axios";
import DisplayedProducts from "../displyedproducts";
import { IconContext } from "react-icons";
import { FaStar } from "react-icons/fa";
class Brand extends Component {
  state = {
    brandprods: [],
    slidprice:0,
    colors: [],
     sizes:[],
     prices:[],
     fcolor: [],
     frating: "",
     fshipping: [],
     fdiscount: "",
     filteredArray: []
  };
  getbrandprods = (_id) => {
    axios(
      "https://localhost:44340/api/CategoriesAPI/allProductBrand/" + _id
    ).then((res) => {
      this.setState({
        brandprods: res.data,
      });
      
    });
  };
  getbrandcolors = async (_id) => {
    await axios("https://localhost:44340/api/BrandsAPi/allcolorinBRAND/" + _id).then(async res => {
     await this.setState({ colors: res.data })
    }).catch(err => console.log(err))
  }
  getbrandtprices = async (_id) => {
    await axios("https://localhost:44340/api/BrandsAPi/AllPriceinBRAND/"+_id).then(async res => {
       //console.log(res.data);
      await this.setState({ prices: res.data,slidprice:Math.max.apply(null,res.data) })
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
        let filteredProducts = this.state.brandprods.filter(item =>
         (this.state.fcolor.includes(item.color))
        || (this.state.fshipping.includes(item.ship))
         || (item.rating >=parseFloat(this.state.frating))
        || (item.discount >=parseFloat(this.state.fdiscount))
        ||(item.price >= this.state.minslid && item.price <= parseFloat(this.state.slidprice)));
       await this.setState({ filteredArray: filteredProducts })
      }
   
      //=========================shipping filters=====================================================
      if (e.target.name == "shipping") {
        //Copy List of checked brand
        let nshipping = this.state.fshipping;
        //Push New brand
        if(e.target.checked){
          nshipping.push(parseInt(e.target.value))
        }else{
          let I = nshipping.indexOf(parseInt(e.target.value));
          nshipping.splice(I, 1);
        }
        
        await this.setState({ fnshipping: nshipping })
        let filteredProducts = this.state.brandprods.filter(item =>
          (this.state.fcolor.includes(item.color))
         || (this.state.fshipping.includes(item.ship))
          || (item.rating >=parseFloat(this.state.frating))
         || (item.discount >=parseFloat(this.state.fdiscount))
         ||(item.price >= this.state.minslid && item.price <= parseFloat(this.state.slidprice)));
        await this.setState({ filteredArray: filteredProducts })

        }
         }}
    
 


      handlercheckedradio=async(e)=>{

        //=========================discount filter=============================================
        if (e.target.name == "discount") {
      
          if (e.target.checked) {

          await  this.setState({ fdiscount: parseInt(e.target.value) * .01 })
          } else {
         await   this.setState({ fdiscount: "" })
            }
            console.log(this.state.fdiscount,this.state.frating)
            let filteredProducts = this.state.brandprods.filter(item =>
              (this.state.fcolor.includes(item.color))
            
              || (this.state.fshipping.includes(item.ship))
              || (item.rating >=parseFloat(this.state.frating))
               || (item.discount >=(this.state.fdiscount))
               ||(item.price >= this.state.minslid && item.price <= parseFloat(this.state.slidprice)));
            await this.setState({ filteredArray: filteredProducts })
        
           console.log(this.state.filteredArray)

           }
           //===============================rating filter====================================
           if (e.target.name == "rating") {
             
    if (e.target.checked) {

      await   this.setState({ frating: parseInt(e.target.value) })
   
       } else {
         await  this.setState({ frating: ""})
   
       } 
        let filteredProducts = this.state.brandprods.filter(item =>
        (this.state.fcolor.includes(item.color))
        
        || (this.state.fshipping.includes(item.ship))
        || (item.rating >=parseFloat(this.state.frating))
        || (item.discount >=parseFloat(this.state.fdiscount))
        ||(item.price >= this.state.minslid && item.price <= parseFloat(this.state.slidprice)));
      await this.setState({ filteredArray: filteredProducts })
  
      //console.log(this.state.filteredArray)
         
             }
          }
      //Color Filteration complete
      //TODO Rest Filters
      handleprice= async(e)=>{
        if(e.target.name=="price"){
          await  this.setState({ slidprice: e.target.value,maxslid:e.target.max,minslid:e.target.min*.2 })
         // console.log(this.state.minslid,this.state.slidprice)
          let filteredProducts = this.state.brandprods.filter(item =>
           (this.state.fcolor.includes(item.color))
           
           || (this.state.fshipping.includes(item.ship))
           || (item.rating >=parseFloat(this.state.frating))
           || (item.discount >=parseFloat(this.state.fdiscount))
           ||(item.price >= this.state.minslid && item.price <= parseFloat(this.state.slidprice)));
           await this.setState({ filteredArray: filteredProducts })
           // console.log(this.state.filteredArray)
           }

      }
    
  async componentDidMount() {
    await this.getbrandprods(this.props.match.params.id);
    await this.getbrandcolors(this.props.match.params.id);
    await this.getbrandtprices(this.props.match.params.id);
  }
  render() {
    return (
      <React.Fragment>
         <div className="container p-0 rounded">
          <div className="row m-0 p-0">
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
                  <li className="nav-item  mt-2  mb-2 ">Product Rating</li>
                  <IconContext.Provider
                    value={{ color: "", className: "mr-1" }}
                  >
                    <li className="nav-item ml-3 ni ">
                      <input
                        type="radio"
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
                      value="1"
                      onChange={this.handlechecked}
                    />{" "}
                    Shipped from Egypt <br />
                    <input
                      type="checkbox"
                      name="shipping"
                      value="2"
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
                </ul>
              </nav>
            </div>
            
            {(this.state.filteredArray.length == 0 && this.state.fcolor == 0 && this.state.fshipping == 0)&&this.state.fdiscount==""&&this.state.frating=="" ?
            <DisplayedProducts prods={this.state.brandprods} name={this.props.location.name} /> : <DisplayedProducts prods={this.state.filteredArray} name={this.props.location.name} />}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Brand;
