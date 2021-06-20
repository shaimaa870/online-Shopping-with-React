import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button, Dropdown, ButtonGroup } from "react-bootstrap";
import Brand from "./Brand data/brandimgs.jsx";
import Categoriesimages from "./Category data/Categoriesimags";
import CarouselData from "./carouselData";
import Subcategory from './subcategory data/subcategory';

class Home extends Component {
  state = {
    Catogeries: [],
    subcategories: [],
    Products: [],
    Brands: [],
    NewArrivals: [],
    TopSellings: [],
    user: JSON.parse(localStorage.getItem("user")),
    Recommended: [],
    TopPicks: [],
  };
  getnewArrivals = async () => {
    await axios.get("https://localhost:44340/allproduct").then((res) => {
      this.setState({ NewArrivals: res.data });
      //console.log("new arrival ",res.data);
    });
  };
  getbestselling = async () => {
    await axios.get("http://localhost:44340/highselling").then((res) => {
      this.setState({
        TopSellings: res.data,
        firstcards: res.data.slice(0, 4),
      });
      //console.log("bestsellings from home",res.data);
    });
  };

  getDataCategoryFromApi = () => {
    axios("https://localhost:44340/api/CategoriesAPi").then((res) => {
      this.setState({
        Catogeries: res.data,
      });
      // console.log("cat", res.data)
    });
  };
  getBrands = () => {
    axios("https://localhost:44340/api/BrandsAPi").then((res) => {
      this.setState({
        Brands: res.data,
      });
      // console.log("Brand", this.state.Brands);
    });
  };

  getrecommended = () => {
    if (this.state.user)
      axios(
        "https://localhost:44340/api/ProductsAPi/GetRecomendedProducts/" +
          this.state.user.id
      )
        .then((res) => {
          this.setState({
            Recommended: res.data,
          });
          //console.log("recommended", res.data);
        })
        .catch((err) => console.log(err));
  };
  getTopPicks = () => {
    axios("https://localhost:44340/api/ProductsAPi/GetRandomProducts/")
      .then((res) => {
        this.setState({
          TopPicks: res.data,
        });
        // console.log("top picks", res.data);
      })
      .catch((err) => console.log(err));
  };

  componentDidMount = () => {
    // if(localStorage.getItem("user")){
    //   let user=JSON.parse(localStorage.getItem("user"));
    //    this.setState({user})
    //     }
    this.getDataCategoryFromApi();
    this.getnewArrivals();
    this.getbestselling();
    this.getBrands();
    this.getrecommended();
    this.getTopPicks();
  };
  render() {
    //console.log("id",this.state.user)
    if (this.state.Catogeries.length === 0) {
      return <div>Loading......................</div>;
    } else {
      return (
        <React.Fragment>
          {/* Top */}
          <div className="container my-2 mt-2">
            <div className="row m-0 p-0">
              {/* Block1  Filter Catogeries*/}
              <div className=" col-12 col-md-3 p-0 m-0 item-box-blog rounded bg-dark">
                <div className="m-1 p-0" style={{overflowY:"scroll",height: "380px",backgroundColor: "#fff"}}>
                 <h4 className="">Categories</h4>
                  {this.state.Catogeries.map((cat, i) => (
                    <div
                      className="text-left"
                      style={{ borderBottom: "1px solid black", width: "100%" }}
                    >
                      <Dropdown as={ButtonGroup}>
                        <Link
                          variant="Warning"
                          className="dropItem m-2"
                          style={{textDecoration:"none",fontSize:"20px",fontWeight:"600"}}
                          to={{
                            pathname: `/category/${cat.categoryId}`,
                            HandlerSaving: cat.subCategories,
                            name: cat.categoryName,
                          }}
                        >
                          {cat.categoryName}
                        </Link>
                        <Dropdown.Toggle
                          split
                          variant=""
                          id={i}
                          className="text text-right"
                        />
                        <Dropdown.Menu style={{fontWeight:"600",fontSize:"20px"}}>
                          <h6 className="text-center">Subcategories</h6>
                          <hr classNam=""/>
                          {cat.subCategories.map((s, j) => (
                            <Dropdown.Item
                              href={"/subcategory/" + s.subcategoryId}
                              key={j}
                            >
                              {s.subcategoryName}
                            </Dropdown.Item>
                          ))}
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  ))}
                </div>
              </div>
              {/* Block2 Slider*/}
              <div className="d-none d-md-inline-block col-md-8 bloc1 mt-0 bg-dark ml-5 p-2">
                <div className=" ">
                  <div
                    id="carouselExampleCaptions"
                    className="carousel slide"
                    data-ride="carousel"
                  >
                    <ol className="carousel-indicators ">
                      <li
                        data-target="#carouselExampleCaptions "
                        data-slide-to={0}
                        className="active"
                      />
                      <li
                        data-target="#carouselExampleCaptions"
                        data-slide-to={1}
                      />
                      <li
                        data-target="#carouselExampleCaptions"
                        data-slide-to={2}
                      />
                      <li
                        data-target="#carouselExampleCaptions"
                        data-slide-to={3}
                      />
                    </ol>
                    <div className="carousel-inner bloc1">
                      <div className="carousel-item active sliditem">
                        <img
                          src="https://eg.jumia.is/cms/ramadan-21/1day-offer/7April/slider_Desktop_EN.jpg"
                          className="d-block w-100 h-100 img-fluid imgslid"
                          alt="..."
                        />
                      </div>
                      <div className="carousel-item bloc1">
                        <img
                          src="https://eg.jumia.is/cms/ramadan-21/sliders/Slider-Desktop-EN_.jpg"
                          className="d-block w-100 h-100 imgslid img-fluid "
                          alt="..."
                        />
                      </div>
                      <div className="carousel-item bloc1">
                        <img
                          src="https://eg.jumia.is/cms/ramadan-21/wof/7-4/Slider-Desktop-EN_-(1).jpg"
                          className="d-block w-100 h-100 imgslid img-fluid "
                          alt="..."
                        />
                      </div>
                      <div className="carousel-item bloc1">
                        <img
                          src="https://eg.jumia.is/cms/ramadan-21/sliders/slider_Desktop_EN_copy.jpg"
                          className="d-block w-100 h-100 imgslid img-fluid "
                          alt="..."
                        />
                      </div>
                    </div>
                    <a
                      className="carousel-control-prev"
                      href="#carouselExampleCaptions"
                      role="button"
                      data-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      />
                      <span className="sr-only">Previous</span>
                    </a>
                    <a
                      className="carousel-control-next"
                      href="#carouselExampleCaptions"
                      role="button"
                      data-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      />
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Sections */}
          
          <div className="container my-2">
            {/* Shop By Brand */}
            <Brand sendBrands={this.state.Brands} />
            {/* Top Picks for you */}
            <CarouselData
              id="tt"
              prods={this.state.TopPicks}
              heading="Top Picks for you"
            />
            {/* Recommened for you */}
            {this.state.Recommended && this.state.user && (
              <CarouselData
                prods={this.state.Recommended}
                heading="Recommened for you"
              />
            )}
            {/* Shop By Category */}
            <Categoriesimages sendCategories={this.state.Catogeries} />
            {/*  NewArrivals*/}
            <CarouselData
              id="nn"
              prods={this.state.NewArrivals}
              heading="New Arrivals"
            />
            {/* TopSellings */}
            {/* <CarouselData
              id="ss"
              prods={this.state.TopSellings}
              heading="Top Selling"
            /> */}
          </div>
        
        </React.Fragment>
      );
    }
  }
}

export default Home;
