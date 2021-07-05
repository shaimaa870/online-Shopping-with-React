import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
class Tricks extends Component {
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
                    <div className="container text-center">
                        <h1>Grow your sales on J6 with 9 easy tricks</h1>
                    </div>
                </div>
                {/* Before you start selling */}
                <div className='container mt-3 mb-3'>
                    <div className="row p-2 m-0">
                        {/* 1 */}
                        {/* Left */}
                        <div className="col-md-3 col-12">
                            <img src="https://3cv9ak2ajf5r17hu9d2d3jsa-wpengine.netdna-ssl.com/wp-content/uploads/2021/04/Top-sellers-in-stock-VH-Icon.png" alt="Top-sellers" width="200"/>
                        </div>
                        {/* right */}
                        <div className="col-md-9 col-12">
                            <h4>Make sure your top sellers are always in stock with the best price scenario possible -Never miss a sales chance-</h4>
                        </div>
                        {/* 2 */}
                        {/* left */}
                        <div className="col-md-3 col-12">
                            <img src="https://3cv9ak2ajf5r17hu9d2d3jsa-wpengine.netdna-ssl.com/wp-content/uploads/2021/04/Deliver-right-ontime.png" alt="Deliver" width="200"/>
                        </div>
                        {/* right */}
                        <div className="col-md-9 col-12">
                            <h4>Make sure you deliver all your orders right & on time -A happy customer will come back to buy again-.</h4>
                        </div>
                        {/* 3 */}
                        {/* left */}
                        <div className="col-md-3 col-12">
                            <img src="https://3cv9ak2ajf5r17hu9d2d3jsa-wpengine.netdna-ssl.com/wp-content/uploads/2021/04/Ask-3-questions.png" alt="questions" width="200"/>
                        </div>
                        {/* right */}
                        <div className="col-md-9 col-12">
                            <h4>Ask 3 questions when preparing a deal!</h4>
                            <ol style={{"fontSize":"13px","lineHeight":"25px"}}>
                                <li>Is anyone else selling my product?</li>
                                <li>Is my product price sensitive?</li>
                                <li>Do I have the best price or value offered for my product?</li>
                            </ol>
                        </div>
                        {/* 4 */}
                        {/* left */}
                        <div className="col-md-3 col-12">
                            <img src="https://3cv9ak2ajf5r17hu9d2d3jsa-wpengine.netdna-ssl.com/wp-content/uploads/2021/04/Right-Assortment.png" alt="Assortment" width="200"/>
                        </div>
                        {/* right */}
                        <div className="col-md-9 col-12">
                            <h4>Make sure you have the right products which should be relevant to the season or the customer.</h4>
                            <p>To know more about this follow our newsletter to get insights on customer needs, seasonality of products & to subscribe for our monthly campaigns webinar initiation.</p>
                        </div>
                        {/* 5 */}
                        {/* left */}
                        <div className="col-md-3 col-12">
                            <img src="https://3cv9ak2ajf5r17hu9d2d3jsa-wpengine.netdna-ssl.com/wp-content/uploads/2021/04/Promote-your-deals.png" alt="Promote" width="200"/>
                        </div>
                        {/* right */}
                        <div className="col-md-9 col-12">
                            <h4>Make sure you promote your products!</h4>
                            <ul style={{"fontSize":"13px","lineHeight":"25px"}}>
                                <li>Join J6’s monthly campaigns & activities through the invitation sent to you on email.</li>
                                <li>Join J6’s on-going activities such as Joint Marketing Initiative through social media & News Feed feature on APP to provide more visits for your store.</li>
                                <li>Attend our monthly campaigns webinar to know more about areas that interests the customer & running campaigns.</li>
                            </ul>
                        </div>
                        {/* 6 */}
                        {/* left */}
                        <div className="col-md-3 col-12">
                            <img src="https://3cv9ak2ajf5r17hu9d2d3jsa-wpengine.netdna-ssl.com/wp-content/uploads/2021/04/High-wave-of-sales-1.png" alt="High-wave-of-sales" width="200"/>
                        </div>
                        {/* right */}
                        <div className="col-md-9 col-12">
                            <h4>Make sure you have packaging materials buffer to not miss on on sales spikes -25% of your weekly stock of packaging material is a good buffer-</h4>
                            <p>Online shopping demand is growing everyday & demand spikes are often to happen, make sure you make the best out of them.</p>
                            <p>For J6’s packaging guidelines click <Link to="#" style={{"color":"#f68b1e","textDecoration":"none"}}>here</Link></p>
                        </div>
                          {/* 7 */}
                        {/* left */}
                        <div className="col-md-3 col-12">
                            <img src="https://3cv9ak2ajf5r17hu9d2d3jsa-wpengine.netdna-ssl.com/wp-content/uploads/2021/04/Good-Content.png" alt="Seller-Coach" width="200"/>
                        </div>
                        {/* right */}
                        <div className="col-md-9 col-12">
                            <h4>Good content is the first step towards the customer’s trust, make it representing and comprehensive about your product.</h4>
                            <p>Make sure of the following:-</p>
                            <ul style={{"fontSize":"13px","lineHeight":"25px"}}>
                                <li>Product name & brand must be correct and in both languages -AR & EN-.</li>
                                <li>Product Images, description, specifications must be 100% representing to the product physically -the more details you add the more informative the product becomes to the customer and facilitates the decision of buying-</li>
                                <li>Make sure the products you list are compliant with J6’s content guidelines</li>
                            </ul>
                        </div>
                        {/* 8 */}
                        {/* left */}
                        <div className="col-md-3 col-12">
                            <img src="https://3cv9ak2ajf5r17hu9d2d3jsa-wpengine.netdna-ssl.com/wp-content/uploads/2021/04/Seller-Coach.png" alt="Seller-Coach" width="200"/>
                        </div>
                        {/* right */}
                        <div className="col-md-9 col-12">
                            <h4>Check your Seller Coach feature on seller center <Link to="#" style={{"color":"#f68b1e","textDecoration":"none"}}>here </Link>regularly to become more autonomous with decisions related to growing your business.</h4>
                            <p>It provides you with practical and effective recommendations to increase your sales in one click for decisions on:</p>
                            <ul style={{"fontSize":"13px","lineHeight":"25px"}}>
                                <li>Pricing</li>
                                <li>Replenishment</li>
                                <li>Content</li>
                                <li>Sponsored Ads</li>
                            </ul>
                        </div>
                        {/* 9 */}
                        {/* left */}
                        <div className="col-md-3 col-12">
                            <img src="https://3cv9ak2ajf5r17hu9d2d3jsa-wpengine.netdna-ssl.com/wp-content/uploads/2021/04/Minimize-ops-300x300.png" alt="Minimize" width="200"/>
                        </div>
                        {/* right */}
                        <div className="col-md-9 col-12">
                            <h4>Maximize your performance by following these operational tips:-</h4>
                            <ul style={{"fontSize":"13px","lineHeight":"25px"}}>
                                <li>Make sure you offer the stock on seller center only if you have it physically to avoid cancellations due to Out Of Stock</li>
                                <li>Make sure the offered product information matches the physical product shipped to customer by 100% & compliant with J6’s guidelines here</li>
                                <li>Make sure to QC your items for defects, missing components & expiry date if applicable.</li>
                                <li>Do frequent inventory checks to spot out -expired, faulty, missing- Items to make sure you have a healthy inventory.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Tricks;