import React, { Component } from 'react';
import axios from 'axios';
import DisplayedProducts from '../displyedproducts';


class  Subcategory extends Component {
    state = {
        subcategoryprods:[],
        subcatatbrands:[]
      }

      getsubcategdata=(_id)=>{
          
    axios("https://localhost:44340/api/SubCategoriesAPI/categoryproduct/"+_id).then(res => {

        this.setState({
        subcategoryprods: res.data
        })
        //console.log("cat", res.data)
      });
      }
      getsubcategorybrands=(_id)=>{
        axios("http://localhost:21231/api/Categories/allBrandInsubcategory/"+_id).then(res => {

        this.setState({
          subcatatbrands: res.data
        })
        console.log("cat", res.data)
      });

      }
      componentDidMount(){
        this.getsubcategdata(this.props.match.params.id);
        //console.log(this.props.match.params.id)
      }
    render() { 
        return (
            <div className="container my-3 ">
             <DisplayedProducts prods={this.state.subcategoryprods}/>
            </div>

        )}}

        export default Subcategory;