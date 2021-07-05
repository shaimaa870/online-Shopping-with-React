
import React, { Component } from 'react';
import axios from 'axios';
import AllProducts from './AllProducts';
import { Pagination } from './Pagination';



export class AllBestSelling extends Component {
  state = {
    products: [],
    loading: false,
    currentPage: 1,
    productsPerPage: 20
  };
   getproducts = async () => {
    this.setState({ loading: true });
   
   // const results = await axios.get('https://localhost:44340/api/ProductsAPi');

    this.setState({ products: this.props.product });
    this.setState({ loading: false });
   // console.log("ss:"+results.data);
  };

  componentDidMount() {
    

    this.getproducts();
  }

  render() {
    if(this.state.products===undefined){
      return (<div className=" container mt-4 mb-4  p-4 text-center alert alert-info">
      <h3>
      Products Loading ...
      </h3>  
        </div>)
    }
    else{
    const { currentPage, productsPerPage, products, loading } = this.state;

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = pageNum => this.setState({ currentPage: pageNum });

    const nextPage = () => {if(currentPage!=products.length)this.setState({ currentPage: currentPage + 1 })};

    const prevPage = () => {if(currentPage!=1)this.setState({ currentPage: currentPage - 1 })};

    return (
      <div className="container mt-2 bg-dark p-2 rounded"
      style={{
        background:
          "url('https://store.hp.com/app/assets/images/uploads/prod/25-best-hd-wallpapers-laptops159561982840438.jpg?impolicy=prdimg&imdensity=1&imwidth=1000') fixed  no-repeat",
          // backgroundPosition: "left",
          // backgroundRepeat: "no-repeat",
          // backgroundAttachment: "inherit",
          // backgroundOrigin: "border-box",
          // backgroundClip: "border-box", 
          // backgroundColor: "initial",
          // backgroundSize: "contain",
          backgroundSize: "cover",
          // backgroundPositionX: "350px",
          // backgroundPositionY: "10px",

      }}
      >
        <AllProducts products={currentProducts} loading={loading} />
        <Pagination productsPerPage={productsPerPage} totalproducts={products.length} paginate={paginate} nextPage={nextPage} prevPage={prevPage} />
      </div>
    )
  }}
}

export default  AllBestSelling;