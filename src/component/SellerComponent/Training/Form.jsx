import React, { Component } from 'react';
import Joi from "joi-browser";
class Form extends Component {
    // state = {  }
    state = {
        name: "",
        marketName: "",
        phone: "",
        email: "",
        errors: {},
      };
    
      schema = {
        name: Joi.string().required().trim(),
        marketName: Joi.string().required().trim(),
        phone: Joi.string().max(11).min(11).trim(),
        email: Joi.string().email().required().trim(),
      };
    
      handleSubmit = (e) => {
        e.preventDefault();
    
        const errors = this.validate();
    
        if (errors) return;
    
        //Call Backend
        console.log("submit");
      };
    
      validate = () => {
        const errors = {};
        //Clone State
        const state = { ...this.state };
        delete state.errors;
        const res = Joi.validate(state, this.schema, { abortEarly: false });
        if (res.error === null) {
          this.setState({ errors: {} });
          return null;
        }
    
        for (const error of res.error.details) {
          errors[error.path] = error.message;
        }
    
        //Set State
        this.setState({ errors });
        return errors;
      };
    
      handleChange = (e) => {
        //Clone
        let state = { ...this.state };
        //Edit
        state[e.currentTarget.name] = e.currentTarget.value;
        //Set state
        this.setState(state);
        console.log("s");
      };
    
    render() { 
        return ( 
            <React.Fragment>
 {/* بيانات متجرك */}
 <div className="container text-center mb-3 mt-1" style={{ direction: "rtl" }}>
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
            بيانات متجرك
          </h2>
        </div>
        <div className="container text-right mb-3 mt-1">
            <form className="row g-3" onSubmit={this.handleSubmit}>
                <div className="col-md-6 col-12">
                    <div className="form-outline">
                    <label htmlFor="validationServer01" className="form-label">الاسم*</label>
                    <input
                        name="name"
                        type="text"
                        className="form-control"
                        id="validationServer01"
                        value={this.state.name}
                        onChange={this.handleChange}
                        autoFocus
                    />
                    {this.state.errors.name && (
                    <div className="alert alert-danger">
                        {this.state.errors.name}
                    </div>
                    )}
                    </div>
                </div>
                <div className="col-md-6 col-12">
                    <div className="form-outline">
                    <label htmlFor="validationServer02" className="form-label">اسم متجرك*</label>
                    <input
                         name="marketName"
                        type="text"
                        className="form-control"
                        id="validationServer02"
                        value={this.state.marketName}
                        onChange={this.handleChange}
                    />
                    {this.state.errors.marketName && (
                    <div className="alert alert-danger">
                        {this.state.errors.marketName}
                    </div>
                    )}
                    </div>
                </div>
                <div className="col-md-6 col-12">
                    <div className="form-outline">
                    <label htmlFor="validationServer03" className="form-label">البريد الإلكتروني*</label>
                    <input
                        name="email"
                        type="email"
                        className="form-control"
                        id="validationServer03"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    {this.state.errors.email && (
                    <div className="alert alert-danger">
                        {this.state.errors.email}
                    </div>
                    )}
                    </div>
                </div>
                <div className="col-md-6 col-12">
                    <div className="form-outline">
                    <label htmlFor="validationServer04" className="form-label">(مثال: 01090119556)رقم الموبيل*</label>
                    <input
                        name="phone"
                        type="tel"
                        pattern="^[0]{1}[1]{1}([0]{1}|[2]{1}|[1]{1}|[5]{1})[0-9]{8}$"
                        maxLength="11"
                        minLength="11"
                        className="form-control"
                        id="validationServer04"
                        value={this.state.phone}
                        onChange={this.handleChange}
                    />
                    {this.state.errors.phone && (
                    <div className="alert alert-danger">
                        {this.state.errors.phone}
                    </div>
                    )}
                    </div>
                </div>
                <div className="col-12 text-center mt-4">
                    <button className="btn p-2"
                    style={{
                    width: "30%",
                    backgroundColor: "#f68b1e",
                    color: "white",
                    fontSize: "30px",
                    fontWeight: "800",
                    }} 
                    type="submit">احجز الأن</button>
                </div>
            </form>
        </div>

            </React.Fragment>
            );
        }
    }
    export default Form;