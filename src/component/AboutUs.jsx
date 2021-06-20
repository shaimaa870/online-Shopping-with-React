import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../Styles/AboutUs.css";
import {GiBullseye} from 'react-icons/gi'
import {FaHeadset, FaPercent, FaTags} from 'react-icons/fa'
class AboutUs extends Component {
    state = {  }
    render() {
        return (
            <React.Fragment>
                 <div className="container text-center">
                    {/* top */}
                        <div className="top mb-4">
                            <h1 className="">About us</h1>
                            <div className="p-2 links text-muted">
                                <Link to="#">Our Vision</Link>|
                                <Link to="#">Jumia Today</Link>|
                                <Link to="#">Our History</Link>
                            </div>
                        {/* youtube */}
                            <div className="vedio">
                                <iframe title="AboutUs" width="100%" height="500" src="https://www.youtube.com/embed/aRUtFc_Z4OQ?">
                                </iframe>
                            </div>
                        </div>
                    {/* image section */}
                        <div className="image">
                            <img width="100%" src="https://eg.jumia.is/cms/content-pages/about/KE_W19_LP_About_Us_01.jpg" alt="aboutUs"/>
                            <div className="txt">
                                <h6 className="h6">Our Vision</h6>
                                <p style={{'fontSize':'70%','width':'100%'}}>We aim at building the most beloved and trusted shopping destination for Africans</p>
                            </div>
                        </div>
                    {/* icons section */}
                        <div className="row col-12 mt-3 m-0 mb-5 bg-white">
                            <div className="col-3" >
                             <FaPercent size='60' className="p-2 mt-2 mb-1 text-warning" style={{'border':'2px solid darkgoldenrod','borderRadius':' 50%'}}/>
                                <p className="font-weight-bolder" style={{'fontSize': 'large'}}>Providing 100% <span className="d-block text-warning" > Authentic</span>Products</p>
                            </div>
                            <div className="col-3">
                                <FaTags size='60' className="p-2 mt-2 mb-1 text-warning" style={{'border':'2px solid darkgoldenrod','borderRadius':' 50%'}}/> 
                                <p className="font-weight-bolder" style={{'fontSize': 'large'}}>With the<span className="d-block text-warning"> Best Price</span>in Egypt</p>
                            </div>
                            <div className="col-3">
                              <GiBullseye size='60' className="p-2 mt-2 mb-1 text-warning" style={{'border':'2px solid darkgoldenrod','borderRadius':' 50%'}}/>
                                <p className="font-weight-bolder" style={{'fontSize': 'large'}}>Offering the most <span className="d-block text-warning"> Convenient</span>Shopping</p>
                            </div>
                            <div className="col-3">
                                <FaHeadset size='60' className="p-2 mt-2 mb-1 text-warning" style={{'border':'2px solid darkgoldenrod','borderRadius':' 50%'}}/>
                                <p className="font-weight-bolder" style={{'fontSize': 'large'}}>Assisting You With the <span className="d-block text-warning"> Best Service</span>in Egypt</p>
                            </div>
                        </div>
                    {/* Jumia Today */}
                        {/* <div className="mt-5 mb-5 history">
                            <div className="ihistory mb-4" >
                                <i className="fa fa-hourglass-half fa-4x p-4  text-warning" style={{'border':'2px solid darkgoldenrod','borderRadius':' 50%'}}></i>
                                <h4 className="text-warning">Jumia Today</h4>
                                In a Nutshell
                            </div>
                            <div className="m-5 row" style={{"height":"70px"}}></div>
                            <div className="list row m-5 container mt-5 text-dark">
                                <div className="today1-bg">
                                </div>
                                <div className="today2-bg">
                                </div>
                            </div>
                        </div>*/}
                   {/* history section  */}
                        <div className="text-warning mt-5 history">
                            <div className="ihistory mb-4" >
                                <i className="fa fa-history fa-4x p-4  text-warning" style={{'border':'2px solid darkgoldenrod','borderRadius':' 50%'}}></i>
                                <h4>History</h4>
                            </div>
                            <div className="m-5 row" style={{"height":"50px"}}></div>
                            <div className="list row m-0 mt-5 text-left text-dark">
                                <div className="col-6">
                                    <ul>
                                        <li>
                                            Jumia, Egypt's no. 1 online mall was established in July 2012 with the aim and vision to become the one-stop shop in Egypt with implementation of best practices both online and offline
                                        </li>
                                        <li>
                                            Jumia is the largest online mall store in Egypt.
                                        </li>
                                        <li>
                                            At inception we did an average delivery time of a week, today we do, on average, delivery in 1-5 days.
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-6">
                                    <ul>
                                        <li>
                                            Initially starting with 3 employees, Jumia presently has a staff strength of 350 young and entrepreneurial Egyptians.
                                        </li>
                                        <li>
                                            Deliveries to all cities in Egypt.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 mt-5 mb-2">
                            <Link to="/" className="btn text-white" style={{"backgroundColor": "orange","marginRight": "50px"}}>Shop Now</Link>
                            <Link to="/Knowledge/Guide" className="btn text-white" style={{"backgroundColor": "orange","marginRight": "50px"}} >Sell on Jumia</Link>
                            <Link to="" className="btn text-white" style={{"backgroundColor": "orange"}}>Affiliate Partner</Link>
                        </div>
                    </div>
            </React.Fragment>
           
         );
    }
}
 
export default AboutUs;