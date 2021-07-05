import React, { Component } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

import "../Styles/Footer.css";
import "../Styles/NavBar.css";
import "../Styles/JumiaAccount.css";
import "../Styles/Home.css";
import "../Styles/ChangePassword.css";
import "../Styles/Product.css";
import "../Styles/Category.css";
import "../Styles/chat.css";
 import "../Styles/checkout.css"
import "../Styles/Login.css";
import Footer from "./navBar-component/Footer";
import JumiaAccount from "./CustomerAccount/JumiaAccount";
import Category from "./Category data/category";
import AuthService from "./Services/auth.service";
import RecentlyViewed from "./CustomerAccount/Recentlyviews";
import NavBar from "./navBar-component/Nav";
import Card from "./Card";
import Login from "./Sign In/Login";
import Register from "./Sign In/Register";
import Home from "./Home";
import Brand from "./Brand data/brand";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import HelpCenter from "./HelpCenter";
import Cart from "./Cart";
import NavSeller from "./SellerComponent/NavSeller";
import Knowledge from "./SellerComponent/KnowledgeTraning/Knowledge";
import Community from "./SellerComponent/VendorCommunity/Community";
import Stories from "./SellerComponent/VendorCommunity/Stories";
import Events from "./SellerComponent/VendorCommunity/Events";
import Stations from "./SellerComponent/Stations";
import BookTraining from "./SellerComponent/Training/BookTraining";
import VendorHelp from "./SellerComponent/VendorHelp";
import VendorHub from "./SellerComponent/VendorHub";
import JumiaTrain from "./SellerComponent/Training/JumiaTrain";
import ClaimForm from "./SellerComponent/ClaimForm";
import AllBestSelling from "./allbestselling";
import Product from "./Product";
import SubcatProd from "./Category data/subcatprod";
import Images from "./Images";
import Subcategory from "./subcategory data/subcategory";
import SavedItems from "./CustomerAccount/SavedItems";
import AllBrandsPagination from "./Brand data/allBrandsPagination";
import Form from './SellerComponent/Training/Form';
import SearchResult from "./search";
import CheckOut from './Checkout';
import Chatbody from "./CustomerAccount/chatbody";
class App extends Component {
  state = {
    Customers: [],
    products: [],
    RecentlyViewed: [],
    productsIncart: [],
    totalPrice: 0,
    cartid:localStorage.getItem("cartid")
    // searchString:'',
    // searchResult:[],
  };
  async getAllProduct() {
    const { data } = await axios.get("https://localhost:44340/api/ProductsAPi");
    this.setState({ products: data });
  }


  
  async getcartdata (){
    if(AuthService.getCurrentUser()){
    const {data}=await axios.get("https://localhost:44340/api/CartsItemAPi/getcartforCustomer/"+AuthService.getCurrentUser().id);
    //this.setState({cartid:data.id});
    localStorage.setItem("cartid", data.id);
    
    //console.log("cart data",data)
    //console.log(this.state.cartid)
 
   }}
 
   async getProductCart() {
     if(AuthService.getCurrentUser()){
     const {data}  = await axios.get(
        "https://localhost:44340/api/CartsItemAPi/productsIncart/"+this.state.cartid
      );
      this.setState({productsIncart:data});
     // console.log("prods cart",data, "fff",this.state.productsIncart)
    }};
 

 
 
 
  // Add To Cart
 
    addToCart= async(productid)=> {
     if(AuthService.getCurrentUser()){
      //console.log("pid",productid)
     const productsIncart = [...this.state.productsIncart];
     this.setState({productsIncart});
 
      try {
       await axios.post(
 
        "https://localhost:44340/addproducttoCART/"+AuthService.getCurrentUser().id,{"id":productid}
       ).then(res=>{toast.success(`Product Added`);window.location.reload();});
     } catch (ex) {
       toast.error("Can't Add Or already Exist");
       this.setState({ productsIncart: productsIncart });
     }
      console.log(AuthService.getCurrentUser().id);
    }};
 
  getRecentlyViewed = () => {
    if (AuthService.getCurrentUser()) {
      axios(
        "https://localhost:44340/api/ProductsAPi/GetAllView/" +
          AuthService.getCurrentUser().id
      )
        .then((res) => {
          this.setState({
            RecentlyViewed: res.data,
          });
          //console.log("rec viewed",res.data)
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  async componentDidMount() {
    this.getRecentlyViewed();
    this.getAllProduct();
    this.getProductCart();
   
    this.getcartdata();
  }
  
  render() {
   
    return (
      <React.Fragment>
        <Helmet>
          <title>J6 Ecommerece</title>
        </Helmet>
        {/* Toast just for notification  */}
        <ToastContainer />
        <Router>
       
          <Route render={(props)=><NavBar {...props} user={this.state.user}
            productsCart={this.state.productsIncart} />} />
          <Switch>
            <Route component={Home} path="/" exact />
            <Route component={Home} path="/Home" exact />
            
            <Route
              component={(props) => <Register {...props} />}
              path="/Register"
            />
            <Route component={(props) => <Login {...props} />} path="/Login" />
            <Route
              component={(props) => <AllBestSelling 
                product={this.state.products}
              {...props}
              onAdd={this.addToCart} />}
              path="/allbestselling"
            />
            {/* <Route render={()=>AuthService.logout()}  path="/logout"/> */}
            <Images path="/Images/" exact />
            <Route
              render={(props) => <Product productsIncart={this.state.productsIncart} {...props} onDelete={this.deleteFromCart} onAdd={this.addToCart} />}
              path="/product/:id"
            />
            <Route
              render={(props) => <SubcatProd {...props} />}
              path="/subcatprod"
            />
            <Route
              render={(props) => <Category {...props} />}
              path="/category/:id"
            />
            <Route
              render={(props) => (
                <Card
                  product={this.state.products}
                  {...props}
                  onAdd={this.addToCart}
                />
              )}
              path="/card"
            />
            
            <Route
              render={(props) => <Subcategory {...props} />}
              path="/subcategory/:id"
            />
            <Route render={(props) => <Brand {...props} />} path="/brand/:id" />
            <Route
              render={(props) => <SavedItems {...props} />}
              path="/saveditems"
            />
            <Route
              render={(props) => <AllBrandsPagination {...props} />}
              path="/AllBrands"
            />
              <Route 
                 render={(props) => <SearchResult {...props}  />}
                  path="/search"
                         />
            <JumiaAccount path="/Account" />
            <Route path="/AboutUs" component={AboutUs} />
            <Route path="/ContactUs" component={ContactUs} />
            <Route path="/HelpCenter" component={HelpCenter} />
            <Route
              path="/Cart"
              render={(props) => (
                <Cart
                  productsCart={this.state.productsIncart}
                  totalPrice={this.state.totalPrice}
                  onDelete={this.deleteFromCart}
                  onAdd={this.incrementQuantity}
                  {...props}
                />
              )}
            />
            <Route path="/CheckOut"
            render={(props) => (
              <CheckOut
                productsCart={this.state.productsIncart}
                totalPrice={this.state.totalPrice}
                user={this.state.user}
                {...props}
              />
            )}
            />
            <Route path="/Product" component={Product} />
            <Route render={(props)=><Chatbody {...props}/> } path="/chat/:id"/>
            <Router>
              <NavSeller />
              <div className="">
              <Route component={Form} path="/Traning/Form"/>
                <Route component={Knowledge} path="/Knowledge" />
                <Route component={VendorHub} path="/VendorHub" />
                <Route component={Community} path="/Vendor/Community" />
                <Route component={Stories} path="/Vendor/Stories" />
                <Route component={Events} path="/Vendor/Events" />
                <Route component={Stations} path="/Stations" />
                <Route component={BookTraining} path="/BookTraining" />
                <Route component={VendorHelp} path="/VendorHelp" />
                <Route component={JumiaTrain} path="/JumiaTrain" />
                <Route component={ClaimForm} path="/ClaimForm" />
              </div>
              {/* <FooterSeller /> */}
            </Router>
          </Switch>
          <RecentlyViewed prods={this.state.RecentlyViewed} />
          <Footer />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
