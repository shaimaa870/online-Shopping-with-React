import React ,{Component}from 'react';
import { Link } from "react-router-dom";
class Index extends Component {
    render(){

        return(
            <React.Fragment>
         <div className="col-md-12 " style={{marginTop: 10, padding: 10}}>
          <h3> Account Overview</h3>
          <hr />
        </div>
        <div className="col-sm-6 " style={{marginTop: 10}}>
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">ACCOUNT Details    <a href="edit.html" className="icon-block  text-warning"> <i className="fas fa-edit" /></a> </h5>
              <div className="dropdown-divider" />
              <p className="card-text" id="useraccount">{this.props.cust.firstName+' '+this.props.cust.lastName}</p>
              <p className="card-text" id="useraccount">{this.props.cust.email}</p>
              <Link to="/Account/ChangePass" className="text-warning">Change Password </Link>
            </div>
          </div>
        </div>
        <div className="col-sm-6 " style={{marginTop: 10}}>
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Address Book</h5>
              <div className="dropdown-divider" />
              <p className="card-text">Your default shipping address:</p>
              <p className="card-text">{this.props.cust.firstName+' '+this.props.cust.lastName} </p>
              <p className="card-text">{this.props.cust.address} </p>
              <a href="#" className="text-warning">Add Default Address</a>
            </div>
          </div>
        </div>
        <div className="col-sm-6" style={{marginTop: 10}}>
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">JUMIA PRIME</h5>
              <div className="dropdown-divider" />
              <p className="card-text">Jumia Prime Jumia Prime &amp; Jumia Prime Plus are loyalty programs which allow its members to benefit from free delivery on their Jumia Express and Jumia Food orders, exclusive access to promotions as well as rewards and partnerships.</p>
              <a href="#" className="btn btn-warning">Subscribe JUMIA Prime</a>
            </div>
          </div>
        </div>
        <div className="col-sm-6" style={{marginTop: 10}}>
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">JUMIA STORE CREDIT</h5>
              <div className="dropdown-divider" />
              <p className="card-text"><span> EGP </span> <span>0.00</span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6" style={{marginTop: 10, marginBottom: 20}}>
          <div className="card h-100">
            {/* <div className="card-body">
              <h5 className="card-title">NEWSLETTER PREFERENCES</h5>
              <div className="dropdown-divider" />
              <p className="card-text">You are currently not subscribed to any of You are currently not subscribed to any of our newsletters.</p>
              <a href="#" className="btn btn-warning">EDIT NEWSLetter preferences</a>
            </div> */}
          </div>
        </div>
            </React.Fragment>
        )
    }
}
export default Index;