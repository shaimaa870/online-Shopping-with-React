import React, { Component } from "react";
import Joi from "joi-browser";
class ClaimForm extends Component {
  // state = {  }
  state = {
    name: "",
    email: "",
    file:"",
    returns:"",
    errors: {},
  };

  schema = {
    name: Joi.string().required().trim(),
    email: Joi.string().email().required().trim(),
    returns:Joi.string().required(),
    file:Joi.string(),
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
    console.log(e.currentTarget.value);
  };

  removeFile=()=>{
    let state = { ...this.state };
    state.file="";
    this.setState(state);
    console.log(this.state.file);
  }

  render() {
    return (
      <React.Fragment>
        <div className="row m-0  text-center bg-dark">
          {/* image */}
          <div className="col-md-4 col-12 offset-md-4 bg-white mt-2 rounded">
            <img
              src="https://s3.amazonaws.com/files.formstack.com/public/487272_tmpl_head_5abca5963d7c8.jpg"
              width="300"
            />
          </div>
          {/* الاستمارة */}
          <div
            className="col-md-8 offset-md-2 col-12 mt-2 p-3 mb-2"
            style={{ border: "6px solid black" ,backgroundColor:"lightgoldenrodyellow"}}
          >
            {/* الشروط والمعلومات */}
            <h4>إستمارة التواصل مع مركز دعم البائع</h4>
            <h4>Jumia Vendor Contact Form</h4>
            <div className="text-right" style={{ direction: "rtl" }}>
              <p>
                شريكنا العزيز, يرجى استخدام هذه الإستمارة لتقديم أي مشكلة تواجهك
                على متجرك الإلكتروني وقم بإختيار سبب التواصل بدقة وكتابة جميع
                التفاصيل في التعليقات الإضافية.
              </p>
              <p>
                وفي حالة أن المشكلة في المرتجعات، يرجى تزويدنا بصور/ فيديو موضحا
                حالة المنتج، مواد التغليف الخاصة به وملصق الأمان.وإذا كنت تواجه
                مشكلة في العديد من الطلبات المرتجعة فإننا ننصحك برفع شكوى واحدة
                بملف Excel. به جميع مرتجعاتك +جميع الصور الخاصة بتلك المرتجعات
                مع مراعاة أن اسم كل صورة يكون برقم الطلب الخاص بها. كلما كانت
                شكواك أكثر تفصيلا ووضوحا كلما استغرقنا وقت أقل في حلها
              </p>
            </div>
            <div>
              <p>
                Dear Jumia partner ,please use this form to raise any inquiries
                or claims related to your shop, please choose the contact reason
                carefully and write the details in the free comment section.
              </p>
              <p>
                In case your issue is related to returns, kindly provide us with
                photos/videos showing the product condition, external packaging
                material, and seal number.
              </p>
              <p>
                And if you are facing any issue with multiple returned orders,
                we recommend to Raise one claim using an Excel sheet including
                all your returned orders+Photos/videos showing the products'
                condition and keep in mind naming each photo with its order
                number.
              </p>
              <p>
                .The more detailed your claim submission is, the less time will
                be required to resolve it
              </p>
            </div>
            {/* Form */}
            <div
              className="container text-right mb-3 mt-1"
              style={{ direction: "rtl" }}
            >
              <form className="row" onSubmit={this.handleSubmit} style={{ direction: "ltr" }}>
                {/* بيانات البائع - Seller Details */}
                <div className="col-12 mb-2">
                  <h4 className="text-danger text-center">
                    بيانات البائع - Seller Details
                  </h4>
                </div>
                <div className="col-md-6 col-12">
                  <div className="form-group">
                    <input
                      name="name"
                      type="text"
                      className="form-control"
                      id="validationServer01"
                      value={this.state.name}
                      onChange={this.handleChange}
                      autoFocus
                      placeholder="Store Name"
                    />
                    {this.state.errors.name && (
                      <div className="alert alert-danger">
                        {this.state.errors.name}
                      </div>
                    )}
                    <label
                      htmlFor="validationServer01"
                      className="form-label"
                      style={{ fontSize: "13px" }}
                    >
                      اسم المتجر - Store Name*
                    </label>
                  </div>
                </div>

                <div className="col-md-6 col-12">
                  <div className="form-group">
                    <input
                      name="email"
                      type="email"
                      className="form-control"
                      id="validationServer02"
                      value={this.state.email}
                      onChange={this.handleChange}
                      placeholder="Email Address"
                    />
                    {this.state.errors.email && (
                      <div className="alert alert-danger">
                        {this.state.errors.email}
                      </div>
                    )}
                    <label
                      htmlFor="validationServer02"
                      className="form-label"
                      style={{ fontSize: "13px" }}
                    >
                      عنوان البريد الإلكتروني للمتجر الإلكتروني - Seller Center
                      Email Address*
                    </label>
                  </div>
                </div>
                 {/* Language Selection */}
                 <div className="container mb-3 mt-1 text-left" >
                 <label
                      htmlFor="validationServer02"
                      className="form-label col-12"
                      style={{ fontSize: "13px" }}
                    >
                        لغة - Language*
                    </label>
                    <select className="p-2 rounded" style={{width:"100%"}} name="language" id="language">
                        <option value="Arabic">العربية</option>
                        <option value="English">English</option>
                    </select>
                </div>
                {/* نوع الشكوى */}
                <div className="col-12">
                  <h4 className="text-danger text-center">نوع الشكوى</h4>
                </div>
                {/* نوع الشكوي */}
                <div className="container mb-3 mt-1 text-left" >
                 <label
                      htmlFor="validationServer02"
                      className="form-label col-12"
                      style={{ fontSize: "13px" }}
                    >
                        نوع الشكوى*
                    </label>
                    <select className="p-2 rounded" style={{width:"100%"}} name="complaining" id="complaining">
                        <option value="My product returns">المرتجعات</option>
                        <option value="My account statement">كشف الحساب الخاص بي</option>
                        <option value="My orders and packaging material">الطلبات ومواد التغليف</option>
                        <option value="My shop and its performance">أداء متجري مع جوميا</option>
                        <option value="My online products and brand">المنتجات وإنشاء الماركة</option>
                        <option value="My account limitations and penalties">تحديد الطلبات والغرامات</option>
                        <option value="My Seller Center account">المتجر الإلكتروني الخاص بي</option>
                        <option value="My extra opportunities: Jumia paying services">خدمات جوميا المدفوعة</option>
                        <option value="My experience at the hub">تجربتي في مركز التسليم</option>
                        <option value="My start on Jumia and training options">تفعيل الحساب وخيارات التدريب</option>
                    </select>
                </div>
                {/* المرتجعات*/}
                <div className="col-12">
                  <h4 className="text-danger text-center">المرتجعات</h4>
                </div>

                {/* Radio Buttons */}
                <div style={{ direction:"ltr" }} className="container mb-3 mt-1 text-left" >
                    <fieldset
                    className="col-12" role="group" aria-labelledby="fsLegend79064181" id="label79064181">
                        <legend style={{ fontSize: "16px" }} id="fsLegend79064181" className="">
                            <span>المرتجعات*</span>
                        </legend>
                        <label className="col-12" htmlFor="r1"> 
                        <input type="radio" id="r1" name="returns" onChange={this.handleChange} value="Damaged returns" className="mr-2" aria-required="true"/>
                        مرتجعات تالفة
                        </label>
                        <label className="col-12" htmlFor="r2"> 
                        <input type="radio" id="r2" name="returns" onChange={this.handleChange} value="Late return" className="mr-2" aria-required="true"/>
                        تأخير في المرتجعات
                        </label>
                        <label className="col-12" htmlFor="r3"> 
                        <input type="radio" id="r3" name="returns" onChange={this.handleChange} value="Wrong item" className="mr-2" aria-required="true"/>
                        مرتجع خاطئ
                        </label>
                        <label className="col-12" htmlFor="r4"> 
                        <input type="radio" id="r4" name="returns" onChange={this.handleChange} value="Return request" className="mr-2" aria-required="true"/>
                        طلب مرتجع
                        </label>
                        <label className="col-12" htmlFor="r5"> 
                        <input type="radio" id="r5" name="returns" onChange={this.handleChange} value="Forfeiture" className="mr-2" aria-required="true"/>
                        إعدام مرتجع
                        </label>
                        <label className="col-12" htmlFor="r6"> 
                        <input type="radio" id="r6" name="returns" onChange={this.handleChange} value="Proof of return" className="mr-2" aria-required="true"/>
                        إيصال إستلام مرتجع
                        </label>
                        <label className="col-12" htmlFor="r7"> 
                        <input type="radio" id="r7" name="returns" onChange={this.handleChange} value="My Seller ID" className="mr-2" aria-required="true"/>
                        رقم تعريف البائع
                        </label>
                    </fieldset>
                    {this.state.errors.returns && (
                      <div className="alert alert-danger">
                        {this.state.errors.returns}
                      </div>
                    )}

                    {/* Routes here */}


                    {/* المستندات المطلوبة */}
                    <div style={{ direction:"ltr" }} className="container mb-3 mt-1 text-left">
                        <label className="col-12"> 
                        المستندات المطلوبة
                        </label>
                        <input value={this.state.email}
                        onChange={this.handleChange} 
                        className="m-2 btn btn-danger"
                            type="button"
                            value="Remove File"
                            onClick={this.removeFile}
                             />
                        <input type="file" name="file" onChange={this.handleChange} value={this.state.file} className=" mr-2"/>
                        {this.state.errors.file && (
                      <div className="alert alert-danger">
                        {this.state.errors.file}
                      </div>
                    )}
                    </div>
                    <p style={{ direction:"rtl",fontSize:"13px" }} className="col-md-6 col-12">في حالة أنك تريد رفع مستندات متعددة برجاء وضعهم في ملف  (Zip file)مدمج ورفعهم</p>

                </div>

                {/* Submit */}
                <div className="col-12 text-center mt-4">
                  <button
                    className="btn p-2"
                    style={{
                      width: "20%",
                      backgroundColor:"lightgreen",
                      color: "black",
                      fontSize: "20px",
                      fontWeight: "600",
                    }}
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ClaimForm;
