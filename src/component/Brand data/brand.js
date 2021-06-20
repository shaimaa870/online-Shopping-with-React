import React, { Component } from "react";
import axios from "axios";
import DisplayedProducts from "../displyedproducts";
class Brand extends Component {
  state = {
    brandprods: [],
  };
  getbrandprods = (_id) => {
    axios(
      "https://localhost:44340/api/CategoriesAPI/allProductBrand/" + _id
    ).then((res) => {
      this.setState({
        brandprods: res.data,
      });
      //console.log("cat", res.data)
    });
  };
  async componentDidMount() {
    await this.getbrandprods(this.props.match.params.id);
  }
  render() {
    return (
      <React.Fragment>
        {/* <Allprodsfilters prods={this.state.brandprods}/> */}
        <div className="container my-3  text-center">
          <DisplayedProducts prods={this.state.brandprods} />
        </div>
      </React.Fragment>
    );
  }
}
export default Brand;
