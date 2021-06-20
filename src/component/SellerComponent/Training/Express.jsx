import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Form from './Form';
class Express extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div className="container text-right m-2 p-4 text-right" style={{ direction: "rtl" }}>
                  <p>اختار الأيام المتاحة للتدريب المباشر عبر الإنترنت JUMIA EXPRESS*</p>
                </div>
                {/* Selection */}
                <div className="container text-center mb-3 mt-1" >
                    <select className="p-2 rounded" style={{width:"80%"}} name="MarketplaceDay" id="MarketplaceDay">
                        <option value="Wednesday 2 June - 5:00 pm">Wednesday 2 June - 5:00 pm</option>
                        <option value="Thursday 3 June - 11:00 am">Thursday 3 June - 11:00 am</option>
                        <option value="Wednesday 9 June - 5:00 pm">Wednesday 9 June - 5:00 pm</option>
                        <option value="Thursday 10 June - 11:00 am">Thursday 10 June - 11:00 am</option>
                        <option value="Sunday 13 June - 11:00 am">Sunday 13 June - 11:00 am</option>
                        <option value="Thursday 17 June - 11:00 am">Thursday 17 June - 11:00 am</option>
                        <option value="Wednesday 23 June - 5:00 pm">Wednesday 23 June - 5:00 pm</option>
                        <option value="Thursday 24 June - 11:00 am">Thursday 24 June - 11:00 am</option>
                        <option value="Sunday 27 June - 11:00 am">Sunday 27 June - 11:00 am</option>
                    </select>
                </div>
                {/* Form */}
                <div className="">
                    <Switch>
                        <Route path="/JumiaTrain/Main/Express" component={Form} />
                    </Switch>
                </div>
            </React.Fragment>
            );
        }
    }
    export default Express;