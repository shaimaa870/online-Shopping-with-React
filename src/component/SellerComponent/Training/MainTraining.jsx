import React, { Component } from "react";
import {Route, Switch } from "react-router-dom";
import Marketplace from "./Marketplace";
import Express from "./Express";
import Form from './Form';
class MainTraining extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        {/*  التدريب الأساسي */}
        <div className="container text-center mb-1 mt-3" style={{ direction: "rtl" }}>
          <h2
            className="btn p-4"
            style={{
              width: "80%",
              backgroundColor: "#f68b1e",
              color: "white",
              cursor: "auto",
              fontSize: "30px",
              fontWeight: "800",
            }}
          >
            التدريب الأساسي
          </h2>
        </div>
        {/* Operation Module */}
        <div
          className="container m-2 p-4 text-right"
          style={{ direction: "rtl" }}
        >
          <p>ما هى طريقة التشغيل التى تتابعها فى جوميا (Operation Module):*</p>
        </div>
          {/* radio Buttons */}
          <div className="container text-right ">
            <label htmlFor="marketplace" className="ml-2">
              Marketplace (بضاعتك في مخزنك)
            </label>
            <input
              id="marketplace"
              name="OperationModule"
              type="radio"
              className="ml-1"
              value="marketplace"
              onChange={(e) =>
                this.props.history.replace("/JumiaTrain/Main/Marketplace")
              }
            />
            <label htmlFor="express" className="ml-2">
              Jumia Express (بضاعتك في مخزن جوميا)
            </label>
            <input
              id="express"
              name="OperationModule"
              type="radio"
              className="ml-1"
              value="express"
              onChange={(e) => {
                this.props.history.replace("/JumiaTrain/Main/Express");
              }}
            />
          </div>
            {/* Operation Module Routes */}
          <div className="">
            <Switch>
              <Route
                path="/JumiaTrain/Main/Marketplace"
                component={Marketplace}
              />
              <Route path="/JumiaTrain/Main/Express" component={Express} />
            </Switch>
          </div>
      </React.Fragment>
    );
  }
}

export default MainTraining;
