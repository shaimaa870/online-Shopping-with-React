import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import {SiGooglestreetview} from 'react-icons/si'
import { IconContext } from 'react-icons/lib';
class Stations extends Component {
    state = {  }
    render() { 
        return (  
            <React.Fragment>
                <IconContext.Provider value={{color:"lightgreen", size:"100"}}>
                    <div className='row col-12 m-0 mt-2 p-2' style={{"fontWeight":"800","fontSize":"19px"}}>
                        <div className="container text-center col-12 col-md-8 mt-4">
                            <h1 style={{"color":"#f68b1e"}}>Drop-off Stations</h1>
                            <p> 
                            Jumia is always finding ways to develop and provide better services for our partners, and this is why we have several drop-off stations, so that you can drop off your orders easily at the hub closest to you. Choose the drop-off station nearest to your store, to deliver your orders soonest by contacting our seller support.                        </p>
                        </div>
                        <div className="container text-center col-12 col-md-4 mt-4">
                            <img src="https://3cv9ak2ajf5r17hu9d2d3jsa-wpengine.netdna-ssl.com/wp-content/uploads/2017/04/warehouse_Location-500x500.png" alt="Locations" width="250"/>
                        </div>
                    </div>
                    <div className='container m-0 mt-2 p-2' style={{"fontWeight":"800","fontSize":"19px"}}>
                       {/* 1 */}
                        <div className="container row m-0 col-12 mt-4">
                            <h4 className="col-12 mt-4">GPS Location</h4>
                            <div className="col-md-2 col-12">
                               <Link target="_blank" to={{pathname:"https://www.google.com/maps/place/30%C2%B000'06.0%22N+31%C2%B026'41.2%22E/@30.0016537,31.4425859,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d30.0016537!4d31.4447746?hl=en&shorturl=1"}}> <SiGooglestreetview/></Link>
                            </div>
                            <div className="col-md-10 col-12">
                                <h4 style={{"textDecoration":"underline","color":"#f68b1e"}}>New Cairo VDO-Station – Advance:</h4>
                                <h5>Building 325 – el Narges – in front of Masjid al Mostafa  – Near Sharbatly square.</h5>
                                <h5>Working hours: from 9:00am till 5:00pm – Except Fridays</h5>
                                <p style={{color:"red"}}>“Sells packaging materials”</p>
                            </div>
                        </div> 
                         {/* 2 */}
                         <div className="container row m-0 col-12 mt-4">
                            <div className="col-md-2 col-12">
                               <Link target="_blank" to={{pathname:"https://www.google.com/maps/place/31%C2%B011'54.7%22N+29%C2%B055'04.2%22E/@31.198513,29.9156504,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d31.198513!4d29.9178391?hl=en&shorturl=1"}}> <SiGooglestreetview/></Link>
                            </div>
                            <div className="col-md-10 col-12">
                                <h4 style={{"textDecoration":"underline","color":"#f68b1e"}}>Alexandria  drop-off station – EG – SMSA – Alex VDO-Station:</h4>
                                <h5>Mohammed Masoud, Bab Sharqi WA Wabour Al Meyah, Qism Bab Sharqi, Alexandria Governorate.</h5>
                                <h5>Hub Leader: Sheeren – 201000182296</h5>
                                <p>Working hours: from 9:00am till 5:00pm – Except Fridays</p>
                            </div>
                        </div> 
                        {/* 3 */}
                        <div className="container row m-0 col-12 mt-4">
                            <div className="col-md-2 col-12">
                               <Link target="_blank" to={{pathname:"https://www.google.com/maps/place/30%C2%B006'41.7%22N+31%C2%B020'25.8%22E/@30.1115833,31.3383113,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d30.1115913!4d31.3404865?hl=en&shorturl=1&shorturl=1"}}> <SiGooglestreetview/></Link>
                            </div>
                            <div className="col-md-10 col-12">
                                <h4 style={{"textDecoration":"underline","color":"#f68b1e"}}>Tanta drop-off station – EG – FDS – Tanta VDO-Station: </h4>
                                <h5>3 Hazem Borolosy st. Moahda street Tanta Qism 2, Tanta, Gharbia Governorate</h5>
                                <h5>Hub Leader: Tamer- 201000339499 – Land Line: 0403592648</h5>
                                <p>Working hours: from 9:00am till 5:00pm – Except Fridays</p>
                                <p style={{color:"red"}}>“Sells packaging materials”</p>
                            </div>
                        </div> 
                    </div>
                </IconContext.Provider>
            </React.Fragment>
        );
    }
}
 
export default Stations;