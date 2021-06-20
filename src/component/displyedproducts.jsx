import React, { Component } from 'react';
import Card from './Card';
import Pagination from './Pagination';

class DisplayedProducts extends Component {
    state = {
       
        loading: false,
        currentPage: 1,
        productsPerPage: 8
      };
      getproducts = async () => {
        this.setState({ loading: true });
       
       // const results = await axios.get('https://localhost:44340/api/ProductsAPi');
    
       // this.setState({ products: this.props.prods});
        this.setState({ loading: false });
       // console.log("ss:"+results.data);
      };
    
      componentDidMount() {
        
    
        //this.getproducts();
      }
    render() {
        if(this.props.prods===undefined){
            return (<div>Loading.............................</div>)
          }
          else{
            const { currentPage, productsPerPage, loading } = this.state;

            const indexOfLastProduct = currentPage * productsPerPage;
            const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
            const currentProducts =this.props.prods.slice(indexOfFirstProduct, indexOfLastProduct);
        
            const paginate = pageNum => this.setState({ currentPage: pageNum });
        
            const nextPage = () => this.setState({ currentPage: currentPage + 1 });
        
            const prevPage = () => this.setState({ currentPage: currentPage - 1 });
          
        return (
            <React.Fragment>
                <div className="row col-md-8 mt-sm-5 mt-md-0" style={{ backgroundColor: 'white', marginLeft: 20 }}>
                    <div className="card mt-4 mb-4" style={{ width: '70rem' }}>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"><h6 className="font-weight-bold" style={{fontSize:"24px"}}>{this.props.name} Products</h6></li>
                            <li className="list-group-item">{this.props.prods.length} products found</li>
                            <li className="list-group-item">
                                <section>
                                    <div className="container ">
                                        <div id="gallery1" className="carousel slide" data-ride="carousel">
                                            <div className="carousel-inner">
                                                <div className="carousel-item active">
                                                    <div className="row rounded p-2">
                                                      {currentProducts.map((c,i)=><Card cardprod={c} key={i}/>)}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                     {/* {currentProducts.map((c,i)=><Card cardprod={c} key={i}/>)} */}
                                </section>
                            </li>
                        </ul>
                      <Pagination  productsPerPage={productsPerPage} totalproducts={this.props.prods.length} paginate={paginate} nextPage={nextPage} prevPage={prevPage}/>
                    </div>
                </div>

            </React.Fragment>)
    }}
}
export default DisplayedProducts;