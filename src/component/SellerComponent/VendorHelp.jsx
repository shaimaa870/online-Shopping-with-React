import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
class VendorHelp extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                {/* Header */}
                <div className='row col-12 m-0 mt-2 p-2' style={{"backgroundColor":"#f68b1e","height":"200px","fontWeight":"800","fontSize":"19px"}}>
                    <div className="container text-center mt-5 text-white">
                        <h1>Help Center</h1>
                        <p> 
                             VendorHub
                        </p>
                    </div>
                </div>
                <div className="container bg-dark mt-4 p-0 col-md-9 col-12">
                    {/* 1 */}
                    <div className="row h3 m-0 mr-5 ml-5"><Link to="#" className="col-12 text-warning mb-2 mt-2"  style={{"textDecoration":"none"}}>Getting Started</Link></div>
                    <hr className="m-0 bg-warning mr-5 ml-5"/>
                    {/* 2 */}
                    <div className="row h3 m-0 mr-5 ml-5"><Link to="#" className="col-12 text-warning mb-2 mt-2"  style={{"textDecoration":"none"}}>JUMIA University</Link></div>
                    <hr className="m-0 bg-warning mr-5 ml-5"/>
                    {/* 3 */}
                    <div className="row h3 m-0 mr-5 ml-5"><Link to="#" className="col-12 text-warning mb-2 mt-2"  style={{"textDecoration":"none"}}>Product Listing and Content Creation</Link></div>
                    <hr className="m-0 bg-warning mr-5 ml-5"/>
                    {/* 4 */}
                    <div className="row h3 m-0 mr-5 ml-5"><Link to="#" className="col-12 text-warning mb-2 mt-2"  style={{"textDecoration":"none"}}>Better Sales performance</Link></div>
                    {/* 5 */}
                    <hr className="m-0 bg-warning mr-5 ml-5"/>
                    <div className="row h3 m-0 mr-5 ml-5"><Link to="#" className="col-12 text-warning mb-2 mt-2"  style={{"textDecoration":"none"}}>Order Management</Link></div>
                    {/* 6 */}
                    <hr className="m-0 bg-warning mr-5 ml-5"/>
                    <div className="row h3 m-0 mr-5 ml-5"><Link to="#" className="col-12 text-warning mb-2 mt-2"  style={{"textDecoration":"none"}}>All about Shipping and Fulfillment</Link></div>
                    {/* 7 */}
                    <hr className="m-0 bg-warning mr-5 ml-5"/>
                    <div className="row h3 m-0 mr-5 ml-5"><Link to="#" className="col-12 text-warning mb-2 mt-2"  style={{"textDecoration":"none"}}>Order Processing Fee</Link></div>
                    {/* 8 */}
                    <hr className="m-0 bg-warning mr-5 ml-5"/>
                    <div className="row h3 m-0 mr-5 ml-5"><Link to="#" className="col-12 text-warning mb-2 mt-2"  style={{"textDecoration":"none"}}>Smart QC (quality check)</Link></div>
                    <hr className="m-0 bg-warning mr-5 ml-5"/>
                    {/* 9 */}
                    <div className="row h3 m-0 mr-5 ml-5"><Link to="#" className="col-12 text-warning mb-2 mt-2"  style={{"textDecoration":"none"}}>JUMIA Drop-off stations & QC</Link></div>
                    <hr className="m-0 bg-warning mr-5 ml-5"/>
                    {/* 10 */}
                    <div className="row h3 m-0 mr-5 ml-5"><Link to="#" className="col-12 text-warning mb-2 mt-2"  style={{"textDecoration":"none"}}>Jumia Promotions</Link></div>
                    <hr className="m-0 bg-warning mr-5 ml-5"/>
                    {/* 11 */}
                    <div className="row h3 m-0 mr-5 ml-5"><Link to="#" className="col-12 text-warning mb-2 mt-2"  style={{"textDecoration":"none"}}>JUMIA EXPRESS</Link></div>
                    {/* 12 */}
                    <hr className="m-0 bg-warning mr-5 ml-5"/>
                    <div className="row h3 m-0 mr-5 ml-5"><Link to="#" className="col-12 text-warning mb-2 mt-2"  style={{"textDecoration":"none"}}>Commissions and Policies</Link></div>
                    {/* 13 */}
                    <hr className="m-0 bg-warning mr-5 ml-5"/>
                    <div className="row h3 m-0 mr-5 ml-5"><Link to="#" className="col-12 text-warning mb-2 mt-2"  style={{"textDecoration":"none"}}>About Payments</Link></div>
                </div>

            </React.Fragment>
         );
    }
}
 
export default VendorHelp;