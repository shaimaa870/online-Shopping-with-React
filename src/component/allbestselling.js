
import React, { Component } from 'react';
import axios from 'axios';
import AllProducts from './AllProducts';
import { Pagination } from './Pagination';



export class AllBestSelling extends Component {
  state = {
    products: [],
    loading: false,
    currentPage: 1,
    productsPerPage: 4
  };
   getproducts = async () => {
    this.setState({ loading: true });
   
   // const results = await axios.get('https://localhost:44340/api/ProductsAPi');

    this.setState({ products: this.props.location.HandlerSaving });
    this.setState({ loading: false });
   // console.log("ss:"+results.data);
  };

  componentDidMount() {
    

    this.getproducts();
  }

  render() {
    //console.log("location",this.props.location)
    if(this.state.products===undefined){
      return (<div>Loading.............................</div>)
    }
    else{
    const { currentPage, productsPerPage, products, loading } = this.state;

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = pageNum => this.setState({ currentPage: pageNum });

    const nextPage = () => this.setState({ currentPage: currentPage + 1 });

    const prevPage = () => this.setState({ currentPage: currentPage - 1 });

    return (
      <div className="container mt-2">
        <AllProducts products={currentProducts} loading={loading} />
        <Pagination productsPerPage={productsPerPage} totalproducts={products.length} paginate={paginate} nextPage={nextPage} prevPage={prevPage} />
      </div>
    )
  }}
}

export default  AllBestSelling;