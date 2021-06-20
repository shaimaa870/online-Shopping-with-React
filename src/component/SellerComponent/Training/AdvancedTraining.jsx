import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Form from './Form';
class AdvancedTraining extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div className="container text-center" style={{"direction":"rtl"}}>
                    <h2 className="btn p-4" style={{"width":"80%","backgroundColor":"#f68b1e","color":"white","cursor":"auto","fontSize":"30px","fontWeight":"800"}} >التدريب المتقدم</h2>
                </div>
                {/* اختر التدريب */}
                <div
                className="container m-2 p-4 text-right"
                style={{ direction: "rtl" }}
                >
                    <p>اختار التدريب*</p>
                </div>
          {/* radio Buttons */}
          <div className="container text-right ">
            <label htmlFor="WorkShop" className="ml-2">
            Content Work Shop- تدريب عملى عن إنشاء منتجاتك بشكل مجمع
            </label>
            <input
              id="WorkShop"
              name="advancedTrain"
              type="radio"
              className="ml-1"
              value="WorkShop"
              onChange={(e) =>
                this.props.history.replace("/JumiaTrain/Advanced")
              }
            />
            <label htmlFor="IncreaseSales" className="ml-2">
            How to increase your sales- كيفية زيادة مبيعاتك
            </label>
            <input
              id="IncreaseSales"
              name="advancedTrain"
              type="radio"
              className="ml-1"
              value="IncreaseSales"
              onChange={(e) => {
                this.props.history.replace("/JumiaTrain/Advanced");
              }}
            />
          </div>
          <div className="container text-right mb-4" style={{fontSize:"11px",color:"red"}}>
          *يجب حضور التدريب الأساسي قبل حضور التدريب المتقدم*
          </div>
            {/* Form */}
            <div className="">
                <Switch>
                    <Route path="/JumiaTrain/Advanced" component={Form} />
                </Switch>
            </div>
            </React.Fragment>
        );
    }
}
                 
export default AdvancedTraining;