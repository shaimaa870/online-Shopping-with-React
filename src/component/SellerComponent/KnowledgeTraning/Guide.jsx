import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
class Guide extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                {/* Header Welcome */}
                <div className='row mt-1  m-0 alert alert-success p-2' 
                style={{
                    // "backgroundColor":"#f68b1e",
                    background:
                    "url('') fixed no-repeat",
                    // backgroundPosition: "left",
                    // backgroundRepeat: "no-repeat",
                    // backgroundAttachment: "inherit",
                    // backgroundOrigin: "border-box",
                    // backgroundClip: "border-box", 
                    // backgroundColor: "initial",
                    // backgroundSize: "contain",
                    backgroundSize: "cover",
                    // backgroundPositionX: "350px",
                    // backgroundPositionY: "10px",
                    // "height":"700px",
                    "fontWeight":"800",
                    "fontSize":"19px"
                    }}>
                    <div className="container text-center mt-5">
                        <h1>Welcome to Selling on J6</h1>
                        <p> 
                        At J6, we are convinced that the next level of buying for the customers is now on the Internet. One of our goal is to offer the widest range of products to the customers, and this is what makes sellers essential. As Africa’s number one e-commerce company, we’re always looking for ways to add value for our customers. As a J6 seller, you take part in offering those customers better selection, better prices, and a top-notch customer experience.
                        </p>
                    </div>
                </div>
                {/* Before you start selling */}
                <div className='container mt-3 mb-3'>
                    <div className="row p-2 m-0">
                        {/* 1 */}
                        {/* Left */}
                        <div className="col-md-3 col-12">
                            <h2>Before you start selling</h2>
                            <img src="https://3cv9ak2ajf5r17hu9d2d3jsa-wpengine.netdna-ssl.com/wp-content/uploads/2019/10/vendorhubicon1.png" alt="conditions" width="200"/>
                        </div>
                        {/* right */}
                        <div className="col-md-9 col-12">
                            <h2>1. Make sure you comply with our conditions:</h2>
                            <ul style={{"list-style-type": "circle"}}>
                                <li>Your products can be sold on J6.com</li>
                                <li> You have all the necessary information to create your account:
                                    <ul style={{"list-style-type": "square","fontSize":"13px","lineHeight":"25px"}}>
                                       <li>Mail address and phone number</li>
                                       <li>Details of your company (address, legal name, etc.)</li>
                                       <li>Bank account details</li>
                                       <li>To be able to deliver orders to our hub within 48 hours our hubs are located in (Cairo, Giza, Alex, Tanta) <Link to="#" style={{"color":"#f68b1e","textDecoration":"none"}}> Hubs List</Link></li>
                                       <li>If you can’t deliver orders to our hub, you can use our J6 Express service <Link to="#" style={{"color":"#f68b1e","textDecoration":"none"}}>More info here</Link></li>
                                       <li>All categories require Tax card & registration Except for (Fashion, Mobile accessories, Computer accessories) these 3 categories can use their Personal ID only</li>
                                       <li>You will be required to sign <Link to="#" style={{"color":"#f68b1e","textDecoration":"none"}}>our contract</Link> within 30 days of being live to avoid delisting your account</li>
                                       <ul style={{"list-style-type": "none"}}>
                                            <li>– The contract has to be a hard copy and delivered in the company</li>
                                            <li>– All pages need to be signed</li>
                                            <li>– If a commercial entity you’ll need both “signature and a stamp” while if individual only a signature is enough.</li>
                                            <li>– The Tax card & registration have to be the latest ones</li>
                                            <li>– The signee’s name has to be in the registration and has the right to sign.</li>
                                            <li>– The account owner or the company representative’s full quadruple name has to be written clearly without a signature form.</li>
                                            <li>– The full quadruple name has to be written at the end of every page of the contract without a signature form.</li>
                                            <li>– The signature box is the only place where a signature form is allowed.</li>
                                            <li>– Please make sure there are no signs of writing off or repairing written errors anywhere in the contract.</li>
                                       </ul>
                                       <li>Need more information? Attend our new vendor Free Training from <Link to="#" style={{"color":"#f68b1e","textDecoration":"none"}}> Here</Link></li>

                                    </ul>
                                </li>
                            </ul>
                        </div>
                        {/* 2 */}
                        {/* left */}
                        <div className="col-md-3 col-12">
                            <img src="https://3cv9ak2ajf5r17hu9d2d3jsa-wpengine.netdna-ssl.com/wp-content/uploads/2019/10/vendorhubicon2.png" alt="cost " width="200"/>
                        </div>
                        {/* right */}
                        <div className="col-md-9 col-12">
                            <h2>2. How much does it cost to sell on J6?</h2>
                            <p>The registration on J6 is free for all the vendors.</p>
                            <p>For each sale you make via our platform, you will be charged a fee depending on the delivery method chosen and the category of your products.</p>
                            <ul style={{"fontSize":"13px","lineHeight":"25px"}}>
                                <li><Link to="#" style={{"color":"#f68b1e","textDecoration":"none"}}>Processing fees</Link></li>
                                <li><Link to="#" style={{"color":"#f68b1e","textDecoration":"none"}}>Commisions</Link></li>
                                <li><Link to="#" style={{"color":"#f68b1e","textDecoration":"none"}}>J6 Express Fees</Link></li>
                            </ul>
                            <h1 style={{"textAlign":'center'}}><Link to="/Traning/Form" style={{"color":"#f68b1e","textDecoration":"none"}}>“Start selling”</Link></h1>
                        </div>
                        {/* 3 */}
                        {/* left */}
                        <div className="col-md-3 col-12">
                            <img src="https://3cv9ak2ajf5r17hu9d2d3jsa-wpengine.netdna-ssl.com/wp-content/uploads/2019/10/vendorhubicon3.png" alt="Discover" width="200"/>
                        </div>
                        {/* right */}
                        <div className="col-md-9 col-12">
                            <h2>3. Discover the Seller Center:</h2>
                            <p>When you are registered, all the management of your online store is done via the Seller Center. With this portal you have access to all the information you need to manage your sales, add products, update your product information, have an overview of actual sales, etc.It is a one-stop shop to facilitate the management of your sales account on J6.</p>
                            <h5>Below are a just few of the things you can do from Seller Center.</h5>
                            <ul style={{"fontSize":"13px","lineHeight":"25px"}}>
                                <li>Keep track of your inventory and update your listings</li>
                                <li>Keep track of orders that are in J6 network</li>
                                <li>Join the promotional campaign</li>
                                <li>Use customer metrics tools to monitor your seller performance</li>
                            </ul>
                            <h6><Link to="#" style={{"color":"#f68b1e","textDecoration":"none"}}>Learn more about the Seller Center</Link></h6>
                        </div>
                        {/* 4 */}
                        {/* left */}
                        <div className="col-md-3 col-12">
                            <img src="https://3cv9ak2ajf5r17hu9d2d3jsa-wpengine.netdna-ssl.com/wp-content/uploads/2019/10/vendorhubicon4.png" alt="products" width="200"/>
                        </div>
                        {/* right */}
                        <div className="col-md-9 col-12">
                            <h2>4. How to list products.</h2>
                            <p>Your first step to make your products available for the customers is to list them on your Seller Center account. There are different methods to use depending on the type and the quantity of products you want to offer to the shoppers.</p>
                            <ul style={{"fontSize":"13px","lineHeight":"25px"}}>
                                <li><Link to="#" style={{"color":"#f68b1e","textDecoration":"none"}}>One by one</Link></li>
                                <li><Link to="#" style={{"color":"#f68b1e","textDecoration":"none"}}>Sell yours feature</Link></li>
                                <li><Link to="#" style={{"color":"#f68b1e","textDecoration":"none"}}>J6 content team can help you list your products</Link></li>
                            </ul>
                            <p>To be put live, your products creation must comply with some guidelines to be accepted by our teams.</p>
                            <p>To make sure your products make it to the top and help you succeed your launch on J6, here are some tips to know what works best for the shoppers.</p>
                            <ul style={{"fontSize":"13px","lineHeight":"25px"}}>
                                <li>Guidelines for successful products creation and therefore a successful launch! <Link to="#" style={{"color":"#f68b1e","textDecoration":"none"}}>(Learn more about the Validation Process)</Link></li>
                                <li>The product detail page</li>
                            </ul>
                            <p>Once approved by our teams, your products will be live on <Link to="#" style={{"color":"#f68b1e","textDecoration":"none"}}>J6.com.</Link> From there, you can receive an order at any time.</p>
                        </div>
                        {/* 5 */}
                        {/* left */}
                        <div className="col-md-3 col-12">
                            <img src="https://3cv9ak2ajf5r17hu9d2d3jsa-wpengine.netdna-ssl.com/wp-content/uploads/2019/10/vendorhubicon5.png" alt="process" width="200"/>
                        </div>
                        {/* right */}
                        <div className="col-md-9 col-12">
                            <h2>5. How to process an order</h2>
                            <p>As soon as a customer orders one of your product, you have 48 hours to get your item shipped. Here are the steps to do it properly:</p>
                            <ul style={{"fontSize":"13px","lineHeight":"25px"}}>
                                <li>Check daily your Seller Center account to see if you have a new order (a mail alert is also sent to you).</li>
                                <li>Prepare your package for delivery, following our guidelines on how to properly pack your order.</li>
                            </ul>
                            <h5><Link to="#" style={{"color":"#f68b1e","textDecoration":"none"}}>Learn more about your orders</Link></h5>
                        </div>
                        {/* 6 */}
                        {/* left */}
                        <div className="col-md-3 col-12">
                            <img src="https://3cv9ak2ajf5r17hu9d2d3jsa-wpengine.netdna-ssl.com/wp-content/uploads/2019/10/vendorhubicon6.png" alt="deliver" width="200"/>
                        </div>
                        {/* right */}
                        <div className="col-md-9 col-12">
                            <h2>6. How to deliver your order</h2>
                            <p>J6 offers you two main solutions to deliver your orders:</p>
                            <ul style={{"fontSize":"13px","lineHeight":"25px"}}>
                                <li>Prepare and drop off your packages to our VDO stations.</li>
                            </ul>
                            <p>This means that you take care of the storage of your products, you are responsible for packing the orders, you bring your orders to our VDO stations and we only take care of the delivery to the customers.</p>
                            <h5><Link to="#" style={{"color":"#f68b1e","textDecoration":"none"}}>Learn more about the VDO stations</Link></h5>
                            <ul style={{"fontSize":"13px","lineHeight":"25px"}}>
                                <li>Subscribe to J6 Express service.</li>
                            </ul>
                            <p>Ship your products to J6 so that we take in charge of their inventory and make them quickly available for sale. Then, with each order, J6 packages and ships the product directly to the customer.</p>
                            <h5><Link to="#" style={{"color":"#f68b1e","textDecoration":"none"}}>Learn more about J6 Express</Link></h5>
                        </div>
                        {/* 7 */}
                        {/* left */}
                        <div className="col-md-3 col-12">
                            <img src="https://3cv9ak2ajf5r17hu9d2d3jsa-wpengine.netdna-ssl.com/wp-content/uploads/2019/10/vendorhubicon7.png" alt="paid" width="200"/>
                        </div>
                        {/* right */}
                        <div className="col-md-9 col-12">
                            <h2>7. How do you get paid?</h2>
                            <p>We deposit payment into your bank account at regular intervals and notifies you that your payment has been sent.</p>
                            <h5><Link to="#" style={{"color":"#f68b1e","textDecoration":"none"}}>Learn more on how to get paid</Link></h5>
                        </div>
                    </div>
                    <div className="row col-12">
                        <ul style={{"fontSize":"18px","lineHeight":"25px"}}>
                            <li>Need more explanations on your sales experience on J6? <Link to="#" style={{"color":"#f68b1e","textDecoration":"none"}}>Book a training for new vendors here</Link></li>
                            <li><Link to="#" style={{"color":"#f68b1e","textDecoration":"none"}}>Discover the opportunities to grow your sales</Link></li>

                        </ul>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Guide;