import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
class BookTraining extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                {/* Header */}
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
                    }}>                    <div className="container text-center">
                        <h1>Book your Training</h1>
                        <p> 
                            Bringing the training one step closer to you!
                        </p>
                    </div>
                </div>
                <div className="container mt-3 mb-3">
                    <div className="row pt-2 m-2" style={{"fontSize":"15px","lineHeight":"25px"}}>
                        <div className="col-12 m-2">
                            <h4>J6 offers you basic and advaced trainings so you can manage your online store effectively.</h4>
                            <p>In the Basic training you will learn how to add products correctly, and how to manage your orders effectively.</p>
                            <p>J6 also brings the training closer to you by offering the basic training at 3 different locations:Nasr City - Dokki (Mohandiseen) - Webinar</p>
                            <p>To know the detailed address for the selected training click <Link to="#" style={{"color":"#f68b1e","textDecoration":"none"}}>here.</Link></p>
                      </div>
                    </div>
                    <div className="row text-center m-0 mb-1 p-4">
                        <img className="col-12" src="https://3cv9ak2ajf5r17hu9d2d3jsa-wpengine.netdna-ssl.com/wp-content/uploads/2021/05/June-SCH.png" alt="June-SCH" />
                    </div>
                    <div className="text-center m-0 mb-2">
                        <Link to="/JumiaTrain" className="btn p-3 m-0" style={{"backgroundColor":"#f68b1e","color":"white","textDecoration":"none"}}>Book your training now!</Link>
                    </div>
                </div>
                
            </React.Fragment>
         );
    }
}
 
export default BookTraining;