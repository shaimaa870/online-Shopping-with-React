import React, { Component } from 'react';

class RecentlyViewed extends Component {
    state = {  }
    render() { 
        return (
            <>
             <div className="padding">
        <div className="row">
            <div className="container-fluid d-flex justify-content-center">
                <div className="col-sm-8 col-md-6" style={{marginTop:" 50px"}}>
                    <div className="card">
                        <div className="card-header">
                            <div className="row">
                                <div className="col-md-6"> <h3>RecentlyViewed</h3> </div>

                            </div>
                        </div>



{/* <!--  --------------------------OpenOrders---------------------- --> */}
<div className="row"   style={{marginTop: "60px", textAlign: "center"}}>

    <div className="container mt-12" id="OpenOrders" >
        <img  src="./img/RecentlyViewed.jpg" width="120px" height="100px"/><br/> <br/>
        <div className=" form col-lg-12 " >
           <h6><i>You haven’t saved an item yet!</i></h6><br/>
            
          <p><i>Found something you like? Tap on the heart shaped icon next 
            to the item to add it to your wishlist! All your saved items will appear here.</i></p> 
            
          
         
        </div>
      </div>

    </div> 
<br />







</div>
</div>
</div>
</div>
</div>
            </>
            );
        }
    }
     
    export default RecentlyViewed;