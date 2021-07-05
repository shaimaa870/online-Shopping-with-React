import axios from "axios";
import React, { Component } from "react";

import { NavLink } from "react-router-dom";
import Eachreview from "./eachreview";
import AuthService from "./Services/auth.service";

class Productreviews extends Component {
   
 

    render() {
        console.log(this.props.productreviews)

        return (
            <React.Fragment>
                <div
                    className="card  mt-2 mb-2 p-2 font-size-small item-box-blog text-left"
                    id="details"
                >
                   {this.props.productreviews.map((c,i)=> 
                      < Eachreview key={i} review={c} ratefn2={this.props.ratefn} /> 
                      
                  )}

                </div>

            </React.Fragment>)
    }
}
export default Productreviews;