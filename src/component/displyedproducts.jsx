import React, { Component } from 'react';
import Card from './Card';
import Pagination from './Pagination';

class DisplayedProducts extends Component {
    state = {
       
        currentPage: 1,
        productsPerPage: 20
      };
      componentDidMount() {
      }
    render() {
        if(this.props.prods===undefined){
            return (<div className=" container mt-4 mb-4 p-4 text-center alert alert-info">
            <h3>
            Products Loading ...
            </h3>  
              </div>)
          }
          else{
            const { currentPage, productsPerPage } = this.state;

            const indexOfLastProduct = currentPage * productsPerPage;
            const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
            const currentProducts =this.props.prods.slice(indexOfFirstProduct, indexOfLastProduct);
        
            const paginate = pageNum => this.setState({ currentPage: pageNum });
        
            const nextPage = () => {if(currentPage!=this.props.prods.length)this.setState({ currentPage: currentPage + 1 })};
        
            const prevPage = () =>{if(currentPage!=1)this.setState({ currentPage: currentPage - 1 })};
          
        return (
            <React.Fragment>
                <div className="row col-md-9 m-0 p-0 rounded" style={{  }}>
                    <div className="card" style={{ width: '100%',backgroundColor:"unset" }}>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item  text-center" style={{backgroundColor:"unset"}}><h4 className="font-weight-bold" style={{fontSize:"24px"}}>{this.props.name} Products</h4></li>
                            <li className="list-group-item  text-left" style={{backgroundColor:"unset"}}>
                                <h5>
                                    {this.props.prods.length} products found
                                    {this.props.prods.length!==0
                                    ?<i className="fa fa-check text-success ml-1 bg-warning rounded-circle p-1"></i>
                                    :<i className="fa fa-times text-danger ml-1 bg-light rounded-circle p-1" title="No Product Available"></i>
                                    }
                                </h5>
                             </li>
                            <li className="list-group-item p-0 mb-3"style={{backgroundColor:"unset"}}>
                                <div id="gallery1" className="carousel slide" data-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <div className="row rounded p-0 m-0 mb-2">
                                                {currentProducts.map((c,i)=><Card cardprod={c} key={i}/>)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            {
                                this.props.prods.length!==0
                                ?<li className="list-group-item  text-center" style={{backgroundColor:"unset"}}>    <Pagination  productsPerPage={productsPerPage} totalproducts={this.props.prods.length} paginate={paginate} nextPage={nextPage} prevPage={prevPage}/></li>
                                :null
                            }
                        </ul>
                    </div>
                </div>

            </React.Fragment>)
    }}
}
export default DisplayedProducts;