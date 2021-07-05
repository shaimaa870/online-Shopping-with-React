import axios from 'axios';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch,Link } from "react-router-dom";
import AuthService from '../Services/auth.service';
import Chatbody from './chatbody';
class Inbox extends Component {
  state = {
   sellers:[],
 
    text:""
  }
  getsellers=async()=>{
    axios.get("https://localhost:44340/api/ChatHubs/getallcalledseller/"+11).then(
      res=>{
        console.log(res.data)
        this.setState({sellers:res.data})
      }
    )

  }
 async componentDidMount(){
   await this.getsellers();

  }

  render() {
console.log(this.state.sellers)
    return (
      <React.Fragment>

        {/* <div className="card col-md-12" style={{ marginTop: 10, padding: 10 }}>
          <div className="card-header">
            <div className="row">
              <div className="col-md-6"> <h3>Inbox Message</h3> </div>
            </div>
          </div>
          {/*  --------------------------OpenOrders---------------------- */}
          {/* <div className="row" style={{ textAlign: 'center', marginTop: 60 }}>
            <div className="container mt-12" id="OpenOrders">
              <img src="../img/message.jpg" width="120px" height="120px" /><br /> <br />
              <div className=" form col-lg-12 ">
                <h6>You don't have any messages</h6><br />
                <p> Here you will be able to see all the messages that we send you. Stay tuned.</p>
              </div>
            </div>
          </div>
          <br />
        </div>  */}

<div className="container-fluid h-100">
  <div className="row justify-content-center h-100">
    <div className="col-md-6 col-xl-8 chat" style={{marginTop:"auto",marginBottom:"auto"}}>
      <div className="card mb-sm-3 mb-md-0 contacts_card" style={{height:"500",borderRadius:"15",backgroundColor:"rgba(0,0,0,0.4)"}}> 
       
        <div className="card-body contacts_body">
          <ui className="contacts">
           {this.state.sellers.map((s,i)=>
           <li className="active" key={i}>
             <a href={`/chat/${s.id}`}>
           <div className="d-flex bd-highlight">
           
             <div className="user_info">
               <span> {s.firstName+" "+s.lastName} 's store</span>
               
             </div>
           </div>
           </a>
           
            
            </li>)}
           
           
          </ui>
        </div>
        <div className="card-footer" />
      </div>
    </div>

  </div>
</div>

      </React.Fragment>

    );
  }
}

export default Inbox;