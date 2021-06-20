import React, { Component } from 'react';
class CallUs extends Component {
    state = {  }
    handleClose=()=>{
        this.props.history.replace('/ContactUs');
    }
    render() { 
        return (
            <React.Fragment>
                <div className="call end text-center m-0 p-3 rounded text-muted">
                    <a className="tel" href="tel:19586">19586</a><button className="close" onClick={()=>this.handleClose()}>&times;</button>
                    <p className="open">Opening hours: Sunday to Thursday 10:00 a.m. to 7:00 p.m.</p>
                </div>
            </React.Fragment>
          );
    }
}
 
export default CallUs;