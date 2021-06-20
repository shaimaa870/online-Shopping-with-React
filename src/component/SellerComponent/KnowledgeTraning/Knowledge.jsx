import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Guide from './Guide';
import Tricks from './Tricks';
class Knowledge extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <Route component={Guide} path="/Knowledge/Guide"/>
                <Route component={Tricks} path="/Knowledge/Tricks"/>
            </React.Fragment>
         );
    }
}
 
export default Knowledge;