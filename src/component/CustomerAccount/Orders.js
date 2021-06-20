import React,{Component} from 'react'
import { Link, Route ,BrowserRouter as Router,Switch} from 'react-router-dom';
import Closed from './ClosedOrders';
import Opened from './OpenedOrders';
class Orders extends Component{
    render(){
        return(
            <React.Fragment>
<div className="col-sm-8 col-md-12" style={{marginTop: 10}}>
  <div className="card">
    <div className="card-header">
      <div className="row">
        <div className="col-md-6"> <h3>Order</h3> </div>
      </div>
    </div>
    <nav className="navbar navbar-expand ">
      <div className="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent" style={{textAlign: 'center'}}>
        <ul className="navbar-nav text-right">
       <Router>
          <li className="nav-item active">
              
            <a className="nav-link text-warning" href="/Account/Orders/Opened">Open Orders (0)</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link text-warning" href="/Account/Orders/Closed">Closed Orders (0)</a>
          </li>
          </Router>
        </ul>
      </div>
    </nav>
    
    <div className="row" style={{textAlign: 'center', marginTop: 60}}>

     <Router>
         <Switch>
             <Opened path="/Account/Orders/Opened"/>
             <Closed path="/Account/Orders/Closed"/>
         </Switch>
     </Router>
    </div> 
  
  
  </div>
</div>

            </React.Fragment>)}}
            export default Orders;