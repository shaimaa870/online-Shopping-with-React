import React, { Component } from "react";
import {Route, Switch } from "react-router-dom";
import MainTraining from "./MainTraining";
import AdvancedTraining from "./AdvancedTraining";
class JumiaTrain extends Component {
  state = {};

  render() {
    const { selectedOption } = this.state;
    const { history } = this.props;
    return (
      <React.Fragment>
        {/* image */}
        <div className="container text-center mt-3">
          <img
            src="https://s3.amazonaws.com/files.formstack.com/public/707414/481675_tmpl_head_5db32e6adf2b4."
            width="300"
          />
        </div>
        {/* header */}
        <div className="m-4 p-4 text-right" style={{ direction: "rtl" }}>
          <h5>
            أهلاً بك في مركز جوميا التدريبي، هدفنا الرئيسي هو تنمية تجارتك في
            جوميا لأننا مؤمنين إن نجاحك هو مؤشر على نجاحنا.
          </h5>
          <p>
            ولأننا مهتمين بتوضيح كل شيء يخص البيع على جوميا، خصصنا تدريبات
            لتنمية تجارتك ومعرفة كيفية استقبال طلباتك وإدارتها من المتجر
            الإلكتروني بالإضافة إلى تدريبات أخرى لتنمية مهاراتك و تدريبات جوميا
            هي:
          </p>
          <p>
            <span style={{ color: "#f68b1e" }}>التدريب الأساسي</span>: و بكون
            مدة التدريب ساعتين و نصف بنقوم فيه بتعريف كل أدوات البيع على جوميا
            مثل موقع المتجر الإلكتروني لضمان بداية جيدة في بيع منتجاتك ويشمل:
          </p>
          <ul>
            <li>مقدمة عن طريقة البيع على جوميا وكيفية البيع عليها.</li>
            <li>شرح كامل لمتجرك الإلكتروني Seller Center.</li>
            <li>كيفية إنشاء وعرض منتجاتك على موقع جوميا.</li>
            <li>كيفية إدارة وشحن طلباتك.</li>
          </ul>
          <p>
            <span style={{ color: "#f68b1e" }}>التدريب المتقدم:</span>هنقوم
            بتوضيح طرق متقدمة لتحسين مبيعاتك بطريقة أفضل بحيث يحتوي على:
          </p>
          <ul>
            <li>
              كيفية زيادة مبيعاتك: هنقوم بالتركيز على أهم الطرق للوصول لأعلى
              المبيعات وظهور منتجاتك بشكل أفضل على موقعنا.
            </li>
            <li>
              تدريب عملي عن إنشاء منتجاتك بشكل مجمع: هنقولك على خطوات تحميل
              منتجاتك بشكل مجمع وكيفية تعديل الأسعار والمخزون وكيفية كتابة محتوى
              المنتجات بشكل أفضل.
            </li>
          </ul>
        </div>
        {/* اختر نوع التدريب */}
        <div className="container text-center mb-3" style={{ direction: "rtl" }}>
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
            اختار نوع التدريب
          </h2>
        </div>
        {/* radio Buttons */}
        <div className="container text-right">
          <label htmlFor="advanced" className="ml-2">
            التدريب المتقدم
          </label>
          <input
            id="advanced"
            name="TrainType"
            type="radio"
            className="ml-1"
            value="advanced"
            onChange={(e) => this.props.history.replace("/JumiaTrain/Advanced")}
          />
          <label htmlFor="main" className="ml-2">
            التدريب الأساسي
          </label>
          <input
            id="main"
            name="TrainType"
            type="radio"
            className="ml-1"
            value="main"
            onChange={(e) => {this.props.history.replace("/JumiaTrain/main")}}
          />
        </div>
        {/* Trainining Routes */}
        <div className="">
          <Switch>
            <Route path="/JumiaTrain/Main" component={MainTraining} />
            <Route path="/JumiaTrain/Advanced" component={AdvancedTraining} />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default JumiaTrain;
