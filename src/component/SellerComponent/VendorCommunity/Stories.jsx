import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
class Stories extends Component {
    state = {  }
    render() { 
        return (  
            <React.Fragment>
                <div className='row col-12 m-0 p-2 mt-3' style={{"color":"white","backgroundColor":"rgb(30, 16, 0)","height":"250px","fontWeight":"800","fontSize":"19px"}}>
                   <div className="col-12 m-0">
                        <h4 style={{"color":"#f68b1e"}}>Jumia vendor Success Story</h4>
                        <h4>Dejavu</h4>
                    </div>
                    <div className="col-12 m-0">
                        <h4 style={{"color":"#f68b1e"}}>Jumia vendor Success Story</h4>
                        <h4>Mr Joe</h4>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Stories;