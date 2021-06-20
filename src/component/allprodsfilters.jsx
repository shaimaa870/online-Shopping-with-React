import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SmallCard from  './smallCard'

class Allprodsfilters extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div className="container row col-12 col-md-8">
                    {this.props.prods.map((c,i)=><SmallCard key={i} cardprod={c} />)}

                </div>

            </React.Fragment>
        )}}
        export default Allprodsfilters;