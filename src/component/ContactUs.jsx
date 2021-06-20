import React, { Component } from 'react';
import '../Styles/ContactUs.css';
import CallUs from './CallUs';
import ChatUs from './ChatUs';
import { Link, Route, Switch } from 'react-router-dom';
class ContactUs extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                {/* contact us header */}
                <div className="row m-0">
                    <img alt='ContactUs' className="col-12 p-0" src="https://static.jumia.com.eg/cms/43-20/Contact-us/contactez-vous_-12.jpg" width="100%"/>
                </div>
                {/*} Sections */}
                <div className="container mt-3">
                    {/*} text paragraph  */}
                    <div className="text-center p-2">
                        <p className="paragraph p-4 rounded text-dark">
                            For your payment security DO NOT share your card details with anyone. For confirmation purposes,
                            only the first 6 numbers and last 4 numbers of the card can be shared.NEVER share your expiry or
                            CVV number as per the picture below.
                        </p>
                    </div>
                    {/*} Cards  */}
                    <div className="cards text-center">
                        <img alt="wrong" src="https://static.jumia.com.eg/cms/ramadan-21/Wrong-Card.png" />
                        <img alt="Checked" src="https://static.jumia.com.eg/cms/ramadan-21/Wrong-Card.png"/>
                    </div>
                    {/*} How ? */}
                    <div className="">
                        <h1 className="h">How can we help you ?</h1>
                    </div>
                    {/*} contact buttons */}
                    <div className="text-center">
                        <Link to='/ContactUs/ChatUs' className="chatBtn">Chat With Us</Link>
                        <Link to='/ContactUs/CallUs' className="callBtn">Call Us</Link>
                    </div>
                    <div className="">
                    <Switch>
                        <Route path='/ContactUs/CallUs' component={CallUs}/>
                        <Route path='/ContactUs/ChatUs' component={ChatUs}/>
                    </Switch>
                    </div>
                    {/*} Need help ? */}
                    <div className="">
                        <h1 className="h">Need help placing an order?</h1>
                    </div>
                    <div className="end text-center m-0 p-3 rounded text-muted">
                        <p>If you have trouble placing your order, please call us on the following number:</p>
                        <a className="tel" href="tel:15204">15204</a>
                        <p className="open">Opening hours: Sunday to Thursday 10:00 a.m. to 7:00 p.m.</p>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default ContactUs;